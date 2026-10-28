#!/usr/bin/env python3
"""Generate crawlable language pages and the existing dist deployment directory.

Uses only Python's standard library. Edit templates/, content/, and assets/;
run this script after changes. Generated public HTML is committed for static hosts.
"""
import html
import hashlib
import json
from pathlib import Path
import re
import shutil
import tempfile

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = "https://www.chambre17.com"
LOGO_PATH = "/assets/chambre17-logo.png"
LOGO_URL = ORIGIN + LOGO_PATH + "?v=" + hashlib.sha256((ROOT / LOGO_PATH.lstrip("/")).read_bytes()).hexdigest()[:12]
LANGUAGES = ("fr", "en", "ar")
LOCALES = {"fr": "fr_FR", "en": "en_GB", "ar": "ar"}
source_js = (ROOT / "assets/site.js").read_text()
dictionary = re.search(r"var translations = (\{.*?\n  \});", source_js, re.S).group(1)
dictionary = re.sub(r"^(    )(en|fr|ar):", r'\1"\2":', dictionary, flags=re.M)
TRANSLATIONS = json.loads(dictionary)
PAGES = {}


def path_for(lang, slug=""):
    return ("/" if lang == "fr" else f"/{lang}/") + (slug + "/" if slug else "")


def json_ld(data):
    return '<script type="application/ld+json">\n' + json.dumps(data, ensure_ascii=False, indent=2).replace("</", "<\\/") + "\n    </script>"


def metadata(title, description, path, alternates):
    lines = [f"<title>{html.escape(title)}</title>",
             f'<meta name="description" content="{html.escape(description, quote=True)}">',
             f'<link rel="canonical" href="{ORIGIN}{path}">']
    for lang, alternate in alternates.items():
        lines.append(f'<link rel="alternate" hreflang="{lang}" href="{ORIGIN}{alternate}">')
    if alternates:
        lines.append(f'<link rel="alternate" hreflang="x-default" href="{ORIGIN}{alternates["fr"]}">')
    for key, value in {"title": title, "description": description, "type": "website", "url": ORIGIN + path,
                       "site_name": "CHAMBRE 17", "image": LOGO_URL,
                       "image:alt": "CHAMBRE 17"}.items():
        lines.append(f'<meta property="og:{key}" content="{html.escape(value, quote=True)}">')
    for key, value in {"card": "summary", "title": title, "description": description,
                       "image": LOGO_URL, "image:alt": "CHAMBRE 17"}.items():
        lines.append(f'<meta name="twitter:{key}" content="{html.escape(value, quote=True)}">')
    return "\n    ".join(lines)


def translate(template, lang):
    pattern = r'(<(?P<tag>[a-z][a-z0-9]*)\b[^>]*\bdata-i18n="(?P<key>[^"]+)"[^>]*>).*?(</(?P=tag)>)'
    return re.sub(pattern, lambda m: m[1] + TRANSLATIONS[lang][m["key"]] + m[4], template, flags=re.S)


def switcher(lang, alternates):
    labels = {"fr": "FR", "en": "EN", "ar": "ع"}
    return "\n          ".join(
        f'<a href="{path}" hreflang="{code}" lang="{code}" data-lang-switch="{code}"'
        + (' aria-label="العربية"' if code == "ar" else '')
        + (' aria-current="page"' if code == lang else '') + f'>{labels[code]}</a>'
        for code, path in alternates.items())


def apply_metadata(page, title, description, path, lang, alternates):
    page = re.sub(r"<title>.*?</title>\s*", "", page, flags=re.S)
    page = re.sub(r'<meta (?:name="(?:description|twitter:[^"]+)"|property="og:[^"]+")[^>]*>\s*', "", page)
    page = re.sub(r'<link rel="(?:canonical|alternate)"[^>]*>\s*', "", page)
    return page.replace("</head>", metadata(title, description, path, alternates) +
                        f'\n    <meta property="og:locale" content="{LOCALES[lang]}">\n  </head>')


