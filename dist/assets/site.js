(function () {
  var config = window.CHAMBRE17_CONTACT || {};

  document.querySelectorAll("[data-contact-email]").forEach(function (node) {
    node.textContent = config.email || "Email";
    node.setAttribute("href", "mailto:" + (config.email || ""));
  });

  document.querySelectorAll("[data-contact-whatsapp]").forEach(function (node) {
    node.textContent = config.whatsapp || "WhatsApp";
    node.setAttribute("href", config.whatsappUrl || "#");
  });

  var translations = {
    en: {
      "nav.services": "Services",
      "nav.work": "Work",
      "nav.about": "About",
      "nav.process": "Process",
      "nav.contact": "Contact",
      "nav.cta": "Start a project",
      "hero.h1": "Tell us about your business. We'll build the digital solution around it.",
      "hero.line1": "Tell us about your business.",
      "hero.line2": "We'll build the digital solution around it.",
      "hero.cta": "Start a conversation",
      "hero.support": "We start by understanding your business, your customers and your needs. Then we propose and build the digital solution that makes sense for you.",
      "services.kicker": "Our Services",
      "services.title": "Website. Web app. Management.",
      "services.website.title": "Custom Website Design",
      "services.website.body": "We don't just build websites. We bring a business perspective to every project. You tell us about your business, and we design the digital solution around what you actually need.",
      "services.webapp.title": "Web App Development",
      "services.webapp.body": "For businesses that need more than a simple website: booking flows, client portals, dashboards, tools and custom digital systems.",
      "services.management.title": "Website Management",
      "services.management.body": "We manage your website monthly: updates, changes, technical care, maintenance and continuous improvements after launch.",
      "work.kicker": "Selected Work",
      "work.title": "Real projects. Real businesses.",
      "work.lazoya.title": "LAZOYA — Beauty Centre",
      "work.lazoya": "Service-focused website and digital experience with online booking integration, multilingual content and a customer journey designed around the beauty centre.",
      "work.jleilati.title": "J. LEILATI — E-commerce",
      "work.jleilati": "Multilingual e-commerce platform with product management, customer accounts, checkout and European delivery.",
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
      "about.body1": "Chambre 17 is an independent digital studio built on experience across business, retail, digital marketing, data, AI, e-commerce and graphic design.",
      "about.body2": "Our approach is simple: we don't start with a template. We start by understanding your business — your customers, your goals and what your website actually needs to achieve.",
      "about.body3": "Then we design and build around it.",
      "about.sig": "Design. Business. Technology. All in one room.",
      "about.cap.business": "Business",
      "about.cap.retail": "Retail",
      "about.cap.marketing": "Digital marketing",
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
      "form.option.management": "Website management",
      "form.option.all": "Website, web app and management",
      "form.option.unsure": "Not sure yet",
      "form.status.sending": "Sending your message...",
      "form.status.success": "Message sent. We will get back to you soon.",
      "form.status.error": "Something went wrong. Please email us directly at chambre17@icloud.com.",
      "form.status.invalid": "Please complete the required fields with a valid email address.",
      "footer.location": "Digital studio",
      "footer.services": "Services",
      "footer.website": "Website Design",
      "footer.webapp": "Web App Development",
      "footer.management": "Website Management",
      "footer.contact": "Contact",
      "footer.legal": "Legal",
      "footer.legalNotice": "Legal Notice",
      "footer.privacy": "Privacy Policy"
    },
    fr: {
      "nav.services": "Services",
      "nav.work": "Projets",
      "nav.about": "À propos",
      "nav.process": "Processus",
      "nav.contact": "Contact",
      "nav.cta": "Démarrer un projet",
      "hero.h1": "Parlez-nous de votre activité. Nous construirons la solution digitale autour.",
      "hero.line1": "Parlez-nous de votre activité.",
      "hero.line2": "Nous construisons la solution digitale autour.",
      "hero.cta": "Démarrer la conversation",
      "hero.support": "Nous commençons par comprendre votre activité, vos clients et vos besoins. Ensuite, nous proposons et construisons la solution digitale qui a du sens pour vous.",
      "services.kicker": "Nos Services",
      "services.title": "Site web. Web app. Gestion.",
      "services.website.title": "Site web sur mesure",
      "services.website.body": "Nous ne construisons pas seulement des sites web. Nous apportons une perspective business à chaque projet. Vous nous parlez de votre activité, et nous concevons la solution digitale autour de vos vrais besoins.",
      "services.webapp.title": "Développement web app",
      "services.webapp.body": "Pour les entreprises qui ont besoin de plus qu'un simple site : réservations, portails clients, tableaux de bord, outils et systèmes digitaux sur mesure.",
      "services.management.title": "Gestion de site web",
      "services.management.body": "Nous gérons votre site chaque mois : mises à jour, changements, maintenance technique et améliorations continues après le lancement.",
      "work.kicker": "Projets sélectionnés",
      "work.title": "Des projets réels. Des entreprises réelles.",
      "work.lazoya.title": "LAZOYA — Centre de beauté",
      "work.lazoya": "Site orienté service et expérience digitale avec réservation en ligne, contenu multilingue et parcours client pensé pour le centre de beauté.",
      "work.jleilati.title": "J. LEILATI — E-commerce",
      "work.jleilati": "Plateforme e-commerce multilingue avec gestion des produits, comptes clients, paiement et livraison en Europe.",
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
      "about.body1": "Chambre 17 est un studio digital indépendant construit sur une expérience en business, retail, marketing digital, data, IA, e-commerce et design graphique.",
      "about.body2": "Notre approche est simple : nous ne commençons pas par un template. Nous commençons par comprendre votre business, vos clients, vos objectifs et ce que votre site doit vraiment accomplir.",
      "about.body3": "Ensuite, nous designons et construisons autour.",
      "about.sig": "Design. Business. Technologie. Tout dans la même pièce.",
      "about.cap.business": "Business",
      "about.cap.retail": "Retail",
      "about.cap.marketing": "Marketing digital",
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
      "form.option.management": "Gestion de site",
      "form.option.all": "Site web, web app et gestion",
      "form.option.unsure": "Je ne sais pas encore",
      "form.status.sending": "Envoi du message...",
      "form.status.success": "Message envoyé. Nous vous répondrons bientôt.",
      "form.status.error": "Une erreur est survenue. Veuillez nous écrire directement à chambre17@icloud.com.",
      "form.status.invalid": "Veuillez compléter les champs obligatoires avec une adresse email valide.",
      "footer.location": "Digital studio",
      "footer.services": "Services",
      "footer.website": "Site web",
      "footer.webapp": "Web app",
      "footer.management": "Gestion de site",
      "footer.contact": "Contact",
      "footer.legal": "Légal",
      "footer.legalNotice": "Mentions légales",
      "footer.privacy": "Politique de confidentialité"
    },
    ar: {
      "nav.services": "الخدمات",
      "nav.work": "الأعمال",
      "nav.about": "من نحن",
      "nav.process": "العملية",
      "nav.contact": "تواصل",
      "nav.cta": "ابدأ مشروعك",
      "hero.h1": "أخبرنا عن مشروعك. وسنبني الحل الرقمي المناسب له.",
      "hero.line1": "اخبرنا عن عملك.",
      "hero.line2": "نبني الحل الرقمي حوله.",
      "hero.cta": "ابدأ المحادثة",
      "hero.support": "نبدأ بفهم عملك وعملائك واحتياجاتك. ثم نقترح ونبني الحل الرقمي المناسب لك.",
      "services.kicker": "خدماتنا",
      "services.title": "موقع. تطبيق ويب. إدارة.",
      "services.website.title": "تصميم مواقع مخصص",
      "services.website.body": "نحن لا نبني مواقع فقط. نضيف منظوراً تجارياً لكل مشروع. تخبرنا عن عملك، ثم نصمم الحل الرقمي حول ما تحتاجه فعلاً.",
      "services.webapp.title": "تطوير تطبيقات ويب",
      "services.webapp.body": "للأعمال التي تحتاج أكثر من موقع بسيط: حجوزات، بوابات عملاء، لوحات تحكم، أدوات وأنظمة رقمية مخصصة.",
      "services.management.title": "إدارة الموقع",
      "services.management.body": "ندير موقعك شهرياً: تحديثات، تعديلات، عناية تقنية، صيانة وتحسين مستمر بعد الإطلاق.",
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
      "about.body1": "Chambre 17 استوديو رقمي مستقل، مبني على خبرة في الأعمال، التجزئة، التسويق الرقمي، البيانات، الذكاء الاصطناعي، التجارة الإلكترونية والتصميم.",
      "about.body2": "طريقتنا بسيطة: لا نبدأ من قالب جاهز. نبدأ بفهم عملك، عملائك، أهدافك وما يجب أن يحققه موقعك فعلاً.",
      "about.body3": "بعد ذلك نصمم ونبني حوله.",
      "about.sig": "تصميم. أعمال. تقنية. كلها في غرفة واحدة.",
      "about.cap.business": "الأعمال",
      "about.cap.retail": "التجزئة",
      "about.cap.marketing": "التسويق الرقمي",
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
      "form.option.management": "إدارة موقع",
      "form.option.all": "موقع، تطبيق ويب وإدارة",
      "form.option.unsure": "لست متأكداً بعد",
      "form.status.sending": "جاري إرسال الرسالة...",
      "form.status.success": "تم إرسال الرسالة. سنعود إليك قريباً.",
      "form.status.error": "حدث خطأ. يرجى مراسلتنا مباشرة على chambre17@icloud.com.",
      "form.status.invalid": "يرجى إكمال الحقول المطلوبة وإدخال بريد إلكتروني صحيح.",
      "footer.location": "استوديو رقمي",
      "footer.services": "الخدمات",
      "footer.website": "تصميم مواقع",
      "footer.webapp": "تطبيقات ويب",
      "footer.management": "إدارة الموقع",
      "footer.contact": "تواصل",
      "footer.legal": "قانوني",
      "footer.legalNotice": "الإشعار القانوني",
      "footer.privacy": "سياسة الخصوصية"
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

  function setHeroVideo(lang) {
    var heroVideo = document.querySelector("[data-hero-video]");
    if (!heroVideo) {
      return;
    }

    var group = mobileHeroQuery.matches ? heroVideoSources.mobile : heroVideoSources.desktop;
    var nextSource = group[lang] || group.en;
    if (heroVideo.getAttribute("data-current-src") === nextSource) {
      return;
    }

    heroVideo.setAttribute("data-current-src", nextSource);
    heroVideo.innerHTML = '<source src="' + nextSource + '" type="video/mp4">';
    heroVideo.load();

    var playPromise = heroVideo.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {});
    }
  }

  function applyLanguage(lang) {
    var selected = translations[lang] ? lang : "en";
    var dict = translations[selected];
    document.documentElement.lang = selected;
    document.documentElement.dir = selected === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("data-lang", selected);
    setHeroVideo(selected);
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (dict[key]) {
        node.innerHTML = dict[key];
      }
    });
    document.querySelectorAll("[data-lang-switch]").forEach(function (button) {
      button.setAttribute("data-active", String(button.getAttribute("data-lang-switch") === selected));
    });
    try {
      window.localStorage.setItem("chambre17-lang", selected);
    } catch (error) {}
  }

  document.querySelectorAll("[data-lang-switch]").forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.getAttribute("data-lang-switch"));
      closeNav();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  var savedLanguage = "en";
  try {
    savedLanguage = window.localStorage.getItem("chambre17-lang") || (navigator.language || "en").slice(0, 2);
  } catch (error) {}
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
      if (event.key === "Escape") {
        closeNav();
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

  function updateScrollDepth() {
    var scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var progress = Math.min(1, Math.max(0, window.scrollY / scrollable));
    document.documentElement.style.setProperty("--page-progress", progress.toFixed(4));

    if (processFlow) {
      var rect = processFlow.getBoundingClientRect();
      var start = window.innerHeight * 0.72;
      var end = -rect.height * 0.18;
      var processProgress = (start - rect.top) / Math.max(1, start - end);
      document.documentElement.style.setProperty("--process-progress", Math.min(1, Math.max(0, processProgress)).toFixed(4));
    }
  }

  updateScrollDepth();
  window.addEventListener("scroll", updateScrollDepth, { passive: true });
  window.addEventListener("resize", updateScrollDepth);

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
      var pageProgress = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--page-progress")) || 0;
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
            message: data.get("message") || ""
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
