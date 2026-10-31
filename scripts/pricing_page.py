"""Localized pricing pages assembled with the existing language headers/footers."""
import html
import json
import re

PRICING_PATHS = {'fr': '/tarifs/', 'en': '/en/pricing/', 'ar': '/ar/pricing/'}


def render_pricing(root, home, metadata, json_ld, origin, lang, switcher):
    data = json.loads((root / f'content/pricing.{lang}.json').read_text())
    ui = data['ui']
    path = PRICING_PATHS[lang]
    home_path = f'/{lang}/'
    body = (root / 'templates/tarifs.html').read_text()
    for key, value in ui.items():
        body = body.replace('{{' + key + '}}', html.escape(value, quote=True).replace('\n', '<br> '))
    body = body.replace('{{home_url}}', home_path)

    def card(plan):
        badge = '<span class="pricing-badge">' + ui['popular'] + '</span>' if plan.get('popular') else ''
        if plan.get('amount'):
            starting = '<span class="pricing-from">' + ui['from'] + '</span>' if plan.get('starting') else ''
            period = '<span class="pricing-period">' + ui['month'] + '</span>' if plan.get('monthly') else ''
            price = f'<p class="pricing-price">{starting}<span><strong dir="ltr">{plan["amount"]} €</strong>{period}</span></p>'
        else:
            price = '<p class="pricing-price pricing-custom"><strong>' + ui['custom'] + '</strong></p>'
        features = ''.join('<li><span aria-hidden="true">✓</span><span>' + html.escape(text) + '</span></li>' for text in plan['features'])
        return ('<article class="pricing-card' + (' pricing-popular' if plan.get('popular') else '') + '">' + badge +
                '<h3>' + html.escape(plan['name']) + '</h3>' + price + '<p class="pricing-card-description">' + html.escape(plan['description']) + '</p>' +
                '<ul class="pricing-features">' + features + '</ul>' +
                f'<a class="button pricing-cta{" secondary" if not plan.get("popular") else ""}" href="{home_path}?offre={plan["offer"]}#contact">{html.escape(plan["cta"])}</a></article>')

    body = body.replace('{{CREATION_CARDS}}', ''.join(card(plan) for plan in data['creation']))
    body = body.replace('{{MANAGEMENT_CARDS}}', ''.join(card(plan) for plan in data['management']))
    body = body.replace('{{FAQ}}', ''.join('<details><summary>' + html.escape(item['question']) + '<span aria-hidden="true">+</span></summary><div><p>' + html.escape(item['answer']) + '</p></div></details>' for item in data['faq']))
    head = home[:home.index('<body')]
    head = re.sub(r'<script type="application/ld\+json">.*?</script>', '', head, flags=re.S)
    head = re.sub(r'<title>.*?</title>\s*', '', head, flags=re.S)
    head = re.sub(r'<meta (?:name="(?:description|twitter:[^"]+)"|property="og:[^"]+")[^>]*>\s*', '', head)
    head = re.sub(r'<link rel="(?:canonical|alternate)"[^>]*>\s*', '', head)
    locale = {'fr':'fr_FR','en':'en_GB','ar':'ar'}[lang]
    head = head.replace('</head>', metadata(ui['seo_title'], ui['seo_description'], path, PRICING_PATHS) +
        f'\n<meta property="og:locale" content="{locale}">' + json_ld({'@context':'https://schema.org','@graph':[
        {'@type':'WebPage','@id':origin+path+'#webpage','url':origin+path,'name':ui['intro_title']+' — Chambre 17','inLanguage':lang},
        {'@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':1,'name':ui['home'],'item':origin+home_path},{'@type':'ListItem','position':2,'name':ui['nav'],'item':origin+path}]}]}) + '</head>')
    header = re.search(r'<header class="site-header">.*?</header>', home, re.S)[0]
    footer = re.search(r'<footer class="site-footer">.*?</footer>', home, re.S)[0]
    header = re.sub(r'(<a\b[^>]*data-i18n="nav.pricing")', r'\1 aria-current="page"', header)
    header = re.sub(r'(<div class="language-switcher[^>]*>).*?(</div>)', lambda m: m[1] + switcher(lang, PRICING_PATHS) + m[2], header, flags=re.S)
    for fragment in ('services','work','about','process','contact'):
        header = header.replace(f'href="#{fragment}"', f'href="{home_path}#{fragment}"')
        footer = footer.replace(f'href="#{fragment}"', f'href="{home_path}#{fragment}"')
    return head + f'<body data-static-lang="{lang}" data-page="pricing">' + header + body + footer + '</body></html>\n'
