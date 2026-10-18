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

  var translations = {"ar": {"home.titleTag": "تصميم مواقع في لا روشيل ولاغور | CHAMBRE 17", "home.description": "CHAMBRE 17 في لاغور: تصميم مواقع وتطبيقات ويب مخصصة للشركات في لا روشيل والمناطق المحيطة، مع صيانة شهرية اختيارية. تواصل معنا لمناقشة مشروعك.", "services.learn": "اكتشف خدماتنا باللغة الفرنسية", "nav.services": "الخدمات", "nav.work": "الأعمال", "nav.about": "من نحن", "nav.process": "العملية", "nav.contact": "تواصل", "nav.cta": "ابدأ مشروعك", "hero.h1": "تصميم مواقع في لا روشيل ولاغور", "hero.line1": "اخبرنا عن عملك.", "hero.line2": "نبني الحل الرقمي حوله.", "hero.cta": "ابدأ المحادثة", "hero.support": "نبدأ بفهم عملك وعملائك واحتياجاتك. ثم نقترح ونبني الحل الرقمي المناسب لك.", "services.kicker": "خدماتنا", "services.title": "موقع. تطبيق ويب. إطلاق. إدارة.", "services.website.title": "تصميم مواقع مخصص", "services.website.body": "نحن لا نبني مواقع فقط. نضيف منظوراً تجارياً لكل مشروع. تخبرنا عن عملك، ثم نصمم الحل الرقمي حول ما تحتاجه فعلاً.", "services.webapp.title": "تطوير تطبيقات ويب", "services.webapp.body": "للأعمال التي تحتاج أكثر من موقع بسيط: حجوزات، بوابات عملاء، لوحات تحكم، أدوات وأنظمة رقمية مخصصة.", "services.launch.title": "إعداد الإطلاق الرقمي", "services.launch.body": "نساعد عملك ليكون جاهزاً للظهور والتواصل عبر الإنترنت من خلال الإعدادات الأساسية حول موقعك.", "services.launch.toggle": "اعرض ما يشمله", "services.launch.item1": "إعداد Google Business Profile", "services.launch.item2": "إعداد WhatsApp Business", "services.launch.item3": "إعداد Google Ads ودعم الإطلاق", "services.launch.item4": "أساسيات التتبع وتوجيه التحويلات", "services.launch.item5": "قائمة إطلاق للظهور والتواصل", "services.management.title": "إدارة الموقع", "services.management.body": "ندير موقعك شهرياً: تحديثات، تعديلات، عناية تقنية، صيانة وتحسين مستمر بعد الإطلاق.", "services.local": "يساعد Chambre 17 الشركات على تحويل أفكارها وخدماتها وعملياتها إلى تجارب رقمية واضحة مبنية حول احتياجات العمل الحقيقية.", "work.kicker": "أعمال مختارة", "work.title": "مشاريع حقيقية. أعمال حقيقية.", "work.lazoya.title": "LAZOYA — مركز تجميل", "work.lazoya": "موقع وتجربة رقمية للخدمات مع حجز إلكتروني، محتوى متعدد اللغات ورحلة عميل مصممة حول مركز التجميل.", "work.jleilati.title": "J. LEILATI — تجارة إلكترونية", "work.jleilati": "منصة تجارة إلكترونية متعددة اللغات مع إدارة المنتجات، حسابات العملاء، الدفع والتوصيل داخل أوروبا.", "work.tags.website": "موقع", "work.tags.booking": "حجز", "work.tags.multilingual": "متعدد اللغات", "work.tags.management": "إدارة مستمرة", "work.tags.ecommerce": "تجارة إلكترونية", "work.tags.webapp": "تطبيق ويب", "work.tags.products": "إدارة المنتجات", "work.tags.checkout": "الدفع", "work.view": "عرض المشروع", "process.kicker": "طريقتنا", "process.title": "الأعمال أولاً.<br>الحل الرقمي ثانياً.", "process.intro": "كل مشروع في Chambre 17 يبدأ بفهم العمل خلف الشاشة.", "process.understand.title": "نبدأ بفهم عملك.", "process.understand.body": "نتعلم كيف يعمل نشاطك، من هم عملاؤك، ما الذي تحتاجه وما الذي تريد تحقيقه.", "process.build.title": "نحول الفكرة إلى تجربة رقمية.", "process.build.body": "نحدد البنية، نصمم التجربة ونبني الحل حول ما يحتاجه عملك فعلاً.", "process.review.title": "نراجعه معاً.", "process.review.body": "تجرب الحل، تعطينا ملاحظاتك، ثم نعدل التفاصيل معاً قبل الإطلاق.", "process.launch.title": "نطلقه.", "process.launch.body": "نختبر ونحسن ونطلق التجربة النهائية على مختلف الأجهزة.", "process.manage.title": "نبقى معه.", "process.manage.body": "بعد الإطلاق، يمكننا إدارة وصيانة وتحسين الحل الرقمي مع تطور عملك.", "management.kicker": "الإدارة الشهرية", "management.title": "موقعك يتطور مع عملك.", "management.body": "الإدارة الشهرية اختيارية. بعد الإطلاق يمكن لـ Chambre 17 متابعة تحديث المحتوى، إضافة صفحات أو مزايا جديدة، الصيانة التقنية، مراقبة الأداء والتحسين المستمر.", "about.kicker": "من نحن", "about.title": "نفهم العمل قبل تصميم الموقع.", "about.body1": "Chambre 17 غرفة رقمية مستقلة، مبنية على خبرة في استراتيجية الأعمال، التسويق الرقمي، البيانات، الذكاء الاصطناعي، التجارة الإلكترونية، التصميم وقطاعات حقيقية.", "about.body2": "طريقتنا بسيطة: لا نبدأ من قالب جاهز. نبدأ بفهم عملك، عملائك، أهدافك وما يجب أن يحققه موقعك فعلاً.", "about.body3": "بعد ذلك نصمم ونبني حوله.", "about.sig": "تصميم. أعمال. تقنية. كلها في غرفة واحدة.", "about.cap.business": "الأعمال", "about.cap.finance": "التمويل", "about.cap.retail": "التجزئة", "about.cap.luxury": "المنتجات الفاخرة", "about.cap.beauty": "صالونات التجميل", "about.cap.education": "التعليم", "about.cap.coaching": "التدريب", "about.cap.content": "المحتوى", "about.cap.sales": "المبيعات", "about.cap.marketing": "التسويق الرقمي", "about.cap.renovation": "التجديد", "about.cap.realestate": "العقارات", "about.cap.cars": "السيارات", "about.cap.data": "البيانات", "about.cap.ai": "الذكاء الاصطناعي", "about.cap.ecommerce": "التجارة الإلكترونية", "about.cap.design": "التصميم", "contact.kicker": "تواصل معنا", "contact.title": "ابدأ مشروعك.", "form.name": "الاسم", "form.company": "الشركة", "form.email": "البريد الإلكتروني", "form.phone": "الهاتف (اختياري)", "form.need": "ماذا تحتاج؟", "form.message": "الرسالة", "form.submit": "ابدأ مشروعك", "form.option.website": "تصميم موقع", "form.option.webapp": "تطوير تطبيق ويب", "form.option.launch": "إعداد الإطلاق الرقمي", "form.option.management": "إدارة موقع", "form.option.all": "موقع، تطبيق ويب وإدارة", "form.option.unsure": "لست متأكداً بعد", "form.status.sending": "جاري إرسال الرسالة...", "form.status.success": "تم إرسال الرسالة. سنعود إليك قريباً.", "form.status.error": "حدث خطأ. يرجى مراسلتنا مباشرة على chambre17@icloud.com.", "form.status.invalid": "يرجى إكمال الحقول المطلوبة وإدخال بريد إلكتروني صحيح.", "footer.location": "مواقع، تطبيقات ويب وإدارة", "footer.services": "الخدمات", "footer.website": "تصميم مواقع", "footer.webapp": "تطبيقات ويب", "footer.launch": "إعداد الإطلاق الرقمي", "footer.management": "إدارة الموقع", "footer.contact": "تواصل", "footer.legal": "قانوني", "footer.legalNotice": "الإشعار القانوني", "footer.privacy": "سياسة الخصوصية", "legal.nav.privacy": "سياسة الخصوصية", "legal.nav.notice": "الإشعار القانوني", "legal.notice.titleTag": "الإشعار القانوني | CHAMBRE 17", "legal.notice.description": "الإشعار القانوني لموقع CHAMBRE 17.", "legal.notice.h1": "الإشعار القانوني", "legal.notice.intro": "ينطبق هذا الإشعار القانوني على موقع CHAMBRE 17 وصفحات عرض خدماته.", "legal.notice.publisher.title": "ناشر الموقع", "legal.notice.publisher.body": "CHAMBRE 17 هو الاسم التجاري المستخدم من قبل Mohamad Albi، بصفته رائد أعمال فردي، لخدمات تصميم المواقع، تطوير تطبيقات الويب وإدارة المواقع.", "legal.notice.publisher.location": "المقر المسجل: 17140 Lagord، فرنسا.", "legal.notice.publisher.contact": "تواصل مع الناشر:", "legal.notice.registration.title": "معلومات التسجيل", "legal.notice.registration.legalForm": "الشكل القانوني: رائد أعمال فردي، micro-enterprise.", "legal.notice.registration.trade": "الاسم التجاري: Chambre 17.", "legal.notice.registration.company": "اسم الشركة: Mohamad Albi.", "legal.notice.registration.siren": "SIREN: 131 127 979.", "legal.notice.registration.siret": "SIRET: 131 127 979 00014.", "legal.notice.registration.ape": "رمز APE: 62.01Z - أنشطة البرمجة المعلوماتية.", "legal.notice.registration.rne": "مسجل في RNE بتاريخ 06 أكتوبر 2026.", "legal.notice.registration.department": "القسم: 17 - Charente-Maritime.", "legal.notice.registration.formality": "إجراء الإنشاء: J00288470180، أودع بتاريخ 06 أكتوبر 2026 لدى INSEE / URSSAF.", "legal.notice.registration.activity": "النشاط الرئيسي المعلن: تصميم وتطوير المواقع وتطبيقات الويب؛ الصيانة، التحديثات والإدارة التقنية للمواقع وتطبيقات الويب.", "legal.notice.registration.vat": "حالة ضريبة القيمة المضافة: franchise en base de TVA.", "legal.notice.registration.vat293": "وفقاً للمادة 293 B من قانون الضرائب الفرنسي العام، لا تطبق ضريبة القيمة المضافة.", "legal.notice.contact.title": "التواصل", "legal.notice.contact.email": "البريد الإلكتروني:", "legal.notice.contact.phone": "واتساب / الهاتف:", "legal.notice.hosting.title": "الاستضافة", "legal.notice.hosting.body": "تتم استضافة هذا الموقع لدى Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States. الموقع:", "legal.notice.sales.title": "الخدمات والبيع عبر الإنترنت", "legal.notice.sales.body1": "يعرض هذا الموقع خدمات CHAMBRE 17 ويتيح للزوار التواصل معنا. لا يتم بيع المنتجات أو الخدمات مباشرة عبر دفع إلكتروني داخل هذا الموقع.", "legal.notice.sales.body2": "يتم تأكيد نطاق المشروع، الأسعار، شروط الدفع وأي شروط خدمة مطبقة مباشرة مع العميل قبل بدء العمل.", "legal.notice.ip.title": "الملكية الفكرية", "legal.notice.ip.body": "اسم CHAMBRE 17، الهوية البصرية، النصوص، التخطيط، عناصر الواجهة، الفيديوهات والمواد الإبداعية الأخرى في هذا الموقع محمية. يمنع أي نسخ أو توزيع أو إعادة استخدام دون إذن كتابي مسبق.", "legal.notice.links.title": "الروابط الخارجية", "legal.notice.links.body": "قد يحتوي هذا الموقع على روابط لمواقع خارجية، بما في ذلك مشاريع عملاء مختارة. CHAMBRE 17 غير مسؤول عن محتوى أو توفر أو ممارسات الخصوصية الخاصة بهذه المواقع.", "legal.notice.liability.title": "المسؤولية", "legal.notice.liability.body": "يسعى CHAMBRE 17 إلى إبقاء معلومات هذا الموقع دقيقة ومحدثة. ومع ذلك قد تحدث أخطاء أو نواقص. يرجى التواصل مع CHAMBRE 17 مباشرة للحصول على معلومات أو عروض أسعار أو شروط خدمة خاصة بمشروعكم.", "legal.notice.law.title": "القانون المطبق", "legal.notice.law.body": "ما لم ينص قانون إلزامي على خلاف ذلك، يخضع هذا الموقع للقانون الفرنسي.", "privacy.titleTag": "سياسة الخصوصية | CHAMBRE 17", "privacy.description": "سياسة الخصوصية لموقع CHAMBRE 17.", "privacy.h1": "سياسة الخصوصية", "privacy.intro": "توضح هذه السياسة كيف يتعامل CHAMBRE 17 مع المعلومات الشخصية المرسلة عبر هذا الموقع أو قنوات التواصل المباشر.", "privacy.controller.title": "المسؤول عن البيانات", "privacy.controller.body": "Mohamad Albi، رائد أعمال فردي يعمل تحت الاسم التجاري CHAMBRE 17، هو المسؤول عن المعلومات الشخصية المستلمة عبر هذا الموقع وقنوات التواصل الخاصة به.", "privacy.controller.contact": "التواصل:", "privacy.data.title": "البيانات التي قد ترسلها", "privacy.data.body": "عند التواصل مع CHAMBRE 17، قد ترسل اسمك، اسم شركتك، بريدك الإلكتروني، رقم هاتفك، احتياجات مشروعك ومحتوى رسالتك.", "privacy.use.title": "كيفية استخدام البيانات", "privacy.use.body": "تُستخدم معلوماتك لفهم طلبك، الرد عليك، تحضير نقاشات المشروع، إعداد عرض سعر عند الحاجة، وإدارة العلاقة التجارية إذا قررت العمل مع CHAMBRE 17.", "privacy.form.title": "حالة نموذج التواصل", "privacy.form.body": "يرسل نموذج التواصل في هذا الموقع طلبات المشاريع إلى CHAMBRE 17 عبر البريد الإلكتروني من خلال خدمة إرسال آمنة من جهة الخادم. يتم استخدام بريد الزائر كعنوان للرد حتى يتمكن CHAMBRE 17 من الرد مباشرة.", "privacy.basis.title": "الأساس القانوني", "privacy.basis.body1": "تتم معالجة بيانات التواصل وطلبات المشاريع لأنك تطلب معلومات أو خدمات من CHAMBRE 17، أو لأن التواصل ضروري قبل الدخول المحتمل في اتفاقية خدمة.", "privacy.basis.body2": "قد تتم أيضاً معالجة سجلات العملاء والمشاريع والسجلات الإدارية عند الحاجة للمتابعة التجارية المشروعة، تنفيذ الخدمات المتفق عليها، الالتزامات القانونية، الفوترة، المحاسبة أو إثبات الحقوق والدفاع عنها.", "privacy.retention.title": "مدة الاحتفاظ", "privacy.retention.body1": "عادةً يتم الاحتفاظ بطلبات المشاريع التي لا تتحول إلى عمل فعلي لمدة تصل إلى 24 شهراً بعد آخر تبادل مهم، ما لم تطلب الحذف قبل ذلك أو تكون هناك حاجة لفترة أطول لإدارة نزاع أو مطالبة قانونية.", "privacy.retention.body2": "يتم الاحتفاظ بسجلات العملاء والمشاريع والفوترة والمحاسبة للمدد المطلوبة بموجب القانون الفرنسي المعمول به وللمدة اللازمة لإدارة علاقة الخدمة.", "privacy.sharing.title": "مشاركة البيانات", "privacy.sharing.body1": "لا يبيع CHAMBRE 17 البيانات الشخصية. قد تتم معالجة المعلومات عبر مزودي خدمات تقنية عاديين مثل استضافة الموقع، إرسال البريد الإلكتروني، صندوق البريد، أدوات المراسلة أو أدوات العمل، فقط عند الحاجة لتشغيل الخدمة.", "privacy.sharing.body2": "يستخدم الموقع حالياً Vercel للاستضافة ووظائف الخادم، وResend لإرسال رسائل نموذج التواصل، وiCloud email لاستلام الطلبات. إذا تواصلت مع CHAMBRE 17 عبر WhatsApp، فإن شروط وممارسات الخصوصية الخاصة بواتساب تنطبق أيضاً.", "privacy.cookies.title": "ملفات تعريف الارتباط والتخزين المحلي", "privacy.cookies.body": "لا يستخدم هذا الموقع ملفات تعريف ارتباط إعلانية أو أدوات تتبع تحليلية. قد يخزن تفضيل اللغة محلياً في متصفحك حتى يتذكر الموقع اللغة التي اخترتها. يُستخدم هذا التفضيل فقط لعرض الموقع باللغة المختارة.", "privacy.external.title": "المواقع الخارجية", "privacy.external.body": "تخضع الروابط إلى المواقع الخارجية، بما في ذلك أمثلة الأعمال، لسياسات الخصوصية الخاصة بتلك المواقع.", "privacy.rights.title": "حقوقك", "privacy.rights.body1": "يمكنك طلب الوصول إلى بياناتك، تصحيحها، حذفها، تقييدها، نقلها عند التطبيق، أو الاعتراض على بعض عمليات المعالجة من خلال التواصل عبر", "privacy.rights.body2": "إذا كنت تعتقد أن حقوقك المتعلقة بحماية البيانات لم تُحترم، يمكنك تقديم شكوى إلى CNIL:", "privacy.security.title": "الأمان", "privacy.security.body": "يتخذ CHAMBRE 17 تدابير تقنية وتنظيمية معقولة لحماية بيانات الطلبات وتقييد الوصول إليها للأشخاص ومزودي الخدمة اللازمين للرد على الطلبات وإدارة الخدمات.", "privacy.automated.title": "القرارات الآلية", "privacy.automated.body": "لا يستخدم CHAMBRE 17 المعلومات المرسلة عبر هذا الموقع لاتخاذ قرارات آلية أو لإنشاء ملفات تعريف شخصية."}};

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
