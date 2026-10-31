/**
 * DR. ALAA MAHDY BADAWY - PORTFOLIO INTERACTION ENGINE
 * Multilingual Engine (Arabic RTL / English LTR), Mobile Drawer UX, Lightbox, Back to Top, & WhatsApp Conversion
 * Strictly relative paths for full GitHub Pages compatibility.
 * Strictly focused on Pharmacy, Clinical Nutrition & AI Automation.
 */

// Comprehensive i18n Translation Dictionary (Pharmacy & Clinical Nutrition Focused)
const translations = {
  ar: {
    // Navigation
    "nav.logoTitle": "د. آلاء مهدي بدوي",
    "nav.logoSub": "anuna • صيدلة • وعي • أتمتة",
    "nav.about": "نبذة عني",
    "nav.pillars": "المسارات والبرامج",
    "nav.automations": "أتمتة n8n",
    "nav.media": "الظهور التلفزيوني",
    "nav.credentials": "الاعتمادات",
    "nav.testimonials": "آراء المشتركين",
    "nav.contact": "تواصل معي",
    "nav.cta": "احجز استشارتك",

    // Hero Section
    "hero.badge": "تكامل ثلاثي فريد • صيدلة • وعي • أتمتة",
    "hero.title": 'حيث تلتقي <span class="gradient-text">العلوم الصيدلانية</span>، مع <span class="gradient-text-warm">الوعي الإنساني</span>، وذكاء <span class="gradient-text-teal">الأتمتة والـ AI</span>',
    "hero.desc": "صيدلانية وأخصائية تغذية علاجية أساعد الأفراد في استعادة عافيتهم ووعيهم الداخلي ببرامج علمية في التغذية الإكلينيكية والكوتشينج الشامل، وأساعد العيادات والشركات في أتمتة مسارات العمل وسرعة الاستجابة بأحدث أدوات الـ AI و n8n.",
    "hero.tag1": "صيدلانية وتغذية إكلينيكية (A+)",
    "hero.tag2": "كوتش إينياجرام وممارس PEAT",
    "hero.tag3": "هندسة أتمتة وسير عمل n8n",
    "hero.exploreBtn": "استكشف البرامج والخدمات",
    "hero.chatBtn": "تواصل مباشر عبر واتساب",
    "hero.stat1": "امتياز A+ دبلوم التغذية",
    "hero.stat2": "سير عمل حقيقي مجرب",
    "hero.stat3": "استشارات وإعلام معتمد",
    "hero.badgeTopTitle": "خبير معتمد إعلامياً",
    "hero.badgeTopSub": "لقاءات وحلقات تلفزيونية",
    "hero.badgeBotTitle": "أتمتة سير العمل n8n",
    "hero.badgeBotSub": "أنظمة ذكية للعيادات والشركات",

    // About Section
    "about.tag": "عن الرؤية والمنهجية",
    "about.title": "القوة الاستثنائية للجمع بين العلوم الصيدلانية، النفس، والتكنولوجيا",
    "about.subtitle": "عندما يفهم مهندس الأتمتة علم الأدوية، كيمياء التغذية، والأنماط النفسية للإنسان، ينتج منظومة استشارية وتقنية متكاملة لا تشوبها شائبة.",
    "about.card1Title": "1. الدقة والأساس الصيدلاني والعلمي",
    "about.card1Desc": "خلفيتي كصيدلانية مرخصة وحاصلة على دبلوم الدراسات العليا في التغذية الإكلينيكية بتقدير ممتاز A+ من كلية الصيدلة جامعة المنصورة، تمنحني فهماً عميقاً لكيمياء الدواء، التداخلات الغذائية والدوائية، وبناء أنظمة غذائية تراعي وظائف الأعضاء والتمثيل الغذائي.",
    "about.card2Title": "2. الوعي الداخلي وإدراك السلوك (anuna)",
    "about.card2Desc": "من خلال دراسة الإينياجرام (Enneagram) واعتمادي كمعالج لتقنيات الـ PEAT و Aspectics، أساعدك في فهم الدوافع العميقة وراء عاداتك، تحرير المشاعر المكبوتة، والتغلب على الأكل العاطفي والعوائق النفسية التي تعطل تقدمك في الحياة.",
    "about.card3Title": "3. هندسة الأتمتة وحلول الذكاء الاصطناعي",
    "about.card3Desc": "خريجة مبادرة رواد مصر الرقمية (DEPI) والحاصلة على شهادة Microsoft Azure AI Fundamentals، أقوم بتصميم وربط منظومات سير العمل المتطورة عبر n8n لتمكين العيادات والشركات من إدارة المواعيد، استفسارات العملاء، والعمليات بكفاءة 24/7 دون أخطاء.",

    // Programs & Signature Tracks
    "pillars.tag": "البرامج والخدمات المعتمدة",
    "pillars.title": "اختر المسار المناسب لاحتياجك",
    "pillars.subtitle": "سواء كنت فرداً يبحث عن صحة متكاملة ووعي نفسي، أو عيادة وشركة تبحث عن أتمتة ذكية تساند نموها.",
    "programs.p1Badge": "البرنامج الأشمل للتغيير المتكامل",
    "programs.p1Title": "برنامج التحول المتكامل (3 شهور)",
    "programs.p1Quote": '"لأن صحتك هي أساس كل شيء .. رحلة متكاملة نحو صحة أفضل، وعي أعمق، وتوازن حقيقي"',
    "programs.p1Feat1Title": "تقييم غذائي وصحي شامل:",
    "programs.p1Feat1Desc": "تحليل التاريخ الغذائي والصحي، تقييم الفيتامينات والمؤشرات الحيوية، مع تقييم نفسي وسلوكي متكامل.",
    "programs.p1Feat2Title": "نظام غذائي مخصص:",
    "programs.p1Feat2Desc": "مفصل تماماً بناءً على كيمياء جسمك واحتياجاتك الفسيولوجية لبناء عادات مستدامة دائمة.",
    "programs.p1Feat3Title": "متابعة طوال الـ 3 أشهر:",
    "programs.p1Feat3Desc": "مكالمتان دوريتان شهرياً + متابعة يومية عبر الواتساب للاستفسارات والدعم المستمر.",
    "programs.p1Feat4Title": "تمارين نفسية وعملية:",
    "programs.p1Feat4Desc": "تدريبات للوعي بالأكل وتحسين نمط الحياة (Lifestyle) والاتصال بالذات.",
    "programs.p1Feat5Title": "هدية إضافية:",
    "programs.p1Feat5Desc": "جلستان دعم فردي (ساعة لكل جلسة) للتغلب على العوائق النفسية.",
    "programs.p1Period": "رحلة متابعة متكاملة ومخصصة طوال الـ 3 أشهر",
    "programs.bookP1": "تواصل عبر واتساب للاستفسار والحجز",
    "programs.inquireP1Btn": "تواصل عبر واتساب للاستفسار والحجز",
    "programs.inquiryNotice": "الاستفسار عن السعر متاح عبر واتساب",
    "programs.viewPoster": "معاينة تفاصيل البوستر الرسمي",

    "programs.p2Badge": "كوتشينج الوعي وتحرير المشاعر",
    "programs.p2Title": "مش مجرد جلسة.. مساحة تفهمي فيها نفسك بعمق",
    "programs.p2Quote": '"كوتشينج للفهم والوضوح • تحرير مشاعر لتخفيف ما يثقلك • اتزان عاطفي لأن مشاعرك مهمة"',
    "programs.p2Feat1Title": "جلسات حسب احتياجك:",
    "programs.p2Feat1Desc": "تجمع بين تقنيات الـ PEAT والإينياجرام لتفريغ المشاكل وتحقيق الهدوء.",
    "programs.p2Feat2Title": "جلسات فردية مريحة:",
    "programs.p2Feat2Desc": "أونلاين عبر زوم أو التليفون (المدة: 60 - 75 دقيقة للجلسة).",
    "programs.p2Feat3Title": "فهم الذات الحقيقي:",
    "programs.p2Feat3Desc": "التمييز بين مجرد \"المعرفة\" وبين \"الإدراك والتطبيق\" الذي يحدث النقلة.",
    "programs.p2Feat4Title": "عرض باكدج 5 جلسات:",
    "programs.p2Feat4Desc": "احصل على الجلسة السادسة كهدية مجانية مع المتابعة المستمرة.",
    "programs.p2Period": "جلسات فردية مخصصة وعروض باكدج (5 جلسات + السادسة هدية)",
    "programs.bookP2": "تواصل عبر واتساب للاستفسار والحجز",
    "programs.inquireP2Btn": "تواصل عبر واتساب للاستفسار والحجز",

    "programs.p3Badge": "للعيادات، الشركات، ورواد الأعمال",
    "programs.p3Title": "حلول وهندسة أتمتة الأعمال وسير العمل الذكي",
    "programs.p3Quote": '"تحويل المهام اليدوية المتكررة إلى منظومات آلية تعمل بدقة متناهية وسرعة فائقة"',
    "programs.p3Feat1Title": "أتمتة حجز المواعيد للعيادات:",
    "programs.p3Feat1Desc": "ربط استمارات الحجز مباشرة مع Google Calendar وإرسال تأكيدات Gmail فورية.",
    "programs.p3Feat2Title": "روبوتات المتابعة الذكية:",
    "programs.p3Feat2Desc": "أنظمة تنبيه ومتابعة دورية عبر تيليجرام وواتساب للمرضى والعملاء في مواعيد محددة.",
    "programs.p3Feat3Title": "تكامل الـ APIs وقواعد البيانات:",
    "programs.p3Feat3Desc": "ربط Google Sheets، Webhooks، وأنظمة الـ CRM دون الحاجة لتدخل بشري.",
    "programs.p3Feat4Title": "استشارات حلول الأعمال:",
    "programs.p3Feat4Desc": "دراسة دورة العمل الحالية في عيادتك أو شركتك وبناء مسارات مخصصة.",
    "programs.p3CustomPrice": "حلول مخصصة حسب حجم العمل",
    "programs.p3Period": "من الاستشارة وبناء النموذج الأولي وحتى الإطلاق الكامل",
    "programs.bookP3": "تواصل عبر واتساب لطلب استشارة أتمتة",
    "programs.viewWorkflows": "مشاهدة نماذج ومخططات n8n الحقيقية",

    // Automations Section
    "automations.tag": "معرض المشاريع التقنية",
    "automations.title": "نماذج ومخططات سير العمل المنفذة (n8n Live Blueprints)",
    "automations.subtitle": "نماذج حقيقية ومخططات معمارية قمتُ بتصميمها وبنائها لاختبار وتشغيل الأتمتة الكاملة للعيادات والشركات.",
    "automations.zoom": "اضغط للتكبير واستعراض المخطط",
    "automations.w1Title": "نظام حجز المواعيد الآلي للعيادات والمراكز الصحية",
    "automations.w1Desc": "يبدأ بسحب بيانات الحجز عبر Webhook لحظي، ثم معالجة الحقول (Edit Fields)، وتسجيل موعد العميل مباشرة في Google Calendar، وإرسال رسالة تأكيد رسمية بالبريد الإلكتروني عبر Gmail، ثم الرد السريع على العميل (Respond to Webhook).",
    "automations.w2Title": "محرك المتابعة الذكية والتنبيهات المجدولة للعملاء",
    "automations.w2Desc": "يعمل بجدولة زمنية محددة لقراءة صفوف المستفيدين من Google Sheets، وتطبيق خوارزمية منطقية مخصصة بـ JavaScript لتخصيص النصيحة أو التنبيه الصحي، ثم إرسال رسالة عبر Telegram، والانتظار لمهلة محددة (Wait Node)، وإرسال رسالة المتابعة الثانية تلقائياً.",
    "automations.w3Title": "محرك الربط البرمجي والتنبيهات متعددة القنوات (Multi-Channel)",
    "automations.w3Desc": "جدولة سحب البيانات الخارجية عبر REST API (HTTP Request)، وإعادة تشكيل البيانات وتوزيعها في تفرع متزامن يرسل تنبيهاً فورياً إلى Telegram وفي الوقت نفسه يرسل تقريراً رسمياً مفصلاً عبر Gmail.",

    // Media Section
    "media.tag": "المصداقية الإعلامية والتلفزيونية",
    "media.title": "حضور إعلامي وتلفزيوني لنشر الوعي الصحي وتطوير الذات",
    "media.subtitle": "لقاءات وفقرات تلفزيونية متخصصة لمناقشة التنمية البشرية، ضبط النفس، أنماط الشخصيات، والتغذية المتكاملة.",
    "media.ep1Badge": "برنامج بيت العز",
    "media.ep1Title": "لقاء برنامج «بيت العز» — تمكين الذات وبناء الوعي النفسي والسلوكي",
    "media.ep1Desc": "حوار تلفزيوني ممتد حول تمكين الذات وبناء الوعي النفسي والسلوكي، وأثر التوازن الداخلي على نمط الحياة اليومي والصحة المتكاملة.",
    "media.ep2Badge": "هي والحياة | د. أماني محمود",
    "media.ep2Title": "برنامج «هي والحياة» — ضبط النفس وتنظيم الوقت مع أولادنا",
    "media.ep2Desc": "لقاء تلفزيوني خاص مع الإعلامية د. أماني محمود لمناقشة أساليب ضبط النفس، تنظيم وقت الأسرة والأبناء، ومفاتيح التربية والتعامل المتوازن.",
    "media.ep3Badge": "هي والحياة | أنماط الشخصيات",
    "media.ep3Title": "برنامج «هي والحياة» — أنماط الشخصيات ومفاتيح فهم الذات والآخرين",
    "media.ep3Desc": "فقرة تلفزيونية متخصصة في سيكولوجيا الشخصية وفهم الأنماط النفسية والسلوكية لتطوير التواصل الفعّال مع الأسرة ومحيط العمل.",
    "media.watchBtn": "مشاهدة الحلقة",
    "media.videoBadge": "فيديو اللقاء التلفزيوني",
    "media.ep1Tag": "حلقة كاملة",
    "media.ep2Tag": "حلقة كاملة",
    "media.ep3Tag": "حلقة كاملة",
    "media.tipTitle": "هل ترغبين في إضافة حلقات ولقاءات إضافية؟",
    "media.tipDesc": "يمكنكِ وضع أي ملف فيديو جديد بصيغة MP4 داخل مجلد assets/videos/ وسيعمل مباشرة عبر الموقع بجودة كاملة.",
    "media.noticeTitle": "ملف الفيديو غير موجود بعد في مجلد المشروع",
    "media.noticeDesc": "يرجى وضع ملف الفيديو الخاص بالحلقة داخل المجلد الموضح أدناه ليعمل التشغيل التلقائي دائماً:",
    "media.previewLocalLabel": "أو اختاري ملف الفيديو من جهازك لمعاينته الآن فوراً في المشغل:",
    "media.chooseFileBtn": "اختيار ملف MP4 من جهازك",

    // Credentials Section
    "cred.tag": "المؤهلات الرسمية الموثقة",
    "cred.title": "الشهادات والاعتمادات الأكاديمية والمهنية",
    "cred.subtitle": "سجل حافل من الاعتمادات الرسمية في العلوم الصيدلانية، التغذية الإكلينيكية، الكوتشينج، وتكنولوجيا الذكاء الاصطناعي.",
    "cred.c1Title": "دبلوم الدراسات العليا في التغذية الإكلينيكية (A+)",
    "cred.c1Org": "كلية الصيدلة — جامعة المنصورة",
    "cred.c1Desc": "حصلت على الدبلوم بتقدير امتياز (A+) بمعدل تراكمي ممتاز 4 من 4 (GPA 4.0)، متخصصة في التغذية الإكلينيكية واستقلاب الطاقة والمكملات الغذائية.",
    "cred.c2Title": "Microsoft Azure AI Fundamentals",
    "cred.c2Org": "Microsoft & ELEVATE (UNESCO ICAIRE)",
    "cred.c2Desc": "برنامج متقدم لمدة 5 أسابيع في أساسيات ومبادئ الذكاء الاصطناعي السحابي، نماذج تعلم الآلة، وحلول الذكاء التوليدي برعاية ICAIRE التابع لليونسكو.",
    "cred.c3Title": "مدرب معتمد للتنمية المستدامة (مبادرة كن سفيراً)",
    "cred.c3Org": "وزارة التخطيط والتنمية الاقتصادية والمعهد القومي للحوكمة",
    "cred.c3Desc": "اجتياز كافة المراحل التدريبية والاعتماد كمدرب لنشر وتطبيق مفاهيم التنمية المستدامة ورؤية مصر 2030 لتمكين الكفاءات البشرية.",
    "cred.c4Title": "ممارس معتمد لتقنيات Aspectics & PEAT Methods",
    "cred.c4Org": "Spiritual Technology (Zivorad Slavinski)",
    "cred.c4Desc": "اعتماد لقب Aspectics Processor للعمل الفردي في تطوير الوعي الإنساني، تفريغ الشحنات العاطفية السلبية، وتحقيق التوازن النفسي الداخلي.",
    "cred.c5Title": "أتمتة الذكاء الاصطناعي مع n8n (مبادرة DEPI)",
    "cred.c5Org": "مبادرة رواد مصر الرقمية — وزارة الاتصالات",
    "cred.c5Desc": "إتقان تصميم وهندسة مسارات الأتمتة المتقدمة، ربط الـ APIs، والوكلاء الأذكياء (AI Agents) لخدمة حلول الأعمال والعمليات التشغيلية.",
    "cred.c6Title": "بكالوريوس العلوم الصيدلية (B.Pharm)",
    "cred.c6Org": "صيدلانية مرخصة ومقيدة بنقابة صيادلة مصر",
    "cred.c6Desc": "أساس علمي رصين في علم الأدوية (Pharmacology)، الكيمياء الحيوية، وحركية الدواء، وفهم آليات تأثير التغذية والمكملات على المستوى الخلوي والحيوي.",

    // Testimonials
    "testi.tag": "تجارب واقعية ملهمة",
    "testi.title": "آراء حقيقية من جلسات الوعي والتغذية",
    "testi.subtitle": "نعتز بالحفاظ التام على خصوصية كل عميل، ونشارك فقط الكلمات الصادقة والتغيرات الحقيقية التي عاشوها.",
    "testi.t1Author": "مشتركة في جلسات الكوتشينج والوعي",
    "testi.t1Tag": "رسالة واتساب موثقة 🤍",
    "testi.t1Content": '"بجد يا الاء الجلسه كان حلو اوي وحسه اني خرجت فيها مدركه فيها حاجات كنت عارفاها بس ولما خلصنا الجلسه لقيت اني ادركتها دلوقت وانتي اكيد عارفه اي الفرق بين المعرفه والادراك فا دي حاجه بنسبالي كبير بجد شكرا وشكر على حضورك ومعلوماتك ووقتك والراحه الي في الجلسه 🤍"',
    "testi.viewSnapshot": "مشاهدة لقطة الرسالة",
    "testi.t2Author": "مشتركة في جلسات تحرير المشاعر",
    "testi.t2Content": '"قبل الجلسه كنت مضايقه وجيلي احساس اني مضايقه وخلاص ومضايقه من نفسي.. بعد الجلسه بحس انا اهدى واوضح وبقى نفسي احس احساس التواصل مع نفسي وجسمي علطول مش بروح ويجي.. فرق رهيب في الهدوء والسلام الداخلي."',
    "testi.t3Author": "مشتركة في جلسات الإينياجرام",
    "testi.t3Content": '"بقول الحمد لله ان ربنا وفقني للخطوه ديه رغم اني ساعات بحسها صعبه.. فكره ان في حد اتكلم معاه هيفهمني او ينور لي حتى مش واخده بالي منها دي حاجه كبيرة وفرقت في طريقة اتخاذي لقراراتي."',
    "testi.t4Author": "مشتركة في برنامج التغذية العلاجية",
    "testi.t4Content": '"اكتر شي ساعدني اني بفهم نفسي وبفهم الحتة المستخبية اللي جوايا.. لأول مرة أفهم ليه كنت بلجأ للأكل لما اتوتر وإزاي بقيت متحكمة في جسمي وصحتي بدون حرمان أو قسوة على نفسي."',

    // Contact
    "contact.tag": "ابدأ رحلتك اليوم",
    "contact.title": "جاهزة لمساعدتك في تحقيق أهدافك",
    "contact.desc": "سواء كنت ترغب في بدء رحلة التغذية والكوتشينج، أو تريد أتمتة مهام عيادتك وشركتك، يمكنك التواصل معي مباشرة وسأكون سعيدة بالرد عليك.",
    "contact.waLabel": "واتساب مباشر وحجز سريع",
    "contact.igLabel": "إنستجرام الرسمي",
    "contact.liLabel": "الملف المهني على لينكدإن",
    "contact.formTitle": "إرسال استفسار مباشر",
    "contact.formSubtitle": "املأ النموذج وسيتم تحويل رسالتك مباشرة إلى واتساب لإتمام الحجز بكل سهولة:",
    "contact.nameLabel": "الاسم الكريم",
    "contact.namePlaceholder": "أدخل اسمك الكريم",
    "contact.serviceLabel": "الخدمة أو البرنامج المطلوب",
    "contact.opt1": "برنامج التحول المتكامل 3 شهور (تغذية علاجية + كوتشينج)",
    "contact.opt2": "جلسات الكوتشينج وتحرير المشاعر (anuna)",
    "contact.opt3": "حلول وأتمتة الذكاء الاصطناعي و n8n للعيادات والشركات",
    "contact.opt4": "استشارة صيدلانية وتغذوية خاصة",
    "contact.msgLabel": "رسالتك أو استفسارك",
    "contact.msgPlaceholder": "اكتب نبذة عن رغبتك أو حالتك...",
    "contact.submitBtn": "إرسال الاستفسار وتأكيد الموعد عبر واتساب",

    // Footer & Floating
    "footer.desc": "صيدلانية، أخصائية تغذية علاجية، كوتش إينياجرام وممارس PEAT، ومهندسة أتمتة ذكاء اصطناعي.",
    "footer.rights": "© 2026 د. آلاء مهدي بدوي. جميع الحقوق محفوظة.",
    "floating.wa": "تواصل معي مباشرة"
  },

  en: {
    // Navigation
    "nav.logoTitle": "Dr. Alaa Mahdy Badawy",
    "nav.logoSub": "anuna • Pharmacy, Coaching & AI",
    "nav.about": "About",
    "nav.pillars": "Programs & Services",
    "nav.automations": "n8n Automations",
    "nav.media": "Media & TV",
    "nav.credentials": "Credentials",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.cta": "Book Consultation",

    // Hero Section
    "hero.badge": "Multidisciplinary Synthesis • Pharmacy • Mind • AI Automation",
    "hero.title": 'Where <span class="gradient-text">Pharmaceutical Science</span>, <span class="gradient-text-warm">Human Consciousness</span>, and <span class="gradient-text-teal">AI & Automation</span> Converge',
    "hero.desc": "Licensed pharmacist & clinical nutrition specialist empowering individuals to reclaim vibrant health and inner awareness, while engineering robust n8n AI workflows that automate healthcare clinics and growing businesses.",
    "hero.tag1": "Pharmacist & Clinical Nutritionist (A+)",
    "hero.tag2": "Enneagram & PEAT Coach",
    "hero.tag3": "n8n Workflow Automation Engineer",
    "hero.exploreBtn": "Explore Programs & Services",
    "hero.chatBtn": "Chat Directly on WhatsApp",
    "hero.stat1": "GPA 4.0 / A+ Nutrition Honors",
    "hero.stat2": "100% Tested Live Blueprints",
    "hero.stat3": "Recognized TV & Media Expert",
    "hero.badgeTopTitle": "Media Verified Expert",
    "hero.badgeTopSub": "TV Interviews & Health Shows",
    "hero.badgeBotTitle": "n8n Workflow Engineering",
    "hero.badgeBotSub": "Smart Systems for Clinics & SMEs",

    // About Section
    "about.tag": "Vision & Methodology",
    "about.title": "The Power of Synthesizing Pharmaceutical Science, Psychology & Technology",
    "about.subtitle": "When an automation engineer understands pharmacology, nutritional biochemistry, and human behavior, the result is an unshakeable, transformative system.",
    "about.card1Title": "1. Pharmaceutical & Scientific Rigor",
    "about.card1Desc": "As a licensed pharmacist with a Postgraduate Diploma in Clinical Nutrition (Honors A+, GPA 4.0/4 from Mansoura University Faculty of Pharmacy), I possess a deep understanding of pharmacology, drug-nutrient interactions, and biochemical metabolism to formulate safe nutrition protocols.",
    "about.card2Title": "2. Inner Awareness & Behavior (anuna)",
    "about.card2Desc": "Through certified mastery of the Enneagram and PEAT/Aspectics methods, I help you uncover the root drivers of emotional eating and unconscious habits, releasing trapped emotional weight to create long-lasting inner peace.",
    "about.card3Title": "3. AI & Automation Engineering",
    "about.card3Desc": "Graduated from the Digital Egypt Pioneers Initiative (DEPI) and certified in Microsoft Azure AI Fundamentals, I architect scalable n8n workflows that empower clinics and businesses to automate patient bookings, reminders, and operations 24/7 without friction.",

    // Programs & Signature Tracks
    "pillars.tag": "Programs & Services",
    "pillars.title": "Choose the Path Tailored to Your Goals",
    "pillars.subtitle": "Whether you are an individual pursuing holistic health and emotional clarity, or a clinic seeking intelligent automation to scale operations.",
    "programs.p1Badge": "Comprehensive Transformation Flagship",
    "programs.p1Title": "3-Month Holistic Transformation Journey",
    "programs.p1Quote": '"Because your health is the foundation of everything.. A complete journey toward vibrant health, deeper awareness, and authentic balance."',
    "programs.p1Feat1Title": "Full Comprehensive Assessment:",
    "programs.p1Feat1Desc": "Dietary history analysis, metabolic biomarker review, vitamin evaluation, and an in-depth behavioral intake session.",
    "programs.p1Feat2Title": "Bespoke Clinical Nutrition Plan:",
    "programs.p1Feat2Desc": "Customized down to your biological needs for sustainable lifestyle habit-building.",
    "programs.p1Feat3Title": "Continuous 3-Month Support:",
    "programs.p1Feat3Desc": "Bi-weekly 30-min strategy calls + daily WhatsApp accountability and continuous guidance.",
    "programs.p1Feat4Title": "Mindful Lifestyle Exercises:",
    "programs.p1Feat4Desc": "Mindful eating protocols, lifestyle modifications, and practical self-connection exercises.",
    "programs.p1Feat5Title": "Complimentary Bonus:",
    "programs.p1Feat5Desc": "Two private 1-on-1 support sessions (60 min each) to dissolve inner emotional barriers.",
    "programs.p1Period": "Personalized comprehensive support throughout the 3 months",
    "programs.bookP1": "Chat on WhatsApp to Inquire & Book",
    "programs.inquireP1Btn": "Chat on WhatsApp to Inquire & Book",
    "programs.inquiryNotice": "Pricing & details available via WhatsApp",
    "programs.viewPoster": "Preview Official Program Brochure",

    "programs.p2Badge": "Inner Coaching & Emotional Release",
    "programs.p2Title": "Not Just a Session.. A Safe Haven for Deep Clarity",
    "programs.p2Quote": '"Coaching for clarity • Emotional release to lighten your load • Inner equilibrium because your feelings matter."',
    "programs.p2Feat1Title": "Tailored to Your Needs:",
    "programs.p2Feat1Desc": "Combining PEAT techniques & Enneagram coaching to clear emotional charge and restore peace.",
    "programs.p2Feat2Title": "Comfortable 1-on-1 Sessions:",
    "programs.p2Feat2Desc": "Online via Zoom or Phone (Duration: 60 - 75 minutes per session).",
    "programs.p2Feat3Title": "Real Embodied Understanding:",
    "programs.p2Feat3Desc": "Moving beyond intellectual knowledge into deep emotional awareness and practical daily application.",
    "programs.p2Feat4Title": "5-Session Package Special:",
    "programs.p2Feat4Desc": "Receive a complimentary 6th integration session with continuous follow-up.",
    "programs.p2Period": "Tailored 1-on-1 sessions & 5+1 bonus package options",
    "programs.bookP2": "Chat on WhatsApp to Inquire & Book",
    "programs.inquireP2Btn": "Chat on WhatsApp to Inquire & Book",

    "programs.p3Badge": "For Healthcare Clinics & SMEs",
    "programs.p3Title": "Intelligent Business Automation & AI Workflows",
    "programs.p3Quote": '"Transform repetitive manual overhead into reliable, error-free automated pipelines that run 24/7."',
    "programs.p3Feat1Title": "Automated Clinic Booking:",
    "programs.p3Feat1Desc": "Instant webhook ingestion synced with Google Calendar and automated Gmail confirmations.",
    "programs.p3Feat2Title": "Smart Follow-Up Bots:",
    "programs.p3Feat2Desc": "Scheduled notification engines via Telegram & WhatsApp to follow up with patients and leads.",
    "programs.p3Feat3Title": "API & CRM Data Integration:",
    "programs.p3Feat3Desc": "Seamless bridge connecting Google Sheets, Webhooks, CRMs, and payment gateways with zero manual entry.",
    "programs.p3Feat4Title": "Consulting & Architecture:",
    "programs.p3Feat4Desc": "Workflow audits of your clinic or business operations and custom blueprint deployment.",
    "programs.p3CustomPrice": "Tailored to Scope & Requirements",
    "programs.p3Period": "From initial architecture and MVP testing to full deployment",
    "programs.bookP3": "Chat on WhatsApp to Request Automation",
    "programs.viewWorkflows": "View Live n8n Architecture Blueprints",

    // Automations Section
    "automations.tag": "Technical Showcase",
    "automations.title": "Live Architecture Blueprints (Engineered in n8n)",
    "automations.subtitle": "Production-tested workflow diagrams architected to automate critical scheduling, follow-ups, and data dispatch.",
    "automations.zoom": "Click to expand & inspect blueprint",
    "automations.w1Title": "Automated Clinic Booking & Calendar Synchronization",
    "automations.w1Desc": "Receives instant booking requests via POST Webhook, parses patient fields, automatically reserves the slot on Google Calendar, dispatches a confirmation email via Gmail, and sends an immediate response to the client.",
    "automations.w2Title": "Scheduled Patient Follow-Up & Telegram Engine",
    "automations.w2Desc": "Runs on a cron schedule to fetch patient records from Google Sheets, executes customized JavaScript business logic to format health tips, triggers Telegram notifications, waits for a designated timeframe, and sends a follow-up check-in.",
    "automations.w3Title": "REST API Integration & Multi-Channel Alert Engine",
    "automations.w3Desc": "Fetches external environmental and health API metrics via HTTP Request, formats dynamic alert payloads, and simultaneously dispatches instant alerts across Telegram and formal reports via Gmail.",

    // Media Section
    "media.tag": "Broadcast & Media Credibility",
    "media.title": "Television Appearances & Human Development Advocacy",
    "media.subtitle": "Specialized television episodes addressing personal development, emotional regulation, personality profiling, and holistic wellbeing.",
    "media.ep1Badge": "Bayt El-Ezz Program",
    "media.ep1Title": "Bayt El-Ezz: Self-Empowerment & Psychological Awareness",
    "media.ep1Desc": "In-depth television dialogue exploring self-empowerment, behavioral awareness, and the profound impact of inner alignment on healthy lifestyle modification.",
    "media.ep2Badge": "Heya W Al-Hayah | Dr. Amani Mahmoud",
    "media.ep2Title": "Heya W Al-Hayah: Self-Regulation & Family Time Management",
    "media.ep2Desc": "Exclusive broadcast with anchor Dr. Amani Mahmoud covering emotional regulation techniques, family schedule optimization, and conscious parenting.",
    "media.ep3Badge": "Heya W Al-Hayah | Personality Profiling",
    "media.ep3Title": "Heya W Al-Hayah: Personality Types & Understanding Others",
    "media.ep3Desc": "Specialized segment demystifying personality archetypes and psychological patterns to cultivate effective communication across personal and professional domains.",
    "media.watchBtn": "Watch Episode",
    "media.videoBadge": "TV Appearance Video",
    "media.ep1Tag": "Full Episode",
    "media.ep2Tag": "Full Episode",
    "media.ep3Tag": "Full Episode",
    "media.tipTitle": "Would you like to add more TV episodes?",
    "media.tipDesc": "You can place any new MP4 video file inside the assets/videos/ folder and it will play directly on the site.",
    "media.noticeTitle": "Video file not found in project folder yet",
    "media.noticeDesc": "Please place your episode video file inside the folder indicated below to enable automatic playback:",
    "media.previewLocalLabel": "Or choose the video file directly from your computer to preview it right now:",
    "media.chooseFileBtn": "Select MP4 File from Computer",

    // Credentials Section
    "cred.tag": "Verified Qualifications",
    "cred.title": "Academic Degrees & Professional Accreditations",
    "cred.subtitle": "A distinguished record of certifications from premier universities, ministries, and international bodies.",
    "cred.c1Title": "Postgraduate Diploma in Clinical Nutrition (A+)",
    "cred.c1Org": "Faculty of Pharmacy — Mansoura University",
    "cred.c1Desc": "Graduated with Honors (A+) and a perfect cumulative GPA of 4.0 / 4, specializing in clinical therapeutic nutrition and metabolic physiology.",
    "cred.c2Title": "Microsoft Azure AI Fundamentals",
    "cred.c2Org": "Microsoft & ELEVATE (UNESCO ICAIRE)",
    "cred.c2Desc": "Intensive 5-week program in cloud AI fundamentals, machine learning architectures, and generative AI systems endorsed by UNESCO ICAIRE.",
    "cred.c3Title": "Certified Sustainable Development Trainer",
    "cred.c3Org": "Ministry of Planning & National Institute for Governance",
    "cred.c3Desc": "Completed the 'Be an Ambassador' initiative to champion Egypt Vision 2030 sustainable development principles and human capability development.",
    "cred.c4Title": "Certified Aspectics & PEAT Methods Practitioner",
    "cred.c4Org": "Spiritual Technology (Zivorad Slavinski)",
    "cred.c4Desc": "Conferred the title of Aspectics Processor for individual consciousness development, emotional release, and psychological equilibrium.",
    "cred.c5Title": "AI & n8n Workflow Automation Specialist",
    "cred.c5Org": "Digital Egypt Pioneers Initiative (DEPI) — MCIT",
    "cred.c5Desc": "Mastery of enterprise automation pipelines, REST APIs, and autonomous AI agents for modern operational efficiency.",
    "cred.c6Title": "Bachelor of Pharmacy (B.Pharm)",
    "cred.c6Org": "Licensed Pharmacist — Egyptian Pharmacists Syndicate",
    "cred.c6Desc": "Deep foundational mastery of pharmacokinetics, human physiology, biochemistry, and cellular nutrient absorption.",

    // Testimonials
    "testi.tag": "Authentic Client Transformations",
    "testi.title": "Genuine Voices from Nutrition & Coaching Journeys",
    "testi.subtitle": "We strictly respect client confidentiality, sharing only authentic words and real breakthroughs.",
    "testi.t1Author": "Coaching & Awareness Client",
    "testi.t1Tag": "Verified WhatsApp Message 🤍",
    "testi.t1Content": '"Honestly Alaa, the session was wonderful. I walked away truly realizing things I previously only knew intellectually. You know the huge difference between mere knowledge and deep embodiment. Thank you for your presence, wisdom, time, and the pure peace in the session 🤍"',
    "testi.viewSnapshot": "View Message Screenshot",
    "testi.t2Author": "Emotional Release Client",
    "testi.t2Content": '"Before our session, I felt heavy and disconnected from myself. Afterward, I felt clearer, grounded, and attuned to my body. An incredible shift in inner calm and peace."',
    "testi.t3Author": "Enneagram Coaching Client",
    "testi.t3Content": '"I am so grateful to have taken this step. Having someone who truly understands your patterns and sheds light on things you were blind to made a profound difference in how I make life decisions."',
    "testi.t4Author": "Clinical Nutrition Client",
    "testi.t4Content": '"What helped me most was understanding myself and what was hidden beneath the surface. For the first time, I understood why I reached for food under stress, and gained control over my health without deprivation."',

    // Contact
    "contact.tag": "Start Your Journey Today",
    "contact.title": "Ready to Achieve Your Next Breakthrough",
    "contact.desc": "Whether you are ready to embark on a clinical nutrition & coaching journey, or eager to automate your clinic and business workflows, connect with me directly.",
    "contact.waLabel": "Direct WhatsApp & Instant Booking",
    "contact.igLabel": "Official Instagram",
    "contact.liLabel": "Professional LinkedIn Profile",
    "contact.formTitle": "Send a Direct Inquiry",
    "contact.formSubtitle": "Fill in the form below and your inquiry will format directly into WhatsApp for rapid booking:",
    "contact.nameLabel": "Full Name",
    "contact.namePlaceholder": "Enter your full name",
    "contact.serviceLabel": "Select Desired Service",
    "contact.opt1": "3-Month Transformation (Nutrition + Coaching)",
    "contact.opt2": "anuna Inner Coaching & Emotional Release",
    "contact.opt3": "n8n AI Workflow Automation for Clinics & Businesses",
    "contact.opt4": "Private Pharmaceutical & Nutrition Consultation",
    "contact.msgLabel": "Your Message / Goals",
    "contact.msgPlaceholder": "Briefly share your goals or current situation...",
    "contact.submitBtn": "Send Inquiry via WhatsApp",

    // Footer & Floating
    "footer.desc": "Pharmacist, Clinical Nutritionist, Enneagram & PEAT Coach, and AI Automation Engineer.",
    "footer.rights": "© 2026 Dr. Alaa Mahdy Badawy. All rights reserved.",
    "floating.wa": "Chat with me directly"
  }
};

