// ══════════════════════════════════════════════════════════════
//  BUS 214 — Mid 2 Data Overrides  (Ch 5 · 6 · 7)
//  Loaded BEFORE bus214_scripts.js on bus214_mid2.html.
//  Sets label overrides synchronously; mutates data arrays
//  after scripts.js has defined them (microtask).
// ══════════════════════════════════════════════════════════════

// ── Label overrides — read by scripts.js at runtime ──
window.CH_LABELS = {
  short:    { ch1: "Chapter 5",                         ch2: "Chapter 6",                         ch3: "Chapter 7",                     all: "Chapters 5–7" },
  quizLong: { ch1: "Chapter 5 — Recognizing Ethical Issues", ch2: "Chapter 6 — Decision Framework", ch3: "Chapter 7 — Moral Philosophy" },
  tbLong:   { ch1: "Chapter 5 — Recognizing Ethical Issues", ch2: "Chapter 6 — Decision Framework", ch3: "Chapter 7 — Moral Philosophy", all: "Chapters 5–7" },
  quizTag:  { ch1: 'Ch5 Quiz',                          ch2: 'Ch6 Quiz',                          ch3: 'Ch7 Quiz' },
  cotd:     { ch1: '📖 الفصل الخامس',                  ch2: '🧭 الفصل السادس',                  ch3: '⚖️ الفصل السابع' }
};

// ── Search pages override (consumed synchronously) ──
window.SEARCH_PAGES_OVERRIDE = [
  { id: 'page-ch1',  label: '📖 Chapter 5 — Recognizing Ethical Issues' },
  { id: 'page-ch2',  label: '🧭 Chapter 6 — Decision Framework' },
  { id: 'page-ch3',  label: '⚖️ Chapter 7 — Moral Philosophy' },
  { id: 'page-quick', label: '⚡ Quick Review' }
];

// ══════════════════════════════════════════════════════════════
//  CONTENT BANKS (Ch 5 / 6 / 7)
//  Keys ch1/ch2/ch3 map to Ch 5/6/7 (mid2.html reuses the page
//  IDs page-ch1/2/3 for the three mid-2 chapters).
// ══════════════════════════════════════════════════════════════

const MID2_FLASHCARDS = [
  // ══════ Chapter 5 — Recognizing Ethical Issues ══════
  { ch:"ch1", front:"Ethical Issue", back:"A problem, situation, or opportunity requiring a choice among actions that must be evaluated as right or wrong. | قضية تتطلب الاختيار بين خيارات تُقيَّم صواباً أو خطأً." },
  { ch:"ch1", front:"Ethical Dilemma", back:"A problem requiring a choice among actions that ALL have negative outcomes — no right choice, only the less-unethical one. | الاختيار بين خيارات كلها سلبية." },
  { ch:"ch1", front:"Collusion", back:"A SECRET agreement between two or more parties for a fraudulent, illegal, or deceitful purpose. | اتفاق سري لغرض احتيالي." },
  { ch:"ch1", front:"Integrity", back:"One of the most important elements of virtue — being whole, sound, and unimpaired. Implies balanced ethical decisions and culture. | النزاهة: شامل وسليم وغير منقوص." },
  { ch:"ch1", front:"Honesty vs. Dishonesty", back:"Honesty = truthfulness / trustworthiness. Dishonesty = lack of integrity, incomplete disclosure, unwillingness to tell the truth. | الأمانة مقابل الخداع." },
  { ch:"ch1", front:"Fairness — 3 Elements", back:"(1) Equality — fair distribution of benefits and resources.\n(2) Reciprocity — interchange of giving and receiving.\n(3) Optimization — trade-off between equity and efficiency.\nالإنصاف: مساواة · معاملة بالمثل · تحسين أمثل." },
  { ch:"ch1", front:"Time Theft", back:"Misuse of company time — late arrivals, long lunches, personal activities at work, excessive socializing, personal internet use. Costs companies hundreds of billions annually. | سرقة الوقت." },
  { ch:"ch1", front:"Abusive / Intimidating Behavior", back:"Physical threats, false accusations, profanity, insults, yelling, ignoring. INTENT matters. Bullying creates a hostile work environment. | سلوك مسيء — النية مهمة." },
  { ch:"ch1", front:"Commission Lying", back:"Creating a perception or belief by WORDS that intentionally deceive the receiver. Includes puffery in advertising. | الكذب الفعلي بالألفاظ." },
  { ch:"ch1", front:"Omission Lying", back:"Intentionally NOT informing others of differences, problems, safety warnings, or negative issues related to a product. | الكذب بالإغفال." },
  { ch:"ch1", front:"Conflict of Interest", back:"When an individual must choose between advancing personal interests, the organization's interests, or those of another group. | تضارب المصالح." },
  { ch:"ch1", front:"Bribery", back:"Offering something (often money) for an ILLICIT advantage from someone in authority. | الرشوة." },
  { ch:"ch1", front:"Active vs. Passive Bribery", back:"Active = person who PROMISES or GIVES the bribe.\nPassive = OFFICIAL who RECEIVES the bribe.\nالنشطة: العاطي · غير المباشرة: المتلقي." },
  { ch:"ch1", front:"Facilitation Payments", back:"Payments to obtain/retain business. LEGAL for US companies in some situations under FCPA; ILLEGAL in the UK. | مدفوعات التسهيل." },
  { ch:"ch1", front:"Corporate Intelligence", back:"Collection and analysis of information on markets, technologies, customers, competitors, external trends. Three models: (1) passive monitoring (2) tactical field support (3) top-management strategy support. In-depth discovery sources: corporate records, court documents, regulatory filings, press releases. | الاستخبارات المؤسسية." },
  { ch:"ch1", front:"Discrimination & EEOC", back:"Prejudice based on race, color, religion, sex, age, disability, national origin, etc. — illegal in the US. EEOC = Equal Employment Opportunity Commission. | التمييز — لجنة تكافؤ فرص العمل." },
  { ch:"ch1", front:"Age Discrimination in Employment Act", back:"Outlaws hiring practices that discriminate against workers 40 or older, or require retirement before age 70. | حظر التمييز ضد 40+." },
  { ch:"ch1", front:"Sexual Harassment — 3 Criteria", back:"Hostile work environment test:\n(1) Conduct was UNWELCOME.\n(2) Conduct was SEVERE, PERVASIVE, altering employment.\n(3) A REASONABLE PERSON would find it hostile.\nاختبار ثلاثي للبيئة العدائية." },
  { ch:"ch1", front:"Dual Relationship", back:"A personal / loving / sexual relationship with someone with whom you share professional responsibilities. | علاقة مزدوجة." },
  { ch:"ch1", front:"Sexual Harassment — 7 Prevention Steps", back:"(1) Statement of policy\n(2) Definition of sexual harassment\n(3) Nonretaliation policy\n(4) Specific prevention procedures\n(5) Reporting procedure encouraging victims\n(6) Enforce policies\n(7) Timely reporting to authorities\nسبع خطوات للوقاية من التحرش." },
  { ch:"ch1", front:"Fraud (definition)", back:"Any PURPOSEFUL communication that deceives, manipulates, or conceals facts to harm others. | الاحتيال." },
  { ch:"ch1", front:"Accounting Fraud vs. Marketing Fraud", back:"Accounting fraud = inaccurate information in corporate financial reports.\nMarketing fraud = dishonestly creating, distributing, promoting, and pricing products.\nاحتيال محاسبي مقابل تسويقي." },
  { ch:"ch1", front:"Puffery", back:"Exaggerated advertising upon which no reasonable buyer would rely (e.g., 'world's best cup of coffee'). A legal form of exaggeration. | المبالغة الإعلانية." },
  { ch:"ch1", front:"Consumer Fraud", back:"When CONSUMERS attempt to deceive businesses for personal gain: price-tag switching, item switching, lying for discounts, abusing returns. | احتيال المستهلك." },
  { ch:"ch1", front:"Chargeback / Wardrobing / Showrooming", back:"Chargeback fraud = disputing a legitimate transaction after receiving goods.\nWardrobing = wearing an item then returning it.\nShowrooming = examining in-store then buying cheaper online.\nأشكال من احتيال المستهلك." },
  { ch:"ch1", front:"Subprime Lending", back:"High-risk loans issued to borrowers who may not repay. 'Liar loans' inflated sales; a major driver of the Great Recession. | قروض الرهن العقاري عالية المخاطر." },
  { ch:"ch1", front:"Insider Trading", back:"Buying/selling stock using information that is NOT yet public — ILLEGAL. Legal only if trading in one's own company AND reported to the SEC within 2 business days. | التداول بمعلومات داخلية." },
  { ch:"ch1", front:"Crisis Management", back:"Process of handling a high-impact event characterized by ambiguity and the need for SWIFT ACTION. | إدارة الأزمات." },

  // ══════ Chapter 6 — Framework for Ethical Decision Making ══════
  { ch:"ch2", front:"Ethical Awareness", back:"The ability to perceive whether a situation or decision has an ethical dimension. | الوعي الأخلاقي." },
  { ch:"ch2", front:"Ethical Issue Intensity", back:"The RELEVANCE or IMPORTANCE of an event/decision in the eyes of the individual, work group, or organization. Personal and temporal. | حدة القضية." },
  { ch:"ch2", front:"Moral Intensity", back:"Individuals' perceptions of SOCIAL PRESSURE and the HARM they believe their decisions will have on others. | الحدة الأخلاقية." },
  { ch:"ch2", front:"Individual Factors (5)", back:"(1) Gender — few differences in ethics\n(2) Education — significant, more = better decisions\n(3) Nationality\n(4) Age — younger managers more influenced by culture\n(5) Locus of control\nالعوامل الفردية الخمسة." },
  { ch:"ch2", front:"Locus of Control — Internal vs External", back:"Internal = believe you control events through effort / skill; masters of destiny.\nExternal = events due to uncontrollable forces; 'going with the flow.'\nالتحكم الداخلي والخارجي." },
  { ch:"ch2", front:"Corporate Culture", back:"A set of values, norms, and artifacts — including ways of solving problems — that employees share. | ثقافة الشركة." },
  { ch:"ch2", front:"Ethical Culture — 4 Shaping Factors", back:"(1) Corporate policies\n(2) Top management's leadership on ethics\n(3) Influence of coworkers\n(4) Opportunity for unethical behavior\nأربعة عوامل تُشكّل الثقافة الأخلاقية." },
  { ch:"ch2", front:"Significant Others", back:"Those who influence a work group — peers, managers, coworkers, subordinates. | الأشخاص المؤثرون في الفريق." },
  { ch:"ch2", front:"Obedience to Authority", back:"When employees resolve ethical issues by simply FOLLOWING the directives of a superior. | الطاعة للسلطة." },
  { ch:"ch2", front:"Opportunity", back:"The conditions in an organization that LIMIT or PERMIT ethical/unethical behavior. Deterred by formal codes, policies, and enforced rules. | الفرصة." },
  { ch:"ch2", front:"Immediate Job Context", back:"Where individuals work, whom they work with, and the nature of the work itself. A key dimension of opportunity. | سياق العمل المباشر." },
  { ch:"ch2", front:"Intentions vs Behavior (Guilt)", back:"When intentions/behavior are INCONSISTENT with one's ethical judgment → the person feels guilty → changes behavior to reduce the feeling. | الذنب يدفع لتغيير السلوك." },
  { ch:"ch2", front:"Ethical Decision-Making Model (purpose)", back:"The model does NOT determine if a decision is right or wrong — it provides INSIGHTS into how ethical decisions are made. | لا يحكم بل يكشف." },
  { ch:"ch2", front:"Normative vs Descriptive Approach", back:"Normative = how decision makers SHOULD approach an issue.\nDescriptive = how they ACTUALLY do approach it.\nمعياري مقابل وصفي." },
  { ch:"ch2", front:"Institutional Theory", back:"Organizations operate according to TAKEN-FOR-GRANTED institutional norms and rules. Three key institutions: GOVERNMENT, RELIGION, EDUCATION. | النظرية المؤسسية." },
  { ch:"ch2", front:"Instrumental Concern", back:"Focuses on POSITIVE OUTCOMES — firm profitability and benefits to society. | الاهتمام الأداتي." },
  { ch:"ch2", front:"Industry Competition — 4 Determinants", back:"(a) Barriers to entry\n(b) Available substitutes\n(c) Power of rivals over customers\n(d) Power of rivals' suppliers\nمحددات المنافسة الصناعية الأربعة." },
  { ch:"ch2", front:"Veil of Ignorance (Rawls)", back:"A thought experiment: how would you formulate principles if you did NOT know your future position in society? Ensures fairness. | حجاب الجهل لرولز." },
  { ch:"ch2", front:"Equality Principle (Rawls)", back:"Each person has basic rights compatible with the basic liberties of others. | مبدأ المساواة." },
  { ch:"ch2", front:"Difference Principle (Rawls)", back:"Economic and social inequalities should be arranged to provide the MOST BENEFIT to the LEAST-ADVANTAGED. | مبدأ الفرق." },
  { ch:"ch2", front:"Core Values", back:"Enduring beliefs about appropriate conduct (e.g., sustainability, collaboration, teamwork, avoiding bribery) that convert principles into action. | القيم الأساسية." },

  // ══════ Chapter 7 — Moral Philosophy ══════
  { ch:"ch3", front:"Moral Philosophy", back:"The SPECIFIC principles or values people use to decide what is right and wrong. Person-specific. | الفلسفة الأخلاقية." },
  { ch:"ch3", front:"Adam Smith vs. Milton Friedman", back:"Adam Smith — father of free-market capitalism; business should be guided by morals of good people.\nFriedman — profit maximization is the ultimate goal; the market rewards/punishes firms without government.\nمفكرا الرأسمالية." },
  { ch:"ch3", front:"Economic Value Orientation", back:"Values are quantified by monetary means; an act is ethical if it produces more economic value than effort expended. | التوجه الاقتصادي." },
  { ch:"ch3", front:"Idealism vs Realism", back:"Idealism = value placed on ideas and ideals as products of the mind.\nRealism = an external world exists independent of our perceptions.\nالمثالية والواقعية." },
  { ch:"ch3", front:"Teleology", back:"Acts are morally right if they produce a DESIRED RESULT (pleasure, knowledge, utility, wealth, fame). A consequentialist view. | مبدأ الغاية." },
  { ch:"ch3", front:"Egoism", back:"Right behavior is defined by the consequences for the INDIVIDUAL — maximizing self-interest. | الأنانية الأخلاقية." },
  { ch:"ch3", front:"Enlightened Egoism", back:"LONG-RANGE perspective that ALLOWS for the well-being of others — but self-interest remains PARAMOUNT. | الأنانية المستنيرة." },
  { ch:"ch3", front:"Utilitarianism", back:"The GREATEST GOOD for the GREATEST NUMBER of people. | النفعية." },
  { ch:"ch3", front:"Rule vs Act Utilitarianism", back:"Rule utilitarians = follow general rules to decide the best action.\nAct utilitarians = evaluate each individual action for its utility.\nقائم على القاعدة مقابل الفعل." },
  { ch:"ch3", front:"Deontology", back:"Focuses on the RIGHTS of individuals and the INTENTIONS associated with behavior rather than consequences. Nonconsequentialist. | الواجبية." },
  { ch:"ch3", front:"Kant's Categorical Imperative", back:"If you'd feel comfortable letting EVERYONE see you commit an act AND your rationale could become a UNIVERSAL principle, the act is ethical. | الواجب المطلق." },
  { ch:"ch3", front:"Relativist Perspective", back:"Definitions of ethical behavior derive SUBJECTIVELY from individual and group experiences. | النسبية." },
  { ch:"ch3", front:"Descriptive / Meta-ethical / Normative Relativism", back:"Descriptive = observation of other cultures.\nMeta-ethical = no objective way to resolve disputes between value systems.\nNormative = one person's opinion is as good as another's.\nأنواع النسبية الثلاثة." },
  { ch:"ch3", front:"Virtue Ethics", back:"Ethical behavior = what a MATURE person with a 'GOOD' moral character would deem appropriate. Applied INDUCTIVELY (vs deontology/teleology, deductive). | أخلاق الفضيلة." },
  { ch:"ch3", front:"Justice", back:"Fair treatment and due reward in accordance with ethical or legal standards. Three types: distributive, procedural, interactional. | العدالة." },
  { ch:"ch3", front:"Distributive Justice", back:"Based on evaluation of the OUTCOMES / RESULTS of a business relationship. | العدالة التوزيعية." },
  { ch:"ch3", front:"Procedural Justice", back:"Considers the PROCESSES and ACTIVITIES producing an outcome. | العدالة الإجرائية." },
  { ch:"ch3", front:"Interactional Justice", back:"Based on RELATIONSHIPS between organizational members. | العدالة التفاعلية." },
  { ch:"ch3", front:"Hedonism", back:"Pleasure is the ultimate good; the best moral end = the greatest balance of pleasure over pain. Quantitative (more = better) vs qualitative (can have too much). | مذهب المتعة." },
  { ch:"ch3", front:"Monists vs Pluralists", back:"Monists = only ONE thing is intrinsically good.\nPluralists = NO single thing is intrinsically good (e.g., Plato: moderation, beauty, wisdom, pleasures).\nالموحدون والتعدديون." },
  { ch:"ch3", front:"Goodness vs Obligation Theories", back:"Goodness theories focus on the END RESULT and happiness created.\nObligation theories emphasize MEANS and MOTIVES — divided into teleology and deontology.\nنظريات الخير والواجب." },
  { ch:"ch3", front:"Kohlberg's 6 Stages (summary)", back:"1. Punishment & Obedience — right = power\n2. Individual Instrumental Purpose — right = self-needs\n3. Interpersonal Expectations — conform to group\n4. Social System & Conscience — duty to society\n5. Social Contract / Utility — rights & legal contracts\n6. Universal Ethical Principles — universality\nمراحل كولبرغ الست." },
  { ch:"ch3", front:"White-Collar Crime", back:"Crimes committed by NONVIOLENT business criminals. Offenders tend to be HIGHLY EDUCATED, in positions of POWER, TRUST, and RESPONSIBILITY. Monetary losses exceed violent crime combined. | جرائم ذوي الياقات البيضاء." },
  { ch:"ch3", front:"Personal Moral Compass — Limit", back:"A personal moral compass is IMPORTANT but NOT SUFFICIENT to prevent ethical misconduct in an organizational context. Strong ethical-reasoning skills matter more than character education alone. | البوصلة الشخصية غير كافية." },

  // ══════ Additional terms from slides ══════
  { ch:"ch1", front:"Implied Falsity vs Literally False", back:"Implied Falsity = message tends to mislead/confuse/deceive public (subtle).\nLiterally False = ad says 'tests prove' (establishment claim) or makes unsubstantiated bald assertions (nonestablishment claim).\nزيف ضمني مقابل صريح." },
  { ch:"ch1", front:"Affirmative Action Programs", back:"Efforts to RECRUIT, HIRE, TRAIN, and PROMOTE qualified individuals from groups traditionally DISCRIMINATED against (race, gender, etc.). | برامج التمييز الإيجابي." },
  { ch:"ch1", front:"Corporate Espionage Methods", back:"Hacking · Social engineering · Dumpster diving · Whacking · Phone eavesdropping · Shoulder surfing. Tricking individuals into revealing passwords = social engineering. | أساليب التجسس المؤسسي." },
  { ch:"ch1", front:"Consumer Fraud Types", back:"Collusion = employee helps consumer cheat.\nDuplicity = staging accidents, wardrobing, false returns.\nGuile = trickery for unfair advantage.\nأنواع احتيال المستهلك الثلاثة." },
  { ch:"ch1", front:"FCPA — Foreign Corrupt Practices Act", back:"Makes it ILLEGAL for individuals, firms, or third parties doing business in US markets to pay FOREIGN government officials to obtain/retain business. | قانون منع الرشوة الأجنبية." },
  { ch:"ch1", front:"Hostile Work Environment", back:"Three criteria ALL must be met:\n(1) Conduct UNWELCOME.\n(2) Conduct SEVERE and PERVASIVE, altering employment conditions.\n(3) A REASONABLE PERSON would find it hostile.\nبيئة العمل العدائية." },
  { ch:"ch1", front:"Workplace Bullying", back:"Threatening, harassing, belittling, or verbally abusing a target. Creates hostile environment. US has NO federal law against it. Healthy Workplace Bill proposed in 27 states. | تنمر العمل." },
  { ch:"ch2", front:"Spheres of Influence (6)", back:"Workplace · Family · Religion · Legal System · Community · Profession. All influence ethical decision making. | مجالات التأثير الستة." },
  { ch:"ch2", front:"External vs Internal Rewards", back:"External = social approval, status, esteem (what others give you).\nInternal = personal satisfaction (what you give yourself).\nمكافآت خارجية وداخلية." },
  { ch:"ch2", front:"Values-based vs Compliance-based Ethics Programs", back:"Values-based = built on shared values → stronger ethical culture.\nCompliance-based = merely obey laws and regulations → minimum standard.\nقيمي مقابل امتثالي." },
  { ch:"ch3", front:"Kohlberg's 3 Levels", back:"Pre-conventional (Stages 1-2) = immediate interests, rewards/punishments.\nConventional (Stages 3-4) = expectations of society.\nPost-conventional (Stages 5-6) = beyond norms and laws; universal principles.\nمستويات كولبرغ الثلاثة." },
  { ch:"ch3", front:"Economic Freedom", back:"A concept based on self-ownership, the right to choose, voluntary exchange, open markets, and clearly defined/enforced property rights. | الحرية الاقتصادية." },
  { ch:"ch3", front:"Instrumentalists (Dewey)", back:"Reject that (1) ends can be separated from means, and (2) ends are intrinsically good. A modern view. | الأداتيون — رفض الفصل بين الوسائل والغايات." },
  { ch:"ch3", front:"Kohlberg — Three Strike Criticism", back:"(1) Transferred Piaget's child theory to adults without accounting for adult brain.\n(2) Hierarchical progression contradicts moral philosophy (no hierarchy).\n(3) High reliability but LOW validity.\nثلاثة انتقادات لكولبرغ." }
];

