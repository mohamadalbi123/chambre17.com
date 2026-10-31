"""French-only pricing page, assembled with the existing French header/footer."""
import html
import json
import re


def render_pricing(root, home, metadata, json_ld, origin):
    data = json.loads((root / 'content/pricing.fr.json').read_text())
    body = (root / 'templates/tarifs.html').read_text()

    def card(plan):
        badge = '<span class="pricing-badge">Le plus populaire</span>' if plan.get('popular') else ''
        if plan.get('amount'):
            starting = '<span class="pricing-from">À partir de</span>' if plan.get('starting') else ''
            period = '<span class="pricing-period">/mois</span>' if plan.get('monthly') else ''
            price = f'<p class="pricing-price">{starting}<span><strong>{plan["amount"]} €</strong>{period}</span></p>'
        else:
            price = '<p class="pricing-price pricing-custom"><strong>Sur devis</strong></p>'
        features = ''.join('<li><span aria-hidden="true">✓</span><span>' + html.escape(text) + '</span></li>' for text in plan['features'])
        return ('<article class="pricing-card' + (' pricing-popular' if plan.get('popular') else '') + '">' + badge +
                '<h3>' + html.escape(plan['name']) + '</h3>' + price + '<p class="pricing-card-description">' + html.escape(plan['description']) + '</p>' +
                '<ul class="pricing-features">' + features + '</ul>' +
                f'<a class="button pricing-cta{" secondary" if not plan.get("popular") else ""}" href="/fr/?offre={plan["offer"]}#contact">{html.escape(plan["cta"])}</a></article>')

    body = body.replace('{{CREATION_CARDS}}', ''.join(card(plan) for plan in data['creation']))
    body = body.replace('{{MANAGEMENT_CARDS}}', ''.join(card(plan) for plan in data['management']))
    body = body.replace('{{FAQ}}', ''.join('<details><summary>' + html.escape(item['question']) + '<span aria-hidden="true">+</span></summary><div><p>' + html.escape(item['answer']) + '</p></div></details>' for item in data['faq']))
    head = home[:home.index('<body')]
    head = re.sub(r'<script type="application/ld\+json">.*?</script>', '', head, flags=re.S)
    head = re.sub(r'<title>.*?</title>\s*', '', head, flags=re.S)
    head = re.sub(r'<meta (?:name="(?:description|twitter:[^"]+)"|property="og:[^"]+")[^>]*>\s*', '', head)
    head = re.sub(r'<link rel="(?:canonical|alternate)"[^>]*>\s*', '', head)
    head = head.replace('</head>', metadata('Tarifs Création de Sites Web à La Rochelle | Chambre 17',
        'Découvrez les tarifs Chambre 17 : création de sites web dès 490 € et gestion mensuelle optionnelle dès 29 €/mois. Devis personnalisé pour votre projet.', '/tarifs/', {}) +
        '\n<meta property="og:locale" content="fr_FR">' + json_ld({'@context':'https://schema.org','@graph':[
        {'@type':'WebPage','@id':origin+'/tarifs/#webpage','url':origin+'/tarifs/','name':'Nos tarifs — Chambre 17','inLanguage':'fr'},
        {'@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':1,'name':'Accueil','item':origin+'/fr/'},{'@type':'ListItem','position':2,'name':'Tarifs','item':origin+'/tarifs/'}]}]}) + '</head>')
    header = re.search(r'<header class="site-header">.*?</header>', home, re.S)[0]
    footer = re.search(r'<footer class="site-footer">.*?</footer>', home, re.S)[0]
    header = header.replace('href="/tarifs/" hreflang="fr"', 'href="/tarifs/" hreflang="fr" aria-current="page"')
    header = header.replace('href="/fr/" hreflang="fr"', 'href="/tarifs/" hreflang="fr"')
    for fragment in ('services','work','about','process','contact'):
        header = header.replace(f'href="#{fragment}"', f'href="/fr/#{fragment}"')
        footer = footer.replace(f'href="#{fragment}"', f'href="/fr/#{fragment}"')
    return head + '<body data-static-lang="fr" data-page="pricing">' + header + body + footer + '</body></html>\n'