def localized_page(template_name, lang, slug, page_key):
    page = translate((ROOT / "templates" / template_name).read_text(), lang)
    path = path_for(lang, slug)
    alternates = {code: path_for(code, slug) for code in LANGUAGES}
    page = re.sub(r'<html[^>]*>', f'<html lang="{lang}" data-lang="{lang}" dir="{"rtl" if lang == "ar" else "ltr"}">', page)
    page = page.replace('<body', f'<body data-static-lang="{lang}"', 1)
    page = re.sub(r'(<div class="language-switcher[^>]*>).*?(</div>)',
                  lambda m: m[1] + "\n          " + switcher(lang, alternates) + "\n        " + m[2], page, flags=re.S)
    for legal_slug in ("mentions-legales", "politique-confidentialite"):
        page = page.replace(f'href="/{legal_slug}/"', f'href="{path_for(lang, legal_slug)}"')
    page = page.replace('href="/"', f'href="{path_for(lang)}"') if lang != "fr" else page
    # The above homepage link replacement must not alter the French language link.
    page = re.sub(r'(<a href=")[^"]+(" hreflang="fr")', r'\g<1>' + path_for("fr", slug) + r'\2', page)
    page = apply_metadata(page, TRANSLATIONS[lang][page_key + ".titleTag"],
                          TRANSLATIONS[lang][page_key + ".description"], path, lang, alternates)
    page = page.replace('</head>', '<noscript><style>[data-reveal]{opacity:1;transform:none;filter:none}</style></noscript>\n  </head>')
    if page_key == "home":
        desktop = {"fr": "hero-fr", "en": "hero-chambre17", "ar": "hero-ar-desktop"}[lang]
        mobile = f"hero-mobile-{lang}"
        def video_path(name):
            optimized = f"assets/optimized/{name}.mp4"
            return "/" + (optimized if (ROOT / optimized).is_file() and (ROOT / optimized).stat().st_size > 1000 else f"assets/{name}.mp4")
        desktop_path, mobile_path = video_path(desktop), video_path(mobile)
        poster = f"/assets/optimized/{desktop}.webp"
        mobile_poster = f"/assets/optimized/{mobile}.webp"
        poster_attr = f' poster="{poster}"' if (ROOT / poster.lstrip("/")).is_file() else ""
        video = (f'<video class="hero-video" data-hero-video data-desktop-src="{desktop_path}" data-mobile-src="{mobile_path}" data-desktop-poster="{poster}" data-mobile-poster="{mobile_poster}" autoplay muted loop playsinline preload="metadata"{poster_attr}>\n'
                 f'            <source src="{mobile_path}" media="(max-width: 640px)" type="video/mp4">\n'
                 f'            <source src="{desktop_path}" type="video/mp4">\n          </video>')
        play_label = {"fr": "Lire la vidéo", "en": "Play video", "ar": "تشغيل الفيديو"}[lang]
        video += f'\n          <button class="hero-video-play" type="button" data-hero-play hidden aria-label="{play_label}"><span aria-hidden="true">▶</span></button>'
        page = re.sub(r'<video class="hero-video".*?</video>', lambda m: video, page, flags=re.S)
        match = re.search(r'<script type="application/ld\+json">(.*?)</script>', page, re.S)
        graph = json.loads(match[1])
        graph["@graph"][1]["description"] = TRANSLATIONS[lang]["home.description"]
        graph["@graph"].append({"@type": "WebPage", "@id": ORIGIN + path + "#webpage", "url": ORIGIN + path,
                                "name": TRANSLATIONS[lang]["home.titleTag"], "inLanguage": lang,
                                "isPartOf": {"@id": ORIGIN + "/#website"}, "about": {"@id": ORIGIN + "/#business"}})
        page = page[:match.start()] + json_ld(graph) + page[match.end():]
    return page