// ══════════════════════════════════════════════════════════════
//  MOCK EXAM / QUIZ BANK — Ch 5 / 6 / 7  (shape matches mockBank
//  and allQuizQ: { ch, q, opts, ans, [exp] })
// ══════════════════════════════════════════════════════════════
const MID2_QUESTIONS = [
  // ══════ Chapter 5 ══════
  { ch:"ch1", q:"In an ethical dilemma, ______.", opts:["one alternative is always clearly correct","all alternatives have negative consequences, so the less harmful is chosen","the law provides a single right answer","only managers can make the decision"], ans:1, exp:["❌ A dilemma means no clear right option.","✅ Correct — a dilemma forces a choice among negative alternatives.","❌ Law is not always determinative of ethics.","❌ Dilemmas can arise at any level."] },
  { ch:"ch1", q:"Collusion is best defined as:", opts:["public cooperation between competitors for social benefit","a secret agreement between two or more parties for a fraudulent or illegal purpose","an audit procedure used by the SEC","an alliance of consumer groups"], ans:1, exp:["❌ Collusion is secret, not public.","✅ Correct — secret fraudulent agreement.","❌ Not an audit procedure.","❌ Not a consumer alliance."] },
  { ch:"ch1", q:"Which is NOT one of the three elements motivating fairness?", opts:["Equality","Reciprocity","Optimization","Profit maximization"], ans:3, exp:["❌ Equality IS one of the three.","❌ Reciprocity IS one of the three.","❌ Optimization IS one of the three.","✅ Correct — profit maximization is not in the trio."] },
  { ch:"ch1", q:"Commission lying is:", opts:["failing to disclose a product safety issue","creating a perception by words that intentionally deceive the receiver","joking without malice","an honest mistake"], ans:1, exp:["❌ That is omission lying.","✅ Correct — active deception by words.","❌ Joking is not commission lying.","❌ Not a lie if unintended."] },
  { ch:"ch1", q:"Omission lying is:", opts:["the same as puffery","intentionally failing to inform others of problems, defects, or safety warnings","telling lies under oath","a minor courtesy lie"], ans:1, exp:["❌ Puffery is a form of commission.","✅ Correct — silent deception by leaving out.","❌ That is perjury.","❌ Not the textbook definition."] },
  { ch:"ch1", q:"A conflict of interest arises when an individual must choose between:", opts:["two different employers","advancing personal, organizational, or another group's interests","ethical and unethical behavior only","two legal options"], ans:1, exp:["❌ Not limited to employers.","✅ Correct — competing loyalties.","❌ Too narrow.","❌ Legal vs illegal is not the core issue."] },
  { ch:"ch1", q:"Active bribery is committed by:", opts:["the official who receives the bribe","the person who promises or gives the bribe","a whistleblower","an external auditor"], ans:1, exp:["❌ That is passive bribery.","✅ Correct — the giver commits the offense.","❌ Whistleblowers report misconduct.","❌ Auditors detect, not commit."] },
  { ch:"ch1", q:"Passive bribery is committed by:", opts:["the person who offers the bribe","the official who receives the bribe","the manufacturer of the product","the advertising agency"], ans:1, exp:["❌ That is active bribery.","✅ Correct — the receiver commits the offense.","❌ Irrelevant.","❌ Irrelevant."] },
  { ch:"ch1", q:"Facilitation payments are:", opts:["always illegal worldwide","legal for US companies in some situations under the FCPA, but illegal in the UK","the same as extortion","a type of insider trading"], ans:1, exp:["❌ Legality varies by country.","✅ Correct — US FCPA allows narrow exceptions; UK prohibits.","❌ Extortion is coerced, not paid for business ease.","❌ Unrelated to insider trading."] },
  { ch:"ch1", q:"Which US law makes it illegal to bribe a FOREIGN official?", opts:["Sarbanes-Oxley","Dodd-Frank","Foreign Corrupt Practices Act (FCPA)","ISO 19600"], ans:2, exp:["❌ SOX is about accounting.","❌ Dodd-Frank is financial reform.","✅ Correct — FCPA.","❌ ISO 19600 is a voluntary compliance standard."] },
  { ch:"ch1", q:"The EEOC enforces protection against:", opts:["environmental violations","workplace discrimination","tax fraud","insider trading"], ans:1, exp:["❌ That is EPA.","✅ Correct — EEOC = Equal Employment Opportunity Commission.","❌ That is the IRS.","❌ That is the SEC."] },
  { ch:"ch1", q:"The Age Discrimination in Employment Act protects workers who are:", opts:["under 18","over 30","40 or older","over 65"], ans:2, exp:["❌ Minors are protected by child-labor laws.","❌ Not the threshold.","✅ Correct — 40 or older.","❌ Protection starts earlier."] },
  { ch:"ch1", q:"Which of the following is a criterion for a HOSTILE work environment?", opts:["The conduct was welcomed by the recipient","The conduct was severe and pervasive enough to alter employment conditions","The conduct was reported anonymously","The conduct occurred only once"], ans:1, exp:["❌ Welcomed conduct fails the first test.","✅ Correct — part of the 3-part test.","❌ Reporting channel is not part of the test.","❌ Must be pervasive — usually repeated."] },
  { ch:"ch1", q:"Puffery is:", opts:["a criminal deception","exaggerated advertising on which no reasonable buyer would rely","a form of insider trading","identical to literal falsity"], ans:1, exp:["❌ Puffery is generally legal.","✅ Correct — 'world's best' style.","❌ Unrelated.","❌ Distinct — literal falsity is provably false."] },
  { ch:"ch1", q:"Wardrobing is a form of:", opts:["marketing fraud by the company","consumer fraud — wearing an item then returning for refund","insider trading","corporate intelligence"], ans:1, exp:["❌ Wardrobing is done by consumers.","✅ Correct — deceiving the retailer.","❌ Unrelated.","❌ Unrelated."] },
  { ch:"ch1", q:"Subprime lending became an ethics issue because:", opts:["it was illegal in all states","loan officers received commissions without consequences for borrower defaults, inflating sales via 'liar loans'","borrowers all had perfect credit","the loans were interest-free"], ans:1, exp:["❌ It was legal, just high risk.","✅ Correct — misaligned incentives.","❌ The opposite — high risk borrowers.","❌ Subprime rates were higher, not zero."] },
  { ch:"ch1", q:"Insider trading is LEGAL only when:", opts:["the insider profits less than $1,000","the trade is in one's own company AND reported to the SEC within two business days","the CEO approves it verbally","the trade is small"], ans:1, exp:["❌ Profit size is irrelevant.","✅ Correct — the 2-day SEC filing rule.","❌ Verbal approval is not a defense.","❌ Size is irrelevant."] },

  // ══════ Chapter 6 ══════
  { ch:"ch2", q:"Ethical AWARENESS is the ability to:", opts:["memorize the company code of ethics","perceive whether a situation or decision has an ethical dimension","calculate profit margins","report violations to regulators"], ans:1, exp:["❌ Memorization is not perception.","✅ Correct — perceiving ethical dimension.","❌ Unrelated.","❌ That is whistleblowing."] },
  { ch:"ch2", q:"Ethical issue INTENSITY is best described as:", opts:["the legal severity of a violation","the relevance or importance of an event in the eyes of the individual, group, or organization","the number of stakeholders involved","the company's quarterly earnings"], ans:1, exp:["❌ Legal severity is distinct.","✅ Correct — perceived importance.","❌ Not just a count.","❌ Unrelated."] },
  { ch:"ch2", q:"MORAL intensity refers to:", opts:["the speed of decision making","individuals' perceptions of social pressure and the harm their decisions will have on others","the regulatory penalty","a firm's advertising budget"], ans:1, exp:["❌ Speed is irrelevant.","✅ Correct — social pressure + perceived harm.","❌ Unrelated.","❌ Unrelated."] },
  { ch:"ch2", q:"Research on GENDER as an individual factor in ethical decision making suggests:", opts:["women are always more ethical than men","men are always more ethical than women","in many aspects there are no significant differences between men and women","gender fully predicts ethical behavior"], ans:2, exp:["❌ Not supported.","❌ Not supported.","✅ Correct — research shows few consistent differences.","❌ Overstated."] },
  { ch:"ch2", q:"A person with an INTERNAL locus of control:", opts:["sees life events as due to uncontrollable external forces","believes they control events through their own effort and skill","always defers to authority","ignores ethical considerations"], ans:1, exp:["❌ That is external locus.","✅ Correct — master of one's destiny.","❌ Not implied.","❌ Not implied."] },
  { ch:"ch2", q:"Which is NOT one of the four factors shaping ethical culture?", opts:["Corporate policies","Top management's leadership on ethics","Coworker influence","The company's dividend payout ratio"], ans:3, exp:["❌ IS one of the four.","❌ IS one of the four.","❌ IS one of the four.","✅ Correct — dividend ratio is unrelated."] },
  { ch:"ch2", q:"'Significant others' in an ethics context are:", opts:["spouses and family members","peers, managers, coworkers, and subordinates who influence a work group","competitors","government regulators"], ans:1, exp:["❌ Too narrow — not the textbook sense.","✅ Correct — work-group influencers.","❌ External.","❌ External."] },
  { ch:"ch2", q:"Obedience to authority as an organizational factor means:", opts:["employees refuse all directives","employees resolve ethical issues by simply following a superior's directives","employees always report to HR","employees make purely personal decisions"], ans:1, exp:["❌ Opposite.","✅ Correct — following orders.","❌ Specific channel, not general pattern.","❌ Opposite of the definition."] },
  { ch:"ch2", q:"Opportunity is best defined as:", opts:["a job promotion","the conditions in an organization that LIMIT or PERMIT ethical/unethical behavior","a legal exemption","a profit incentive"], ans:1, exp:["❌ Too narrow.","✅ Correct — enabling conditions.","❌ Unrelated.","❌ Unrelated."] },
  { ch:"ch2", q:"A company policy that does NOT punish employees who accept large client gifts is an example of:", opts:["strong compliance","failing to erect barriers against unethical behavior (creating opportunity)","an ethical audit","a corporate social responsibility initiative"], ans:1, exp:["❌ Opposite.","✅ Correct — it creates opportunity.","❌ Unrelated.","❌ Unrelated."] },
  { ch:"ch2", q:"When a person's behavior is INCONSISTENT with their ethical judgment, they often:", opts:["feel no reaction","feel guilty, which may motivate them to change behavior","receive a promotion","face no internal conflict"], ans:1, exp:["❌ Not the textbook answer.","✅ Correct — guilt motivates change.","❌ Unrelated.","❌ Opposite."] },
  { ch:"ch2", q:"The ethical decision-making model:", opts:["determines whether a decision is right or wrong","provides insights into how ethical decisions are made","replaces laws with opinions","eliminates the need for ethics officers"], ans:1, exp:["❌ It does NOT verdict.","✅ Correct — insight, not verdict.","❌ Overstated.","❌ Overstated."] },
  { ch:"ch2", q:"A NORMATIVE approach asks:", opts:["what decision makers actually do","how decision makers SHOULD approach an issue","what regulators enforce","what the market prefers"], ans:1, exp:["❌ That is descriptive.","✅ Correct — 'should.'","❌ Not the distinction.","❌ Not the distinction."] },
  { ch:"ch2", q:"Institutional theory identifies which THREE key institutions that shape values?", opts:["Business, media, family","Government, religion, education","Markets, courts, military","Schools, hospitals, prisons"], ans:1, exp:["❌ Not the textbook trio.","✅ Correct — government, religion, education.","❌ Not the trio.","❌ Not the trio."] },
  { ch:"ch2", q:"Rawls' VEIL OF IGNORANCE asks:", opts:["that we ignore unethical behavior in our firm","how we would formulate principles if we did NOT know our future position in society","how to comply with insider-trading laws","how to maximize shareholder profit"], ans:1, exp:["❌ Misreading.","✅ Correct — fairness thought experiment.","❌ Unrelated.","❌ Unrelated."] },
  { ch:"ch2", q:"The DIFFERENCE PRINCIPLE (Rawls) holds that economic and social inequalities should:", opts:["always be eliminated","provide the MOST benefit to the LEAST-ADVANTAGED","favor the most-advantaged","be regulated by the government only"], ans:1, exp:["❌ Not Rawls' view.","✅ Correct — least-advantaged benefit.","❌ Opposite.","❌ Not the principle."] },
  { ch:"ch2", q:"Instrumental concern focuses on:", opts:["punishment avoidance only","positive outcomes — firm profitability and benefits to society","individual rights over results","rule-based obedience"], ans:1, exp:["❌ Too narrow.","✅ Correct — positive-outcomes focus.","❌ That is deontological.","❌ That is deontological."] },

  // ══════ Chapter 7 ══════
  { ch:"ch3", q:"Moral philosophy is best defined as:", opts:["group norms defined by a corporation","the specific principles or values people use to decide what is right and wrong","laws imposed by government","purely economic cost-benefit analysis"], ans:1, exp:["❌ That describes business ethics, not moral philosophy.","✅ Correct — person-specific principles.","❌ Laws are distinct.","❌ That is economic orientation only."] },
  { ch:"ch3", q:"Adam Smith believed business should be guided by:", opts:["strict government regulation","the morals of good people","utilitarian calculations","categorical imperatives alone"], ans:1, exp:["❌ Opposite.","✅ Correct — morals of good people.","❌ That is Mill/Bentham.","❌ That is Kant."] },
  { ch:"ch3", q:"Milton Friedman argued that:", opts:["profit maximization is the ultimate business goal; the market rewards/punishes without government","social responsibility trumps profit","firms must satisfy all stakeholders equally","ethics is irrelevant to markets"], ans:0, exp:["✅ Correct — Friedman's shareholder view.","❌ Opposite.","❌ Not Friedman.","❌ Overstated."] },
  { ch:"ch3", q:"Teleological ethics judges actions based on:", opts:["intentions only","the desired result or consequences produced","universal rules","obedience to authority"], ans:1, exp:["❌ That is deontology.","✅ Correct — consequences.","❌ That is deontology.","❌ Unrelated."] },
  { ch:"ch3", q:"Utilitarianism seeks:", opts:["the individual's maximum self-interest","the greatest good for the greatest number","absolute rule-obedience regardless of outcome","strict equality of outcomes"], ans:1, exp:["❌ That is egoism.","✅ Correct — classic utilitarianism.","❌ That is deontology.","❌ Not utilitarianism."] },
  { ch:"ch3", q:"A RULE utilitarian determines the right action by:", opts:["evaluating each individual act for its utility","following general rules that tend to produce the greatest good","ignoring consequences","consulting a religious authority"], ans:1, exp:["❌ That is ACT utilitarianism.","✅ Correct — rule-based utility.","❌ Opposite.","❌ Not the distinction."] },
  { ch:"ch3", q:"Enlightened egoism:", opts:["ignores the well-being of others entirely","takes a LONG-RANGE view allowing for others' well-being while self-interest remains paramount","prioritizes society over the self","is identical to utilitarianism"], ans:1, exp:["❌ That is pure egoism.","✅ Correct — long-range self-interest.","❌ Opposite.","❌ Distinct from utilitarianism."] },
  { ch:"ch3", q:"Deontology focuses on:", opts:["consequences of an act","the rights of individuals and the intentions behind behavior","maximizing profit","cultural norms"], ans:1, exp:["❌ That is teleology.","✅ Correct — rights + intentions.","❌ Not deontology.","❌ That is relativism."] },
  { ch:"ch3", q:"Kant's CATEGORICAL IMPERATIVE asks whether your rationale could:", opts:["maximize profit","become a UNIVERSAL principle guiding everyone's behavior","please the most people","follow local customs"], ans:1, exp:["❌ That is economic value.","✅ Correct — universalizability.","❌ That is utilitarianism.","❌ That is relativism."] },
  { ch:"ch3", q:"The RELATIVIST perspective holds that ethical definitions:", opts:["derive subjectively from individual and group experiences","come from universal principles","are mathematically provable","are identical across all cultures"], ans:0, exp:["✅ Correct — subjective from experience.","❌ That is Kant/deontology.","❌ Not a relativist view.","❌ Opposite."] },
  { ch:"ch3", q:"VIRTUE ETHICS is applied:", opts:["deductively, like deontology and teleology","inductively — from what a mature person of good character would deem appropriate","only in legal contexts","only in economic decisions"], ans:1, exp:["❌ The others are deductive; virtue ethics is the exception.","✅ Correct — inductive.","❌ Overly narrow.","❌ Overly narrow."] },
  { ch:"ch3", q:"DISTRIBUTIVE justice is based on:", opts:["evaluation of the OUTCOMES / RESULTS of a business relationship","the PROCESSES that produce an outcome","RELATIONSHIPS between members","legal precedent alone"], ans:0, exp:["✅ Correct — outcomes.","❌ That is procedural.","❌ That is interactional.","❌ Not the definition."] },
  { ch:"ch3", q:"PROCEDURAL justice considers:", opts:["results only","the processes and activities producing the outcome","personal feelings","court decisions only"], ans:1, exp:["❌ That is distributive.","✅ Correct — process focus.","❌ That is interactional.","❌ Too narrow."] },
  { ch:"ch3", q:"INTERACTIONAL justice is based on:", opts:["outcomes","processes","relationships between organizational members","industry benchmarks"], ans:2, exp:["❌ Distributive.","❌ Procedural.","✅ Correct — relationships.","❌ Unrelated."] },
  { ch:"ch3", q:"Kohlberg's Stage 1 (Punishment & Obedience) ties right/wrong to:", opts:["universal principles","a person with power, not higher philosophy","mutual relationships","the social contract"], ans:1, exp:["❌ That is Stage 6.","✅ Correct — power-based.","❌ That is Stage 3.","❌ That is Stage 5."] },
  { ch:"ch3", q:"Kohlberg's Stage 6 (Universal Ethical Principles) holds that rights are valid because:", opts:["they are popular","they rest on the premise of UNIVERSALITY","they maximize self-interest","they are written into a particular country's law"], ans:1, exp:["❌ Not the criterion.","✅ Correct — universality.","❌ Unrelated.","❌ That is a lower stage."] },
  { ch:"ch3", q:"White-collar crime offenders tend to be:", opts:["poorly educated and powerless","highly educated and in positions of power, trust, and responsibility","teenagers experimenting online","random street criminals"], ans:1, exp:["❌ Opposite.","✅ Correct — textbook description.","❌ Unrelated.","❌ Unrelated."] },
  { ch:"ch3", q:"According to the textbook, a personal moral compass is:", opts:["fully sufficient to prevent organizational misconduct","important but NOT sufficient — strong ethical-reasoning skills matter more","irrelevant in business","the only tool needed"], ans:1, exp:["❌ Overstated.","✅ Correct — important but insufficient.","❌ Opposite.","❌ Overstated."] }
];

