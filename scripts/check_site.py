#!/usr/bin/env python3
"""Check the generated public site's crawlability, metadata, links and assets."""
from html.parser import HTMLParser
import json
from pathlib import Path
from urllib.parse import urlsplit, unquote
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1] / "dist"
ORIGIN = "https://www.chambre17.com"
class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.tags, self.ids, self.schemas = [], set(), []
        self.title, self.h1, self.lang = "", 0, None
        self.in_title, self.in_json, self.json_text = False, False, ""
        self.feed(source)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if "id" in attrs: self.ids.add(attrs["id"])
        if tag == "html": self.lang = attrs.get("lang")
        if tag == "h1": self.h1 += 1
        if tag == "title": self.in_title = True
        if tag == "script" and attrs.get("type") == "application/ld+json": self.in_json, self.json_text = True, ""
    def handle_data(self, data):
        if self.in_title: self.title += data
        if self.in_json: self.json_text += data
    def handle_endtag(self, tag):
        if tag == "title": self.in_title = False
        if tag == "script" and self.in_json:
            self.schemas.append(json.loads(self.json_text))
            self.in_json = False
    def attributes(self, tag, **match):
        return [a for t, a in self.tags if t == tag and all(a.get(k) == v for k, v in match.items())]

urls = [node.text for node in ET.parse(ROOT / "sitemap.xml").findall('.//{*}loc')]
assert len(urls) == len(set(urls)), "Duplicate sitemap URLs"
pages = {urlsplit(url).path: Page((ROOT / urlsplit(url).path.strip('/') / 'index.html').read_text()) for url in urls}
titles, descriptions = set(), set()
for path, page in pages.items():
    assert page.lang in ("fr", "en", "ar"), path
    assert page.h1 == 1, f"{path}: expected one H1, got {page.h1}"
    assert page.title and page.title not in titles, f"Duplicate/missing title: {path}"
    titles.add(page.title)
    meta = page.attributes("meta", name="description")
    assert len(meta) == 1 and meta[0]["content"], f"Missing description: {path}"
    assert meta[0]["content"] not in descriptions, f"Duplicate description: {path}"
    descriptions.add(meta[0]["content"])
    canonical = page.attributes("link", rel="canonical")
    assert len(canonical) == 1 and canonical[0]["href"] == ORIGIN + path, f"Canonical: {path}"
    assert not any('noindex' in a.get('content', '').lower() for a in page.attributes('meta', name='robots'))
    for alternate in page.attributes('link', rel='alternate'):
        target = urlsplit(alternate['href']).path
        assert target in pages, f"Missing alternate: {path} -> {target}"
        assert any(a['href'] == ORIGIN + path for a in pages[target].attributes('link', rel='alternate')), f"Nonreciprocal hreflang: {path}"
    for property in ('og:title', 'og:description', 'og:url', 'og:image'):
        assert len(page.attributes('meta', property=property)) == 1, f"Missing {property}: {path}"
    for tag, attrs in page.tags:
        for key in ('href', 'src', 'poster'):
            value = attrs.get(key)
            if not value or value.startswith(('mailto:', 'tel:', 'data:')): continue
            url = urlsplit(value)
            if url.netloc and url.netloc != 'www.chambre17.com': continue
            target = unquote(url.path) or path
            if target in pages:
                if url.fragment: assert url.fragment in pages[target].ids, f"Broken anchor: {path} -> {value}"
            else:
                file = ROOT / target.lstrip('/')
                assert file.is_file() and file.stat().st_size, f"Missing/empty local resource: {path} -> {value}"
    for schema in page.schemas:
        assert schema.get('@context') == 'https://schema.org', path
        for item in schema.get('@graph', []):
            assert '@type' in item, path
assert 'Allow: /' in (ROOT / 'robots.txt').read_text()
assert ORIGIN + '/sitemap.xml' in (ROOT / 'robots.txt').read_text()
public = {'/' + str(p.relative_to(ROOT).parent).replace('.', '').strip('/') + '/' for p in ROOT.rglob('index.html')}
public = {'/' if p == '//' else p for p in public}
assert public == set(pages), f"Public pages missing from sitemap: {public.symmetric_difference(pages)}"
print(f"PASS: {len(pages)} pages; unique titles/descriptions; one H1 each; canonicals; reciprocal hreflang; JSON-LD; social metadata; links/assets; sitemap and robots.")
