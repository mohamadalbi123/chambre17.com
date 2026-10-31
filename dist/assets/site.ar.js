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

  var translations = {"ar": {"home.titleTag": "مواقع وتطبيقات ويب مخصصة لأعمالك | CHAMBRE 17", "home.description": "استوديو رقمي فرنسي يصمم مواقع وتطبيقات ويب مخصصة للشركات في فرنسا وخارجها، مع التعاون عن بُعد والصيانة الاختيارية.", "services.learn": "تعرّف على خدماتنا", "nav.services": "الخدمات", "nav.work": "الأعمال", "nav.about": "من نحن", "nav.process": "العملية", "nav.contact": "تواصل", "nav.cta": "ابدأ مشروعك", "hero.h1": "مواقع وتطبيقات ويب مصمّمة لخدمة أعمالك.", "hero.line1": "اخبرنا عن عملك.", "hero.line2": "نبني الحل الرقمي حوله.", "hero.cta": "ابدأ المحادثة", "hero.scroll": "مرّر لاكتشاف المزيد", "hero.support": "نبدأ بفهم نشاطك وعملائك واحتياجاتك، ثم نقترح ونطوّر الحل الرقمي المناسب لك.", "services.kicker": "خدماتنا", "services.title": "موقع. تطبيق ويب. إطلاق. إدارة.", "services.website.title": "تصميم مواقع إلكترونية مخصصة", "services.website.body": "نصمّم موقعك انطلاقاً من فهم نشاطك وأهدافك. أخبرنا عن أعمالك، وسنطوّر الحل الرقمي الذي يلائم احتياجاتك الفعلية.", "services.webapp.title": "تطوير تطبيقات ويب", "services.webapp.body": "للشركات التي تحتاج إلى أكثر من موقع تعريفي: حجوزات، بوابات عملاء، لوحات متابعة وأدوات مخصصة لتنظيم أعمالها.", "services.launch.title": "إعداد الإطلاق الرقمي", "services.launch.body": "نساعد عملك ليكون جاهزاً للظهور والتواصل عبر الإنترنت من خلال الإعدادات الأساسية حول موقعك.", "services.launch.toggle": "اعرض ما يشمله", "services.launch.item1": "إعداد Google Business Profile", "services.launch.item2": "إعداد WhatsApp Business", "services.launch.item3": "إعداد Google Ads ودعم الإطلاق", "services.launch.item4": "أساسيات التتبع وتوجيه التحويلات", "services.launch.item5": "قائمة إطلاق للظهور والتواصل", "services.management.title": "إدارة الموقع", "services.management.body": "نتولّى إدارة موقعك شهرياً، من تحديث المحتوى والتعديلات إلى الصيانة التقنية والتحسين المستمر بعد الإطلاق.", "services.local": "من مقرنا في فرنسا، نتعاون مع الشركات في فرنسا وخارجها لتصميم حلول رقمية تناسب احتياجاتها، مع التعاون عن بُعد والصيانة الاختيارية.", "work.kicker": "أعمالنا", "work.title": "نماذج من مشاريعنا", "work.lazoya.title": "LAZOYA — مركز تجميل", "work.lazoya": "موقع وتجربة رقمية للخدمات مع حجز إلكتروني، محتوى متعدد اللغات ورحلة عميل مصممة حول مركز التجميل.", "work.jleilati.title": "J. LEILATI — تجارة إلكترونية", "work.jleilati": "منصة تجارة إلكترونية متعددة اللغات مع إدارة المنتجات، حسابات العملاء، الدفع والتوصيل داخل أوروبا.", "work.tags.website": "موقع", "work.tags.booking": "حجز", "work.tags.multilingual": "متعدد اللغات", "work.tags.management": "إدارة مستمرة", "work.tags.ecommerce": "تجارة إلكترونية", "work.tags.webapp": "تطبيق ويب", "work.tags.products": "إدارة المنتجات", "work.tags.checkout": "الدفع", "work.view": "استكشف المشروع", "process.kicker": "طريقتنا", "process.title": "الأعمال أولاً.<br>الحل الرقمي ثانياً.", "process.intro": "يبدأ كل مشروع لدى Chambre 17 بفهم النشاط التجاري الذي سيخدمه.", "process.understand.title": "نبدأ بفهم عملك.", "process.understand.body": "نتعرّف على طريقة عملك وعملائك واحتياجاتك والأهداف التي تسعى إلى تحقيقها.", "process.build.title": "نحول الفكرة إلى تجربة رقمية.", "process.build.body": "نحدّد البنية ونصمّم تجربة المستخدم ونطوّر الحل حول احتياجات نشاطك الفعلية.", "process.review.title": "نراجع الحل معاً.", "process.review.body": "تجرّب الحل وتشاركنا ملاحظاتك، ثم نحسّن التفاصيل معاً قبل الإطلاق.", "process.launch.title": "نطلق مشروعك.", "process.launch.body": "نختبر التجربة ونحسّنها على الأجهزة المختلفة، ثم نطلق النسخة النهائية.", "process.manage.title": "نواصل مرافقتك.", "process.manage.body": "بعد الإطلاق، يمكننا إدارة حلك الرقمي وصيانته وتحسينه باستمرار ليواكب تطوّر نشاطك.", "management.kicker": "الإدارة الشهرية", "management.title": "موقعك يتطور مع عملك.", "management.body": "الإدارة الشهرية اختيارية. بعد الإطلاق يمكن لـ Chambre 17 متابعة تحديث المحتوى، إضافة صفحات أو مزايا جديدة، الصيانة التقنية، مراقبة الأداء والتحسين المستمر.", "about.kicker": "من نحن", "about.title": "نفهم العمل قبل تصميم الموقع.", "about.body1": "Chambre 17 استوديو رقمي مستقل يجمع خبرات في استراتيجية الأعمال والتسويق الرقمي والبيانات والذكاء الاصطناعي والتجارة الإلكترونية والتصميم وقطاعات اقتصادية متنوعة.", "about.body2": "طريقتنا بسيطة: لا نبدأ من قالب جاهز. نبدأ بفهم عملك، عملائك، أهدافك وما يجب أن يحققه موقعك فعلاً.", "about.sig": "تصميم. أعمال. تقنية. كلها في غرفة واحدة.", "about.cap.business": "الأعمال", "about.cap.finance": "التمويل", "about.cap.retail": "التجزئة", "about.cap.luxury": "المنتجات الفاخرة", "about.cap.beauty": "صالونات التجميل", "about.cap.education": "التعليم", "about.cap.coaching": "التدريب", "about.cap.content": "المحتوى", "about.cap.sales": "المبيعات", "about.cap.marketing": "التسويق الرقمي", "about.cap.renovation": "التجديد", "about.cap.realestate": "العقارات", "about.cap.cars": "السيارات", "about.cap.data": "البيانات", "about.cap.ai": "الذكاء الاصطناعي", "about.cap.ecommerce": "التجارة الإلكترونية", "about.cap.design": "التصميم", "contact.kicker": "تواصل معنا", "contact.title": "ابدأ مشروعك.", "form.name": "الاسم", "form.company": "الشركة", "form.email": "البريد الإلكتروني", "form.phone": "الهاتف (اختياري)", "form.need": "ماذا تحتاج؟", "form.message": "الرسالة", "form.submit": "ابدأ مشروعك", "form.option.website": "تصميم موقع", "form.option.webapp": "تطوير تطبيق ويب", "form.option.launch": "إعداد الإطلاق الرقمي", "form.option.management": "إدارة موقع", "form.option.all": "موقع، تطبيق ويب وإدارة", "form.option.unsure": "لست متأكداً بعد", "form.status.sending": "جاري إرسال الرسالة...", "form.status.success": "تم إرسال رسالتك. سنردّ عليك قريباً.", "form.status.error": "حدث خطأ. يرجى مراسلتنا مباشرة على chambre17@icloud.com.", "form.status.invalid": "يرجى إكمال الحقول المطلوبة وإدخال بريد إلكتروني صحيح.", "footer.location": "مقرنا في لاغور، فرنسا · مشاريع في فرنسا وخارجها", "footer.services": "الخدمات", "footer.website": "تصميم مواقع", "footer.webapp": "تطبيقات ويب", "footer.launch": "إعداد الإطلاق الرقمي", "footer.management": "إدارة الموقع", "footer.contact": "تواصل", "footer.legal": "قانوني", "footer.legalNotice": "الإشعار القانوني", "footer.privacy": "سياسة الخصوصية", "legal.nav.privacy": "سياسة الخصوصية", "legal.nav.notice": "الإشعار القانوني", "legal.notice.titleTag": "الإشعار القانوني | CHAMBRE 17", "legal.notice.description": "الإشعار القانوني لموقع CHAMBRE 17.", "legal.notice.h1": "الإشعار القانوني", "legal.notice.intro": "ينطبق هذا الإشعار القانوني على موقع CHAMBRE 17 وصفحات عرض خدماته.", "legal.notice.publisher.title": "ناشر الموقع", "legal.notice.publisher.body": "CHAMBRE 17 هو الاسم التجاري المستخدم من قبل Mohamad Albi، بصفته رائد أعمال فردي، لخدمات تصميم المواقع، تطوير تطبيقات الويب وإدارة المواقع.", "legal.notice.publisher.location": "المقر المسجل: 17140 Lagord، فرنسا.", "legal.notice.publisher.contact": "تواصل مع الناشر:", "legal.notice.registration.title": "معلومات التسجيل", "legal.notice.registration.legalForm": "الشكل القانوني: رائد أعمال فردي، micro-enterprise.", "legal.notice.registration.trade": "الاسم التجاري: Chambre 17.", "legal.notice.registration.company": "اسم الشركة: Mohamad Albi.", "legal.notice.registration.siren": "SIREN: 131 127 979.", "legal.notice.registration.siret": "SIRET: 131 127 979 00014.", "legal.notice.registration.ape": "رمز APE: 62.01Z - أنشطة البرمجة المعلوماتية.", "legal.notice.registration.rne": "مسجل في RNE بتاريخ 06 أكتوبر 2026.", "legal.notice.registration.department": "القسم: 17 - Charente-Maritime.", "legal.notice.registration.formality": "إجراء الإنشاء: J00288470180، أودع بتاريخ 06 أكتوبر 2026 لدى INSEE / URSSAF.", "legal.notice.registration.activity": "النشاط الرئيسي المعلن: تصميم وتطوير المواقع وتطبيقات الويب؛ الصيانة، التحديثات والإدارة التقنية للمواقع وتطبيقات الويب.", "legal.notice.registration.vat": "حالة ضريبة القيمة المضافة: franchise en base de TVA.", "legal.notice.registration.vat293": "وفقاً للمادة 293 B من قانون الضرائب الفرنسي العام، لا تطبق ضريبة القيمة المضافة.", "legal.notice.contact.title": "التواصل", "legal.notice.contact.email": "البريد الإلكتروني:", "legal.notice.contact.phone": "واتساب / الهاتف:", "legal.notice.hosting.title": "الاستضافة", "legal.notice.hosting.body": "تتم استضافة هذا الموقع لدى Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States. الموقع:", "legal.notice.sales.title": "الخدمات والبيع عبر الإنترنت", "legal.notice.sales.body1": "يعرض هذا الموقع خدمات CHAMBRE 17 ويتيح للزوار التواصل معنا. لا يتم بيع المنتجات أو الخدمات مباشرة عبر دفع إلكتروني داخل هذا الموقع.", "legal.notice.sales.body2": "يتم تأكيد نطاق المشروع، الأسعار، شروط الدفع وأي شروط خدمة مطبقة مباشرة مع العميل قبل بدء العمل.", "legal.notice.ip.title": "الملكية الفكرية", "legal.notice.ip.body": "اسم CHAMBRE 17، الهوية البصرية، النصوص، التخطيط، عناصر الواجهة، الفيديوهات والمواد الإبداعية الأخرى في هذا الموقع محمية. يمنع أي نسخ أو توزيع أو إعادة استخدام دون إذن كتابي مسبق.", "legal.notice.links.title": "الروابط الخارجية", "legal.notice.links.body": "قد يحتوي هذا الموقع على روابط لمواقع خارجية، بما في ذلك مشاريع عملاء مختارة. CHAMBRE 17 غير مسؤول عن محتوى أو توفر أو ممارسات الخصوصية الخاصة بهذه المواقع.", "legal.notice.liability.title": "المسؤولية", "legal.notice.liability.body": "يسعى CHAMBRE 17 إلى إبقاء معلومات هذا الموقع دقيقة ومحدثة. ومع ذلك قد تحدث أخطاء أو نواقص. يرجى التواصل مع CHAMBRE 17 مباشرة للحصول على معلومات أو عروض أسعار أو شروط خدمة خاصة بمشروعكم.", "legal.notice.law.title": "القانون المطبق", "legal.notice.law.body": "ما لم ينص قانون إلزامي على خلاف ذلك، يخضع هذا الموقع للقانون الفرنسي.", "privacy.titleTag": "سياسة الخصوصية | CHAMBRE 17", "privacy.description": "سياسة الخصوصية لموقع CHAMBRE 17.", "privacy.h1": "سياسة الخصوصية", "privacy.intro": "توضح هذه السياسة كيف يتعامل CHAMBRE 17 مع المعلومات الشخصية المرسلة عبر هذا الموقع أو قنوات التواصل المباشر.", "privacy.controller.title": "المسؤول عن البيانات", "privacy.controller.body": "Mohamad Albi، رائد أعمال فردي يعمل تحت الاسم التجاري CHAMBRE 17، هو المسؤول عن المعلومات الشخصية المستلمة عبر هذا الموقع وقنوات التواصل الخاصة به.", "privacy.controller.contact": "التواصل:", "privacy.data.title": "البيانات التي قد ترسلها", "privacy.data.body": "عند التواصل مع CHAMBRE 17، قد ترسل اسمك، اسم شركتك، بريدك الإلكتروني، رقم هاتفك، احتياجات مشروعك ومحتوى رسالتك.", "privacy.use.title": "كيفية استخدام البيانات", "privacy.use.body": "تُستخدم معلوماتك لفهم طلبك، الرد عليك، تحضير نقاشات المشروع، إعداد عرض سعر عند الحاجة، وإدارة العلاقة التجارية إذا قررت العمل مع CHAMBRE 17.", "privacy.form.title": "حالة نموذج التواصل", "privacy.form.body": "يرسل نموذج التواصل في هذا الموقع طلبات المشاريع إلى CHAMBRE 17 عبر البريد الإلكتروني من خلال خدمة إرسال آمنة من جهة الخادم. يتم استخدام بريد الزائر كعنوان للرد حتى يتمكن CHAMBRE 17 من الرد مباشرة.", "privacy.basis.title": "الأساس القانوني", "privacy.basis.body1": "تتم معالجة بيانات التواصل وطلبات المشاريع لأنك تطلب معلومات أو خدمات من CHAMBRE 17، أو لأن التواصل ضروري قبل الدخول المحتمل في اتفاقية خدمة.", "privacy.basis.body2": "قد تتم أيضاً معالجة سجلات العملاء والمشاريع والسجلات الإدارية عند الحاجة للمتابعة التجارية المشروعة، تنفيذ الخدمات المتفق عليها، الالتزامات القانونية، الفوترة، المحاسبة أو إثبات الحقوق والدفاع عنها.", "privacy.retention.title": "مدة الاحتفاظ", "privacy.retention.body1": "عادةً يتم الاحتفاظ بطلبات المشاريع التي لا تتحول إلى عمل فعلي لمدة تصل إلى 24 شهراً بعد آخر تبادل مهم، ما لم تطلب الحذف قبل ذلك أو تكون هناك حاجة لفترة أطول لإدارة نزاع أو مطالبة قانونية.", "privacy.retention.body2": "يتم الاحتفاظ بسجلات العملاء والمشاريع والفوترة والمحاسبة للمدد المطلوبة بموجب القانون الفرنسي المعمول به وللمدة اللازمة لإدارة علاقة الخدمة.", "privacy.sharing.title": "مشاركة البيانات", "privacy.sharing.body1": "لا يبيع CHAMBRE 17 البيانات الشخصية. قد تتم معالجة المعلومات عبر مزودي خدمات تقنية عاديين مثل استضافة الموقع، إرسال البريد الإلكتروني، صندوق البريد، أدوات المراسلة أو أدوات العمل، فقط عند الحاجة لتشغيل الخدمة.", "privacy.sharing.body2": "يستخدم الموقع حالياً Vercel للاستضافة ووظائف الخادم، وResend لإرسال رسائل نموذج التواصل، وiCloud email لاستلام الطلبات. إذا تواصلت مع CHAMBRE 17 عبر WhatsApp، فإن شروط وممارسات الخصوصية الخاصة بواتساب تنطبق أيضاً.", "privacy.cookies.title": "ملفات تعريف الارتباط والتخزين المحلي", "privacy.cookies.body": "لا يستخدم هذا الموقع ملفات تعريف ارتباط إعلانية أو أدوات تتبّع تحليلية. عند اختيارك لغة، يُحفظ تفضيلك لمدة سنة في ملف تعريف ارتباط يُستخدم فقط لعرض اللغة التي اخترتها. يمكنك حذفه من إعدادات متصفحك.", "privacy.external.title": "المواقع الخارجية", "privacy.external.body": "تخضع الروابط إلى المواقع الخارجية، بما في ذلك أمثلة الأعمال، لسياسات الخصوصية الخاصة بتلك المواقع.", "privacy.rights.title": "حقوقك", "privacy.rights.body1": "يمكنك طلب الوصول إلى بياناتك، تصحيحها، حذفها، تقييدها، نقلها عند التطبيق، أو الاعتراض على بعض عمليات المعالجة من خلال التواصل عبر", "privacy.rights.body2": "إذا كنت تعتقد أن حقوقك المتعلقة بحماية البيانات لم تُحترم، يمكنك تقديم شكوى إلى CNIL:", "privacy.security.title": "الأمان", "privacy.security.body": "يتخذ CHAMBRE 17 تدابير تقنية وتنظيمية معقولة لحماية بيانات الطلبات وتقييد الوصول إليها للأشخاص ومزودي الخدمة اللازمين للرد على الطلبات وإدارة الخدمات.", "privacy.automated.title": "القرارات الآلية", "privacy.automated.body": "لا يستخدم CHAMBRE 17 المعلومات المرسلة عبر هذا الموقع لاتخاذ قرارات آلية أو لإنشاء ملفات تعريف شخصية.", "process.understand.label": "01 — نفهم نشاطك", "process.build.label": "02 — نصمم ونطوّر", "process.review.label": "03 — نراجع معاً", "process.launch.label": "04 — نطلق المشروع", "process.manage.label": "05 — نتابع ونطوّر", "hero.word.business": "الأعمال", "hero.word.design": "التصميم", "hero.word.technology": "التكنولوجيا", "hero.word.ai": "الذكاء الاصطناعي", "a11y.labels": {"CHAMBRE 17 home": "الرئيسية — CHAMBRE 17", "Main navigation": "التنقل الرئيسي", "Language switcher": "اختيار اللغة", "Menu": "القائمة", "Project tags": "خصائص المشروع", "Chambre 17 capabilities": "مجالات خبرة Chambre 17", "Footer navigation": "روابط تذييل الصفحة", "Legal navigation": "المعلومات القانونية", "Breadcrumb": "مسار الصفحة"}, "about.body3": "ثم نضع التصميم ونطوّر الحل بناءً على ذلك. التصميم والأعمال والتكنولوجيا، تحت سقف واحد.", "work.built": "ما أنجزناه", "work.lazoya.features.1": "موقع متعدد اللغات وصفحات لعرض الخدمات", "work.lazoya.features.2": "نظام تشخيص", "work.lazoya.features.3": "ربط الموقع بالحجز الإلكتروني", "work.lazoya.features.4": "صفحة للتنقّل بين خيارات الحجز المختلفة", "work.lazoya.features.5": "إدارة الموقع وتحديثه باستمرار", "work.jleilati.features.1": "متجر إلكتروني متعدد اللغات وكتالوج منتجات", "work.jleilati.features.2": "إدارة المنتجات", "work.jleilati.features.3": "حسابات العملاء", "work.jleilati.features.4": "مسار إتمام الطلب والدفع", "work.jleilati.features.5": "خيارات التوصيل داخل أوروبا", "nav.pricing": "الأسعار"}};

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
      "creation-essentiel": ["form.option.website", "la formule Essentiel — création de site à partir de 490 €"],
      "creation-business": ["form.option.website", "la formule Business — création de site à partir de 890 €"],
      "creation-sur-mesure": ["form.option.webapp", "un projet sur mesure — sur devis"],
      "gestion-essentiel": ["form.option.management", "la formule de gestion Essentiel — 29 €/mois"],
      "gestion-business": ["form.option.management", "la formule de gestion Business — 49 €/mois"],
      "gestion-premium": ["form.option.management", "la formule de gestion Premium — 89 €/mois"]
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
    message.value = "Bonjour, je souhaite recevoir des informations et un devis pour " + offer[1] + ".\n\nMon projet : ";
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