// Current active language (defaults to Arabic)
let currentLang = localStorage.getItem("preferred_lang") || "ar";

/**
 * Apply Language Updates
 */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("preferred_lang", lang);

  // Update HTML tag attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
  document.body.setAttribute("data-lang", lang);
  document.body.setAttribute("dir", (lang === "ar") ? "rtl" : "ltr");

  // Update Language toggle buttons
  const langLabel = document.getElementById("langLabel");
  const mobileLangLabel = document.getElementById("mobileLangLabel");

  if (langLabel) {
    langLabel.textContent = (lang === "ar") ? "English" : "العربية";
  }
  if (mobileLangLabel) {
    mobileLangLabel.textContent = (lang === "ar") ? "Switch to English" : "التحويل إلى العربية";
  }

  // Translate all text elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Translate input placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });
}

function toggleLanguage() {
  const nextLang = (currentLang === "ar") ? "en" : "ar";
  setLanguage(nextLang);
}

// Initialize DOM Events
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial Language Setup
  setLanguage(currentLang);

  // 2. Language Switcher Button Listeners (Desktop & Mobile)
  const langToggle = document.getElementById("langToggle");
  const mobileLangToggle = document.getElementById("mobileLangToggle");

  if (langToggle) langToggle.addEventListener("click", toggleLanguage);
  if (mobileLangToggle) mobileLangToggle.addEventListener("click", toggleLanguage);

  // 3. Navbar Scrolled Glassmorphism Effect & Back to Top Visibility
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Navbar effect
    if (scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Back to top button visibility
    if (backToTop) {
      if (scrollY > 350) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    }
  }, { passive: true });

  // Back to Top Click Action
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // 4. Mobile Drawer Navigation & Backdrop Overlay
  const menuToggle = document.getElementById("menuToggle");
  const drawerClose = document.getElementById("drawerClose");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add("open");
    if (drawerOverlay) drawerOverlay.classList.add("active");
    document.body.classList.add("no-scroll");
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove("open");
    if (drawerOverlay) drawerOverlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }

  if (menuToggle) menuToggle.addEventListener("click", openDrawer);
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);

  // Close drawer on any navigation link click
  document.querySelectorAll(".drawer-link").forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  // 5. Universal Lightbox Modal
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxOverlay = document.getElementById("lightboxOverlay");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");

  function openLightbox(src, title) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxTitle) lightboxTitle.textContent = title || "معاينة الصورة";
    lightboxModal.classList.add("active");
    lightboxModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove("active");
    lightboxModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (lightboxImg) lightboxImg.src = "";
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      closeVideoModal();
      closeDrawer();
    }
  });

  // Attach Lightbox triggers to workflow cards & brochure buttons
  document.querySelectorAll(".workflow-preview, .view-brochure-btn").forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const imgPath = trigger.getAttribute("data-img");
      const title = trigger.getAttribute("data-title");
      if (imgPath) {
        openLightbox(imgPath, title);
      }
    });
  });

  // 6. Dedicated TV Episode Video Modal
  const videoModal = document.getElementById("videoModal");
  const videoOverlay = document.getElementById("videoOverlay");
  const videoClose = document.getElementById("videoClose");
  const mainVideoPlayer = document.getElementById("mainVideoPlayer");
  const videoSource = document.getElementById("videoSource");
  const videoModalTitle = document.getElementById("videoModalTitle");
  const videoFileNotice = document.getElementById("videoFileNotice");
  const noticeFilePath = document.getElementById("noticeFilePath");
  const localVideoPicker = document.getElementById("localVideoPicker");

  function openVideoModal(videoSrc, title, poster) {
    if (!videoModal || !mainVideoPlayer) return;

    if (videoModalTitle) {
      videoModalTitle.textContent = title || "تشغيل الحلقة";
    }

    if (poster) {
      mainVideoPlayer.poster = poster;
    }

    if (videoFileNotice) {
      videoFileNotice.style.display = "none";
    }

    if (noticeFilePath) {
      noticeFilePath.textContent = videoSrc;
    }

    if (videoSource) {
      videoSource.src = videoSrc;
      mainVideoPlayer.load();
    }

    videoModal.classList.add("active");
    videoModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");

    // Play video with graceful catch for autoplay restriction or missing file
    const playPromise = mainVideoPlayer.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Handled by error listener if file is missing
      });
    }
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoModal.classList.remove("active");
    videoModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");

    if (mainVideoPlayer) {
      mainVideoPlayer.pause();
      mainVideoPlayer.currentTime = 0;
      if (videoSource) {
        videoSource.src = "";
      }
      mainVideoPlayer.load();
    }
    if (videoFileNotice) {
      videoFileNotice.style.display = "none";
    }
  }

  if (videoClose) videoClose.addEventListener("click", closeVideoModal);
  if (videoOverlay) videoOverlay.addEventListener("click", closeVideoModal);

  // If video file cannot be loaded (missing), show the helpful notice box
  if (mainVideoPlayer) {
    mainVideoPlayer.addEventListener("error", () => {
      if (videoFileNotice) {
        videoFileNotice.style.display = "block";
      }
    }, true);
  }

  // Local file picker for instant preview from user's machine
  if (localVideoPicker && mainVideoPlayer && videoSource) {
    localVideoPicker.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const fileUrl = URL.createObjectURL(file);
        videoSource.src = fileUrl;
        mainVideoPlayer.load();
        mainVideoPlayer.play().catch(() => {});
        if (videoFileNotice) {
          videoFileNotice.style.display = "none";
        }
      }
    });
  }

  // Attach video modal triggers to media cards & watch buttons
  document.querySelectorAll(".media-card .play-trigger, .play-video-btn").forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const card = trigger.closest(".media-card");
      const videoSrc = trigger.getAttribute("data-video") || (card && card.getAttribute("data-video"));
      const title = trigger.getAttribute("data-title") || (card && card.getAttribute("data-title"));
      const poster = trigger.getAttribute("data-poster") || (card && card.getAttribute("data-poster"));

      if (videoSrc) {
        openVideoModal(videoSrc, title, poster);
      }
    });
  });

  // 6. Contact & Inquiry Form (Direct WhatsApp Conversion)
  const inquiryForm = document.getElementById("inquiryForm");
  if (inquiryForm) {
    inquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("userName") ? document.getElementById("userName").value.trim() : "";
      const service = document.getElementById("serviceInterest") ? document.getElementById("serviceInterest").value : "";
      const msg = document.getElementById("userMsg") ? document.getElementById("userMsg").value.trim() : "";

      const whatsappNumber = "201024049463";
      let text = `مرحباً د. آلاء،%0Aأنا: ${encodeURIComponent(name)}%0Aأود الاستفسار عن: ${encodeURIComponent(service)}`;
      if (msg) {
        text += `%0Aتفاصيل إضافية: ${encodeURIComponent(msg)}`;
      }

      const waUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
      window.open(waUrl, "_blank");
    });
  }
});