def service_page(service, lang):
    home = PAGES[path_for(lang)]
    path = path_for(lang, service["slug"])
    alternates = {code: path_for(code, service["slug"]) for code in ("fr", "en")}
    head = home[:home.index("<body")]
    head = re.sub(r'<script type="application/ld\+json">.*?</script>', "", head, flags=re.S)
    head = apply_metadata(head, service["title"], service["description"], path, lang, alternates)
    header = re.search(r'<header class="site-header">.*?</header>', home, re.S)[0]
    footer = re.search(r'<footer class="site-footer">.*?</footer>', home, re.S)[0]
    header = re.sub(r'(<div class="language-switcher[^>]*>).*?(</div>)',
                    lambda m: m[1] + switcher(lang, alternates) + m[2], header, flags=re.S)
    for fragment in ("top", "services", "work", "about", "process", "contact"):
        header = header.replace(f'href="#{fragment}"', f'href="{path_for(lang)}#{fragment}"')
        footer = footer.replace(f'href="#{fragment}"', f'href="{path_for(lang)}#{fragment}"')
    # Footer service links stay within the reader's language.
    for other in SERVICES[lang]:
        footer = footer.replace(f'href="/{other["slug"]}/"', f'href="{path_for(lang, other["slug"])}"')
    labels = {"fr": ("Accueil", "Parlons de votre projet", "Présentez-nous votre activité et vos besoins pour définir ensemble le périmètre de votre projet.", "Démarrer un projet", "Projet associé", "Autres services"),
              "en": ("Home", "Let's discuss your project", "Tell us about your business and your needs so we can define the scope of your project together.", "Start a project", "Related project", "Other services")}[lang]
    local_service = service["slug"] == "creation-site-internet-la-rochelle"
    service_location = "Lagord / La Rochelle" if local_service else "France"
    blocks = []
    for section in service["sections"]:
        block = '<section><h2>' + html.escape(section["heading"]) + '</h2>'
        block += ''.join('<p>' + html.escape(p) + '</p>' for p in section["paragraphs"])
        if section.get("bullets"):
            block += '<ul>' + ''.join('<li>' + html.escape(p) + '</li>' for p in section["bullets"]) + '</ul>'
        blocks.append(block + '</section>')
    project = service.get("relatedProject")
    if project:
        blocks.append(f'<section><h2>{labels[4]} : {html.escape(project["name"])}</h2><p>{html.escape(project["description"])}</p><a class="text-link" href="{html.escape(project["url"], quote=True)}" target="_blank" rel="noopener">{html.escape(project["name"])}</a></section>')
    related = ''.join(f'<a href="{path_for(lang, other["slug"])}">{html.escape(other["h1"])}</a>' for other in SERVICES[lang] if other["slug"] != service["slug"])
    schema = {"@context": "https://schema.org", "@graph": [
        {"@type": "Service", "@id": ORIGIN + path + "#service", "url": ORIGIN + path, "name": service["h1"],
         "description": service["description"], "provider": {"@id": ORIGIN + "/#business", "@type": "Organization", "name": "CHAMBRE 17", "url": ORIGIN + "/"},
         "areaServed": ([{"@type": "City", "name": "La Rochelle"}, {"@type": "City", "name": "Lagord"}] if local_service else ["France", "International"])},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": labels[0], "item": ORIGIN + path_for(lang)},
            {"@type": "ListItem", "position": 2, "name": service["h1"], "item": ORIGIN + path}]}]}
    head = head.replace("</head>", json_ld(schema) + "\n  </head>")
    return (head + f'<body data-static-lang="{lang}">\n' + header +
            f'<main class="service-document" id="top"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="{path_for(lang)}">{labels[0]}</a><span aria-hidden="true"> / </span><span aria-current="page">{html.escape(service["h1"])}</span></nav>' +
            f'<article><p class="section-kicker">CHAMBRE 17 · {service_location}</p><h1>{html.escape(service["h1"])}</h1><p class="service-intro">{html.escape(service["intro"])}</p>' +
            ''.join(blocks) + f'<section class="service-contact"><h2>{labels[1]}</h2><p>{labels[2]}</p><a class="button" href="{path_for(lang)}#contact">{labels[3]}</a></section></article>' +
            f'<nav class="service-page-links" aria-label="{labels[5]}"><p>{labels[5]}</p>{related}</nav></main>' + footer + '</body></html>\n')


