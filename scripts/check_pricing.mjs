import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source=await readFile(new URL('../assets/site.js',import.meta.url),'utf8');
const start=source.indexOf('  function preselectPricingOffer(');
const functionSource=source.slice(start,source.indexOf('  var contactForm =',start));
const paths={fr:'tarifs',en:'en/pricing',ar:'ar/pricing'};
for(const lang of ['fr','en','ar']) {
 const dictionary=JSON.parse(await readFile(new URL('../content/translations.'+lang+'.json',import.meta.url),'utf8'));
 const pricing=JSON.parse(await readFile(new URL('../content/pricing.'+lang+'.json',import.meta.url),'utf8'));
 const page=await readFile(new URL('../dist/'+paths[lang]+'/index.html',import.meta.url),'utf8');
 const links=[...page.matchAll(/href="\/(fr|en|ar)\/\?offre=([^"#]+)#contact"/g)];
 const plans=[...pricing.creation,...pricing.management];
 assert.deepEqual(links.map(m=>m[2]),plans.map(p=>p.offer));
 assert.ok(links.every(m=>m[1]===lang),'Pricing must contact in the same language');
 for(const [code,path] of Object.entries(paths)) {
  assert.ok(page.includes('href="/'+path+'/" hreflang="'+code+'" lang="'+code+'" data-lang-switch="'+code+'"'),'Switcher must stay on pricing');
 }
 assert.ok(!page.includes('{{'),'No untranslated template slots');
 for(const plan of plans) {
  const message={value:''},need={value:''};
  const form={querySelector:selector=>selector.includes('message')?message:need};
  const context=vm.createContext({URLSearchParams,translations:{[lang]:dictionary},document:{documentElement:{lang}},form});
  vm.runInContext(functionSource,context);
  vm.runInContext('preselectPricingOffer(form,'+JSON.stringify('?offre='+plan.offer)+')',context);
  assert.ok(message.value.includes(plan.name),plan.offer+' '+lang);
  if(plan.amount) assert.ok(message.value.includes(plan.amount+' €'),plan.offer);
  assert.equal(need.value,dictionary[plan.monthly?'form.option.management':plan.offer==='creation-sur-mesure'?'form.option.webapp':'form.option.website']);
  message.value='Existing draft';need.value='My choice';
  vm.runInContext('preselectPricingOffer(form,"?offre=gestion-premium")',context);
  assert.equal(message.value,'Existing draft');assert.equal(need.value,'My choice');
 }
 for(const invalid of ['', '__proto__','inconnu','<script>']) {
  const message={value:''},need={value:''};
  const form={querySelector:selector=>selector.includes('message')?message:need};
  const context=vm.createContext({URLSearchParams,translations:{[lang]:dictionary},document:{documentElement:{lang}},form});
  vm.runInContext(functionSource,context);
  vm.runInContext('preselectPricingOffer(form,'+JSON.stringify('?offre='+encodeURIComponent(invalid))+')',context);
  assert.equal(message.value,'');assert.equal(need.value,'');
 }
 assert.equal((page.match(/<details>/g)||[]).length,6);
 assert.ok(!page.includes('"@type": "FAQPage"'));
}
console.log('PASS: 18 localized pricing-to-contact links, translated enquiries, corresponding pricing-language switchers, draft preservation and FAQs.');
