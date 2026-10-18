(function () {
  var config = window.CHAMBRE17_CONTACT || {};

  document.querySelectorAll("[data-contact-email]").forEach(function (node) {
    node.textContent = config.email || "Email";
    node.setAttribute("href", "mailto:" + (config.email || ""));
  });

  document.querySelectorAll("[data-contact-whatsapp]").forEach(function (node) {
    node.textContent = config.whatsapp || "WhatsApp";
    node.setAttribute("href", config.whatsappUrl || "#");
    node.setAttribute("dir", "ltr");
    node.setAttribute("unicode-bidi", "isolate");
    node.setAttribute("aria-label", "WhatsApp " + (config.whatsapp || ""));
  });

  var translations = {
    en: {
      "home.titleTag": "Web Design in La Rochelle & Lagord | CHAMBRE 17",
      "home.description": "Based in Lagord, CHAMBRE 17 creates custom websites and web applications for businesses in La Rochelle, with optional ongoing website maintenance.",
      "nav.services": "Services",
      "nav.work": "Work",
      "nav.about": "About",
      "nav.process": "Process",
      "nav.contact": "Contact",
      "nav.cta": "Start a project",
      "hero.h1": "Website design in La Rochelle and Lagord",
      "services.learn": "Explore our services",
      "hero.line1": "Tell us about your business.",
      "hero.line2": "We'll build the digital solution around it.",
      "hero.cta": "Start a conversation",
      "hero.support": "We start by understanding your business, your customers and your needs. Then we propose and build the digital solution that makes sense for you.",
      "services.kicker": "Our Services",
      "services.title": "Website. Web app. Launch. Management.",
      "services.website.title": "Custom Website Design",
      "services.website.body": "We don't just build websites. We bring a business perspective to every project. You tell us about your business, and we design the digital solution around what you actually need.",
      "services.webapp.title": "Web App Development",
      "services.webapp.body": "For businesses that need more than a simple website: booking flows, client portals, dashboards, tools and custom digital systems.",
      "services.launch.title": "Digital Launch Setup",
      "services.launch.body": "We help your business get ready to be found and contacted online with the essential setup around your website.",
      "services.launch.toggle": "See what is included",
      "services.launch.item1": "Google Business Profile setup",
      "services.launch.item2": "WhatsApp Business setup",
      "services.launch.item3": "Google Ads setup and launch support",
      "services.launch.item4": "Basic tracking and conversion direction",
      "services.launch.item5": "Launch checklist for visibility and contact",
      "services.management.title": "Website Management",
      "services.management.body": "We manage your website monthly: updates, changes, technical care, maintenance and continuous improvements after launch.",
      "services.local": "Based in Lagord, CHAMBRE 17 helps businesses in La Rochelle and the surrounding area with custom websites, web applications and optional monthly maintenance.",
      "work.kicker": "Selected Work",
      "work.title": "Real projects. Real businesses.",
      "work.lazoya.title": "LAZOYA — Beauty Centre",
      "work.lazoya": "A multilingual website for presenting the beauty centre’s services and helping visitors book online. We designed the service pages and customer journey, integrated online booking and provide ongoing website management.",
      "work.jleilati.title": "J. LEILATI — E-commerce",
      "work.jleilati": "A multilingual online shop that brings product browsing, customer accounts and checkout into one journey. The platform includes product management and European delivery options.",
      "work.tags.website": "Website",
      "work.tags.booking": "Booking",
      "work.tags.multilingual": "Multilingual",
      "work.tags.management": "Ongoing Management",
      "work.tags.ecommerce": "E-commerce",
      "work.tags.webapp": "Web App",
      "work.tags.products": "Product Management",
      "work.tags.checkout": "Checkout",
      "work.view": "View project",
      "process.kicker": "Our Process",
      "process.title": "Business first.<br>Digital solution second.",
      "process.intro": "Every Chambre 17 project begins by understanding the business behind the screen.",
      "process.understand.title": "We start with your business.",
      "process.understand.body": "We learn how your business works, who your customers are, what you need and what you want to achieve.",
      "process.build.title": "We turn the idea into a digital experience.",
      "process.build.body": "We define the structure, design the experience and build the solution around what your business actually needs.",
      "process.review.title": "We review it together.",
      "process.review.body": "You experience the solution, give feedback and we refine the details together before launch.",
      "process.launch.title": "We put it live.",
      "process.launch.body": "We test, optimize and launch the final experience across devices.",
      "process.manage.title": "We stay with it.",
      "process.manage.body": "After launch, we can manage, maintain and continuously improve your digital solution as your business evolves.",
      "management.kicker": "Monthly Management",
      "management.title": "Your website keeps moving with your business.",
      "management.body": "Monthly management is optional. After launch, Chambre 17 can continue handling content updates, new pages or features, technical maintenance, performance monitoring and continuous improvements.",
      "about.kicker": "About Us",
      "about.title": "We understand business before we design the website.",
      "about.body1": "Chambre 17 is an independent digital room built on experience across business strategy, digital marketing, data, AI, e-commerce, design and real-world industries.",
      "about.body2": "Our approach is simple: we don't start with a template. We start by understanding your business — your customers, your goals and what your website actually needs to achieve.",
      "about.body3": "Then we design and build around it.",
      "about.sig": "Design. Business. Technology. All in one room.",
      "about.cap.business": "Business",
      "about.cap.finance": "Finance",
      "about.cap.retail": "Retail",
      "about.cap.luxury": "Luxury goods",
      "about.cap.beauty": "Beauty salons",
      "about.cap.education": "Education",
      "about.cap.coaching": "Coaching",
      "about.cap.content": "Content",
      "about.cap.sales": "Sales",
      "about.cap.marketing": "Digital marketing",
      "about.cap.renovation": "Renovation",
      "about.cap.realestate": "Real estate",
      "about.cap.cars": "Cars",
      "about.cap.data": "Data",
      "about.cap.ai": "AI",
      "about.cap.ecommerce": "E-commerce",
      "about.cap.design": "Graphic design",
      "contact.kicker": "Contact Us",
      "contact.title": "Start a project.",
      "form.name": "Name",
      "form.company": "Company",
      "form.email": "Email",
      "form.phone": "Phone (optional)",
      "form.need": "What do you need?",
      "form.message": "Message",
      "form.submit": "Start a project",
      "form.option.website": "Website design",
      "form.option.webapp": "Web app development",
      "form.option.launch": "Digital launch setup",
      "form.option.management": "Website management",
      "form.option.all": "Website, web app and management",
      "form.option.unsure": "Not sure yet",
      "form.status.sending": "Sending your message...",
      "form.status.success": "Message sent. We will get back to you soon.",
      "form.status.error": "Something went wrong. Please email us directly at chambre17@icloud.com.",
      "form.status.invalid": "Please complete the required fields with a valid email address.",
      "footer.location": "Based in Lagord · Serving La Rochelle and the surrounding area",
      "footer.services": "Services",
      "footer.website": "Website Design",
      "footer.webapp": "Web App Development",
      "footer.launch": "Digital Launch Setup",
      "footer.management": "Website Management",
      "footer.contact": "Contact",
      "footer.legal": "Legal",
      "footer.legalNotice": "Legal Notice",
      "footer.privacy": "Privacy Policy",
      "legal.nav.privacy": "Privacy Policy",
      "legal.nav.notice": "Legal Notice",
      "legal.notice.titleTag": "Legal Notice | CHAMBRE 17",
      "legal.notice.description": "Legal notice for CHAMBRE 17.",
      "legal.notice.h1": "Legal Notice",
      "legal.notice.intro": "This legal notice applies to the CHAMBRE 17 website and its service presentation pages.",
      "legal.notice.publisher.title": "Website publisher",
      "legal.notice.publisher.body": "CHAMBRE 17 is the trading name used by Mohamad Albi, entrepreneur individuel, for website design, web app development and website management services.",
      "legal.notice.publisher.location": "Registered establishment: 17140 Lagord, France.",
      "legal.notice.publisher.contact": "Publisher contact:",
      "legal.notice.registration.title": "Business registration",
      "legal.notice.registration.legalForm": "Legal form: entrepreneur individuel, micro-enterprise.",
      "legal.notice.registration.trade": "Trading name / commercial name: Chambre 17.",
      "legal.notice.registration.company": "Company name: Mohamad Albi.",
      "legal.notice.registration.siren": "SIREN: 131 127 979.",
      "legal.notice.registration.siret": "SIRET: 131 127 979 00014.",
      "legal.notice.registration.ape": "APE code: 62.01Z - Computer programming activities.",
      "legal.notice.registration.rne": "Registered with the RNE on 06 October 2026.",
      "legal.notice.registration.department": "Department: 17 - Charente-Maritime.",
      "legal.notice.registration.formality": "Creation formality: J00288470180, deposited on 06 October 2026 with INSEE / URSSAF.",
      "legal.notice.registration.activity": "Main declared activity: design and development of websites and web applications; maintenance, updates and technical management of websites and web applications.",
      "legal.notice.registration.vat": "VAT status: franchise en base de TVA.",
      "legal.notice.registration.vat293": "In accordance with article 293 B of the French General Tax Code, VAT is not applicable.",
      "legal.notice.contact.title": "Contact",
      "legal.notice.contact.email": "Email:",
      "legal.notice.contact.phone": "WhatsApp / phone:",
      "legal.notice.hosting.title": "Hosting",
      "legal.notice.hosting.body": "This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States. Website:",
      "legal.notice.sales.title": "Services and online sales",
      "legal.notice.sales.body1": "This website presents CHAMBRE 17 services and allows visitors to contact CHAMBRE 17. No products or services are sold directly through an online checkout on this website.",
      "legal.notice.sales.body2": "Project scope, pricing, payment terms and any applicable service conditions are confirmed directly with the client before work begins.",
      "legal.notice.ip.title": "Intellectual property",
      "legal.notice.ip.body": "The CHAMBRE 17 name, visual identity, text, layout, interface elements, videos and other creative materials on this website are protected. Any reproduction, distribution or reuse without prior written permission is prohibited.",
      "legal.notice.links.title": "External links",
      "legal.notice.links.body": "This website may link to third-party websites, including selected client projects. CHAMBRE 17 is not responsible for the content, availability or privacy practices of third-party websites.",
      "legal.notice.liability.title": "Liability",
      "legal.notice.liability.body": "CHAMBRE 17 aims to keep the information on this website accurate and up to date. However, errors or omissions may occur. Visitors should contact CHAMBRE 17 directly for project-specific information, quotes or service conditions.",
      "legal.notice.law.title": "Applicable law",
      "legal.notice.law.body": "Unless otherwise required by mandatory law, this website is governed by French law.",
      "privacy.titleTag": "Privacy Policy | CHAMBRE 17",
      "privacy.description": "Privacy policy for CHAMBRE 17.",
      "privacy.h1": "Privacy Policy",
      "privacy.intro": "This policy explains how CHAMBRE 17 handles personal information submitted through this website or direct contact channels.",
      "privacy.controller.title": "Who is responsible",
      "privacy.controller.body": "Mohamad Albi, entrepreneur individuel trading as CHAMBRE 17, is responsible for the personal information received through this website and its contact channels.",
      "privacy.controller.contact": "Contact:",
      "privacy.data.title": "Data you may send",
      "privacy.data.body": "When you contact CHAMBRE 17, you may provide your name, company name, email address, phone number, project needs and message content.",
      "privacy.use.title": "How the data is used",
      "privacy.use.body": "Your information is used to understand your request, reply to you, prepare project discussions, provide quotes where relevant, and manage the commercial relationship if you decide to work with CHAMBRE 17.",
      "privacy.form.title": "Contact form status",
      "privacy.form.body": "The form on this website sends project enquiries to CHAMBRE 17 by email through a secure server-side email service. The visitor's email address is used as the reply-to address so CHAMBRE 17 can respond directly.",
      "privacy.basis.title": "Legal basis",
      "privacy.basis.body1": "Contact and project enquiry data is processed because you request information or services from CHAMBRE 17, or because communication is necessary before entering into a service agreement.",
      "privacy.basis.body2": "Client, project and administrative records may also be processed where necessary for legitimate business follow-up, performance of agreed services, legal obligations, invoicing, accounting and the establishment or defence of legal claims.",
      "privacy.retention.title": "Retention",
      "privacy.retention.body1": "Project enquiries that do not become client work are normally kept for up to 24 months after the last meaningful exchange, unless you ask for deletion earlier or a longer period is necessary to manage a dispute or legal claim.",
      "privacy.retention.body2": "Client, project, invoicing and accounting records are kept for the periods required by applicable French law and for the time necessary to manage the service relationship.",
      "privacy.sharing.title": "Sharing",
      "privacy.sharing.body1": "CHAMBRE 17 does not sell personal data. Information may be processed through normal technical service providers such as website hosting, email delivery, email inbox, messaging or business tools, only as needed to operate the service.",
      "privacy.sharing.body2": "The current website uses Vercel for hosting and server-side functions, Resend for contact-form email delivery, and iCloud email for receiving enquiries. If you contact CHAMBRE 17 through WhatsApp, WhatsApp's own terms and privacy practices also apply.",
      "privacy.cookies.title": "Cookies and local storage",
      "privacy.cookies.body": "This website does not use advertising cookies or analytics trackers. It may store your language preference locally in your browser so the website can remember your selected language. This preference is used only to display the website in the selected language.",
      "privacy.external.title": "External websites",
      "privacy.external.body": "Links to external websites, including portfolio examples, are subject to the privacy policies of those websites.",
      "privacy.rights.title": "Your rights",
      "privacy.rights.body1": "You may request access, correction, deletion, restriction, portability where applicable, or object to certain processing of your personal data by contacting",
      "privacy.rights.body2": "If you believe your data protection rights have not been respected, you may submit a complaint to the CNIL:",
      "privacy.security.title": "Security",
      "privacy.security.body": "CHAMBRE 17 takes reasonable technical and organisational measures to protect enquiry data and limit access to the people and providers needed to respond to requests and manage services.",
      "privacy.automated.title": "Automated decisions",
      "privacy.automated.body": "CHAMBRE 17 does not use the information submitted through this website for automated decision-making or profiling."
    },
    fr: {
      "home.titleTag": "Création de site internet à La Rochelle & Lagord | CHAMBRE 17",
      "home.description": "CHAMBRE 17, basé à Lagord : création de sites internet, applications web sur mesure et maintenance pour les entreprises de La Rochelle. Parlons de votre projet.",
      "nav.services": "Services",
      "nav.work": "Projets",
      "nav.about": "À propos",
      "nav.process": "Processus",
      "nav.contact": "Contact",
      "nav.cta": "Démarrer un projet",
      "hero.h1": "Création de sites internet à La Rochelle et Lagord",
      "services.learn": "Découvrir nos services",
      "hero.line1": "Parlez-nous de votre activité.",
      "hero.line2": "Nous construisons la solution digitale autour.",
      "hero.cta": "Démarrer la conversation",
      "hero.support": "Nous commençons par comprendre votre activité, vos clients et vos besoins. Ensuite, nous proposons et construisons la solution digitale qui a du sens pour vous.",
      "services.kicker": "Nos Services",
      "services.title": "Site web. Web app. Lancement. Gestion.",
      "services.website.title": "Création de sites internet",
      "services.website.body": "Un site internet sur mesure commence par votre activité. Nous construisons sa structure, son design et ses contenus autour de vos services, de vos clients et de vos objectifs.",
      "services.webapp.title": "Applications web sur mesure",
      "services.webapp.body": "Pour les entreprises qui ont besoin de plus qu'un simple site : réservations, portails clients, tableaux de bord, outils et systèmes digitaux sur mesure.",
      "services.launch.title": "Configuration de lancement digital",
      "services.launch.body": "Nous préparons les outils essentiels autour de votre site pour aider les clients à trouver votre entreprise et à vous contacter en ligne.",
      "services.launch.toggle": "Voir ce qui est inclus",
      "services.launch.item1": "Configuration Google Business Profile",
      "services.launch.item2": "Configuration WhatsApp Business",
      "services.launch.item3": "Configuration Google Ads et accompagnement au lancement",
      "services.launch.item4": "Bases du suivi et de la conversion",
      "services.launch.item5": "Checklist de lancement pour visibilité et contact",
      "services.management.title": "Maintenance de sites web",
      "services.management.body": "Nous gérons votre site chaque mois : mises à jour, changements, maintenance technique et améliorations continues après le lancement.",
      "services.local": "Basé à Lagord, CHAMBRE 17 accompagne les entreprises de La Rochelle et des environs : création de sites internet, développement d’applications web et maintenance mensuelle en option.",
      "work.kicker": "Projets sélectionnés",
      "work.title": "Des projets réels. Des entreprises réelles.",
      "work.lazoya.title": "LAZOYA — Centre de beauté",
      "work.lazoya": "Un site multilingue pour présenter les prestations du centre de beauté et faciliter la réservation en ligne. Nous avons conçu les pages de services et le parcours client, intégré la réservation et assurons la gestion du site.",
      "work.jleilati.title": "J. LEILATI — E-commerce",
      "work.jleilati": "Une boutique en ligne multilingue qui réunit la découverte des produits, le compte client et le paiement dans un même parcours. La plateforme comprend la gestion des produits et des options de livraison en Europe.",
      "work.tags.website": "Site web",
      "work.tags.booking": "Réservation",
      "work.tags.multilingual": "Multilingue",
      "work.tags.management": "Gestion continue",
      "work.tags.ecommerce": "E-commerce",
      "work.tags.webapp": "Web app",
      "work.tags.products": "Gestion produits",
      "work.tags.checkout": "Paiement",
      "work.view": "Voir le projet",
      "process.kicker": "Notre Processus",
      "process.title": "Le business d'abord.<br>La solution digitale ensuite.",
      "process.intro": "Chaque projet Chambre 17 commence par comprendre l'entreprise derrière l'écran.",
      "process.understand.title": "Nous commençons par votre business.",
      "process.understand.body": "Nous apprenons comment votre activité fonctionne, qui sont vos clients, ce dont vous avez besoin et ce que vous voulez atteindre.",
      "process.build.title": "Nous transformons l'idée en expérience digitale.",
      "process.build.body": "Nous définissons la structure, concevons l'expérience et construisons la solution autour de ce dont votre business a vraiment besoin.",
      "process.review.title": "Nous la revoyons ensemble.",
      "process.review.body": "Vous testez la solution, donnez votre retour et nous affinons les détails ensemble avant le lancement.",
      "process.launch.title": "Nous mettons en ligne.",
      "process.launch.body": "Nous testons, optimisons et lançons l'expérience finale sur tous les appareils.",
      "process.manage.title": "Nous restons avec elle.",
      "process.manage.body": "Après le lancement, nous pouvons gérer, maintenir et améliorer continuellement votre solution digitale.",
      "management.kicker": "Gestion mensuelle",
      "management.title": "Votre site avance avec votre business.",
      "management.body": "La gestion mensuelle est optionnelle. Après le lancement, Chambre 17 peut continuer à gérer les contenus, nouvelles pages ou fonctionnalités, maintenance technique, suivi des performances et améliorations continues.",
      "about.kicker": "À propos",
      "about.title": "Nous comprenons le business avant de designer le site.",
      "about.body1": "Chambre 17 est une chambre digitale indépendante, construite sur une expérience en stratégie business, marketing digital, data, IA, e-commerce, design et industries réelles.",
      "about.body2": "Notre approche est simple : nous ne commençons pas par un template. Nous commençons par comprendre votre business, vos clients, vos objectifs et ce que votre site doit vraiment accomplir.",
      "about.body3": "Ensuite, nous designons et construisons autour.",
      "about.sig": "Design. Business. Technologie. Tout dans la même pièce.",
      "about.cap.business": "Business",
      "about.cap.finance": "Finance",
      "about.cap.retail": "Retail",
      "about.cap.luxury": "Luxe",
      "about.cap.beauty": "Instituts de beauté",
      "about.cap.education": "Éducation",
      "about.cap.coaching": "Coaching",
      "about.cap.content": "Contenu",
      "about.cap.sales": "Vente",
      "about.cap.marketing": "Marketing digital",
      "about.cap.renovation": "Rénovation",
      "about.cap.realestate": "Immobilier",
      "about.cap.cars": "Automobile",
      "about.cap.data": "Data",
      "about.cap.ai": "IA",
      "about.cap.ecommerce": "E-commerce",
      "about.cap.design": "Design graphique",
      "contact.kicker": "Contact",
      "contact.title": "Démarrer un projet.",
      "form.name": "Nom",
      "form.company": "Entreprise",
      "form.email": "Email",
      "form.phone": "Téléphone (optionnel)",
      "form.need": "De quoi avez-vous besoin ?",
      "form.message": "Message",
      "form.submit": "Démarrer un projet",
      "form.option.website": "Site web",
      "form.option.webapp": "Web app",
      "form.option.launch": "Configuration de lancement digital",
      "form.option.management": "Gestion de site",
      "form.option.all": "Site web, web app et gestion",
      "form.option.unsure": "Je ne sais pas encore",
      "form.status.sending": "Envoi du message...",
      "form.status.success": "Message envoyé. Nous vous répondrons bientôt.",
      "form.status.error": "Une erreur est survenue. Veuillez nous écrire directement à chambre17@icloud.com.",
      "form.status.invalid": "Veuillez compléter les champs obligatoires avec une adresse email valide.",
      "footer.location": "Basé à Lagord · La Rochelle et ses environs",
      "footer.services": "Services",
      "footer.website": "Site web",
      "footer.webapp": "Web app",
      "footer.launch": "Lancement digital",
      "footer.management": "Gestion de site",
      "footer.contact": "Contact",
      "footer.legal": "Légal",
      "footer.legalNotice": "Mentions légales",
      "footer.privacy": "Politique de confidentialité",
      "legal.nav.privacy": "Politique de confidentialité",
      "legal.nav.notice": "Mentions légales",
      "legal.notice.titleTag": "Mentions légales | CHAMBRE 17",
      "legal.notice.description": "Mentions légales du site CHAMBRE 17.",
      "legal.notice.h1": "Mentions légales",
      "legal.notice.intro": "Ces mentions légales s'appliquent au site CHAMBRE 17 et aux pages de présentation de ses services.",
      "legal.notice.publisher.title": "Éditeur du site",
      "legal.notice.publisher.body": "CHAMBRE 17 est le nom commercial utilisé par Mohamad Albi, entrepreneur individuel, pour des services de création de sites web, développement de web apps et gestion de sites web.",
      "legal.notice.publisher.location": "Établissement enregistré : 17140 Lagord, France.",
      "legal.notice.publisher.contact": "Contact de l'éditeur :",
      "legal.notice.registration.title": "Immatriculation",
      "legal.notice.registration.legalForm": "Forme juridique : entrepreneur individuel, micro-entreprise.",
      "legal.notice.registration.trade": "Nom commercial : Chambre 17.",
      "legal.notice.registration.company": "Nom de l'entreprise : Mohamad Albi.",
      "legal.notice.registration.siren": "SIREN : 131 127 979.",
      "legal.notice.registration.siret": "SIRET : 131 127 979 00014.",
      "legal.notice.registration.ape": "Code APE : 62.01Z - Programmation informatique.",
      "legal.notice.registration.rne": "Immatriculé au RNE le 06 octobre 2026.",
      "legal.notice.registration.department": "Département : 17 - Charente-Maritime.",
      "legal.notice.registration.formality": "Formalité de création : J00288470180, déposée le 06 octobre 2026 auprès de l'INSEE / URSSAF.",
      "legal.notice.registration.activity": "Activité principale déclarée : conception et développement de sites web et web apps ; maintenance, mises à jour et gestion technique de sites web et web apps.",
      "legal.notice.registration.vat": "Statut TVA : franchise en base de TVA.",
      "legal.notice.registration.vat293": "Conformément à l'article 293 B du Code général des impôts, la TVA n'est pas applicable.",
      "legal.notice.contact.title": "Contact",
      "legal.notice.contact.email": "Email :",
      "legal.notice.contact.phone": "WhatsApp / téléphone :",
      "legal.notice.hosting.title": "Hébergement",
      "legal.notice.hosting.body": "Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Site web :",
      "legal.notice.sales.title": "Services et vente en ligne",
      "legal.notice.sales.body1": "Ce site présente les services de CHAMBRE 17 et permet aux visiteurs de contacter CHAMBRE 17. Aucun produit ou service n'est vendu directement via un paiement en ligne sur ce site.",
      "legal.notice.sales.body2": "Le périmètre du projet, les prix, les conditions de paiement et les conditions de service applicables sont confirmés directement avec le client avant le début du travail.",
      "legal.notice.ip.title": "Propriété intellectuelle",
      "legal.notice.ip.body": "Le nom CHAMBRE 17, l'identité visuelle, les textes, la mise en page, les éléments d'interface, les vidéos et les autres contenus créatifs du site sont protégés. Toute reproduction, diffusion ou réutilisation sans autorisation écrite préalable est interdite.",
      "legal.notice.links.title": "Liens externes",
      "legal.notice.links.body": "Ce site peut contenir des liens vers des sites tiers, notamment des projets clients sélectionnés. CHAMBRE 17 n'est pas responsable du contenu, de la disponibilité ou des pratiques de confidentialité de ces sites tiers.",
      "legal.notice.liability.title": "Responsabilité",
      "legal.notice.liability.body": "CHAMBRE 17 s'efforce de maintenir les informations de ce site exactes et à jour. Des erreurs ou omissions peuvent toutefois exister. Les visiteurs sont invités à contacter CHAMBRE 17 directement pour toute information spécifique, devis ou condition de service.",
      "legal.notice.law.title": "Droit applicable",
      "legal.notice.law.body": "Sauf disposition impérative contraire, ce site est soumis au droit français.",
      "privacy.titleTag": "Politique de confidentialité | CHAMBRE 17",
      "privacy.description": "Politique de confidentialité du site CHAMBRE 17.",
      "privacy.h1": "Politique de confidentialité",
      "privacy.intro": "Cette politique explique comment CHAMBRE 17 traite les informations personnelles transmises via ce site ou les canaux de contact directs.",
      "privacy.controller.title": "Responsable du traitement",
      "privacy.controller.body": "Mohamad Albi, entrepreneur individuel exerçant sous le nom commercial CHAMBRE 17, est responsable des informations personnelles reçues via ce site et ses canaux de contact.",
      "privacy.controller.contact": "Contact :",
      "privacy.data.title": "Données que vous pouvez transmettre",
      "privacy.data.body": "Lorsque vous contactez CHAMBRE 17, vous pouvez transmettre votre nom, le nom de votre entreprise, votre adresse email, votre numéro de téléphone, vos besoins de projet et le contenu de votre message.",
      "privacy.use.title": "Utilisation des données",
      "privacy.use.body": "Vos informations sont utilisées pour comprendre votre demande, vous répondre, préparer les échanges autour du projet, établir un devis si nécessaire et gérer la relation commerciale si vous décidez de travailler avec CHAMBRE 17.",
      "privacy.form.title": "Statut du formulaire de contact",
      "privacy.form.body": "Le formulaire du site envoie les demandes de projet à CHAMBRE 17 par email via un service d'envoi côté serveur. L'adresse email du visiteur est utilisée comme adresse de réponse afin que CHAMBRE 17 puisse répondre directement.",
      "privacy.basis.title": "Base légale",
      "privacy.basis.body1": "Les données de contact et de demande de projet sont traitées parce que vous demandez des informations ou des services à CHAMBRE 17, ou parce que la communication est nécessaire avant la conclusion éventuelle d'un contrat de service.",
      "privacy.basis.body2": "Les dossiers clients, projets et administratifs peuvent aussi être traités lorsque cela est nécessaire au suivi commercial légitime, à l'exécution des services convenus, aux obligations légales, à la facturation, à la comptabilité et à la constatation ou défense de droits.",
      "privacy.retention.title": "Conservation",
      "privacy.retention.body1": "Les demandes de projet qui ne deviennent pas des missions client sont normalement conservées jusqu'à 24 mois après le dernier échange significatif, sauf demande de suppression plus tôt ou nécessité de conservation plus longue pour gérer un litige ou une réclamation.",
      "privacy.retention.body2": "Les dossiers clients, projets, facturation et comptabilité sont conservés pendant les durées requises par le droit français applicable et pendant le temps nécessaire à la gestion de la relation de service.",
      "privacy.sharing.title": "Partage",
      "privacy.sharing.body1": "CHAMBRE 17 ne vend pas de données personnelles. Les informations peuvent être traitées par des prestataires techniques habituels, comme l'hébergement du site, l'envoi d'emails, la messagerie ou les outils professionnels, uniquement lorsque cela est nécessaire au fonctionnement du service.",
      "privacy.sharing.body2": "Le site utilise actuellement Vercel pour l'hébergement et les fonctions serveur, Resend pour l'envoi des emails du formulaire de contact, et iCloud email pour recevoir les demandes. Si vous contactez CHAMBRE 17 via WhatsApp, les conditions et pratiques de confidentialité propres à WhatsApp s'appliquent également.",
      "privacy.cookies.title": "Cookies et stockage local",
      "privacy.cookies.body": "Ce site n'utilise pas de cookies publicitaires ni de traceurs analytics. Il peut stocker localement votre préférence de langue dans votre navigateur afin de mémoriser la langue sélectionnée. Cette préférence sert uniquement à afficher le site dans la langue choisie.",
      "privacy.external.title": "Sites externes",
      "privacy.external.body": "Les liens vers des sites externes, y compris les exemples de portfolio, sont soumis aux politiques de confidentialité de ces sites.",
      "privacy.rights.title": "Vos droits",
      "privacy.rights.body1": "Vous pouvez demander l'accès, la rectification, la suppression, la limitation, la portabilité lorsque cela s'applique, ou vous opposer à certains traitements de vos données personnelles en contactant",
      "privacy.rights.body2": "Si vous estimez que vos droits en matière de protection des données n'ont pas été respectés, vous pouvez adresser une réclamation à la CNIL :",
      "privacy.security.title": "Sécurité",
      "privacy.security.body": "CHAMBRE 17 prend des mesures techniques et organisationnelles raisonnables pour protéger les données de demande et limiter leur accès aux personnes et prestataires nécessaires pour répondre aux demandes et gérer les services.",
      "privacy.automated.title": "Décisions automatisées",
      "privacy.automated.body": "CHAMBRE 17 n'utilise pas les informations transmises via ce site pour des décisions automatisées ou du profilage."
    },
    ar: {
      "home.titleTag": "تصميم مواقع في لا روشيل ولاغور | CHAMBRE 17",
      "home.description": "CHAMBRE 17 في لاغور: تصميم مواقع وتطبيقات ويب مخصصة للشركات في لا روشيل والمناطق المحيطة، مع صيانة شهرية اختيارية. تواصل معنا لمناقشة مشروعك.",
      "services.learn": "اكتشف خدماتنا باللغة الفرنسية",
      "nav.services": "الخدمات",
      "nav.work": "الأعمال",
      "nav.about": "من نحن",
      "nav.process": "العملية",
      "nav.contact": "تواصل",
      "nav.cta": "ابدأ مشروعك",
      "hero.h1": "تصميم مواقع في لا روشيل ولاغور",
      "hero.line1": "اخبرنا عن عملك.",
      "hero.line2": "نبني الحل الرقمي حوله.",
      "hero.cta": "ابدأ المحادثة",
      "hero.support": "نبدأ بفهم عملك وعملائك واحتياجاتك. ثم نقترح ونبني الحل الرقمي المناسب لك.",
      "services.kicker": "خدماتنا",
      "services.title": "موقع. تطبيق ويب. إطلاق. إدارة.",
      "services.website.title": "تصميم مواقع مخصص",
      "services.website.body": "نحن لا نبني مواقع فقط. نضيف منظوراً تجارياً لكل مشروع. تخبرنا عن عملك، ثم نصمم الحل الرقمي حول ما تحتاجه فعلاً.",
      "services.webapp.title": "تطوير تطبيقات ويب",
      "services.webapp.body": "للأعمال التي تحتاج أكثر من موقع بسيط: حجوزات، بوابات عملاء، لوحات تحكم، أدوات وأنظمة رقمية مخصصة.",
      "services.launch.title": "إعداد الإطلاق الرقمي",
      "services.launch.body": "نساعد عملك ليكون جاهزاً للظهور والتواصل عبر الإنترنت من خلال الإعدادات الأساسية حول موقعك.",
      "services.launch.toggle": "اعرض ما يشمله",
      "services.launch.item1": "إعداد Google Business Profile",
      "services.launch.item2": "إعداد WhatsApp Business",
      "services.launch.item3": "إعداد Google Ads ودعم الإطلاق",
      "services.launch.item4": "أساسيات التتبع وتوجيه التحويلات",
      "services.launch.item5": "قائمة إطلاق للظهور والتواصل",
      "services.management.title": "إدارة الموقع",
      "services.management.body": "ندير موقعك شهرياً: تحديثات، تعديلات، عناية تقنية، صيانة وتحسين مستمر بعد الإطلاق.",
      "services.local": "يساعد Chambre 17 الشركات على تحويل أفكارها وخدماتها وعملياتها إلى تجارب رقمية واضحة مبنية حول احتياجات العمل الحقيقية.",
      "work.kicker": "أعمال مختارة",
      "work.title": "مشاريع حقيقية. أعمال حقيقية.",
      "work.lazoya.title": "LAZOYA — مركز تجميل",
      "work.lazoya": "موقع وتجربة رقمية للخدمات مع حجز إلكتروني، محتوى متعدد اللغات ورحلة عميل مصممة حول مركز التجميل.",
      "work.jleilati.title": "J. LEILATI — تجارة إلكترونية",
      "work.jleilati": "منصة تجارة إلكترونية متعددة اللغات مع إدارة المنتجات، حسابات العملاء، الدفع والتوصيل داخل أوروبا.",
      "work.tags.website": "موقع",
      "work.tags.booking": "حجز",
      "work.tags.multilingual": "متعدد اللغات",
      "work.tags.management": "إدارة مستمرة",
      "work.tags.ecommerce": "تجارة إلكترونية",
      "work.tags.webapp": "تطبيق ويب",
      "work.tags.products": "إدارة المنتجات",
      "work.tags.checkout": "الدفع",
      "work.view": "عرض المشروع",
      "process.kicker": "طريقتنا",
      "process.title": "الأعمال أولاً.<br>الحل الرقمي ثانياً.",
      "process.intro": "كل مشروع في Chambre 17 يبدأ بفهم العمل خلف الشاشة.",
      "process.understand.title": "نبدأ بفهم عملك.",
      "process.understand.body": "نتعلم كيف يعمل نشاطك، من هم عملاؤك، ما الذي تحتاجه وما الذي تريد تحقيقه.",
      "process.build.title": "نحول الفكرة إلى تجربة رقمية.",
      "process.build.body": "نحدد البنية، نصمم التجربة ونبني الحل حول ما يحتاجه عملك فعلاً.",
      "process.review.title": "نراجعه معاً.",
      "process.review.body": "تجرب الحل، تعطينا ملاحظاتك، ثم نعدل التفاصيل معاً قبل الإطلاق.",
      "process.launch.title": "نطلقه.",
      "process.launch.body": "نختبر ونحسن ونطلق التجربة النهائية على مختلف الأجهزة.",
      "process.manage.title": "نبقى معه.",
      "process.manage.body": "بعد الإطلاق، يمكننا إدارة وصيانة وتحسين الحل الرقمي مع تطور عملك.",
      "management.kicker": "الإدارة الشهرية",
      "management.title": "موقعك يتطور مع عملك.",
      "management.body": "الإدارة الشهرية اختيارية. بعد الإطلاق يمكن لـ Chambre 17 متابعة تحديث المحتوى، إضافة صفحات أو مزايا جديدة، الصيانة التقنية، مراقبة الأداء والتحسين المستمر.",
      "about.kicker": "من نحن",
      "about.title": "نفهم العمل قبل تصميم الموقع.",
      "about.body1": "Chambre 17 غرفة رقمية مستقلة، مبنية على خبرة في استراتيجية الأعمال، التسويق الرقمي، البيانات، الذكاء الاصطناعي، التجارة الإلكترونية، التصميم وقطاعات حقيقية.",
      "about.body2": "طريقتنا بسيطة: لا نبدأ من قالب جاهز. نبدأ بفهم عملك، عملائك، أهدافك وما يجب أن يحققه موقعك فعلاً.",
      "about.body3": "بعد ذلك نصمم ونبني حوله.",
      "about.sig": "تصميم. أعمال. تقنية. كلها في غرفة واحدة.",
      "about.cap.business": "الأعمال",
      "about.cap.finance": "التمويل",
      "about.cap.retail": "التجزئة",
      "about.cap.luxury": "المنتجات الفاخرة",
      "about.cap.beauty": "صالونات التجميل",
      "about.cap.education": "التعليم",
      "about.cap.coaching": "التدريب",
      "about.cap.content": "المحتوى",
      "about.cap.sales": "المبيعات",
      "about.cap.marketing": "التسويق الرقمي",
      "about.cap.renovation": "التجديد",
      "about.cap.realestate": "العقارات",
      "about.cap.cars": "السيارات",
      "about.cap.data": "البيانات",
      "about.cap.ai": "الذكاء الاصطناعي",
      "about.cap.ecommerce": "التجارة الإلكترونية",
      "about.cap.design": "التصميم",
      "contact.kicker": "تواصل معنا",
      "contact.title": "ابدأ مشروعك.",
      "form.name": "الاسم",
      "form.company": "الشركة",
      "form.email": "البريد الإلكتروني",
      "form.phone": "الهاتف (اختياري)",
      "form.need": "ماذا تحتاج؟",
      "form.message": "الرسالة",
      "form.submit": "ابدأ مشروعك",
      "form.option.website": "تصميم موقع",
      "form.option.webapp": "تطوير تطبيق ويب",
      "form.option.launch": "إعداد الإطلاق الرقمي",
      "form.option.management": "إدارة موقع",
      "form.option.all": "موقع، تطبيق ويب وإدارة",
      "form.option.unsure": "لست متأكداً بعد",
      "form.status.sending": "جاري إرسال الرسالة...",
      "form.status.success": "تم إرسال الرسالة. سنعود إليك قريباً.",
      "form.status.error": "حدث خطأ. يرجى مراسلتنا مباشرة على chambre17@icloud.com.",
      "form.status.invalid": "يرجى إكمال الحقول المطلوبة وإدخال بريد إلكتروني صحيح.",
      "footer.location": "مواقع، تطبيقات ويب وإدارة",
      "footer.services": "الخدمات",
      "footer.website": "تصميم مواقع",
      "footer.webapp": "تطبيقات ويب",
      "footer.launch": "إعداد الإطلاق الرقمي",
      "footer.management": "إدارة الموقع",
      "footer.contact": "تواصل",
      "footer.legal": "قانوني",
      "footer.legalNotice": "الإشعار القانوني",
      "footer.privacy": "سياسة الخصوصية",
      "legal.nav.privacy": "سياسة الخصوصية",
      "legal.nav.notice": "الإشعار القانوني",
      "legal.notice.titleTag": "الإشعار القانوني | CHAMBRE 17",
      "legal.notice.description": "الإشعار القانوني لموقع CHAMBRE 17.",
      "legal.notice.h1": "الإشعار القانوني",
      "legal.notice.intro": "ينطبق هذا الإشعار القانوني على موقع CHAMBRE 17 وصفحات عرض خدماته.",
      "legal.notice.publisher.title": "ناشر الموقع",
      "legal.notice.publisher.body": "CHAMBRE 17 هو الاسم التجاري المستخدم من قبل Mohamad Albi، بصفته رائد أعمال فردي، لخدمات تصميم المواقع، تطوير تطبيقات الويب وإدارة المواقع.",
      "legal.notice.publisher.location": "المقر المسجل: 17140 Lagord، فرنسا.",
      "legal.notice.publisher.contact": "تواصل مع الناشر:",
      "legal.notice.registration.title": "معلومات التسجيل",
      "legal.notice.registration.legalForm": "الشكل القانوني: رائد أعمال فردي، micro-enterprise.",
      "legal.notice.registration.trade": "الاسم التجاري: Chambre 17.",
      "legal.notice.registration.company": "اسم الشركة: Mohamad Albi.",
      "legal.notice.registration.siren": "SIREN: 131 127 979.",
      "legal.notice.registration.siret": "SIRET: 131 127 979 00014.",
      "legal.notice.registration.ape": "رمز APE: 62.01Z - أنشطة البرمجة المعلوماتية.",
      "legal.notice.registration.rne": "مسجل في RNE بتاريخ 06 أكتوبر 2026.",
      "legal.notice.registration.department": "القسم: 17 - Charente-Maritime.",
      "legal.notice.registration.formality": "إجراء الإنشاء: J00288470180، أودع بتاريخ 06 أكتوبر 2026 لدى INSEE / URSSAF.",
      "legal.notice.registration.activity": "النشاط الرئيسي المعلن: تصميم وتطوير المواقع وتطبيقات الويب؛ الصيانة، التحديثات والإدارة التقنية للمواقع وتطبيقات الويب.",
      "legal.notice.registration.vat": "حالة ضريبة القيمة المضافة: franchise en base de TVA.",
      "legal.notice.registration.vat293": "وفقاً للمادة 293 B من قانون الضرائب الفرنسي العام، لا تطبق ضريبة القيمة المضافة.",
      "legal.notice.contact.title": "التواصل",
      "legal.notice.contact.email": "البريد الإلكتروني:",
      "legal.notice.contact.phone": "واتساب / الهاتف:",
      "legal.notice.hosting.title": "الاستضافة",
      "legal.notice.hosting.body": "تتم استضافة هذا الموقع لدى Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States. الموقع:",
      "legal.notice.sales.title": "الخدمات والبيع عبر الإنترنت",
      "legal.notice.sales.body1": "يعرض هذا الموقع خدمات CHAMBRE 17 ويتيح للزوار التواصل معنا. لا يتم بيع المنتجات أو الخدمات مباشرة عبر دفع إلكتروني داخل هذا الموقع.",
      "legal.notice.sales.body2": "يتم تأكيد نطاق المشروع، الأسعار، شروط الدفع وأي شروط خدمة مطبقة مباشرة مع العميل قبل بدء العمل.",
      "legal.notice.ip.title": "الملكية الفكرية",
      "legal.notice.ip.body": "اسم CHAMBRE 17، الهوية البصرية، النصوص، التخطيط، عناصر الواجهة، الفيديوهات والمواد الإبداعية الأخرى في هذا الموقع محمية. يمنع أي نسخ أو توزيع أو إعادة استخدام دون إذن كتابي مسبق.",
      "legal.notice.links.title": "الروابط الخارجية",
      "legal.notice.links.body": "قد يحتوي هذا الموقع على روابط لمواقع خارجية، بما في ذلك مشاريع عملاء مختارة. CHAMBRE 17 غير مسؤول عن محتوى أو توفر أو ممارسات الخصوصية الخاصة بهذه المواقع.",
      "legal.notice.liability.title": "المسؤولية",
      "legal.notice.liability.body": "يسعى CHAMBRE 17 إلى إبقاء معلومات هذا الموقع دقيقة ومحدثة. ومع ذلك قد تحدث أخطاء أو نواقص. يرجى التواصل مع CHAMBRE 17 مباشرة للحصول على معلومات أو عروض أسعار أو شروط خدمة خاصة بمشروعكم.",
      "legal.notice.law.title": "القانون المطبق",
      "legal.notice.law.body": "ما لم ينص قانون إلزامي على خلاف ذلك، يخضع هذا الموقع للقانون الفرنسي.",
      "privacy.titleTag": "سياسة الخصوصية | CHAMBRE 17",
      "privacy.description": "سياسة الخصوصية لموقع CHAMBRE 17.",
      "privacy.h1": "سياسة الخصوصية",
      "privacy.intro": "توضح هذه السياسة كيف يتعامل CHAMBRE 17 مع المعلومات الشخصية المرسلة عبر هذا الموقع أو قنوات التواصل المباشر.",
      "privacy.controller.title": "المسؤول عن البيانات",
      "privacy.controller.body": "Mohamad Albi، رائد أعمال فردي يعمل تحت الاسم التجاري CHAMBRE 17، هو المسؤول عن المعلومات الشخصية المستلمة عبر هذا الموقع وقنوات التواصل الخاصة به.",
      "privacy.controller.contact": "التواصل:",
      "privacy.data.title": "البيانات التي قد ترسلها",
      "privacy.data.body": "عند التواصل مع CHAMBRE 17، قد ترسل اسمك، اسم شركتك، بريدك الإلكتروني، رقم هاتفك، احتياجات مشروعك ومحتوى رسالتك.",
      "privacy.use.title": "كيفية استخدام البيانات",
      "privacy.use.body": "تُستخدم معلوماتك لفهم طلبك، الرد عليك، تحضير نقاشات المشروع، إعداد عرض سعر عند الحاجة، وإدارة العلاقة التجارية إذا قررت العمل مع CHAMBRE 17.",
      "privacy.form.title": "حالة نموذج التواصل",
      "privacy.form.body": "يرسل نموذج التواصل في هذا الموقع طلبات المشاريع إلى CHAMBRE 17 عبر البريد الإلكتروني من خلال خدمة إرسال آمنة من جهة الخادم. يتم استخدام بريد الزائر كعنوان للرد حتى يتمكن CHAMBRE 17 من الرد مباشرة.",
      "privacy.basis.title": "الأساس القانوني",
      "privacy.basis.body1": "تتم معالجة بيانات التواصل وطلبات المشاريع لأنك تطلب معلومات أو خدمات من CHAMBRE 17، أو لأن التواصل ضروري قبل الدخول المحتمل في اتفاقية خدمة.",
      "privacy.basis.body2": "قد تتم أيضاً معالجة سجلات العملاء والمشاريع والسجلات الإدارية عند الحاجة للمتابعة التجارية المشروعة، تنفيذ الخدمات المتفق عليها، الالتزامات القانونية، الفوترة، المحاسبة أو إثبات الحقوق والدفاع عنها.",
      "privacy.retention.title": "مدة الاحتفاظ",
      "privacy.retention.body1": "عادةً يتم الاحتفاظ بطلبات المشاريع التي لا تتحول إلى عمل فعلي لمدة تصل إلى 24 شهراً بعد آخر تبادل مهم، ما لم تطلب الحذف قبل ذلك أو تكون هناك حاجة لفترة أطول لإدارة نزاع أو مطالبة قانونية.",
      "privacy.retention.body2": "يتم الاحتفاظ بسجلات العملاء والمشاريع والفوترة والمحاسبة للمدد المطلوبة بموجب القانون الفرنسي المعمول به وللمدة اللازمة لإدارة علاقة الخدمة.",
      "privacy.sharing.title": "مشاركة البيانات",
      "privacy.sharing.body1": "لا يبيع CHAMBRE 17 البيانات الشخصية. قد تتم معالجة المعلومات عبر مزودي خدمات تقنية عاديين مثل استضافة الموقع، إرسال البريد الإلكتروني، صندوق البريد، أدوات المراسلة أو أدوات العمل، فقط عند الحاجة لتشغيل الخدمة.",
      "privacy.sharing.body2": "يستخدم الموقع حالياً Vercel للاستضافة ووظائف الخادم، وResend لإرسال رسائل نموذج التواصل، وiCloud email لاستلام الطلبات. إذا تواصلت مع CHAMBRE 17 عبر WhatsApp، فإن شروط وممارسات الخصوصية الخاصة بواتساب تنطبق أيضاً.",
      "privacy.cookies.title": "ملفات تعريف الارتباط والتخزين المحلي",
      "privacy.cookies.body": "لا يستخدم هذا الموقع ملفات تعريف ارتباط إعلانية أو أدوات تتبع تحليلية. قد يخزن تفضيل اللغة محلياً في متصفحك حتى يتذكر الموقع اللغة التي اخترتها. يُستخدم هذا التفضيل فقط لعرض الموقع باللغة المختارة.",
      "privacy.external.title": "المواقع الخارجية",
      "privacy.external.body": "تخضع الروابط إلى المواقع الخارجية، بما في ذلك أمثلة الأعمال، لسياسات الخصوصية الخاصة بتلك المواقع.",
      "privacy.rights.title": "حقوقك",
      "privacy.rights.body1": "يمكنك طلب الوصول إلى بياناتك، تصحيحها، حذفها، تقييدها، نقلها عند التطبيق، أو الاعتراض على بعض عمليات المعالجة من خلال التواصل عبر",
      "privacy.rights.body2": "إذا كنت تعتقد أن حقوقك المتعلقة بحماية البيانات لم تُحترم، يمكنك تقديم شكوى إلى CNIL:",
      "privacy.security.title": "الأمان",
      "privacy.security.body": "يتخذ CHAMBRE 17 تدابير تقنية وتنظيمية معقولة لحماية بيانات الطلبات وتقييد الوصول إليها للأشخاص ومزودي الخدمة اللازمين للرد على الطلبات وإدارة الخدمات.",
      "privacy.automated.title": "القرارات الآلية",
      "privacy.automated.body": "لا يستخدم CHAMBRE 17 المعلومات المرسلة عبر هذا الموقع لاتخاذ قرارات آلية أو لإنشاء ملفات تعريف شخصية."
    }
  };

  var heroVideoSources = {
    desktop: {
      en: "/assets/hero-chambre17.mp4",
      fr: "/assets/hero-fr.mp4",
      ar: "/assets/hero-ar-desktop.mp4"
    },
    mobile: {
      en: "/assets/hero-mobile-en.mp4",
      fr: "/assets/hero-mobile-fr.mp4",
      ar: "/assets/hero-mobile-ar.mp4"
    }
  };

  var mobileHeroQuery = window.matchMedia("(max-width: 640px)");

  function playHeroVideo(heroVideo) {
    if (!heroVideo) {
      return;
    }

    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.loop = true;
    heroVideo.autoplay = true;
    heroVideo.playsInline = true;
    heroVideo.setAttribute("muted", "");
    heroVideo.setAttribute("loop", "");
    heroVideo.setAttribute("autoplay", "");
    heroVideo.setAttribute("playsinline", "");
    heroVideo.setAttribute("webkit-playsinline", "");

    if (heroVideo.paused || heroVideo.readyState < 2) {
      var playPromise = heroVideo.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(function () {});
      }
    }
  }

  function setHeroVideo(lang) {
    var heroVideo = document.querySelector("[data-hero-video]");
    if (!heroVideo) {
      return;
    }

    var group = mobileHeroQuery.matches ? heroVideoSources.mobile : heroVideoSources.desktop;
    var nextSource = heroVideo.getAttribute(mobileHeroQuery.matches ? "data-mobile-src" : "data-desktop-src") || group[lang] || group.en;
    var nextPoster = heroVideo.getAttribute(mobileHeroQuery.matches ? "data-mobile-poster" : "data-desktop-poster");
    if (nextPoster && heroVideo.getAttribute("poster") !== nextPoster) heroVideo.setAttribute("poster", nextPoster);
    // The static page already selects its initial source with media queries.
    // Do not restart that download when the deferred script initializes.
    if (heroVideo.hasAttribute("data-desktop-src") && !heroVideo.hasAttribute("data-current-src")) {
      heroVideo.setAttribute("data-current-src", nextSource);
      playHeroVideo(heroVideo);
      return;
    }
    if (heroVideo.getAttribute("data-current-src") === nextSource) {
      return;
    }

    heroVideo.setAttribute("data-current-src", nextSource);
    heroVideo.innerHTML = '<source src="' + nextSource + '" type="video/mp4">';
    heroVideo.load();
    playHeroVideo(heroVideo);
    window.setTimeout(function () {
      playHeroVideo(heroVideo);
    }, 250);
  }

  function applyLanguage(lang) {
    var selected = translations[lang] ? lang : "en";
    var dict = translations[selected];
    var page = document.body.getAttribute("data-page");
    document.documentElement.lang = selected;
    document.documentElement.dir = selected === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("data-lang", selected);
    setHeroVideo(selected);
    if (page && dict[page + ".titleTag"]) {
      document.title = dict[page + ".titleTag"];
    }
    var metaDescription = document.querySelector('meta[name="description"]');
    if (page && metaDescription && dict[page + ".description"]) {
      metaDescription.setAttribute("content", dict[page + ".description"]);
    }
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (dict[key]) {
        node.innerHTML = dict[key];
      }
    });
    if (!document.body.hasAttribute("data-static-lang")) document.querySelectorAll('a[href^="/mentions-legales/"], a[href^="/politique-confidentialite/"], a[href="/"], a[href^="/?lang="]').forEach(function (link) {
      var href = link.getAttribute("href").split("?")[0];
      if (href === "/") {
        link.setAttribute("href", selected === "en" ? "/" : "/?lang=" + selected);
      } else {
        link.setAttribute("href", selected === "en" ? href : href + "?lang=" + selected);
      }
    });
    document.querySelectorAll("[data-lang-switch]").forEach(function (button) {
      button.setAttribute("data-active", String(button.getAttribute("data-lang-switch") === selected));
    });
    try {
      window.localStorage.setItem("chambre17-lang", selected);
    } catch (error) {}
  }

  document.querySelectorAll("button[data-lang-switch]").forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.getAttribute("data-lang-switch"));
      closeNav();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  var savedLanguage = document.body.getAttribute("data-static-lang") || "en";
  // Preserve old shared ?lang= links while keeping each new URL's language stable.
  var legacyParams = new URLSearchParams(window.location.search);
  var legacyLanguage = legacyParams.get("lang");
  if (["fr", "en", "ar"].indexOf(legacyLanguage) !== -1) {
    var alternate = document.querySelector('link[rel="alternate"][hreflang="' + legacyLanguage + '"]');
    if (alternate) {
      legacyParams.delete("lang");
      var legacyTarget = new URL(alternate.href).pathname + (legacyParams.toString() ? "?" + legacyParams.toString() : "") + window.location.hash;
      if (legacyLanguage !== savedLanguage) {
        window.location.replace(legacyTarget);
        return;
      }
      window.history.replaceState(null, "", legacyTarget);
    }
  }
  applyLanguage(savedLanguage);

  if (typeof mobileHeroQuery.addEventListener === "function") {
    mobileHeroQuery.addEventListener("change", function () {
      applyLanguage(document.documentElement.getAttribute("data-lang") || "en");
    });
  } else if (typeof mobileHeroQuery.addListener === "function") {
    mobileHeroQuery.addListener(function () {
      applyLanguage(document.documentElement.getAttribute("data-lang") || "en");
    });
  }

  var menuButton = document.querySelector("[data-menu-button]");
  var nav = document.querySelector("[data-nav]");
  function closeNav() {
    if (menuButton && nav) {
      nav.setAttribute("data-open", "false");
      menuButton.setAttribute("aria-expanded", "false");
    }
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      var isOpen = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!isOpen));
      menuButton.setAttribute("aria-expanded", String(!isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("click", function (event) {
      if (nav.getAttribute("data-open") === "true" && !nav.contains(event.target) && !menuButton.contains(event.target)) {
        closeNav();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.getAttribute("data-open") === "true") {
        closeNav();
        menuButton.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 980) {
        closeNav();
      }
    });
  }

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    document.documentElement.classList.add("reduced-motion");
  }

  var heroVideo = document.querySelector("[data-hero-video]");
  if (heroVideo) {
    heroVideo.addEventListener("error", function () {
      document.documentElement.classList.add("hero-video-missing");
    }, true);
    ["loadeddata", "canplay", "stalled", "suspend", "waiting", "ended", "pause"].forEach(function (eventName) {
      heroVideo.addEventListener(eventName, function () {
        playHeroVideo(heroVideo);
      });
    });
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) {
        playHeroVideo(heroVideo);
      }
    });
    window.addEventListener("pageshow", function () {
      playHeroVideo(heroVideo);
    });
    window.setInterval(function () {
      if (!document.hidden) {
        playHeroVideo(heroVideo);
      }
    }, 3000);
    playHeroVideo(heroVideo);
  }

  var revealItems = document.querySelectorAll("[data-reveal]");
  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.setAttribute("data-visible", "true");
    });
  }

  var processSteps = document.querySelectorAll("[data-process-step]");
  var processFlow = document.querySelector("[data-process-flow]");
  if (processSteps.length) {
    if (!prefersReducedMotion && "IntersectionObserver" in window) {
      var processObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            processSteps.forEach(function (step) {
              step.removeAttribute("data-active");
            });
            entry.target.setAttribute("data-active", "true");
          }
        });
      }, { threshold: 0.52, rootMargin: "-18% 0px -24% 0px" });

      processSteps.forEach(function (step) {
        processObserver.observe(step);
      });
    } else {
      processSteps[0].setAttribute("data-active", "true");
    }
  }

  var currentPageProgress = 0;
  function updateScrollDepth() {
    var scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var progress = Math.min(1, Math.max(0, window.scrollY / scrollable));
    currentPageProgress = progress;
    document.documentElement.style.setProperty("--page-progress", progress.toFixed(4));

    var heroDepth = document.querySelector("[data-hero-depth]");
    if (heroDepth) {
      var heroRect = heroDepth.getBoundingClientRect();
      var heroScrollable = Math.max(1, heroRect.height - window.innerHeight);
      var heroProgress = Math.min(1, Math.max(0, -heroRect.top / heroScrollable));
      heroDepth.style.setProperty("--hero-progress", heroProgress.toFixed(4));
      if (heroProgress > 0.86) {
        heroDepth.setAttribute("data-depth-complete", "true");
      } else {
        heroDepth.removeAttribute("data-depth-complete");
      }
    }

    if (processFlow) {
      var rect = processFlow.getBoundingClientRect();
      var start = window.innerHeight * 0.72;
      var end = -rect.height * 0.18;
      var processProgress = (start - rect.top) / Math.max(1, start - end);
      document.documentElement.style.setProperty("--process-progress", Math.min(1, Math.max(0, processProgress)).toFixed(4));
    }
  }

  updateScrollDepth();
  var scrollFramePending = false;
  function scheduleScrollDepth() {
    if (scrollFramePending) return;
    scrollFramePending = true;
    window.requestAnimationFrame(function () {
      scrollFramePending = false;
      updateScrollDepth();
    });
  }
  window.addEventListener("scroll", scheduleScrollDepth, { passive: true });
  window.addEventListener("resize", scheduleScrollDepth);

  document.querySelectorAll("[data-service-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      var detailsId = button.getAttribute("aria-controls");
      var details = detailsId ? document.getElementById(detailsId) : null;
      var isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      if (details) {
        details.hidden = isOpen;
      }
    });
  });

  if (!prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll("[data-tilt-card]").forEach(function (card) {
      card.addEventListener("pointermove", function (event) {
        var rect = card.getBoundingClientRect();
        var x = (event.clientX - rect.left) / rect.width - 0.5;
        var y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--tilt-x", (y * -5).toFixed(2) + "deg");
        card.style.setProperty("--tilt-y", (x * 6).toFixed(2) + "deg");
        card.style.setProperty("--glow-x", ((x + 0.5) * 100).toFixed(1) + "%");
        card.style.setProperty("--glow-y", ((y + 0.5) * 100).toFixed(1) + "%");
      });

      card.addEventListener("pointerleave", function () {
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
        card.style.removeProperty("--glow-x");
        card.style.removeProperty("--glow-y");
      });
    });
  }

  var ambientCanvas = document.querySelector("[data-ambient-canvas]");
  if (ambientCanvas && !prefersReducedMotion) {
    var ambientContext = ambientCanvas.getContext("2d");
    var ambientPoints = [];
    var ambientPointer = { x: 0.5, y: 0.5, active: false };
    var ambientFrame = 0;
    var ambientDpr = 1;

    function resizeAmbientCanvas() {
      ambientDpr = Math.min(window.devicePixelRatio || 1, 2);
      ambientCanvas.width = Math.floor(window.innerWidth * ambientDpr);
      ambientCanvas.height = Math.floor(window.innerHeight * ambientDpr);
      ambientCanvas.style.width = window.innerWidth + "px";
      ambientCanvas.style.height = window.innerHeight + "px";
      ambientContext.setTransform(ambientDpr, 0, 0, ambientDpr, 0, 0);

      var pointCount = window.innerWidth < 720 ? 34 : 62;
      ambientPoints = Array.from({ length: pointCount }, function (_, index) {
        return {
          x: (index * 0.61803398875 % 1) * window.innerWidth,
          y: ((index * 0.41421356237 + 0.17) % 1) * window.innerHeight,
          vx: ((index % 5) - 2) * 0.035,
          vy: (((index + 2) % 7) - 3) * 0.025,
          size: 0.6 + (index % 4) * 0.18
        };
      });
    }

    function drawAmbientCanvas() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var pageProgress = currentPageProgress;
      ambientFrame += 0.006;

      ambientContext.clearRect(0, 0, width, height);
      ambientContext.lineWidth = 1;

      ambientPoints.forEach(function (point, index) {
        point.x += point.vx + Math.sin(ambientFrame + index) * 0.018;
        point.y += point.vy + Math.cos(ambientFrame * 0.8 + index) * 0.014 + (pageProgress - 0.5) * 0.018;

        if (point.x < -20) point.x = width + 20;
        if (point.x > width + 20) point.x = -20;
        if (point.y < -20) point.y = height + 20;
        if (point.y > height + 20) point.y = -20;

        var pointerDistance = ambientPointer.active
          ? Math.hypot(point.x - ambientPointer.x * width, point.y - ambientPointer.y * height)
          : 9999;
        var pointAlpha = pointerDistance < 190 ? 0.34 : 0.14;

        ambientContext.beginPath();
        ambientContext.fillStyle = "rgba(255, 255, 255, " + pointAlpha + ")";
        ambientContext.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ambientContext.fill();
      });

      for (var i = 0; i < ambientPoints.length; i += 1) {
        for (var j = i + 1; j < ambientPoints.length; j += 1) {
          var a = ambientPoints[i];
          var b = ambientPoints[j];
          var distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 142) {
            var alpha = (1 - distance / 142) * 0.13;
            ambientContext.strokeStyle = "rgba(255, 255, 255, " + alpha + ")";
            ambientContext.beginPath();
            ambientContext.moveTo(a.x, a.y);
            ambientContext.lineTo(b.x, b.y);
            ambientContext.stroke();
          }
        }
      }

      ambientContext.save();
      ambientContext.translate(width * (0.22 + pageProgress * 0.56), height * 0.42);
      ambientContext.rotate(-0.32);
      var beam = ambientContext.createLinearGradient(-260, 0, 260, 0);
      beam.addColorStop(0, "rgba(255,255,255,0)");
      beam.addColorStop(0.5, "rgba(255,255,255,0.085)");
      beam.addColorStop(1, "rgba(255,255,255,0)");
      ambientContext.fillStyle = beam;
      ambientContext.fillRect(-260, -1, 520, 2);
      ambientContext.restore();

      window.requestAnimationFrame(drawAmbientCanvas);
    }

    resizeAmbientCanvas();
    drawAmbientCanvas();
    window.addEventListener("resize", resizeAmbientCanvas);
    window.addEventListener("pointermove", function (event) {
      ambientPointer.x = event.clientX / Math.max(1, window.innerWidth);
      ambientPointer.y = event.clientY / Math.max(1, window.innerHeight);
      ambientPointer.active = true;
    }, { passive: true });
    window.addEventListener("pointerleave", function () {
      ambientPointer.active = false;
    });
  }

  var contactForm = document.querySelector("[data-project-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      var selectedLanguage = document.documentElement.getAttribute("data-lang") || "en";
      var activeDictionary = translations[selectedLanguage] || translations.en;
      var statusNode = contactForm.querySelector("[data-form-status]");
      var submitButton = contactForm.querySelector('button[type="submit"]');

      if (!contactForm.checkValidity()) {
        if (statusNode) {
          statusNode.textContent = activeDictionary["form.status.invalid"];
          statusNode.setAttribute("data-state", "error");
        }
        contactForm.reportValidity();
        return;
      }

      var data = new FormData(contactForm);

      if (statusNode) {
        statusNode.textContent = activeDictionary["form.status.sending"];
        statusNode.setAttribute("data-state", "success");
      }

      if (submitButton) {
        submitButton.disabled = true;
      }

      try {
        var response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: data.get("name") || "",
            company: data.get("company") || "",
            email: data.get("email") || "",
            phone: data.get("phone") || "",
            need: data.get("need") || "",
            message: data.get("message") || "",
            website: data.get("website") || ""
          })
        });

        if (!response.ok) {
          throw new Error("Contact request failed");
        }

        contactForm.reset();
        if (statusNode) {
          statusNode.textContent = activeDictionary["form.status.success"];
          statusNode.setAttribute("data-state", "success");
        }
      } catch (error) {
        if (statusNode) {
          statusNode.textContent = activeDictionary["form.status.error"];
          statusNode.setAttribute("data-state", "error");
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
      }
    });
  }
}());