// ══════════════════════════════════════════════════════════════
//  OFFICIAL TESTBANK — Ch 5 / 6 / 7  (Ferrell BE 13e, 144 Qs)
//  Used for the Testbank page; quiz/mock still use MID2_QUESTIONS.
// ══════════════════════════════════════════════════════════════
const MID2_TESTBANK = [
  { ch:"ch1", q:"An ethical issue is defined as a problem, situation, or opportunity that _______.", opts:["has no correct answer", "harms the environment", "requires society as a whole to choose among several actions that must be evaluated as right or wrong", "requires an individual, group, or organization to choose among several actions that must be evaluated as right or wrong, ethical or unethical", "is a trade-off between equity and efficiency"], ans:3, exp:"القضية الأخلاقية (Ethical Issue) تتطلب من فرد أو مجموعة أو منظمة الاختيار بين عدة أفعال يجب تقييمها كصح أو خطأ، أخلاقية أو غير أخلاقية. المعضلة الأخلاقية (Dilemma) تختلف — كلها خيارات سلبية." },
  { ch:"ch1", q:"Insider trading can be defined as which of the following?", opts:["The practice of offering something (often money) in order to gain an illicit advantage from someone in authority", "The collection and analysis of information on markets, technologies, customers, and competitors, as well as on socioeconomic and external political trend", "The process of dishonestly creating, distributing, promoting, and pricing products", "Exaggerated advertising, blustering, and boasting upon which no reasonable buyer would rely", "The buying or selling of stocks by insiders who possess information that is not yet public"], ans:4, exp:"Insider Trading = بيع/شراء الأسهم بناءً على معلومات داخلية غير عامة. غير أخلاقي لأنه يخل بتكافؤ الفرص في السوق." },
  { ch:"ch1", q:"Which of the following is an important element of virtue and is defined as being whole, sound, and in an unimpaired condition?", opts:["Optimization", "Ethical issue", "Honesty", "Trust", "Integrity"], ans:4, exp:"Integrity (النزاهة) = الكمال والسلامة والحالة السليمة. من أهم عناصر الفضيلة — منظمة سليمة أخلاقياً تتخذ قراراتها بثبات ومبادئ واضحة." },
  { ch:"ch1", q:"A secret agreement between two or more parties for a fraudulent, illegal, or deceitful purpose is known as _______.", opts:["optimization", "insider trading", "collusion", "a dilemma", "a conflict of interest"], ans:2, exp:"Collusion (التواطؤ) = اتفاق سري بين طرفين أو أكثر لغرض احتيالي أو غير قانوني. مثال: تثبيت أسعار بين شركات متنافسة (price-fixing)." },
  { ch:"ch1", q:"When an employee sorts through a competing business's trash to see if there are any documents that could reveal secret information, this is an example of a misuse of which of the following?", opts:["An ethical issue", "Corporate intelligence", "Collusion", "Puffery", "A moral attribute"], ans:1, exp:"Corporate Intelligence (الاستخبارات المؤسسية) = جمع وتحليل المعلومات عن الأسواق والتقنيات والعملاء والمنافسين. البحث في قمامة منافس لاستخراج معلومات سرية = سوء استخدام لهذه الأداة (Dumpster Diving)." },
  { ch:"ch1", q:"Issues related to fairness and honesty may arise because business is often regarded as which of the following?", opts:["A legal case where everything must be done to the letter of the law", "A contest with the most ethical firm \"winning\"", "A guerilla war where businesses seek to destroy each other", "A game governed by its own rules rather than those of society", "A game governed by social values"], ans:3, exp:"مشاكل العدل والأمانة تنشأ لأن الأعمال كثيراً ما تُعتبر \"لعبة لها قواعدها الخاصة\" مختلفة عن قواعد المجتمع. هذا المنطق هو الذي يشوّه الأخلاقيات." },
  { ch:"ch1", q:"War metaphors are common in business. Why can this kind of mindset be dangerous for business leaders?", opts:["Because it may lead executives to become violent", "Because it may foster the idea that anything is acceptable in business", "Because it results in organizations that are not profitable", "Because it encourages executives to commit blatantly illegal actions", "Because business is more like a game than a war"], ans:1, exp:"تشبيه الأعمال بالحرب (Guerrilla warfare, surprise attacks) خطير لأنه يغذّي فكرة أن \"كل شيء مقبول\" في الأعمال — وهذا يقود للتجاوزات الأخلاقية." },
  { ch:"ch1", q:"Conflicts of interest arise when an individual must choose between which of the following?", opts:["To advance their own personal interests, those of the organization, or those of some other group", "To advance the interests of the organization or those of society", "To communicate in ways that deceive, manipulate, or conceal facts in order to harm others or to be honest", "To carry out an assignment they perceive to be unethical or to act ethically", "To report an unethical coworker to internal leadership or outside authorities"], ans:0, exp:"Conflict of Interest (تضارب المصالح) = عندما يجب على الفرد الاختيار بين مصالحه الشخصية ومصالح المنظمة أو مجموعة أخرى. يجب فصل المصالح الخاصة عن الأعمال." },
  { ch:"ch1", q:"The offering of something of value in order to gain an illicit advantage is known as _______.", opts:["collusion", "hacking", "gift exchange", "a conflict of interest", "bribery"], ans:4, exp:"Bribery (الرشوة) = تقديم شيء ذي قيمة (غالباً مال) للحصول على ميزة غير مشروعة من شخص في السلطة. Active = المعطي، Passive = المسؤول المستقبِل." },
  { ch:"ch1", q:"The process of handling a high-impact event characterized by ambiguity and the need for swift action to assess and respond to potential damage is known as which of the following?", opts:["Human resource management", "Ethical issue awareness", "Crisis management", "Bullying", "Environmental, social, governance (ESG)"], ans:2, exp:"Crisis Management (إدارة الأزمات) = عملية التعامل مع حدث عالي التأثير يتسم بالغموض والحاجة لفعل سريع لتقييم الضرر المحتمل والاستجابة له. أمثلة: تسريب بيانات، سحب منتج معيب، أو فضيحة محاسبية." },
  { ch:"ch1", q:"Any purposeful communication that deceives, manipulates, or conceals facts in order to create a false impression is known as which of the following?", opts:["Stealing", "Insider trading", "Fraud", "Misappropriation", "Accounting fraud"], ans:2, exp:"Fraud (الاحتيال) = أي تواصل متعمد يخدع أو يتلاعب أو يخفي حقائق لإيذاء الآخرين. أنواعه: Accounting Fraud، Marketing Fraud، Consumer Fraud." },
  { ch:"ch1", q:"If a message has a tendency to mislead, confuse, or deceive the public, it is considered _______.", opts:["an implied falsity", "marketing fraud", "literally false", "puffery", "collusion"], ans:0, exp:"Implied Falsity (الزيف الضمني) = رسالة لها نزعة لتضليل أو خداع الجمهور. مقابل Literally False = ادعاء صريح كاذب (مثل \"التجارب أثبتت\" بدون تجارب فعلية)." },
  { ch:"ch1", q:"When a restaurant claims that it sells the world's best cup of coffee, it could be accused of which of the following?", opts:["Concealed facts", "False labeling", "Deceptive advertising", "Implied falsity", "Puffery"], ans:4, exp:"Puffery (المبالغة الترويجية) = ادعاءات إعلانية مبالغة لا يعتمد عليها مشترٍ عاقل (مثل \"أفضل قهوة في العالم\"). قانونية لأنها لا تُعتبر إعلاناً مضللاً." },
  { ch:"ch1", q:"Optimization is defined as which of the following?", opts:["The quality of being just, equitable, and impartial", "A trade-off between equity and efficiency", "An interchange of giving and receiving in social relationships", "How wealth or income is distributed between employees within a company", "A lack of integrity, incomplete disclosure, and an unwillingness to tell the truth"], ans:1, exp:"Optimization (المفاضلة) = الموازنة بين العدالة (Equity) والكفاءة (Efficiency). أحد العناصر الثلاثة للعدل مع Equality و Reciprocity." },
  { ch:"ch1", q:"Which of the following types of misconduct is personal in nature but is generally committed in the belief that the action is furthering organization goals?", opts:["Discrimination", "Lying to employees", "Bullying", "Safety violations", "Sexual harassment"], ans:1, exp:"الكذب على الموظفين سلوك شخصي لكنه يُرتكب غالباً باعتقاد أنه يخدم أهداف المنظمة (مثل إخفاء تسريحات قادمة لمنع موجة استقالات)." },
  { ch:"ch1", q:"An activity is probably ethical if which of the following is true?", opts:["It is approved of by most members of an organization and is customary in the industry.", "It is approved of by no one in the organization, but has been carried out in the industry before.", "It is customary in the industry.", "It does not violate any laws.", "It does not make consumers feel cheated, deceived, or manipulated."], ans:0, exp:"النشاط أخلاقي غالباً إذا كان معتمداً من معظم أفراد المنظمة ومعتاداً في الصناعة. القانون وحده ليس كافياً — الأخلاقيات تتطلب قبول جماعي." },
  { ch:"ch1", q:"What is the first step toward understanding business ethics?", opts:["Know your company's ethical policies.", "Know your own morals and philosophies.", "Know society's ethical policies.", "Develop ethical issue awareness.", "Develop a set of decision-making rules."], ans:3, exp:"Ethical Issue Awareness (الوعي بالقضايا الأخلاقية) هو الخطوة الأولى. بدون إدراك أن الموقف أخلاقي أصلاً، لا يمكن اتخاذ قرار أخلاقي." },
  { ch:"ch1", q:"Which of the following is associated with a person who understands right/wrong behavior but uses tricks to obtain an unfair advantage?", opts:["Shoplifting", "Collusion", "Guile", "Shrinkage", "Implied falsity"], ans:2, exp:"Guile (الدهاء/المكر) = شخص يفهم الصح والخطأ لكن يستخدم الحيل للحصول على ميزة غير عادلة. من أنواع Consumer Fraud." },
  { ch:"ch1", q:"When does the ethical decision-making process begin?", opts:["With a conflict of interest", "When an individual experiences a conflict between his or her values and those of his or her firm", "When stakeholders trigger ethical issue awareness and individuals openly discuss it with others", "With a conflict in values", "When an individual experiences a conflict between his or her values and those of society"], ans:2, exp:"تبدأ عملية صنع القرار الأخلاقي عندما يثير أصحاب المصلحة (Stakeholders) الوعي بقضية أخلاقية ويناقشها الأفراد بشكل مفتوح." },
  { ch:"ch1", q:"Twenty-seven states have introduced the Healthy Workplace Bill to consider ways to combat which of the following?", opts:["Bullying", "Sexual harassment", "Obesity", "Discrimination", "Substance abuse"], ans:0, exp:"Healthy Workplace Bill قُدّم في 27 ولاية لمكافحة التنمر في مكان العمل (Workplace Bullying)." },
  { ch:"ch1", q:"Accountants must abide by a strict code of ethics that defines their responsibilities to which of the following?", opts:["Only their clients only", "Both their clients and the public interest", "Only the public only", "Both their investors and shareholders", "Only government regulators"], ans:1, exp:"المحاسبون ملتزمون بمدونة أخلاقيات تحدد مسؤولياتهم تجاه العملاء والمصلحة العامة معاً." },
  { ch:"ch1", q:"Which of the following statements best describes affirmative action programs?", opts:["Affirmative action programs require quotas to govern employment decisions.", "Affirmative action programs have eliminated discrimination in employment.", "Affirmative action programs are required in all organizations by law.", "Affirmative action programs involve efforts to recruit, hire, train, and promote qualified individuals from groups that have traditionally been discriminated against on the basis of race, gender, or other characteristics.", "Affirmative action programs have fallen out of favor because they have been proven to result in reverse discrimination against nonminorities who are the most qualified for the position."], ans:3, exp:"Affirmative Action Programs = جهود لتوظيف وتدريب وترقية الأفراد المؤهلين من الفئات التي تعرضت تاريخياً للتمييز (على أساس العرق، الجنس، الخ)." },
  { ch:"ch1", q:"Which of the following is a question you need to ask when you suspect that workplace bullying has occurred?", opts:["Has your boss given you a raise within the last year?", "Is your supervisor requiring impossible things from you without training?", "Are you attending all meetings called by your supervisor?", "Have you refused to work, talk, or socialize with others?", "Do you interfere with other employees' work?"], ans:1, exp:"علامات التنمر: المشرف يطلب أشياء مستحيلة بدون تدريب، يهدد، يهين، يتجاهل، أو يعطي مواعيد نهائية غير عادلة." },
  { ch:"ch1", q:"Which of the following is associated with a hostile workplace where someone considered a target is threatened, harassed, belittled, or verbally abused?", opts:["Fraud", "Sexual harassment", "Coercive power", "Bullying", "Dishonesty"], ans:3, exp:"Bullying (التنمر) = تهديد، مضايقة، تحقير، أو إيذاء لفظي لشخص مستهدف — يخلق بيئة عمل عدائية (Hostile Environment)." },
  { ch:"ch1", q:"Which of the following statements regarding abusive and intimidating behavior is true?", opts:["Enduring abusive behavior is necessary to get ahead.", "Most abusive or intimidating behavior constitutes sexual harassment.", "An organization cannot grow if the manager is intimidating.", "Not everyone agrees on what constitutes abusive behavior.", "Abusive behavior like bullying is illegal in the workplace."], ans:3, exp:"تعريف السلوك المؤذي نسبي — ليس كل الناس يتفقون على ما يُعتبر \"سلوكاً مؤذياً\"، لذلك يصعب تقنينه. يجب مراعاة النية (Intent) عند تقييم السلوك." },
  { ch:"ch1", q:"The Age Discrimination in Employment Act specifically outlaws hiring practices that discriminate against people who are _______.", opts:["under the age of 18", "between the ages of 16 and 20", "aged 40 and older", "between the ages of 39 and 69", "younger than 18 and older than 39"], ans:2, exp:"Age Discrimination in Employment Act (ADEA) يحمي الأفراد من عمر 40 سنة فأكثر." },
  { ch:"ch1", q:"Which of the following is the most common ethical problem for employees?", opts:["Sexual assault", "Age discrimination", "Lying", "Abusive or intimidating behavior", "Performance probation"], ans:3, exp:"Abusive / Intimidating Behavior (السلوك المؤذي والترهيبي) هو المشكلة الأخلاقية الأكثر شيوعاً للموظفين. يشمل التهديدات، الإهانات، الصراخ، والتجاهل." },
  { ch:"ch1", q:"Which of the following makes it illegal for individuals, firms, or third parties doing business in American markets to \"make payments to foreign government officials to assist in obtaining or retaining business\"? Title VII of the Civil Rights Act", opts:["U.S. Foreign Corrupt Practices Act (FCPA)", "Title VII of the Civil Rights Act", "World Trade Organization (WTO)", "Consumer Protection Act", "Gramm-Leach-Bliley Act"], ans:0, exp:"FCPA = U.S. Foreign Corrupt Practices Act. قانون أمريكي يمنع الشركات من رشوة المسؤولين الأجانب للحصول على عقود أعمال." },
  { ch:"ch1", q:"A salesperson told a client who was not an IT expert that the new software systems were much better than the client's existing ones. To be convincing, the salesperson used a great deal of technical jargon that the client did not really understand. The salesperson did this intentionally to confuse the client. This example illustrates which of the following concepts?", opts:["False advertising", "Implied falsity", "Omission lying", "Noise", "Surrogate lying"], ans:3, exp:"Noise (التشويش) = جزء من Commission Lying — استخدام مصطلحات تقنية بشكل متعمد يعرف المتحدث أن المستقبل لا يفهمها، لخداعه." },
  { ch:"ch1", q:"Which of the following is one of the three criteria that must be met to constitute a hostile work environment?", opts:["Misconduct must be prevalent", "The manager must be directly involved", "The conduct was unwelcome", "Discrimination must be proven", "The workplace is unfriendly"], ans:2, exp:"معايير بيئة العمل العدائية (Hostile Work Environment) الثلاثة: (1) السلوك غير مرحب به Unwelcome، (2) حاد ومتكرر ومغيّر لظروف العمل، (3) شخص عاقل سيجده عدائياً." },
  { ch:"ch1", q:"An interchange of giving and receiving in social relationships is known as _______.", opts:["reciprocity", "optimization", "honesty", "integrity", "justice"], ans:0, exp:"Reciprocity (المعاملة بالمثل) = تبادل الأخذ والعطاء في العلاقات الاجتماعية. أحد العناصر الثلاثة للعدل مع Equality و Optimization." },
  { ch:"ch1", q:"A company can be sued for discrimination if it does which of the following?", opts:["Unilaterally abuses or intimidates its employees", "Creates an anticompetitive corporate culture", "Discharges a minority individual, but has a just cause for doing so", "Uses age as a hiring or firing criterion", "Has more men than women on staff"], ans:3, exp:"التمييز على أساس العمر (تحت حماية ADEA) ممنوع قانونياً في التوظيف والفصل. الأقليات يمكن فصلهم لسبب عادل." },
  { ch:"ch1", q:"Which of the following is true of affirmative action programs?", opts:["They involve the promotion of unqualified employees.", "They are not imposed by federal law on employers.", "They are not very commonly used anymore because of reverse discrimination concerns.", "They only involve the training of individuals.", "They involve the recruitment, hiring, promotion, and training of qualified individuals."], ans:4, exp:"برامج Affirmative Action تشمل: التوظيف، الاستقطاب، الترقية، والتدريب لـ \"الأفراد المؤهلين\" من الفئات المضادة تاريخياً. مو ترقية غير المؤهلين." },
  { ch:"ch1", q:"Which type of fraud involves intentional deception on the part of an individual or group in order to derive an unfair economic advantage over an organization?", opts:["Channel", "Accounting", "Consumer", "Product", "Conventional"], ans:2, exp:"Consumer Fraud (احتيال المستهلك) = يقوم به المستهلك ضد الشركة للحصول على ميزة اقتصادية غير عادلة. أنواعه: Collusion, Duplicity, Guile." },
  { ch:"ch1", q:"Which type of fraudulent activity could involve a consumer staging an accident in order to seek damages?", opts:["Whacking", "Duplicity", "Guile", "Defamation", "Collusion"], ans:1, exp:"Duplicity (الازدواجية/الخداع) = تمثيل حادث لطلب تعويض، أو شراء ملابس ولبسها ثم إرجاعها." },
  { ch:"ch1", q:"Which type of fraudulent activity involves an employee who assists a consumer in committing the fraud?", opts:["Whacking", "Duplicity", "Guile", "Defamation", "Collusion"], ans:4, exp:"Collusion (التواطؤ) هنا يشير إلى موظف يساعد المستهلك في ارتكاب الاحتيال. نوع من Consumer Fraud." },
  { ch:"ch1", q:"In the past, bond ratings agencies were paid by the organizations that they rated, so organizations would shop around for the agency that gave them the best rating. This led to the agencies being accused of having which of the following?", opts:["An unfair advantage", "Excessively complicated systems", "A hostile workplace", "Conflicts of interest", "An unprofitable business model"], ans:3, exp:"Conflict of Interest (تضارب المصالح) — لأن الوكالة تُدفع من نفس الجهة التي تقيّمها، فمصلحتها المالية تتعارض مع مسؤوليتها التقييمية المحايدة." },
  { ch:"ch1", q:"Which of the following are used to obtain or retain business and are not generally considered illegal in the United States?", opts:["Facilitation payments", "Bribes", "Gifts", "Coercive techniques", "Threats"], ans:0, exp:"Facilitation Payments (مدفوعات التسهيل) = مبالغ صغيرة للحصول على خدمات روتينية (مثل تسريع تأشيرة). قانونية في أمريكا ضمن FCPA في بعض الحالات." },
  { ch:"ch1", q:"Which of the following requires an individual to choose among several actions that have negative outcomes?", opts:["An ethical dilemma", "An ethical issue", "An unethical decision", "A dual relationship", "A bribe"], ans:0, exp:"Ethical Dilemma (المعضلة الأخلاقية) = كل الخيارات لها نتائج سلبية، تختار الأقل ضرراً. Ethical Issue تختلف — فيها خيار صح وخيار غلط." },
  { ch:"ch1", q:"Which of the following best describes a dual relationship?", opts:["Any repeated, unwanted behavior of a sexual nature perpetrated upon one individual by another", "A sexual relationship between an employee and his or her immediate superior", "A relationship in which both parties consented but then one party later claims sexual harassment", "A situation in which a manager convinces his or her employee to engage in a sexual relationship in exchange for incentives", "A personal, loving, and/or sexual relationship with someone with whom you share professional responsibilities"], ans:4, exp:"Dual Relationship (العلاقة المزدوجة) = علاقة شخصية/عاطفية/جنسية مع شخص تتقاسم معه مسؤوليات مهنية." },
  { ch:"ch1", q:"An employee can only successfully accuse a co-worker of sexual harassment if it seriously affected their psychological well-being or caused physical injury.", opts:["True", "False"], ans:1, exp:"False — لا تحتاج إثبات ضرر نفسي شديد أو إصابة جسدية. معايير بيئة العمل العدائية 3 فقط: غير مرحب به، حاد ومتكرر، شخص عاقل سيجده عدائياً." },
  { ch:"ch1", q:"The three fundamental elements of honesty, integrity, and equality are ones that motivate people to be fair.", opts:["True", "False"], ans:1, exp:"False — العناصر الثلاثة الصحيحة هي: Equality (المساواة)، Reciprocity (المعاملة بالمثل)، Optimization (التحسين). Honesty و Integrity قيم منفصلة." },
  { ch:"ch1", q:"Omission lying is intentionally not informing others of any differences, problems, safety warnings, or negative issues relating to a product or company that significantly affect awareness, intention, or behavior.", opts:["True", "False"], ans:0, exp:"True — هذا التعريف الحرفي من الكتاب لـ Omission Lying (الكذب بالإغفال). بينما Commission Lying = خلق تصور خاطئ بالكلمات." },
  { ch:"ch1", q:"Examples of consumer fraud include shoplifting, collusion, guile, and duplicity.", opts:["True", "False"], ans:0, exp:"True — أنواع Consumer Fraud تشمل: Shoplifting (السرقة)، Collusion (تواطؤ موظف)، Guile (الدهاء)، Duplicity (تمثيل الحوادث)." },
  { ch:"ch1", q:"Creating a perception or belief by words that intentionally deceives someone is related to which of the following?", opts:["\"Noise\"", "Lying by omission", "What is defined as a \"white\" lie", "Lying by commission", "Context and intent"], ans:3, exp:"Commission Lying = خلق تصور أو اعتقاد بالكلمات تخدع المستقبل عن قصد. يشمل Puffery في الإعلانات و Noise (المصطلحات التقنية المربكة)." },
  { ch:"ch1", q:"Which of the following types of misconduct involves a corporation's financial reports, in which companies provide important information on which investors and others base decisions involving millions of dollars?", opts:["Stealing", "Marketing fraud", "Accounting fraud", "Implied falsity", "Puffery"], ans:2, exp:"Accounting Fraud = معلومات غير دقيقة في تقارير الشركة المالية — مهم لأن المستثمرين يبنون قراراتهم على هذه التقارير." },
  { ch:"ch1", q:"When someone looks over an employee's shoulder while the employee types a password, they are engaging in a behavior known as _______.", opts:["remote hacking", "system hacking", "whacking", "password guessing", "shoulder surfing"], ans:4, exp:"Shoulder Surfing = النظر فوق كتف الموظف لرؤية كلمة السر عند كتابتها. نوع من التجسس المؤسسي (Corporate Intelligence) غير الأخلاقي." },
  { ch:"ch1", q:"Which of the following refers to the process of dishonestly creating, distributing, promoting, and pricing products?", opts:["Whacking", "Marketing fraud", "Accounting fraud", "Social engineering", "Puffery"], ans:1, exp:"Marketing Fraud = إنشاء وتوزيع وترويج وتسعير المنتجات بطريقة غير أمينة. يشمل Puffery, Implied Falsity, Literal Falsity." },
  { ch:"ch1", q:"Which of the following methods of corporate espionage involves tricking individuals into revealing their passwords or other valuable corporate information?", opts:["Hacking", "Social engineering", "Dumpster diving", "Whacking", "Phone eavesdropping"], ans:1, exp:"Social Engineering (الهندسة الاجتماعية) = خداع الأفراد للكشف عن كلمات السر أو معلومات قيمة. مثل انتحال صفة IT والطلب منهم كتابة كلمة المرور." },
  { ch:"ch2", q:"Which of the following is the first step in the ethical decision-making process?", opts:["Being socialized into the firm's corporate culture", "Applying a personal moral philosophy in order to individualize the ethical decision-making process", "Recognizing that an ethical issue exists", "Soliciting the opinions of others in a work group or in the overall business in order to gain feedback", "Enforcing the firm's ethical standards with rewards and punishment"], ans:2, exp:"الخطوة الأولى = Recognizing that an ethical issue exists (الإدراك أن هناك قضية أخلاقية). Ethical Awareness هو الأساس — بدون إدراك المشكلة، لن يكون هناك قرار." },
  { ch:"ch2", q:"When confronted with an ethical issue, workplace, family, religion, legal system, community, and profession are known as an individual's six _______.", opts:["individual factors", "spheres of influence", "external controls", "internal controls", "ethical cultures"], ans:1, exp:"Spheres of Influence (مجالات التأثير) الست: العمل، العائلة، الدين، النظام القانوني، المجتمع، والمهنة. تؤثر على قراراتنا الأخلاقية." },
  { ch:"ch2", q:"The relevance or importance of an ethical event or decision in the eyes of the individual, work group, and/or organization is referred to as _______.", opts:["organizational culture", "immediate job context", "ethical issue intensity", "leadership", "locus of control"], ans:2, exp:"Ethical Issue Intensity = أهمية الحدث الأخلاقي في نظر الفرد أو مجموعة العمل أو المنظمة. شخصي ومرتبط بالموقف (situational) — يتأثر بالقيم والمعتقدات والضغوط." },
  { ch:"ch2", q:"Studies have found that more than a third of the unethical situations that lower- and middle-level managers face come from which of the following?", opts:["Stakeholder expectations and pressures", "Pressures to satisfy customers", "Pressures from the government to perform at a high level", "Internal pressures and ambiguity surrounding internal organizational rules", "Struggles to obey relevant laws"], ans:3, exp:"أكثر من ثلث المواقف غير الأخلاقية للمدراء تأتي من ضغوط داخلية وغموض في قواعد المنظمة — ليس من جهات خارجية." },
  { ch:"ch2", q:"According to the ethical decision-making framework for unethical behavior, the absence of punishment provides which of the following?", opts:["Reason", "Immediate job context", "Individual factor", "Opportunity", "Ethical issue intensity"], ans:3, exp:"Opportunity (الفرصة) = الظروف التي تحد أو تسمح بالسلوك غير الأخلاقي. غياب العقاب يوفر الفرصة. يمكن ردعها بالقواعد والسياسات الرسمية." },
  { ch:"ch2", q:"Which of the following has been found to decrease unethical practices and increase positive work behavior?", opts:["A high level of educational attainment", "A high level of community involvement", "Charismatic leadership", "A strong religious belief system", "The existence of good personal values or morals"], ans:4, exp:"وجود قيم وأخلاق شخصية جيدة هو الأكثر فاعلية في تقليل السلوك غير الأخلاقي — أكثر من التعليم أو المشاركة المجتمعية أو الدين." },
  { ch:"ch2", q:"Which of the following describes the situation when subordinates simply follow the directives of a superior without question, demonstrating the influence that workplace significant others can exert?", opts:["Obedience to authority", "Locus of control", "Opportunity", "Transactional leadership", "Immediate job context"], ans:0, exp:"Obedience to Authority (الطاعة للسلطة) = اتباع توجيهات الرئيس بدون تساؤل. سبب شائع لحل قضايا الأخلاقيات — يمكن أن يكون سلبياً." },
  { ch:"ch2", q:"Multiple elements work on individuals to affect their behavior. While an individual may intend to do the right thing, which of the following can alter this intent?", opts:["Cognitive dissonance", "Familial expectations", "Religious beliefs", "A desire for financial gain", "Organizational or social forces"], ans:4, exp:"القوى التنظيمية والاجتماعية (Organizational or social forces) يمكن أن تغيّر نية الفرد في فعل الصح. Significant Others و Corporate Culture لهم تأثير كبير." },
  { ch:"ch2", q:"Normative approaches focus on which of the following?", opts:["How organizational decision makers should approach an issue", "Methods for adopting values and norms within an organization", "Models that describe an individual's moral philosophies", "Ways to determine the moral intensity of an ethical issue", "Positive outcomes, including firm probability and benefits to society"], ans:0, exp:"Normative Approaches = كيف يجب على صانعي القرار التعامل مع القضية (السلوك المثالي). Descriptive Approaches تختلف — تصف كيف يتعاملون فعلاً." },
  { ch:"ch2", q:"Which of the following can be defined as a set of values, norms, and artifacts, including ways of solving problems shared by members of an organization?", opts:["Corporate culture", "Intentions of a corporation", "Ethical issue awareness", "Determination of a corporation", "Individual factors"], ans:0, exp:"Corporate Culture (الثقافة المؤسسية) = مجموعة القيم والمعايير والنماذج وطرق حل المشاكل التي يتقاسمها أعضاء المنظمة. مهمة في تشكيل السلوك الأخلاقي." },
  { ch:"ch2", q:"What an individual expects to receive from others in the social environment in terms of overt social approval, status, and esteem is referred to as _______.", opts:["opportunity", "immediate job context", "external rewards", "normative approaches", "internal control"], ans:2, exp:"External Rewards = الاستحسان الاجتماعي والمكانة والتقدير الذي يتوقع الفرد الحصول عليه من الآخرين. تختلف عن Internal Rewards (الرضا الذاتي)." },
  { ch:"ch2", q:"Codes, rules, and compliance are essential in organizations. However, an organization is more likely to develop a high integrity corporate culture when it is built on which of the following?", opts:["A charismatic leader", "The preferences of the CEO", "The grapevine", "Formal relationships", "Informal relationships"], ans:4, exp:"العلاقات غير الرسمية (Informal relationships) = أساس ثقافة النزاهة. العلاقات اليومية بين الزملاء أقوى من القوانين الرسمية وحدها." },
  { ch:"ch2", q:"Following the ethical directives of a superior relates to which of the following concepts?", opts:["Internal locus of control", "Obedience to authority", "Moral intensity", "Gender", "Ethical issue intensity"], ans:1, exp:"Obedience to Authority = اتباع توجيهات الرئيس. السلطة لها تأثير قوي على الموظفين في اتخاذ القرارات الأخلاقية." },
  { ch:"ch2", q:"Those who have influence in a work group and provide advice and information in both formal and informal ways are related to which of the following concepts?", opts:["External control", "Internal control", "Significant others", "Institutional theory", "Instrumental concern"], ans:2, exp:"Significant Others (المؤثرون) = الأشخاص ذوو التأثير في مجموعة العمل — الزملاء، المدراء، المرؤوسون. تأثيرهم على القرارات اليومية أكبر من أي عامل آخر." },
  { ch:"ch2", q:"Studies have shown that within an organization, which of the following will have more impact on a worker's decisions on a daily basis than any other factor?", opts:["Significant others", "Religion", "Education", "Chief executive officers", "Ethical issues"], ans:0, exp:"Significant Others (الزملاء والمدراء المباشرين) لهم تأثير يومي أكبر من الدين أو التعليم أو حتى الرئيس التنفيذي." },
  { ch:"ch2", q:"External and internal rewards relate to which part of the ethical decision-making framework?", opts:["Individual factors", "Significant others", "Cognitive moral development", "Obedience to authority", "Opportunity"], ans:4, exp:"Opportunity (الفرصة) تشمل External Rewards (الاستحسان الخارجي، المكانة) و Internal Rewards (الرضا الذاتي). تحدد ما إذا كان الشخص سيتصرف بشكل أخلاقي أم لا." },
  { ch:"ch2", q:"Philosopher John Rawls believed which of the following to be true?", opts:["Political institutions significantly influence the development of values.", "Ethical decision-making models should only use normative approaches.", "Competition should be completely free of government intervention.", "Justice principles are beliefs that everyone can accept.", "Opportunity factors have the greatest influence over business ethical decision making."], ans:3, exp:"John Rawls آمن بأن مبادئ العدل = معتقدات يستطيع الجميع قبولها. نظريته Veil of Ignorance تقول: صمّم المجتمع وأنت لا تعرف موقعك فيه." },
  { ch:"ch2", q:"Which of the following is the first sign that an unethical decision has occurred?", opts:["Guilt", "Reward", "Punishment", "Cognitive dissonance", "Happiness"], ans:0, exp:"الشعور بالذنب (Guilt) هو أول إشارة على اتخاذ قرار غير أخلاقي. عندما تتعارض النية والسلوك مع الحكم الأخلاقي، يشعر الناس بالذنب." },
  { ch:"ch2", q:"People who go with the flow because they feel the events in their lives are uncontrollable believe in _______.", opts:["ethical decision making", "internal locus of control", "an ethical culture", "external locus of control", "significant others"], ans:3, exp:"External Locus of Control = يرون أن أحداث حياتهم بسبب قوى خارجية لا يتحكمون فيها. Internal Locus = يؤمنون أنهم يتحكمون بحياتهم بجهدهم ومهارتهم." },
  { ch:"ch2", q:"Which of the following is an individual factor that affects business ethics?", opts:["Nationality", "Corporate culture", "Obedience to authority", "Significant others", "Opportunity"], ans:0, exp:"Individual Factors: Gender, Education, Nationality, Age, Locus of Control. الباقي عوامل تنظيمية (Organizational Factors)." },
  { ch:"ch2", q:"Which of the following involves values and norms that prescribe a wide range of behavior for organizational members?", opts:["Oversight", "Significant others", "Corporate culture", "Ethical culture", "The legal climate"], ans:2, exp:"Corporate Culture يحدد نطاق واسع من السلوك. Ethical Culture أضيق — يركز على \"السلوك المقبول أخلاقياً\" فقط." },
  { ch:"ch2", q:"Which of the following does an ethical corporate culture need in order to monitor the complex ethical decisions being made by employees?", opts:["Individual ethics and ethical issue intensity", "Ethical issue intensity and ethics training", "Organizational factors and individual factors", "Employee evaluations and good intentions", "Shared values and proper oversight"], ans:4, exp:"Shared Values + Proper Oversight = أساس الثقافة الأخلاقية القوية. القيادة وحدها لا تكفي — تحتاج قيم مشتركة ورقابة فعلية." },
  { ch:"ch2", q:"Those who have influence in a work group are referred to as significant others. Which of the following are examples of this concept?", opts:["Peers, managers, coworkers, and subordinates", "Family members, peers, and coworkers", "Spouses and friends", "Employees in similar job situations", "Employees who hold the same job"], ans:0, exp:"Significant Others في سياق العمل = الأقران، المدراء، الزملاء، والمرؤوسون. ليس العائلة أو الأصدقاء — التركيز على بيئة العمل." },
  { ch:"ch2", q:"Which of the following is true of research concerning nationality and the ability to make ethical decisions?", opts:["Research shows no relationship between the two.", "Research shows it is hard to interpret in a business context because of cultural differences.", "Research suggests that organizations should be very concerned about an employee's nationality.", "Research suggests that corporations pay a lot of attention to such research.", "Research suggests that the influence of nationality on corporate culture is growing."], ans:1, exp:"نتائج البحوث في الجنسية والأخلاق صعبة التفسير بسبب الاختلافات الثقافية. العلاقة موجودة لكن معقدة." },
  { ch:"ch2", q:"Which of the following is true concerning the relationship between business ethics and age?", opts:["It shows a negative correlation.", "It is simple, and greater experience leads to better ethical decision making.", "It is complex, although experience helps older employees make ethical decisions.", "It suggests that employees with less experience have a greater ability to deal with complex industry-specific ethical issues. e."], ans:2, exp:"العلاقة بين السن والأخلاقيات معقدة. الخبرة تساعد الموظفين الأكبر سناً في اتخاذ قرارات أخلاقية، لكن الموظفين الأصغر متأثرون أكثر بالثقافة المؤسسية." },
  { ch:"ch2", q:"Employees who believe they control the events in their lives by their own effort and skill are referred to as having a(n) _______.", opts:["external locus of control", "moral intensity", "obedience to authority", "opportunity", "internal locus of control"], ans:4, exp:"Internal Locus of Control = يؤمنون أنهم يتحكمون بحياتهم بجهدهم ومهارتهم. External Locus = يعتقدون أن قوى خارجية تتحكم بحياتهم." },
  { ch:"ch2", q:"Which of the following refers to the ability to perceive whether a situation or decision has an ethical dimension?", opts:["Ethical issue intensity", "Locus of control", "Ethical awareness", "Moral intensity", "Opportunity"], ans:2, exp:"Ethical Awareness (الوعي الأخلاقي) = القدرة على إدراك وجود بُعد أخلاقي في الموقف. الخطوة الأولى قبل Ethical Issue Intensity." },
  { ch:"ch2", q:"Which of the following relates to individuals' perceptions of social pressure and the harm they believe their decisions will have on others?", opts:["Ethical awareness", "Moral intensity", "Individual factors", "Ethical issue intensity", "Social awareness"], ans:1, exp:"Moral Intensity = تصوّر الفرد للضغط الاجتماعي والضرر الذي سيسببه قراره للآخرين. مكوّن من مكوّنات Ethical Issue Intensity." },
  { ch:"ch2", q:"Which type of culture reflects the integrity of decisions made and is a function of many factors, including corporate policies, top management's leadership on ethical issues, the influence of coworkers, and the opportunity for unethical behavior?", opts:["Corporate", "External", "Ethical", "Positive", "Compromising"], ans:2, exp:"Ethical Culture = يعكس نزاهة القرارات، ويتأثر بالسياسات، قيادة الإدارة العليا، تأثير الزملاء، وفرصة السلوك غير الأخلاقي." },
  { ch:"ch2", q:"The motivational \"carrots and sticks\" superiors use to influence employee behavior are part of the concept of _______.", opts:["obedience to authority", "immediate job context", "locus of control", "normative approach", "descriptive approach"], ans:1, exp:"Immediate Job Context = السياق المباشر للعمل، يشمل المكافآت والعقوبات (الجزرة والعصا) التي تؤثر على سلوك الموظف." },
  { ch:"ch2", q:"Which of the following is/are important in establishing a foundation for normative values?", opts:["Corporate conduct", "Descriptive approaches", "Codes of ethics", "Institutions", "Opportunity"], ans:3, exp:"Institutions (المؤسسات) — الحكومة، الدين، التعليم، العائلة — هي أساس بناء القيم المعيارية (Normative Values). Institutional Theory تفسر هذا." },
  { ch:"ch2", q:"How organizational decision makers actually approach ethical issues relates to which of the following?", opts:["Normative approaches", "Individual approaches", "Descriptive approaches", "Organizational approaches", "Values-based approaches"], ans:2, exp:"Descriptive Approaches = كيف يتعامل صانعو القرار فعلاً مع القضايا الأخلاقية (الواقع). Normative = كيف ينبغي أن يتعاملوا (المثالية)." },
  { ch:"ch2", q:"Which of the following are central to an organization and provide directions for action?", opts:["Core values", "Normative approaches", "Ethical issues", "Opportunities", "Institutions"], ans:0, exp:"Core Values = المعتقدات الدائمة عن السلوك المناسب داخل الشركة. توفر توجيهات للسلوك والقرارات اليومية." },
  { ch:"ch2", q:"In the form of industry standards, normative business ethics takes into account which of the following types of reality outside the legal realm?", opts:["Descriptive", "Political", "Social", "Economic", "Normative"], ans:1, exp:"الأخلاقيات المعيارية (Normative Business Ethics) على شكل معايير الصناعة تأخذ في الاعتبار الواقع السياسي خارج نطاق القانون الرسمي — يشمل المؤسسات السياسية، ضغوط الجماعات، والتنظيمات الصناعية التي تفرض سلوكاً أخلاقياً بدون نص قانوني مباشر." },
  { ch:"ch2", q:"Which type of institutions include religion, education, and individuals such as the family unit?", opts:["Social", "Conservative", "Economic", "Liberal", "Political"], ans:0, exp:"المؤسسات الاجتماعية (Social Institutions) = الدين، التعليم، العائلة. تختلف عن الاقتصادية (الأسواق، الشركات) والسياسية (الحكومة، القوانين)." },
  { ch:"ch2", q:"A higher probability that firms cut corners because margins are low is generally created by which of the following?", opts:["Profit", "Return", "Cooperation", "Competition", "Loss"], ans:3, exp:"المنافسة الشديدة (Competition) تقلل الهوامش وتضغط الشركات لاختصار الطرق ربما بشكل غير أخلاقي. Industry Competition = عامل ضغط." },
  { ch:"ch2", q:"The thought experiment used by John Rawls that examined how individuals would formulate principles if they did not know what their future position in society would be is known as which of the following?", opts:["Equality principle", "Utilitarian veil", "Liberty principle", "Universal principle", "Veil of ignorance"], ans:4, exp:"Veil of Ignorance (حجاب الجهل) = تجربة فكرية لـ John Rawls — كيف يضع الناس المبادئ إذا لم يعرفوا موقعهم المستقبلي في المجتمع. أساس نظريته في العدل." },
  { ch:"ch2", q:"Which of the following states that economic and social equalities should be arranged to provide the most benefit to the least-advantaged members of society?", opts:["Equality principle", "Difference principle", "Constitutional principle", "Liberty principle", "Justice principle"], ans:1, exp:"Difference Principle (مبدأ الفرق) = التفاوت الاقتصادي/الاجتماعي يجب أن يُرتّب بحيث يفيد أقل الأفراد حظاً في المجتمع. من مبادئ Rawls." },
  { ch:"ch2", q:"Familiarizing employees with company values and training them to recognize common ethical scenarios helps them generate _______.", opts:["ethical awareness", "moral intensity", "ethical issue intensity", "individual values", "principles"], ans:0, exp:"التدريب على القيم والسيناريوهات الأخلاقية يبني Ethical Awareness (الوعي الأخلاقي) — يساعد الموظفين على التعرف على القضايا قبل أن تتحول لمشاكل." },
  { ch:"ch2", q:"Organizations are found to make a greater contribution than those based simply on compliance, or obeying laws and regulations when they have ethics programs based on which of the following orientations?", opts:["Customer", "Political", "Principles", "Values", "Social"], ans:3, exp:"Values-based Ethics Programs أقوى من Compliance-based — لا تكتفي بالالتزام بالقوانين بل تبني ثقافة قيم مشتركة تُلهم السلوك الصحيح وتزيد من المساهمة الاجتماعية للمنظمة بما يتجاوز الحد الأدنى القانوني." },
  { ch:"ch2", q:"Which of the following is the last step in the ethical decision-making process?", opts:["Individuals' intentions and their decision regarding what action they will take", "Evaluation of whether the decision is an ethical issue", "Analysis of individual, organizational, and opportunity factors", "The application of moral philosophies to the decision", "How others in the organization view the decision"], ans:0, exp:"الخطوة الأخيرة = Intentions & Behavior (النوايا والسلوك). بعد كل التحليل، تأتي مرحلة اتخاذ الفعل الفعلي." },
  { ch:"ch2", q:"Which of the following reflects the integrity of decisions made and is a function of many factors?", opts:["Ethical awareness", "Ethical culture", "Organizational environment", "Moral intensity", "Corporate culture"], ans:1, exp:"Ethical Culture = يعكس نزاهة القرارات، ويتأثر بعدة عوامل: السياسات، القيادة، الزملاء، والفرصة للسلوك غير الأخلاقي." },
  { ch:"ch2", q:"In the workplace, an organization's values often have a greater influence on a decision than the person's own values.", opts:["True", "False"], ans:0, exp:"True — في بيئة العمل، قيم المنظمة لها تأثير أقوى من قيم الفرد. Significant Others و Corporate Culture يشكلون السلوك." },
  { ch:"ch2", q:"A study has found that those with an external locus of control were positively correlated with ethical decision making, whereas those with an internal locus of control were negatively correlated.", opts:["True", "False"], ans:1, exp:"False — العكس صحيح. Internal Locus of Control مرتبط إيجاباً بالقرارات الأخلاقية لأن الشخص يشعر بالمسؤولية الشخصية." },
  { ch:"ch2", q:"The ethical decision-making model presented in the text will be able to determine explicitly whether a decision is ethical or unethical.", opts:["True", "False"], ans:1, exp:"False — النموذج لا يحدد إذا كان القرار أخلاقياً أم لا، بل يوفر رؤى حول العوامل المؤثرة. الأخلاق تتضمن أحكاماً قيمية واتفاقاً جماعياً." },
  { ch:"ch2", q:"The terms moral intensity and ethical issue intensity can be used interchangeably.", opts:["True", "False"], ans:1, exp:"False — المفاهيم مختلفة. Moral Intensity = تصور الفرد للضغط الاجتماعي والضرر. Ethical Issue Intensity = أهمية القضية في نظر الفرد والمجموعة والمنظمة." },
  { ch:"ch2", q:"A firm's core values provide a blueprint into the firm's purpose as well as how it views ethical decision making and prioritizes stakeholders.", opts:["True", "False"], ans:0, exp:"True — القيم الأساسية (Core Values) تعمل كخارطة طريق لهدف الشركة، لكيفية اتخاذ القرارات الأخلاقية، ولأولوية أصحاب المصلحة." },
  { ch:"ch2", q:"Which of the following statements about opportunity is true?", opts:["Opportunity results from motivational \"carrots and sticks\" superiors use to influence employee behavior.", "Opportunity can be eliminated in a corporation.", "Opportunity directly relates to barriers to individual ethics.", "Opportunity relates directly to the power of the industry rivals' suppliers over other rivals.", "Opportunity relates to being lucky in preventing misconduct."], ans:0, exp:"Opportunity (الفرصة) = الظروف التي تسمح أو تمنع السلوك غير الأخلاقي. تنتج من نظام المكافآت والعقوبات (carrots & sticks) الذي يستخدمه المدراء — حين تكون المكافآت على النتائج فقط بدون رقابة، تزيد فرص التجاوز. لا يمكن إزالتها تماماً، لكن تُقلل بالسياسات والرقابة." },
  { ch:"ch2", q:"Which of the following states that each person has basic rights that are compatible to the basic liberties of others?", opts:["Equality principle", "Difference principle", "Constitutional principle", "Veil of ignorance", "Justice principle"], ans:0, exp:"Equality Principle (Liberty Principle) = كل شخص له حقوق أساسية تتوافق مع حريات الآخرين الأساسية. من مبادئ John Rawls، مثل الحقوق المكفولة في الدستور الأمريكي." },
  { ch:"ch3", q:"Moral philosophy refers to which of the following?", opts:["The values developed in an organizational environment", "The overall morality of business activities", "The specific principles or rules that people use to decide what is right and wrong", "The legality of a business's activities", "The principles or rules that policymakers use to create legislation"], ans:2, exp:"Moral Philosophy (الفلسفة الأخلاقية) = المبادئ أو القيم المحددة التي يستخدمها الشخص لتحديد ما هو صح وما هو خطأ. شخصية وفردية، بينما أخلاقيات الأعمال جماعية." },
  { ch:"ch3", q:"Which moral philosophy evaluates the morality of an action on the basis of its consequences for everyone affected (it seeks the greatest good for the greatest number)?", opts:["Act deontology", "Rule deontology", "Egoism", "Utilitarianism", "Hedonism"], ans:3, exp:"Utilitarianism (النفعية) = أعظم خير لأكبر عدد من الناس. فرع من Teleology (نتائج الفعل). تختلف عن Egoism (المصلحة الفردية)." },
  { ch:"ch3", q:"Which philosophy stipulates that acts are morally right or acceptable if they produce some desired result, such as realization of self-interest or utility?", opts:["Teleology", "Deontology", "The relativist perspective", "Ethical formalism", "Hedonism"], ans:0, exp:"Teleology = الفعل صح إذا أنتج نتيجة مرغوبة (متعة، معرفة، مصلحة، منفعة، ثروة). تشمل Egoism و Utilitarianism. Deontology عكسها — تركز على النوايا والحقوق." },
  { ch:"ch3", q:"Which moral philosophy focuses on the rights of individuals and on the intentions associated with a particular behavior, rather than its consequences?", opts:["Deontology", "The relativist perspective", "Teleology", "Egoism", "Utilitarianism"], ans:0, exp:"Deontology = تركز على حقوق الأفراد والنوايا بدل النتائج. Nonconsequentialism — بعض الأفعال صح بطبيعتها. مثال: Kant's Categorical Imperative." },
  { ch:"ch3", q:"Which of the following are based on decisions made by groups or when carrying out tasks to meet business objectives?", opts:["Organizational factors", "Codes of conduct", "Individual factors", "Moral philosophies", "Business ethics"], ans:4, exp:"Business Ethics = قرارات جماعية لتحقيق أهداف العمل. Moral Philosophies شخصية فردية. الفرق مهم: الأولى جماعية، الثانية فردية." },
  { ch:"ch3", q:"According to Kohlberg's model, as a person progresses through the stages of moral development-and with time, education, and experience-which of the following statements is true?", opts:["The individual is unlikely to change his/her values and ethical behavior.", "Cognitive moral development and behavior may change.", "The individual will likely be promoted.", "Significant others become more influential in ethical decision making.", "Opportunity to behave unethically decreases."], ans:1, exp:"CMD (Cognitive Moral Development) والسلوك قد يتغيران مع الوقت والتعليم والخبرة. Kohlberg يرى أن الشخص يتطور عبر 6 مراحل." },
  { ch:"ch3", q:"An individual who defines what is right by considering their duty to society, not just to other specific people, is in which of Kohlberg's stages of cognitive moral development?", opts:["Punishment and obedience", "Individual instrumental purpose and exchange", "Mutual interpersonal expectations, relationships, and conformity", "Social system and conscience maintenance", "Prior rights, social contract, or utility"], ans:3, exp:"Stage 4: Social System & Conscience Maintenance = الواجب تجاه المجتمع. احترام السلطة والحفاظ على النظام الاجتماعي. ليس مجرد أشخاص محددين." },
  { ch:"ch3", q:"Which of the following is the last of Kohlberg's stages of cognitive moral development?", opts:["Individual instrumental purpose and exchange", "Need achievement", "Social system and conscience maintenance", "Punishment and obedience", "Universal ethical principles"], ans:4, exp:"Stage 6 (الأخيرة): Universal Ethical Principles = المبادئ الأخلاقية الكونية. الصح يُحدد بمبادئ كونية يجب على الجميع اتباعها." },
  { ch:"ch3", q:"A person who offers a facilitation payment in order to secure a contract that will keep their company from going bankrupt and laying off hundreds of employees is trying to secure the greatest good for the greatest number of people, making them a(n) _______.", opts:["egoist", "deontologist", "utilitarian", "relativist", "humanitarian"], ans:2, exp:"Utilitarian = يسعى لأعظم خير لأكبر عدد من الناس. حتى لو الفعل مشكوك فيه (facilitation payment)، النتيجة (حماية مئات الوظائف) هي الأساس." },
  { ch:"ch3", q:"Which moral philosophy evaluates the morality of an action on the basis of its conformity to general moral principles based on logic and respect for individual rights?", opts:["Relativist perspective", "Act utilitarianism", "Rule utilitarianism", "Act deontology", "Rule deontology"], ans:4, exp:"Rule Deontology = التقيّد بمبادئ أخلاقية عامة مبنية على المنطق. Act Deontology يحكم كل فعل على حدة. الاثنان يركزان على النية لا النتيجة." },
  { ch:"ch3", q:"Considered the father of free market capitalism, which of the following believed that business was and should be guided by the morals of good men?", opts:["John Maynard Keynes", "Immanuel Kant", "Aristotle", "Adam Smith", "Lawrence Kohlberg"], ans:3, exp:"Adam Smith = أبو الرأسمالية الحرة. آمن أن الأعمال يجب أن يقودها أخلاق الرجال الصالحين. Milton Friedman يختلف — يرى السوق يكافئ ويعاقب." },
  { ch:"ch3", q:"The belief that no one thing is intrinsically good is defined as _______.", opts:["hedonism", "pluralism", "relativism", "deontology", "teleology"], ans:1, exp:"Pluralism (التعددية) = الاعتقاد بأنه لا شيء واحد خير بطبيعته، بل الخير مزيج من عدة عناصر. عكس Monism. Plato من أبرز مؤيديها." },
  { ch:"ch3", q:"Kant's categorical imperative and the Golden Rule are examples of which moral philosophy?", opts:["Teleology", "Deontology", "The relativist perspective", "Egoism", "Utilitarianism"], ans:1, exp:"Kant's Categorical Imperative و Golden Rule (\"عامل الناس كما تحب أن يعاملوك\") = أمثلة لـ Deontology. تركز على الحقوق والنوايا لا النتائج." },
  { ch:"ch3", q:"A marketing manager who orders that a manufacturing plant be refitted to make it safer for workers, no matter what the cost because the manager believes in the rights of all individuals, may be considered a(n) _______.", opts:["egoist", "utilitarian", "deontologist", "relativist", "hedonist"], ans:2, exp:"Deontologist = يؤمن بحقوق الأفراد بغض النظر عن التكلفة أو النتائج. السلامة حق، بعيداً عن حساب الأرباح." },
  { ch:"ch3", q:"Which moral philosophy evaluates the morality of an action on the basis of principles or rules designed to promote the greatest overall utility rather than by examining situations individually?", opts:["Rule utilitarianism", "Act utilitarianism", "Rule deontology", "Act deontology", "Egoism"], ans:0, exp:"Rule Utilitarianism = يتبع قواعد عامة لتعظيم المنفعة. Act Utilitarianism = يقيّم كل حالة على حدة. Rule أكثر ثباتاً وأقل تحيزاً." },
  { ch:"ch3", q:"Which moral philosophy evaluates the morality of an action on the basis of the equity, fairness, and impartiality of the action, with rules serving as guidelines in the decision-making process?", opts:["Rule utilitarianism", "Act utilitarianism", "Rule deontology", "Act deontology", "Relativist perspective"], ans:3, exp:"Act Deontology = يقيّم كل فعل على أساس العدالة والإنصاف في ذلك الموقف. القواعد إرشادية فقط. الأساس الصحيح للحكم هو الفعل ذاته." },
  { ch:"ch3", q:"Which moral perspective defines ethical behavior subjectively from the unique experiences of individuals and groups?", opts:["Virtue ethics", "Egoism", "Relativist perspective", "Absolutism", "Justice"], ans:2, exp:"Relativist Perspective (المنظور النسبي) = الأخلاق ذاتية من تجارب الأفراد والمجموعات. 3 أنواع: Descriptive, Meta-ethical, Normative Relativism." },
  { ch:"ch3", q:"As circumstances evolve, an act can come to be viewed as unethical under which of the following philosophies and perspectives?", opts:["Relativist perspective", "Teleology", "Deontology", "Egoism", "Rule deontology"], ans:0, exp:"Relativist Perspective = الأخلاق تتغير مع الظروف والسياق. ما كان صحاً قد يصبح خطأ مع تطور المجتمع. Deontology ثابت، Teleology يحكم بالنتائج." },
  { ch:"ch3", q:"Instead of focusing on the end result of actions and happiness created by them, which of the following emphasizes the means and motives by which actions are justified?", opts:["Pragmatism", "Deontology", "Utilitarianism", "Goodness theories", "Obligation theories"], ans:4, exp:"Obligation Theories = تركز على الوسائل والنوايا، وتنقسم إلى Teleology و Deontology. Goodness Theories تركز على النتيجة النهائية والسعادة." },
  { ch:"ch3", q:"An individual who believes that an action is ethical because others within the individual's company and industry regularly engage in the activity is probably a(n) _______.", opts:["utilitarian", "relativist", "teleologist", "deontologist", "egoist"], ans:1, exp:"Relativist = يعتبر الفعل صحاً بناءً على ما يفعله المجتمع/الصناعة. الأخلاق نسبية وتأتي من إجماع المجموعة." },
  { ch:"ch3", q:"Enlightened egoism _______.", opts:["is when an individual puts spiritual feelings above all others", "centers completely on the short-term well-being of others", "centers on one's short-term self-interest", "centers on one's long-term self-interest but takes others' well-being into account", "centers on the long-term well-being of others"], ans:3, exp:"Enlightened Egoism = منظور طويل المدى للمصلحة الذاتية مع الأخذ في الاعتبار رفاهية الآخرين. المصلحة الشخصية تبقى الأساس لكن بنظرة أشمل." },
  { ch:"ch3", q:"Which moral philosophy is based on the premise that equal respect must be given to all persons?", opts:["Relativist perspective", "Deontology", "Egoism", "Teleology", "Utilitarianism"], ans:1, exp:"Deontology = احترام متساوٍ لجميع الأشخاص، لكل شخص حقوقه الأساسية. Kant: \"عامل الإنسان كغاية لا كوسيلة\"." },
  { ch:"ch3", q:"Which of the following have lower ethical issue sensitivity-meaning they are less likely to detect ethical issues-and may be more committed to completing projects and more dedicated to group values and objectives?", opts:["Relativists", "Hedonists", "Pragmatists", "Deontologists", "Teleologists"], ans:0, exp:"Relativists = حساسية أخلاقية أقل — لأنهم يعتمدون على معايير المجموعة، لا يرون القضايا الأخلاقية بسهولة. لكنهم أكثر التزاماً بأهداف المجموعة." },
  { ch:"ch3", q:"Which form of justice is based on the evaluation of outcomes or results of the business relationship?", opts:["Procedural", "Interactional", "Distributive", "Ethical", "Egotistical"], ans:2, exp:"Distributive Justice (العدالة التوزيعية) = تقييم النتائج/المخرجات (مثل الأجر والترقيات). Procedural = العمليات، Interactional = العلاقات." },
  { ch:"ch3", q:"Kohlberg's six stages of cognitive moral development can be reduced to three levels of ethical concern. Which of the following describes individuals at the second level?", opts:["They define right as that which conforms to the expectations of good behavior of the larger society.", "They see beyond the norms, laws, and authority of groups or individuals.", "They are concerned with their immediate interests and with external rewards and punishments.", "They are concerned with their long-term interests and with internal rewards and punishments.", "They are unethical."], ans:0, exp:"المستوى الثاني (Conventional) = يتبع توقعات المجتمع. يشمل Stage 3 (العلاقات) و Stage 4 (النظام الاجتماعي)." },
  { ch:"ch3", q:"Which of the following argues that ethical behavior involves not only adhering to conventional moral standards but also considering what a mature person with a \"good\" moral character would deem appropriate?", opts:["Act utilitarianism", "Virtue ethics", "Reciprocity", "Hedonism", "Rule deontology"], ans:1, exp:"Virtue Ethics = السلوك الأخلاقي يشمل الالتزام بالمعايير + ما سيعتبره شخص ناضج ذو \"شخصية أخلاقية جيدة\" مناسباً. تُطبّق استقرائياً (Inductively)." },
  { ch:"ch3", q:"When an individual defines right and wrong on the basis of legal contracts, they are using which of Kohlberg's stages of development?", opts:["Punishment and obedience (Stage 1)", "Mutual interpersonal expectations, relationships, and conformity (Stage 3)", "Social system and conscience maintenance (Stage 4)", "Prior rights, social contract, or utility (Stage 5)", "Universal ethical principles (Stage 6)"], ans:3, exp:"Stage 5: Prior Rights, Social Contract, or Utility = الاعتماد على العقود القانونية والحقوق الأساسية. قد يتعارض القانوني مع الأخلاقي في هذه المرحلة." },
  { ch:"ch3", q:"Which of the following deals with the issue of what individuals feel they are due based on their rights and performance in the workplace, and therefore is more likely to be based on deontological moral philosophies than on teleological or utilitarian ones?", opts:["Rights", "Virtue ethics", "Justice", "Relativism", "Egoism"], ans:2, exp:"Justice (العدل) = المعاملة العادلة والمكافأة الواجبة وفق المعايير الأخلاقية/القانونية. مبنية على Deontology (الحقوق) لا النتائج." },
  { ch:"ch3", q:"Which of the following is a central problem with relativism?", opts:["It emphasizes people's differences while ignoring their basic similarities.", "Few people believe that these principles are important.", "It is very complicated.", "It represents unattainable goals.", "Many feel that it only works in theory."], ans:0, exp:"المشكلة الرئيسية للنسبية = تركز على اختلافات الناس وتتجاهل تشابهاتهم الأساسية. كما ترتبط سلبياً بالحساسية للقضايا الأخلاقية." },
  { ch:"ch3", q:"An individual who emphasizes others rather than themselves in making decisions is in which of Kohlberg's stages of development?", opts:["Universal ethical principles (Stage 6)", "Mutual interpersonal expectations, relationships, and conformity (Stage 3)", "Social system and conscience maintenance (Stage 4)", "Punishment and obedience (Stage 1)", "Prior rights, social contract, or utility (Stage 5)"], ans:1, exp:"Stage 3: Mutual Interpersonal Expectations = التركيز على مصالح الآخرين بدل الذات. الدافع هنا الرغبة في أن يكون الفرد \"شخصاً طيباً\" في نظر الآخرين والتوافق مع توقعات المجموعة القريبة (العائلة، الزملاء)." },
  { ch:"ch3", q:"While he is normally against the idea of harming animals, Eric views animal research in the pharmaceutical industry as a way to improve drugs that will benefit mankind. Which moral philosophy most closely represents Eric's viewpoint in this scenario?", opts:["Egoism", "Relativism", "Humanitarianism", "Utilitarianism", "Individualism"], ans:3, exp:"Utilitarianism = أعظم خير لأكبر عدد. إيريك يتجاوز ضرر الحيوانات لتحقيق فائدة البشرية — نتيجة الفعل تبرر الوسيلة." },
  { ch:"ch3", q:"In Kohlberg's model, Stage 3 (mutual interpersonal expectations, relationships, and conformity) differs from Stage 2 (individual instrumental purpose and exchange) in terms of the individual's motives in _______.", opts:["considering fairness to others", "maintaining the social order", "considering duty to society", "upholding the basic values of society", "maintaining obedience to authority"], ans:0, exp:"Stage 3 يختلف عن Stage 2 في الاهتمام بالعدل تجاه الآخرين. Stage 2 يقيّم الفعل بمدى عدالته للفرد نفسه." },
  { ch:"ch3", q:"The elements of trust, self-control, empathy, fairness, and truthfulness that are important to business transactions are part of which of the following?", opts:["Egoism", "Utilitarianism", "Deontology", "Moral philosophy", "Virtue"], ans:4, exp:"Virtue (الفضيلة) = الثقة، ضبط النفس، التعاطف، العدل، الصدق. عناصر شخصية أخلاقية. Virtue Ethics يبني عليها." },
  { ch:"ch3", q:"Which form of justice considers the processes and activities that produce the outcome or results?", opts:["Disruptive", "Procedural", "Interactional", "Communications", "Evaluative"], ans:1, exp:"Procedural Justice (العدالة الإجرائية) = العمليات والأنشطة المؤدية للنتيجة. Distributive = النتائج، Interactional = العلاقات." },
  { ch:"ch3", q:"Which of the following describes the categorical imperative?", opts:["\"Pursue pleasure in this lifetime as the ultimate good.\"", "\"Thou should seek the greatest good for the greatest number of people.\"", "\"Do unto others as you would have them do unto you.\"", "\"Act as if the maxim of thy action were to become by thy will a universal law of nature.\"", "\"When in Rome, do as the Romans do.\""], ans:3, exp:"Categorical Imperative (Kant) = \"تصرّف فقط وفق قاعدة يمكن أن تصبح قانوناً كونياً يتبعه الجميع.\" أي: لا تفعل شيئاً ما لم تقبل أن يصبح قاعدة عامة للناس كلهم." },
  { ch:"ch3", q:"Why might an individual's moral philosophies differ when making a personal decision versus a work-related decision?", opts:["Individuals tend to act more unethically in large work groups than alone.", "Businesses train individuals to adopt different moral philosophies at work.", "Personal temptations are rarely a problem in the business environment.", "Ethics is not held to be a high concern among managers in the workplace.", "Goals and pressures in the workplace are different from those outside of work."], ans:4, exp:"الأهداف والضغوط في العمل مختلفة عنها خارج العمل. الربح والمواعيد النهائية والمنافسة تغيّر معايير الفرد الأخلاقية." },
  { ch:"ch3", q:"Which of the following is one of the criticisms of Kohlberg's cognitive moral development theory?", opts:["The original theory was transferred from children to adults.", "It can only apply to those with a deontological perspective.", "It assumes that very few adults ever reach Stage 6.", "The theory has little reliability or validity.", "All moral philosophies are regarded as equal to one another."], ans:0, exp:"انتقاد رئيسي: النظرية الأصلية من Piaget عن الأطفال ثم نقلها Kohlberg للبالغين دون اعتبار لنضج دماغ البالغ." },
  { ch:"ch3", q:"The concept of moral philosophies is inexact.", opts:["True", "False"], ans:0, exp:"True — مفهوم الفلسفة الأخلاقية غير دقيق، يجب تقييمه على طيف (continuum) بدلاً من كونه ثابتاً. الناس يستخدمون فلسفات مختلفة حسب السياق." },
  { ch:"ch3", q:"Interactional justice considers the processes and activities that produce a particular outcome.", opts:["True", "False"], ans:1, exp:"False — هذا تعريف Procedural Justice. Interactional Justice = مبنية على العلاقات بين أعضاء المنظمة، كيف يعامل الموظفون والمدراء بعضهم." },
  { ch:"ch3", q:"Teleological philosophies assess the moral worth of a behavior by looking at its consequences, and thus moral philosophers today often refer to these theories as consequentialism.", opts:["True", "False"], ans:0, exp:"True — Teleology = Consequentialism. تقيس القيمة الأخلاقية من نتائج الفعل. تشمل Egoism و Utilitarianism." },
  { ch:"ch3", q:"The moral philosophy of idealism views ethics as whether an act produces more economic value for its effort.", opts:["True", "False"], ans:1, exp:"False — هذا تعريف Economic Value Orientation. Idealism = فلسفة تضع قيمة خاصة للأفكار والمثل كنتاج للعقل." },
  { ch:"ch3", q:"Economist Adam Smith viewed profit as the ultimate goal of an enterprise and did not believe it was businesses' responsibility to be concerned about their impact on society.", opts:["True", "False"], ans:1, exp:"False — Adam Smith آمن أن الأعمال يجب أن تسترشد بأخلاق الرجال الصالحين. Milton Friedman هو من آمن بأن الربح هدف الأساس." },
  { ch:"ch3", q:"Which philosophy defines right or acceptable actions as those that maximize a particular person's self-interest as defined by the individual?", opts:["Teleology", "Egoism", "Utilitarianism", "Deontology", "Relativism"], ans:1, exp:"Egoism (الأنانية الفلسفية) = الفعل الصح = ما يعظّم مصلحة الفرد الذاتية. فرع من Teleology. Utilitarianism يحرص على المصلحة الجماعية." },
  { ch:"ch3", q:"The famous statement \"Act as if the maxim of thy action were to become by thy will a universal law of nature\" is referred to as _______.", opts:["categorical imperative", "economic imperative", "philosophy of action", "rule of deontologists", "utilitarianism"], ans:0, exp:"Categorical Imperative = مقولة Kant الشهيرة. اختبار الكونية — إذا كنت تتصرف بطريقة تتمنى أن يتبعها الجميع، فالفعل أخلاقي." },
  { ch:"ch3", q:"Which of the following is defined as regard for certain behaviors as inherently right, and the determination of this rightness focuses on the individual actor, not on society?", opts:["Categorical imperative", "Nonconsequentialism", "Moral philosophy", "Consequentialism", "Utilitarianism"], ans:1, exp:"Nonconsequentialism = فئة من Deontology. بعض الأفعال صحيحة بطبيعتها، والحكم يركز على الفاعل الفردي لا المجتمع." },
  { ch:"ch3", q:"Economic value orientation is associated with which of the following?", opts:["The view that an external world exists independent of our perceptions", "Selling goods and services for immoral reasons", "Values quantified by monetary means", "Those who believe pleasure is better", "Doing things that are intrinsically good"], ans:2, exp:"Economic Value Orientation = قيم مقاسة بالوسائل النقدية. إذا أنتج الفعل قيمة اقتصادية أعلى، فهو أخلاقي وفق هذه النظرة." },
];

