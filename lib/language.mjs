export const languages = ['fr', 'en', 'ar'];
export const preferenceCookie = 'chambre17-language';
// Arabic is an official language in these countries and territories.
const arabicCountries = new Set(['AE','SA','BH','QA','KW','OM','YE','IQ','JO','LB','SY','PS','EG','SD','LY','TN','DZ','MA','MR','SO','DJ','KM','TD']);
export function browserLanguage(header = '') {
  return header.split(',').map((part, order) => {
    const [tag, ...parameters] = part.trim().toLowerCase().split(';');
    const q = parameters.find(value => value.trim().startsWith('q='));
    const weight = q ? Number(q.trim().slice(2)) : 1;
    return {lang: tag.split('-')[0], weight, order};
  }).filter(item => languages.includes(item.lang) && Number.isFinite(item.weight) && item.weight > 0 && item.weight <= 1)
    .sort((a,b) => b.weight-a.weight || a.order-b.order)[0]?.lang;
}
export function savedLanguage(header = '') {
  const value = header.split(';').map(value => value.trim()).find(value => value.startsWith(preferenceCookie + '='))?.slice(preferenceCookie.length + 1);
  return languages.includes(value) ? value : undefined;
}
export function detectLanguage(headers) {
  const country = (headers.get('x-vercel-ip-country') || '').toUpperCase();
  return savedLanguage(headers.get('cookie') || '') || browserLanguage(headers.get('accept-language') || '') ||
    (country === 'FR' ? 'fr' : arabicCountries.has(country) ? 'ar' : 'en');
}
export function entryRedirect(request) {
  const url = new URL(request.url);
  if (url.pathname !== '/' || !['GET','HEAD'].includes(request.method)) return null;
  const legacy = url.searchParams.get('lang');
  const language = languages.includes(legacy) ? legacy : detectLanguage(request.headers);
  if (languages.includes(legacy)) url.searchParams.delete('lang');
  url.pathname = '/' + language + '/';
  return new Response(null, {status:302, headers: {
    Location: url.href,
    'Cache-Control': 'private, no-store, max-age=0',
    'Vercel-CDN-Cache-Control': 'no-store',
    Vary: 'Accept-Language, Cookie, X-Vercel-IP-Country'
  }});
}
