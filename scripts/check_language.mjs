import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {browserLanguage, detectLanguage, entryRedirect, preferenceCookie} from '../lib/language.mjs';
import proxy from '../proxy.js';
let checked = 0;
function selection(header, country, cookie, expected) {
  const headers = new Headers();
  if(header) headers.set('Accept-Language',header);
  if(country) headers.set('X-Vercel-IP-Country',country);
  if(cookie) headers.set('Cookie',cookie);
  assert.equal(detectLanguage(headers), expected);
  const response = entryRedirect(new Request('https://www.chambre17.com/?utm_source=test', {headers}));
  assert.equal(response.status,302);
  assert.equal(response.headers.get('Location'),'https://www.chambre17.com/'+expected+'/?utm_source=test');
  assert.match(response.headers.get('Cache-Control'), /no-store/);
  assert.equal(response.headers.get('Set-Cookie'),null, 'Automatic detection must not overwrite manual preferences');
  checked++;
}
selection('fr-CA,fr;q=0.9,en;q=0.8','AE',null,'fr');
selection('ar-AE,ar;q=0.9,en;q=0.8','FR',null,'ar');
selection('en-US,en;q=0.9,fr;q=0.8','FR',null,'en');
selection('de-DE,ar;q=0.4,fr;q=0.8','US',null,'fr');
selection('de-DE,de;q=0.8','FR',null,'fr');
selection('de-DE','AE',null,'ar');
selection(null,null,null,'en');
selection('*','US',null,'en');
selection('ar;q=0,en;q=0.5','AE',null,'en');
selection('ar;q=broken,fr;q=2','FR',null,'fr');
for(const country of ['AE','SA','BH','QA','KW','OM','YE','IQ','JO','LB','SY','PS','EG','SD','LY','TN','DZ','MA','MR','SO','DJ','KM','TD']) selection(null,country,null,'ar');
for(const language of ['fr','en','ar']) {
  selection('en','FR', preferenceCookie+'='+language,language);
  for(const other of ['fr','en','ar']) {
    const request = new Request('https://www.chambre17.com/'+other+'/', {headers:{cookie:preferenceCookie+'='+language,'accept-language':language}});
    assert.equal(entryRedirect(request),null,'Explicit language URLs must not be redirected');
  }
}
selection('ar','FR',preferenceCookie+'=invalid','ar');
assert.equal(browserLanguage('fr;q=0,ar;q=0'),undefined);
const legacy=entryRedirect(new Request('https://www.chambre17.com/?lang=ar&utm_source=test',{headers:{cookie:preferenceCookie+'=fr'}}));
assert.equal(legacy.headers.get('Location'),'https://www.chambre17.com/ar/?utm_source=test');
for(const path of ['/fr/','/ar/maintenance-site-web/','/assets/site.fr.js','/api/contact','/sitemap.xml','/unknown/']) {
 assert.equal(entryRedirect(new Request('https://www.chambre17.com'+path)),null);
 assert.equal(proxy(new Request('https://www.chambre17.com'+path)).headers.get('x-middleware-next'),'1');
}
for(const lang of ['fr','en','ar']) {
 const page=await readFile(new URL('../dist/'+lang+'/index.html',import.meta.url),'utf8');
 const hero={fr:'hero-fr',en:'hero-chambre17',ar:'hero-ar-desktop'}[lang];
 assert.ok(page.includes('data-desktop-src="/assets/optimized/'+hero+'.mp4?'));
 assert.ok(page.includes('data-mobile-src="/assets/optimized/hero-mobile-'+lang+'.mp4?'));
 assert.ok(page.includes('data-mobile-poster="/assets/optimized/hero-mobile-'+lang+'.webp?'));
 assert.ok(page.includes('dir="'+(lang==='ar'?'rtl':'ltr')+'"'));
}
console.log(`PASS: ${checked} detection cases, manual-cookie priority, explicit URLs, legacy links, cache isolation and all six language/device hero variants.`);