// ════════════════════════════════════════════════════════════════════
//  PAST EXAMS — تجميعات الأعوام السابقة (منفصلة عن Test Bank)
//  المصدر: ملفات PDF تجميعات حسام · يغطي Ch 5/6/7 فقط من المحتوى
// ════════════════════════════════════════════════════════════════════
window.PAST_EXAMS = [
  {
    id: 'mid-1444',
    label: 'ميد ادا 214 — 1444',
    instructor: 'أ. فاتن الرميح',
    note: 'الأسئلة المتعلقة بـ Mid 2 (Ch 5/6/7) من تجميع الميد الأول 1444',
    questions: [
      { ch:"ch1", q:"_______ is defined as a situation where the person is faced with multiple choices, all of which are undesirable as defined by the person.", opts:["Moral dilemma", "Health dilemma", "Philosophical dilemma", "Legal dilemma"], ans:0, exp:"Moral Dilemma (المعضلة الأخلاقية) = موقف يواجه الشخص فيه عدة خيارات كلها غير مرغوبة. مرادف لـ Ethical Dilemma — يختار الأقل ضرراً." },
      { ch:"ch2", q:"Employees who view their organizational culture as ethical are more likely to:", opts:["use their personal moral philosophies in decision making", "gain more organizational training", "make personal sacrifices for the organization", "ask for a raise"], ans:2, exp:"الموظفون الذين يرون الثقافة المؤسسية كأخلاقية أكثر استعداداً لتقديم تضحيات شخصية للمنظمة. مؤشر قوي على فاعلية الـ Ethical Culture." },
      { ch:"ch2", q:"Ethical culture is defined as:", opts:["Organizational principles, values, and norms that are adhered to by the company and its personnel.", "the establishment and enforcement of ethical codes throughout the organization.", "the codification of laws to reward organizations for taking action to prevent misconduct.", "the development of rules and norms that are socially enforced."], ans:0, exp:"Ethical Culture = المبادئ والقيم والمعايير التنظيمية التي تلتزم بها الشركة وموظفوها. أضيق نطاقاً من Corporate Culture الأشمل." },
      { ch:"ch1", q:"An ethical issue is a problem, situation, or opportunity _______.", opts:["that has no correct answer.", "requiring an individual, group, or organization to choose among several actions that must be evaluated as right or wrong, ethical or unethical.", "requiring an individual, group, or organization to choose between harming consumers or the environment and earning more profits.", "that harms the environment."], ans:1, exp:"Ethical Issue (القضية الأخلاقية) = مشكلة تتطلب من الفرد أو المجموعة أو المنظمة الاختيار بين أفعال متعددة يجب تقييمها كصح أو خطأ، أخلاقية أو غير أخلاقية." },
      { ch:"ch1", q:"An employee sorts through a competing business's trash to see if there are any documents that could reveal secret information. This is a misuse of:", opts:["a moral attribute", "corporate intelligence", "collusion", "puffery"], ans:1, exp:"Corporate Intelligence (الاستخبارات المؤسسية) = جمع معلومات السوق والمنافسين. البحث في القمامة (Dumpster Diving) سوء استخدام لهذه الأداة." },
      { ch:"ch1", q:"_______ is an important element of virtue and means being whole, sound, and in an unimpaired condition.", opts:["Optimization", "Trust", "Integrity", "Honesty"], ans:2, exp:"Integrity (النزاهة) = الكمال والسلامة. من أهم عناصر الفضيلة — تعني السلامة الأخلاقية الكاملة في القرارات." },
      { ch:"ch1", q:"Conflicts of interest exist when employees must choose whether to:", opts:["report an unethical coworker to outside authorities.", "advance the interests of the organization or those of society.", "advance their own personal interests, those of the organization, or those of some other group.", "communicate in ways that deceive, manipulate, or conceal facts in order to harm others."], ans:2, exp:"Conflict of Interest (تضارب المصالح) = الاختيار بين المصالح الشخصية، مصالح المنظمة، أو مصالح مجموعة أخرى. يجب فصل المصالح الخاصة عن قرارات العمل." },
      { ch:"ch1", q:"_______ is associated with a person who is crafty or understands right/wrong behavior but uses tricks to obtain an unfair advantage.", opts:["Shrinkage", "Guile", "Collusion", "Shoplifting"], ans:1, exp:"Guile (الدهاء/المكر) = شخص يفهم الصح والخطأ لكن يستخدم الحيل للميزة غير العادلة. نوع من Consumer Fraud." },
      { ch:"ch1", q:"Which of the following is NOT a side effect of being the victim of workplace bullying?", opts:["Sleep disturbance.", "Increased sick days.", "Depression.", "Corporate intelligence."], ans:3, exp:"Workplace Bullying آثاره: اضطراب النوم، زيادة الإجازات المرضية، الاكتئاب، القلق، انخفاض احترام الذات. Corporate Intelligence مفهوم منفصل." },
      { ch:"ch1", q:"_______ is associated with a hostile workplace where someone considered a target is threatened, harassed, belittled, or verbally abused.", opts:["Fraud", "Coercive power", "Dishonesty", "Bullying"], ans:3, exp:"Bullying (التنمر) = تهديد، مضايقة، تحقير، أو إيذاء لفظي لشخص مستهدف. يخلق Hostile Work Environment." },
      { ch:"ch1", q:"Which of the following is one of the three criteria that must be met to constitute a hostile work environment?", opts:["The conduct was unwelcome.", "The manager must be directly involved.", "Discrimination must be proven.", "The neighbor is unfriendly."], ans:0, exp:"معايير Hostile Work Environment الثلاثة: (1) السلوك غير مرحب به، (2) حاد ومتكرر ويغيّر ظروف العمل، (3) شخص عاقل سيراه عدائياً." },
      { ch:"ch1", q:"An interchange of giving and receiving in social relationships is known as:", opts:["integrity.", "honesty.", "reciprocity.", "optimization."], ans:2, exp:"Reciprocity (المعاملة بالمثل) = تبادل الأخذ والعطاء في العلاقات الاجتماعية. أحد العناصر الثلاثة للعدل: Equality, Reciprocity, Optimization." },
      { ch:"ch1", q:"A company can be sued for discrimination if it:", opts:["abuses or intimidates its employees.", "uses age as a hiring or firing criterion.", "discharges a minority individual, but has a just cause for doing so.", "creates an anticompetitive corporate culture."], ans:1, exp:"التمييز على أساس العمر (محمي بـ ADEA) ممنوع قانونياً في التوظيف والفصل. EEOC تحمي من التمييز في مكان العمل." },
      { ch:"ch1", q:"What type of fraudulent activity involves an employee who assists a consumer in fraud?", opts:["Collusion", "Guile", "Whacking", "Duplicity"], ans:0, exp:"Collusion (التواطؤ) في سياق Consumer Fraud = موظف يساعد المستهلك في ارتكاب الاحتيال. نوع شائع من احتيال المستهلك." },
      { ch:"ch1", q:"Creating a perception or belief by words that intentionally deceives someone is:", opts:["related to \"noise.\"", "related to lying by omission.", "related to lying by commission.", "related to what is defined as a \"white\" lie."], ans:2, exp:"Commission Lying (الكذب الفعلي) = خلق تصور أو اعتقاد بالألفاظ يخدع المستقبل عمداً. Omission Lying (الكذب بالإغفال) = إخفاء معلومات." },
      { ch:"ch1", q:"Examples of consumer fraud include shoplifting, collusion, guile, and duplicity.", opts:["True", "False"], ans:0, exp:"True — أنواع Consumer Fraud: Shoplifting (السرقة)، Collusion (تواطؤ موظف)، Guile (الدهاء)، Duplicity (تمثيل الحوادث)." },
      { ch:"ch1", q:"Developing ethical issue awareness is the first step toward understanding business ethics.", opts:["True", "False"], ans:0, exp:"True — Ethical Issue Awareness (الوعي بالقضايا الأخلاقية) هو الخطوة الأولى. بدون إدراك أن الموقف أخلاقي، لا يمكن اتخاذ قرار أخلاقي." }
    ]
  },
  {
    id: 'final-1443',
    label: 'فاينل ادا 214 — 1443',
    instructor: 'تجميع طلابي',
    note: 'الأسئلة المتعلقة بـ Mid 2 (Ch 6, 7) من تجميع الفاينل 1443 — جميع الإجابات صحيحة',
    questions: [
      { ch:"ch3", q:"A manager of an international company offers a facilitation payment to a governmental official in an African nation in order to secure a contract that will keep his company from going bankrupt and laying off hundreds of employees. The manager is trying to secure the greatest good for the greatest number of people, making him a(n) _______.", opts:["Egoist", "Utilitarian", "Relativist", "Deontologist"], ans:1, exp:"Utilitarian (النفعي) = يسعى للمصلحة الأعظم لأكبر عدد. الإفلاس وفقدان مئات الوظائف ضرر أكبر من دفع facilitation payment، إذاً المدير اتبع منطقاً نفعياً." },
      { ch:"ch3", q:"_______ emphasize the means and motives by which actions are justified, and are divided into the categories of teleology and deontology.", opts:["Qualitative hedonists", "Obligation theories", "Goodness theories", "Quantitative hedonist"], ans:1, exp:"Obligation Theories (نظريات الواجب) = تركز على الوسائل والدوافع. تنقسم إلى Teleology (نتائج) و Deontology (حقوق). Goodness Theories تركز على النتيجة النهائية." },
      { ch:"ch2", q:"An example of a condition that fails to erect barriers against unethical behavior is a company policy that does not punish employees who accept large gifts from clients. The absence of punishment provides which of the following?", opts:["Reason", "Ethical issue intensity", "Individual factor", "Opportunity"], ans:3, exp:"Opportunity (الفرصة) = الظروف التي تحد أو تسمح بالسلوك غير الأخلاقي. غياب العقاب يوفر الفرصة. تُردع بالقواعد والسياسات الرسمية." },
      { ch:"ch3", q:"_______ argues that ethical behavior involves not only adhering to conventional moral standards but also considering what a mature person with a \"good\" moral character would deem appropriate in a given situation.", opts:["Interactional justice", "Virtue ethics", "Procedural justice", "Distributive justice"], ans:1, exp:"Virtue Ethics (أخلاق الفضيلة) = ما يراه شخص ناضج ذو شخصية أخلاقية جيدة مناسباً. تُطبَّق استقرائياً، عكس Deontology و Teleology اللتان تُطبقان استنتاجياً." },
      { ch:"ch3", q:"When a person centers on one's long-term self-interest but takes others' well-being into account, he/she is a(n) _______.", opts:["hedonist", "enlightened egoists", "egoist", "relativist"], ans:1, exp:"Enlightened Egoist (الأناني المستنير) = منظور طويل المدى يأخذ في الاعتبار رفاهية الآخرين، لكن المصلحة الذاتية تبقى الأهم. أكثر اعتدالاً من Pure Egoism." },
      { ch:"ch2", q:"The relevance or importance of an event or decision in the eyes of the individual, work group, and/or organization represents _______.", opts:["Ethical issue intensity", "Value intensity", "Moral intensity", "Ethical awareness"], ans:0, exp:"Ethical Issue Intensity = أهمية الحدث في نظر الفرد ومجموعة العمل والمنظمة. شخصي ومرتبط بالموقف. Moral Intensity = تصور الضغط الاجتماعي والضرر." },
      { ch:"ch2", q:"The ethical decision-making model will be able to tell you whether a decision is ethical or unethical.", opts:["True", "False"], ans:1, exp:"False — النموذج لا يحدد إذا كان القرار أخلاقياً أم لا، بل يوفر رؤى حول العوامل المؤثرة. الأخلاق تتطلب أحكاماً قيمية واتفاقاً جماعياً." },
      { ch:"ch3", q:"Which moral philosophy argues that general rules should be followed to decide which action is best?", opts:["Act utilitarianism", "Rule utilitarianism", "Rule deontology", "Act deontology"], ans:1, exp:"Rule Utilitarianism (النفعية القاعدية) = اتبع القواعد العامة التي تنتج أعظم منفعة. Act Utilitarianism = قيّم كل فعل فردياً لمنفعته." },
      { ch:"ch2", q:"Institutions are important in establishing a foundation for normative values.", opts:["True", "False"], ans:0, exp:"True — المؤسسات (الحكومة، الدين، التعليم، العائلة) أساس بناء القيم المعيارية. Institutional Theory تفسر هذا — المنظمات تعمل وفق معايير مؤسسية مسلَّم بها." },
      { ch:"ch2", q:"Individual factors effecting the decision-making process include all the following except _______.", opts:["Age", "Gender", "Education", "Significant others"], ans:3, exp:"Individual Factors: Gender, Education, Nationality, Age, Locus of Control. Significant Others = عامل تنظيمي وليس فردي (الزملاء والمدراء)." },
      { ch:"ch3", q:"A production manager who orders that a manufacturing plant be refitted to make it safer for workers, no matter what the cost because the manager believes in the rights of all individuals, may be considered a deontologist.", opts:["True", "False"], ans:0, exp:"True — Deontologist يركز على حقوق الأفراد والنوايا، بغض النظر عن النتائج (التكلفة). إعطاء الأولوية لحقوق العمال في السلامة بصرف النظر عن التكلفة = موقف deontological." },
      { ch:"ch2", q:"Normative approaches focuses on _______.", opts:["positive outcome", "models that depict \"if/then\".", "how organizational decision-makers should approach an issue.", "methods of adopting values and norms"], ans:2, exp:"Normative Approaches = كيف يجب على صانعي القرار التعامل مع القضية (المثالي). Descriptive Approaches تختلف — تصف كيف يتعاملون فعلاً." },
      { ch:"ch3", q:"Which Philosophy evaluates ethicalness subjectively on the basis of individual and group experiences?", opts:["Teleology", "Utilitarianism", "Relativist", "Egoism"], ans:2, exp:"Relativist Perspective (المنظور النسبي) = تعريفات السلوك الأخلاقي تأتي ذاتياً من تجارب الأفراد والمجموعات. لا يوجد طريقة موضوعية لحل النزاعات الأخلاقية." },
      { ch:"ch3", q:"_______ is based on the evaluation of the outcomes or results of a business relationship.", opts:["Moral justice", "Distributive justice", "Interactional justice", "Procedural justice"], ans:1, exp:"Distributive Justice (العدالة التوزيعية) = تقييم النتائج أو حصيلة العلاقة التجارية. Procedural = تقييم الإجراءات. Interactional = تقييم العلاقات الشخصية والاحترام." },
      { ch:"ch2", q:"According to the ethical decision-making framework, the more education people have, the better they are at making ethical decisions.", opts:["True", "False"], ans:0, exp:"True — التعليم عامل فردي مهم. كلما زاد التعليم أو الخبرة العملية، تحسنت قدرة الفرد على اتخاذ القرارات الأخلاقية." },
      { ch:"ch2", q:"People who believe that they control the events in their lives by their own effort and skill have _______.", opts:["external locus of control", "internal locus of control", "ethical decision-making abilities", "good moral compass"], ans:1, exp:"Internal Locus of Control = يؤمنون أنهم يتحكمون بحياتهم بجهدهم ومهارتهم. External = يرون الأحداث بسبب قوى خارجية لا يتحكمون فيها." },
      { ch:"ch2", q:"_______ has been found to decrease unethical practices and increase positive work behavior.", opts:["A charismatic leadership", "The existences of good personal values or morals", "A strong religious belief", "A high level of educational attainment"], ans:1, exp:"وجود قيم وأخلاق شخصية جيدة هو الأكثر فاعلية في تقليل السلوك غير الأخلاقي — أكثر من التعليم أو المشاركة المجتمعية أو الدين." },
      { ch:"ch3", q:"The belief that no one thing is intrinsically good is defined as hedonism.", opts:["True", "False"], ans:1, exp:"False — هذا تعريف Pluralism (التعددية)/Nonhedonism. Hedonism (المتعية) = اللذة هي الخير المطلق. Plato من أبرز الـ Pluralists." }
    ]
  },
  {
    id: 'final-441',
    label: 'فاينل ادا 214 — 441',
    instructor: 'تجميع طلابي',
    note: 'الأسئلة المتعلقة بـ Mid 2 (Ch 5, 6) من تجميع الفاينل 441',
    questions: [
      { ch:"ch2", q:"Organizational culture is defined as the perceived relevance or importance of an ethical issue to the individual, work group, or organization.", opts:["True", "False"], ans:1, exp:"False — هذا تعريف Ethical Issue Intensity. Organizational Culture = القيم والمعايير المشتركة التي تؤثر على الموظفين وتحدد سلوكهم." },
      { ch:"ch3", q:"According to Kohlberg's model, as a person progresses through the stages of moral development, and with time, education, and experience, he/she may change his/her cognitive moral development and behavior.", opts:["True", "False"], ans:0, exp:"True — نموذج Kohlberg له 6 مراحل من التطور المعرفي الأخلاقي. الوقت والتعليم والخبرة يدفعون الفرد للارتقاء بين المراحل." },
      { ch:"ch3", q:"Teleological philosophies are often referred to as nonconsequentialism.", opts:["True", "False"], ans:1, exp:"False — Teleology = Consequentialism (تركز على النتائج). Nonconsequentialism = Deontology (تركز على الحقوق والنوايا، لا النتائج)." },
      { ch:"ch2", q:"High levels of competition create a higher probability that firms cut corners because margins are usually low.", opts:["True", "False"], ans:0, exp:"True — Industry Competition عامل ضغط. المنافسة الشديدة تقلل الهوامش وتدفع الشركات لاختصار الطرق ربما بشكل غير أخلاقي." },
      { ch:"ch3", q:"Just because bribery is okay in some cultures does not mean that other cultures cannot rightfully condemn it, is an example for Relativist Perspective.", opts:["True", "False"], ans:0, exp:"True — هذا منطق نسبي (Relativist) — كل ثقافة تقيّم بناءً على تجاربها وقيمها. ما هو مقبول في ثقافة قد يكون مرفوضاً في أخرى، والكل صحيح من منظوره." },
      { ch:"ch2", q:"Unlike education level, ethical decision making differ among individuals of different ages.", opts:["True", "False"], ans:0, exp:"True — السن له علاقة معقدة بالقرارات الأخلاقية. الخبرة تساعد الموظفين الأكبر سناً، بينما الأصغر متأثرون أكثر بالثقافة المؤسسية." },
      { ch:"ch3", q:"Interactional justice refers to implementing legal decisions in accordance with fair and unbiased processes.", opts:["True", "False"], ans:1, exp:"False — هذا تعريف Procedural Justice. Interactional Justice = العلاقات بين أعضاء المنظمة ومعاملتهم باحترام." },
      { ch:"ch3", q:"Egoism defines ethical behavior subjectively from the unique experiences of individuals and groups.", opts:["True", "False"], ans:1, exp:"False — هذا تعريف Relativism. Egoism = الفعل الأخلاقي = ما يعظّم المصلحة الذاتية للفرد." },
      { ch:"ch2", q:"Social institutions include religion, education, and individuals such as the family unit.", opts:["True", "False"], ans:0, exp:"True — المؤسسات الاجتماعية = الدين، التعليم، العائلة. تختلف عن الاقتصادية (الأسواق، الشركات) والسياسية (الحكومة)." },
      { ch:"ch3", q:"Sara is a software engineer and learn that a nuclear missile is about to launch that might start a war. She can hack the network and cancel the launch, but it is against her professional code of ethics to break into any software system without permission. Which moral philosophy advises not to violate these rules?", opts:["humanitarian.", "deontologist.", "utilitarian.", "relativist."], ans:1, exp:"Deontologist يحترم الحقوق والقواعد بصرف النظر عن النتائج. مدونة أخلاقيات المهنة قاعدة لا يجب انتهاكها حتى لو كانت النتيجة (منع الحرب) أعظم. Utilitarian سيفعل العكس." },
      { ch:"ch2", q:"_______ involves subordinates simply following the directives of a superior without question. It demonstrates the influence that significant others can exert in the workplace.", opts:["Obedience to authority", "Locus of control", "Opportunity", "Immediate job context"], ans:0, exp:"Obedience to Authority (الطاعة للسلطة) = اتباع توجيهات الرئيس بدون تساؤل. سبب شائع لحل قضايا الأخلاقيات يمكن أن يكون سلبياً." },
      { ch:"ch3", q:"Most people would agree that lying is wrong, but if telling a lie would help save a person's life, which moral philosophy says it is the right thing to do.", opts:["Teleology.", "Deontology.", "The relativist perspective.", "Ethical formalism."], ans:0, exp:"Teleology (النتائجية) تقيّم الفعل بنتائجه. لو الكذب أنقذ حياة، النتيجة الإيجابية تبرر الفعل. Deontology تختلف — الكذب خطأ في ذاته." },
      { ch:"ch3", q:"A person who offers a facilitation payment in order to secure a contract that will keep her company from going bankrupt and laying off hundreds of employees may be a(n) _______ because she is trying to secure the greatest good for the greatest number of people.", opts:["relativist", "deontologist", "utilitarian", "humanitarian"], ans:2, exp:"Utilitarian = أعظم منفعة لأكبر عدد. حماية مئات الوظائف منفعة جماعية كبيرة تبرر الـ facilitation payment من المنظور النفعي." },
      { ch:"ch2", q:"_______ is the ability to perceive whether a situation or decision has an ethical dimension.", opts:["Ethical issue intensity", "Ethical awareness", "Opportunity", "Moral intensity"], ans:1, exp:"Ethical Awareness (الوعي الأخلاقي) = القدرة على إدراك أن الموقف له بعد أخلاقي. الخطوة الأولى قبل تقييم Ethical Issue Intensity." },
      { ch:"ch1", q:"Which of the following is true about the U.K. Bribery Act?", opts:["It allows for small facilitation payments.", "It only applies to companies headquartered in the United Kingdom.", "It is not as stringent as the Foreign Corrupt Practices Act.", "It classifies bribes among businesspeople to be illegal."], ans:3, exp:"U.K. Bribery Act أصرم من FCPA الأمريكي — يصنّف الرشوة بين رجال الأعمال (مش فقط بين رجال الأعمال والمسؤولين الحكوميين) كجريمة. لا يسمح بـ facilitation payments." },
      { ch:"ch3", q:"_______ are person-specific, whereas _______ are based on decisions made by groups or when carrying out tasks to meet business objectives.", opts:["Moral philosophies; business ethics", "Codes of conduct; individual factors", "Individual factors; codes of conduct", "Business ethics; moral philosophies"], ans:0, exp:"Moral Philosophies (الفلسفات الأخلاقية) شخصية وفردية. Business Ethics (أخلاقيات الأعمال) جماعية — تستند إلى قرارات المجموعات أو تنفيذ المهام لأهداف العمل." },
      { ch:"ch1", q:"Raul's United Kingdom manager approved a small amount of money to be paid to a Mexican official in order to get a building permits in quick fashion. This is an example of:", opts:["When in Rome, do as the Romans do.", "An illegal practice of bribery.", "Cultural relativism.", "Grease payments."], ans:1, exp:"وفق U.K. Bribery Act، أي دفعة لمسؤول أجنبي حتى لو لتسريع إجراء روتيني = رشوة غير قانونية. القانون البريطاني لا يسمح بـ facilitation payments." },
      { ch:"ch2", q:"_______ is the first sign that an unethical decision has occurred.", opts:["Guilt", "Reward", "Punishment", "Cognitive dissonance"], ans:0, exp:"Guilt (الشعور بالذنب) = أول إشارة على اتخاذ قرار غير أخلاقي. عندما تتعارض النية والسلوك مع الحكم الأخلاقي، يشعر الناس بالذنب." }
    ]
  }
];


