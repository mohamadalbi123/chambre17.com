// Playback regression checks; no browser policy is disabled and no network is used.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = await readFile(new URL('../assets/site.js', import.meta.url), 'utf8');
const functions = source.slice(source.indexOf('  var heroVideoSources ='), source.indexOf('  function applyLanguage('));
const start = source.indexOf('  var heroVideo = document.querySelector', source.indexOf('  var prefersReducedMotion'));
const listeners = source.slice(start, source.indexOf('  var revealItems =', start));

function browser({ mobile = false, currentSrc = '', blocked = false } = {}) {
  const attributes = new Map([
    ['data-desktop-src', '/assets/optimized/en-desktop.mp4?v=desktop'],
    ['data-mobile-src', '/assets/optimized/en-mobile.mp4?v=mobile'],
    ['data-desktop-poster', '/assets/optimized/en-desktop.webp'],
    ['data-mobile-poster', '/assets/optimized/en-mobile.webp']
  ]);
  const events = new Map(), gestures = new Map(), classes = new Set();
  const button = { hidden: true, addEventListener: (event, callback) => gestures.set('button:' + event, callback) };
  let loads = 0, plays = 0;
  const video = {
    currentSrc, paused: true, readyState: 4, error: null,
    getAttribute: name => attributes.get(name) || null,
    setAttribute: (name, value) => attributes.set(name, value),
    hasAttribute: name => attributes.has(name),
    addEventListener: (name, fn) => { if (!events.has(name)) events.set(name, []); events.get(name).push(fn); },
    load() { loads++; this.currentSrc = new URL(this.src, 'https://www.chambre17.com/en/').href; },
    play() { plays++; return blocked ? Promise.reject(Object.assign(new Error('Autoplay denied'), {name:'NotAllowedError'})) : Promise.resolve(); }
  };
  const context = vm.createContext({ URL, window: {
    location: { href: 'https://www.chambre17.com/en/' },
    matchMedia: () => ({ matches: mobile }),
    setTimeout() {}, setInterval() {}, addEventListener() {}
  }, document: {
    hidden: false,
    querySelector: selector => selector === '[data-hero-video]' ? video : selector === '[data-hero-play]' ? button : null,
    addEventListener: (name, callback) => gestures.set(name, callback),
    documentElement: { classList: { add: name => classes.add(name), remove: name => classes.delete(name) } }
  }});
  vm.runInContext(functions, context);
  return { video, button, context, events, gestures, classes, attributes,
    select: () => vm.runInContext('setHeroVideo("en")', context),
    listen: () => vm.runInContext(listeners, context),
    emit: name => (events.get(name) || []).forEach(fn => fn()),
    get loads() { return loads; }, get plays() { return plays; }
  };
}

const correct = browser({currentSrc:'https://www.chambre17.com/assets/optimized/en-desktop.mp4?v=desktop'});
correct.select();
assert.equal(correct.loads, 0, 'Do not restart an already-correct video download');

const ignoredMedia = browser({currentSrc:'https://www.chambre17.com/assets/optimized/en-mobile.mp4?v=mobile'});
ignoredMedia.select();
assert.equal(ignoredMedia.video.src, '/assets/optimized/en-desktop.mp4?v=desktop');
assert.equal(ignoredMedia.loads, 1, 'Correct a source chosen by a browser that ignores source media conditions');

const mobile = browser({mobile:true});
mobile.select();
assert.equal(mobile.video.src, '/assets/optimized/en-mobile.mp4?v=mobile');
assert.equal(mobile.attributes.get('poster'), '/assets/optimized/en-mobile.webp');

const recovery = browser();
recovery.listen();
recovery.emit('error');
assert.equal(recovery.classes.has('hero-video-missing'), false, 'Ignore a child-source error while the video is healthy');
recovery.video.error = {code:4};
recovery.emit('error');
assert.equal(recovery.classes.has('hero-video-missing'), true);
recovery.video.error = null;
recovery.emit('playing');
assert.equal(recovery.classes.has('hero-video-missing'), false, 'Recovered video must become visible again');

const autoplay = browser({blocked:true});
autoplay.listen();
await Promise.resolve();
assert.equal(autoplay.button.hidden, false, 'Offer an explicit play button when autoplay is rejected');
const plays = autoplay.plays;
autoplay.gestures.get('button:click')();
autoplay.gestures.get('touchend')();
assert.equal(autoplay.plays, plays + 2, 'Retry during real user activation');
await Promise.resolve();
autoplay.emit('playing');
assert.equal(autoplay.button.hidden, true);
console.log('PASS: correct initial source, unsupported source media, mobile selection, recoverable source errors, blocked autoplay and tap-to-play recovery.');