for language in LANGUAGES:
    for template, slug, key in (("home.html", "", "home"), ("mentions-legales.html", "mentions-legales", "legal.notice"),
                                 ("politique-confidentialite.html", "politique-confidentialite", "privacy")):
        PAGES[path_for(language, slug)] = localized_page(template, language, slug, key)

SERVICES = {lang: json.loads((ROOT / f"content/services.{lang}.json").read_text()) for lang in ("fr", "en")}
for language, services in SERVICES.items():
    for service in services:
        PAGES[path_for(language, service["slug"])] = service_page(service, language)
    if language != "fr":
        for service in services:
            PAGES[path_for(language)] = PAGES[path_for(language)].replace(f'href="/{service["slug"]}/"', f'href="{path_for(language, service["slug"])}"')

for language in LANGUAGES:
    localized_js = re.sub(r"var translations = (\{.*?\n  \});", lambda m: "var translations = " + json.dumps({language: TRANSLATIONS[language]}, ensure_ascii=False) + ";", source_js, flags=re.S)
    (ROOT / "assets" / f"site.{language}.js").write_text(localized_js)

ASSET_VERSIONS = {}
def version_asset(match):
    asset = match[2]
    if asset not in ASSET_VERSIONS:
        ASSET_VERSIONS[asset] = hashlib.sha256((ROOT / asset.lstrip('/')).read_bytes()).hexdigest()[:12]
    return match[1] + asset + '?v=' + ASSET_VERSIONS[asset] + '"'

for path, page in PAGES.items():
    page = page.replace(ORIGIN + LOGO_PATH + '"', LOGO_URL + '"')
    page = page.replace('src="/assets/chambre17-logo.png"', 'src="/assets/optimized/chambre17-logo.webp" width="256" height="256"')
    page = page.replace('<img class="brand-logo"', '<img decoding="async" class="brand-logo"')
    # Keep one translation dictionary per page instead of downloading all three.
    page_language = re.search(r'<html lang="([^"]+)"', page)[1]
    page = page.replace('/assets/site.js', f'/assets/site.{page_language}.js')
    page = re.sub(r'((?:src|href|poster|data-desktop-src|data-mobile-src|data-desktop-poster|data-mobile-poster)=")(/assets/[^"?]+|/favicon.png|/apple-touch-icon.png)"', version_asset, page)
    page = '\n'.join(line.rstrip() for line in page.splitlines()) + '\n'
    destination = ROOT / path.strip("/") / "index.html"
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(page)
    deployed = ROOT / "dist" / path.strip("/") / "index.html"
    deployed.parent.mkdir(parents=True, exist_ok=True)
    deployed.write_text(page)

# No invented modification dates; Google does not require lastmod.
sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
sitemap += ''.join(f'  <url><loc>{ORIGIN}{path}</loc></url>\n' for path in sorted(PAGES)) + '</urlset>\n'
(ROOT / "sitemap.xml").write_text(sitemap)
for filename in ("sitemap.xml", "robots.txt", "favicon.svg", "favicon.png", "apple-touch-icon.png", "google4b9b87ef974dde9f.html"):
    shutil.copy2(ROOT / filename, ROOT / "dist" / filename)
def copy_public_asset(source, destination):
    # Copy content only: macOS compression xattrs must not be transplanted to
    # an ordinary file. Replace atomically so an interrupted build stays safe.
    with tempfile.NamedTemporaryFile(dir=Path(destination).parent, delete=False) as temp:
        temporary = Path(temp.name)
    try:
        shutil.copyfile(source, temporary)
        temporary.chmod(0o644)
        temporary.replace(destination)
    finally:
        temporary.unlink(missing_ok=True)
    return str(destination)

shutil.copytree(ROOT / "assets", ROOT / "dist/assets", dirs_exist_ok=True, copy_function=copy_public_asset)
print(f"Generated {len(PAGES)} public pages, sitemap.xml, and synchronized dist/.")