// ══════════════════════════════════════════════════════════════
//  APPLY OVERRIDES — runs after scripts.js has defined the consts
// ══════════════════════════════════════════════════════════════
(function applyMid2Data() {
  function replaceArray(arr, newItems) {
    if (!arr) return;
    arr.length = 0;
    for (let i = 0; i < newItems.length; i++) arr.push(newItems[i]);
  }
  function run() {
    try {
      if (typeof flashCards !== 'undefined') replaceArray(flashCards, MID2_FLASHCARDS);
      if (typeof allQuizQ   !== 'undefined') replaceArray(allQuizQ,   MID2_TESTBANK);
      if (typeof mockBank   !== 'undefined') replaceArray(mockBank,   MID2_TESTBANK);
      if (typeof testBankQ  !== 'undefined') replaceArray(testBankQ,  MID2_TESTBANK);
      // Update dynamic UI counters
      try {
        var fcLabel = document.getElementById('fc-count-label');
        if (fcLabel) fcLabel.textContent = MID2_FLASHCARDS.length + ' Key Terms';
        var fcAllBtn = document.getElementById('fc-filter-all');
        if (fcAllBtn) fcAllBtn.textContent = 'All (' + MID2_FLASHCARDS.length + ')';
        // Update chapter-specific counts inside the buttons if labels are used
        ['ch1', 'ch2', 'ch3'].forEach(function(ch) {
          var n = MID2_FLASHCARDS.filter(function(c){ return c.ch === ch; }).length;
          var label = { ch1: 'Ch 5', ch2: 'Ch 6', ch3: 'Ch 7' }[ch];
          var btn = document.querySelector('.fc-filter-btn[data-fc="' + ch + '"]');
          if (btn && label) {
            // Keep existing SVG, just update trailing text
            var svg = btn.querySelector('svg');
            btn.textContent = '';
            if (svg) btn.appendChild(svg);
            btn.appendChild(document.createTextNode(' ' + label + ' (' + n + ')'));
          }
        });
      } catch (e) {}
    } catch (e) {
      console.error('[mid2_data] override failed', e);
    }
  }
  // scripts.js is loaded synchronously AFTER this file; run() must wait
  // until its top-level const declarations have executed.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    setTimeout(run, 0);
  }
})();

