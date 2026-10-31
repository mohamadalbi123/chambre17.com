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

  var translations = {"en": {"home.titleTag": "Custom Websites & Web Applications | CHAMBRE 17", "home.description": "A French digital studio creating custom websites and web applications, with optional ongoing maintenance. For businesses in France and internationally.", "nav.services": "Services", "nav.work": "Work", "nav.about": "About", "nav.process": "Process", "nav.contact": "Contact", "nav.cta": "Start a project", "hero.h1": "Custom websites and web applications for your business.", "services.learn": "Explore our services", "hero.line1": "Tell us about your business.", "hero.line2": "We'll build the digital solution around it.", "hero.cta": "Start a conversation", "hero.scroll": "Scroll to discover", "hero.support": "We start by understanding your business, your customers and your needs. Then we propose and build the digital solution that makes sense for you.", "services.kicker": "Our Services", "services.title": "Website. Web app. Launch. Management.", "services.website.title": "Custom Website Design", "services.website.body": "We don't just build websites. We bring a business perspective to every project. You tell us about your business, and we design the digital solution around what you actually need.", "services.webapp.title": "Web App Development", "services.webapp.body": "For businesses that need more than a simple website: booking flows, client portals, dashboards, tools and custom digital systems.", "services.launch.title": "Digital Launch Setup", "services.launch.body": "We help your business get ready to be found and contacted online with the essential setup around your website.", "services.launch.toggle": "See what is included", "services.launch.item1": "Google Business Profile setup", "services.launch.item2": "WhatsApp Business setup", "services.launch.item3": "Google Ads setup and launch support", "services.launch.item4": "Basic tracking and conversion direction", "services.launch.item5": "Launch checklist for visibility and contact", "services.management.title": "Website Management", "services.management.body": "We manage your website monthly: updates, changes, technical care, maintenance and continuous improvements after launch.", "services.local": "Based in France, CHAMBRE 17 works with businesses in France and internationally. We design and build around your needs, with remote collaboration and optional ongoing maintenance.", "work.kicker": "Our work", "work.title": "A selection of our projects", "work.lazoya.title": "LAZOYA — Beauty Centre", "work.lazoya": "A multilingual website for presenting the beauty centre’s services and helping visitors book online. We designed the service pages and customer journey, integrated online booking and provide ongoing website management.", "work.jleilati.title": "J. LEILATI — E-commerce", "work.jleilati": "A multilingual online shop that brings product browsing, customer accounts and checkout into one journey. The platform includes product management and European delivery options.", "work.tags.website": "Website", "work.tags.booking": "Booking", "work.tags.multilingual": "Multilingual", "work.tags.management": "Ongoing Management", "work.tags.ecommerce": "E-commerce", "work.tags.webapp": "Web App", "work.tags.products": "Product Management", "work.tags.checkout": "Checkout", "work.view": "Explore the project", "process.kicker": "Our Process", "process.title": "Business first.<br>Digital solution second.", "process.intro": "Every Chambre 17 project begins by understanding the business behind the screen.", "process.understand.title": "We start with your business.", "process.understand.body": "We learn how your business works, who your customers are, what you need and what you want to achieve.", "process.build.title": "We turn the idea into a digital experience.", "process.build.body": "We define the structure, design the experience and build the solution around what your business actually needs.", "process.review.title": "We review it together.", "process.review.body": "You experience the solution, give feedback and we refine the details together before launch.", "process.launch.title": "We put it live.", "process.launch.body": "We test, optimize and launch the final experience across devices.", "process.manage.title": "We stay with it.", "process.manage.body": "After launch, we can manage, maintain and continuously improve your digital solution as your business evolves.", "management.kicker": "Monthly Management", "management.title": "Your website keeps moving with your business.", "management.body": "Monthly management is optional. After launch, Chambre 17 can continue handling content updates, new pages or features, technical maintenance, performance monitoring and continuous improvements.", "about.kicker": "About Us", "about.title": "We understand business before we design the website.", "about.body1": "Chambre 17 is an independent digital room built on experience across business strategy, digital marketing, data, AI, e-commerce, design and real-world industries.", "about.body2": "Our approach is simple: we don't start with a template. We start by understanding your business — your customers, your goals and what your website actually needs to achieve.", "about.body3": "Then we design and build around it.", "about.sig": "Design. Business. Technology. All in one room.", "about.cap.business": "Business", "about.cap.finance": "Finance", "about.cap.retail": "Retail", "about.cap.luxury": "Luxury goods", "about.cap.beauty": "Beauty salons", "about.cap.education": "Education", "about.cap.coaching": "Coaching", "about.cap.content": "Content", "about.cap.sales": "Sales", "about.cap.marketing": "Digital marketing", "about.cap.renovation": "Renovation", "about.cap.realestate": "Real estate", "about.cap.cars": "Cars", "about.cap.data": "Data", "about.cap.ai": "AI", "about.cap.ecommerce": "E-commerce", "about.cap.design": "Graphic design", "contact.kicker": "Contact Us", "contact.title": "Start a project.", "form.name": "Name", "form.company": "Company", "form.email": "Email", "form.phone": "Phone (optional)", "form.need": "What do you need?", "form.message": "Message", "form.submit": "Start a project", "form.option.website": "Website design", "form.option.webapp": "Web app development", "form.option.launch": "Digital launch setup", "form.option.management": "Website management", "form.option.all": "Website, web app and management", "form.option.unsure": "Not sure yet", "form.status.sending": "Sending your message...", "form.status.success": "Message sent. We will get back to you soon.", "form.status.error": "Something went wrong. Please email us directly at chambre17@icloud.com.", "form.status.invalid": "Please complete the required fields with a valid email address.", "footer.location": "Based in Lagord, France · Projects in France and internationally", "footer.services": "Services", "footer.website": "Website Design", "footer.webapp": "Web App Development", "footer.launch": "Digital Launch Setup", "footer.management": "Website Management", "footer.contact": "Contact", "footer.legal": "Legal", "footer.legalNotice": "Legal Notice", "footer.privacy": "Privacy Policy", "legal.nav.privacy": "Privacy Policy", "legal.nav.notice": "Legal Notice", "legal.notice.titleTag": "Legal Notice | CHAMBRE 17", "legal.notice.description": "Legal notice for CHAMBRE 17.", "legal.notice.h1": "Legal Notice", "legal.notice.intro": "This legal notice applies to the CHAMBRE 17 website and its service presentation pages.", "legal.notice.publisher.title": "Website publisher", "legal.notice.publisher.body": "CHAMBRE 17 is the trading name used by Mohamad Albi, entrepreneur individuel, for website design, web app development and website management services.", "legal.notice.publisher.location": "Registered establishment: 17140 Lagord, France.", "legal.notice.publisher.contact": "Publisher contact:", "legal.notice.registration.title": "Business registration", "legal.notice.registration.legalForm": "Legal form: entrepreneur individuel, micro-enterprise.", "legal.notice.registration.trade": "Trading name / commercial name: Chambre 17.", "legal.notice.registration.company": "Company name: Mohamad Albi.", "legal.notice.registration.siren": "SIREN: 131 127 979.", "legal.notice.registration.siret": "SIRET: 131 127 979 00014.", "legal.notice.registration.ape": "APE code: 62.01Z - Computer programming activities.", "legal.notice.registration.rne": "Registered with the RNE on 06 October 2026.", "legal.notice.registration.department": "Department: 17 - Charente-Maritime.", "legal.notice.registration.formality": "Creation formality: J00288470180, deposited on 06 October 2026 with INSEE / URSSAF.", "legal.notice.registration.activity": "Main declared activity: design and development of websites and web applications; maintenance, updates and technical management of websites and web applications.", "legal.notice.registration.vat": "VAT status: franchise en base de TVA.", "legal.notice.registration.vat293": "In accordance with article 293 B of the French General Tax Code, VAT is not applicable.", "legal.notice.contact.title": "Contact", "legal.notice.contact.email": "Email:", "legal.notice.contact.phone": "WhatsApp / phone:", "legal.notice.hosting.title": "Hosting", "legal.notice.hosting.body": "This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States. Website:", "legal.notice.sales.title": "Services and online sales", "legal.notice.sales.body1": "This website presents CHAMBRE 17 services and allows visitors to contact CHAMBRE 17. No products or services are sold directly through an online checkout on this website.", "legal.notice.sales.body2": "Project scope, pricing, payment terms and any applicable service conditions are confirmed directly with the client before work begins.", "legal.notice.ip.title": "Intellectual property", "legal.notice.ip.body": "The CHAMBRE 17 name, visual identity, text, layout, interface elements, videos and other creative materials on this website are protected. Any reproduction, distribution or reuse without prior written permission is prohibited.", "legal.notice.links.title": "External links", "legal.notice.links.body": "This website may link to third-party websites, including selected client projects. CHAMBRE 17 is not responsible for the content, availability or privacy practices of third-party websites.", "legal.notice.liability.title": "Liability", "legal.notice.liability.body": "CHAMBRE 17 aims to keep the information on this website accurate and up to date. However, errors or omissions may occur. Visitors should contact CHAMBRE 17 directly for project-specific information, quotes or service conditions.", "legal.notice.law.title": "Applicable law", "legal.notice.law.body": "Unless otherwise required by mandatory law, this website is governed by French law.", "privacy.titleTag": "Privacy Policy | CHAMBRE 17", "privacy.description": "Privacy policy for CHAMBRE 17.", "privacy.h1": "Privacy Policy", "privacy.intro": "This policy explains how CHAMBRE 17 handles personal information submitted through this website or direct contact channels.", "privacy.controller.title": "Who is responsible", "privacy.controller.body": "Mohamad Albi, entrepreneur individuel trading as CHAMBRE 17, is responsible for the personal information received through this website and its contact channels.", "privacy.controller.contact": "Contact:", "privacy.data.title": "Data you may send", "privacy.data.body": "When you contact CHAMBRE 17, you may provide your name, company name, email address, phone number, project needs and message content.", "privacy.use.title": "How the data is used", "privacy.use.body": "Your information is used to understand your request, reply to you, prepare project discussions, provide quotes where relevant, and manage the commercial relationship if you decide to work with CHAMBRE 17.", "privacy.form.title": "Contact form status", "privacy.form.body": "The form on this website sends project enquiries to CHAMBRE 17 by email through a secure server-side email service. The visitor's email address is used as the reply-to address so CHAMBRE 17 can respond directly.", "privacy.basis.title": "Legal basis", "privacy.basis.body1": "Contact and project enquiry data is processed because you request information or services from CHAMBRE 17, or because communication is necessary before entering into a service agreement.", "privacy.basis.body2": "Client, project and administrative records may also be processed where necessary for legitimate business follow-up, performance of agreed services, legal obligations, invoicing, accounting and the establishment or defence of legal claims.", "privacy.retention.title": "Retention", "privacy.retention.body1": "Project enquiries that do not become client work are normally kept for up to 24 months after the last meaningful exchange, unless you ask for deletion earlier or a longer period is necessary to manage a dispute or legal claim.", "privacy.retention.body2": "Client, project, invoicing and accounting records are kept for the periods required by applicable French law and for the time necessary to manage the service relationship.", "privacy.sharing.title": "Sharing", "privacy.sharing.body1": "CHAMBRE 17 does not sell personal data. Information may be processed through normal technical service providers such as website hosting, email delivery, email inbox, messaging or business tools, only as needed to operate the service.", "privacy.sharing.body2": "The current website uses Vercel for hosting and server-side functions, Resend for contact-form email delivery, and iCloud email for receiving enquiries. If you contact CHAMBRE 17 through WhatsApp, WhatsApp's own terms and privacy practices also apply.", "privacy.cookies.title": "Cookies and local storage", "privacy.cookies.body": "This website does not use advertising cookies or analytics trackers. When you choose a language, a preference cookie remembers your selection for one year. It is used only to display your preferred language and can be removed through your browser settings.", "privacy.external.title": "External websites", "privacy.external.body": "Links to external websites, including portfolio examples, are subject to the privacy policies of those websites.", "privacy.rights.title": "Your rights", "privacy.rights.body1": "You may request access, correction, deletion, restriction, portability where applicable, or object to certain processing of your personal data by contacting", "privacy.rights.body2": "If you believe your data protection rights have not been respected, you may submit a complaint to the CNIL:", "privacy.security.title": "Security", "privacy.security.body": "CHAMBRE 17 takes reasonable technical and organisational measures to protect enquiry data and limit access to the people and providers needed to respond to requests and manage services.", "privacy.automated.title": "Automated decisions", "privacy.automated.body": "CHAMBRE 17 does not use the information submitted through this website for automated decision-making or profiling.", "process.understand.label": "01 — Understand", "process.build.label": "02 — Design &amp; build", "process.review.label": "03 — Review", "process.launch.label": "04 — Launch", "process.manage.label": "05 — Manage", "hero.word.business": "Business", "hero.word.design": "Design", "hero.word.technology": "Technology", "hero.word.ai": "AI", "a11y.labels": {"CHAMBRE 17 home": "CHAMBRE 17 home", "Main navigation": "Main navigation", "Language switcher": "Language switcher", "Menu": "Menu", "Project tags": "Project tags", "Chambre 17 capabilities": "Chambre 17 capabilities", "Footer navigation": "Footer navigation", "Legal navigation": "Legal navigation", "Breadcrumb": "Breadcrumb"}, "work.built": "What we built", "work.lazoya.features.1": "Multilingual website and service pages", "work.lazoya.features.2": "Diagnostic system", "work.lazoya.features.3": "Online booking integration", "work.lazoya.features.4": "Navigation between multiple booking options", "work.lazoya.features.5": "Ongoing website management and updates", "work.jleilati.features.1": "Multilingual online store and product catalogue", "work.jleilati.features.2": "Product management", "work.jleilati.features.3": "Customer accounts", "work.jleilati.features.4": "Checkout and payment journey", "work.jleilati.features.5": "European delivery options", "nav.pricing": "Pricing", "pricing.enquiry.template": "Hello, I would like information and a quote for {offer}.\n\nMy project: ", "pricing.offer.creation-essentiel": "Website creation — Essential — From 490 €", "pricing.offer.creation-business": "Website creation — Business — From 890 €", "pricing.offer.creation-sur-mesure": "Website creation — Custom — Custom quote", "pricing.offer.gestion-essentiel": "Management & maintenance — Essential — 29 €/month", "pricing.offer.gestion-business": "Management & maintenance — Business — 49 €/month", "pricing.offer.gestion-premium": "Management & maintenance — Premium — 89 €/month"}};

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
    if (!heroVideo || document.hidden || heroVideo.getAttribute("data-playback-suspended") === "true" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
        playPromise.catch(function (error) {
          // Low Power Mode and autoplay policies may require an explicit tap.
          var playButton = document.querySelector("[data-hero-play]");
          if (playButton && error.name !== "AbortError") playButton.hidden = false;
        });
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
    // Some browsers ignore media conditions on video source elements. Check
    // the resource actually selected before assuming the initial source is right.
    var selectedSource = heroVideo.currentSrc || heroVideo.getAttribute("src");
    var expectedSource = new URL(nextSource, window.location.href).href;
    if (selectedSource && new URL(selectedSource, window.location.href).href === expectedSource) {
      heroVideo.setAttribute("data-current-src", nextSource);
      playHeroVideo(heroVideo);
      return;
    }

    heroVideo.setAttribute("data-current-src", nextSource);
    heroVideo.src = nextSource;
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
    document.querySelectorAll("[data-lang-switch]").forEach(function (button) {
      button.setAttribute("data-active", String(button.getAttribute("data-lang-switch") === selected));
    });
  }

  document.querySelectorAll("[data-lang-switch]").forEach(function (link) {
    link.addEventListener("click", function () {
      var language = link.getAttribute("data-lang-switch");
      if (["fr", "en", "ar"].indexOf(language) === -1) return;
      try {
        document.cookie = "chambre17-language=" + language + "; Max-Age=31536000; Path=/; SameSite=Lax" + (window.location.protocol === "https:" ? "; Secure" : "");
      } catch (error) { /* The explicit language URL still works when cookies are blocked. */ }
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

  var lightweightEffects = window.matchMedia("(max-width: 980px), (pointer: coarse), (prefers-reduced-motion: reduce)");

  // Keep section links usable without JavaScript, but share a clean page URL.
  function sectionTarget(hash) {
    if (!hash || hash === "#") return null;
    try {
      var id = decodeURIComponent(hash.slice(1));
      return document.getElementById(id.toLowerCase() === "top" ? "top" : id);
    }
    catch (error) { return null; }
  }
  function cleanSectionUrl() {
    window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
  }
  function restoreSharedSection() {
    var target = sectionTarget(window.location.hash);
    if (target) {
      cleanSectionUrl();
      window.requestAnimationFrame(function () {
        target.scrollIntoView({ behavior: "auto", block: "start" });
      });
    } else if (window.location.href.endsWith("#")) {
      cleanSectionUrl();
    }
  }
  document.addEventListener("click", function (event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    var link = event.target.closest("a[href]");
    if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
    var url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || url.search !== window.location.search) return;
    var target = sectionTarget(url.hash);
    if (!target) return;
    event.preventDefault();
    closeNav();
    target.scrollIntoView({ behavior: lightweightEffects.matches ? "auto" : "smooth", block: "start" });
    if (!target.hasAttribute("tabindex")) {
      target.setAttribute("tabindex", "-1");
      target.addEventListener("blur", function () { target.removeAttribute("tabindex"); }, { once: true });
    }
    target.focus({ preventScroll: true });
    if (window.location.hash) cleanSectionUrl();
  });
  restoreSharedSection();
  window.addEventListener("hashchange", restoreSharedSection);

  var heroVideo = document.querySelector("[data-hero-video]");
  if (heroVideo) {
    heroVideo.addEventListener("error", function () {
      // A rejected child <source> does not mean the entire video failed.
      if (heroVideo.error) document.documentElement.classList.add("hero-video-missing");
    }, true);
    ["loadeddata", "canplay", "playing"].forEach(function (eventName) {
      heroVideo.addEventListener(eventName, function () {
        document.documentElement.classList.remove("hero-video-missing");
        var playButton = document.querySelector("[data-hero-play]");
        if (playButton) playButton.hidden = true;
      });
    });
    var heroPlayButton = document.querySelector("[data-hero-play]");
    if (heroPlayButton) {
      heroPlayButton.addEventListener("click", function () {
        playHeroVideo(heroVideo);
      });
    }
    // Retry in the user-activation callback rather than only in a timer.
    ["pointerup", "touchend", "keydown"].forEach(function (eventName) {
      document.addEventListener(eventName, function () {
        if (!document.hidden && heroVideo.paused) playHeroVideo(heroVideo);
      });
    });
    ["loadeddata", "canplay", "stalled", "suspend", "waiting", "ended", "pause"].forEach(function (eventName) {
      heroVideo.addEventListener(eventName, function () {
        playHeroVideo(heroVideo);
      });
    });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) heroVideo.pause();
      else playHeroVideo(heroVideo);
    });
    window.addEventListener("pageshow", function () {
      playHeroVideo(heroVideo);
    });
    window.setInterval(function () {
      if (!document.hidden) {
        playHeroVideo(heroVideo);
      }
    }, 3000);
    if ("IntersectionObserver" in window) {
      var heroVisibilityObserver = new IntersectionObserver(function (entries) {
        var visible = entries[0].isIntersecting;
        heroVideo.setAttribute("data-playback-suspended", String(!visible));
        if (visible) playHeroVideo(heroVideo);
        else heroVideo.pause();
      }, { rootMargin: "-88px 0px 0px 0px" });
      heroVisibilityObserver.observe(heroVideo);
    }
    if (prefersReducedMotion) heroVideo.pause();
    else playHeroVideo(heroVideo);
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
    if (lightweightEffects.matches) return;
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
    if (lightweightEffects.matches || scrollFramePending) return;
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
    var ambientAnimationId = 0;

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
      ambientAnimationId = 0;
      if (document.hidden || lightweightEffects.matches) return;
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

      ambientAnimationId = window.requestAnimationFrame(drawAmbientCanvas);
    }

    function syncAmbientCanvas() {
      window.cancelAnimationFrame(ambientAnimationId);
      if (document.hidden || lightweightEffects.matches) return;
      resizeAmbientCanvas();
      drawAmbientCanvas();
    }
    syncAmbientCanvas();
    window.addEventListener("resize", syncAmbientCanvas);
    document.addEventListener("visibilitychange", syncAmbientCanvas);
    window.addEventListener("pointermove", function (event) {
      ambientPointer.x = event.clientX / Math.max(1, window.innerWidth);
      ambientPointer.y = event.clientY / Math.max(1, window.innerHeight);
      ambientPointer.active = true;
    }, { passive: true });
    window.addEventListener("pointerleave", function () {
      ambientPointer.active = false;
    });
  }

  // Pricing buttons open the existing enquiry form; they do not create a subscription.
  function preselectPricingOffer(form, query) {
    var offers = {
      "creation-essentiel": ["form.option.website", "pricing.offer.creation-essentiel"],
      "creation-business": ["form.option.website", "pricing.offer.creation-business"],
      "creation-sur-mesure": ["form.option.webapp", "pricing.offer.creation-sur-mesure"],
      "gestion-essentiel": ["form.option.management", "pricing.offer.gestion-essentiel"],
      "gestion-business": ["form.option.management", "pricing.offer.gestion-business"],
      "gestion-premium": ["form.option.management", "pricing.offer.gestion-premium"]
    };
    var key = new URLSearchParams(query).get("offre");
    if (!Object.prototype.hasOwnProperty.call(offers, key)) return;
    var offer = offers[key];
    var message = form.querySelector('[name="message"]');
    var need = form.querySelector('[name="need"]');
    // Keep a restored or already-written message intact.
    if (!message || message.value.trim()) return;
    var dict = translations[document.documentElement.lang] || translations.fr;
    if (need && dict[offer[0]]) need.value = dict[offer[0]];
    message.value = dict["pricing.enquiry.template"].replace("{offer}", dict[offer[1]]);
  }

  var contactForm = document.querySelector("[data-project-form]");
  if (contactForm) {
    preselectPricingOffer(contactForm, window.location.search);
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
