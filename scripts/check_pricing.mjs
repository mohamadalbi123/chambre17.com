import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source=await readFile(new URL('../assets/site.js',import.meta.url),'utf8');
const start=source.indexOf('  function preselectPricingOffer(');
const functionSource=source.slice(start,source.indexOf('  var contactForm =',start));
const french=JSON.parse(await readFile(new URL('../content/translations.fr.json',import.meta.url),'utf8'));
const pricing=JSON.parse(await readFile(new URL('../content/pricing.fr.json',import.meta.url),'utf8'));
const page=await readFile(new URL('../dist/tarifs/index.html',import.meta.url),'utf8');
const links=[...page.matchAll(/href="\/fr\/\?offre=([^"#]+)#contact"/g)].map(m=>m[1]);
const plans=[...pricing.creation,...pricing.management];
assert.deepEqual(links,plans.map(p=>p.offer));
for(const plan of plans) {
 const message={value:''},need={value:''};
 const form={querySelector:selector=>selector.includes('message')?message:need};
 const context=vm.createContext({URLSearchParams,translations:{fr:french},document:{documentElement:{lang:'fr'}},form});
 vm.runInContext(functionSource,context);
 vm.runInContext('preselectPricingOffer(form,'+JSON.stringify('?offre='+plan.offer)+')',context);
 assert.ok(message.value.toLowerCase().includes(plan.name.toLowerCase()),plan.offer);
 if(plan.amount) assert.ok(message.value.includes(plan.amount+' €'),plan.offer);
 assert.equal(need.value,french[plan.monthly?'form.option.management':plan.offer==='creation-sur-mesure'?'form.option.webapp':'form.option.website']);
 message.value='Un brouillon déjà rédigé';need.value='Mon choix';
 vm.runInContext('preselectPricingOffer(form,"?offre=gestion-premium")',context);
 assert.equal(message.value,'Un brouillon déjà rédigé');assert.equal(need.value,'Mon choix');
}
for(const invalid of ['', '__proto__','inconnu','<script>']) {
 const message={value:''},need={value:''};
 const form={querySelector:selector=>selector.includes('message')?message:need};
 const context=vm.createContext({URLSearchParams,translations:{fr:french},document:{documentElement:{lang:'fr'}},form});
 vm.runInContext(functionSource,context);
 vm.runInContext('preselectPricingOffer(form,'+JSON.stringify('?offre='+encodeURIComponent(invalid))+')',context);
 assert.equal(message.value,'');assert.equal(need.value,'');
}
assert.equal((page.match(/<details>/g)||[]).length,6);
assert.ok(!page.includes('"@type": "FAQPage"'));
console.log('PASS: all six pricing links select the correct service, package and price; existing drafts are preserved; invalid packages are ignored; six native FAQ accordions.');
