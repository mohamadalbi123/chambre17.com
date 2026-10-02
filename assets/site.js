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

  document.querySelectorAll("[data-contact-x]").forEach(function (node) {
    node.setAttribute("href", config.xUrl || "#");
  });

  var translations = {
    en: {
      "nav.services": "Services",
      "nav.work": "Work",
      "nav.about": "About",
      "nav.process": "Process",
      "nav.contact": "Contact",
      "nav.cta": "Start a project",
      "hero.line1": "Tell us about your business.",
      "hero.line2": "We'll build the digital solution around it.",
      "hero.cta": "Start a conversation",
      "hero.support": "We start by understanding your business, your customers and your needs. Then we propose and build the digital solution that makes sense for you.",
      "services.kicker": "Our Services",
      "services.title": "Website. Web app. Management.",
      "services.website.title": "Custom Website Design",
      "services.website.body": "We do not offer just a website. We offer business perspective. You explain your business, then we design the exact website you need with the right tools.",
      "services.webapp.title": "Web App Development",
      "services.webapp.body": "For businesses that need more than a simple website: booking flows, client portals, dashboards, tools and custom digital systems.",
      "services.management.title": "Website Management",
      "services.management.body": "We manage your website monthly: updates, changes, technical care, maintenance and continuous improvements after launch.",
      "work.kicker": "Selected Work",
      "work.title": "Real projects. Real businesses.",
      "work.lazoya": "Brand and digital commerce experience for a product-led business.",
      "work.jleilati": "A refined web presence built around clarity, trust and conversion.",
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
      "management.body": "Your website can stay maintained, updated and improved every month.",
      "about.kicker": "About Us",
      "about.title": "We understand business before we design the website.",
      "about.body1": "Chambre 17 is an independent digital studio built on experience across business, retail, digital marketing, data, AI, e-commerce and graphic design.",
      "about.body2": "Our approach is simple: we don't start with a template. We start by understanding your business — your customers, your goals and what your website actually needs to achieve.",
      "about.body3": "Then we design and build around it.",
      "about.sig1": "Design. Business. Technology.",
      "about.sig2": "All in one room.",
      "contact.kicker": "Contact Us",
      "contact.title": "Start a project.",
      "form.name": "Name",
      "form.company": "Company",
      "form.email": "Email",
      "form.phone": "Phone (optional)",
      "form.need": "What do you need?",
      "form.message": "Message",
      "form.submit": "Start a project",
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
      "nav.about": "A propos",
      "nav.process": "Processus",
      "nav.contact": "Contact",
      "nav.cta": "Demarrer un projet",
      "hero.line1": "Parlez-nous de votre business.",
      "hero.line2": "Nous construisons la solution digitale autour.",
      "hero.cta": "Demarrer la conversation",
      "hero.support": "Nous commencons par comprendre votre business, vos clients et vos besoins. Ensuite, nous proposons et construisons la solution digitale qui a du sens pour vous.",
      "services.kicker": "Nos Services",
      "services.title": "Site web. Web app. Gestion.",
      "services.website.title": "Site web sur mesure",
      "services.website.body": "Nous ne livrons pas juste un site. Nous apportons une perspective business. Vous expliquez votre activite, puis nous concevons le site exact dont vous avez besoin avec les bons outils.",
      "services.webapp.title": "Developpement web app",
      "services.webapp.body": "Pour les entreprises qui ont besoin de plus qu'un simple site : reservations, portails clients, tableaux de bord, outils et systemes digitaux sur mesure.",
      "services.management.title": "Gestion de site web",
      "services.management.body": "Nous gerons votre site chaque mois : mises a jour, changements, maintenance technique et ameliorations continues apres le lancement.",
      "work.kicker": "Projets selectionnes",
      "work.title": "Des projets reels. Des entreprises reelles.",
      "work.lazoya": "Experience de marque et de commerce digital pour une entreprise orientee produit.",
      "work.jleilati": "Une presence web raffinee, construite autour de la clarte, de la confiance et de la conversion.",
      "process.kicker": "Notre Processus",
      "process.title": "Le business d'abord.<br>La solution digitale ensuite.",
      "process.intro": "Chaque projet Chambre 17 commence par comprendre l'entreprise derriere l'ecran.",
      "process.understand.title": "Nous commencons par votre business.",
      "process.understand.body": "Nous apprenons comment votre activite fonctionne, qui sont vos clients, ce dont vous avez besoin et ce que vous voulez atteindre.",
      "process.build.title": "Nous transformons l'idee en experience digitale.",
      "process.build.body": "Nous definissons la structure, concevons l'experience et construisons la solution autour de ce dont votre business a vraiment besoin.",
      "process.review.title": "Nous la revoyons ensemble.",
      "process.review.body": "Vous testez la solution, donnez votre retour et nous affinons les details ensemble avant le lancement.",
      "process.launch.title": "Nous mettons en ligne.",
      "process.launch.body": "Nous testons, optimisons et lancons l'experience finale sur tous les appareils.",
      "process.manage.title": "Nous restons avec elle.",
      "process.manage.body": "Apres le lancement, nous pouvons gerer, maintenir et ameliorer continuellement votre solution digitale.",
      "management.kicker": "Gestion mensuelle",
      "management.title": "Votre site avance avec votre business.",
      "management.body": "Votre site peut rester maintenu, mis a jour et ameliore chaque mois.",
      "about.kicker": "A propos",
      "about.title": "Nous comprenons le business avant de designer le site.",
      "about.body1": "Chambre 17 est un studio digital independant construit sur une experience en business, retail, marketing digital, data, IA, e-commerce et design graphique.",
      "about.body2": "Notre approche est simple : nous ne commencons pas par un template. Nous commencons par comprendre votre business, vos clients, vos objectifs et ce que votre site doit vraiment accomplir.",
      "about.body3": "Ensuite, nous designons et construisons autour.",
      "about.sig1": "Design. Business. Technologie.",
      "about.sig2": "Tout dans la meme piece.",
      "contact.kicker": "Contact",
      "contact.title": "Demarrer un projet.",
      "form.name": "Nom",
      "form.company": "Entreprise",
      "form.email": "Email",
      "form.phone": "Telephone (optionnel)",
      "form.need": "De quoi avez-vous besoin ?",
      "form.message": "Message",
      "form.submit": "Demarrer un projet",
      "footer.location": "Digital studio",
      "footer.services": "Services",
      "footer.website": "Site web",
      "footer.webapp": "Web app",
      "footer.management": "Gestion de site",
      "footer.contact": "Contact",
      "footer.legal": "Legal",
      "footer.legalNotice": "Mentions legales",
      "footer.privacy": "Politique de confidentialite"
    },
    ar: {
      "nav.services": "الخدمات",
      "nav.work": "الأعمال",
      "nav.about": "من نحن",
      "nav.process": "العملية",
      "nav.contact": "تواصل",
      "nav.cta": "ابدأ مشروعك",
      "hero.line1": "اخبرنا عن عملك.",
      "hero.line2": "نبني الحل الرقمي حوله.",
      "hero.cta": "ابدأ المحادثة",
      "hero.support": "نبدأ بفهم عملك وعملائك واحتياجاتك. ثم نقترح ونبني الحل الرقمي المناسب لك.",
      "services.kicker": "خدماتنا",
      "services.title": "موقع. تطبيق ويب. إدارة.",
      "services.website.title": "تصميم مواقع مخصص",
      "services.website.body": "لا نقدم مجرد موقع. نقدم منظوراً تجارياً. تشرح لنا عملك، ثم نصمم الموقع المناسب بالأدوات الصحيحة.",
      "services.webapp.title": "تطوير تطبيقات ويب",
      "services.webapp.body": "للأعمال التي تحتاج أكثر من موقع بسيط: حجوزات، بوابات عملاء، لوحات تحكم، أدوات وأنظمة رقمية مخصصة.",
      "services.management.title": "إدارة الموقع",
      "services.management.body": "ندير موقعك شهرياً: تحديثات، تعديلات، عناية تقنية، صيانة وتحسين مستمر بعد الإطلاق.",
      "work.kicker": "أعمال مختارة",
      "work.title": "مشاريع حقيقية. أعمال حقيقية.",
      "work.lazoya": "تجربة علامة وتجربة تجارة رقمية لعمل قائم على المنتجات.",
      "work.jleilati": "حضور رقمي راق مبني على الوضوح والثقة والتحويل.",
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
      "management.body": "يمكن أن يبقى موقعك محدثاً ومحسناً ومعتنى به كل شهر.",
      "about.kicker": "من نحن",
      "about.title": "نفهم العمل قبل تصميم الموقع.",
      "about.body1": "Chambre 17 استوديو رقمي مستقل، مبني على خبرة في الأعمال، التجزئة، التسويق الرقمي، البيانات، الذكاء الاصطناعي، التجارة الإلكترونية والتصميم.",
      "about.body2": "طريقتنا بسيطة: لا نبدأ من قالب جاهز. نبدأ بفهم عملك، عملائك، أهدافك وما يجب أن يحققه موقعك فعلاً.",
      "about.body3": "بعد ذلك نصمم ونبني حوله.",
      "about.sig1": "تصميم. أعمال. تقنية.",
      "about.sig2": "كلها في غرفة واحدة.",
      "contact.kicker": "تواصل معنا",
      "contact.title": "ابدأ مشروعك.",
      "form.name": "الاسم",
      "form.company": "الشركة",
      "form.email": "البريد الإلكتروني",
      "form.phone": "الهاتف (اختياري)",
      "form.need": "ماذا تحتاج؟",
      "form.message": "الرسالة",
      "form.submit": "ابدأ مشروعك",
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
    en: "/assets/hero-chambre17.mp4",
    fr: "/assets/hero-fr.mp4",
    ar: "/assets/hero-ar.mp4"
  };

  function setHeroVideo(lang) {
    var heroVideo = document.querySelector("[data-hero-video]");
    if (!heroVideo) {
      return;
    }

    var nextSource = heroVideoSources[lang] || heroVideoSources.en;
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
    });
  });

  var savedLanguage = "en";
  try {
    savedLanguage = window.localStorage.getItem("chambre17-lang") || (navigator.language || "en").slice(0, 2);
  } catch (error) {}
  applyLanguage(savedLanguage);

  var menuButton = document.querySelector("[data-menu-button]");
  var nav = document.querySelector("[data-nav]");
  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      var isOpen = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!isOpen));
      menuButton.setAttribute("aria-expanded", String(!isOpen));
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

  var contactForm = document.querySelector("[data-project-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(contactForm);
      var lines = [
        "Name: " + (data.get("name") || ""),
        "Company: " + (data.get("company") || ""),
        "Email: " + (data.get("email") || ""),
        "Phone: " + (data.get("phone") || ""),
        "Need: " + (data.get("need") || ""),
        "",
        data.get("message") || ""
      ];
      var subject = encodeURIComponent("Project enquiry — CHAMBRE 17");
      var body = encodeURIComponent(lines.join("\n"));
      window.location.href = "mailto:" + (config.email || "hello@chambre17.com") + "?subject=" + subject + "&body=" + body;
    });
  }
}());
