# CHAMBRE 17 — SEO and performance release

## Source and build

Edit `templates/` for shared markup, `assets/site.js` for translated copy and interactions, `content/services.fr.json` and `content/services.en.json` for service content, and `assets/styles.css` for styles. Public HTML and language-specific JavaScript are generated files.

Run:

```sh
python3 scripts/build_site.py
python3 scripts/check_site.py
node --check assets/site.js
node --check api/contact.js
node scripts/check_contact.mjs
git diff --check
```

There is no package manifest, framework build, TypeScript project, or existing lint configuration. The build uses Python's standard library. `dist/` remains the deployed static directory; the existing root `api/contact.js` remains the Vercel function.

`node scripts/preview.mjs` serves `http://127.0.0.1:8766` with email delivery mocked. It is a development-only tool. It never sends messages or proves production email delivery.

## Implemented

- French homepage at `/`; English at `/en/`; existing Arabic preserved at `/ar/`. The URL fixes the language, regardless of saved preferences or browser settings. Old `?lang=` links navigate to the matching canonical language page.
- Three substantive service pages in French and English: website creation, web applications, website maintenance. Header, footer, related-service, contact, and language links connect the pages.
- All 15 public content pages have unique titles and descriptions, one H1, canonical URLs on `https://www.chambre17.com`, reciprocal language alternates, and social metadata. Legal and privacy pages are translated too.
- Visible local service introduction, accurate Lagord location, La Rochelle service coverage, and fuller descriptions of the existing LAZOYA and J. LEILATI projects.
- Existing Organization / ProfessionalService and WebSite data retained; localized WebPage, Service and BreadcrumbList data added. No invented reviews, ratings, prices, physical offices, testimonials, results or client statistics.
- Sitemap lists every generated content page. It omits unverifiable modification dates. Robots and the existing Search Console verification file remain available.
- Hero video downloads reduced approximately 50–55%, retaining full 10-second animations and aspect ratios. Originals retained. H.264 MP4 outputs have front-loaded metadata for streaming and WebP posters. Desktop output is 1280×720; mobile is 720×1280.
- Header/footer logo reduced from 879,933 bytes to 29,038 bytes (WebP). Each page downloads only its own translation dictionary. Correct initial video sources avoid a redundant English video download; scroll updates are batched per animation frame and canvas code avoids a computed-style read every frame.
- Asset URLs include content hashes for cache busting; Vercel browser cache headers added. Existing fonts are system fonts; no external font downloads or tracking scripts were added.
- Mobile closed menus are hidden from keyboard/accessibility navigation; Escape returns focus to the menu button; focus indicators and telephone input semantics improved. The form honeypot is visually clipped without creating horizontal overflow in Arabic.
- Contact API now handles upstream network failures/timeouts with JSON errors. Eight provider-mocked regression checks pass. Local browser tests cover required fields and successful submission with mocked delivery.

## Verification and follow-up

The automated site check verifies metadata, one H1, all internal links and anchors, asset existence, reciprocal hreflang, sitemap coverage and JSON-LD syntax. This is not a substitute for Google's or Schema.org's validators.

Before release, public HTTP/HTTPS and apex/www redirects, legal page routing, robots, unknown-route 404 and contact endpoint method handling were checked. Existing domain configuration already prefers HTTPS and www. HTTP apex currently takes two permanent redirects through HTTPS apex, a platform-managed behavior.

Google PageSpeed's public API rejected the audit request because its shared quota was exceeded. No before/after LCP, INP, CLS or ranking improvement is claimed. Check the deployed site in PageSpeed Insights, then use Search Console's Core Web Vitals report when sufficient real-user data exists.

After publication:

1. Submit `https://www.chambre17.com/sitemap.xml` in the owner's Search Console property. Inspect the homepage and new service pages; request indexing where appropriate. A verification file is present, but account ownership and indexing are not established by this code audit.
2. Review Google Business Profile details, service areas, website link and real portfolio images in the owner's account. No Business Profile or Search Console account changes were made.
3. Validate the live homepage and a service page with Google's Rich Results Test and Schema.org's validator. Rich-result eligibility is distinct from valid schema; missing optional or required business details must not be invented to clear a warning.
4. If needed, conduct one real contact enquiry and verify receipt in the business inbox. Automated tests use a mocked provider.

## Useful future content

- A dedicated e-commerce page can explain product/catalogue management, multilingual shopping, customer accounts, checkout and delivery, supported by the existing J. LEILATI work. Add more project-specific detail before separating it from the application service page.
- Google Business Profile: current verified offering is launch setup. A page can explain profile setup and launch tasks; do not advertise ongoing management until the owner confirms its scope.
- Google Ads: current verified offering is setup and launch support. Confirm ongoing campaign management, reporting and deliverables before publishing a management page or performance claims.

Avoid repeated near-identical location pages. La Rochelle and Lagord are naturally covered in the existing service content.
