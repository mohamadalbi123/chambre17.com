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

  var translations = {"fr": {"home.titleTag": "Création de site internet à La Rochelle & Lagord | CHAMBRE 17", "home.description": "CHAMBRE 17, basé à Lagord : création de sites internet, applications web sur mesure et maintenance pour les entreprises de La Rochelle. Parlons de votre projet.", "nav.services": "Services", "nav.work": "Projets", "nav.about": "À propos", "nav.process": "Processus", "nav.contact": "Contact", "nav.cta": "Démarrer un projet", "hero.h1": "Création de sites internet à La Rochelle et Lagord", "services.learn": "Découvrir nos services", "hero.line1": "Parlez-nous de votre activité.", "hero.line2": "Nous construisons la solution digitale autour.", "hero.cta": "Démarrer la conversation", "hero.support": "Nous commençons par comprendre votre activité, vos clients et vos besoins. Ensuite, nous proposons et construisons la solution digitale qui a du sens pour vous.", "services.kicker": "Nos Services", "services.title": "Site web. Web app. Lancement. Gestion.", "services.website.title": "Création de sites internet", "services.website.body": "Un site internet sur mesure commence par votre activité. Nous construisons sa structure, son design et ses contenus autour de vos services, de vos clients et de vos objectifs.", "services.webapp.title": "Applications web sur mesure", "services.webapp.body": "Pour les entreprises qui ont besoin de plus qu'un simple site : réservations, portails clients, tableaux de bord, outils et systèmes digitaux sur mesure.", "services.launch.title": "Configuration de lancement digital", "services.launch.body": "Nous préparons les outils essentiels autour de votre site pour aider les clients à trouver votre entreprise et à vous contacter en ligne.", "services.launch.toggle": "Voir ce qui est inclus", "services.launch.item1": "Configuration Google Business Profile", "services.launch.item2": "Configuration WhatsApp Business", "services.launch.item3": "Configuration Google Ads et accompagnement au lancement", "services.launch.item4": "Bases du suivi et de la conversion", "services.launch.item5": "Checklist de lancement pour visibilité et contact", "services.management.title": "Maintenance de sites web", "services.management.body": "Nous gérons votre site chaque mois : mises à jour, changements, maintenance technique et améliorations continues après le lancement.", "services.local": "Basé à Lagord, CHAMBRE 17 accompagne les entreprises de La Rochelle et des environs : création de sites internet, développement d’applications web et maintenance mensuelle en option.", "work.kicker": "Projets sélectionnés", "work.title": "Des projets réels. Des entreprises réelles.", "work.lazoya.title": "LAZOYA — Centre de beauté", "work.lazoya": "Un site multilingue pour présenter les prestations du centre de beauté et faciliter la réservation en ligne. Nous avons conçu les pages de services et le parcours client, intégré la réservation et assurons la gestion du site.", "work.jleilati.title": "J. LEILATI — E-commerce", "work.jleilati": "Une boutique en ligne multilingue qui réunit la découverte des produits, le compte client et le paiement dans un même parcours. La plateforme comprend la gestion des produits et des options de livraison en Europe.", "work.tags.website": "Site web", "work.tags.booking": "Réservation", "work.tags.multilingual": "Multilingue", "work.tags.management": "Gestion continue", "work.tags.ecommerce": "E-commerce", "work.tags.webapp": "Web app", "work.tags.products": "Gestion produits", "work.tags.checkout": "Paiement", "work.view": "Voir le projet", "process.kicker": "Notre Processus", "process.title": "Le business d'abord.<br>La solution digitale ensuite.", "process.intro": "Chaque projet Chambre 17 commence par comprendre l'entreprise derrière l'écran.", "process.understand.title": "Nous commençons par votre business.", "process.understand.body": "Nous apprenons comment votre activité fonctionne, qui sont vos clients, ce dont vous avez besoin et ce que vous voulez atteindre.", "process.build.title": "Nous transformons l'idée en expérience digitale.", "process.build.body": "Nous définissons la structure, concevons l'expérience et construisons la solution autour de ce dont votre business a vraiment besoin.", "process.review.title": "Nous la revoyons ensemble.", "process.review.body": "Vous testez la solution, donnez votre retour et nous affinons les détails ensemble avant le lancement.", "process.launch.title": "Nous mettons en ligne.", "process.launch.body": "Nous testons, optimisons et lançons l'expérience finale sur tous les appareils.", "process.manage.title": "Nous restons avec elle.", "process.manage.body": "Après le lancement, nous pouvons gérer, maintenir et améliorer continuellement votre solution digitale.", "management.kicker": "Gestion mensuelle", "management.title": "Votre site avance avec votre business.", "management.body": "La gestion mensuelle est optionnelle. Après le lancement, Chambre 17 peut continuer à gérer les contenus, nouvelles pages ou fonctionnalités, maintenance technique, suivi des performances et améliorations continues.", "about.kicker": "À propos", "about.title": "Nous comprenons le business avant de designer le site.", "about.body1": "Chambre 17 est une chambre digitale indépendante, construite sur une expérience en stratégie business, marketing digital, data, IA, e-commerce, design et industries réelles.", "about.body2": "Notre approche est simple : nous ne commençons pas par un template. Nous commençons par comprendre votre business, vos clients, vos objectifs et ce que votre site doit vraiment accomplir.", "about.body3": "Ensuite, nous designons et construisons autour.", "about.sig": "Design. Business. Technologie. Tout dans la même pièce.", "about.cap.business": "Business", "about.cap.finance": "Finance", "about.cap.retail": "Retail", "about.cap.luxury": "Luxe", "about.cap.beauty": "Instituts de beauté", "about.cap.education": "Éducation", "about.cap.coaching": "Coaching", "about.cap.content": "Contenu", "about.cap.sales": "Vente", "about.cap.marketing": "Marketing digital", "about.cap.renovation": "Rénovation", "about.cap.realestate": "Immobilier", "about.cap.cars": "Automobile", "about.cap.data": "Data", "about.cap.ai": "IA", "about.cap.ecommerce": "E-commerce", "about.cap.design": "Design graphique", "contact.kicker": "Contact", "contact.title": "Démarrer un projet.", "form.name": "Nom", "form.company": "Entreprise", "form.email": "Email", "form.phone": "Téléphone (optionnel)", "form.need": "De quoi avez-vous besoin ?", "form.message": "Message", "form.submit": "Démarrer un projet", "form.option.website": "Site web", "form.option.webapp": "Web app", "form.option.launch": "Configuration de lancement digital", "form.option.management": "Gestion de site", "form.option.all": "Site web, web app et gestion", "form.option.unsure": "Je ne sais pas encore", "form.status.sending": "Envoi du message...", "form.status.success": "Message envoyé. Nous vous répondrons bientôt.", "form.status.error": "Une erreur est survenue. Veuillez nous écrire directement à chambre17@icloud.com.", "form.status.invalid": "Veuillez compléter les champs obligatoires avec une adresse email valide.", "footer.location": "Basé à Lagord · La Rochelle et ses environs", "footer.services": "Services", "footer.website": "Site web", "footer.webapp": "Web app", "footer.launch": "Lancement digital", "footer.management": "Gestion de site", "footer.contact": "Contact", "footer.legal": "Légal", "footer.legalNotice": "Mentions légales", "footer.privacy": "Politique de confidentialité", "legal.nav.privacy": "Politique de confidentialité", "legal.nav.notice": "Mentions légales", "legal.notice.titleTag": "Mentions légales | CHAMBRE 17", "legal.notice.description": "Mentions légales du site CHAMBRE 17.", "legal.notice.h1": "Mentions légales", "legal.notice.intro": "Ces mentions légales s'appliquent au site CHAMBRE 17 et aux pages de présentation de ses services.", "legal.notice.publisher.title": "Éditeur du site", "legal.notice.publisher.body": "CHAMBRE 17 est le nom commercial utilisé par Mohamad Albi, entrepreneur individuel, pour des services de création de sites web, développement de web apps et gestion de sites web.", "legal.notice.publisher.location": "Établissement enregistré : 17140 Lagord, France.", "legal.notice.publisher.contact": "Contact de l'éditeur :", "legal.notice.registration.title": "Immatriculation", "legal.notice.registration.legalForm": "Forme juridique : entrepreneur individuel, micro-entreprise.", "legal.notice.registration.trade": "Nom commercial : Chambre 17.", "legal.notice.registration.company": "Nom de l'entreprise : Mohamad Albi.", "legal.notice.registration.siren": "SIREN : 131 127 979.", "legal.notice.registration.siret": "SIRET : 131 127 979 00014.", "legal.notice.registration.ape": "Code APE : 62.01Z - Programmation informatique.", "legal.notice.registration.rne": "Immatriculé au RNE le 06 octobre 2026.", "legal.notice.registration.department": "Département : 17 - Charente-Maritime.", "legal.notice.registration.formality": "Formalité de création : J00288470180, déposée le 06 octobre 2026 auprès de l'INSEE / URSSAF.", "legal.notice.registration.activity": "Activité principale déclarée : conception et développement de sites web et web apps ; maintenance, mises à jour et gestion technique de sites web et web apps.", "legal.notice.registration.vat": "Statut TVA : franchise en base de TVA.", "legal.notice.registration.vat293": "Conformément à l'article 293 B du Code général des impôts, la TVA n'est pas applicable.", "legal.notice.contact.title": "Contact", "legal.notice.contact.email": "Email :", "legal.notice.contact.phone": "WhatsApp / téléphone :", "legal.notice.hosting.title": "Hébergement", "legal.notice.hosting.body": "Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Site web :", "legal.notice.sales.title": "Services et vente en ligne", "legal.notice.sales.body1": "Ce site présente les services de CHAMBRE 17 et permet aux visiteurs de contacter CHAMBRE 17. Aucun produit ou service n'est vendu directement via un paiement en ligne sur ce site.", "legal.notice.sales.body2": "Le périmètre du projet, les prix, les conditions de paiement et les conditions de service applicables sont confirmés directement avec le client avant le début du travail.", "legal.notice.ip.title": "Propriété intellectuelle", "legal.notice.ip.body": "Le nom CHAMBRE 17, l'identité visuelle, les textes, la mise en page, les éléments d'interface, les vidéos et les autres contenus créatifs du site sont protégés. Toute reproduction, diffusion ou réutilisation sans autorisation écrite préalable est interdite.", "legal.notice.links.title": "Liens externes", "legal.notice.links.body": "Ce site peut contenir des liens vers des sites tiers, notamment des projets clients sélectionnés. CHAMBRE 17 n'est pas responsable du contenu, de la disponibilité ou des pratiques de confidentialité de ces sites tiers.", "legal.notice.liability.title": "Responsabilité", "legal.notice.liability.body": "CHAMBRE 17 s'efforce de maintenir les informations de ce site exactes et à jour. Des erreurs ou omissions peuvent toutefois exister. Les visiteurs sont invités à contacter CHAMBRE 17 directement pour toute information spécifique, devis ou condition de service.", "legal.notice.law.title": "Droit applicable", "legal.notice.law.body": "Sauf disposition impérative contraire, ce site est soumis au droit français.", "privacy.titleTag": "Politique de confidentialité | CHAMBRE 17", "privacy.description": "Politique de confidentialité du site CHAMBRE 17.", "privacy.h1": "Politique de confidentialité", "privacy.intro": "Cette politique explique comment CHAMBRE 17 traite les informations personnelles transmises via ce site ou les canaux de contact directs.", "privacy.controller.title": "Responsable du traitement", "privacy.controller.body": "Mohamad Albi, entrepreneur individuel exerçant sous le nom commercial CHAMBRE 17, est responsable des informations personnelles reçues via ce site et ses canaux de contact.", "privacy.controller.contact": "Contact :", "privacy.data.title": "Données que vous pouvez transmettre", "privacy.data.body": "Lorsque vous contactez CHAMBRE 17, vous pouvez transmettre votre nom, le nom de votre entreprise, votre adresse email, votre numéro de téléphone, vos besoins de projet et le contenu de votre message.", "privacy.use.title": "Utilisation des données", "privacy.use.body": "Vos informations sont utilisées pour comprendre votre demande, vous répondre, préparer les échanges autour du projet, établir un devis si nécessaire et gérer la relation commerciale si vous décidez de travailler avec CHAMBRE 17.", "privacy.form.title": "Statut du formulaire de contact", "privacy.form.body": "Le formulaire du site envoie les demandes de projet à CHAMBRE 17 par email via un service d'envoi côté serveur. L'adresse email du visiteur est utilisée comme adresse de réponse afin que CHAMBRE 17 puisse répondre directement.", "privacy.basis.title": "Base légale", "privacy.basis.body1": "Les données de contact et de demande de projet sont traitées parce que vous demandez des informations ou des services à CHAMBRE 17, ou parce que la communication est nécessaire avant la conclusion éventuelle d'un contrat de service.", "privacy.basis.body2": "Les dossiers clients, projets et administratifs peuvent aussi être traités lorsque cela est nécessaire au suivi commercial légitime, à l'exécution des services convenus, aux obligations légales, à la facturation, à la comptabilité et à la constatation ou défense de droits.", "privacy.retention.title": "Conservation", "privacy.retention.body1": "Les demandes de projet qui ne deviennent pas des missions client sont normalement conservées jusqu'à 24 mois après le dernier échange significatif, sauf demande de suppression plus tôt ou nécessité de conservation plus longue pour gérer un litige ou une réclamation.", "privacy.retention.body2": "Les dossiers clients, projets, facturation et comptabilité sont conservés pendant les durées requises par le droit français applicable et pendant le temps nécessaire à la gestion de la relation de service.", "privacy.sharing.title": "Partage", "privacy.sharing.body1": "CHAMBRE 17 ne vend pas de données personnelles. Les informations peuvent être traitées par des prestataires techniques habituels, comme l'hébergement du site, l'envoi d'emails, la messagerie ou les outils professionnels, uniquement lorsque cela est nécessaire au fonctionnement du service.", "privacy.sharing.body2": "Le site utilise actuellement Vercel pour l'hébergement et les fonctions serveur, Resend pour l'envoi des emails du formulaire de contact, et iCloud email pour recevoir les demandes. Si vous contactez CHAMBRE 17 via WhatsApp, les conditions et pratiques de confidentialité propres à WhatsApp s'appliquent également.", "privacy.cookies.title": "Cookies et stockage local", "privacy.cookies.body": "Ce site n'utilise pas de cookies publicitaires ni de traceurs analytics. Il peut stocker localement votre préférence de langue dans votre navigateur afin de mémoriser la langue sélectionnée. Cette préférence sert uniquement à afficher le site dans la langue choisie.", "privacy.external.title": "Sites externes", "privacy.external.body": "Les liens vers des sites externes, y compris les exemples de portfolio, sont soumis aux politiques de confidentialité de ces sites.", "privacy.rights.title": "Vos droits", "privacy.rights.body1": "Vous pouvez demander l'accès, la rectification, la suppression, la limitation, la portabilité lorsque cela s'applique, ou vous opposer à certains traitements de vos données personnelles en contactant", "privacy.rights.body2": "Si vous estimez que vos droits en matière de protection des données n'ont pas été respectés, vous pouvez adresser une réclamation à la CNIL :", "privacy.security.title": "Sécurité", "privacy.security.body": "CHAMBRE 17 prend des mesures techniques et organisationnelles raisonnables pour protéger les données de demande et limiter leur accès aux personnes et prestataires nécessaires pour répondre aux demandes et gérer les services.", "privacy.automated.title": "Décisions automatisées", "privacy.automated.body": "CHAMBRE 17 n'utilise pas les informations transmises via ce site pour des décisions automatisées ou du profilage."}};

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
