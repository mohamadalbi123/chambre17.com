// Local-only preview; all email delivery is mocked. Never use as a production server.
import http from 'node:http';
import {entryRedirect} from '../lib/language.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const previewPort = Number(process.env.PREVIEW_PORT || 8766);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
process.env.RESEND_API_KEY = 'local-preview-mock';
globalThis.fetch = async (url) => {
  if (url !== 'https://api.resend.com/emails') throw new Error('Unexpected preview request');
  return { ok: true };
};
const api = fs.readFileSync(path.resolve(root, '../api/contact.js'), 'utf8');
const { default: contact } = await import('data:text/javascript;base64,' + Buffer.from(api).toString('base64'));
const mime = {'.html':'text/html; charset=utf-8','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.mp4':'video/mp4','.xml':'application/xml','.txt':'text/plain'};
http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, 'http://' + req.headers.host);
  const pathname = decodeURIComponent(requestUrl.pathname);
  const redirect = entryRedirect(new Request(requestUrl, {method:req.method,headers:req.headers}));
  if (redirect) {
    res.writeHead(redirect.status, Object.fromEntries(redirect.headers)); res.end(); return;
  }
  const legacy = ['mentions-legales','politique-confidentialite','creation-site-internet-la-rochelle','developpement-application-web','maintenance-site-web'];
  if (legacy.some(slug => pathname === '/' + slug || pathname.startsWith('/' + slug + '/'))) {
    res.writeHead(308, {Location:'/fr' + pathname + (pathname.endsWith('/') ? '' : '/') + requestUrl.search}); res.end(); return;
  }
  if (pathname === '/api/contact') {
    let body = '';
    for await (const chunk of req) body += chunk;
    try { req.body = body ? JSON.parse(body) : {}; await contact(req, res); }
    catch { res.writeHead(400); res.end('{}'); }
    return;
  }
  let file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403); res.end(); return; }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) { res.writeHead(404); res.end(); return; }
  res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
  res.setHeader('Cache-Control', 'no-store');
  fs.createReadStream(file).pipe(res);
}).listen(previewPort, '127.0.0.1', () => console.log(`Preview: http://127.0.0.1:${previewPort} — email provider MOCKED; no messages sent.`));