// ══════════════════════════════════════════════════════════════
//  MID 2 UX PATCHES (items 1-6)
//  All gated behind isMid2 — Mid 1 is unaffected.
//  Content rendered here comes from the trusted in-repo question
//  bank (MID2_TESTBANK); no user-supplied HTML is used.
// ══════════════════════════════════════════════════════════════
(function mid2UxPatches() {
  function isMid2() {
    return !!(document.body && document.body.dataset && document.body.dataset.mid === '2');
  }

  function el(tag, props, children) {
    var e = document.createElement(tag);
    if (props) {
      for (var k in props) {
        if (k === 'style') e.style.cssText = props[k];
        else if (k === 'className') e.className = props[k];
        else if (k === 'text') e.textContent = props[k];
        else if (k === 'onclick') e.onclick = props[k];
        else e.setAttribute(k, props[k]);
      }
    }
    if (children) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (c == null) continue;
        if (typeof c === 'string') e.appendChild(document.createTextNode(c));
        else e.appendChild(c);
      }
    }
    return e;
  }

  function shuffledDisp(q) {
    // Render-time option shuffle that remaps ans to new index.
    if (!q || !q.opts) return null;
    if (q.opts.length <= 2) {
      return { opts: q.opts.slice(), ans: q.ans, indices: q.opts.map(function(_, i) { return i; }) };
    }
    var idx = q.opts.map(function(_, i) { return i; });
    for (var k = idx.length - 1; k > 0; k--) {
      var j = Math.floor(Math.random() * (k + 1));
      var t = idx[k]; idx[k] = idx[j]; idx[j] = t;
    }
    var newOpts = idx.map(function(i) { return q.opts[i]; });
    return { opts: newOpts, ans: idx.indexOf(q.ans), indices: idx };
  }

  function applyPatches() {
    if (!isMid2()) return;

    // ─────────────────────────────────────────────────────────
    // [1] Cap wrong-answer repeats at 2 attempts in Quiz
    // ─────────────────────────────────────────────────────────
    if (typeof window.handleQuizAnswer === 'function' && !window._mid2QuizPatched) {
      var origHandleQuizAnswer = window.handleQuizAnswer;
      window.handleQuizAnswer = function(chosen) {
        var q = (typeof quizQs !== 'undefined') ? quizQs[quizIdx] : null;
        var prevLen = (typeof quizQs !== 'undefined') ? quizQs.length : 0;
        var result = origHandleQuizAnswer.apply(this, arguments);
        try {
          if (q && typeof quizQs !== 'undefined' && quizQs.length > prevLen) {
            if ((q._retryCount || 0) >= 1) {
              for (var i = quizQs.length - 1; i > quizIdx; i--) {
                if (quizQs[i] && quizQs[i].q === q.q && quizQs[i]._isRetry) {
                  quizQs.splice(i, 1);
                  break;
                }
              }
              var fb = document.getElementById('quiz-feedback');
              if (fb && fb.className && fb.className.indexOf('wrong') !== -1) {
                fb.textContent = '❌ الإجابة الصحيحة — لا مزيد من المحاولات';
              }
            }
          }
        } catch (e) { console.warn('[mid2] quiz retry cap failed', e); }
        return result;
      };
      window._mid2QuizPatched = true;
    }

    // ─────────────────────────────────────────────────────────
    // [2] Shuffle options on Mock render
    // ─────────────────────────────────────────────────────────
    if (typeof window.renderMockQ === 'function' && !window._mid2MockShufflePatched) {
      var origRenderMockQ = window.renderMockQ;
      window.renderMockQ = function() {
        try {
          if (typeof mockQs !== 'undefined' && mockIdx < mockQs.length) {
            var q = mockQs[mockIdx];
            if (q && !q._mid2Disp) {
              q._mid2Disp = shuffledDisp(q);
              q._origOpts = q.opts;
              q._origAns  = q.ans;
              q.opts = q._mid2Disp.opts;
              q.ans  = q._mid2Disp.ans;
            }
          }
        } catch (e) { console.warn('[mid2] mock shuffle failed', e); }
        return origRenderMockQ.apply(this, arguments);
      };
      if (typeof window.endMock === 'function') {
        var origEndMock = window.endMock;
        window.endMock = function() {
          try {
            if (typeof mockAnswers !== 'undefined') {
              mockAnswers.forEach(function(a) {
                if (a && a.q && a.q._mid2Disp) {
                  a.chosen = a.q._mid2Disp.indices[a.chosen];
                }
              });
            }
            if (typeof mockQs !== 'undefined') {
              mockQs.forEach(function(q) {
                if (q && q._origOpts) {
                  q.opts = q._origOpts;
                  q.ans  = q._origAns;
                  delete q._origOpts;
                  delete q._origAns;
                  delete q._mid2Disp;
                }
              });
            }
          } catch (e) { console.warn('[mid2] endMock restore failed', e); }
          return origEndMock.apply(this, arguments);
        };
      }
      window._mid2MockShufflePatched = true;
    }

    // ─────────────────────────────────────────────────────────
    // [3] Auto-scroll to top of testbank question card
    // ─────────────────────────────────────────────────────────
    if (typeof window.renderTBQuestion === 'function' && !window._mid2TBScrollPatched) {
      var origRenderTBQuestion = window.renderTBQuestion;
      window.renderTBQuestion = function() {
        var r = origRenderTBQuestion.apply(this, arguments);
        try {
          var area = document.getElementById('tb-quiz-area');
          if (area) {
            requestAnimationFrame(function() {
              try { area.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {}
            });
          }
        } catch (e) {}
        return r;
      };
      window._mid2TBScrollPatched = true;
    }

    // ─────────────────────────────────────────────────────────
    // [3b] Auto-scroll to top of quiz question card
    // ─────────────────────────────────────────────────────────
    if (typeof window.renderQuizQ === 'function' && !window._mid2QuizScrollPatched) {
      var origRenderQuizQ = window.renderQuizQ;
      window.renderQuizQ = function() {
        var r = origRenderQuizQ.apply(this, arguments);
        try {
          var area = document.getElementById('quiz-game-screen');
          if (area) {
            requestAnimationFrame(function() {
              try { area.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {}
            });
          }
        } catch (e) {}
        return r;
      };
      window._mid2QuizScrollPatched = true;
    }

    // ─────────────────────────────────────────────────────────
    // [4] Mock Exam length picker (10 / 20 / 30 / 60)
    // ─────────────────────────────────────────────────────────
    if (typeof window.startMock === 'function' && !window._mid2MockLenPatched) {
      window._mid2MockCount = 30;
      var origStartMock = window.startMock;
      window.startMock = function() {
        var count = window._mid2MockCount || 30;
        var r = origStartMock.apply(this, arguments);
        try {
          if (typeof mockQs !== 'undefined' && Array.isArray(mockQs)) {
            if (mockQs.length > count) {
              mockQs.length = count;
            } else if (mockQs.length < count && typeof mockBank !== 'undefined') {
              var extra = mockBank.slice().sort(function() { return Math.random() - 0.5; });
              var existing = new Set(mockQs.map(function(q) { return q.q; }));
              for (var i = 0; i < extra.length && mockQs.length < Math.min(count, mockBank.length); i++) {
                if (!existing.has(extra[i].q)) mockQs.push(extra[i]);
              }
            }
            var counter = document.getElementById('mock-counter');
            if (counter) counter.textContent = 'Q 1 / ' + mockQs.length;
          }
        } catch (e) { console.warn('[mid2] mock length patch failed', e); }
        return r;
      };

      function injectMockPicker() {
        var startScreen = document.getElementById('mock-start-screen');
        if (!startScreen || document.getElementById('mid2-mock-picker')) return;
        var startBtn = startScreen.querySelector('button[onclick*="startMock"]');
        if (!startBtn) return;
        var wrap = el('div', {
          id: 'mid2-mock-picker',
          style: 'margin:14px auto 18px;max-width:360px;display:flex;flex-direction:column;gap:8px;'
        });
        wrap.appendChild(el('div', {
          style: 'font-size:.82rem;font-weight:700;color:var(--muted);text-align:center;',
          text: 'اختر عدد الأسئلة'
        }));
        var btnRow = el('div', {
          style: 'display:flex;gap:8px;justify-content:center;flex-wrap:wrap;'
        });
        wrap.appendChild(btnRow);
        startBtn.parentNode.insertBefore(wrap, startBtn);
        [10, 20, 30, 60].forEach(function(n) {
          var b = el('button', {
            type: 'button',
            text: String(n),
            style: 'padding:10px 18px;border-radius:10px;border:1.5px solid var(--line);background:var(--paper);color:var(--ink);font-weight:700;font-size:.95rem;cursor:pointer;font-family:inherit;min-width:64px;transition:all .15s;'
          });
          b.onclick = function() {
            window._mid2MockCount = n;
            var all = btnRow.querySelectorAll('button');
            for (var i = 0; i < all.length; i++) {
              all[i].style.background = 'var(--paper)';
              all[i].style.color = 'var(--ink)';
              all[i].style.borderColor = 'var(--line)';
            }
            b.style.background = 'var(--accent, #2563EB)';
            b.style.color = '#fff';
            b.style.borderColor = 'var(--accent, #2563EB)';
          };
          btnRow.appendChild(b);
          if (n === 30) b.onclick();
        });
      }
      injectMockPicker();
      document.addEventListener('click', function() {
        setTimeout(injectMockPicker, 50);
      }, true);
      window._mid2MockLenPatched = true;
    }

    // ─────────────────────────────────────────────────────────
    // [5] "My Wrong Questions" bank — Mid 2 namespaced storage
    // ─────────────────────────────────────────────────────────
    if (!window._mid2WrongQsPatched) {
      var MID2_KEY = 'bus214_mid2_wrongQs';

      function loadMid2Wrongs() {
        try { return JSON.parse(localStorage.getItem(MID2_KEY) || '[]'); }
        catch (e) { return []; }
      }
      function saveMid2Wrongs(list) {
        try { localStorage.setItem(MID2_KEY, JSON.stringify(list)); } catch (e) {}
      }

      window.saveWrongAnswer = function(q, chosen) {
        if (!q) return;
        var list = loadMid2Wrongs();
        if (list.some(function(w) { return w.question === q.q; })) {
          updateWrongBadge();
          return;
        }
        var opts = q._origOpts || q.opts;
        var ans  = (typeof q._origAns === 'number') ? q._origAns : q.ans;
        var origChosen = chosen;
        if (q._mid2Disp && q._mid2Disp.indices && typeof chosen === 'number') {
          origChosen = q._mid2Disp.indices[chosen];
        }
        list.push({
          question: q.q,
          opts: opts,
          correct: ans,
          chosen: origChosen,
          ch: q.ch,
          date: new Date().toISOString()
        });
        if (list.length > 200) list.splice(0, list.length - 200);
        saveMid2Wrongs(list);
        updateWrongBadge();
      };

      window.clearWrongAnswers = function() {
        saveMid2Wrongs([]);
        if (typeof window.renderWrongReview === 'function') window.renderWrongReview();
        updateWrongBadge();
      };

      window.renderWrongReview = function() {
        var container = document.getElementById('wrong-review-list');
        if (!container) return;
        // Clear safely
        while (container.firstChild) container.removeChild(container.firstChild);
        var wrongs = loadMid2Wrongs();
        if (wrongs.length === 0) {
          var empty = el('div', {
            style: 'text-align:center;padding:40px 20px;color:var(--muted);'
          }, [
            el('p', { style: 'font-weight:600;font-size:1rem;', text: 'ما فيه أخطاء بعد!' }),
            el('p', { style: 'font-size:.82rem;', text: 'حل كويز أو اختبار تجريبي وبترجع هنا أسئلتك الغلط' })
          ]);
          container.appendChild(empty);
          updateWrongBadge();
          return;
        }
        var letters = ['A','B','C','D','E'];
        // Chapter breakdown bars
        try {
          var chCounts = {};
          wrongs.forEach(function(w){ var c = (w.ch || '').toString().toLowerCase(); chCounts[c] = (chCounts[c] || 0) + 1; });
          var chList = ['ch1', 'ch2', 'ch3'];
          var chLabels = { ch1: 'Ch 5 — Ethical Issues', ch2: 'Ch 6 — Decision Framework', ch3: 'Ch 7 — Moral Philosophy' };
          var maxCount = 1;
          chList.forEach(function(c){ if ((chCounts[c] || 0) > maxCount) maxCount = chCounts[c]; });
          var breakWrap = el('div', { style: 'background:var(--bg);border:1.5px solid var(--line);border-radius:14px;padding:16px;margin-bottom:16px;' });
          breakWrap.appendChild(el('div', { style: 'font-weight:700;font-size:.92rem;margin-bottom:12px;', text: '📊 الفصول اللي تحتاج تركيز' }));
          chList.forEach(function(c) {
            var n = chCounts[c] || 0;
            var pct = Math.round((n / maxCount) * 100);
            var barColor = n === 0 ? 'var(--good)' : (n > maxCount * 0.6 ? 'var(--destructive,#DC2626)' : 'var(--cta,#F59E0B)');
            var row = el('div', { style: 'margin-bottom:10px;' });
            var labelRow = el('div', { style: 'display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;font-size:.82rem;' });
            labelRow.appendChild(el('span', { style: 'font-weight:600;', text: chLabels[c] || c }));
            labelRow.appendChild(el('span', { style: 'color:var(--muted);font-weight:700;', text: n + ' خطأ' }));
            row.appendChild(labelRow);
            var track = el('div', { style: 'height:8px;background:var(--line);border-radius:99px;overflow:hidden;' });
            track.appendChild(el('div', { style: 'height:100%;width:' + pct + '%;background:' + barColor + ';border-radius:99px;transition:width .4s;' }));
            row.appendChild(track);
            breakWrap.appendChild(row);
          });
          container.appendChild(breakWrap);
        } catch (e) {}
        container.appendChild(el('div', {
          style: 'font-size:.85rem;color:var(--muted);margin-bottom:16px;',
          text: '📌 عدد أسئلتي الخطأ: ' + wrongs.length
        }));
        wrongs.slice().reverse().forEach(function(w) {
          var card = el('div', {
            className: 'wrong-review-card',
            style: 'background:var(--bg);border:1.5px solid var(--line);border-radius:14px;padding:16px;margin-bottom:12px;'
          });
          card.appendChild(el('div', {
            style: 'font-size:.72rem;color:var(--muted);margin-bottom:6px;',
            text: String(w.ch || '').toUpperCase() + ' · ' + new Date(w.date).toLocaleDateString()
          }));
          card.appendChild(el('div', {
            style: 'font-weight:700;margin-bottom:10px;line-height:1.6;',
            text: w.question
          }));
          (w.opts || []).forEach(function(opt, j) {
            var isCorrect = j === w.correct;
            var isChosen  = j === w.chosen;
            var style = 'padding:8px 12px;border-radius:8px;margin-bottom:4px;font-size:.88rem;';
            if (isCorrect) style += 'background:rgba(5,150,105,0.12);border:1px solid rgba(5,150,105,0.3);color:var(--good);font-weight:700;';
            else if (isChosen) style += 'background:rgba(220,38,38,0.08);border:1px solid rgba(220,38,38,0.2);color:var(--destructive,#DC2626);text-decoration:line-through;';
            else style += 'color:var(--muted);';
            card.appendChild(el('div', {
              style: style,
              text: letters[j] + '. ' + opt + (isCorrect ? ' ✓' : '')
            }));
          });
          container.appendChild(card);
        });
        updateWrongBadge();
      };

      function updateWrongBadge() {
        try {
          var n = loadMid2Wrongs().length;
          var link = document.querySelector('a[onclick*="page-wrong-review"]');
          if (!link) return;
          var badge = link.querySelector('.mid2-wrong-badge');
          if (n > 0) {
            if (!badge) {
              badge = el('span', {
                className: 'mid2-wrong-badge',
                style: 'display:inline-block;margin-right:6px;background:#DC2626;color:#fff;font-size:.7rem;font-weight:800;padding:2px 8px;border-radius:999px;min-width:20px;text-align:center;'
              });
              link.appendChild(badge);
            }
            badge.textContent = String(n);
            link.style.opacity = '1';
          } else {
            if (badge) badge.remove();
            link.style.opacity = '0.55';
          }
        } catch (e) {}
      }
      updateWrongBadge();
      window._mid2WrongQsPatched = true;
    }

    // ─────────────────────────────────────────────────────────
    // [6] English + Arabic explanation on wrong answer
    // ─────────────────────────────────────────────────────────
    function enhanceFeedback(fbId, optLetter, optText, expText, qObj) {
      var fb = document.getElementById(fbId);
      if (!fb) return;
      while (fb.firstChild) fb.removeChild(fb.firstChild);
      var wrongDiv = el('div', { text: '❌ إجابة خاطئة' });
      wrongDiv.style.marginBottom = '4px';
      fb.appendChild(wrongDiv);
      var correctDiv = el('div', { text: '✅ الصحيح: ' + optLetter + '. ' + (optText || '') });
      correctDiv.style.marginBottom = (expText || qObj) ? '8px' : '0';
      correctDiv.style.fontWeight = '700';
      fb.appendChild(correctDiv);
      if (expText) {
        var expDiv = document.createElement('div');
        expDiv.textContent = expText;
        expDiv.style.cssText = 'font-size:.85rem;font-weight:400;background:var(--paper,#fff);border:1px solid var(--line,#e5e7eb);border-radius:10px;padding:10px 14px;line-height:1.7;text-align:right;direction:rtl;';
        fb.appendChild(expDiv);
      } else if (qObj && qObj.q) {
        // Auto-generate a helpful contextual note (DOM-based, no HTML injection)
        var auto = buildAutoExplanationEl(qObj, optText);
        if (auto) fb.appendChild(auto);
      }
      fb.style.whiteSpace = 'normal';
      fb.style.lineHeight = '1.7';
    }
    // Build a contextual explanation using DOM methods (XSS-safe)
    function buildAutoExplanationEl(q, correctText) {
      if (!q || !correctText) return null;
      var chLabel = '';
      if (q.ch === 'ch1') chLabel = 'Ch 5 — Ethical Issues';
      else if (q.ch === 'ch2') chLabel = 'Ch 6 — Decision Framework';
      else if (q.ch === 'ch3') chLabel = 'Ch 7 — Moral Philosophy';
      var qLower = q.q.toLowerCase();
      var wrap = document.createElement('div');
      wrap.style.cssText = 'font-size:.82rem;font-weight:400;background:var(--accent-soft,#DBEAFE);border:1px solid var(--accent,#2563EB);border-radius:10px;padding:10px 14px;line-height:1.7;text-align:right;direction:rtl;margin-top:8px;';
      var b = document.createElement('strong');
      if (qLower.indexOf('best describes') !== -1 || qLower.indexOf('defined as') !== -1 || qLower.indexOf('refers to') !== -1) {
        b.textContent = '💡 التعريف الصحيح: ';
        wrap.appendChild(b);
        wrap.appendChild(document.createTextNode('"' + correctText + '"'));
      } else if (qLower.indexOf('true') !== -1 && qLower.indexOf('false') !== -1) {
        b.textContent = '💡 الحقيقة: ';
        wrap.appendChild(b);
        wrap.appendChild(document.createTextNode(correctText === 'True' ? 'العبارة صحيحة ✓' : 'العبارة خاطئة ✗'));
      } else {
        b.textContent = '💡 راجع من: ';
        wrap.appendChild(b);
        wrap.appendChild(document.createTextNode(chLabel || 'الكتاب'));
        wrap.appendChild(document.createElement('br'));
        wrap.appendChild(document.createTextNode('الإجابة: "' + correctText + '"'));
      }
      return wrap;
    }

    if (typeof window.handleQuizAnswer === 'function' && !window._mid2QuizFbPatched) {
      var _origQFA = window.handleQuizAnswer;
      window.handleQuizAnswer = function(chosen) {
        var r = _origQFA.apply(this, arguments);
        try {
          var q = (typeof quizQs !== 'undefined') ? quizQs[quizIdx] : null;
          if (!q) return r;
          var disp = q._disp || { opts: q.opts, ans: q.ans, indices: q.opts.map(function(_, i) { return i; }) };
          if (chosen !== disp.ans) {
            var letters = ['A','B','C','D','E'];
            var expText = Array.isArray(q.exp) ? q.exp[q.ans] : (typeof q.exp === 'string' ? q.exp : null);
            enhanceFeedback('quiz-feedback', letters[disp.ans], disp.opts[disp.ans], expText, q);
          }
        } catch (e) {}
        return r;
      };
      window._mid2QuizFbPatched = true;
    }
    if (typeof window.handleMockAnswer === 'function' && !window._mid2MockFbPatched) {
      var _origMA = window.handleMockAnswer;
      window.handleMockAnswer = function(chosen) {
        var r = _origMA.apply(this, arguments);
        try {
          var q = (typeof mockQs !== 'undefined') ? mockQs[mockIdx] : null;
          if (!q) return r;
          if (chosen !== q.ans) {
            var letters = ['A','B','C','D','E'];
            var expText = Array.isArray(q.exp) ? q.exp[q.ans] : (typeof q.exp === 'string' ? q.exp : null);
            enhanceFeedback('mock-feedback', letters[q.ans], q.opts[q.ans], expText, q);
          }
        } catch (e) {}
        return r;
      };
      window._mid2MockFbPatched = true;
    }
    if (typeof window.handleTBAnswer === 'function' && !window._mid2TBFbPatched) {
      var _origTB = window.handleTBAnswer;
      window.handleTBAnswer = function(chosen) {
        var r = _origTB.apply(this, arguments);
        try {
          // Skip feedback enhancement in exam mode
          if (window._tbExamMode === true) return r;
          var q = tbState.questions[tbState.current];
          if (!q) return r;
          var dispAns = q._tbDisp ? q._tbDisp.ans : q.ans;
          var dispOpts = q._tbDisp ? q._tbDisp.opts : q.opts;
          if (chosen !== dispAns) {
            var letters = ['A','B','C','D','E'];
            var expText = Array.isArray(q.exp) ? q.exp[q.ans] : (typeof q.exp === 'string' ? q.exp : null);
            enhanceFeedback('tb-feedback', letters[dispAns], dispOpts[dispAns], expText, q);
          }
        } catch (e) {}
        return r;
      };
      window._mid2TBFbPatched = true;
    }
  }

  function init() {
    setTimeout(applyPatches, 0);
    setTimeout(applyPatches, 100);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// ══════════════════════════════════════════════════════════════
//  MID 2 UX PATCH [7] — "Unseen Questions Only" filter for Testbank
//  All DOM content comes from the trusted MID2_TESTBANK bank; we
//  never inject user-supplied HTML.
// ══════════════════════════════════════════════════════════════
(function mid2UnseenFilter() {
  function isMid2() {
    return !!(document.body && document.body.dataset && document.body.dataset.mid === '2');
  }
  function el(tag, props, children) {
    var e = document.createElement(tag);
    if (props) {
      for (var k in props) {
        if (k === 'style') e.style.cssText = props[k];
        else if (k === 'className') e.className = props[k];
        else if (k === 'text') e.textContent = props[k];
        else if (k === 'onclick') e.onclick = props[k];
        else e.setAttribute(k, props[k]);
      }
    }
    if (children) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (c == null) continue;
        if (typeof c === 'string') e.appendChild(document.createTextNode(c));
        else e.appendChild(c);
      }
    }
    return e;
  }
  function replaceArray(arr, newItems) {
    if (!arr) return;
    arr.length = 0;
    for (var i = 0; i < newItems.length; i++) arr.push(newItems[i]);
  }

  var SEEN_KEY = 'bus214_mid2_seenQs';
  var state = { mode: 'all', toggleBtn: null, countLabelNode: null };

  function loadSeen() {
    try {
      var v = JSON.parse(localStorage.getItem(SEEN_KEY) || '[]');
      return Array.isArray(v) ? v : [];
    } catch (e) { return []; }
  }
  function saveSeen(list) {
    try { localStorage.setItem(SEEN_KEY, JSON.stringify(list)); } catch (e) {}
  }
  function markSeen(qText) {
    if (!qText) return;
    var list = loadSeen();
    if (list.indexOf(qText) !== -1) return;
    list.push(qText);
    if (list.length > 500) list.splice(0, list.length - 500);
    saveSeen(list);
    updateToggleLabel();
    try { updateQuizToggleLabel(); } catch (e) {}
  }
  function unseenCount() {
    if (typeof MID2_TESTBANK === 'undefined') return 0;
    var seen = loadSeen();
    var set = {};
    for (var i = 0; i < seen.length; i++) set[seen[i]] = 1;
    var n = 0;
    for (var j = 0; j < MID2_TESTBANK.length; j++) {
      if (!set[MID2_TESTBANK[j].q]) n++;
    }
    return n;
  }

  function applyMode() {
    if (typeof MID2_TESTBANK === 'undefined' || typeof testBankQ === 'undefined') return;
    if (state.mode === 'unseen') {
      var seen = loadSeen();
      var set = {};
      for (var i = 0; i < seen.length; i++) set[seen[i]] = 1;
      var filtered = MID2_TESTBANK.filter(function(q) { return !set[q.q]; });
      if (filtered.length === 0) {
        // Nothing unseen; fall back to full bank.
        state.mode = 'all';
        replaceArray(testBankQ, MID2_TESTBANK);
      } else {
        replaceArray(testBankQ, filtered);
      }
    } else {
      replaceArray(testBankQ, MID2_TESTBANK);
    }
  }

  function updateToggleLabel() {
    if (!state.countLabelNode) return;
    var n = unseenCount();
    state.countLabelNode.textContent = 'الأسئلة الجديدة فقط (' + n + ')';
    // Update toggle appearance / disabled hint
    if (state.allBtn && state.unseenBtn) {
      var activeAll = state.mode === 'all';
      styleToggleBtn(state.allBtn, activeAll);
      styleToggleBtn(state.unseenBtn, !activeAll);
    }
    if (state.doneNote) {
      state.doneNote.style.display = (n === 0) ? '' : 'none';
    }
  }

  function styleToggleBtn(btn, active) {
    if (active) {
      btn.style.cssText = 'flex:1;padding:10px 14px;border-radius:10px;border:1.5px solid var(--accent);background:var(--accent-soft);color:var(--accent);font-weight:700;font-size:.85rem;cursor:pointer;font-family:inherit;transition:all .15s;';
    } else {
      btn.style.cssText = 'flex:1;padding:10px 14px;border-radius:10px;border:1.5px solid var(--line);background:var(--paper);color:var(--ink);font-weight:600;font-size:.85rem;cursor:pointer;font-family:inherit;transition:all .15s;';
    }
  }

  function injectToggle() {
    if (!isMid2()) return;
    var setSec = document.getElementById('tb-setup-settings');
    if (!setSec || document.getElementById('mid2-unseen-toggle')) return;

    var wrap = el('div', {
      id: 'mid2-unseen-toggle',
      style: 'margin-bottom:18px;padding:12px 14px;border-radius:12px;background:var(--bg);border:1.5px solid var(--line);'
    });

    var header = el('div', {
      style: 'display:flex;align-items:center;gap:8px;margin-bottom:10px;font-weight:700;font-size:.88rem;color:var(--ink);',
      text: '🎯 فلترة الأسئلة'
    });
    wrap.appendChild(header);

    var row = el('div', { style: 'display:flex;gap:8px;' });
    var allBtn = el('button', {
      type: 'button',
      text: '🔄 الكل'
    });
    var unseenBtn = el('button', { type: 'button' });
    var unseenLabel = el('span', { text: 'الأسئلة الجديدة فقط (0)' });
    unseenBtn.appendChild(unseenLabel);

    allBtn.onclick = function() {
      state.mode = 'all';
      updateToggleLabel();
    };
    unseenBtn.onclick = function() {
      if (unseenCount() === 0) return;
      state.mode = 'unseen';
      updateToggleLabel();
    };

    row.appendChild(allBtn);
    row.appendChild(unseenBtn);
    wrap.appendChild(row);

    var doneNote = el('div', {
      style: 'margin-top:8px;font-size:.8rem;color:var(--good, #059669);font-weight:700;text-align:center;display:none;',
      text: 'أنهيت كل الأسئلة 🎉'
    });
    wrap.appendChild(doneNote);

    var resetLink = el('a', {
      style: 'display:block;margin-top:8px;font-size:.75rem;color:var(--muted);text-align:center;cursor:pointer;text-decoration:underline;',
      text: '🗑️ مسح السجل'
    });
    resetLink.onclick = function(e) {
      e.preventDefault();
      if (!confirm('مسح سجل الأسئلة المحلولة؟')) return;
      saveSeen([]);
      state.mode = 'all';
      updateToggleLabel();
    };
    wrap.appendChild(resetLink);

    // Insert at top of settings section
    setSec.insertBefore(wrap, setSec.firstChild);

    state.allBtn = allBtn;
    state.unseenBtn = unseenBtn;
    state.countLabelNode = unseenLabel;
    state.doneNote = doneNote;
    updateToggleLabel();
  }

  function patch() {
    if (!isMid2()) return;
    if (typeof MID2_TESTBANK === 'undefined') return;

    injectToggle();

    // Wrap startTestBank so filter applies to the pool it samples from.
    if (typeof window.startTestBank === 'function' && !window._mid2UnseenStartPatched) {
      var origStart = window.startTestBank;
      window.startTestBank = function() {
        try { applyMode(); } catch (e) { console.warn('[mid2] unseen filter apply failed', e); }
        var r = origStart.apply(this, arguments);
        // Restore full bank afterwards so chapter counts/other views stay intact.
        try { replaceArray(testBankQ, MID2_TESTBANK); } catch (e) {}
        return r;
      };
      window._mid2UnseenStartPatched = true;
    }

    // Wrap handleTBAnswer to record seen questions.
    if (typeof window.handleTBAnswer === 'function' && !window._mid2UnseenAnsPatched) {
      var origAns = window.handleTBAnswer;
      window.handleTBAnswer = function(chosen) {
        var q = null;
        try {
          q = (typeof tbState !== 'undefined' && tbState.questions) ? tbState.questions[tbState.current] : null;
        } catch (e) {}
        var r = origAns.apply(this, arguments);
        try { if (q && q.q) markSeen(q.q); } catch (e) {}
        return r;
      };
      window._mid2UnseenAnsPatched = true;
    }

    // ── Quiz Mode unseen filter (parallel to testbank) ──
    injectQuizToggle();

    if (typeof window.startQuiz === 'function' && !window._mid2UnseenStartQuizPatched) {
      var origStartQuiz = window.startQuiz;
      window.startQuiz = function() {
        var cb = document.getElementById('mid2-quiz-unseen-cb');
        var backup = null;
        try {
          if (cb && cb.checked && typeof allQuizQ !== 'undefined') {
            var seen = loadSeen();
            var set = {};
            for (var i = 0; i < seen.length; i++) set[seen[i]] = 1;
            var filtered = allQuizQ.filter(function(qq) { return !set[qq.q]; });
            if (filtered.length > 0) {
              backup = allQuizQ.slice();
              replaceArray(allQuizQ, filtered);
            }
          }
        } catch (e) {}
        var r = origStartQuiz.apply(this, arguments);
        try { if (backup) replaceArray(allQuizQ, backup); } catch (e) {}
        return r;
      };
      window._mid2UnseenStartQuizPatched = true;
    }

    if (typeof window.handleQuizAnswer === 'function' && !window._mid2UnseenQuizAnsPatched) {
      var origQuizAns = window.handleQuizAnswer;
      window.handleQuizAnswer = function(chosen) {
        var q = null;
        try {
          q = (typeof quizQs !== 'undefined' && typeof quizIdx !== 'undefined') ? quizQs[quizIdx] : null;
        } catch (e) {}
        var r = origQuizAns.apply(this, arguments);
        try { if (q && q.q) markSeen(q.q); } catch (e) {}
        return r;
      };
      window._mid2UnseenQuizAnsPatched = true;
    }
  }

  function injectQuizToggle() {
    if (!isMid2()) return;
    var quizStart = document.getElementById('quiz-start-screen');
    if (!quizStart || document.getElementById('mid2-quiz-unseen-toggle')) return;

    var wrap = el('label', {
      id: 'mid2-quiz-unseen-toggle',
      style: 'display:flex;align-items:center;gap:10px;justify-content:center;margin:10px auto 18px;max-width:420px;padding:12px 16px;border-radius:12px;background:var(--accent-soft,rgba(217,119,6,0.08));border:1.5px dashed var(--accent,#D97706);cursor:pointer;font-size:.9rem;font-weight:600;color:var(--ink);user-select:none;'
    });
    var cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.id = 'mid2-quiz-unseen-cb';
    cb.style.cssText = 'width:18px;height:18px;cursor:pointer;accent-color:var(--accent,#D97706);flex-shrink:0;';
    var lbl = el('span', { id: 'mid2-quiz-unseen-cb-label' });
    lbl.textContent = 'الأسئلة اللي ما شفتها فقط (' + unseenCount() + ')';
    wrap.appendChild(cb);
    wrap.appendChild(lbl);

    // Insert before the Start button (or its parent row)
    var startBtn = quizStart.querySelector('button[onclick*="startQuiz"]');
    if (startBtn && startBtn.parentElement) {
      startBtn.parentElement.insertBefore(wrap, startBtn);
    } else {
      quizStart.appendChild(wrap);
    }

    state.quizLabelNode = lbl;
    state.quizCb = cb;
    updateQuizToggleLabel();
  }

  function updateQuizToggleLabel() {
    if (!state.quizLabelNode) return;
    var n = unseenCount();
    state.quizLabelNode.textContent = 'الأسئلة اللي ما شفتها فقط (' + n + ')';
    if (state.quizCb && n === 0) {
      state.quizCb.checked = false;
      state.quizCb.disabled = true;
      if (state.quizLabelNode.parentElement) {
        state.quizLabelNode.parentElement.style.opacity = '0.5';
        state.quizLabelNode.textContent = 'أنهيت كل الأسئلة 🎉';
      }
    }
  }

  function init() {
    setTimeout(patch, 0);
    setTimeout(patch, 150);
    setTimeout(patch, 500);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// ══════════════════════════════════════════════════════════════
//  Mid 2 — Professional PDF Export Overrides
//  Replaces exportTestBankPDF and exportWrongAnswersPDF with
//  branded, theme-aware (light/dark) output for Mid 2 only.
//  Uses Blob URL (no document.write) for XSS safety.
// ══════════════════════════════════════════════════════════════
(function mid2PdfOverrides() {
  function isMid2() {
    return !!(document.body && document.body.dataset && document.body.dataset.mid === '2');
  }

  var PDF_CSS = '' +
    '@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap");' +
    '*{box-sizing:border-box;margin:0;padding:0}' +
    ':root{--bg:#FAFAF9;--surface:#FFFFFF;--ink:#1C1917;--muted:#78716C;--border:#E7E5E4;--primary:#0F766E;--primary-soft:rgba(15,118,110,0.08);--good:#16A34A;--good-soft:#DCFCE7;--bad:#DC2626;--bad-soft:#FEE2E2;--accent:#D97706}' +
    'body.pdf-dark{--bg:#0B1120;--surface:#121826;--ink:#E7E9EE;--muted:#8B95A8;--border:#1F2937;--primary:#2DD4BF;--primary-soft:rgba(45,212,191,0.12);--good:#4ADE80;--good-soft:rgba(74,222,128,0.15);--bad:#F87171;--bad-soft:rgba(248,113,113,0.15);--accent:#F59E0B}' +
    'html,body{background:var(--bg);color:var(--ink);font-family:"Plus Jakarta Sans","Noto Naskh Arabic",system-ui,sans-serif;font-size:12pt;line-height:1.55;-webkit-print-color-adjust:exact;print-color-adjust:exact;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto;-webkit-hyphens:auto}' +
    '*{word-wrap:break-word;overflow-wrap:break-word;max-width:100%}' +
    '.page{max-width:780px;margin:0 auto;padding:32px 36px 60px}' +
    '.toolbar{position:sticky;top:0;z-index:10;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;margin:-32px -36px 28px;background:var(--surface);border-bottom:1px solid var(--border)}' +
    '.toolbar-title{font-weight:700;font-size:.85rem;color:var(--muted)}' +
    '.toolbar-actions{display:flex;gap:8px}' +
    '.tbtn{padding:8px 14px;border-radius:8px;border:1.5px solid var(--border);background:var(--surface);color:var(--ink);font:inherit;font-size:.82rem;font-weight:600;cursor:pointer;transition:all .15s}' +
    '.tbtn:hover{border-color:var(--primary);color:var(--primary)}' +
    '.tbtn.primary{background:var(--primary);color:#fff;border-color:var(--primary)}' +
    '.tbtn.primary:hover{opacity:.9;color:#fff}' +
    '.hero{background:linear-gradient(135deg,var(--primary),#0E8A7E);color:#fff;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 8px 24px var(--primary-soft)}' +
    '.hero-tag{display:inline-block;background:rgba(255,255,255,0.18);padding:4px 12px;border-radius:999px;font-size:.72rem;font-weight:700;letter-spacing:.5px;margin-bottom:10px;text-transform:uppercase}' +
    '.hero-title{font-size:1.7rem;font-weight:800;margin-bottom:6px;line-height:1.2}' +
    '.hero-meta{font-size:.85rem;opacity:.88;font-weight:500}' +
    '.hero-meta span{display:inline-block;margin-left:14px}' +
    '.q-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:18px 20px;margin-bottom:14px;page-break-inside:avoid;break-inside:avoid}' +
    '.q-head{display:flex;align-items:center;gap:10px;margin-bottom:10px}' +
    '.q-num{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:8px;background:var(--primary-soft);color:var(--primary);font-weight:800;font-size:.85rem;flex-shrink:0}' +
    '.q-chip{font-size:.7rem;font-weight:700;padding:3px 10px;border-radius:999px;background:var(--primary-soft);color:var(--primary);letter-spacing:.3px}' +
    '.q-text{font-weight:600;font-size:1rem;margin-bottom:12px;line-height:1.55;color:var(--ink)}' +
    '.opts{list-style:none;display:flex;flex-direction:column;gap:4px}' +
    '.opt{display:flex;align-items:flex-start;gap:10px;padding:8px 12px;border-radius:8px;font-size:.92rem;line-height:1.5;border:1px solid transparent}' +
    '.opt .letter{font-weight:700;color:var(--muted);flex-shrink:0;min-width:18px}' +
    '.opt.correct{background:var(--good-soft);border-color:var(--good);color:var(--good);font-weight:700}' +
    '.opt.correct .letter{color:var(--good)}' +
    '.opt.correct .check{margin-right:auto;padding-right:8px;font-weight:800;color:var(--good)}' +
    '.opt.wrong{background:var(--bad-soft);border-color:var(--bad);color:var(--bad);text-decoration:line-through;opacity:.88}' +
    '.opt.wrong .letter{color:var(--bad)}' +
    '.empty{text-align:center;padding:60px 20px;color:var(--good);font-size:1.15rem;font-weight:700}' +
    '.footer{margin-top:40px;padding-top:20px;border-top:1px solid var(--border);text-align:center;color:var(--muted);font-size:.78rem;font-weight:500}' +
    '.footer strong{color:var(--ink)}' +
    // Chapter summary styles
    '.chap-section{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:20px 22px;margin-bottom:16px;page-break-inside:avoid}' +
    '.chap-heading{font-size:1.1rem;font-weight:800;color:var(--primary);margin-bottom:12px;padding-bottom:10px;border-bottom:2px solid var(--primary-soft);display:flex;flex-wrap:wrap;align-items:baseline;gap:10px}' +
    '.chap-heading .chap-ar{font-family:"Noto Naskh Arabic",sans-serif;direction:rtl;font-size:.82rem;color:var(--muted);font-weight:600}' +
    '.chap-list{list-style:none;display:flex;flex-direction:column;gap:8px}' +
    '.chap-item{background:var(--bg);border:1px solid var(--border);border-right:3px solid var(--primary);border-radius:10px;padding:10px 14px;font-size:.92rem;line-height:1.6;page-break-inside:avoid}' +
    '.chap-item strong{color:var(--primary);font-weight:700}' +
    '.chap-item mark{background:rgba(217,119,6,0.18);color:var(--ink);padding:1px 5px;border-radius:4px;font-weight:600}' +
    '.chap-ar{display:block;direction:rtl;text-align:right;font-family:"Noto Naskh Arabic",sans-serif;font-size:.84rem;color:var(--muted);margin-top:6px;padding:6px 10px;background:var(--primary-soft);border-radius:6px;line-height:1.75}' +
    '.chap-kw{display:inline-block;margin-top:6px;margin-right:6px;font-size:.7rem;font-weight:700;color:var(--accent);background:rgba(217,119,6,0.1);padding:2px 8px;border-radius:999px;border:1px solid rgba(217,119,6,0.25)}' +
    '.chap-kw b{color:var(--accent)}' +
    '.chap-note{background:rgba(217,119,6,0.06);border:1px solid rgba(217,119,6,0.25);border-right:4px solid var(--accent);border-radius:10px;padding:12px 14px;margin-top:10px;font-size:.9rem;line-height:1.6;page-break-inside:avoid}' +
    '.chap-note strong{color:var(--accent);font-weight:800}' +
    '.chap-steps{display:flex;flex-direction:column;gap:8px;margin-top:10px}' +
    '.chap-step{display:flex;gap:10px;align-items:flex-start;background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:10px 14px;page-break-inside:avoid}' +
    '.chap-step-num{flex-shrink:0;width:28px;height:28px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.82rem}' +
    '.chap-step-body{flex:1;font-size:.9rem;line-height:1.6}' +
    '.chap-table{width:100%;border-collapse:separate;border-spacing:0;margin-top:10px;font-size:.85rem;border-radius:10px;overflow:hidden;border:1px solid var(--border)}' +
    '.chap-table th{background:var(--primary);color:#fff;padding:10px 12px;text-align:left;font-weight:700;font-size:.78rem}' +
    '.chap-table td{padding:9px 12px;border-bottom:1px solid var(--border);vertical-align:top;color:var(--ink)}' +
    '.chap-table tr:last-child td{border-bottom:none}' +
    '.chap-table tr:nth-child(even) td{background:var(--bg)}' +
    '@media print{.toolbar{display:none}body{background:#fff}.page{padding:0 10mm;max-width:none}.hero{box-shadow:none}@page{margin:12mm 10mm}' +
    '.q-card,.chap-item,.chap-step,.chap-note{page-break-inside:avoid;break-inside:avoid-page}' +
    '.chap-section{page-break-inside:auto;break-inside:auto}' +
    '.q-text,.opt,.chap-item,.chap-ar,.chap-note{word-wrap:break-word;overflow-wrap:break-word;white-space:normal}' +
    'table,.chap-table{page-break-inside:auto}' +
    'tr{page-break-inside:avoid}' +
    '}';

  function escHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function todayStr() {
    try { return new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }); }
    catch (e) { return ''; }
  }

  function shellHtml(title, themeClass, bodyInner) {
    var themeScript = '<script>function togglePdfTheme(){var isDark=document.body.classList.toggle("pdf-dark");try{localStorage.setItem("bus214_mid2_pdfTheme",isDark?"dark":"light")}catch(e){}var btn=document.getElementById("pdf-theme-btn");if(btn)btn.textContent=isDark?"☀️ فاتح":"🌙 غامق";}<\/script>';
    var initialIcon = themeClass === 'pdf-dark' ? '☀️ فاتح' : '🌙 غامق';
    return '<!DOCTYPE html><html dir="ltr" lang="en"><head><meta charset="UTF-8">' +
      '<title>' + escHtml(title) + '</title>' +
      '<style>' + PDF_CSS + '</style>' + themeScript + '</head>' +
      '<body class="' + themeClass + '">' +
      '<div class="page">' +
      '<div class="toolbar">' +
      '  <span class="toolbar-title">BUS 214 · HOSAM Study Hub</span>' +
      '  <div class="toolbar-actions">' +
      '    <button id="pdf-theme-btn" class="tbtn" onclick="togglePdfTheme()">' + initialIcon + '</button>' +
      '    <button class="tbtn primary" onclick="window.print()">🖨️ حفظ PDF</button>' +
      '  </div>' +
      '</div>' +
      bodyInner +
      '<div class="footer">HOSAM Study Hub · <strong>BUS 214</strong> · Business Ethics · Mid 2</div>' +
      '</div></body></html>';
  }

  function openHtmlWindow(html) {
    var blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var w = window.open(url, '_blank');
    if (!w) { URL.revokeObjectURL(url); alert('فعّل النوافذ المنبثقة للتصدير'); return null; }
    // Revoke after load to allow navigation/print to complete
    setTimeout(function(){ try { URL.revokeObjectURL(url); } catch(e){} }, 60000);
    return w;
  }

  function newExportTestBankPDF(ch) {
    try {
      var letters = ['A','B','C','D','E'];
      var pool = (ch === 'all' || !ch) ? testBankQ.slice() : testBankQ.filter(function(q){ return q.ch === ch; });
      var labels = (window.CH_LABELS && window.CH_LABELS.tbLong) || {};
      var chName = labels[ch] || (ch === 'all' ? 'All Chapters' : ch);
      var pdfPref = localStorage.getItem('bus214_mid2_pdfTheme');
      var siteIsDark = document.body.classList.contains('dark');
      var theme = (pdfPref === 'dark' || (pdfPref == null && siteIsDark)) ? 'pdf-dark' : '';

      var body = '' +
        '<div class="hero">' +
        '  <div class="hero-tag">Test Bank · Ferrell BE 13e</div>' +
        '  <div class="hero-title">' + escHtml(chName) + '</div>' +
        '  <div class="hero-meta"><span>📚 ' + pool.length + ' سؤال</span><span>📅 ' + escHtml(todayStr()) + '</span></div>' +
        '</div>';

      pool.forEach(function(q, idx) {
        var chipLabel = (window.CH_LABELS && window.CH_LABELS.short && window.CH_LABELS.short[q.ch]) || q.ch;
        body += '<div class="q-card">' +
          '<div class="q-head"><div class="q-num">' + (idx + 1) + '</div>' +
          '<span class="q-chip">' + escHtml(chipLabel) + '</span></div>' +
          '<div class="q-text">' + escHtml(q.q) + '</div>' +
          '<ul class="opts">';
        (q.opts || []).forEach(function(opt, i) {
          var cls = (i === q.ans) ? ' correct' : '';
          var check = (i === q.ans) ? '<span class="check">✓</span>' : '';
          body += '<li class="opt' + cls + '"><span class="letter">' + letters[i] + '.</span><span>' + escHtml(opt) + '</span>' + check + '</li>';
        });
        body += '</ul></div>';
      });

      openHtmlWindow(shellHtml('Test Bank — ' + chName, theme, body));
    } catch (e) {
      console.error('[mid2] exportTestBankPDF override failed', e);
      alert('تعذّر إنشاء الـ PDF. جرب مرة ثانية.');
    }
  }

  function newExportWrongAnswersPDF(mode) {
    try {
      var letters = ['A','B','C','D','E'];
      var wrong = [];
      if (mode === 'mock') {
        wrong = (window.mockAnswers || []).filter(function(a){ return a.chosen !== a.q.ans; });
      } else {
        wrong = (window.quizAnswerLog || []).filter(function(a){ return a.chosen !== a.q.ans; });
      }
      var pdfPref = localStorage.getItem('bus214_mid2_pdfTheme');
      var siteIsDark = document.body.classList.contains('dark');
      var theme = (pdfPref === 'dark' || (pdfPref == null && siteIsDark)) ? 'pdf-dark' : '';
      var title = (mode === 'mock' ? 'Mock Exam' : 'Quiz') + ' — Wrong Answers';

      var body = '' +
        '<div class="hero">' +
        '  <div class="hero-tag">Review · ' + (mode === 'mock' ? 'Mock Exam' : 'Quiz') + '</div>' +
        '  <div class="hero-title">مراجعة الإجابات الخاطئة</div>' +
        '  <div class="hero-meta"><span>❌ ' + wrong.length + ' غلط</span><span>📅 ' + escHtml(todayStr()) + '</span></div>' +
        '</div>';

      if (wrong.length === 0) {
        body += '<div class="empty">🎉 ما عندك إجابات خاطئة — برافو!</div>';
      } else {
        wrong.forEach(function(item, idx) {
          var q = item.q, chosen = item.chosen;
          var chipLabel = (window.CH_LABELS && window.CH_LABELS.short && window.CH_LABELS.short[q.ch]) || q.ch;
          body += '<div class="q-card">' +
            '<div class="q-head"><div class="q-num">' + (idx + 1) + '</div>' +
            '<span class="q-chip">' + escHtml(chipLabel) + '</span></div>' +
            '<div class="q-text">' + escHtml(q.q) + '</div>' +
            '<ul class="opts">';
          (q.opts || []).forEach(function(opt, i) {
            var cls = (i === q.ans) ? ' correct' : (i === chosen ? ' wrong' : '');
            var check = (i === q.ans) ? '<span class="check">✓</span>' : '';
            body += '<li class="opt' + cls + '"><span class="letter">' + letters[i] + '.</span><span>' + escHtml(opt) + '</span>' + check + '</li>';
          });
          body += '</ul></div>';
        });
      }

      openHtmlWindow(shellHtml(title, theme, body));
    } catch (e) {
      console.error('[mid2] exportWrongAnswersPDF override failed', e);
      alert('تعذّر إنشاء الـ PDF. جرب مرة ثانية.');
    }
  }

  // Override [3] — Chapter summary PDF: full replacement. Walks the
  // chapter DOM and rebuilds content using the Mid 2 PDF design system
  // (Plus Jakarta Sans + Noto Naskh Arabic, light/dark tokens, clean
  // cards). Preserves Arabic translations (.ar-line), key words
  // (.key-word), note boxes, ordered lists, and summary tables.
  function stripInner(html, selector) {
    // Remove nodes matching selector from an HTML string by round-tripping
    // through a detached element.
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    tmp.querySelectorAll(selector).forEach(function(n){ n.remove(); });
    return tmp.innerHTML;
  }

  function extractAr(node) {
    var ar = node.querySelector(':scope > .ar-line') || node.querySelector('.ar-line');
    return ar ? ar.textContent.trim() : '';
  }

  function extractKw(node) {
    var kws = [];
    node.querySelectorAll(':scope > .key-word, .key-word').forEach(function(k){
      kws.push(k.innerHTML);
    });
    return kws;
  }

  function itemHtml(li) {
    var ar = extractAr(li);
    var kws = extractKw(li);
    var inner = stripInner(li.innerHTML, '.ar-line, .key-word');
    var html = '<li class="chap-item">' + inner;
    kws.forEach(function(k){ html += '<span class="chap-kw">' + k + '</span>'; });
    if (ar) html += '<span class="chap-ar">' + escHtml(ar) + '</span>';
    html += '</li>';
    return html;
  }

  function noteBoxHtml(box) {
    var ar = extractAr(box);
    var inner = stripInner(box.innerHTML, '.ar-line');
    // Handle nested <ol>/<ul> inside note-box
    return '<div class="chap-note">' + inner + (ar ? '<span class="chap-ar">' + escHtml(ar) + '</span>' : '') + '</div>';
  }

  function stepsHtml(stepsList) {
    var out = '<div class="chap-steps">';
    stepsList.querySelectorAll('.step-item').forEach(function(item){
      var numEl = item.querySelector('.step-num');
      var num = numEl ? numEl.textContent.trim() : '';
      var ar = extractAr(item);
      var inner = item.innerHTML;
      if (numEl) inner = inner.replace(numEl.outerHTML, '');
      inner = stripInner(inner, '.ar-line');
      out += '<div class="chap-step"><div class="chap-step-num">' + escHtml(num) + '</div>' +
             '<div class="chap-step-body">' + inner +
             (ar ? '<span class="chap-ar">' + escHtml(ar) + '</span>' : '') + '</div></div>';
    });
    out += '</div>';
    return out;
  }

  function sectionHtml(block) {
    var h3 = block.querySelector(':scope > h3');
    var headHtml = '';
    if (h3) {
      var arSpan = h3.querySelector('.ar-line');
      var arText = arSpan ? arSpan.textContent.trim() : '';
      var mainText = h3.textContent.replace(arText, '').trim();
      headHtml = '<div class="chap-heading"><span>' + escHtml(mainText) + '</span>' +
                 (arText ? '<span class="chap-ar">' + escHtml(arText) + '</span>' : '') + '</div>';
    }
    var body = '';
    var hasList = false;
    Array.from(block.children).forEach(function(child){
      if (child.tagName === 'H3') return;
      var cls = child.className || '';
      if (child.tagName === 'UL' || child.tagName === 'OL') {
        if (!hasList) { body += '<ul class="chap-list">'; hasList = true; }
        Array.from(child.querySelectorAll(':scope > li')).forEach(function(li){
          body += itemHtml(li);
        });
      } else {
        if (hasList) { body += '</ul>'; hasList = false; }
        if (cls.includes('note-box')) body += noteBoxHtml(child);
        else if (cls.includes('steps-list')) body += stepsHtml(child);
        else if (child.tagName === 'TABLE' || cls.includes('summary-table')) {
          var tbl = child.cloneNode(true);
          tbl.classList.add('chap-table');
          body += tbl.outerHTML;
        } else if (child.tagName === 'P') {
          body += '<p style="margin-top:8px;font-size:.9rem;color:var(--muted);">' + child.innerHTML + '</p>';
        }
      }
    });
    if (hasList) body += '</ul>';
    return '<div class="chap-section">' + headHtml + body + '</div>';
  }

  function newExportChapterPDF(pageId, chapterName) {
    try {
      var page = document.getElementById(pageId);
      if (!page) { alert('ما لقيت محتوى الفصل'); return; }
      var chapter = page.querySelector('.chapter');
      if (!chapter) { alert('ما لقيت محتوى الفصل'); return; }

      // Chapter-level Arabic subtitle
      var chapArLine = chapter.querySelector(':scope > .ar-line');
      var chapAr = chapArLine ? chapArLine.textContent.trim() : '';

      var pdfPref = localStorage.getItem('bus214_mid2_pdfTheme');
      var siteIsDark = document.body.classList.contains('dark');
      var theme = (pdfPref === 'dark' || (pdfPref == null && siteIsDark)) ? 'pdf-dark' : '';

      var body = '<div class="hero">' +
        '<div class="hero-tag">Chapter Summary · Ferrell BE 13e</div>' +
        '<div class="hero-title">' + escHtml(chapterName) + '</div>' +
        (chapAr ? '<div class="hero-meta" style="margin-top:4px;direction:rtl;font-family:\'Noto Naskh Arabic\',sans-serif;opacity:.95">' + escHtml(chapAr) + '</div>' : '') +
        '<div class="hero-meta"><span>📖 ملخص شامل</span><span>📅 ' + escHtml(todayStr()) + '</span></div>' +
        '</div>';

      // Walk direct children — support both .summary-block sections and
      // stray top-level tables or headings
      Array.from(chapter.children).forEach(function(el){
        var tag = el.tagName;
        var cls = el.className || '';
        if (tag === 'H2' || tag === 'BUTTON') return;
        if (cls.includes('ch-pdf-btn')) return;
        if (el.style && el.style.display === 'none') return;
        if (tag === 'SPAN' && cls.includes('ar-line')) return;
        if (tag === 'P') return; // source line already covered by hero

        if (cls.includes('summary-block')) {
          body += sectionHtml(el);
        } else if (tag === 'TABLE' || cls.includes('summary-table')) {
          var tbl = el.cloneNode(true);
          tbl.classList.add('chap-table');
          body += '<div class="chap-section">' + tbl.outerHTML + '</div>';
        } else if (tag === 'H3') {
          var arSpan = el.querySelector('.ar-line');
          var arText = arSpan ? arSpan.textContent.trim() : '';
          var mainText = el.textContent.replace(arText, '').trim();
          body += '<div class="chap-heading" style="margin:18px 0 10px">' +
            '<span>' + escHtml(mainText) + '</span>' +
            (arText ? '<span class="chap-ar">' + escHtml(arText) + '</span>' : '') +
            '</div>';
        } else if (cls.includes('key-takeaways')) {
          var ktHeader = el.querySelector('div');
          var ktHeaderAr = ktHeader ? ktHeader.querySelector('.ar-line') : null;
          var ktHeaderArText = ktHeaderAr ? ktHeaderAr.textContent.trim() : '';
          var ktHeaderMain = ktHeader ? ktHeader.textContent.replace(ktHeaderArText, '').trim() : '🎯 Key Takeaways';
          var kt = '<div style="margin:16px 0;page-break-inside:auto;break-inside:auto;">' +
                   '<div class="chap-heading"><span>' + escHtml(ktHeaderMain) + '</span>' +
                   (ktHeaderArText ? '<span class="chap-ar">' + escHtml(ktHeaderArText) + '</span>' : '') +
                   '</div><ul class="chap-list">';
          el.querySelectorAll('li').forEach(function(li){ kt += itemHtml(li); });
          kt += '</ul></div>';
          body += kt;
        }
      });

      openHtmlWindow(shellHtml(chapterName, theme, body));
    } catch (e) {
      console.error('[mid2] exportChapterPDF override failed', e);
      alert('تعذّر إنشاء الـ PDF. جرب مرة ثانية.');
    }
  }

  function wrapChapterPDF() {
    if (window._mid2ChapterPdfWrapped) return;
    window.exportChapterPDF = newExportChapterPDF;
    window._mid2ChapterPdfWrapped = true;
  }

  // Delegation-based interception for chapter PDF buttons.
  // Some onclick handlers may be captured before our wrap lands; this
  // catches .ch-pdf-btn clicks at capture phase and runs our themed path.
  function installChapterBtnDelegate() {
    if (!isMid2() || window._mid2ChapterBtnDelegated) return;
    document.addEventListener('click', function(ev) {
      var btn = ev.target && ev.target.closest && ev.target.closest('.ch-pdf-btn');
      if (!btn) return;
      // Parse the original onclick args: exportChapterPDF('page-chX','Chapter Y ...')
      var oc = btn.getAttribute('onclick') || '';
      var m = oc.match(/exportChapterPDF\(\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)/);
      if (!m) return;
      ev.preventDefault();
      ev.stopImmediatePropagation();
      var pageId = m[1], chapterName = m[2];
      // Ensure the wrapped version runs (even if wrap didn't fire yet)
      wrapChapterPDF();
      if (typeof window.exportChapterPDF === 'function') {
        window.exportChapterPDF(pageId, chapterName);
      }
    }, true); // capture phase — beats inline onclick
    window._mid2ChapterBtnDelegated = true;
  }

  function apply() {
    if (!isMid2()) return;
    if (!window._mid2PdfOverridden) {
      window.exportTestBankPDF = newExportTestBankPDF;
      window.exportWrongAnswersPDF = newExportWrongAnswersPDF;
      window._mid2PdfOverridden = true;
    }
    wrapChapterPDF();
    installChapterBtnDelegate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  }
  setTimeout(apply, 0);
  setTimeout(apply, 200);
  setTimeout(apply, 800);
})();

// ── CONFUSION-PAIR DRILLS ─────────────────────
// Each pair uses include[] (precise phrases that target the pair's questions)
// and exclude[] (phrases that disqualify off-topic Qs sharing surface keywords).
window.CONFUSION_PAIRS = [
  {
    id: 'issue-dilemma',
    label: 'Issue vs Dilemma',
    contrast: '💡 Issue = خيار صح وخيار خطأ. Dilemma = جميع الخيارات المتاحة تؤدي لنتائج سلبية.',
    include: ['an ethical issue is defined', 'an ethical dilemma', 'in an ethical dilemma', 'negative outcomes', 'negative consequences'],
    exclude: ['issue intensity', 'issue awareness', 'first step', 'process begin', 'spheres of influence', 'moral intensity']
  },
  {
    id: 'active-passive-bribery',
    label: 'Active vs Passive Bribery',
    contrast: '💡 Active = الشخص الذي يعرض الرشوة. Passive = المسؤول المتلقي.',
    include: ['active bribery', 'passive bribery', 'promises or gives the bribe', 'who receives the bribe', 'offering of something of value', 'illicit advantage'],
    exclude: ['facilitation payments']
  },
  {
    id: 'commission-omission',
    label: 'Commission vs Omission Lying',
    contrast: '💡 Commission = كذب صريح بالألفاظ. Omission = إخفاء معلومات مهمة عمداً.',
    include: ['commission lying', 'omission lying', 'intentionally not informing', 'creating a perception or belief by words', 'active deception by words']
  },
  {
    id: 'falsity-puffery',
    label: 'Implied vs Literally False vs Puffery',
    contrast: '💡 Literally = كذب صريح بالحقائق. Implied = تضليل ضمني. Puffery = مبالغة لا يصدقها مشترٍ عاقل.',
    include: ['puffery', 'implied falsity', 'literally false', 'tendency to mislead', "world's best", 'exaggerated advertising', 'no reasonable buyer']
  },
  {
    id: 'justice-types',
    label: 'Distributive vs Procedural vs Interactional',
    contrast: '💡 Distributive = عدالة النتائج. Procedural = عدالة الإجراءات. Interactional = عدالة التعامل والاحترام.',
    include: ['distributive justice', 'procedural justice', 'interactional justice', 'outcomes or results of a business', 'processes and activities that produce', 'relationships between organizational members']
  },
  {
    id: 'teleology-deontology',
    label: 'Teleology vs Deontology',
    contrast: '💡 Teleology = يركز على النتائج/العواقب. Deontology = يركز على الحقوق والنوايا.',
    include: ['teleolog', 'deontolog', 'consequentialis', 'categorical imperative', 'rights of individuals', 'intentions associated with a particular behavior', 'nonconsequentialis'],
    exclude: ['virtue ethics', 'relativis']
  },
  {
    id: 'egoism-utilitarianism',
    label: 'Egoism vs Utilitarianism',
    contrast: '💡 Egoism = المصلحة الذاتية. Utilitarianism = أعظم فائدة لأكبر عدد.',
    include: ['utilitarian', 'egoism', 'egoist', 'greatest good for the greatest number', 'enlightened egoism', 'rule utilitarian', 'act utilitarian', 'long-range perspective']
  }
];
