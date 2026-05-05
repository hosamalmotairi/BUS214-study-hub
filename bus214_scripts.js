// ══════════════════════════════════════════════
//  BUS 214 — Business Ethics Study Hub
//  Scripts.js — Question Banks, Quiz, Flash Cards
// ══════════════════════════════════════════════
// ── GAMIFICATION AUDIO (Web Audio API) ────────────────
window.SFX = {
  ctx: null,
  init() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
  },
  play(type) {
    try {
      this.init();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      const now = this.ctx.currentTime;
      if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.1);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.1, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.2);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.1, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'complete' || type === 'levelup') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(554.37, now + 0.1);
        osc.frequency.setValueAtTime(659.25, now + 0.2);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.1, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.6);
      }
    } catch(e) {}
  }
};

// ── QUESTION BANK ──────────────────────────────
const allQuizQ = [

  // ════════════════ CHAPTER 1 ════════════════
  { ch: "ch1", q: "Corporate social responsibility is defined as which of the following?", opts: ["An organization's obligation to maximize its positive effects and minimize its negative effects on stakeholders", "Principles, values, and norms that primarily guide individual and group behavior in business", "The institutionalization of business ethics into all levels of decision making", "A business's responsibility to manufacture products that function properly"], ans: 0, exp: ["✅ Correct. CSR is the obligation to maximize positive impacts and minimize negative impacts on all stakeholders.<br><span dir='rtl'>✅ صح — CSR = تعظيم الأثر الإيجابي وتقليل الأثر السلبي على أصحاب المصلحة.</span>", "❌ This defines business ethics, not CSR. Business ethics covers the principles and norms guiding behavior.<br><span dir='rtl'>❌ هذا تعريف أخلاقيات الأعمال وليس المسؤولية الاجتماعية.</span>", "❌ This describes the institutionalization of ethics into decision-making — a process, not CSR itself.<br><span dir='rtl'>❌ هذا يصف مأسسة الأخلاقيات في صنع القرار، وليس تعريفًا لـ CSR.</span>", "❌ Product functionality is a quality/liability concern, not a definition of CSR.<br><span dir='rtl'>❌ وظيفة المنتج مسألة جودة ومسؤولية قانونية، وليست CSR.</span>"] },
  { ch: "ch1", q: "After the accounting scandals of the early 2000s, which was enacted to restore confidence in financial reporting and business ethics?", opts: ["Defense Industry Initiative on Business Ethics and Conduct", "Sarbanes-Oxley Act", "Federal Sentencing Guidelines for Organizations", "Foreign Corrupt Practices Act"], ans: 1, exp: ["❌ The DII was established in the 1980s — long before the 2000s scandals (Enron, WorldCom).<br><span dir='rtl'>❌ DII أُسست في الثمانينيات، قبل فضائح الألفية الثالثة بوقت طويل.</span>", "✅ Correct. SOX (2002) was enacted directly in response to accounting scandals to restore trust in financial reporting.<br><span dir='rtl'>✅ صح — SOX (2002) صدر ردًّا مباشرًا على فضائح المحاسبة لاستعادة الثقة.</span>", "❌ The FSGO was enacted in 1991 — a decade before the 2000s scandals.<br><span dir='rtl'>❌ FSGO صدر عام 1991، قبل فضائح الألفية الثالثة بعقد.</span>", "❌ The FCPA (1977) targeted bribery of foreign officials — unrelated to 2000s accounting scandals.<br><span dir='rtl'>❌ FCPA (1977) يستهدف رشوة المسؤولين الأجانب، وليس فضائح المحاسبة.</span>"] },
  { ch: "ch1", q: "Which is one of the rights spelled out by John F. Kennedy in his 'Consumers' Bill of Rights'?", opts: ["The right to consumerism", "The right to safety", "The right to be protected", "The right to be ethical"], ans: 1, exp: ["❌ Consumerism is a movement, not a right in Kennedy's bill.<br><span dir='rtl'>❌ المستهلكية حركة اجتماعية، وليست حقًا في وثيقة كينيدي.</span>", "✅ Correct. Kennedy's four rights are: safety, information, choice, and to be heard. Safety is explicitly listed.<br><span dir='rtl'>✅ صح — حقوق كينيدي الأربعة: السلامة، المعلومة، الاختيار، والإسماع. السلامة مذكورة صراحةً.</span>", "❌ 'Right to be protected' is vague and not one of the four enumerated rights.<br><span dir='rtl'>❌ 'حق الحماية' غامض وليس أحد الحقوق الأربعة لكينيدي.</span>", "❌ 'Right to be ethical' is not part of Kennedy's Consumer Bill of Rights.<br><span dir='rtl'>❌ 'حق الأخلاق' غير موجود في وثيقة حقوق المستهلك لكينيدي.</span>"] },
  { ch: "ch1", q: "During the 1990s, the institutionalization of business ethics was largely driven by which piece of legislation?", opts: ["Sarbanes-Oxley Act", "Federal Sentencing Guidelines for Organizations", "Dodd-Frank Wall Street Reform Act", "Foreign Corrupt Practices Act"], ans: 1, exp: ["❌ SOX was passed in 2002, not the 1990s.<br><span dir='rtl'>❌ قانون SOX صدر عام 2002، وليس التسعينيات.</span>", "✅ Correct. The FSGO (1991) incentivized organizations to build ethics programs, driving institutionalization through the 1990s.<br><span dir='rtl'>✅ صح — FSGO (1991) حرّك مأسسة الأخلاقيات في المنظمات طوال التسعينيات.</span>", "❌ Dodd-Frank was enacted in 2010 in response to the 2008 financial crisis.<br><span dir='rtl'>❌ Dodd-Frank صدر عام 2010 ردًّا على أزمة 2008 المالية.</span>", "❌ The FCPA (1977) focused on foreign bribery, not institutionalization of organizational ethics.<br><span dir='rtl'>❌ FCPA (1977) يعالج الرشوة الأجنبية، لا مأسسة الأخلاقيات.</span>"] },
  { ch: "ch1", q: "Environmental Social Governance (ESG) refers to which of the following?", opts: ["A framework for evaluation of firm performance in environmental, social, and governance areas", "The most far-reaching change in accounting regulations since the Securities and Exchange Act of 1934", "Guidelines that codified incentives for organizations to prevent misconduct", "An organization's obligation to maximize positive and minimize negative stakeholder impact"], ans: 0, exp: ["✅ Correct. ESG is a framework for evaluating firm performance across environmental, social, and governance dimensions.<br><span dir='rtl'>✅ صح — ESG إطار لتقييم الأداء البيئي والاجتماعي والحوكمة.</span>", "❌ This describes the Sarbanes-Oxley Act and its accounting regulation overhaul.<br><span dir='rtl'>❌ هذا يصف قانون SOX وإصلاحاته المحاسبية.</span>", "❌ This describes the Federal Sentencing Guidelines for Organizations (FSGO).<br><span dir='rtl'>❌ هذا يصف المبادئ التوجيهية الاتحادية للأحكام FSGO.</span>", "❌ This describes Corporate Social Responsibility (CSR), not ESG.<br><span dir='rtl'>❌ هذا تعريف المسؤولية الاجتماعية CSR، وليس ESG.</span>"] },
  { ch: "ch1", q: "The 1960s saw a rise of consumerism. What is consumerism?", opts: ["An increase in consumer rights by individuals, organizations, and governments", "The growth of international retail chain stores", "Activities undertaken by independent individuals, groups, and organizations to protect their rights as consumers", "The widespread adoption of consumer-oriented marketing strategies"], ans: 2, exp: ["❌ This is incomplete — consumerism is about protective activities, not just an increase in rights.<br><span dir='rtl'>❌ ناقص — المستهلكية تعني الأنشطة الحمائية، لا مجرد زيادة الحقوق.</span>", "❌ Retail chain growth is a business trend, unrelated to consumerism.<br><span dir='rtl'>❌ نمو سلاسل التجزئة ظاهرة تجارية لا علاقة لها بالمستهلكية.</span>", "✅ Correct. Consumerism = activities by individuals, groups, and organizations to protect consumer rights. It is action-oriented.<br><span dir='rtl'>✅ صح — المستهلكية = أنشطة يمارسها الأفراد والمجموعات لحماية حقوق المستهلكين.</span>", "❌ Consumer-oriented marketing is a corporate response, not the definition of consumerism.<br><span dir='rtl'>❌ التسويق الموجَّه نحو المستهلك استجابة شركاتية، وليس تعريف المستهلكية.</span>"] },
  { ch: "ch1", q: "Ethically charged decisions _______.", opts: ["Are made at all levels of work and management", "Are made primarily by top management", "Stem from individual moral philosophies", "Are less important than other decision-making processes"], ans: 0, exp: ["✅ Correct. Ethical decisions occur at every level — from frontline workers to executives. Ethics pervades all organizational activity.<br><span dir='rtl'>✅ صح — القرارات الأخلاقية تُتخذ على جميع المستويات، من الموظف العادي للإدارة العليا.</span>", "❌ Limiting ethical decisions to top management ignores that every employee makes ethically relevant choices.<br><span dir='rtl'>❌ الأمر لا يقتصر على الإدارة العليا؛ كل موظف يتخذ قرارات ذات أبعاد أخلاقية.</span>", "❌ While personal morals influence choices, ethically charged decisions stem from organizational and situational contexts too.<br><span dir='rtl'>❌ القرارات الأخلاقية تنبع من السياق التنظيمي والموقفي، وليس الفلسفة الشخصية فحسب.</span>", "❌ Ethical decisions are critically important — they affect stakeholders, reputation, and legal compliance.<br><span dir='rtl'>❌ القرارات الأخلاقية بالغة الأهمية وتؤثر على أصحاب المصلحة والسمعة والامتثال.</span>"] },
  { ch: "ch1", q: "Which was developed in the 1980s to guide corporate support for ethical conduct by establishing best practices?", opts: ["Federal Sentencing Guidelines for Organizations", "Defense Industry Initiative on Business Ethics and Conduct", "Foreign Corrupt Practices Act", "The Southern Common Market"], ans: 1, exp: ["❌ The FSGO came in 1991, building on the DII's foundation — it was not the 1980s initiative.<br><span dir='rtl'>❌ FSGO جاء عام 1991 مبنيًا على أساس DII، وليس هو مبادرة الثمانينيات.</span>", "✅ Correct. The DII was established in 1986 by major defense contractors to promote ethical conduct and best practices.<br><span dir='rtl'>✅ صح — أُسست DII عام 1986 من شركات الدفاع لتعزيز السلوك الأخلاقي وأفضل الممارسات.</span>", "❌ The FCPA (1977) targeted foreign bribery and predates the 1980s ethics movement.<br><span dir='rtl'>❌ FCPA (1977) يستهدف الرشوة الأجنبية وسابق لحركة الأخلاقيات في الثمانينيات.</span>", "❌ MERCOSUR (Southern Common Market) is a South American trade bloc with no relation to business ethics.<br><span dir='rtl'>❌ ميركوسور تكتل تجاري جنوب أمريكي لا علاقة له بأخلاقيات الأعمال.</span>"] },
  { ch: "ch1", q: "Firms taking action to prevent and detect business misconduct are incentivized by the rewards focused on by which of the following?", opts: ["U.S. Sentencing Commission", "Defense Industry Initiative", "World Trade Organization", "Federal Sentencing Guidelines for Organizations"], ans: 3, exp: ["❌ The U.S. Sentencing Commission created the FSGO, but the guidelines themselves contain the actual incentives.<br><span dir='rtl'>❌ اللجنة أنشأت FSGO، لكن الحوافز الفعلية موجودة في المبادئ التوجيهية ذاتها.</span>", "❌ The DII set voluntary best practices but did not create formal legal incentives for prevention.<br><span dir='rtl'>❌ DII وضعت ممارسات طوعية دون حوافز قانونية رسمية.</span>", "❌ The WTO is a global trade body unrelated to corporate ethics incentives.<br><span dir='rtl'>❌ منظمة التجارة العالمية هيئة تجارية دولية لا علاقة لها بحوافز الأخلاقيات.</span>", "✅ Correct. The FSGO provides specific rewards (reduced penalties, mitigation credit) for firms that proactively prevent and detect misconduct.<br><span dir='rtl'>✅ صح — FSGO يوفر مكافآت محددة (تخفيف العقوبات) للشركات التي تتخذ إجراءات استباقية لمنع المخالفات.</span>"] },
  { ch: "ch1", q: "Which of the following statements about morals is TRUE?", opts: ["Morals are the same as principles and ethics", "Morals relate to the business's ethical culture", "Morals are emphasized in business ethics programs", "Morals relate to you and you alone"], ans: 3, exp: ["❌ Morals, principles, and ethics are distinct concepts. Principles are boundaries; ethics are group-defined norms.<br><span dir='rtl'>❌ الأخلاق الشخصية والمبادئ وأخلاقيات الأعمال مفاهيم مختلفة ومتمايزة.</span>", "❌ Ethical culture is defined by the company and industry — morals are individual, not organizational.<br><span dir='rtl'>❌ الثقافة الأخلاقية تحددها الشركة والصناعة، وليست الأخلاق الشخصية للفرد.</span>", "❌ Business ethics programs emphasize organizational compliance and norms, not personal moral philosophies.<br><span dir='rtl'>❌ برامج أخلاقيات الأعمال تُركز على الامتثال التنظيمي، لا الأخلاق الشخصية.</span>", "✅ Correct. Morals are a person's personal philosophy about right and wrong. They belong to the individual alone.<br><span dir='rtl'>✅ صح — الأخلاق الشخصية هي فلسفة الفرد الخاصة حول الصواب والخطأ، تخصه وحده.</span>"] },
  { ch: "ch1", q: "Which of the following statements about values is TRUE?", opts: ["Values are specific and pervasive boundaries for behavior that should not be violated", "Values are acceptable behavior as defined by the company and industry", "Values are attempts by businesses to minimize negative impact on society", "Values are enduring beliefs and ideals that are socially enforced"], ans: 3, exp: ["❌ 'Specific and pervasive boundaries' is the definition of principles, not values.<br><span dir='rtl'>❌ 'الحدود السلوكية المحددة والمنتشرة' هي تعريف المبادئ، وليس القيم.</span>", "❌ Acceptable behavior defined by company/industry is the definition of ethical culture.<br><span dir='rtl'>❌ السلوك المقبول كما تحدده الشركة والصناعة هو تعريف الثقافة الأخلاقية.</span>", "❌ Minimizing negative impact relates to CSR/social responsibility, not values.<br><span dir='rtl'>❌ تقليل الأثر السلبي يتعلق بالمسؤولية الاجتماعية، وليس بتعريف القيم.</span>", "✅ Correct. Values are enduring beliefs and ideals that are socially enforced — persistent and broad.<br><span dir='rtl'>✅ صح — القيم هي معتقدات وأفكار راسخة تُفرض اجتماعيًا.</span>"] },
  { ch: "ch1", q: "As more than a compliance program, what is business ethics becoming?", opts: ["An integral part of management's efforts to achieve competitive advantage", "A guaranteed way to earn higher financial returns", "Mainly a government regulatory issue", "A program that decreases profits but increases societal benefits"], ans: 0, exp: ["✅ Correct. Business ethics has evolved into a strategic tool that management uses to build competitive advantage through trust and reputation.<br><span dir='rtl'>✅ صح — أصبحت أخلاقيات الأعمال أداة استراتيجية لبناء الميزة التنافسية عبر الثقة والسمعة.</span>", "❌ Ethics improves reputation and culture but cannot guarantee higher financial returns.<br><span dir='rtl'>❌ الأخلاقيات تُحسّن السمعة لكنها لا تضمن عوائد مالية أعلى.</span>", "❌ Business ethics is increasingly driven internally by organizations, not mainly by government regulation.<br><span dir='rtl'>❌ أخلاقيات الأعمال باتت تُقاد داخليًا بشكل متزايد، لا من الحكومة فحسب.</span>", "❌ Research shows ethical firms often achieve higher profits — ethics does not necessarily decrease them.<br><span dir='rtl'>❌ الأبحاث تُظهر أن الشركات الأخلاقية كثيرًا ما تحقق أرباحًا أعلى، لا أقل.</span>"] },
  { ch: "ch1", q: "Employees who view their organizational culture as ethical are more likely to _______.", opts: ["Ask for a raise", "Use their personal moral philosophies in decision making", "Make personal sacrifices for the organization", "Have a greater desire to become managers themselves"], ans: 2, exp: ["❌ Salary expectations are driven by personal and market factors, not by perception of ethical culture.<br><span dir='rtl'>❌ توقعات الراتب تعتمد على عوامل شخصية وسوقية، لا على تصوّر الثقافة الأخلاقية.</span>", "❌ In ethical cultures, employees follow organizational norms — personal morals become less dominant.<br><span dir='rtl'>❌ في الثقافات الأخلاقية، يتبع الموظفون المعايير التنظيمية أكثر من اعتمادهم على أخلاقهم الشخصية.</span>", "✅ Correct. Employees in ethical organizations develop loyalty and commitment, making them willing to sacrifice for the organization.<br><span dir='rtl'>✅ صح — موظفو المنظمات الأخلاقية يطوّرون ولاءً يجعلهم مستعدين للتضحية من أجل المنظمة.</span>", "❌ Ambition to become a manager is not a documented outcome of ethical culture perception.<br><span dir='rtl'>❌ الطموح الوظيفي لم يُوثَّق كنتيجة لتصوّر الثقافة الأخلاقية.</span>"] },
  { ch: "ch1", q: "The Foreign Corrupt Practices Act outlawed which of the following?", opts: ["Global accounting fraud", "Price collusion", "Corruption in foreign governments", "Bribery of a foreign public official"], ans: 3, exp: ["❌ Global accounting fraud is addressed by securities laws and SOX, not the FCPA.<br><span dir='rtl'>❌ الاحتيال المحاسبي يعالجه SOX وقوانين الأوراق المالية، لا FCPA.</span>", "❌ Price collusion is an antitrust issue under the Sherman Act, not the FCPA.<br><span dir='rtl'>❌ التواطؤ في الأسعار مسألة احتكار يعالجها قانون شيرمان، لا FCPA.</span>", "❌ The FCPA targets U.S. companies' actions — it does not regulate foreign governments themselves.<br><span dir='rtl'>❌ FCPA يستهدف تصرفات الشركات الأمريكية، لا الحكومات الأجنبية ذاتها.</span>", "✅ Correct. The FCPA (1977) specifically outlaws bribery of foreign public officials by U.S. persons and companies.<br><span dir='rtl'>✅ صح — FCPA (1977) يحظر صراحةً رشوة المسؤولين الأجانب من قِبَل الشركات الأمريكية.</span>"] },
  { ch: "ch1", q: "The Sarbanes-Oxley Act resulted in which of the following?", opts: ["It stiffened penalties for personal fraud", "It created an accounting oversight board requiring codes of ethics for financial reporting", "It required stakeholders to approve corporate financial statements", "It made securities fraud a civil offense"], ans: 1, exp: ["❌ SOX stiffened penalties for corporate securities fraud — not purely personal fraud.<br><span dir='rtl'>❌ SOX شدّد عقوبات الاحتيال في الأوراق المالية الشركاتي، لا الاحتيال الشخصي تحديدًا.</span>", "✅ Correct. SOX created the PCAOB (accounting oversight board) and required firms to establish codes of ethics for financial reporting.<br><span dir='rtl'>✅ صح — SOX أنشأ مجلس PCAOB وأوجب قواعد أخلاقيات للتقارير المالية.</span>", "❌ Financial statements are approved by management and external auditors, not general stakeholders.<br><span dir='rtl'>❌ البيانات المالية يعتمدها المدراء والمدققون، لا أصحاب المصلحة العامون.</span>", "❌ SOX made securities fraud a criminal offense — significantly harsher than civil penalties.<br><span dir='rtl'>❌ SOX جعل الاحتيال في الأوراق المالية جريمة جنائية، وليس مدنية.</span>"] },
  { ch: "ch1", q: "When building long-term relationships between businesses and consumers, which is essential for success?", opts: ["Profit", "Governance", "Trust", "A code of ethics"], ans: 2, exp: ["❌ Profit is an outcome of successful relationships, not the foundation that builds them.<br><span dir='rtl'>❌ الربح نتيجة للعلاقات الناجحة، وليس أساسها.</span>", "❌ Governance provides oversight structure but is not the relational glue with consumers.<br><span dir='rtl'>❌ الحوكمة توفر البنية الرقابية، وليست الرابط العلائقي مع المستهلكين.</span>", "✅ Correct. Trust is the essential foundation — without it, loyalty and repeat business cannot exist.<br><span dir='rtl'>✅ صح — الثقة هي الأساس الذي لا غنى عنه؛ بدونها لا ولاء ولا استمرار للأعمال.</span>", "❌ A code of ethics supports ethical behavior, but trust is the broader outcome that sustains long-term relationships.<br><span dir='rtl'>❌ قواعد الأخلاقيات تدعم الثقة، لكن الثقة ذاتها هي العنصر الجوهري.</span>"] },
  { ch: "ch1", q: "The Dodd-Frank Wall Street Reform and Consumer Protection Act was designed to do which of the following?", opts: ["It was very popular among Wall Street bankers", "It represented modest reform to the finance industry", "It was designed to make the financial services industry more responsible", "It made it mandatory for public corporations to hire ethics officers"], ans: 2, exp: ["❌ Dodd-Frank was deeply unpopular on Wall Street due to its extensive restrictions and compliance requirements.<br><span dir='rtl'>❌ كان قانون Dodd-Frank مكروهًا جدًا في وول ستريت بسبب قيوده الواسعة.</span>", "❌ Dodd-Frank was sweeping and comprehensive — one of the most significant financial reforms since the Great Depression.<br><span dir='rtl'>❌ كان إصلاحًا شاملًا وجذريًا، وليس متواضعًا.</span>", "✅ Correct. Dodd-Frank was designed to increase accountability and responsibility in financial services and protect consumers.<br><span dir='rtl'>✅ صح — صُمِّم لزيادة المساءلة والمسؤولية في الخدمات المالية وحماية المستهلكين.</span>", "❌ Dodd-Frank did not mandate the hiring of ethics officers for all public corporations.<br><span dir='rtl'>❌ لم يُلزم Dodd-Frank الشركات العامة بتعيين مسؤولي أخلاقيات.</span>"] },
  { ch: "ch1", q: "Ethical culture is defined as which of the following?", opts: ["Rules, standards, and moral principles regarding what is right or wrong", "The establishment and enforcement of ethical codes throughout an organization", "The development of rules and norms that are socially enforced", "Acceptable behavior as defined by the company and industry"], ans: 3, exp: ["❌ Rules, standards, and moral principles about right/wrong more broadly define business ethics.<br><span dir='rtl'>❌ القواعد والمعايير والمبادئ الأخلاقية تعريف أشمل لأخلاقيات الأعمال.</span>", "❌ Establishing and enforcing codes describes an ethics compliance program, not culture itself.<br><span dir='rtl'>❌ إنشاء وتطبيق القواعد هو برنامج الامتثال الأخلاقي، وليس الثقافة ذاتها.</span>", "❌ Socially enforced rules and norms describe values, not ethical culture.<br><span dir='rtl'>❌ المعايير المُفرضة اجتماعيًا هي تعريف القيم، لا الثقافة الأخلاقية.</span>", "✅ Correct. Ethical culture = acceptable behavior as defined by the company and industry. It reflects the integrity of decisions made within the firm.<br><span dir='rtl'>✅ صح — الثقافة الأخلاقية = السلوك المقبول كما تحدده الشركة والصناعة.</span>"] },
  { ch: "ch1", q: "The Federal Sentencing Guidelines for Organizations set the tone for organizational ethics compliance programs through which of the following?", opts: ["Codifying into law incentives for organizations to develop ethical compliance programs", "Forcing all organizations to develop mandatory reporting systems", "Eliminating most federal legislation", "Providing detailed guidelines for how to set up organizational ethics programs"], ans: 0, exp: ["✅ Correct. The FSGO codified incentives (reduced penalties, mitigation credit) into law, encouraging organizations to proactively build ethics compliance programs.<br><span dir='rtl'>✅ صح — FSGO قنّن الحوافز (تخفيف العقوبات) في القانون لتشجيع بناء برامج الامتثال الأخلاقي.</span>", "❌ The FSGO uses a carrot-and-stick approach — it did not mandate universal reporting systems.<br><span dir='rtl'>❌ FSGO يستخدم أسلوب الجزرة والعصا ولم يُلزم بأنظمة تقارير إلزامية شاملة.</span>", "❌ The FSGO added to legislation rather than eliminating it.<br><span dir='rtl'>❌ FSGO أضاف تشريعات ولم يُلغِ التشريعات الموجودة.</span>", "❌ The FSGO set standards and incentives but did not provide step-by-step setup instructions.<br><span dir='rtl'>❌ FSGO وضع معايير وحوافز، لا تعليمات تفصيلية خطوة بخطوة.</span>"] },
  { ch: "ch1", q: "Investors are concerned about business ethics because they know that misconduct can _______.", opts: ["Harm the ability to monitor changes", "Increase prices of consumer products", "Cause delays in government intervention", "Lower stock prices"], ans: 3, exp: ["❌ Monitoring ability is an internal governance concern, not the primary investor worry.<br><span dir='rtl'>❌ القدرة على المراقبة شأن حوكمي داخلي، وليس القلق الرئيسي للمستثمرين.</span>", "❌ Misconduct does not reliably raise consumer prices — it more directly destroys investor value.<br><span dir='rtl'>❌ السلوك المخالف لا يرفع أسعار المستهلكين بصفة موثوقة، بل يدمر قيمة المستثمر.</span>", "❌ Government intervention delays are not the main investor concern regarding corporate misconduct.<br><span dir='rtl'>❌ تأخيرات تدخل الحكومة ليست القلق الرئيسي للمستثمرين.</span>", "✅ Correct. Investors know that discovered misconduct damages reputation and trust, directly lowering stock prices and harming investments.<br><span dir='rtl'>✅ صح — السلوك المخالف يضر بالسمعة والثقة ويُخفض أسعار الأسهم مباشرةً.</span>"] },
  { ch: "ch1", q: "When an organization has a strong ethical environment, it usually focuses on placing whose interests first?", opts: ["Customers'", "Employees'", "Stockholders'", "Suppliers'"], ans: 0, exp: ["✅ Correct. Strong ethical organizations prioritize customers — meeting their needs honestly builds the trust that drives long-term success.<br><span dir='rtl'>✅ صح — المنظمات الأخلاقية تُولي أولوية للعملاء؛ الخدمة الصادقة تبني الثقة والنجاح طويل الأمد.</span>", "❌ Employee interests matter greatly, but in an ethical environment, external customer welfare typically comes first.<br><span dir='rtl'>❌ مصالح الموظفين مهمة، لكن رفاهية العملاء الخارجيين تأتي عادةً في المقدمة.</span>", "❌ Prioritizing stockholders above all reflects the shareholder model, not a strong ethical environment.<br><span dir='rtl'>❌ إيلاء المساهمين الأولوية المطلقة هو نموذج المساهمين، وليس البيئة الأخلاقية.</span>", "❌ Suppliers are valued partners but are not placed first in a strong ethical culture.<br><span dir='rtl'>❌ الموردون شركاء مهمون لكنهم لا يُوضعون في المقدمة في الثقافة الأخلاقية.</span>"] },
  { ch: "ch1", q: "What happens when society deems a particular business action as wrong or unethical?", opts: ["Legislation usually follows", "The guilty individual is jailed", "Self-regulation is deemed a failure", "The company goes bankrupt"], ans: 0, exp: ["✅ Correct. When society labels a business practice as unethical, public pressure typically leads to government legislation to regulate or ban it.<br><span dir='rtl'>✅ صح — الإدانة الاجتماعية لممارسة تجارية عادةً تُفضي إلى تشريعات حكومية لتنظيمها.</span>", "❌ Individual imprisonment rarely follows automatically from ethical condemnation of business practices.<br><span dir='rtl'>❌ السجن الفردي لا يتبع الإدانة الاجتماعية تلقائيًا.</span>", "❌ Legislation following doesn't necessarily mean self-regulation failed — it may be proactive societal response.<br><span dir='rtl'>❌ صدور تشريع لا يعني بالضرورة فشل التنظيم الذاتي.</span>", "❌ Companies rarely go bankrupt solely from ethical condemnation without broader financial consequences.<br><span dir='rtl'>❌ الشركات نادرًا ما تُفلس بسبب الإدانة الأخلاقية وحدها.</span>"] },
  { ch: "ch1", q: "A global compliance management standard that addresses risks, legal requirements, and stakeholder needs is known as _______.", opts: ["The Ethical Trading Initiative", "The UN Global Compact", "The Defense Industry Initiative", "ISO 19600"], ans: 3, exp: ["❌ The Ethical Trading Initiative focuses on supply chain labor standards, not broad compliance management.<br><span dir='rtl'>❌ مبادرة التجارة الأخلاقية تتعلق بمعايير العمل في سلسلة التوريد.</span>", "❌ The UN Global Compact is 10 principles on human rights, labor, environment, and anti-corruption — not a compliance management standard.<br><span dir='rtl'>❌ الميثاق العالمي للأمم المتحدة هو ذو المبادئ العشرة، وليس معيار إدارة امتثال.</span>", "❌ The DII was a 1980s defense industry initiative, not a global compliance standard.<br><span dir='rtl'>❌ DII مبادرة صناعة الدفاع في الثمانينيات، وليست معيارًا دوليًا للامتثال.</span>", "✅ Correct. ISO 19600 is the global compliance management standard addressing organizational risks, legal requirements, and stakeholder needs.<br><span dir='rtl'>✅ صح — ISO 19600 المعيار الدولي لإدارة الامتثال الذي يعالج المخاطر والمتطلبات القانونية واحتياجات أصحاب المصلحة.</span>"] },
  { ch: "ch1", q: "Specific and pervasive boundaries for behavior that should not be violated are known as _______.", opts: ["Philosophy", "Values", "Principles", "Business ethics"], ans: 2, exp: ["❌ Philosophy is a broad academic field of reasoning — not specific behavioral boundaries.<br><span dir='rtl'>❌ الفلسفة مجال أكاديمي فضفاض وليست حدودًا سلوكية محددة.</span>", "❌ Values are enduring beliefs and ideals; they are broader and less boundary-like than principles.<br><span dir='rtl'>❌ القيم معتقدات راسخة أوسع نطاقًا من المبادئ.</span>", "✅ Correct. Principles are the specific and pervasive behavioral boundaries (e.g., honesty, fairness) that should never be violated.<br><span dir='rtl'>✅ صح — المبادئ هي الحدود السلوكية المحددة والمنتشرة التي لا ينبغي انتهاكها.</span>", "❌ Business ethics is the broader field encompassing principles, values, and norms — not the boundaries themselves.<br><span dir='rtl'>❌ أخلاقيات الأعمال هي المجال الأشمل الذي يضم المبادئ والقيم والمعايير.</span>"] },
  { ch: "ch1", q: "Which concept refers to a person's personal philosophy about what is right or wrong?", opts: ["Philosophy", "Values", "Principles", "Morals"], ans: 3, exp: ["❌ Philosophy is the academic discipline of reasoning — too broad and impersonal.<br><span dir='rtl'>❌ الفلسفة تخصص أكاديمي فضفاض وغير شخصي.</span>", "❌ Values are enduring beliefs that are socially enforced — broader than personal right/wrong philosophy.<br><span dir='rtl'>❌ القيم معتقدات مُفرضة اجتماعيًا، أوسع من فلسفة الصواب والخطأ الشخصية.</span>", "❌ Principles are specific behavioral boundaries, not personal philosophies about right and wrong.<br><span dir='rtl'>❌ المبادئ حدود سلوكية محددة، وليست فلسفات شخصية.</span>", "✅ Correct. Morals = a person's personal philosophy about what is right or wrong, belonging to the individual alone.<br><span dir='rtl'>✅ صح — الأخلاق الشخصية هي فلسفة الفرد الخاصة حول الصواب والخطأ، تخصه وحده.</span>"] },
  { ch: "ch1", q: "A situation where a person is faced with two or more choices, all of which are undesirable, is known as a(n) _______.", opts: ["Value dilemma", "Integrity management", "Philosophical dilemma", "Moral dilemma"], ans: 3, exp: ["❌ 'Value dilemma' is not a standard business ethics term for this concept.<br><span dir='rtl'>❌ 'معضلة القيم' ليست مصطلحًا معياريًا في أخلاقيات الأعمال.</span>", "❌ Integrity management refers to maintaining ethical standards, not facing undesirable choices.<br><span dir='rtl'>❌ إدارة النزاهة تتعلق بصون المعايير الأخلاقية، لا بمواجهة خيارات صعبة.</span>", "❌ 'Philosophical dilemma' is too vague and does not specifically capture the undesirable-choices scenario.<br><span dir='rtl'>❌ 'المعضلة الفلسفية' غامضة ولا تصف موقف الخيارات غير المرغوبة بدقة.</span>", "✅ Correct. A moral dilemma occurs when a person must choose between two or more options, all of which are undesirable or ethically problematic.<br><span dir='rtl'>✅ صح — المعضلة الأخلاقية هي موقف تكون فيه جميع الخيارات المتاحة غير مرغوبة.</span>"] },
  { ch: "ch1", q: "The term comprising organizational principles, values, and norms that primarily guide individual and group behavior in business is _______.", opts: ["Stakeholder orientation", "Values", "Principles", "Business ethics"], ans: 3, exp: ["❌ Stakeholder orientation is about understanding and addressing stakeholder demands — not the term for guiding principles and norms.<br><span dir='rtl'>❌ التوجه نحو أصحاب المصلحة يتعلق بفهم متطلباتهم، لا المصطلح الشامل للمعايير التوجيهية.</span>", "❌ Values are one component of business ethics, not the complete concept.<br><span dir='rtl'>❌ القيم مكوّن واحد من أخلاقيات الأعمال، وليست المفهوم الكامل.</span>", "❌ Principles are specific behavioral boundaries — one component, not the complete term.<br><span dir='rtl'>❌ المبادئ مكوّن واحد أيضًا، وليست المصطلح الشامل.</span>", "✅ Correct. Business ethics = organizational principles, values, and norms that guide individual and group behavior in business.<br><span dir='rtl'>✅ صح — أخلاقيات الأعمال تشمل المبادئ والقيم والمعايير التنظيمية التي توجّه السلوك.</span>"] },
  { ch: "ch1", q: "ISO 19600 is a set of 10 principles concerning human rights, labor, the environment, and anti-corruption. True or False?", opts: ["True — it covers all these areas", "False — ISO 19600 is a compliance management standard, not the 10-principle Global Compact", "True — it was developed by the UN", "False — ISO 19600 covers only environmental standards"], ans: 1, exp: ["❌ ISO 19600 does not contain 10 principles — that is the UN Global Compact.<br><span dir='rtl'>❌ ISO 19600 لا تحتوي على مبادئ عشرة — تلك خاصة بالميثاق العالمي للأمم المتحدة.</span>", "✅ Correct. FALSE. ISO 19600 is a compliance management standard. The 10 principles on human rights, labor, environment, and anti-corruption belong to the UN Global Compact.<br><span dir='rtl'>✅ صح — العبارة خاطئة. ISO 19600 معيار إدارة امتثال، بينما المبادئ العشرة تخص الميثاق العالمي للأمم المتحدة.</span>", "❌ ISO 19600 was developed by the International Organization for Standardization (ISO), not the UN.<br><span dir='rtl'>❌ ISO 19600 أصدرته المنظمة الدولية للمعايير (ISO)، وليس الأمم المتحدة.</span>", "❌ ISO 19600 covers compliance management broadly — environmental standards specifically belong to ISO 14000.<br><span dir='rtl'>❌ ISO 19600 يغطي إدارة الامتثال الشامل؛ المعايير البيئية تحديدًا خاصة بـ ISO 14000.</span>"] },
  { ch: "ch1", q: "Prior to the 1960s, ethical issues related to business were often discussed in the domain of which fields?", opts: ["Law and economics", "Theology or philosophy", "Marketing and management", "Psychology and sociology"], ans: 1, exp: ["❌ Law and economics became more prominent later; pre-1960s ethics was more moral and religious in nature.<br><span dir='rtl'>❌ القانون والاقتصاد أصبحا بارزَين لاحقًا؛ أخلاقيات ما قبل الستينيات كانت دينية وفلسفية.</span>", "✅ Correct. Before the 1960s, business ethics was primarily discussed in theology and philosophy — asking moral and spiritual questions about right conduct.<br><span dir='rtl'>✅ صح — قبل الستينيات، كانت الأخلاقيات التجارية تُناقش في اللاهوت والفلسفة أساسًا.</span>", "❌ Marketing and management emerged as distinct disciplines more prominently in the mid-20th century.<br><span dir='rtl'>❌ التسويق والإدارة ظهرا بوضوح كتخصصات مستقلة في منتصف القرن العشرين.</span>", "❌ Psychology and sociology address behavior but were not the primary pre-1960s domains for business ethics discussion.<br><span dir='rtl'>❌ علم النفس والاجتماع لم يكونا المجالَين الرئيسيَّين لأخلاقيات الأعمال قبل الستينيات.</span>"] },

  // ════════════════ CHAPTER 2 ════════════════
  { ch: "ch2", q: "Those who have a claim in some aspect of a firm's products, operations, markets, industry, and outcomes are known as _______.", opts: ["Shareholders", "Stockholders", "Stakeholders", "Claimholders"], ans: 2, exp: ["❌ Shareholders only own equity — stakeholders is a broader concept including everyone with a claim.<br><span dir='rtl'>❌ المساهمون يملكون حصصًا فحسب — أصحاب المصلحة مفهوم أوسع يشمل كل من له مطلب.</span>", "❌ Stockholders = shareholders; the same narrow ownership group.<br><span dir='rtl'>❌ حاملو الأسهم = المساهمون؛ نفس المجموعة الضيقة من الملاك.</span>", "✅ Correct. Stakeholders = anyone with a stake or claim in any aspect of a firm's products, operations, markets, industry, or outcomes.<br><span dir='rtl'>✅ صح — أصحاب المصلحة = كل من له مطلب أو حصة في أي جانب من منتجات الشركة أو عملياتها أو أسواقها أو نتائجها.</span>", "❌ 'Claimholders' is not a standard stakeholder term in business ethics.<br><span dir='rtl'>❌ 'أصحاب المطالب' ليس المصطلح المعياري في أخلاقيات الأعمال.</span>"] },
  { ch: "ch2", q: "Stakeholders' power over businesses stems from their _______.", opts: ["Ability to withhold organizational resources", "Ability to generate profits", "Media impact", "Political influence"], ans: 0, exp: ["✅ Correct. Stakeholders gain power by being able to withhold resources the firm needs — customers stop buying, employees quit, investors withdraw capital.<br><span dir='rtl'>✅ صح — قوة أصحاب المصلحة تأتي من قدرتهم على حجب الموارد التي تحتاجها الشركة.</span>", "❌ Generating profits is the firm's activity, not a source of stakeholder power over the firm.<br><span dir='rtl'>❌ تحقيق الأرباح نشاط الشركة، وليس مصدر قوة أصحاب المصلحة عليها.</span>", "❌ Media impact is one form of influence but not the primary, universal source of stakeholder power.<br><span dir='rtl'>❌ التأثير الإعلامي شكل واحد من أشكال التأثير، وليس المصدر الرئيسي العالمي لقوة أصحاب المصلحة.</span>", "❌ Political influence is a secondary form of stakeholder power, not the foundational source.<br><span dir='rtl'>❌ التأثير السياسي شكل ثانوي من أشكال قوة أصحاب المصلحة، وليس الأساسي.</span>"] },
  { ch: "ch2", q: "Which group is defined as one that does not typically engage in transactions with a company and is not essential for its survival?", opts: ["Employees", "Secondary stakeholders", "Primary stakeholders", "Investors"], ans: 1, exp: ["❌ Employees engage directly in the firm's operations daily — they are primary stakeholders.<br><span dir='rtl'>❌ الموظفون يتعاملون مباشرة مع عمليات الشركة — فهم أصحاب مصلحة أساسيون.</span>", "✅ Correct. Secondary stakeholders do not typically engage in direct transactions and are not essential for day-to-day survival.<br><span dir='rtl'>✅ صح — أصحاب المصلحة الثانويون لا يشاركون مباشرة ولا يُعدّون أساسيين لبقاء الشركة.</span>", "❌ Primary stakeholders are absolutely essential for the firm's survival.<br><span dir='rtl'>❌ أصحاب المصلحة الأساسيون ضروريون للغاية لبقاء الشركة.</span>", "❌ Investors provide capital — they are primary stakeholders whose resources are essential.<br><span dir='rtl'>❌ المستثمرون يوفرون رأس المال — فهم أصحاب مصلحة أساسيون لا غنى عن مواردهم.</span>"] },
  { ch: "ch2", q: "A firm that explicitly acknowledges dialogue between a firm's internal and external environments has adopted which of the following?", opts: ["A stakeholder model of socially responsible governance", "A stakeholder bias", "A code of ethics", "A stakeholder interaction model"], ans: 3, exp: ["❌ The stakeholder model of governance is broader — it's about how a firm makes decisions, not just dialogue.<br><span dir='rtl'>❌ نموذج الحوكمة لأصحاب المصلحة أوسع — يتعلق بكيفية اتخاذ القرارات، لا مجرد الحوار.</span>", "❌ A 'stakeholder bias' implies unfair favoritism, not a structured dialogue approach.<br><span dir='rtl'>❌ 'تحيز أصحاب المصلحة' يعني محاباة غير عادلة، وليس نهج حوار منظم.</span>", "❌ A code of ethics is a set of behavioral guidelines, not a model of internal/external dialogue.<br><span dir='rtl'>❌ قواعد الأخلاقيات مجموعة إرشادات سلوكية، وليست نموذجًا للحوار الداخلي والخارجي.</span>", "✅ Correct. The stakeholder interaction model explicitly acknowledges dialogue between a firm's internal and external environments.<br><span dir='rtl'>✅ صح — نموذج التفاعل مع أصحاب المصلحة يعترف صراحةً بالحوار بين البيئتين الداخلية والخارجية للشركة.</span>"] },
  { ch: "ch2", q: "The degree to which a firm understands and addresses stakeholder demands refers to _______.", opts: ["A stakeholder orientation", "A shareholder orientation", "The stakeholder interaction model", "A two-way street"], ans: 0, exp: ["✅ Correct. Stakeholder orientation = the degree to which a firm understands and addresses stakeholder demands.<br><span dir='rtl'>✅ صح — التوجه نحو أصحاب المصلحة = درجة فهم الشركة لمتطلباتهم ومعالجتها.</span>", "❌ A shareholder orientation focuses narrowly on owners and investor returns.<br><span dir='rtl'>❌ توجه المساهمين يركز بشكل ضيق على الملاك وعوائد المستثمرين.</span>", "❌ The stakeholder interaction model is the structural framework for dialogue, not the degree of engagement.<br><span dir='rtl'>❌ نموذج التفاعل هو الإطار الهيكلي للحوار، وليس درجة الانخراط.</span>", "❌ 'Two-way street' is informal language, not the formal term.<br><span dir='rtl'>❌ 'الشارع ذو الاتجاهين' تعبير غير رسمي وليس المصطلح المعتمد.</span>"] },
  { ch: "ch2", q: "Why is it important for businesses to recognize secondary stakeholder groups?", opts: ["They are absolutely necessary for the firm's survival", "They include the employees necessary for success", "They always have more power than primary stakeholders", "They have legitimacy and the power to influence outcomes"], ans: 3, exp: ["❌ Absolutely necessary for survival = primary stakeholders, not secondary.<br><span dir='rtl'>❌ الضرورة المطلقة للبقاء = أصحاب المصلحة الأساسيون، لا الثانويون.</span>", "❌ Employees are primary stakeholders — they engage directly and are essential.<br><span dir='rtl'>❌ الموظفون أصحاب مصلحة أساسيون يتعاملون مباشرة وهم ضروريون.</span>", "❌ Secondary stakeholders do not always have more power than primary ones.<br><span dir='rtl'>❌ أصحاب المصلحة الثانويون لا يملكون دائمًا قوة أكبر من الأساسيين.</span>", "✅ Correct. Even though they're not essential for survival, secondary stakeholders have legitimacy and real power to shape perceptions, regulations, and outcomes.<br><span dir='rtl'>✅ صح — رغم عدم ضرورتهم للبقاء، يمتلك أصحاب المصلحة الثانويون شرعية وقدرة حقيقية على التأثير في النتائج والتشريعات.</span>"] },
  { ch: "ch2", q: "A stakeholder group that is absolutely necessary for a firm's survival is defined as a _______.", opts: ["Direct stakeholder", "Tertiary stakeholder", "Secondary stakeholder", "Primary stakeholder"], ans: 3, exp: ["❌ 'Direct stakeholder' is not the formal textbook term.<br><span dir='rtl'>❌ 'صاحب المصلحة المباشر' ليس المصطلح الكتابي الرسمي.</span>", "❌ Tertiary stakeholder is not a standard category in this framework.<br><span dir='rtl'>❌ صاحب المصلحة الثالثي ليس فئة معيارية في هذا الإطار.</span>", "❌ Secondary stakeholders are NOT essential for the firm's day-to-day survival.<br><span dir='rtl'>❌ أصحاب المصلحة الثانويون ليسوا ضروريين لبقاء الشركة اليومي.</span>", "✅ Correct. Primary stakeholders = those whose continued association and resources are absolutely necessary for a firm's survival.<br><span dir='rtl'>✅ صح — أصحاب المصلحة الأساسيون = من استمرار ارتباطهم ومواردهم ضروري تمامًا لبقاء الشركة.</span>"] },
  { ch: "ch2", q: "When unethical acts are discovered in a firm, in most instances _______.", opts: ["They are caused by unwilling participants", "The cause is due to external stakeholders", "The perpetrators are always caught and prosecuted", "Their acceptance and perpetuation were facilitated by cooperation or complicity"], ans: 3, exp: ["❌ Unethical acts typically involve willing participants who benefit from or rationalize the misconduct.<br><span dir='rtl'>❌ الأفعال غير الأخلاقية عادةً تشمل مشاركين راغبين يستفيدون من المخالفة أو يبررونها.</span>", "❌ Most organizational misconduct originates internally — external stakeholders rarely cause it.<br><span dir='rtl'>❌ معظم المخالفات التنظيمية تنشأ داخليًا — نادرًا ما يتسبب فيها أصحاب المصلحة الخارجيون.</span>", "❌ Many cases of misconduct go undetected or unprosecuted.<br><span dir='rtl'>❌ كثير من حالات المخالفات لا تُكتشف أو لا تُلاحَق قانونيًا.</span>", "✅ Correct. Unethical acts within organizations are almost always facilitated by internal cooperation, complicity, or willful blindness among employees.<br><span dir='rtl'>✅ صح — الأفعال غير الأخلاقية داخل المنظمات تُيسّرها دائمًا تقريبًا التعاون الداخلي أو التواطؤ أو التعامي المتعمد.</span>"] },
  { ch: "ch2", q: "Which approach identifies ethical guidelines that dictate how firms SHOULD treat stakeholders?", opts: ["Descriptive approach", "Instrumental approach", "Normative approach", "Stakeholder interaction model"], ans: 2, exp: ["❌ The descriptive approach describes how firms actually do behave toward stakeholders.<br><span dir='rtl'>❌ النهج الوصفي يصف كيف تتصرف الشركات فعليًا مع أصحاب المصلحة.</span>", "❌ The instrumental approach focuses on how ethical treatment leads to better business outcomes.<br><span dir='rtl'>❌ النهج الأداتي يركز على كيف يؤدي التعامل الأخلاقي إلى نتائج أعمال أفضل.</span>", "✅ Correct. The normative approach prescribes how firms SHOULD treat stakeholders based on ethical guidelines.<br><span dir='rtl'>✅ صح — النهج المعياري يحدد المبادئ الأخلاقية التي ينبغي للشركات اتباعها مع أصحاب المصلحة.</span>", "❌ The stakeholder interaction model is a structural diagram of relationships, not an ethical prescription.<br><span dir='rtl'>❌ نموذج التفاعل مع أصحاب المصلحة مخطط هيكلي للعلاقات، وليس وصفة أخلاقية.</span>"] },
  { ch: "ch2", q: "A stakeholder orientation can be viewed as a(n) _______.", opts: ["Necessity for business success", "Continuum", "Polarizing concept", "Expensive proposition"], ans: 1, exp: ["❌ Stakeholder orientation is valuable but firms can survive at varying levels — it's not a binary necessity.<br><span dir='rtl'>❌ التوجه نحو أصحاب المصلحة قيّم لكن الشركات تبقى بدرجات متفاوتة منه — ليس ضرورة ثنائية.</span>", "✅ Correct. Stakeholder orientation is viewed as a continuum — firms can have low, medium, or high degrees of engagement.<br><span dir='rtl'>✅ صح — يُنظر إلى التوجه نحو أصحاب المصلحة على أنه طيف متصل بين مستويات منخفضة ومتوسطة وعالية.</span>", "❌ Stakeholder orientation is not inherently polarizing; most management scholars support it.<br><span dir='rtl'>❌ التوجه نحو أصحاب المصلحة ليس استقطابيًا بطبيعته؛ معظم الباحثين في الإدارة يدعمونه.</span>", "❌ While resource-intensive, it is not defined as inherently expensive — it can generate returns.<br><span dir='rtl'>❌ رغم كثافته في الموارد، لا يُعرَّف على أنه مكلف بالضرورة — يمكن أن يولّد عوائد.</span>"] },
  { ch: "ch2", q: "The four levels of social responsibility include which of the following?", opts: ["Economic, social, legal, and voluntary", "Economic, legal, environmental, and ethical", "Financial, legal, environmental, and philanthropic", "Economic, legal, ethical, and philanthropic"], ans: 3, exp: ["❌ 'Social' and 'voluntary' are not Carroll's four levels — philanthropic replaces these.<br><span dir='rtl'>❌ 'الاجتماعي' و'الطوعي' ليسا من مستويات كارول الأربعة — الخيري يحل محلهما.</span>", "❌ Environmental is not one of Carroll's four levels; ethical and philanthropic are.<br><span dir='rtl'>❌ البيئي ليس من مستويات كارول الأربعة؛ الأخلاقي والخيري هما المستويان الصحيحان.</span>", "❌ Financial replaces economic incorrectly; environmental replaces ethical incorrectly.<br><span dir='rtl'>❌ المالي يحل محل الاقتصادي بشكل خاطئ؛ والبيئي يحل محل الأخلاقي بشكل خاطئ.</span>", "✅ Correct. Carroll's pyramid = Economic (make profit), Legal (obey laws), Ethical (do what's right), Philanthropic (be a good citizen).<br><span dir='rtl'>✅ صح — هرم كارول = الاقتصادي (تحقيق الربح)، القانوني (احترام القوانين)، الأخلاقي، والخيري (المواطنة الجيدة).</span>"] },
  { ch: "ch2", q: "The first of three activities associated with the stakeholder orientation is _______.", opts: ["An organization-wide generation of data", "An organization's responsiveness to intelligence", "A set of consumer attributes being identified", "An organizational strategy of target markets"], ans: 0, exp: ["✅ Correct. The first activity = generating organization-wide data about stakeholder groups and their concerns.<br><span dir='rtl'>✅ صح — النشاط الأول = توليد بيانات على مستوى المنظمة بأكملها حول مجموعات أصحاب المصلحة ومخاوفهم.</span>", "❌ Responsiveness to intelligence is the third activity in the stakeholder orientation process.<br><span dir='rtl'>❌ الاستجابة للمعلومات هي النشاط الثالث في عملية التوجه نحو أصحاب المصلحة.</span>", "❌ Consumer attributes is a marketing concept, too narrow for the stakeholder orientation framework.<br><span dir='rtl'>❌ خصائص المستهلكين مفهوم تسويقي ضيق لا يناسب إطار التوجه نحو أصحاب المصلحة.</span>", "❌ Target market strategy is a marketing concept, not a stakeholder orientation activity.<br><span dir='rtl'>❌ استراتيجية السوق المستهدف مفهوم تسويقي، وليس نشاطًا في التوجه نحو أصحاب المصلحة.</span>"] },
  { ch: "ch2", q: "Public health and safety and the support of local organizations are issues most relevant to which stakeholder group?", opts: ["Investors", "Community", "Suppliers", "Employees"], ans: 1, exp: ["❌ Investors care about financial returns, governance, and risk — not local community health issues.<br><span dir='rtl'>❌ المستثمرون يهتمون بالعوائد المالية والحوكمة والمخاطر — لا بقضايا صحة المجتمع المحلي.</span>", "✅ Correct. Community stakeholders care most about public health, safety, and whether the firm supports local organizations.<br><span dir='rtl'>✅ صح — أصحاب المصلحة في المجتمع يهتمون بالصحة العامة والسلامة ودعم المنظمات المحلية.</span>", "❌ Suppliers focus on fair contracts, payment terms, and business relationships.<br><span dir='rtl'>❌ الموردون يركزون على العقود العادلة وشروط الدفع والعلاقات التجارية.</span>", "❌ Employees focus on wages, workplace safety, and working conditions — not broader community concerns.<br><span dir='rtl'>❌ الموظفون يركزون على الأجور وسلامة بيئة العمل، لا المخاوف المجتمعية الأوسع.</span>"] },
  { ch: "ch2", q: "Minimizing the use of energy and reducing emissions and waste are issues of importance to which stakeholder category?", opts: ["Environmental groups", "Suppliers", "Employees", "Investors"], ans: 0, exp: ["✅ Correct. Environmental groups specifically advocate for energy efficiency, emissions reduction, and waste minimization.<br><span dir='rtl'>✅ صح — المجموعات البيئية تدافع تحديدًا عن كفاءة الطاقة وخفض الانبعاثات وتقليل النفايات.</span>", "❌ Suppliers focus on supply chain relationships and fair business practices.<br><span dir='rtl'>❌ الموردون يركزون على علاقات سلسلة التوريد والممارسات التجارية العادلة.</span>", "❌ Employees primarily focus on workplace conditions, compensation, and job security.<br><span dir='rtl'>❌ الموظفون يركزون بشكل رئيسي على ظروف العمل والتعويض والأمان الوظيفي.</span>", "❌ Investors care about financial performance; some ESG investors care about sustainability but it's not the category's defining issue.<br><span dir='rtl'>❌ المستثمرون يهتمون بالأداء المالي؛ بعض مستثمري ESG يهتمون بالاستدامة لكنها ليست القضية المحددة للفئة.</span>"] },
  { ch: "ch2", q: "The idea that the basic mission of business is to produce goods and services at a profit is associated with which individual?", opts: ["Adam Smith", "Archie Carroll", "Karl Marx", "Milton Friedman"], ans: 3, exp: ["❌ Adam Smith is associated with the invisible hand and free markets, not specifically the profit-only mission statement.<br><span dir='rtl'>❌ آدم سميث مرتبط باليد الخفية والأسواق الحرة، لا بمهمة الربح الحصري.</span>", "❌ Archie Carroll developed the four-level CSR pyramid — he argued for broader responsibilities beyond profit.<br><span dir='rtl'>❌ أرشي كارول طور هرم المسؤولية الاجتماعية ذو المستويات الأربعة — وجادل بمسؤوليات أوسع من الربح.</span>", "❌ Karl Marx was a critic of capitalism, not an advocate for profit as the sole business mission.<br><span dir='rtl'>❌ كارل ماركس كان ناقدًا للرأسمالية، لا مدافعًا عن الربح بوصفه المهمة الوحيدة للأعمال.</span>", "✅ Correct. Milton Friedman famously argued that the basic mission of business is to produce goods/services at a profit and that social responsibility beyond this is inappropriate.<br><span dir='rtl'>✅ صح — ميلتون فريدمان جادل بأن المهمة الأساسية للأعمال هي تحقيق الربح وأن المسؤولية الاجتماعية الإضافية غير لائقة.</span>"] },
  { ch: "ch2", q: "The idea of the invisible hand, a fundamental concept in free market capitalism, was developed by _______.", opts: ["Adam Smith", "John Maynard Keynes", "Janet Yellen", "Milton Friedman"], ans: 0, exp: ["✅ Correct. Adam Smith introduced the 'invisible hand' concept in The Wealth of Nations (1776) — the idea that self-interest in markets guides efficient resource allocation.<br><span dir='rtl'>✅ صح — آدم سميث قدّم مفهوم 'اليد الخفية' في ثروة الأمم (1776) — الفكرة أن المصلحة الذاتية في الأسواق توجّه تخصيص الموارد بكفاءة.</span>", "❌ Keynes focused on macroeconomics and government intervention, not the invisible hand.<br><span dir='rtl'>❌ كينز ركز على الاقتصاد الكلي وتدخل الحكومة، لا على اليد الخفية.</span>", "❌ Janet Yellen is a modern economist and former Fed Chair — not associated with classical market theory.<br><span dir='rtl'>❌ جانيت يلين اقتصادية معاصرة ورئيسة سابقة للاحتياطي الفيدرالي — غير مرتبطة بالنظرية الكلاسيكية للسوق.</span>", "❌ Friedman was a monetarist who supported free markets but did not originate the invisible hand concept.<br><span dir='rtl'>❌ فريدمان كان من المدرسة النقدية ويدعم الأسواق الحرة لكنه لم يُطوّر مفهوم اليد الخفية.</span>"] },
  { ch: "ch2", q: "The idea that social rules should benefit the community because people live in a community is known as _______.", opts: ["The stakeholder interaction model", "Consumer protection", "The common good", "Corporate governance"], ans: 2, exp: ["❌ The stakeholder interaction model is about corporate relationships with stakeholders, not a philosophical principle.<br><span dir='rtl'>❌ نموذج التفاعل مع أصحاب المصلحة يتعلق بالعلاقات الشركاتية، لا بمبدأ فلسفي.</span>", "❌ Consumer protection focuses on safeguarding individuals in the marketplace.<br><span dir='rtl'>❌ حماية المستهلك تركز على حماية الأفراد في السوق.</span>", "✅ Correct. The common good = the idea that social rules and organizations should benefit the community because individuals live within a community context.<br><span dir='rtl'>✅ صح — المصلحة العامة تعني أن القواعد الاجتماعية يجب أن تفيد المجتمع ككل لأن الأفراد يعيشون في سياق مجتمعي.</span>", "❌ Corporate governance refers to oversight, accountability, and control within organizations.<br><span dir='rtl'>❌ حوكمة الشركات تشمل الإشراف والمساءلة والرقابة داخل المنظمات.</span>"] },
  { ch: "ch2", q: "The extent to which a firm meets economic, legal, ethical, and philanthropic responsibilities placed by various stakeholders is referred to as its _______.", opts: ["Reputation", "Corporate citizenship", "Corporate ethical audit", "Fiduciary duties"], ans: 1, exp: ["❌ Reputation is how others perceive the firm — it may result from good citizenship but is not the definition.<br><span dir='rtl'>❌ السمعة هي كيف ينظر الآخرون للشركة — قد تنتج عن المواطنة الجيدة لكنها ليست التعريف.</span>", "✅ Correct. Corporate citizenship = the extent to which a firm meets its economic, legal, ethical, and philanthropic responsibilities to stakeholders.<br><span dir='rtl'>✅ صح — المواطنة الشركاتية = مدى وفاء الشركة بمسؤولياتها الاقتصادية والقانونية والأخلاقية والخيرية تجاه أصحاب المصلحة.</span>", "❌ A corporate ethical audit is an assessment tool, not the concept of fulfilling responsibilities.<br><span dir='rtl'>❌ التدقيق الأخلاقي الشركاتي أداة تقييم، وليس مفهوم الوفاء بالمسؤوليات.</span>", "❌ Fiduciary duties are legal obligations of directors to act in the organization's best interest.<br><span dir='rtl'>❌ الواجبات الأمانية هي التزامات قانونية للمديرين للتصرف في مصلحة المنظمة الفضلى.</span>"] },
  { ch: "ch2", q: "In corporate governance, the process of auditing and improving organizational decisions and actions is known as _______.", opts: ["Profit", "Loyalty", "Accountability", "Control"], ans: 3, exp: ["❌ Profit is the financial goal of business — not a governance process.<br><span dir='rtl'>❌ الربح هدف مالي للأعمال — ليس عملية حوكمة.</span>", "❌ Loyalty is a fiduciary duty (acting in the organization's best interest), not an auditing process.<br><span dir='rtl'>❌ الولاء واجب أماني (التصرف في مصلحة المنظمة)، وليس عملية تدقيق.</span>", "❌ Accountability is related but refers to answerability for outcomes, not the ongoing auditing/improving process.<br><span dir='rtl'>❌ المساءلة مرتبطة بالأمر لكنها تعني الإجابة عن النتائج، لا عملية التدقيق والتحسين المستمر.</span>", "✅ Correct. In corporate governance, 'control' refers to the ongoing process of auditing and improving organizational decisions and actions.<br><span dir='rtl'>✅ صح — في حوكمة الشركات، 'الرقابة' تشير إلى عملية التدقيق المستمر وتحسين قرارات وأفعال المنظمة.</span>"] },
  { ch: "ch2", q: "Accountability, oversight, and control all fall under the definition of corporate _______.", opts: ["Profit", "Loyalty", "Care", "Governance"], ans: 3, exp: ["❌ Profit is the financial objective — not a governance mechanism.<br><span dir='rtl'>❌ الربح هدف مالي — ليس آلية حوكمة.</span>", "❌ Loyalty is a fiduciary duty, one component of governance.<br><span dir='rtl'>❌ الولاء واجب أماني، وهو مكوّن واحد من الحوكمة.</span>", "❌ Care (duty of care) is a fiduciary obligation — one component, not the overarching concept.<br><span dir='rtl'>❌ الرعاية (واجب العناية) التزام أماني — مكوّن واحد، وليس المفهوم الشامل.</span>", "✅ Correct. Corporate governance encompasses accountability (answering for decisions), oversight (monitoring), and control (auditing and improving).<br><span dir='rtl'>✅ صح — حوكمة الشركات تشمل المساءلة والإشراف والرقابة (التدقيق والتحسين).</span>"] },
  { ch: "ch2", q: "A major ethical concern among corporate boards of directors is _______.", opts: ["Compensation", "The non-traditional directorship approach", "Dividend reporting", "Debt swaps"], ans: 0, exp: ["✅ Correct. Executive and board compensation is a major ethical concern — excessive pay can create conflicts of interest and misaligned incentives.<br><span dir='rtl'>✅ صح — تعويض الإدارة ومجلس الإدارة مصدر قلق أخلاقي كبير — يمكن أن يخلق الأجر المفرط تضاربًا في المصالح.</span>", "❌ 'Non-traditional directorship' is not a recognized major ethical concern in corporate governance.<br><span dir='rtl'>❌ 'عضوية مجلس الإدارة غير التقليدية' ليست مصدر قلق أخلاقي معترفًا به في حوكمة الشركات.</span>", "❌ Dividend reporting is a financial disclosure matter, not a primary board ethics concern.<br><span dir='rtl'>❌ الإفصاح عن الأرباح مسألة إفصاح مالي، وليست المصدر الرئيسي لقلق الأخلاقيات في مجلس الإدارة.</span>", "❌ Debt swaps are financial instruments — not a major governance ethics issue.<br><span dir='rtl'>❌ مبادلات الديون أدوات مالية — وليست قضية أخلاقية حوكمية كبرى.</span>"] },
  { ch: "ch2", q: "The first step in implementing the stakeholder perspective is _______.", opts: ["Identifying stakeholder groups", "Assessing the corporate culture", "Identifying and gaining stakeholder feedback", "Assessing organizational commitment to social responsibility"], ans: 1, exp: ["❌ Identifying stakeholder groups is an important early step but comes after understanding the internal culture.<br><span dir='rtl'>❌ تحديد مجموعات أصحاب المصلحة خطوة مبكرة مهمة لكنها تأتي بعد فهم الثقافة الداخلية.</span>", "✅ Correct. The first step is assessing the corporate culture — you must understand the internal ethical environment before engaging stakeholders.<br><span dir='rtl'>✅ صح — الخطوة الأولى هي تقييم ثقافة الشركة — يجب فهم البيئة الأخلاقية الداخلية قبل التعامل مع أصحاب المصلحة.</span>", "❌ Gaining stakeholder feedback comes later in the process once you have identified and prioritized groups.<br><span dir='rtl'>❌ الحصول على تغذية راجعة من أصحاب المصلحة يأتي لاحقًا في العملية.</span>", "❌ Assessing commitment to social responsibility is a later evaluative step.<br><span dir='rtl'>❌ تقييم الالتزام بالمسؤولية الاجتماعية خطوة تقييمية لاحقة.</span>"] },
  { ch: "ch2", q: "The shareholder model of corporate governance is founded in which precepts?", opts: ["Stakeholder welfare principles", "Classic economic precepts, including maximizing wealth for investors", "Government regulation standards", "Social responsibility initiatives"], ans: 1, exp: ["❌ Stakeholder welfare is the basis of the stakeholder model, not the shareholder model.<br><span dir='rtl'>❌ رفاهية أصحاب المصلحة أساس نموذج أصحاب المصلحة، لا نموذج المساهمين.</span>", "✅ Correct. The shareholder model is founded on classic economic theory — the firm's primary purpose is maximizing wealth for investors.<br><span dir='rtl'>✅ صح — نموذج المساهمين مبني على النظرية الاقتصادية الكلاسيكية — الغرض الأساسي للشركة هو تعظيم ثروة المستثمرين.</span>", "❌ Government regulation standards are external requirements, not the philosophical foundation of the shareholder model.<br><span dir='rtl'>❌ معايير التنظيم الحكومي متطلبات خارجية، لا الأساس الفلسفي لنموذج المساهمين.</span>", "❌ Social responsibility initiatives are associated with the stakeholder model and CSR, not the shareholder model.<br><span dir='rtl'>❌ مبادرات المسؤولية الاجتماعية مرتبطة بنموذج أصحاب المصلحة وCSR، لا نموذج المساهمين.</span>"] },
  { ch: "ch2", q: "Fiduciaries are persons placed in positions of trust that act on behalf of the best interests of the organization. Which of the following are examples of fiduciaries?", opts: ["Customers and suppliers", "Directors and officers of corporations", "Government regulators", "Secondary stakeholders"], ans: 1, exp: ["❌ Customers and suppliers are external stakeholders — they do not have fiduciary duties to the corporation.<br><span dir='rtl'>❌ العملاء والموردون أصحاب مصلحة خارجيون — ليس لديهم واجبات أمانية تجاه الشركة.</span>", "✅ Correct. Directors and officers are fiduciaries — they are legally entrusted to act in the best interests of the organization and its shareholders.<br><span dir='rtl'>✅ صح — المديرون والمسؤولون هم الأمناء — مُعهَد إليهم قانونيًا التصرف في مصلحة المنظمة ومساهميها.</span>", "❌ Government regulators have regulatory authority but do not serve as fiduciaries for corporations.<br><span dir='rtl'>❌ المنظمون الحكوميون لديهم صلاحيات تنظيمية لكنهم لا يعملون كأمناء للشركات.</span>", "❌ Secondary stakeholders are outside the organization and have no fiduciary obligations to it.<br><span dir='rtl'>❌ أصحاب المصلحة الثانويون خارج المنظمة وليس لديهم التزامات أمانية تجاهها.</span>"] },
  { ch: "ch2", q: "The legal obligation to make informed and prudent decisions and avoid behavior that could cause harm to others is known as the _______.", opts: ["Duty of loyalty", "Duty of care (duty of diligence)", "Duty of transparency", "Duty of accountability"], ans: 1, exp: ["❌ Duty of loyalty = obligation to act in the best interest of the organization, avoiding conflicts of interest.<br><span dir='rtl'>❌ واجب الولاء = الالتزام بالتصرف في مصلحة المنظمة وتجنب تضارب المصالح.</span>", "✅ Correct. Duty of care (duty of diligence) = the legal obligation to make informed, prudent decisions and avoid causing harm.<br><span dir='rtl'>✅ صح — واجب العناية = الالتزام القانوني باتخاذ قرارات مستنيرة وحكيمة وتجنب التسبب في الضرر.</span>", "❌ 'Duty of transparency' is not a standard fiduciary duty name in corporate law.<br><span dir='rtl'>❌ 'واجب الشفافية' ليس اسم واجب أماني معياريًا في قانون الشركات.</span>", "❌ 'Duty of accountability' is not the formal term for this specific obligation.<br><span dir='rtl'>❌ 'واجب المساءلة' ليس المصطلح الرسمي لهذا الالتزام المحدد.</span>"] },
  { ch: "ch2", q: "The concept of board members being linked to more than one company is known as _______.", opts: ["Dual directorship", "Interlocking directorate", "Cross-boardship", "Board linkage"], ans: 1, exp: ["❌ 'Dual directorship' is not the standard term — it typically refers to when one person is both CEO and chairman.<br><span dir='rtl'>❌ 'عضوية مجلس مزدوجة' ليس المصطلح المعياري — يشير عادةً لشخص يجمع بين منصبَي الرئيس التنفيذي ورئيس مجلس الإدارة.</span>", "✅ Correct. Interlocking directorate = when board members sit on the boards of more than one company, creating potential conflicts of interest.<br><span dir='rtl'>✅ صح — الإدارة المتداخلة = عندما يجلس أعضاء مجلس الإدارة في مجالس أكثر من شركة، مما يخلق تضاربًا محتملاً في المصالح.</span>", "❌ 'Cross-boardship' is not a recognized corporate governance term.<br><span dir='rtl'>❌ 'عضوية مجلس متقاطعة' ليس مصطلحًا معترفًا به في حوكمة الشركات.</span>", "❌ 'Board linkage' is informal and not the standard terminology.<br><span dir='rtl'>❌ 'ارتباط مجلس الإدارة' غير رسمي وليس المصطلح المعياري.</span>"] },
  { ch: "ch2", q: "Social responsibility is an organization's obligation to maximize its _______ impact on stakeholders and minimize its _______ impact.", opts: ["Positive... negative", "Financial... social", "Legal... ethical", "Direct... indirect"], ans: 0, exp: ["✅ Correct. Social responsibility = maximizing positive impact on stakeholders and minimizing negative impact.<br><span dir='rtl'>✅ صح — المسؤولية الاجتماعية = تعظيم الأثر الإيجابي على أصحاب المصلحة وتقليل الأثر السلبي.</span>", "❌ Financial and social don't capture the full positive/negative obligation framework.<br><span dir='rtl'>❌ المالي والاجتماعي لا يعكسان إطار الالتزام الكامل الإيجابي/السلبي.</span>", "❌ Legal and ethical are components of responsibility, not the directional impact description.<br><span dir='rtl'>❌ القانوني والأخلاقي مكوّنات المسؤولية، لا وصف الأثر الاتجاهي.</span>", "❌ Direct and indirect miss the positive/negative distinction that defines the obligation.<br><span dir='rtl'>❌ المباشر وغير المباشر يُغفلان التمييز الإيجابي/السلبي الذي يحدد الالتزام.</span>"] },
  { ch: "ch2", q: "Which of the following describes primary stakeholders?", opts: ["Those who influence the company through media and special interest groups", "Those whose continued association and resources are absolutely necessary for a firm's survival", "Those who do not typically engage in direct transactions with a company", "Those who are indirectly affected by business decisions"], ans: 1, exp: ["❌ Media and special interest groups = secondary stakeholders who influence without direct transactions.<br><span dir='rtl'>❌ وسائل الإعلام والمجموعات ذات المصلحة الخاصة = أصحاب مصلحة ثانويون يؤثرون دون معاملات مباشرة.</span>", "✅ Correct. Primary stakeholders = those whose continued association and resources are absolutely necessary for the firm's survival.<br><span dir='rtl'>✅ صح — أصحاب المصلحة الأساسيون = من استمرار ارتباطهم ومواردهم ضروري تمامًا لبقاء الشركة.</span>", "❌ Not engaging directly = secondary stakeholders.<br><span dir='rtl'>❌ عدم التعامل المباشر = أصحاب مصلحة ثانويون.</span>", "❌ Indirectly affected parties = secondary or tertiary stakeholders.<br><span dir='rtl'>❌ الأطراف المتأثرة بشكل غير مباشر = أصحاب مصلحة ثانويون أو من درجة أدنى.</span>"] },

  // ════════════════ CHAPTER 3 ════════════════
  { ch: "ch3", q: "Sustainable development is best defined as which of the following?", opts: ["The potential for long-term well-being of the environment including all biological entities", "Socially responsible activities that create competitive advantages", "When an organization uses its products and brand identity to create social value", "Meeting the needs of the present without compromising future generations' ability to meet their own needs"], ans: 3, exp: ["❌ This is close to the definition of sustainability (ecological well-being) but not sustainable development.<br><span dir='rtl'>❌ هذا قريب من تعريف الاستدامة (الرفاه البيئي) لكن ليس التنمية المستدامة.</span>", "❌ This describes strategic CSR — using social activities for competitive gain.<br><span dir='rtl'>❌ هذا يصف CSR الاستراتيجية — استخدام الأنشطة الاجتماعية لتحقيق ميزة تنافسية.</span>", "❌ This describes cause-related marketing or social entrepreneurship.<br><span dir='rtl'>❌ هذا يصف التسويق المرتبط بقضية أو ريادة الأعمال الاجتماعية.</span>", "✅ Correct. Sustainable development = meeting present needs without compromising the ability of future generations to meet their own needs (Brundtland Report).<br><span dir='rtl'>✅ صح — التنمية المستدامة = تلبية احتياجات الحاضر دون المساس بقدرة الأجيال القادمة على تلبية احتياجاتهم (تقرير برونتلاند).</span>"] },
  { ch: "ch3", q: "By far the world's biggest wasters who dump waste into landfills are consumers in _______.", opts: ["Europe", "China", "Russia", "The United States"], ans: 3, exp: ["❌ European countries tend to have stronger recycling cultures and lower per-capita waste.<br><span dir='rtl'>❌ الدول الأوروبية تميل إلى ثقافات إعادة تدوير أقوى ونفايات أقل للفرد.</span>", "❌ China generates significant industrial waste but U.S. per-capita consumer waste is higher.<br><span dir='rtl'>❌ الصين تنتج نفايات صناعية كبيرة لكن نفايات المستهلك للفرد في الولايات المتحدة أعلى.</span>", "❌ Russia's per-capita waste generation is lower than that of the United States.<br><span dir='rtl'>❌ توليد النفايات للفرد في روسيا أقل من الولايات المتحدة.</span>", "✅ Correct. The United States generates more waste per person than any other country and sends more to landfills.<br><span dir='rtl'>✅ صح — الولايات المتحدة تنتج نفايات أكثر للفرد من أي دولة أخرى وترسل أكثرها إلى مدافن النفايات.</span>"] },
  { ch: "ch3", q: "Wide-spread deforestation is caused predominantly by which of the following?", opts: ["The corn industry", "Beef, soy, palm oil, and wood products", "Human-lit fires", "Wildfires"], ans: 1, exp: ["❌ The corn industry is not a primary driver of tropical deforestation globally.<br><span dir='rtl'>❌ صناعة الذرة ليست محركًا رئيسيًا لإزالة الغابات الاستوائية على المستوى العالمي.</span>", "✅ Correct. Beef ranching, soy farming, palm oil plantations, and logging are the four main drivers of widespread global deforestation.<br><span dir='rtl'>✅ صح — تربية الماشية وزراعة الصويا ومزارع زيت النخيل والتسجيل هي المحركات الأربعة الرئيسية لإزالة الغابات.</span>", "❌ Human-lit fires are often a consequence of clearing for agriculture (covered by B), not the root cause.<br><span dir='rtl'>❌ الحرائق التي يضرمها البشر غالبًا نتيجة تحضير الأرض للزراعة، وليست السبب الجذري.</span>", "❌ Wildfires contribute but human agricultural activity is the predominant driver.<br><span dir='rtl'>❌ الحرائق الطبيعية تساهم لكن النشاط الزراعي البشري هو المحرك السائد.</span>"] },
  { ch: "ch3", q: "Farmers cannot keep harvested seed from genetically modified crops and must purchase them each year because such seeds are _______.", opts: ["Non-organic", "Perishable", "Uncollectable", "Patented"], ans: 3, exp: ["❌ Being non-organic is a characteristic but does not prevent seed saving legally.<br><span dir='rtl'>❌ كون البذور غير عضوية خاصية لكنها لا تمنع حفظ البذور قانونيًا.</span>", "❌ Seeds are not especially perishable compared to harvested crops.<br><span dir='rtl'>❌ البذور ليست قابلة للتلف بشكل خاص مقارنة بالمحاصيل المحصودة.</span>", "❌ Seeds can physically be collected — the barrier is legal, not physical.<br><span dir='rtl'>❌ يمكن جمع البذور جسديًا — العائق قانوني وليس جسديًا.</span>", "✅ Correct. GMO seeds are patented by companies like Monsanto. Farmers are legally prohibited from saving and replanting patented seeds.<br><span dir='rtl'>✅ صح — بذور الكائنات المعدلة وراثيًا مُبرأت من شركات مثل مونسانتو. يُحظر على المزارعين قانونيًا حفظ البذور المبرأة وإعادة زراعتها.</span>"] },
  { ch: "ch3", q: "The first Earth Day increased stakeholder awareness of environmental concerns and creation of the EPA, bringing _______ to the forefront.", opts: ["Corporate social responsibility", "Alternative energy sources", "Diversity", "Sustainability"], ans: 3, exp: ["❌ CSR is a broader concept that predates Earth Day as a distinct management concern.<br><span dir='rtl'>❌ المسؤولية الاجتماعية للشركات مفهوم أوسع ويسبق يوم الأرض كاهتمام إداري مميز.</span>", "❌ Alternative energy became more prominent after the 1970s energy crisis, not specifically from Earth Day.<br><span dir='rtl'>❌ الطاقة البديلة أصبحت بارزة بعد أزمة الطاقة في السبعينيات، وليس تحديدًا من يوم الأرض.</span>", "❌ Diversity is a social/workplace issue, not an environmental one.<br><span dir='rtl'>❌ التنوع قضية اجتماعية ومهنية، وليست بيئية.</span>", "✅ Correct. Earth Day 1970 brought sustainability and environmental responsibility to the forefront of public consciousness, leading to the EPA's creation.<br><span dir='rtl'>✅ صح — يوم الأرض 1970 أبرز الاستدامة والمسؤولية البيئية في الوعي العام مما أدى لإنشاء وكالة حماية البيئة.</span>"] },
  { ch: "ch3", q: "The Environmental Protection Agency's primary mission is to _______.", opts: ["Protect human health and the environment", "Ensure all Fortune 500 firms hire a chief sustainability officer", "Protect threatened and endangered species", "Encourage alternative energy sources"], ans: 0, exp: ["✅ Correct. The EPA's stated mission is to protect human health and the environment through regulation and enforcement.<br><span dir='rtl'>✅ صح — مهمة وكالة حماية البيئة المُعلنة هي حماية صحة الإنسان والبيئة من خلال اللوائح والتطبيق.</span>", "❌ The EPA does not mandate hiring of sustainability officers — that is a private corporate decision.<br><span dir='rtl'>❌ وكالة حماية البيئة لا تُلزم بتعيين مسؤولي الاستدامة — ذلك قرار شركاتي خاص.</span>", "❌ Protecting threatened species is primarily the U.S. Fish & Wildlife Service's domain.<br><span dir='rtl'>❌ حماية الأنواع المهددة بالانقراض مجال خدمة الأسماك والحياة البرية الأمريكية بشكل رئيسي.</span>", "❌ Promoting alternative energy is the Department of Energy's domain, not the EPA's primary mission.<br><span dir='rtl'>❌ تعزيز الطاقة البديلة مجال وزارة الطاقة، وليس المهمة الأساسية لوكالة حماية البيئة.</span>"] },
  { ch: "ch3", q: "The Clean Air Act _______.", opts: ["Allowed the EPA to track industrial chemicals", "Focused on promoting alternative forms of energy", "Established national air quality standards", "Provided tax benefits to consumers who purchase hybrid cars"], ans: 2, exp: ["❌ Tracking industrial chemicals = Toxic Substances Control Act (TSCA).<br><span dir='rtl'>❌ تتبع المواد الكيميائية الصناعية = قانون التحكم في المواد السامة (TSCA).</span>", "❌ Promoting alternative energy = Energy Policy Act.<br><span dir='rtl'>❌ تعزيز الطاقة البديلة = قانون سياسة الطاقة.</span>", "✅ Correct. The Clean Air Act established national ambient air quality standards (NAAQS) to limit pollutants like sulfur dioxide, carbon monoxide, and ozone.<br><span dir='rtl'>✅ صح — وضع قانون الهواء النظيف معايير جودة الهواء الوطنية للحد من ملوثات مثل ثاني أكسيد الكبريت وأول أكسيد الكربون والأوزون.</span>", "❌ Hybrid car tax benefits came through the Energy Policy Act, not the Clean Air Act.<br><span dir='rtl'>❌ المزايا الضريبية للسيارات الهجينة جاءت من خلال قانون سياسة الطاقة، لا قانون الهواء النظيف.</span>"] },
  { ch: "ch3", q: "The Clean Water Act makes it illegal to discharge any pollutant from a point source directly into navigable waters without a(n) _______.", opts: ["Good reason", "Direct order", "Permit", "Inspector present"], ans: 2, exp: ["❌ A 'good reason' is subjective and not the legal standard required.<br><span dir='rtl'>❌ 'السبب الوجيه' ذاتي وليس المعيار القانوني المطلوب.</span>", "❌ No 'direct order' is part of the Clean Water Act's discharge requirements.<br><span dir='rtl'>❌ لا يوجد 'أمر مباشر' ضمن متطلبات تصريف قانون المياه النظيفة.</span>", "✅ Correct. The Clean Water Act requires an NPDES (National Pollutant Discharge Elimination System) permit to legally discharge pollutants into navigable waters.<br><span dir='rtl'>✅ صح — يشترط قانون المياه النظيفة تصريحًا NPDES لتصريف الملوثات قانونيًا في المياه الصالحة للملاحة.</span>", "❌ An inspector's presence is not required — only the permit itself is legally required.<br><span dir='rtl'>❌ وجود مفتش غير مطلوب — المطلوب قانونيًا هو التصريح نفسه فقط.</span>"] },
  { ch: "ch3", q: "Which act focuses on reducing pollution through cost-effective changes in production, operation, and raw materials use?", opts: ["Pollution Prevention Act", "Toxic Substances Control Act", "Clean Air Act", "Energy Policy Act"], ans: 0, exp: ["✅ Correct. The Pollution Prevention Act (1990) focuses on reducing pollution at its source through cost-effective production, operational, and materials changes.<br><span dir='rtl'>✅ صح — يركز قانون منع التلوث (1990) على تقليل التلوث من مصدره من خلال تغييرات إنتاجية وتشغيلية ومواد فعّالة من حيث التكلفة.</span>", "❌ TSCA empowers EPA to track industrial chemicals — not specifically about production changes.<br><span dir='rtl'>❌ TSCA يُمكّن وكالة حماية البيئة من تتبع المواد الكيميائية — وليس عن تغييرات الإنتاج تحديدًا.</span>", "❌ The Clean Air Act establishes air quality standards — it does not focus on cost-effective production changes.<br><span dir='rtl'>❌ قانون الهواء النظيف يضع معايير جودة الهواء — ولا يركز على تغييرات الإنتاج الفعّالة من حيث التكلفة.</span>", "❌ The Energy Policy Act focuses on energy efficiency and alternative fuels, not pollution source reduction.<br><span dir='rtl'>❌ قانون سياسة الطاقة يركز على كفاءة الطاقة والوقود البديل، لا على تقليل مصادر التلوث.</span>"] },
  { ch: "ch3", q: "Which is considered a misleading practice related to sustainability?", opts: ["Designing environmentally friendly buildings", "Recycling", "Greenwashing", "Source reduction"], ans: 2, exp: ["❌ Designing eco-friendly buildings is a genuine sustainable practice, not misleading.<br><span dir='rtl'>❌ تصميم المباني الصديقة للبيئة ممارسة استدامة حقيقية، وليست مضللة.</span>", "❌ Recycling is a legitimate sustainability practice.<br><span dir='rtl'>❌ إعادة التدوير ممارسة استدامة مشروعة.</span>", "✅ Correct. Greenwashing = misleading consumers into thinking a product or company is more environmentally friendly than it actually is.<br><span dir='rtl'>✅ صح — الغسيل الأخضر = تضليل المستهلكين بإيهامهم أن منتجًا أو شركة أكثر صداقة للبيئة مما هي عليه فعليًا.</span>", "❌ Source reduction (producing less waste) is a genuine pollution prevention strategy.<br><span dir='rtl'>❌ تقليل المصدر (إنتاج نفايات أقل) استراتيجية منع تلوث حقيقية.</span>"] },
  { ch: "ch3", q: "Which act was passed to empower the EPA to track the 75,000 industrial chemicals currently produced or imported into the United States?", opts: ["Federal Water Pollution Control Act", "Safe Drinking Water Act", "Toxic Substances Control Act", "Food Quality Protection Act"], ans: 2, exp: ["❌ The Federal Water Pollution Control Act (predecessor to Clean Water Act) addresses water discharge, not chemical tracking.<br><span dir='rtl'>❌ قانون التحكم الفيدرالي في تلوث المياه (سلف قانون المياه النظيفة) يعالج تصريف المياه، لا تتبع المواد الكيميائية.</span>", "❌ The Safe Drinking Water Act regulates public drinking water quality, not industrial chemical tracking.<br><span dir='rtl'>❌ قانون مياه الشرب الآمنة ينظم جودة مياه الشرب العامة، لا تتبع المواد الكيميائية الصناعية.</span>", "✅ Correct. The Toxic Substances Control Act (TSCA) empowers the EPA to track and regulate the 75,000+ industrial chemicals produced or imported in the U.S.<br><span dir='rtl'>✅ صح — يُمكّن قانون التحكم في المواد السامة وكالة حماية البيئة من تتبع أكثر من 75000 مادة كيميائية صناعية وتنظيمها.</span>", "❌ The Food Quality Protection Act addresses pesticide residues in food, not broad industrial chemical tracking.<br><span dir='rtl'>❌ قانون حماية جودة الغذاء يعالج بقايا المبيدات في الغذاء، لا تتبع المواد الكيميائية الصناعية الشاملة.</span>"] },
  { ch: "ch3", q: "Wind power in the United States is concentrated in which region?", opts: ["The Rocky Mountains", "The Everglades", "The Great Lakes", "The Great Plains"], ans: 3, exp: ["❌ The Rocky Mountains have some wind resources but mountainous terrain limits large-scale wind farm development.<br><span dir='rtl'>❌ جبال روكي لديها بعض موارد الرياح لكن التضاريس الجبلية تحد من تطوير مزارع الرياح الكبيرة.</span>", "❌ The Everglades is a flat wetland — wind resources there are minimal.<br><span dir='rtl'>❌ إيفرغليدز أرض رطبة مسطحة — موارد الرياح هناك ضئيلة.</span>", "❌ The Great Lakes has offshore wind potential but the largest concentration is not there.<br><span dir='rtl'>❌ البحيرات العظمى لديها إمكانية رياح بحرية لكن أكبر تركيز ليس هناك.</span>", "✅ Correct. The Great Plains (Texas, Oklahoma, Kansas, Iowa) has the highest concentration of wind power in the United States due to consistent, strong winds.<br><span dir='rtl'>✅ صح — السهول الكبرى (تكساس، أوكلاهوما، كانساس، أيوا) تحتضن أعلى تركيز لطاقة الرياح في الولايات المتحدة بسبب الرياح القوية والمتسقة.</span>"] },
  { ch: "ch3", q: "Geothermal energy provides which of the following?", opts: ["Heat from the sun", "A radiated heat", "Heat from steam", "A constant source of heat"], ans: 3, exp: ["❌ Heat from the sun = solar energy.<br><span dir='rtl'>❌ الحرارة من الشمس = الطاقة الشمسية.</span>", "❌ 'Radiated heat' is too vague and doesn't describe geothermal's key advantage.<br><span dir='rtl'>❌ 'الحرارة المشعة' غامضة جدًا ولا تصف الميزة الرئيسية للطاقة الحرارية الأرضية.</span>", "❌ Steam is the mechanism geothermal uses to generate electricity, not what it 'provides.'<br><span dir='rtl'>❌ البخار هو الآلية التي تستخدمها الطاقة الحرارية الأرضية لتوليد الكهرباء، وليس ما 'توفره'.</span>", "✅ Correct. Geothermal energy provides a constant, consistent source of heat from the Earth — unlike solar or wind, it is not weather-dependent.<br><span dir='rtl'>✅ صح — الطاقة الحرارية الأرضية توفر مصدرًا ثابتًا ومتسقًا للحرارة من الأرض — خلافًا للطاقة الشمسية أو الرياح، لا تعتمد على الطقس.</span>"] },
  { ch: "ch3", q: "Which of the following is considered the largest form of renewable energy?", opts: ["Hydropower", "Solar power", "Geothermal power", "Nuclear power"], ans: 0, exp: ["✅ Correct. Hydropower is the largest form of renewable energy globally, generating more electricity than wind, solar, or geothermal combined.<br><span dir='rtl'>✅ صح — الطاقة الكهرومائية هي أكبر أشكال الطاقة المتجددة عالميًا، تولّد كهرباء أكثر من الرياح والشمس والحرارة الأرضية مجتمعة.</span>", "❌ Solar is growing rapidly but is not yet the largest renewable energy source.<br><span dir='rtl'>❌ الطاقة الشمسية تنمو بسرعة لكنها ليست بعد أكبر مصدر للطاقة المتجددة.</span>", "❌ Geothermal is limited to specific geographic regions and generates a smaller total amount.<br><span dir='rtl'>❌ الطاقة الحرارية الأرضية محدودة بمناطق جغرافية محددة وتولّد كمية إجمالية أصغر.</span>", "❌ Nuclear power is not renewable — uranium is a finite resource.<br><span dir='rtl'>❌ الطاقة النووية ليست متجددة — اليورانيوم مورد محدود.</span>"] },
  { ch: "ch3", q: "Which is the most controversial form of alternative energy after nuclear power?", opts: ["Hydropower", "Geothermal power", "Solar power", "Ethanol"], ans: 3, exp: ["❌ Hydropower has controversy (ecosystem disruption, dam building) but is not the most controversial after nuclear.<br><span dir='rtl'>❌ الطاقة الكهرومائية مثيرة للجدل (تعطيل النظام البيئي، بناء السدود) لكنها ليست الأكثر إثارة للجدل بعد النووي.</span>", "❌ Geothermal is relatively uncontroversial — it is clean, constant, and locally sourced.<br><span dir='rtl'>❌ الطاقة الحرارية الأرضية غير مثيرة للجدل نسبيًا — نظيفة وثابتة ومحلية المصدر.</span>", "❌ Solar is widely accepted and has few significant controversies.<br><span dir='rtl'>❌ الطاقة الشمسية مقبولة على نطاق واسع ولديها جدل محدود.</span>", "✅ Correct. Ethanol (biofuel) is highly controversial — it uses food crops, requires significant energy to produce, and critics argue it reduces the world's food supply.<br><span dir='rtl'>✅ صح — الإيثانول (الوقود الحيوي) مثير للجدل جدًا — يستخدم محاصيل غذائية ويتطلب طاقة كبيرة للإنتاج ويرى المنتقدون أنه يقلل من إمدادات الغذاء العالمية.</span>"] },
  { ch: "ch3", q: "Which certification program recognizes sustainable building practices and strategies?", opts: ["Brundtland Report", "WasteWise", "LEED", "Kyoto Protocol"], ans: 2, exp: ["❌ The Brundtland Report (1987) defined sustainable development — it is a report, not a certification program.<br><span dir='rtl'>❌ تقرير برونتلاند (1987) عرّف التنمية المستدامة — إنه تقرير وليس برنامج اعتماد.</span>", "❌ WasteWise is an EPA voluntary program for waste reduction — not specific to buildings.<br><span dir='rtl'>❌ WasteWise برنامج طوعي لوكالة حماية البيئة لتقليل النفايات — غير متخصص في المباني.</span>", "✅ Correct. LEED (Leadership in Energy and Environmental Design) is the certification program that recognizes sustainable building practices.<br><span dir='rtl'>✅ صح — LEED (الريادة في الطاقة والتصميم البيئي) هو برنامج الاعتماد الذي يُقرّ ممارسات البناء المستدامة.</span>", "❌ The Kyoto Protocol is an international treaty on greenhouse gas emissions — not a building certification.<br><span dir='rtl'>❌ بروتوكول كيوتو معاهدة دولية بشأن انبعاثات الغازات الدفيئة — وليس اعتماد مباني.</span>"] },
  { ch: "ch3", q: "To report air, land, and water sustainability issues, most businesses use _______.", opts: ["Environmental, social, and governance (ESG) factors", "Triple bottom line", "Green marketing", "ISO 14000"], ans: 0, exp: ["✅ Correct. ESG factors (Environmental, Social, Governance) are the primary framework businesses use to report on air, land, and water sustainability issues.<br><span dir='rtl'>✅ صح — عوامل ESG (البيئية والاجتماعية والحوكمة) هي الإطار الرئيسي الذي تستخدمه الشركات للإبلاغ عن قضايا استدامة الهواء والأرض والمياه.</span>", "❌ Triple bottom line (people, planet, profit) is a broader measurement framework — not specifically about reporting environmental media.<br><span dir='rtl'>❌ خط الأساس الثلاثي (الناس، الكوكب، الربح) إطار قياس أوسع — ليس عن الإبلاغ البيئي تحديدًا.</span>", "❌ Green marketing is a promotional strategy, not a reporting framework.<br><span dir='rtl'>❌ التسويق الأخضر استراتيجية ترويجية، وليس إطار إبلاغ.</span>", "❌ ISO 14000 sets environmental management standards but is not the reporting vehicle for these issues.<br><span dir='rtl'>❌ ISO 14000 يضع معايير الإدارة البيئية لكنه ليس وسيلة الإبلاغ عن هذه القضايا.</span>"] },
  { ch: "ch3", q: "A business that attempts to avoid dealing with environmental issues and hopes nothing bad happens is described as _______.", opts: ["A newly established business", "A socially responsible business", "A low-commitment business", "A law-abiding business"], ans: 2, exp: ["❌ New businesses can still have strong environmental commitments — age doesn't determine environmental stance.<br><span dir='rtl'>❌ الشركات الجديدة يمكنها أن تكون ملتزمة بيئيًا بقوة — العمر لا يحدد الموقف البيئي.</span>", "❌ Socially responsible businesses actively address environmental issues, not avoid them.<br><span dir='rtl'>❌ الشركات المسؤولة اجتماعيًا تعالج القضايا البيئية بنشاط، لا تتجنبها.</span>", "✅ Correct. A low-commitment business ignores environmental issues, hoping problems won't arise — the least proactive stance.<br><span dir='rtl'>✅ صح — الشركة ذات الالتزام المنخفض تتجاهل القضايا البيئية آملةً ألا تنشأ مشاكل — الموقف الأقل استباقية.</span>", "❌ A law-abiding business meets minimum legal requirements — more than avoidance, but still passive.<br><span dir='rtl'>❌ الشركة الملتزمة بالقانون تستوفي الحد الأدنى من المتطلبات القانونية — أكثر من التجنب لكنها لا تزال سلبية.</span>"] },
  { ch: "ch3", q: "Sustainability refers to _______.", opts: ["Meeting current needs without compromising future generations", "The potential for the long-term well-being of the natural environment, including mutually beneficial interactions among nature and individuals", "Socially responsible activities that create competitive advantages", "A strategy involving stakeholder assessment to enhance the natural environment"], ans: 1, exp: ["❌ This is the definition of sustainable development (Brundtland), not sustainability itself.<br><span dir='rtl'>❌ هذا تعريف التنمية المستدامة (برونتلاند)، وليس الاستدامة ذاتها.</span>", "✅ Correct. Sustainability = potential for long-term well-being of the natural environment, including mutually beneficial interactions among nature and individuals.<br><span dir='rtl'>✅ صح — الاستدامة = إمكانية الرفاه طويل الأمد للبيئة الطبيعية، بما يشمل التفاعلات المتبادلة المفيدة بين الطبيعة والأفراد.</span>", "❌ This describes strategic CSR — using social activities for competitive advantage.<br><span dir='rtl'>❌ هذا يصف CSR الاستراتيجية — استخدام الأنشطة الاجتماعية للميزة التنافسية.</span>", "❌ This is closer to green marketing — stakeholder assessment to enhance the natural environment.<br><span dir='rtl'>❌ هذا أقرب إلى التسويق الأخضر — تقييم أصحاب المصلحة لتعزيز البيئة الطبيعية.</span>"] },
  { ch: "ch3", q: "Green marketing is best defined as _______.", opts: ["Selling products with green packaging to attract eco-conscious consumers", "A strategy involving stakeholder assessment to create long-term relationships while maintaining and enhancing the natural environment", "Misleading a consumer into thinking a good is more environmentally friendly than it really is", "Using recycled materials exclusively in production"], ans: 1, exp: ["❌ Green packaging alone is superficial — real green marketing is a comprehensive strategy.<br><span dir='rtl'>❌ التغليف الأخضر وحده سطحي — التسويق الأخضر الحقيقي استراتيجية شاملة.</span>", "✅ Correct. Green marketing = a stakeholder assessment strategy to create long-term relationships while maintaining and enhancing the natural environment.<br><span dir='rtl'>✅ صح — التسويق الأخضر = استراتيجية تقييم أصحاب المصلحة لإنشاء علاقات طويلة الأمد مع الحفاظ على البيئة الطبيعية وتعزيزها.</span>", "❌ Misleading claims = greenwashing, the opposite of genuine green marketing.<br><span dir='rtl'>❌ الادعاءات المضللة = الغسيل الأخضر، وهو عكس التسويق الأخضر الحقيقي.</span>", "❌ Using only recycled materials is too narrow — green marketing is a complete strategic approach.<br><span dir='rtl'>❌ استخدام المواد المعاد تدويرها فقط ضيق جدًا — التسويق الأخضر نهج استراتيجي كامل.</span>"] },
  { ch: "ch3", q: "The Kyoto Protocol was designed to _______.", opts: ["Protect endangered species globally", "Curb global greenhouse gas emissions by having countries voluntarily reduce national outputs", "Establish national air quality standards", "Create a global framework for sustainable building"], ans: 1, exp: ["❌ Endangered species protection = CITES (Convention on International Trade in Endangered Species).<br><span dir='rtl'>❌ حماية الأنواع المهددة = اتفاقية CITES (الاتفاقية الدولية للتجارة بالأنواع المهددة بالانقراض).</span>", "✅ Correct. The Kyoto Protocol (1997) committed nations to voluntarily reduce their greenhouse gas emissions to curb global warming.<br><span dir='rtl'>✅ صح — بروتوكول كيوتو (1997) ألزم الدول طوعيًا بتقليل انبعاثات الغازات الدفيئة للحد من الاحترار العالمي.</span>", "❌ National air quality standards = Clean Air Act (domestic U.S. law, not the Kyoto Protocol).<br><span dir='rtl'>❌ معايير جودة الهواء الوطنية = قانون الهواء النظيف (قانون أمريكي محلي، وليس بروتوكول كيوتو).</span>", "❌ Sustainable building framework = LEED certification program.<br><span dir='rtl'>❌ إطار البناء المستدام = برنامج اعتماد LEED.</span>"] },
  { ch: "ch3", q: "ISO 14000 is _______.", opts: ["A global compliance management standard for corporate governance", "A set of 10 principles concerning human rights and labor", "A comprehensive set of environmental standards that encourage a cleaner, safer, healthier world", "A certification program for sustainable building practices"], ans: 2, exp: ["❌ Global compliance management standard = ISO 19600 (corporate governance focus).<br><span dir='rtl'>❌ معيار إدارة الامتثال العالمي = ISO 19600 (يركز على حوكمة الشركات).</span>", "❌ 10 principles on human rights and labor = UN Global Compact.<br><span dir='rtl'>❌ المبادئ العشرة المتعلقة بحقوق الإنسان والعمل = الميثاق العالمي للأمم المتحدة.</span>", "✅ Correct. ISO 14000 is a comprehensive set of environmental management standards encouraging a cleaner, safer, healthier world for organizations globally.<br><span dir='rtl'>✅ صح — ISO 14000 مجموعة شاملة من معايير الإدارة البيئية تشجع على عالم أنظف وأكثر أمانًا وصحة للمنظمات على مستوى العالم.</span>", "❌ Sustainable building certification = LEED program.<br><span dir='rtl'>❌ اعتماد المباني المستدامة = برنامج LEED.</span>"] },
  { ch: "ch3", q: "Air pollution typically arises from which three sources?", opts: ["Industrial, agricultural, and residential", "Stationary, mobile, and natural sources", "Factory, transport, and governmental", "Land, water, and atmospheric"], ans: 1, exp: ["❌ Industrial, agricultural, and residential describes sectors, not the standard three-source classification.<br><span dir='rtl'>❌ الصناعي والزراعي والسكني يصف القطاعات، لا تصنيف المصادر الثلاثة المعياري.</span>", "✅ Correct. Air pollution arises from stationary sources (factories, power plants), mobile sources (vehicles), and natural sources (volcanoes, wildfires).<br><span dir='rtl'>✅ صح — ينشأ تلوث الهواء من مصادر ثابتة (المصانع، محطات الطاقة) ومصادر متنقلة (المركبات) ومصادر طبيعية (البراكين، الحرائق).</span>", "❌ 'Governmental' is not a pollution source category — governments regulate emissions but don't define a source type.<br><span dir='rtl'>❌ 'الحكومي' ليس فئة مصدر تلوث — الحكومات تنظم الانبعاثات لكنها لا تعرّف نوع مصدر.</span>", "❌ Land, water, and atmospheric are environmental media, not pollution sources.<br><span dir='rtl'>❌ الأرض والماء والغلاف الجوي وسائط بيئية، وليست مصادر تلوث.</span>"] },
  { ch: "ch3", q: "Acid rain is caused by which of the following?", opts: ["Carbon dioxide emissions from cars", "Nitrous oxides and sulfur dioxides exposed to air and rain", "Nuclear plant waste products", "Deforestation and urban sprawl"], ans: 1, exp: ["❌ CO2 causes climate change and ocean acidification — not acid rain directly.<br><span dir='rtl'>❌ ثاني أكسيد الكربون يسبب تغير المناخ وتحمض المحيطات — لا الأمطار الحمضية مباشرةً.</span>", "✅ Correct. Acid rain forms when nitrous oxides (NOx) and sulfur dioxides (SO2) — from burning fossil fuels — react with water vapor in the atmosphere.<br><span dir='rtl'>✅ صح — تتشكل الأمطار الحمضية عندما تتفاعل أكاسيد النيتروجين وثاني أكسيد الكبريت — من حرق الوقود الأحفوري — مع بخار الماء في الغلاف الجوي.</span>", "❌ Nuclear plant waste is radioactive — it causes radiation contamination, not acid rain.<br><span dir='rtl'>❌ نفايات المحطة النووية مشعة — تسبب تلوثًا إشعاعيًا، لا أمطارًا حمضية.</span>", "❌ Deforestation contributes to climate change and soil erosion but does not cause acid rain.<br><span dir='rtl'>❌ إزالة الغابات تساهم في تغير المناخ وتآكل التربة لكنها لا تسبب الأمطار الحمضية.</span>"] },
  { ch: "ch3", q: "Climate change is defined as _______.", opts: ["A temporary variation in weather patterns due to pollution", "The long-term variation in average weather patterns", "The increase in global temperatures due to greenhouse gases only", "Short-term fluctuations in seasonal temperatures"], ans: 1, exp: ["❌ Temporary variation describes weather events, not climate change.<br><span dir='rtl'>❌ التغير المؤقت يصف أحداث الطقس، لا تغير المناخ.</span>", "✅ Correct. Climate change = the long-term variation in average weather patterns — it is about sustained shifts over decades.<br><span dir='rtl'>✅ صح — تغير المناخ = التغير طويل الأمد في متوسط أنماط الطقس — يتعلق بالتحولات المستدامة على مدى عقود.</span>", "❌ Global temperature increase is one aspect but climate change encompasses more than just temperature (precipitation, sea level, etc.).<br><span dir='rtl'>❌ ارتفاع درجات الحرارة العالمية جانب واحد لكن تغير المناخ يشمل أكثر من الحرارة فقط (الهطول، مستوى البحر، إلخ).</span>", "❌ Short-term seasonal fluctuations = weather, not climate change.<br><span dir='rtl'>❌ التقلبات الموسمية القصيرة الأمد = الطقس، وليس تغير المناخ.</span>"] },
  { ch: "ch3", q: "Sustainability, social responsibility, and ethics should be used interchangeably. True or False?", opts: ["True — they all mean the same thing", "False — they are related but distinct concepts and should not be used interchangeably", "True — sustainability encompasses both social responsibility and ethics", "False — only sustainability and ethics overlap"], ans: 1, exp: ["❌ They are related but not synonymous — each has its own distinct definition and scope.<br><span dir='rtl'>❌ هي مترابطة لكن ليست مترادفة — لكل منها تعريفها ونطاقها المميز.</span>", "✅ Correct. FALSE — Sustainability focuses on long-term environmental well-being; ethics on moral behavior; social responsibility on stakeholder obligations. They overlap but are distinct.<br><span dir='rtl'>✅ صح — العبارة خاطئة. الاستدامة تركز على الرفاه البيئي طويل الأمد؛ الأخلاقيات على السلوك الأخلاقي؛ المسؤولية الاجتماعية على التزامات أصحاب المصلحة. تتداخل لكنها مستقلة.</span>", "❌ Sustainability does not encompass the others — ethics and social responsibility extend beyond environmental concerns.<br><span dir='rtl'>❌ الاستدامة لا تشمل الأخريات — الأخلاقيات والمسؤولية الاجتماعية تمتد إلى ما وراء المخاوف البيئية.</span>", "❌ All three overlap with each other — not just sustainability and ethics.<br><span dir='rtl'>❌ تتداخل المفاهيم الثلاثة مع بعضها — ليس الاستدامة والأخلاقيات فحسب.</span>"] },
  { ch: "ch3", q: "Electronic waste (e-waste) has become a significant environmental problem because _______.", opts: ["It is too expensive to recycle", "It contains hazardous materials and its volume is increasing rapidly", "It is primarily an issue in developing countries only", "Legislation has not yet been passed to address it"], ans: 1, exp: ["❌ Cost is one factor but not the primary reason e-waste is a significant environmental problem.<br><span dir='rtl'>❌ التكلفة عامل واحد لكن ليست السبب الرئيسي لكون النفايات الإلكترونية مشكلة بيئية كبيرة.</span>", "✅ Correct. E-waste contains hazardous materials (lead, mercury, cadmium) and the volume is growing rapidly with increasing consumer electronics consumption.<br><span dir='rtl'>✅ صح — النفايات الإلكترونية تحتوي على مواد خطرة (رصاص، زئبق، كادميوم) وحجمها ينمو بسرعة مع زيادة استهلاك الإلكترونيات.</span>", "❌ E-waste is a global problem — developed countries generate it and often export it to developing nations.<br><span dir='rtl'>❌ النفايات الإلكترونية مشكلة عالمية — الدول المتقدمة تولّدها وكثيرًا ما تصدّرها للدول النامية.</span>", "❌ Some e-waste legislation exists (EU's WEEE Directive, some U.S. state laws) but enforcement remains limited.<br><span dir='rtl'>❌ بعض تشريعات النفايات الإلكترونية موجودة (توجيه WEEE الأوروبي، بعض قوانين الولايات الأمريكية) لكن التطبيق لا يزال محدودًا.</span>"] },

  // ════ CH1 — Additional Test Bank Questions ════
  { ch: "ch1", q: "President Obama's administration focused on which of these major ethical issues?", opts: ["Decreasing environmental legislation", "Deregulation", "Tax decreases", "Healthcare and consumer protection"], ans: 3, exp: ["❌ Obama increased environmental regulations (Clean Power Plan, fuel standards) — the opposite.<br><span dir='rtl'>❌ أوباما زاد اللوائح البيئية (خطة الطاقة النظيفة، معايير الوقود) — العكس تمامًا.</span>", "❌ Obama's administration increased regulation, particularly in finance and healthcare.<br><span dir='rtl'>❌ زادت إدارة أوباما التنظيمات، خاصةً في المجالَين الماليين والصحيين.</span>", "❌ Obama's major legislative achievement was the ACA, not tax cuts.<br><span dir='rtl'>❌ الإنجاز التشريعي الرئيسي لأوباما كان قانون ACA، لا تخفيض الضرائب.</span>", "✅ Correct. Obama's administration focused on healthcare (Affordable Care Act) and consumer protection (Dodd-Frank, creation of the CFPB).<br><span dir='rtl'>✅ صح — ركزت إدارة أوباما على الرعاية الصحية (ACA) وحماية المستهلك (Dodd-Frank، وإنشاء CFPB).</span>"] },
  { ch: "ch1", q: "A far-reaching change to organizational control and accounting systems, making securities fraud a criminal offense, was the _______.", opts: ["Foreign Corrupt Practices Act", "Sarbanes-Oxley Act", "Consumer Protection Act", "Dodd-Frank Wall Street Reform Act"], ans: 1, exp: ["❌ The FCPA (1977) targets bribery of foreign officials — not accounting systems or securities fraud.<br><span dir='rtl'>❌ FCPA (1977) يستهدف رشوة المسؤولين الأجانب — لا أنظمة المحاسبة أو الاحتيال في الأوراق المالية.</span>", "✅ Correct. SOX (2002) overhauled organizational accounting controls and made securities fraud a criminal offense.<br><span dir='rtl'>✅ صح — أعاد SOX (2002) هيكلة الضوابط المحاسبية التنظيمية وجعل الاحتيال في الأوراق المالية جريمة جنائية.</span>", "❌ 'Consumer Protection Act' is a generic term — not the specific legislation for accounting overhaul.<br><span dir='rtl'>❌ 'قانون حماية المستهلك' مصطلح عام — وليس التشريع المحدد لإصلاح المحاسبة.</span>", "❌ Dodd-Frank (2010) reformed financial services broadly but SOX specifically targeted accounting systems and criminalized securities fraud.<br><span dir='rtl'>❌ Dodd-Frank (2010) أصلح الخدمات المالية بشكل شامل لكن SOX استهدف تحديدًا أنظمة المحاسبة وجرّم الاحتيال في الأوراق المالية.</span>"] },
  { ch: "ch1", q: "In the Reagan/Bush eras, the major focus of the business world was on _______.", opts: ["Self-regulation rather than regulation by government", "Decreasing the number of mergers", "Increasing government influence on the economic arena", "Improving business ethics through legislation"], ans: 0, exp: ["✅ Correct. The Reagan and Bush eras were defined by deregulation and self-regulation — the belief that markets work better with less government intervention.<br><span dir='rtl'>✅ صح — عُرِّفت حقبتا ريغان وبوش بإلغاء التنظيمات والتنظيم الذاتي — الاعتقاد بأن الأسواق تعمل بشكل أفضل مع تدخل حكومي أقل.</span>", "❌ Merger and acquisition activity actually increased dramatically during this era.<br><span dir='rtl'>❌ نشاط الاندماجات والاستحواذات زاد فعليًا بشكل كبير خلال هذه الحقبة.</span>", "❌ Reagan specifically reduced government's economic role through deregulation.<br><span dir='rtl'>❌ ريغان قلّص تحديدًا الدور الاقتصادي للحكومة من خلال إلغاء التنظيمات.</span>", "❌ Ethics legislation (FSGO) came under Bush but was not the major focus of the era's business philosophy.<br><span dir='rtl'>❌ تشريع الأخلاقيات (FSGO) جاء في عهد بوش لكنه لم يكن التركيز الرئيسي لفلسفة الأعمال في تلك الحقبة.</span>"] },
  { ch: "ch1", q: "The six principles of the Defense Industry Initiative on Business Ethics and Conduct became the foundation for _______.", opts: ["The Foreign Corrupt Practices Act", "The Federal Sentencing Guidelines for Organizations", "The Ethical Trading Initiative", "The Sarbanes-Oxley Act"], ans: 1, exp: ["❌ The FCPA predates the DII and addresses foreign bribery — unrelated to DII principles.<br><span dir='rtl'>❌ FCPA يسبق DII ويعالج الرشوة الأجنبية — لا علاقة له بمبادئ DII.</span>", "✅ Correct. The DII's six principles (1986) directly became the foundation for the FSGO (1991), which incentivized organizational ethics programs.<br><span dir='rtl'>✅ صح — أصبحت المبادئ الستة لـ DII (1986) مباشرةً أساسًا لـ FSGO (1991) الذي حفّز برامج أخلاقيات المنظمات.</span>", "❌ The Ethical Trading Initiative focuses on supply chain labor standards, not DII principles.<br><span dir='rtl'>❌ مبادرة التجارة الأخلاقية تركز على معايير العمل في سلسلة التوريد، لا مبادئ DII.</span>", "❌ SOX (2002) was a response to accounting scandals, not built on DII principles.<br><span dir='rtl'>❌ SOX (2002) استجابة لفضائح المحاسبة، وليس مبنيًا على مبادئ DII.</span>"] },
  { ch: "ch1", q: "The Federal Sentencing Guidelines for Organizations are described as utilizing _______.", opts: ["A routine mechanical approach that forces all firms to comply", "A strategy to prosecute all misconduct severely", "A purely voluntary self-regulation model", "A carrot-and-stick approach by taking preventive action and encouraging ethical cultures"], ans: 3, exp: ["❌ The FSGO uses incentives and judgment — not a rigid mechanical compliance formula.<br><span dir='rtl'>❌ FSGO يستخدم الحوافز والحكم — لا صيغة امتثال آلية صارمة.</span>", "❌ The FSGO reduces prosecution severity for firms with ethics programs — it is not purely punitive.<br><span dir='rtl'>❌ FSGO يخفف من شدة الملاحقة القضائية للشركات ذات برامج الأخلاقيات — وليس عقابيًا بحتًا.</span>", "❌ The FSGO has real legal consequences — it is not purely voluntary.<br><span dir='rtl'>❌ FSGO له عواقب قانونية حقيقية — وليس طوعيًا بحتًا.</span>", "✅ Correct. The FSGO uses a carrot-and-stick approach: carrot = reduced penalties for proactive ethics programs; stick = harsher penalties for misconduct without programs.<br><span dir='rtl'>✅ صح — FSGO يستخدم أسلوب الجزرة والعصا: الجزرة = تخفيف العقوبات لبرامج الأخلاقيات الاستباقية؛ العصا = عقوبات أشد للمخالفات دون برامج.</span>"] },
  { ch: "ch1", q: "Employees' perceptions of their firm as having an ethical climate lead to _______.", opts: ["Lack of focus on goals", "Greater focus on education", "Increased community involvement", "Performance-enhancing outcomes"], ans: 3, exp: ["❌ Ethical climate improves focus and commitment — it doesn't reduce goal orientation.<br><span dir='rtl'>❌ المناخ الأخلاقي يُحسّن التركيز والالتزام — لا يُقلل من التوجه نحو الأهداف.</span>", "❌ Education focus is not a documented primary outcome of perceived ethical climate.<br><span dir='rtl'>❌ التركيز على التعليم ليس نتيجة رئيسية موثقة للمناخ الأخلاقي المُدرَك.</span>", "❌ Community involvement may increase but is not the primary measured outcome.<br><span dir='rtl'>❌ المشاركة المجتمعية قد تزيد لكنها ليست النتيجة الأساسية المقاسة.</span>", "✅ Correct. Research shows that employees who perceive their organization as ethical show performance-enhancing outcomes — higher commitment, lower turnover, better effort.<br><span dir='rtl'>✅ صح — تُظهر الأبحاث أن الموظفين الذين يرون منظمتهم أخلاقية يُبدون نتائج تُعزز الأداء — التزامًا أعلى ودورانًا أقل وجهدًا أفضل.</span>"] },
  { ch: "ch1", q: "Why is the public more tolerant of consumer misconduct than business misconduct?", opts: ["Businesses are expected to have a better idea of right and wrong", "The decisions of individuals have little to do with ethics", "There are big differences in wealth and success between businesses and consumers", "More organizations commit misconduct than individuals"], ans: 2, exp: ["❌ While true that businesses are held to higher standards, the specific reason is the power/wealth disparity.<br><span dir='rtl'>❌ صحيح أن الشركات تُعقد لها معايير أعلى، لكن السبب المحدد هو التفاوت في القوة والثروة.</span>", "❌ Individual decisions absolutely involve ethics — this is incorrect.<br><span dir='rtl'>❌ قرارات الأفراد تنطوي بالتأكيد على أخلاقيات — هذا غير صحيح.</span>", "✅ Correct. Because of the vast differences in wealth and power between corporations and individual consumers, the public holds businesses to higher ethical standards.<br><span dir='rtl'>✅ صح — بسبب الفوارق الهائلة في الثروة والقوة بين الشركات والمستهلكين الأفراد، يُحمّل الجمهور الشركات معايير أخلاقية أعلى.</span>", "❌ The frequency of misconduct is not the reason for differential tolerance.<br><span dir='rtl'>❌ تكرار المخالفات ليس سبب التسامح التفاضلي.</span>"] },
  { ch: "ch1", q: "Which business ethics issue was a major concern during the 1920s?", opts: ["Sustainability", "Consumerism", "Living wage", "Bribery"], ans: 2, exp: ["❌ Sustainability became a prominent concern much later, in the 1960s–70s with Earth Day.<br><span dir='rtl'>❌ الاستدامة أصبحت اهتمامًا بارزًا في وقت لاحق في الستينيات-السبعينيات مع يوم الأرض.</span>", "❌ The consumerism movement emerged prominently in the 1960s.<br><span dir='rtl'>❌ حركة المستهلكية ظهرت بروزًا في الستينيات.</span>", "✅ Correct. The living wage was a central ethical concern of the 1920s labor movement as workers fought for fair compensation.<br><span dir='rtl'>✅ صح — الأجر المعيشي كان مصدر قلق أخلاقي محوريًا لحركة العمال في العشرينيات إذ ناضلوا من أجل أجر عادل.</span>", "❌ Bribery became a major legislative focus later with the FCPA (1977).<br><span dir='rtl'>❌ الرشوة أصبحت تركيزًا تشريعيًا رئيسيًا لاحقًا مع FCPA (1977).</span>"] },
  { ch: "ch1", q: "What will happen to a firm found to be in violation if the company had proactively tried to prevent misconduct from occurring?", opts: ["The government will rule that their actions were insufficient", "Penalties or fines may be reduced", "Regulators will charge the firm with criminal activities", "The firm will be forced to hire an ethics officer"], ans: 1, exp: ["❌ Proactive ethics programs are considered mitigating factors — not deemed insufficient.<br><span dir='rtl'>❌ برامج الأخلاقيات الاستباقية تُعتبر عوامل تخفيف — لا تُعدّ غير كافية.</span>", "✅ Correct. Under the FSGO, if a firm had genuine ethics programs in place, penalties or fines may be significantly reduced.<br><span dir='rtl'>✅ صح — بموجب FSGO، إذا كانت الشركة تمتلك برامج أخلاقيات حقيقية، فقد تُخفَّض العقوبات أو الغرامات بشكل كبير.</span>", "❌ Having prevention programs reduces the likelihood of criminal charges — it is a mitigating factor.<br><span dir='rtl'>❌ امتلاك برامج وقاية يُقلل من احتمالية الاتهامات الجنائية — وهو عامل تخفيف.</span>", "❌ The firm may be encouraged to strengthen ethics programs, but mandatory hiring of an ethics officer is not a standard penalty.<br><span dir='rtl'>❌ قد تُشجَّع الشركة على تقوية برامج الأخلاقيات، لكن التوظيف الإلزامي لمسؤول أخلاقيات ليس عقوبة معيارية.</span>"] },
  { ch: "ch1", q: "Which of the following is TRUE about the potential for unethical behavior in organizations?", opts: ["Only for-profit businesses can engage in unethical behavior", "Only large corporations have the potential for unethical behavior", "Every organization — regardless of type — has the potential for unethical behavior", "Non-profit organizations are exempt from ethical concerns"], ans: 2, exp: ["❌ Non-profits, governments, and other organizations also engage in unethical behavior — not just for-profit businesses.<br><span dir='rtl'>❌ المنظمات غير الربحية والحكومات وغيرها تمارس سلوكًا غير أخلاقي أيضًا — ليس الشركات الربحية فقط.</span>", "❌ Small organizations, non-profits, and government agencies also have ethical failure potential.<br><span dir='rtl'>❌ المنظمات الصغيرة وغير الربحية والوكالات الحكومية لديها أيضًا احتمالية الإخفاق الأخلاقي.</span>", "✅ Correct. TRUE — every organization, regardless of size, type, or mission, has the potential for unethical behavior.<br><span dir='rtl'>✅ صح — صحيح — كل منظمة بغض النظر عن حجمها أو نوعها أو مهمتها لديها احتمالية السلوك غير الأخلاقي.</span>", "❌ Non-profits face unique ethical challenges (misuse of donations, conflicts of interest) — they are not exempt.<br><span dir='rtl'>❌ المنظمات غير الربحية تواجه تحديات أخلاقية فريدة (إساءة استخدام التبرعات، تضارب المصالح) — فهي لا تُعفى.</span>"] },

  // ════ CH2 — Additional Test Bank Questions ════
  { ch: "ch2", q: "Which of the following industries tends to generate a high level of trust from consumers and the public?", opts: ["Insurance", "Technology", "Banks", "Energy"], ans: 1, exp: ["❌ Insurance companies often face trust issues due to claim denials, complex policies, and perceived exploitation.<br><span dir='rtl'>❌ شركات التأمين كثيرًا ما تواجه مشاكل ثقة بسبب رفض المطالبات والسياسات المعقدة.</span>", "✅ Correct. Technology companies typically generate higher consumer trust — they are seen as innovative and consumer-focused.<br><span dir='rtl'>✅ صح — شركات التكنولوجيا تُولّد عادةً ثقة مستهلك أعلى — يُنظر إليها على أنها مبتكرة وتركز على المستهلك.</span>", "❌ Banks have suffered major trust deficits, especially after the 2008 financial crisis.<br><span dir='rtl'>❌ البنوك عانت من عجز كبير في الثقة، خاصةً بعد الأزمة المالية لعام 2008.</span>", "❌ Energy companies face skepticism due to environmental concerns and high prices.<br><span dir='rtl'>❌ شركات الطاقة تواجه تشككًا بسبب المخاوف البيئية والأسعار المرتفعة.</span>"] },
  { ch: "ch2", q: "What do suppliers offer that is critical to a firm's long-term success?", opts: ["The promise of customer loyalty", "Material resources and/or intangible knowledge", "Infrastructure funding", "Leadership skills"], ans: 1, exp: ["❌ Customer loyalty comes from customers — suppliers don't control that relationship.<br><span dir='rtl'>❌ ولاء العملاء يأتي من العملاء — الموردون لا يتحكمون في تلك العلاقة.</span>", "✅ Correct. Suppliers provide material resources (raw materials, components) and/or intangible knowledge (expertise, proprietary technology) that are critical to operations.<br><span dir='rtl'>✅ صح — يوفر الموردون موارد مادية (مواد خام، مكونات) و/أو معرفة غير ملموسة (خبرة، تقنية مملوكة) ضرورية للعمليات.</span>", "❌ Infrastructure funding comes from investors, banks, or government — not typically from suppliers.<br><span dir='rtl'>❌ تمويل البنية التحتية يأتي من المستثمرين والبنوك أو الحكومة — لا من الموردين عادةً.</span>", "❌ Leadership skills are developed internally or through executive recruitment, not supplied externally.<br><span dir='rtl'>❌ مهارات القيادة تُطوَّر داخليًا أو من خلال التوظيف التنفيذي، لا يوفرها الموردون خارجيًا.</span>"] },
  { ch: "ch2", q: "Some economists believe that if companies address economic and legal issues, they are satisfying their total social responsibility. This view is associated with _______.", opts: ["John Maynard Keynes", "Janet Yellen", "Adam Smith", "Milton Friedman"], ans: 3, exp: ["❌ Keynes focused on macroeconomics and government spending — not specifically on corporate social responsibility.<br><span dir='rtl'>❌ كينز ركز على الاقتصاد الكلي والإنفاق الحكومي — لا على المسؤولية الاجتماعية للشركات تحديدًا.</span>", "❌ Janet Yellen is a modern economist and central banker, not associated with this view.<br><span dir='rtl'>❌ جانيت يلين اقتصادية معاصرة ومصرفية مركزية، غير مرتبطة بهذا الرأي.</span>", "❌ Adam Smith focused on free markets and the invisible hand — not the narrow economic/legal responsibility view.<br><span dir='rtl'>❌ آدم سميث ركز على الأسواق الحرة واليد الخفية — لا على وجهة النظر الضيقة للمسؤولية الاقتصادية/القانونية.</span>", "✅ Correct. Milton Friedman argued that a company's only social responsibility is economic (make profit) and legal (obey laws) — nothing more.<br><span dir='rtl'>✅ صح — جادل ميلتون فريدمان بأن المسؤولية الاجتماعية الوحيدة للشركة هي الاقتصادية (تحقيق الربح) والقانونية (احترام القوانين) — لا أكثر.</span>"] },
  { ch: "ch2", q: "Which of the following describes the purpose of a stakeholder orientation?", opts: ["To emphasize shareholders and provide them a return on investment", "To maximize positive outcomes that meet stakeholder needs", "To determine which stakeholders to ignore", "To allow stakeholders to set executive compensation"], ans: 1, exp: ["❌ Emphasizing shareholders only = the shareholder model, not stakeholder orientation.<br><span dir='rtl'>❌ التركيز على المساهمين فقط = نموذج المساهمين، لا التوجه نحو أصحاب المصلحة.</span>", "✅ Correct. Stakeholder orientation = maximizing positive outcomes by understanding and addressing the needs of all stakeholders.<br><span dir='rtl'>✅ صح — التوجه نحو أصحاب المصلحة = تعظيم النتائج الإيجابية بفهم احتياجات جميع أصحاب المصلحة ومعالجتها.</span>", "❌ The purpose is to identify and engage all stakeholders — never to determine which to ignore.<br><span dir='rtl'>❌ الغرض هو تحديد جميع أصحاب المصلحة والتعامل معهم — وليس تحديد من يُتجاهَل.</span>", "❌ Stakeholders don't set executive compensation — boards and compensation committees do.<br><span dir='rtl'>❌ أصحاب المصلحة لا يحددون تعويضات المديرين — يفعل ذلك مجالس الإدارة ولجان التعويضات.</span>"] },
  { ch: "ch2", q: "Which of the following would typically be considered a secondary stakeholder group?", opts: ["Suppliers", "Customers", "Special-interest groups", "Government regulatory agencies"], ans: 2, exp: ["❌ Suppliers provide essential resources — they are primary stakeholders.<br><span dir='rtl'>❌ الموردون يوفرون موارد أساسية — فهم أصحاب مصلحة أساسيون.</span>", "❌ Customers generate revenue — they are primary stakeholders essential for survival.<br><span dir='rtl'>❌ العملاء يولّدون الإيرادات — فهم أصحاب مصلحة أساسيون ضروريون للبقاء.</span>", "✅ Correct. Special-interest groups (environmental groups, advocacy organizations) do not directly transact with the firm — they are secondary stakeholders.<br><span dir='rtl'>✅ صح — المجموعات ذات المصالح الخاصة (مجموعات بيئية، منظمات مناصرة) لا تتعامل مباشرة مع الشركة — فهي أصحاب مصلحة ثانويون.</span>", "❌ Government agencies issue licenses and regulations that the firm must comply with — they are primary stakeholders.<br><span dir='rtl'>❌ الوكالات الحكومية تُصدر تراخيص ولوائح يجب على الشركة الامتثال لها — فهي أصحاب مصلحة أساسيون.</span>"] },
  { ch: "ch2", q: "Which of the following would typically be considered a primary stakeholder group?", opts: ["Competitors", "Community", "Trade associations", "Special interest groups"], ans: 1, exp: ["❌ Competitors are not stakeholders in the traditional sense — they have no claim in the firm's outcomes.<br><span dir='rtl'>❌ المنافسون ليسوا أصحاب مصلحة بالمعنى التقليدي — ليس لهم مطلب في نتائج الشركة.</span>", "✅ Correct. Community is a primary stakeholder — firms depend on the community for infrastructure, workforce, and social license to operate.<br><span dir='rtl'>✅ صح — المجتمع صاحب مصلحة أساسي — تعتمد الشركات على المجتمع للبنية التحتية والقوى العاملة والترخيص الاجتماعي للعمل.</span>", "❌ Trade associations represent industries collectively — they are secondary stakeholders.<br><span dir='rtl'>❌ الاتحادات التجارية تمثل الصناعات بشكل جماعي — فهي أصحاب مصلحة ثانويون.</span>", "❌ Special interest groups influence the firm externally — they are secondary stakeholders.<br><span dir='rtl'>❌ مجموعات المصالح الخاصة تؤثر في الشركة خارجيًا — فهي أصحاب مصلحة ثانويون.</span>"] },
  { ch: "ch2", q: "What do critics of high compensation for boards of directors point to as being problematic?", opts: ["The more directors are paid, the more power they have", "High compensation could cause a conflict of interest", "High board pay leads to poorly compensated employees", "Board compensation is negatively related to corporate growth"], ans: 1, exp: ["❌ Pay level doesn't directly translate to governing power — directors' authority comes from their board role.<br><span dir='rtl'>❌ مستوى الأجر لا يُترجم مباشرةً إلى قوة حوكمة — سلطة المديرين تأتي من دورهم في مجلس الإدارة.</span>", "✅ Correct. Critics argue that high director compensation creates conflicts of interest — well-paid directors may avoid challenging excessive executive pay or risky strategies.<br><span dir='rtl'>✅ صح — يجادل المنتقدون بأن التعويض المرتفع للمديرين يخلق تضاربًا في المصالح — قد يتجنب المديرون جيدو الأجر تحدي الرواتب التنفيذية المفرطة.</span>", "❌ There is no clear direct causal link between board pay and employee compensation levels.<br><span dir='rtl'>❌ لا توجد علاقة سببية مباشرة واضحة بين أجر مجلس الإدارة ومستويات تعويض الموظفين.</span>", "❌ This claim is not supported — board compensation level is not reliably negatively correlated with growth.<br><span dir='rtl'>❌ هذا الادعاء غير مدعوم — مستوى تعويض مجلس الإدارة لا يرتبط بشكل موثوق سلبيًا بالنمو.</span>"] },
  { ch: "ch2", q: "The last step in implementing a stakeholder perspective in an organization is _______.", opts: ["Identifying resources and determining urgency", "Assessing the corporate culture", "Identifying stakeholder issues", "Monitoring and evaluating the process continually"], ans: 3, exp: ["❌ Identifying resources is an intermediate step in the stakeholder implementation process.<br><span dir='rtl'>❌ تحديد الموارد خطوة وسيطة في عملية تطبيق منظور أصحاب المصلحة.</span>", "❌ Assessing the corporate culture is the first step — not the last.<br><span dir='rtl'>❌ تقييم ثقافة الشركة هي الخطوة الأولى — وليس الأخيرة.</span>", "❌ Identifying stakeholder issues is an early step, not the final one.<br><span dir='rtl'>❌ تحديد قضايا أصحاب المصلحة خطوة مبكرة، وليست الأخيرة.</span>", "✅ Correct. The last step is continuous monitoring and evaluation — ensuring the stakeholder perspective remains effective and responsive over time.<br><span dir='rtl'>✅ صح — الخطوة الأخيرة هي المراقبة والتقييم المستمران — ضمان بقاء منظور أصحاب المصلحة فعّالًا ومستجيبًا عبر الزمن.</span>"] },
  { ch: "ch2", q: "A stakeholder orientation is not complete unless it includes _______.", opts: ["Clear accounting procedures", "Major financing activities", "A marketing strategy", "Activities that address stakeholder issues"], ans: 3, exp: ["❌ Accounting procedures are operational requirements — not what makes a stakeholder orientation complete.<br><span dir='rtl'>❌ إجراءات المحاسبة متطلبات تشغيلية — وليست ما يُكمل التوجه نحو أصحاب المصلحة.</span>", "❌ Financing activities are a business function — not the defining element of stakeholder orientation.<br><span dir='rtl'>❌ أنشطة التمويل وظيفة أعمال — وليست العنصر المحدد للتوجه نحو أصحاب المصلحة.</span>", "❌ A marketing strategy alone is insufficient — stakeholder orientation requires actual engagement and action.<br><span dir='rtl'>❌ استراتيجية التسويق وحدها غير كافية — التوجه نحو أصحاب المصلحة يتطلب انخراطًا وأفعالًا فعلية.</span>", "✅ Correct. Stakeholder orientation is only complete when it includes concrete activities that actually address and respond to stakeholder issues and concerns.<br><span dir='rtl'>✅ صح — لا يكتمل التوجه نحو أصحاب المصلحة إلا عندما يتضمن أنشطة ملموسة تعالج فعليًا قضايا ومخاوف أصحاب المصلحة وتستجيب لها.</span>"] },
  { ch: "ch2", q: "In Dodge v. Ford Motor Co., the court ruled that _______.", opts: ["Ford had a duty to maximize stakeholder welfare", "Business should balance shareholders and employees equally", "A business exists primarily for the profit of its shareholders", "Corporate governance must include worker representation"], ans: 2, exp: ["❌ The court ruled in favor of shareholders — not broader stakeholder welfare.<br><span dir='rtl'>❌ حكمت المحكمة لصالح المساهمين — لا رفاهية أصحاب المصلحة الأوسع.</span>", "❌ The ruling favored shareholders over other groups — it did not call for balance.<br><span dir='rtl'>❌ الحكم فضّل المساهمين على المجموعات الأخرى — ولم يدعُ للتوازن.</span>", "✅ Correct. Dodge v. Ford (1919) established the precedent that a corporation's primary duty is to maximize profit for its shareholders.<br><span dir='rtl'>✅ صح — أرست قضية دودج ضد فورد (1919) سابقةً بأن الواجب الأساسي للشركة هو تعظيم الربح لمساهميها.</span>", "❌ Worker representation on boards was not part of this ruling.<br><span dir='rtl'>❌ تمثيل العمال في مجالس الإدارة لم يكن جزءًا من هذا الحكم.</span>"] },
  { ch: "ch2", q: "Which of the following are secondary stakeholders?", opts: ["Managers", "Trade associations", "Employees", "Workers"], ans: 1, exp: ["❌ Managers are internal employees — they are primary stakeholders with direct transactional relationships.<br><span dir='rtl'>❌ المديرون موظفون داخليون — فهم أصحاب مصلحة أساسيون بعلاقات معاملات مباشرة.</span>", "✅ Correct. Trade associations represent industry interests collectively — they do not engage in direct transactions with individual firms and are secondary stakeholders.<br><span dir='rtl'>✅ صح — الاتحادات التجارية تمثل مصالح الصناعة بشكل جماعي — لا تنخرط في معاملات مباشرة مع الشركات الفردية وهي أصحاب مصلحة ثانويون.</span>", "❌ Employees engage directly in the firm's operations — they are primary stakeholders.<br><span dir='rtl'>❌ الموظفون ينخرطون مباشرة في عمليات الشركة — فهم أصحاب مصلحة أساسيون.</span>", "❌ Workers = employees; they are primary stakeholders essential for operations.<br><span dir='rtl'>❌ العمال = الموظفون؛ فهم أصحاب مصلحة أساسيون ضروريون للعمليات.</span>"] },
  { ch: "ch2", q: "Social responsibility activities have which type of impact on consumer identification with a firm?", opts: ["A negative impact", "No measurable impact", "A positive impact — they can enhance consumer identification", "An impact only on B2B relationships"], ans: 2, exp: ["❌ Research consistently shows social responsibility activities have positive, not negative, effects on consumer attitudes.<br><span dir='rtl'>❌ تُظهر الأبحاث باستمرار أن أنشطة المسؤولية الاجتماعية لها آثار إيجابية لا سلبية على مواقف المستهلكين.</span>", "❌ Impact is measurable and documented — consumers do respond positively to CSR activities.<br><span dir='rtl'>❌ الأثر قابل للقياس وموثق — المستهلكون يستجيبون إيجابيًا لأنشطة المسؤولية الاجتماعية.</span>", "✅ Correct. Social responsibility activities enhance consumer identification with a firm — consumers feel more connected to brands that act ethically.<br><span dir='rtl'>✅ صح — أنشطة المسؤولية الاجتماعية تُعزز تعريف المستهلكين بالشركة — يشعر المستهلكون بارتباط أكبر بالعلامات التجارية التي تتصرف بأخلاقية.</span>", "❌ CSR activities impact B2C relationships significantly — not just B2B.<br><span dir='rtl'>❌ أنشطة المسؤولية الاجتماعية تؤثر بشكل كبير على العلاقات B2C — وليس فقط B2B.</span>"] },

  // ════ CH3 — Additional Test Bank Questions ════
  { ch: "ch3", q: "Urban sprawl can create hardship for which of the following?", opts: ["Car and oil companies", "The airline industry", "The railroad industry", "Service-oriented companies"], ans: 0, exp: ["✅ Correct. Urban sprawl leads to environmental criticism, calls for regulation of emissions, and increased scrutiny on car and oil companies due to the pollution and infrastructure costs it creates.<br><span dir='rtl'>✅ صح — يؤدي التمدد العمراني إلى انتقادات بيئية ومطالبات بتنظيم الانبعاثات وزيادة التدقيق في شركات السيارات والنفط.</span>", "❌ The airline industry is not primarily impacted by urban sprawl patterns.<br><span dir='rtl'>❌ صناعة الطيران ليست المتأثر الرئيسي بأنماط التمدد العمراني.</span>", "❌ Urban sprawl can actually increase demand for commuter rail — not a source of hardship for railroads.<br><span dir='rtl'>❌ التمدد العمراني يمكن أن يزيد فعليًا الطلب على قطارات التنقل — وليس مصدر صعوبة للسكك الحديدية.</span>", "❌ Service companies may adapt to sprawl — it is not the primary hardship group identified.<br><span dir='rtl'>❌ شركات الخدمات يمكنها التكيف مع التمدد — وليست المجموعة الرئيسية المحددة للصعوبة.</span>"] },
  { ch: "ch3", q: "One of the country's greatest sustainability success stories is _______.", opts: ["Water conservation", "Pollution control", "Manufacturing innovation", "Recycling"], ans: 3, exp: ["❌ Water conservation efforts are ongoing but not identified as the top success story.<br><span dir='rtl'>❌ جهود الحفاظ على المياه مستمرة لكنها لم تُحدَّد كأبرز قصة نجاح.</span>", "❌ Pollution control has improved but significant issues remain.<br><span dir='rtl'>❌ السيطرة على التلوث تحسّنت لكن تظل قضايا مهمة قائمة.</span>", "❌ Manufacturing innovation is ongoing — not specifically a sustainability success story.<br><span dir='rtl'>❌ الابتكار التصنيعي مستمر — وليس تحديدًا قصة نجاح الاستدامة.</span>", "✅ Correct. Recycling is widely cited as one of the United States' greatest sustainability success stories, with high public adoption and measurable waste diversion.<br><span dir='rtl'>✅ صح — يُعدّ إعادة التدوير على نطاق واسع من أعظم قصص نجاح الاستدامة في الولايات المتحدة، مع اعتماد عام مرتفع وتحويل قابل للقياس للنفايات.</span>"] },
  { ch: "ch3", q: "Stakeholder assessment is an important part of which type of approach to environmental issues?", opts: ["Low-commitment", "Medium-commitment", "High-commitment", "Hands-off"], ans: 2, exp: ["❌ Low-commitment businesses avoid environmental issues — they do not conduct stakeholder assessments.<br><span dir='rtl'>❌ الشركات ذات الالتزام المنخفض تتجنب القضايا البيئية — فهي لا تجري تقييمات لأصحاب المصلحة.</span>", "❌ Medium-commitment involves some compliance but stakeholder assessment is not central.<br><span dir='rtl'>❌ الالتزام المتوسط يتضمن بعض الامتثال لكن تقييم أصحاب المصلحة ليس محوريًا.</span>", "✅ Correct. High-commitment organizations proactively include stakeholder assessment as a key part of their environmental strategy.<br><span dir='rtl'>✅ صح — المنظمات ذات الالتزام العالي تُدرج بشكل استباقي تقييم أصحاب المصلحة كجزء رئيسي من استراتيجيتها البيئية.</span>", "❌ Hands-off = no engagement with environmental issues — no stakeholder assessment involved.<br><span dir='rtl'>❌ عدم التدخل = لا انخراط في القضايا البيئية — لا تقييم لأصحاب المصلحة.</span>"] },
  { ch: "ch3", q: "It is possible to quantify the trade-offs to determine whether to accept or reject environmental risks. This process is called _______.", opts: ["Risk management", "Management voting", "Board directives", "Legal requirements"], ans: 0, exp: ["✅ Correct. Risk management = the process of quantifying trade-offs to determine whether to accept or reject environmental risks based on cost-benefit analysis.<br><span dir='rtl'>✅ صح — إدارة المخاطر = عملية تحديد المقايضات كميًا لتحديد ما إذا كان يجب قبول المخاطر البيئية أو رفضها بناءً على تحليل التكلفة والفائدة.</span>", "❌ Management voting is not a formal process for environmental risk quantification.<br><span dir='rtl'>❌ التصويت الإداري ليس عملية رسمية لتحديد المخاطر البيئية كميًا.</span>", "❌ Board directives are strategic decisions, not the analytical risk quantification process.<br><span dir='rtl'>❌ توجيهات مجلس الإدارة قرارات استراتيجية، وليست عملية التحديد التحليلي للمخاطر.</span>", "❌ Legal requirements are external mandates — not the internal quantification process.<br><span dir='rtl'>❌ المتطلبات القانونية تفويضات خارجية — وليست عملية التحديد الداخلية.</span>"] },
  { ch: "ch3", q: "Which of the following includes the assessment and improvement of business strategies, economic sectors, work practices, and lifestyles?", opts: ["Competitive advantage", "Marketing", "Sustainability", "Risk analysis"], ans: 2, exp: ["❌ Competitive advantage is a business outcome — not the assessment and improvement process described.<br><span dir='rtl'>❌ الميزة التنافسية نتيجة أعمال — وليست عملية التقييم والتحسين الموصوفة.</span>", "❌ Marketing focuses on promotion, pricing, and customer relationships — not broad societal improvement.<br><span dir='rtl'>❌ التسويق يركز على الترويج والتسعير وعلاقات العملاء — لا على التحسين المجتمعي الواسع.</span>", "✅ Correct. Sustainability encompasses the assessment and improvement of business strategies, economic sectors, work practices, and lifestyles for long-term well-being.<br><span dir='rtl'>✅ صح — تشمل الاستدامة تقييم وتحسين الاستراتيجيات التجارية والقطاعات الاقتصادية وممارسات العمل وأساليب الحياة للرفاه طويل الأمد.</span>", "❌ Risk analysis identifies and evaluates risks — it does not include the improvement of lifestyles and work practices.<br><span dir='rtl'>❌ تحليل المخاطر يُحدد المخاطر ويُقيّمها — ولا يتضمن تحسين أساليب الحياة وممارسات العمل.</span>"] },
  { ch: "ch3", q: "Which of the following does a cap-and-trade program reduce?", opts: ["Carbon emissions", "Waste", "Water pollution", "Deforestation"], ans: 0, exp: ["✅ Correct. Cap-and-trade sets a cap on total carbon emissions and allows trading of allowances — designed specifically to reduce carbon/greenhouse gas emissions.<br><span dir='rtl'>✅ صح — يضع الحد والتبادل سقفًا لإجمالي انبعاثات الكربون ويسمح بتداول حصص الانبعاثات — مصمم تحديدًا لتقليل انبعاثات الكربون/الغازات الدفيئة.</span>", "❌ Waste reduction is addressed through separate programs (recycling initiatives, landfill regulations).<br><span dir='rtl'>❌ تخفيض النفايات يُعالَج من خلال برامج منفصلة (مبادرات إعادة التدوير، لوائح مدافن النفايات).</span>", "❌ Water pollution is addressed through the Clean Water Act and NPDES permits — not cap-and-trade.<br><span dir='rtl'>❌ تلوث المياه يُعالَج من خلال قانون المياه النظيفة وتصاريح NPDES — لا الحد والتبادل.</span>", "❌ Deforestation is addressed through conservation and land-use policies — not cap-and-trade.<br><span dir='rtl'>❌ إزالة الغابات يُعالَج من خلال سياسات الحفظ واستخدام الأراضي — لا الحد والتبادل.</span>"] },
  { ch: "ch3", q: "Which of the following statements about genetically modified seeds is true?", opts: ["They are able to cross-pollinate with other plants", "They make food more perishable", "They often result in greater crop yields", "They are cheaper for farmers in the long run"], ans: 2, exp: ["❌ Cross-pollination is a concern but it is not universally true of all GMO crops and not their defining characteristic.<br><span dir='rtl'>❌ التلقيح المتقاطع مصدر قلق لكنه ليس صحيحًا على المستوى العالمي لجميع المحاصيل المعدلة وراثيًا وليس خاصيتها المميزة.</span>", "❌ GMOs are typically engineered for longer shelf life and pest resistance — not greater perishability.<br><span dir='rtl'>❌ الكائنات المعدلة وراثيًا مُهندَسة عادةً لمدة صلاحية أطول ومقاومة للآفات — لا لقابلية تلف أكبر.</span>", "✅ Correct. GMO crops are often engineered for pest resistance, drought tolerance, and disease resistance — frequently resulting in greater yields.<br><span dir='rtl'>✅ صح — المحاصيل المعدلة وراثيًا مُهندَسة في الغالب لمقاومة الآفات وتحمل الجفاف ومقاومة الأمراض — مما يؤدي في الغالب إلى غلات أكبر.</span>", "❌ GMO seeds are more expensive due to annual patent licensing fees — making them costlier, not cheaper.<br><span dir='rtl'>❌ بذور الكائنات المعدلة وراثيًا أغلى بسبب رسوم ترخيص البراءات السنوية — مما يجعلها أكثر تكلفةً لا أرخص.</span>"] },
  { ch: "ch3", q: "Major issues that emerged in the twentieth century include the protection of air, water, land, and _______.", opts: ["Employee relations", "Renewable natural resources", "Environmental legal regulations", "Consumer protection"], ans: 1, exp: ["❌ Employee relations is a social/labor issue — not the environmental protection framework.<br><span dir='rtl'>❌ علاقات الموظفين قضية اجتماعية/عمالية — وليست إطار الحماية البيئية.</span>", "✅ Correct. The four major environmental protection areas of the 20th century were air, water, land, and renewable natural resources.<br><span dir='rtl'>✅ صح — المجالات الأربعة الرئيسية للحماية البيئية في القرن العشرين كانت الهواء والماء والأرض والموارد الطبيعية المتجددة.</span>", "❌ Environmental legal regulations are the governmental response to the issues — not an issue itself.<br><span dir='rtl'>❌ اللوائح القانونية البيئية هي الاستجابة الحكومية للقضايا — وليست قضية في حد ذاتها.</span>", "❌ Consumer protection is a separate social/economic policy area, not part of environmental protection.<br><span dir='rtl'>❌ حماية المستهلك مجال سياسة اجتماعية/اقتصادية منفصل، وليس جزءًا من الحماية البيئية.</span>"] },
  { ch: "ch3", q: "Which of the following can cause markedly shorter life spans, along with chronic respiratory problems?", opts: ["Water pollution", "Air pollution", "Climate change", "Deforestation"], ans: 1, exp: ["❌ Water pollution primarily causes waterborne illness, gastrointestinal disease, and poisoning — not chronic respiratory problems.<br><span dir='rtl'>❌ تلوث المياه يسبب أساسًا الأمراض المنقولة بالمياه والأمراض الهضمية والتسمم — لا الأمراض التنفسية المزمنة.</span>", "✅ Correct. Air pollution — particulate matter, ozone, and other pollutants — directly causes chronic respiratory diseases and significantly shortens life spans.<br><span dir='rtl'>✅ صح — تلوث الهواء (الجسيمات الدقيقة والأوزون وغيره) يسبب مباشرةً الأمراض التنفسية المزمنة ويُقصّر فترات الحياة بشكل كبير.</span>", "❌ Climate change has broad health effects but chronic respiratory disease is specifically linked to air pollution.<br><span dir='rtl'>❌ لتغير المناخ آثار صحية واسعة لكن الأمراض التنفسية المزمنة مرتبطة تحديدًا بتلوث الهواء.</span>", "❌ Deforestation contributes to climate change and biodiversity loss but does not directly cause respiratory disease.<br><span dir='rtl'>❌ إزالة الغابات تساهم في تغير المناخ وفقدان التنوع البيولوجي لكنها لا تسبب مباشرةً أمراضًا تنفسية.</span>"] },
  { ch: "ch3", q: "Which issue did Rachel Carson's book Silent Spring address that helped spark the environmental movement?", opts: ["Indiscriminate use of genetically modified seeds", "Deforestation", "Urban sprawl", "Indiscriminate use of pesticides"], ans: 3, exp: ["❌ GMOs were not in widespread use in 1962 when Silent Spring was published.<br><span dir='rtl'>❌ الكائنات المعدلة وراثيًا لم تكن في الاستخدام الواسع عام 1962 حين نُشر الربيع الصامت.</span>", "❌ Silent Spring was not about deforestation — it focused on chemical contamination.<br><span dir='rtl'>❌ لم يتناول الربيع الصامت إزالة الغابات — ركّز على التلوث الكيميائي.</span>", "❌ Urban sprawl was not the subject of Carson's research.<br><span dir='rtl'>❌ التمدد العمراني لم يكن موضوع أبحاث كارسون.</span>", "✅ Correct. Silent Spring (1962) documented the devastating effects of indiscriminate DDT and pesticide use on ecosystems and human health, sparking the modern environmental movement.<br><span dir='rtl'>✅ صح — وثّق الربيع الصامت (1962) الآثار المدمرة للاستخدام العشوائي لمبيد DDT والمبيدات الحشرية على النظم البيئية والصحة البشرية، مما أشعل الحركة البيئية الحديثة.</span>"] },
  { ch: "ch3", q: "The biggest contributor of illnesses in developing countries is likely _______.", opts: ["Acid rain", "Water pollution", "Deforestation", "Climate change"], ans: 1, exp: ["❌ Acid rain causes ecosystem damage but is not the primary source of illness in developing countries.<br><span dir='rtl'>❌ الأمطار الحمضية تسبب ضررًا للنظام البيئي لكنها ليست المصدر الرئيسي للمرض في الدول النامية.</span>", "✅ Correct. Contaminated water is the biggest contributor to illness in developing countries — causing diarrheal diseases, cholera, typhoid, and other waterborne illnesses.<br><span dir='rtl'>✅ صح — المياه الملوثة هي أكبر مساهم في المرض في الدول النامية — تسبب الأمراض الإسهالية والكوليرا والتيفوئيد وأمراض أخرى تنقلها المياه.</span>", "❌ Deforestation contributes to climate change and habitat disruption but is not the direct illness driver.<br><span dir='rtl'>❌ إزالة الغابات تساهم في تغير المناخ واضطراب الموائل لكنها ليست المحرك المباشر للمرض.</span>", "❌ Climate change is a long-term threat but water pollution is the immediate, primary cause of illness today.<br><span dir='rtl'>❌ تغير المناخ تهديد طويل الأمد لكن تلوث المياه هو السبب الأولي الفوري للمرض اليوم.</span>"] },
  { ch: "ch3", q: "Corporate governance mechanisms are needed to align which two groups' interests?", opts: ["Employees and customers", "Investors and management", "Government and shareholders", "Suppliers and distributors"], ans: 1, exp: ["❌ Employee-customer alignment is important for service quality but not the focus of corporate governance mechanisms.<br><span dir='rtl'>❌ توافق الموظف والعميل مهم لجودة الخدمة لكنه ليس محور آليات حوكمة الشركات.</span>", "✅ Correct. Corporate governance mechanisms exist to align the often-conflicting interests of investors (who want returns) and management (who may prioritize their own interests).<br><span dir='rtl'>✅ صح — توجد آليات حوكمة الشركات لمواءمة مصالح المستثمرين (الذين يريدون عوائد) والإدارة (التي قد تُعطي الأولوية لمصالحها الخاصة) التي كثيرًا ما تتعارض.</span>", "❌ Government and shareholder alignment is a regulatory/compliance matter, not the core governance alignment problem.<br><span dir='rtl'>❌ مواءمة الحكومة والمساهمين مسألة تنظيمية/امتثال، وليست مشكلة المواءمة الجوهرية للحوكمة.</span>", "❌ Supply chain relationships are managed through contracts and procurement — not corporate governance mechanisms.<br><span dir='rtl'>❌ علاقات سلسلة التوريد تُدار من خلال العقود والمشتريات — لا آليات حوكمة الشركات.</span>"] },

  // ════════ EXTRA CH1 QUESTIONS ════════
  { ch: "ch1", q: "The Sarbanes-Oxley Act (SOX) of 2002 created which oversight body for public accounting firms?", opts: ["Securities and Exchange Commission (SEC)", "Public Company Accounting Oversight Board (PCAOB)", "Financial Industry Regulatory Authority (FINRA)", "Federal Trade Commission (FTC)"], ans: 1, exp: ["❌ The SEC existed before SOX — SOX expanded its powers but did not create it.<br><span dir='rtl'>❌ SEC كانت موجودة قبل SOX — زاد SOX صلاحياتها لكن لم يُنشئها.</span>", "✅ Correct. SOX (2002) created the PCAOB to oversee audits of public companies and protect investors from fraudulent accounting.<br><span dir='rtl'>✅ صح — أنشأ SOX (2002) مجلس إشراف محاسبة الشركات العامة PCAOB للإشراف على تدقيق الشركات العامة.</span>", "❌ FINRA regulates broker-dealers and was not created by SOX.<br><span dir='rtl'>❌ FINRA تنظّم وسطاء التداول ولم يُنشئها SOX.</span>", "❌ The FTC predates SOX and focuses on consumer protection and competition law.<br><span dir='rtl'>❌ FTC أقدم من SOX وتركز على حماية المستهلك وقانون المنافسة.</span>"] },
  { ch: "ch1", q: "According to the textbook, which statement BEST describes the relationship between business ethics and legal compliance?", opts: ["They are identical — what is legal is always ethical", "Legal compliance is the ceiling of ethical behavior", "Ethical behavior often goes beyond what is legally required", "Business ethics only applies when no laws exist"], ans: 2, exp: ["❌ Legal and ethical are not the same — many actions can be legal but unethical, or ethical but not legally required.<br><span dir='rtl'>❌ القانوني والأخلاقي ليسا نفس الشيء — قد يكون الشيء قانونيًا لكن غير أخلاقي.</span>", "❌ Legal compliance is the FLOOR (minimum), not the ceiling — ethics often demands more.<br><span dir='rtl'>❌ الامتثال القانوني هو الحد الأدنى (الأرضية)، وليس السقف — الأخلاق تتطلب في الغالب أكثر.</span>", "✅ Correct. Ethical behavior often exceeds legal requirements. Law sets the minimum; ethics pushes firms to do more.<br><span dir='rtl'>✅ صح — السلوك الأخلاقي في الغالب يتجاوز المتطلبات القانونية. القانون يضع الحد الأدنى؛ والأخلاق تدفع الشركات لتفعل أكثر.</span>", "❌ Business ethics applies in ALL situations, with or without laws.<br><span dir='rtl'>❌ أخلاقيات الأعمال تنطبق في جميع الحالات، سواء وُجدت قوانين أم لا.</span>"] },
  { ch: "ch1", q: "Dodd-Frank Wall Street Reform and Consumer Protection Act (2010) was primarily a response to which event?", opts: ["The Enron scandal of 2001", "The September 11, 2001 terrorist attacks", "The 2008 global financial crisis", "The WorldCom accounting fraud"], ans: 2, exp: ["❌ The Enron scandal triggered SOX (2002), not Dodd-Frank.<br><span dir='rtl'>❌ فضيحة إنرون أدت إلى SOX (2002)، وليس Dodd-Frank.</span>", "❌ 9/11 led to national security legislation — not financial regulation reform.<br><span dir='rtl'>❌ أحداث 11 سبتمبر أدت إلى تشريعات الأمن القومي، وليس إصلاح التنظيم المالي.</span>", "✅ Correct. Dodd-Frank (2010) was enacted in response to the 2008 financial crisis to reform Wall Street and protect consumers.<br><span dir='rtl'>✅ صح — صدر Dodd-Frank (2010) استجابةً لأزمة 2008 المالية لإصلاح وول ستريت وحماية المستهلكين.</span>", "❌ WorldCom fraud (2002) was another trigger for SOX, not Dodd-Frank.<br><span dir='rtl'>❌ احتيال WorldCom (2002) كان محفزًا آخر لـ SOX، وليس Dodd-Frank.</span>"] },
  { ch: "ch1", q: "Which of the following BEST distinguishes 'principles' from 'values' in business ethics?", opts: ["Principles are broad and general; values are specific rules", "Values are socially enforced ideals; principles are specific boundaries that should not be violated", "Principles apply only to management; values apply to all employees", "Values are written policies; principles are unwritten expectations"], ans: 1, exp: ["❌ It is the OPPOSITE — values are broad and general; principles are specific boundaries.<br><span dir='rtl'>❌ العكس هو الصحيح — القيم عامة وفضفاضة؛ والمبادئ حدود محددة.</span>", "✅ Correct. Values = enduring, broad, socially enforced beliefs. Principles = specific, pervasive behavioral boundaries that should not be crossed.<br><span dir='rtl'>✅ صح — القيم = معتقدات راسخة وعامة تُفرض اجتماعيًا. المبادئ = حدود سلوكية محددة لا ينبغي تجاوزها.</span>", "❌ Both values and principles apply across all levels of the organization.<br><span dir='rtl'>❌ تنطبق القيم والمبادئ على جميع مستويات المنظمة.</span>", "❌ Neither values nor principles are defined by whether they are written or unwritten.<br><span dir='rtl'>❌ لا تُعرَّف القيم أو المبادئ بكونها مكتوبة أو غير مكتوبة.</span>"] },

  // ════════ EXTRA CH2 QUESTIONS ════════
  { ch: "ch2", q: "Carroll's four-part model of CSR lists which responsibility as the FOUNDATION (bottom of the pyramid)?", opts: ["Philanthropic responsibilities", "Ethical responsibilities", "Legal responsibilities", "Economic responsibilities"], ans: 3, exp: ["❌ Philanthropic (charitable) responsibilities are at the TOP of Carroll's pyramid — the highest and most optional layer.<br><span dir='rtl'>❌ المسؤوليات الخيرية (الفلانثروبية) في قمة هرم كارول — الطبقة الأعلى والأكثر اختيارية.</span>", "❌ Ethical responsibilities are the third layer (above legal) — not the foundation.<br><span dir='rtl'>❌ المسؤوليات الأخلاقية هي الطبقة الثالثة (فوق القانونية) — وليست الأساس.</span>", "❌ Legal responsibilities form the second layer — above economic but not the foundation.<br><span dir='rtl'>❌ المسؤوليات القانونية تشكّل الطبقة الثانية — فوق الاقتصادية لكنها ليست الأساس.</span>", "✅ Correct. Economic responsibility is the FOUNDATION of Carroll's CSR pyramid. A company must be profitable first before fulfilling higher responsibilities.<br><span dir='rtl'>✅ صح — المسؤولية الاقتصادية هي أساس هرم كارول للمسؤولية الاجتماعية. يجب أن تكون الشركة مربحة أولًا قبل الوفاء بالمسؤوليات الأعلى.</span>"] },
  { ch: "ch2", q: "Which of the following is considered a PRIMARY stakeholder of a corporation?", opts: ["The news media", "A competitor firm", "A local nonprofit organization", "An employee"], ans: 3, exp: ["❌ News media is a secondary stakeholder — it indirectly affects and is affected by the firm.<br><span dir='rtl'>❌ وسائل الإعلام هي أصحاب مصلحة ثانويون — يؤثرون في الشركة ويتأثرون بها بشكل غير مباشر.</span>", "❌ Competitor firms are secondary stakeholders who interact indirectly with the firm.<br><span dir='rtl'>❌ الشركات المنافسة هي أصحاب مصلحة ثانويون يتفاعلون مع الشركة بشكل غير مباشر.</span>", "❌ Nonprofit organizations are generally secondary stakeholders.<br><span dir='rtl'>❌ المنظمات غير الربحية عمومًا أصحاب مصلحة ثانويون.</span>", "✅ Correct. Employees are PRIMARY stakeholders — they have a direct economic relationship with the firm and are essential to its survival.<br><span dir='rtl'>✅ صح — الموظفون هم أصحاب المصلحة الأساسيون — لديهم علاقة اقتصادية مباشرة مع الشركة وهم ضروريون لبقائها.</span>"] },
  { ch: "ch2", q: "The concept of 'Interlocking Directorate' is PROHIBITED when:", opts: ["A board member serves on the boards of two unrelated companies", "A board member serves on the boards of two direct competitors", "A board member receives stock options as compensation", "A board member has served for more than 10 years"], ans: 1, exp: ["❌ Serving on boards of unrelated companies is legal and common — no prohibition applies.<br><span dir='rtl'>❌ العمل في مجالس إدارة شركات غير مترابطة قانوني وشائع — لا يوجد حظر.</span>", "✅ Correct. Interlocking directorate is ILLEGAL when a board member serves simultaneously on the boards of two COMPETING companies — this creates conflicts of interest and antitrust concerns.<br><span dir='rtl'>✅ صح — الترابط بين مجالس الإدارة غير قانوني عندما يخدم أحد الأعضاء في مجالس إدارة شركتين منافستين في آنٍ واحد.</span>", "❌ Stock option compensation is a governance concern but not what defines illegal interlocking directorate.<br><span dir='rtl'>❌ تعويض خيارات الأسهم مصدر قلق للحوكمة لكنه ليس ما يُعرِّف ترابط مجالس الإدارة غير القانوني.</span>", "❌ Length of board service is not related to the prohibition on interlocking directorates.<br><span dir='rtl'>❌ مدة الخدمة في المجلس لا علاقة لها بحظر ترابط مجالس الإدارة.</span>"] },
  { ch: "ch2", q: "The 'Duty of Loyalty' for board members means they must:", opts: ["Remain loyal to the company's founding principles regardless of market changes", "Put the interests of the corporation above their own personal interests", "Be loyal to the CEO's vision in all board decisions", "Maintain confidentiality about all board discussions"], ans: 1, exp: ["❌ Adhering to founding principles regardless of change describes rigidity, not the duty of loyalty.<br><span dir='rtl'>❌ التمسك بالمبادئ التأسيسية بغض النظر عن التغيير يصف الجمود، وليس واجب الولاء.</span>", "✅ Correct. The Duty of Loyalty requires board members to make decisions in the best interest of the CORPORATION and its stakeholders — not their own personal gain.<br><span dir='rtl'>✅ صح — يستوجب واجب الولاء على أعضاء مجلس الإدارة اتخاذ قرارات في أفضل مصلحة الشركة وأصحاب المصلحة، وليس مصلحتهم الشخصية.</span>", "❌ Loyalty is to the corporation, not to any individual executive including the CEO.<br><span dir='rtl'>❌ الولاء للشركة، وليس لأي مسؤول تنفيذي بما في ذلك الرئيس التنفيذي.</span>", "❌ Confidentiality is an important practice but it is not the definition of the Duty of Loyalty.<br><span dir='rtl'>❌ السرية ممارسة مهمة لكنها ليست تعريف واجب الولاء.</span>"] },
  { ch: "ch2", q: "Which approach to stakeholder relationships FOCUSES on how companies actually make decisions for stakeholders?", opts: ["Normative approach", "Descriptive approach", "Prescriptive approach", "Comparative approach"], ans: 1, exp: ["❌ The normative approach identifies ETHICAL GUIDELINES for how firms SHOULD treat stakeholders — it is ideal-focused.<br><span dir='rtl'>❌ النهج المعياري يُحدد الإرشادات الأخلاقية لكيفية تعامل الشركات مع أصحاب المصلحة — إنه مُوجَّه نحو المثالية.</span>", "✅ Correct. The descriptive approach addresses how decisions ARE ACTUALLY MADE for stakeholder relationships — it observes real behavior.<br><span dir='rtl'>✅ صح — يتناول النهج الوصفي كيفية اتخاذ القرارات الفعلية لعلاقات أصحاب المصلحة — يرصد السلوك الحقيقي.</span>", "❌ 'Prescriptive approach' is not a standard term in stakeholder theory as defined in this course.<br><span dir='rtl'>❌ 'النهج التوجيهي' ليس مصطلحًا معياريًا في نظرية أصحاب المصلحة كما يُعرَّف في هذا المساق.</span>", "❌ 'Comparative approach' is not a standard stakeholder management term in this textbook.<br><span dir='rtl'>❌ 'النهج المقارن' ليس مصطلحًا معياريًا لإدارة أصحاب المصلحة في هذا الكتاب.</span>"] },
  { ch: "ch2", q: "Adam Smith's concept of the 'invisible hand' suggests that:", opts: ["Government regulation is essential for ethical business behavior", "Individuals pursuing self-interest will inadvertently produce benefits for society", "Corporations must prioritize social welfare over profit", "Ethics can only be enforced through legal mechanisms"], ans: 1, exp: ["❌ Adam Smith believed markets, not government regulation, guide ethical business behavior.<br><span dir='rtl'>❌ رأى آدم سميث أن الأسواق، وليس التنظيم الحكومي، توجّه السلوك التجاري الأخلاقي.</span>", "✅ Correct. Smith's 'invisible hand' theory proposes that self-interested individuals, through market competition, inadvertently promote the public good — markets self-regulate.<br><span dir='rtl'>✅ صح — تقترح نظرية 'اليد الخفية' لسميث أن الأفراد الساعين لمصلحتهم الذاتية، من خلال المنافسة السوقية، يعززون الصالح العام دون قصد.</span>", "❌ Smith actually opposed prioritizing social welfare over profit — he believed profit-seeking creates social good naturally.<br><span dir='rtl'>❌ عارض سميث في الواقع إعطاء الأولوية للرفاه الاجتماعي على الربح — اعتقد أن السعي للربح يخلق الخير الاجتماعي بشكل طبيعي.</span>", "❌ Smith relied on market forces, not legal mechanisms, to enforce ethical behavior.<br><span dir='rtl'>❌ اعتمد سميث على قوى السوق، وليس الآليات القانونية، لإنفاذ السلوك الأخلاقي.</span>"] },

  // ════════ EXTRA CH3 QUESTIONS ════════
  { ch: "ch3", q: "The 'Triple Bottom Line' in sustainability refers to measuring a company's performance in which three areas?", opts: ["Profit, People, and Planet", "Environment, Economy, and Equity", "Social, Legal, and Financial performance", "Products, Processes, and Partnerships"], ans: 0, exp: ["✅ Correct. The Triple Bottom Line (TBL) = People (social equity) + Planet (environmental stewardship) + Profit (economic performance).<br><span dir='rtl'>✅ صح — خط القاع الثلاثي = الناس (العدالة الاجتماعية) + الكوكب (الإشراف البيئي) + الربح (الأداء الاقتصادي).</span>", "❌ While related, 'Environment, Economy, and Equity' is not the standard TBL terminology.<br><span dir='rtl'>❌ على الرغم من الصلة، فإن 'البيئة والاقتصاد والعدالة' ليست المصطلحات المعيارية لخط القاع الثلاثي.</span>", "❌ Social, Legal, and Financial performance reflects CSR levels — not the Triple Bottom Line framework.<br><span dir='rtl'>❌ الأداء الاجتماعي والقانوني والمالي يعكس مستويات المسؤولية الاجتماعية، وليس إطار خط القاع الثلاثي.</span>", "❌ Products, Processes, and Partnerships describe operational strategy, not sustainability measurement.<br><span dir='rtl'>❌ المنتجات والعمليات والشراكات تصف الاستراتيجية التشغيلية، وليس قياس الاستدامة.</span>"] },
  { ch: "ch3", q: "How does 'Greenwashing' DIFFER from 'Green Marketing'?", opts: ["Greenwashing is legal; Green Marketing is not regulated", "Greenwashing involves false environmental claims; Green Marketing involves genuine environmental commitment", "Green Marketing uses deceptive advertising; Greenwashing uses real data", "There is no meaningful difference between the two concepts"], ans: 1, exp: ["❌ Both greenwashing and green marketing can be subject to FTC regulation — legality is not the distinguishing factor.<br><span dir='rtl'>❌ يمكن أن يخضع كل من الغسيل الأخضر والتسويق الأخضر للتنظيم — الشرعية ليست العامل المميز.</span>", "✅ Correct. Greenwashing = MISLEADING consumers into thinking a product is more eco-friendly than it is. Green Marketing = GENUINE long-term environmental commitment backed by real action.<br><span dir='rtl'>✅ صح — الغسيل الأخضر = تضليل المستهلكين للاعتقاد بأن المنتج أكثر صداقةً للبيئة مما هو عليه. التسويق الأخضر = التزام بيئي حقيقي طويل الأمد.</span>", "❌ It is the OPPOSITE — Green Marketing uses real data; Greenwashing uses deceptive claims.<br><span dir='rtl'>❌ العكس هو الصحيح — التسويق الأخضر يستخدم بيانات حقيقية؛ الغسيل الأخضر يستخدم ادعاءات مضللة.</span>", "❌ There IS a meaningful difference — one is deceptive, the other is a genuine sustainability strategy.<br><span dir='rtl'>❌ هناك فرق حقيقي ومهم — أحدهما خادع والآخر استراتيجية استدامة حقيقية.</span>"] },
  { ch: "ch3", q: "ISO 14001 is best described as:", opts: ["A U.S. federal law requiring environmental audits", "An international standard for environmental management systems", "A United Nations treaty on greenhouse gas reduction", "A rating system for sustainable building design"], ans: 1, exp: ["❌ ISO 14001 is an international voluntary standard, not a U.S. federal law.<br><span dir='rtl'>❌ ISO 14001 معيار دولي طوعي، وليس قانونًا فيدراليًا أمريكيًا.</span>", "✅ Correct. ISO 14001 is an international standard from the ISO 14000 family that specifies requirements for an effective environmental management system (EMS).<br><span dir='rtl'>✅ صح — ISO 14001 معيار دولي من عائلة ISO 14000 يُحدد متطلبات نظام إدارة بيئية فعّال.</span>", "❌ The Kyoto Protocol is the UN treaty for greenhouse gas reduction, not ISO 14001.<br><span dir='rtl'>❌ بروتوكول كيوتو هو معاهدة الأمم المتحدة لتخفيض غازات الاحتباس الحراري، وليس ISO 14001.</span>", "❌ LEED is the rating system for sustainable building design — not ISO 14001.<br><span dir='rtl'>❌ LEED هو نظام التقييم لتصميم المباني المستدامة، وليس ISO 14001.</span>"] },
  { ch: "ch3", q: "Which renewable energy source is described as the MOST STABLE and consistent because it is not dependent on weather conditions?", opts: ["Solar energy", "Wind energy", "Hydropower", "Geothermal energy"], ans: 3, exp: ["❌ Solar energy depends on sunlight availability — it is intermittent and weather-dependent.<br><span dir='rtl'>❌ الطاقة الشمسية تعتمد على توافر ضوء الشمس — إنها متقطعة وتعتمد على الطقس.</span>", "❌ Wind energy is also intermittent — it depends on wind speed and availability.<br><span dir='rtl'>❌ طاقة الرياح أيضًا متقطعة — تعتمد على سرعة الرياح وتوافرها.</span>", "❌ Hydropower is the LARGEST source but can be affected by drought and seasonal water levels.<br><span dir='rtl'>❌ الطاقة الكهرومائية هي أكبر مصدر لكن يمكن أن تتأثر بالجفاف ومستويات المياه الموسمية.</span>", "✅ Correct. Geothermal energy is the MOST STABLE renewable source because it draws heat from the Earth's core — unaffected by weather, seasons, or time of day.<br><span dir='rtl'>✅ صح — الطاقة الجيوحرارية هي أكثر مصادر الطاقة المتجددة استقرارًا لأنها تستخرج الحرارة من باطن الأرض — غير متأثرة بالطقس أو المواسم.</span>"] },
  { ch: "ch3", q: "The Kyoto Protocol was significant because it:", opts: ["Established the EPA as the primary U.S. environmental regulator", "Was the first international treaty to voluntarily curb greenhouse gas emissions", "Required all nations to achieve carbon neutrality by 2050", "Created the ISO 14000 environmental standards"], ans: 1, exp: ["❌ The EPA was established by the Nixon administration in 1970 — long before the Kyoto Protocol.<br><span dir='rtl'>❌ أُنشئت EPA من قِبَل إدارة نيكسون عام 1970 — قبل بروتوكول كيوتو بوقت طويل.</span>", "✅ Correct. The Kyoto Protocol (1997) was a landmark international treaty where countries VOLUNTARILY committed to reduce national greenhouse gas emissions.<br><span dir='rtl'>✅ صح — كان بروتوكول كيوتو (1997) معاهدة دولية بارزة تعهّدت فيها الدول طوعيًا بتخفيض انبعاثات الغازات الدفيئة الوطنية.</span>", "❌ Carbon neutrality by 2050 is a more recent goal (e.g., Paris Agreement targets) — Kyoto's targets were more modest and shorter-term.<br><span dir='rtl'>❌ الحياد الكربوني بحلول 2050 هدف أحدث — وكانت أهداف كيوتو أكثر تواضعًا وأقصر أجلًا.</span>", "❌ ISO 14000 was developed by the International Organization for Standardization — independent of the Kyoto Protocol.<br><span dir='rtl'>❌ طوّرت ISO 14000 منظمة المعايير الدولية — بشكل مستقل عن بروتوكول كيوتو.</span>"] },
  { ch: "ch3", q: "LEED certification primarily recognizes excellence in which area?", opts: ["Labor practices and employee welfare", "Sustainable and environmentally responsible building design", "Corporate financial transparency", "Supply chain sustainability practices"], ans: 1, exp: ["❌ Labor practices are assessed under social sustainability frameworks, not LEED.<br><span dir='rtl'>❌ ممارسات العمل تُقيَّم ضمن أطر الاستدامة الاجتماعية، وليس LEED.</span>", "✅ Correct. LEED (Leadership in Energy & Environmental Design) is a globally recognized certification for sustainable, energy-efficient, and environmentally responsible building design.<br><span dir='rtl'>✅ صح — LEED (القيادة في الطاقة والتصميم البيئي) شهادة معترف بها عالميًا لتصميم المباني المستدامة وكفاءة الطاقة.</span>", "❌ Financial transparency is addressed through accounting standards and corporate governance — not LEED.<br><span dir='rtl'>❌ الشفافية المالية تُعالَج من خلال معايير المحاسبة وحوكمة الشركات، وليس LEED.</span>", "❌ Supply chain sustainability is a separate ESG concern — LEED specifically focuses on buildings.<br><span dir='rtl'>❌ استدامة سلسلة التوريد مصدر قلق ESG منفصل — يركز LEED تحديدًا على المباني.</span>"] },
  { ch: "ch3", q: "Carbon footprint refers to:", opts: ["The physical area of land damaged by industrial pollution", "The total amount of carbon dioxide and greenhouse gases emitted by an entity's activities", "The reduction in biodiversity caused by carbon emissions", "A government tax on carbon-intensive industries"], ans: 1, exp: ["❌ Physical land damage is related to land pollution and habitat destruction — not carbon footprint.<br><span dir='rtl'>❌ الضرر المادي للأرض يتعلق بتلوث الأرض وتدمير الموائل، وليس البصمة الكربونية.</span>", "✅ Correct. Carbon footprint = the total CO₂ and greenhouse gases emitted directly or indirectly by an individual, organization, product, or event.<br><span dir='rtl'>✅ صح — البصمة الكربونية = إجمالي CO₂ والغازات الدفيئة المنبعثة مباشرةً أو بشكل غير مباشر من فرد أو منظمة أو منتج أو حدث.</span>", "❌ Biodiversity reduction from carbon is a consequence, not the definition of carbon footprint.<br><span dir='rtl'>❌ تقليل التنوع البيولوجي من الكربون نتيجة، وليس تعريف البصمة الكربونية.</span>", "❌ A carbon tax is a policy tool — it is NOT the definition of carbon footprint itself.<br><span dir='rtl'>❌ ضريبة الكربون أداة سياسية — وليست تعريف البصمة الكربونية في حد ذاتها.</span>"] },
  { ch: "ch1", q: "Which of the following is a CON (disadvantage) of business ethics according to critics?", opts: ["It reduces employee loyalty", "It creates competitive advantages", "It eats into revenues, sales, and profitability", "It increases stakeholder trust"], ans: 2, exp: ["❌ Ethical organizations generally see stronger employee loyalty — not reduced loyalty.<br><span dir='rtl'>❌ المنظمات الأخلاقية تشهد ولاءً أقوى من الموظفين عادةً.</span>", "❌ Competitive advantage is a PRO of business ethics, not a con.<br><span dir='rtl'>❌ الميزة التنافسية إيجابية لأخلاقيات الأعمال، وليست سلبية.</span>", "✅ Correct. Critics argue that ethical constraints eat into revenues, sales, and profitability — and do not maximize shareholder benefits.<br><span dir='rtl'>✅ صح — يجادل المنتقدون بأن القيود الأخلاقية تأكل من الإيرادات والمبيعات والربحية ولا تعظّم فوائد المساهمين.</span>", "❌ Increased stakeholder trust is a PRO of business ethics, not a criticism.<br><span dir='rtl'>❌ زيادة ثقة أصحاب المصلحة ميزة لأخلاقيات الأعمال، لا سلبية.</span>"] },
  { ch: "ch1", q: "Studying business ethics helps professionals do all of the following EXCEPT:", opts: ["Identify ethical issues when they arise", "Recognize approaches for resolving ethical issues", "Guarantee that all business decisions will be ethical", "Cope with conflicts between personal values and organizational values"], ans: 2, exp: ["❌ Identifying ethical issues is one of the 4 key reasons to study business ethics.<br><span dir='rtl'>❌ تحديد المشكلات الأخلاقية هو أحد الأسباب الأربعة لدراسة الأخلاقيات.</span>", "❌ Recognizing resolution approaches is another key reason to study business ethics.<br><span dir='rtl'>❌ التعرف على أساليب الحل سبب آخر لدراسة أخلاقيات الأعمال.</span>", "✅ Correct. Studying ethics CANNOT guarantee that all decisions will be ethical — it only provides tools and frameworks for better decision-making.<br><span dir='rtl'>✅ صح — دراسة الأخلاقيات لا تضمن أن تكون جميع القرارات أخلاقية — بل توفر أدوات وأطر لاتخاذ قرارات أفضل.</span>", "❌ Coping with conflicts between personal and organizational values is explicitly one of the 4 reasons.<br><span dir='rtl'>❌ التعامل مع التضارب بين القيم الشخصية والتنظيمية سبب صريح من الأسباب الأربعة.</span>"] },
  { ch: "ch2", q: "The Stakeholder Interaction Model differs from the Normative, Descriptive, and Instrumental approaches because it:", opts: ["Focuses only on how firms should maximize shareholder value", "Explicitly acknowledges dialogue between a firm's internal and external environments", "Measures the financial outcomes of stakeholder decisions", "Prescribes a single set of rules for all stakeholder relationships"], ans: 1, exp: ["❌ Shareholder value maximization is the Shareholder Model of governance, not the Interaction Model.<br><span dir='rtl'>❌ تعظيم قيمة المساهمين هو نموذج المساهمين في الحوكمة، وليس نموذج التفاعل.</span>", "✅ Correct. The Stakeholder Interaction Model explicitly recognizes dialogue and interaction between a firm's internal and external environments — going beyond the other three approaches.<br><span dir='rtl'>✅ صح — نموذج تفاعل أصحاب المصلحة يُقرّ صراحةً بوجود حوار بين البيئة الداخلية والخارجية للشركة.</span>", "❌ Measuring financial outcomes is the focus of the Instrumental approach, not the Interaction Model.<br><span dir='rtl'>❌ قياس النتائج المالية هو تركيز النهج الأداتي، لا نموذج التفاعل.</span>", "❌ The Interaction Model acknowledges variety and dialogue — it does NOT prescribe a single set of rules.<br><span dir='rtl'>❌ نموذج التفاعل يُقرّ بالتنوع والحوار — لا يضع مجموعة واحدة من القواعد.</span>"] },
  { ch: "ch2", q: "Corporate governance establishes fundamental systems and processes for which THREE functions?", opts: ["Planning, budgeting, and staffing", "Marketing, operations, and finance", "Preventing & detecting misconduct, investigating & disciplining, recovery & continuous improvement", "Hiring executives, setting compensation, and filing annual reports"], ans: 2, exp: ["❌ Planning, budgeting, and staffing are general management functions, not specifically corporate governance systems.<br><span dir='rtl'>❌ التخطيط والميزانية والتوظيف وظائف إدارية عامة، وليست أنظمة حوكمة شركات بالتحديد.</span>", "❌ Marketing, operations, and finance are business functions — not the three corporate governance systems.<br><span dir='rtl'>❌ التسويق والعمليات والتمويل وظائف تجارية، وليست الوظائف الثلاث لحوكمة الشركات.</span>", "✅ Correct. Corporate governance establishes systems for: (1) Preventing and detecting misconduct, (2) Investigating and disciplining, (3) Recovery and continuous improvement.<br><span dir='rtl'>✅ صح — تُرسّخ حوكمة الشركات أنظمة لـ: منع المخالفات وكشفها، التحقيق والتأديب، والتعافي والتحسين المستمر.</span>", "❌ These are board-level activities but do not represent the three core governance systems as defined in the textbook.<br><span dir='rtl'>❌ هذه أنشطة على مستوى مجلس الإدارة لكنها لا تمثل الأنظمة الثلاثة الأساسية للحوكمة كما يُعرّفها الكتاب.</span>"] },
  { ch: "ch2", q: "Outside directors on a board of directors are preferred because they:", opts: ["Are paid more than inside directors", "Have a vested interest in the firm's success", "Do not have a vested interest — selected for expertise and diverse perspectives", "Report directly to the CEO"], ans: 2, exp: ["❌ Outside directors may receive compensation but are not chosen based on pay level.<br><span dir='rtl'>❌ قد يحصل المديرون الخارجيون على تعويض لكنهم لا يُختارون بناءً على مستوى الراتب.</span>", "❌ Having a vested interest is a characteristic of INSIDE directors — outside directors are valued precisely because they lack this.<br><span dir='rtl'>❌ وجود مصلحة شخصية صفة المديرين الداخليين — المديرون الخارجيون يُقدَّرون لافتقارهم لذلك.</span>", "✅ Correct. Outside directors do not have a vested interest in the firm — they are selected for their expertise, competence, and ability to bring diverse perspectives to strategic discussions.<br><span dir='rtl'>✅ صح — المديرون الخارجيون لا يملكون مصلحة شخصية — يُختارون بناءً على خبرتهم وكفاءتهم وتنوع وجهات نظرهم.</span>", "❌ Outside directors report to the full board and shareholders — not directly to the CEO.<br><span dir='rtl'>❌ المديرون الخارجيون يُرفعون إلى مجلس الإدارة الكامل والمساهمين، لا إلى الرئيس التنفيذي مباشرةً.</span>"] },

  // ════════ SCENARIO-BASED QUESTIONS ════════
  { ch: "ch1", q: "A pharmaceutical company discovers a side effect in one of its drugs but delays disclosure to avoid a stock price drop. Which ethical principle is MOST directly violated?", opts: ["Duty of care to shareholders only", "Transparency and honesty with stakeholders", "The right of companies to protect trade secrets", "ISO 19600 compliance standards"], ans: 1, exp: ["❌ Duty of care extends to ALL stakeholders including patients — not shareholders only.<br><span dir='rtl'>❌ واجب الرعاية يمتد لجميع أصحاب المصلحة بما فيهم المرضى، وليس المساهمين فقط.</span>", "✅ Correct. Concealing known harm violates the fundamental ethical principle of transparency and honesty — the company has a duty to inform patients, doctors, and regulators.<br><span dir='rtl'>✅ صح — إخفاء الضرر المعروف ينتهك مبدأ الشفافية والصدق — للشركة واجب إعلام المرضى والأطباء والجهات التنظيمية.</span>", "❌ Trade secrets protect proprietary formulas — not the right to hide safety information from patients.<br><span dir='rtl'>❌ الأسرار التجارية تحمي الصيغ الحاصلة على براءة اختراع — وليس حق إخفاء معلومات السلامة عن المرضى.</span>", "❌ While ISO 19600 addresses compliance, the most directly violated principle here is the ethical standard of transparency.<br><span dir='rtl'>❌ رغم أن ISO 19600 يعالج الامتثال، فإن المبدأ الأكثر انتهاكًا هنا هو معيار الشفافية الأخلاقية.</span>"] },
  { ch: "ch1", q: "An employee discovers that their manager is submitting false expense reports. The employee fears retaliation if they report it. This scenario BEST illustrates:", opts: ["A simple accounting error that should be corrected", "An ethical conflict between personal values and organizational pressure", "A legal requirement to report under FCPA", "Normal business behavior with no ethical concern"], ans: 1, exp: ["❌ Knowingly submitting false expense reports is fraud — not a simple accounting error.<br><span dir='rtl'>❌ تقديم تقارير مصروفات مزيفة عن سبق إصرار هو احتيال، وليس خطأً محاسبيًا بسيطًا.</span>", "✅ Correct. This illustrates a classic ethical conflict — the employee's personal values (honesty) clash with organizational pressure (fear of retaliation), which is a core topic in business ethics.<br><span dir='rtl'>✅ صح — يجسّد هذا تعارضًا أخلاقيًا كلاسيكيًا — تتعارض القيم الشخصية (الأمانة) مع الضغط المؤسسي (الخوف من الانتقام).</span>", "❌ FCPA applies to bribery of foreign officials — not internal expense fraud.<br><span dir='rtl'>❌ FCPA يطبق على رشوة المسؤولين الأجانب، وليس على الاحتيال الداخلي في المصروفات.</span>", "❌ Expense fraud is clearly unethical and illegal — it is never 'normal business behavior'.<br><span dir='rtl'>❌ الاحتيال في المصروفات غير أخلاقي وغير قانوني بشكل واضح — فهو ليس 'سلوكًا تجاريًا طبيعيًا' أبدًا.</span>"] },
  { ch: "ch2", q: "A tech company's data breach exposes 10 million customers' personal data. The company waits 3 months before notifying customers. Which stakeholder group is MOST directly harmed first?", opts: ["Shareholders — because stock prices will fall", "Primary stakeholders (customers) — who face immediate identity theft risk", "Secondary stakeholders (media) — who break the story", "Government regulators — who must investigate"], ans: 1, exp: ["❌ While shareholders are affected, the immediate direct harm falls on customers who are at risk right now.<br><span dir='rtl'>❌ رغم تضرر المساهمين، فإن الضرر المباشر الفوري يقع على العملاء المعرضين للخطر الآن.</span>", "✅ Correct. Customers are primary stakeholders — directly affected by the breach. The 3-month delay exposes them to identity theft and fraud while the company fails its primary stakeholder duty.<br><span dir='rtl'>✅ صح — العملاء أصحاب مصلحة أساسيون — متأثرون مباشرةً بالاختراق. التأخير 3 أشهر يعرضهم لسرقة الهوية والاحتيال.</span>", "❌ Media is a secondary stakeholder — they are informers, not the party directly harmed by identity theft.<br><span dir='rtl'>❌ الإعلام أصحاب مصلحة ثانويون — هم مُبلِّغون، وليس الطرف المتضرر مباشرةً من سرقة الهوية.</span>", "❌ Regulators are also secondary stakeholders — they oversee but are not directly harmed by the breach itself.<br><span dir='rtl'>❌ الجهات التنظيمية أيضًا أصحاب مصلحة ثانويون — يشرفون لكنهم لا يتضررون مباشرةً من الاختراق.</span>"] },
  { ch: "ch2", q: "A board of directors votes to approve a merger that benefits the CEO personally (he owns stock in the acquiring company) without disclosing this conflict. This BEST violates:", opts: ["The Duty of Care", "The Duty of Loyalty", "The right to interlocking directorates", "Carroll's economic responsibility"], ans: 1, exp: ["❌ Duty of Care requires informed, prudent decisions — but here the issue is a personal financial conflict, not a lack of diligence.<br><span dir='rtl'>❌ واجب الرعاية يتطلب قرارات مستنيرة وحكيمة — لكن المشكلة هنا تعارض مالي شخصي، وليس انعدام العناية الواجبة.</span>", "✅ Correct. The Duty of Loyalty requires directors to put the corporation's interests above their own. Approving a self-benefiting deal without disclosure is a direct breach of this duty.<br><span dir='rtl'>✅ صح — واجب الولاء يستوجب على المديرين تقديم مصالح الشركة على مصالحهم. الموافقة على صفقة تعود بالنفع الشخصي دون الإفصاح انتهاك مباشر لهذا الواجب.</span>", "❌ Interlocking directorate refers to serving on competing boards — not conflict of interest in a merger.<br><span dir='rtl'>❌ الترابط بين مجالس الإدارة يشير إلى العمل في مجالس شركات منافسة، وليس تعارض المصالح في عملية اندماج.</span>", "❌ Carroll's economic responsibility is about being profitable — not board member fiduciary duties.<br><span dir='rtl'>❌ المسؤولية الاقتصادية لكارول تتعلق بالربحية، وليس بالواجبات الائتمانية لأعضاء مجلس الإدارة.</span>"] },
  { ch: "ch3", q: "A clothing brand advertises its new line as '100% eco-friendly' but uses the same petroleum-based dyes as its regular products, only changing the packaging to green. This is an example of:", opts: ["Effective green marketing strategy", "Greenwashing", "ISO 14001 compliance", "Triple Bottom Line reporting"], ans: 1, exp: ["❌ Effective green marketing requires GENUINE environmental commitment backed by real action — this company has neither.<br><span dir='rtl'>❌ التسويق الأخضر الفعّال يتطلب التزامًا بيئيًا حقيقيًا مدعومًا بإجراءات فعلية — هذه الشركة لا تمتلك أيًا منهما.</span>", "✅ Correct. This is classic greenwashing — making false or misleading environmental claims (eco-friendly label) without actual environmental improvements (still using petroleum dyes).<br><span dir='rtl'>✅ صح — هذا غسيل أخضر كلاسيكي — ادعاءات بيئية مضللة (ملصق صديق للبيئة) دون تحسينات بيئية فعلية (لا يزال يستخدم أصباغ نفطية).</span>", "❌ ISO 14001 requires implementing actual environmental management systems — not just relabeling products.<br><span dir='rtl'>❌ ISO 14001 يتطلب تطبيق أنظمة إدارة بيئية فعلية، وليس مجرد إعادة تسمية المنتجات.</span>", "❌ Triple Bottom Line reporting measures actual People, Planet, and Profit outcomes — not packaging changes.<br><span dir='rtl'>❌ تقارير خط القاع الثلاثي تقيس نتائج الناس والكوكب والربح الفعلية، وليس تغييرات التغليف.</span>"] },
  { ch: "ch3", q: "A city proposes clearing a forest to build a new industrial park that will create 5,000 jobs. Environmentalists argue this violates sustainability principles. The CORE conflict is between:", opts: ["Short-term economic gains vs. long-term environmental sustainability", "Federal law vs. state law on land use", "Primary vs. secondary stakeholders only", "ISO 14000 standards vs. EPA regulations"], ans: 0, exp: ["✅ Correct. This is the classic sustainability tension — immediate economic benefit (jobs, growth) vs. the long-term well-being of the natural environment (deforestation, biodiversity loss).<br><span dir='rtl'>✅ صح — هذا هو التوتر الكلاسيكي للاستدامة — المنفعة الاقتصادية الفورية (وظائف، نمو) مقابل السلامة البيئية طويلة الأمد (إزالة الغابات، فقدان التنوع البيولوجي).</span>", "❌ While land use has legal dimensions, the CORE ethical conflict here is economic vs. environmental sustainability.<br><span dir='rtl'>❌ رغم أن استخدام الأراضي له أبعاد قانونية، فإن التعارض الأخلاقي الجوهري هنا هو الاستدامة الاقتصادية مقابل البيئية.</span>", "❌ Stakeholder classification is relevant but does not define the CORE conflict in this scenario.<br><span dir='rtl'>❌ تصنيف أصحاب المصلحة وثيق الصلة لكنه لا يُحدد التعارض الجوهري في هذا السيناريو.</span>", "❌ The conflict is not about regulatory standards — it is about the ethical trade-off between economic and environmental priorities.<br><span dir='rtl'>❌ التعارض لا يتعلق بالمعايير التنظيمية — بل بالمقايضة الأخلاقية بين الأولويات الاقتصادية والبيئية.</span>"] },
  { ch: "ch1", q: "A company's HR department fires an employee for reporting a safety violation to OSHA. This action MOST directly violates which principle?", opts: ["The FCPA anti-bribery provisions", "Whistleblower protection under Dodd-Frank", "The principle of stakeholder orientation", "The concept of moral dilemma resolution"], ans: 1, exp: ["❌ FCPA deals with foreign bribery — not whistleblower retaliation in the workplace.<br><span dir='rtl'>❌ FCPA يتعامل مع الرشوة الأجنبية، وليس الانتقام من المبلِّغين في مكان العمل.</span>", "✅ Correct. Dodd-Frank and similar legislation explicitly protect employees who report violations from retaliation. Firing a whistleblower is both unethical and illegal under these protections.<br><span dir='rtl'>✅ صح — يحمي Dodd-Frank وتشريعات مماثلة صراحةً الموظفين الذين يُبلِّغون عن الانتهاكات من الانتقام. طرد المُبلِّغ أمر غير أخلاقي وغير قانوني.</span>", "❌ Stakeholder orientation describes how firms engage with all stakeholders — not whistleblower protections specifically.<br><span dir='rtl'>❌ توجه أصحاب المصلحة يصف كيفية تعامل الشركات مع أصحاب المصلحة، وليس حماية المُبلِّغين تحديدًا.</span>", "❌ A moral dilemma involves two undesirable choices — here the answer is clearly to protect the employee, not a dilemma.<br><span dir='rtl'>❌ المعضلة الأخلاقية تنطوي على خيارين غير مرغوب فيهما — هنا الجواب واضح وهو حماية الموظف، وليست معضلة.</span>"] },
  { ch: "ch2", q: "A startup founder holds 60% of shares and uses her voting power to block independent board members who challenge her decisions. Which governance principle is being undermined?", opts: ["The concept of primary stakeholders", "Accountability and independent oversight in corporate governance", "Carroll's philanthropic responsibility", "The Pollution Prevention Act"], ans: 1, exp: ["❌ Primary stakeholders are employees, customers, etc. — this scenario is about board governance structure.<br><span dir='rtl'>❌ أصحاب المصلحة الأساسيون هم الموظفون والعملاء وغيرهم — هذا السيناريو يتعلق بهيكل حوكمة مجلس الإدارة.</span>", "✅ Correct. Corporate governance requires independent oversight and accountability. Blocking independent directors undermines these principles — the board cannot properly oversee management if it's controlled by the founder.<br><span dir='rtl'>✅ صح — تتطلب حوكمة الشركات الرقابة المستقلة والمساءلة. منع المديرين المستقلين يُضعف هذه المبادئ.</span>", "❌ Carroll's philanthropic responsibility refers to charitable giving — not board independence.<br><span dir='rtl'>❌ المسؤولية الخيرية لكارول تشير إلى العمل الخيري، وليس استقلالية مجلس الإدارة.</span>", "❌ The Pollution Prevention Act is an environmental regulation — completely unrelated to board governance.<br><span dir='rtl'>❌ قانون منع التلوث تشريع بيئي — لا علاقة له بحوكمة مجلس الإدارة.</span>"] },
  { ch: "ch3", q: "A manufacturing company installs solar panels, publishes an annual sustainability report, and partners with local communities to reduce waste. This behavior BEST represents:", opts: ["Greenwashing — since it still operates as a manufacturer", "A high-commitment approach to environmental responsibility", "Legal compliance only — required by EPA", "A low-commitment business strategy"], ans: 1, exp: ["❌ Greenwashing involves MISLEADING claims — this company is taking real, documented action across multiple dimensions.<br><span dir='rtl'>❌ الغسيل الأخضر ينطوي على ادعاءات مضللة — هذه الشركة تتخذ إجراءات حقيقية وموثقة عبر أبعاد متعددة.</span>", "✅ Correct. A high-commitment approach involves proactive stakeholder assessment, genuine environmental investment (solar panels), transparent reporting, and community partnerships — all present here.<br><span dir='rtl'>✅ صح — نهج الالتزام العالي ينطوي على تقييم أصحاب المصلحة بشكل استباقي، والاستثمار البيئي الحقيقي، والتقارير الشفافة، والشراكات المجتمعية.</span>", "❌ Publishing sustainability reports and community partnerships go beyond what EPA legally requires — this is voluntary commitment.<br><span dir='rtl'>❌ نشر تقارير الاستدامة والشراكات المجتمعية يتجاوز ما تطلبه EPA قانونًا — هذا التزام طوعي.</span>", "❌ A low-commitment business avoids environmental issues and hopes nothing bad happens — the opposite of what's described.<br><span dir='rtl'>❌ الأعمال منخفضة الالتزام تتجنب القضايا البيئية وتأمل ألا يحدث شيء سيئ — عكس ما هو موصوف.</span>"] },
  { ch: "ch2", q: "A consumer products company surveys customers, employees, and suppliers quarterly to understand their concerns, then adjusts strategy accordingly. This is BEST described as:", opts: ["A one-time stakeholder audit", "A fully developed stakeholder orientation with all three activities", "Meeting minimum legal CSR requirements", "Shareholder model governance"], ans: 1, exp: ["❌ A one-time audit is a snapshot — this company conducts ongoing surveys, showing a continuous orientation.<br><span dir='rtl'>❌ التدقيق لمرة واحدة لقطة فورية — هذه الشركة تجري استطلاعات مستمرة، مما يدل على توجه مستمر.</span>", "✅ Correct. A fully developed stakeholder orientation includes: (1) organization-wide generation of data about stakeholders, (2) distribution throughout the firm, and (3) responsiveness — all three are present here.<br><span dir='rtl'>✅ صح — يشمل توجه أصحاب المصلحة المتطور: توليد بيانات على مستوى المنظمة، توزيعها في الشركة، والاستجابة — الأنشطة الثلاثة موجودة هنا.</span>", "❌ This goes far beyond minimum legal CSR — it is proactive stakeholder engagement across multiple groups.<br><span dir='rtl'>❌ هذا يتجاوز متطلبات المسؤولية الاجتماعية القانونية الدنيا — إنه مشاركة استباقية لأصحاب المصلحة عبر مجموعات متعددة.</span>", "❌ The shareholder model focuses on maximizing investor returns — not surveying multiple stakeholder groups.<br><span dir='rtl'>❌ نموذج المساهمين يركز على تعظيم عوائد المستثمرين، وليس استطلاع مجموعات متعددة من أصحاب المصلحة.</span>"] },

  // ════════ TESTBANK GAP QUESTIONS ════════
  // Chapter 1
  { ch: "ch1", q: "To survive and contribute to society, which of the following is true about a business?", opts: ["It must maintain a perfect ethical record", "It must never break any laws", "It must satisfy only its shareholders", "It must earn a profit"], ans: 3, exp: ["❌ No business can maintain a perfect ethical record — ethics is a continuous process, not a guaranteed outcome.<br><span dir='rtl'>❌ لا يمكن لأي شركة أن تحافظ على سجل أخلاقي مثالي — فالأخلاق عملية مستمرة، وليست نتيجة مضمونة.</span>", "❌ Breaking no laws is impossible in practice — legal environments change and some laws conflict.<br><span dir='rtl'>❌ عدم كسر أي قانون أمر مستحيل عمليًا — البيئات القانونية تتغير وبعض القوانين تتعارض.</span>", "❌ Satisfying only shareholders is Friedman's narrow view — but even he acknowledged profit was the mechanism, not the only goal.<br><span dir='rtl'>❌ إرضاء المساهمين فقط هو وجهة نظر فريدمان الضيقة — لكنه أيضًا أقرّ أن الربح هو الآلية، وليس الهدف الوحيد.</span>", "✅ Correct. To survive and contribute to society, a business must earn a profit. Profitability is the foundation — without it the firm cannot fulfill any other responsibilities.<br><span dir='rtl'>✅ صح — لكي تستمر الشركة وتسهم في المجتمع، يجب أن تحقق ربحًا. الربحية هي الأساس — بدونها لا تستطيع الشركة الوفاء بأي مسؤوليات أخرى.</span>"] },
  { ch: "ch1", q: "TRUE or FALSE: Morals are enduring beliefs and ideals that are socially enforced.", opts: ["True — morals and values are the same concept", "True — morals are defined by society, not the individual", "False — that definition describes VALUES, not morals (morals are personal)", "False — neither morals nor values are socially enforced"], ans: 2, exp: ["❌ Morals and values are NOT the same — morals are personal philosophies; values are socially enforced ideals.<br><span dir='rtl'>❌ الأخلاق والقيم ليست نفس الشيء — الأخلاق فلسفات شخصية؛ والقيم مُثل يفرضها المجتمع.</span>", "❌ Morals are NOT defined by society — they relate to the INDIVIDUAL alone. Society defines values, not morals.<br><span dir='rtl'>❌ الأخلاق لا يُعرِّفها المجتمع — بل تتعلق بالفرد وحده. المجتمع يُعرِّف القيم، وليس الأخلاق.</span>", "✅ Correct. This is a classic exam trap. VALUES = enduring, socially enforced ideals. MORALS = personal philosophies about right and wrong that relate to you alone.<br><span dir='rtl'>✅ صح — هذا فخ اختبار كلاسيكي. القيم = مُثل راسخة يفرضها المجتمع. الأخلاق = فلسفات شخصية حول الصواب والخطأ تتعلق بك وحدك.</span>", "❌ Values ARE socially enforced — that is precisely what distinguishes them from morals.<br><span dir='rtl'>❌ القيم يفرضها المجتمع بالفعل — وهذا بالضبط ما يميزها عن الأخلاق.</span>"] },
  { ch: "ch1", q: "TRUE or FALSE: A majority of consumers believe it is a company's responsibility to have a moral or ethical viewpoint.", opts: ["False — most consumers only care about price and quality", "False — consumers believe ethics is a personal matter, not a business concern", "True — but only for large corporations, not small businesses", "True — most consumers believe companies have a responsibility to be ethical"], ans: 3, exp: ["❌ Research consistently shows consumers DO care about ethics — it influences purchasing decisions and brand loyalty.<br><span dir='rtl'>❌ تُظهر الأبحاث باستمرار أن المستهلكين يهتمون بالأخلاق — وهذا يؤثر في قرارات الشراء والولاء للعلامة التجارية.</span>", "❌ Consumers increasingly view business ethics as their concern — they hold companies accountable through purchasing choices.<br><span dir='rtl'>❌ يرى المستهلكون بشكل متزايد أن أخلاقيات الأعمال تخصهم — ويُحاسبون الشركات من خلال خيارات الشراء.</span>", "❌ Consumer expectations for ethical conduct apply to all companies regardless of size.<br><span dir='rtl'>❌ تتوقعات المستهلكين للسلوك الأخلاقي تنطبق على جميع الشركات بغض النظر عن حجمها.</span>", "✅ Correct. The majority of consumers believe businesses have a moral and ethical responsibility — this is why ethics is a strategic business concern, not just a legal one.<br><span dir='rtl'>✅ صح — يعتقد غالبية المستهلكين أن للشركات مسؤولية أخلاقية — ولهذا تُعدّ الأخلاقيات مصدر قلق استراتيجي تجاري، وليست قانونيًا فحسب.</span>"] },

  // Chapter 2
  { ch: "ch2", q: "A broader view of social responsibility is one that _______.", opts: ["Focuses solely on maximizing shareholder returns", "Complies only with legal requirements to avoid penalties", "Prioritizes short-term profits over all other considerations", "Considers the long-term welfare of society as a whole"], ans: 3, exp: ["❌ Focusing solely on shareholder returns is the NARROW Friedman view — the broader view extends to all stakeholders and society.<br><span dir='rtl'>❌ التركيز فقط على عوائد المساهمين هو النظرة الضيقة لفريدمان — أما النظرة الأوسع فتمتد لجميع أصحاب المصلحة والمجتمع.</span>", "❌ Legal compliance is the minimum — the broader view of CSR goes well beyond what is legally required.<br><span dir='rtl'>❌ الامتثال القانوني هو الحد الأدنى — النظرة الأوسع للمسؤولية الاجتماعية تتجاوز ما يُطلب قانونًا بكثير.</span>", "❌ Short-term profits contradict the broader view — which emphasizes long-term thinking and societal impact.<br><span dir='rtl'>❌ الأرباح قصيرة الأمد تتعارض مع النظرة الأوسع — التي تُركّز على التفكير طويل الأمد والتأثير المجتمعي.</span>", "✅ Correct. The broader view of social responsibility extends beyond economic and legal obligations to consider the long-term welfare of society — including environmental, ethical, and philanthropic concerns.<br><span dir='rtl'>✅ صح — تمتد النظرة الأوسع للمسؤولية الاجتماعية إلى ما هو أبعد من الالتزامات الاقتصادية والقانونية لتشمل الرفاه طويل الأمد للمجتمع.</span>"] },
  { ch: "ch2", q: "TRUE or FALSE: Evidence suggests that caring about the well-being of stakeholders leads to increased profits.", opts: ["False — ethics always reduces profitability", "False — stakeholder care and profits are completely unrelated", "True — but only in the short term", "True — research shows ethical stakeholder care correlates with higher long-term profits"], ans: 3, exp: ["❌ This is a common misconception — ethics does NOT always reduce profitability. Many studies show the opposite.<br><span dir='rtl'>❌ هذا مفهوم خاطئ شائع — الأخلاقيات لا تُقلل الربحية دائمًا. كثير من الدراسات تُظهر العكس.</span>", "❌ Research shows a clear positive relationship between stakeholder care and financial performance.<br><span dir='rtl'>❌ تُظهر الأبحاث علاقة إيجابية واضحة بين الاهتمام بأصحاب المصلحة والأداء المالي.</span>", "❌ The benefits are long-term, not just short-term — trust, reputation, and loyalty build sustained profitability.<br><span dir='rtl'>❌ الفوائد طويلة الأمد، وليست قصيرة فقط — الثقة والسمعة والولاء تبني ربحية مستدامة.</span>", "✅ Correct. Evidence consistently suggests that firms caring about stakeholder well-being — employees, customers, communities — tend to outperform those that don't over the long term.<br><span dir='rtl'>✅ صح — تُشير الأدلة باستمرار إلى أن الشركات التي تهتم برفاه أصحاب المصلحة تميل إلى التفوق على تلك التي لا تهتم على المدى البعيد.</span>"] },
  { ch: "ch2", q: "TRUE or FALSE: Government regulatory agencies are considered a secondary stakeholder group.", opts: ["True — governments do not transact directly with the firm", "True — governments are less important than customers and employees", "False — government agencies are PRIMARY stakeholders because they have direct regulatory power over the firm's survival", "False — governments are neither primary nor secondary — they are external forces only"], ans: 2, exp: ["❌ Government agencies DO transact directly with firms through regulations, inspections, licenses, and enforcement actions.<br><span dir='rtl'>❌ الوكالات الحكومية تتعامل مباشرةً مع الشركات من خلال اللوائح والتفتيش والتراخيص وإجراءات التنفيذ.</span>", "❌ Importance is not the classification criterion — the criterion is whether the group is essential to the firm's survival.<br><span dir='rtl'>❌ الأهمية ليست معيار التصنيف — المعيار هو ما إذا كانت المجموعة ضرورية لبقاء الشركة.</span>", "✅ Correct. Government regulatory agencies are PRIMARY stakeholders — they can directly affect a firm's ability to operate through regulations, licenses, and enforcement. A firm cannot survive without government compliance.<br><span dir='rtl'>✅ صح — الوكالات التنظيمية الحكومية أصحاب مصلحة أساسيون — يمكنهم التأثير مباشرةً على قدرة الشركة على العمل من خلال اللوائح والتراخيص والتنفيذ.</span>", "❌ Governments are clearly classified as stakeholders — specifically primary ones due to their regulatory power.<br><span dir='rtl'>❌ يُصنَّف الحكومات بوضوح ضمن أصحاب المصلحة — وتحديدًا الأساسيين بسبب سلطتهم التنظيمية.</span>"] },
  { ch: "ch2", q: "TRUE or FALSE: A board of directors' fiduciary duty refers to an assumed position of trust and confidence that entails certain responsibilities.", opts: ["False — fiduciary duty only applies to the CEO, not the board", "False — fiduciary duty is a legal term unrelated to trust or confidence", "False — directors have no formal duties beyond attending meetings", "True — fiduciary duty is exactly a position of trust and confidence with specific legal and ethical responsibilities"], ans: 3, exp: ["❌ Fiduciary duty applies to ALL directors and officers — not just the CEO.<br><span dir='rtl'>❌ ينطبق الواجب الائتماني على جميع المديرين والمسؤولين، وليس الرئيس التنفيذي فقط.</span>", "❌ Fiduciary duty is fundamentally based on trust and confidence — it is both a legal and ethical concept.<br><span dir='rtl'>❌ الواجب الائتماني مبني أساسًا على الثقة والتفاهم — وهو مفهوم قانوني وأخلاقي في آنٍ واحد.</span>", "❌ Directors have extensive formal duties including duty of care, duty of loyalty, and oversight responsibilities.<br><span dir='rtl'>❌ يتمتع المديرون بواجبات رسمية واسعة تشمل واجب الرعاية وواجب الولاء ومسؤوليات الرقابة.</span>", "✅ Correct. Fiduciary duty is defined as an assumed position of trust and confidence that entails certain responsibilities — directors must act in the best interests of the corporation and its stakeholders.<br><span dir='rtl'>✅ صح — يُعرَّف الواجب الائتماني بأنه موقع مفترض من الثقة والتفاهم ينطوي على مسؤوليات معينة — يجب على المديرين التصرف في أفضل مصلحة الشركة وأصحاب المصلحة.</span>"] },

  // Chapter 3
  { ch: "ch3", q: "Which of the following BEST completes the definition of sustainability: 'the long-term well-being of the natural environment, including mutually beneficial interactions among nature and _______.'", opts: ["governments and international organizations only", "shareholders and corporate executives", "individuals, organizations, and business strategies", "environmental groups and nonprofit agencies"], ans: 2, exp: ["❌ The textbook definition is broader than governments — it includes individuals, organizations, and business strategies.<br><span dir='rtl'>❌ تعريف الكتاب أوسع من الحكومات — يشمل الأفراد والمنظمات واستراتيجيات الأعمال.</span>", "❌ Shareholders and executives are too narrow — sustainability encompasses all individuals and organizations, not just corporate actors.<br><span dir='rtl'>❌ المساهمون والمديرون التنفيذيون نطاق ضيق جدًا — تشمل الاستدامة جميع الأفراد والمنظمات، وليس الأطراف المؤسسية فحسب.</span>", "✅ Correct. The full textbook definition: sustainability = the long-term well-being of the natural environment, including mutually beneficial interactions among nature AND individuals, organizations, and business strategies.<br><span dir='rtl'>✅ صح — التعريف الكامل في الكتاب: الاستدامة = الرفاه طويل الأمد للبيئة الطبيعية، بما يشمل التفاعلات المفيدة للطرفين بين الطبيعة والأفراد والمنظمات واستراتيجيات الأعمال.</span>", "❌ Environmental groups are stakeholders in sustainability but are not part of the official textbook definition.<br><span dir='rtl'>❌ المجموعات البيئية أصحاب مصلحة في الاستدامة لكنهم ليسوا جزءًا من التعريف الرسمي في الكتاب.</span>"] },
  { ch: "ch3", q: "TRUE or FALSE: Because ethanol is created from corn in the United States, there are concerns that increased use of ethanol will decrease food supplies.", opts: ["False — ethanol uses waste corn, not food corn", "False — the U.S. has a corn surplus so food supply is unaffected", "False — ethanol is not made from corn in the U.S.", "True — diverting corn to ethanol production raises concerns about reduced food supply"], ans: 3, exp: ["❌ Ethanol in the U.S. is primarily made from food-grade corn — not waste corn. The distinction matters for food supply.<br><span dir='rtl'>❌ يُصنع الإيثانول في الولايات المتحدة أساسًا من الذرة الصالحة للأكل، وليس ذرة النفايات. هذا الفرق مهم لإمدادات الغذاء.</span>", "❌ While the U.S. produces significant corn, diverting large amounts to fuel production has driven up food prices globally.<br><span dir='rtl'>❌ رغم أن الولايات المتحدة تنتج كميات كبيرة من الذرة، فإن تحويل كميات كبيرة منها لإنتاج الوقود رفع أسعار الغذاء عالميًا.</span>", "❌ The U.S. is the world's largest ethanol producer and uses corn as its primary feedstock.<br><span dir='rtl'>❌ الولايات المتحدة أكبر منتج للإيثانول في العالم وتستخدم الذرة كمادة خام رئيسية.</span>", "✅ Correct. Ethanol in the U.S. is made from corn. Converting corn to fuel creates a direct competition with food supply — this is a major criticism of corn-based ethanol and why it is controversial.<br><span dir='rtl'>✅ صح — يُصنع الإيثانول في الولايات المتحدة من الذرة. تحويل الذرة إلى وقود يخلق منافسة مباشرة مع إمدادات الغذاء — وهذا انتقاد رئيسي للإيثانول القائم على الذرة.</span>"] },
  { ch: "ch3", q: "TRUE or FALSE: Greenwashing is a strategy involving stakeholder assessment to create meaningful long-term relationships with customers while maintaining the natural environment.", opts: ["True — greenwashing and green marketing achieve the same outcomes", "True — greenwashing involves genuine environmental commitment", "False — that definition describes GREEN MARKETING, not greenwashing (greenwashing is deceptive)", "False — neither greenwashing nor green marketing involves stakeholder assessment"], ans: 2, exp: ["❌ Greenwashing and green marketing do NOT achieve the same outcomes — one is deceptive, the other is genuine.<br><span dir='rtl'>❌ الغسيل الأخضر والتسويق الأخضر لا يحققان نفس النتائج — أحدهما مضلل والآخر حقيقي.</span>", "❌ Greenwashing involves FAKE environmental claims — it is the opposite of genuine commitment.<br><span dir='rtl'>❌ الغسيل الأخضر ينطوي على ادعاءات بيئية زائفة — وهو عكس الالتزام الحقيقي.</span>", "✅ Correct. Classic exam trap — the statement given is the DEFINITION OF GREEN MARKETING, not greenwashing. Greenwashing = misleading consumers into thinking products are more eco-friendly than they are.<br><span dir='rtl'>✅ صح — فخ اختبار كلاسيكي — العبارة المُعطاة هي تعريف التسويق الأخضر، وليس الغسيل الأخضر. الغسيل الأخضر = تضليل المستهلكين للاعتقاد بأن المنتجات أكثر صداقةً للبيئة مما هي عليه.</span>", "❌ Green marketing DOES involve stakeholder assessment — that's what makes it different from greenwashing.<br><span dir='rtl'>❌ التسويق الأخضر يتضمن تقييم أصحاب المصلحة — وهذا ما يميزه عن الغسيل الأخضر.</span>"] },
  { ch: "ch3", q: "TRUE or FALSE: Green Globes and LEED are certification programs that recognize buildings as 'green' or sustainable.", opts: ["False — only LEED certifies green buildings; Green Globes is an unrelated program", "False — both are government agencies, not certification programs", "False — Green Globes certifies products, not buildings", "True — both Green Globes and LEED are recognized green building certification systems"], ans: 3, exp: ["❌ Green Globes is also a legitimate green building certification system — LEED is not the only one.<br><span dir='rtl'>❌ Green Globes أيضًا نظام معتمد لشهادة المباني الخضراء — وليس LEED الوحيد.</span>", "❌ Both are private certification programs, not government agencies — LEED is run by USGBC, Green Globes by GBI.<br><span dir='rtl'>❌ كلاهما برامج شهادات خاصة، وليست وكالات حكومية — تُدير USGBC نظام LEED وتُدير GBI نظام Green Globes.</span>", "❌ Green Globes certifies BUILDINGS for sustainability — not consumer products.<br><span dir='rtl'>❌ يُصادق Green Globes على المباني للاستدامة، وليس على المنتجات الاستهلاكية.</span>", "✅ Correct. Both Green Globes and LEED (Leadership in Energy and Environmental Design) are recognized certification programs for sustainable, energy-efficient building design and construction.<br><span dir='rtl'>✅ صح — كلٌّ من Green Globes وLEED برنامجان معتمدان لتصميم المباني المستدامة وكفاءة الطاقة والبناء المسؤول بيئيًا.</span>"] },
  { ch: "ch3", q: "TRUE or FALSE: Acid rain, waste management, urban sprawl, and deforestation are all environmental issues related to LAND.", opts: ["True — all four are land-based environmental problems", "True — acid rain falls on land so it is a land issue", "False — acid rain is an AIR pollution issue, not a land issue", "False — none of these are land issues; they are all water issues"], ans: 2, exp: ["❌ Acid rain is NOT a land issue — it originates from air pollutants (sulfur dioxide and nitrogen oxides) and is classified under air pollution.<br><span dir='rtl'>❌ المطر الحمضي ليس قضية أرض — ينشأ من ملوثات جوية (ثاني أكسيد الكبريت وأكاسيد النيتروجين) ويُصنَّف ضمن تلوث الهواء.</span>", "❌ Where rain falls does not determine its classification — acid rain is classified by its SOURCE (air pollutants), not where it lands.<br><span dir='rtl'>❌ مكان سقوط المطر لا يُحدد تصنيفه — يُصنَّف المطر الحمضي بناءً على مصدره (ملوثات جوية)، وليس أين يسقط.</span>", "✅ Correct. Classic exam trap. Waste management, urban sprawl, and deforestation are LAND issues — but acid rain is an AIR pollution issue caused by sulfur dioxides and nitrous oxides in the atmosphere.<br><span dir='rtl'>✅ صح — فخ اختبار كلاسيكي. إدارة النفايات والتمدد العمراني وإزالة الغابات قضايا أرض — لكن المطر الحمضي قضية تلوث هواء ناجمة عن ثاني أكسيد الكبريت وأكاسيد النيتروجين في الغلاف الجوي.</span>", "❌ Waste management, urban sprawl, and deforestation are clearly land issues — only acid rain is misclassified in the statement.<br><span dir='rtl'>❌ إدارة النفايات والتمدد العمراني وإزالة الغابات قضايا أرض بوضوح — المطر الحمضي فقط هو المُصنَّف بشكل خاطئ في العبارة.</span>"] },
  { ch: "ch3", q: "Recycling is best defined as which of the following?", opts: ["Reducing the total amount of waste produced by consumers", "The reprocessing of materials — especially steel, aluminum, paper, glass, rubber, and some plastics — for reuse", "Donating used goods to charity organizations for redistribution", "Burning waste materials to generate energy"], ans: 1, exp: ["❌ Reducing waste production is 'waste reduction' or 'source reduction' — a different concept from recycling.<br><span dir='rtl'>❌ تقليل إنتاج النفايات هو 'تقليل النفايات' — مفهوم مختلف عن إعادة التدوير.</span>", "✅ Correct. Recycling = the reprocessing of materials — especially steel, aluminum, paper, glass, rubber, and some plastics — into new products for reuse. This is the precise textbook definition.<br><span dir='rtl'>✅ صح — إعادة التدوير = إعادة معالجة المواد — خاصةً الصلب والألومنيوم والورق والزجاج والمطاط وبعض البلاستيك — في منتجات جديدة لإعادة الاستخدام.</span>", "❌ Donating goods is 'reuse' or 'charitable giving' — not recycling. Recycling involves reprocessing the material itself.<br><span dir='rtl'>❌ التبرع بالسلع هو 'إعادة الاستخدام' أو 'العطاء الخيري' — وليس إعادة التدوير. إعادة التدوير تنطوي على إعادة معالجة المادة نفسها.</span>", "❌ Burning waste for energy is 'waste-to-energy' or 'incineration' — a completely different process from recycling.<br><span dir='rtl'>❌ حرق النفايات لتوليد الطاقة هو 'النفايات إلى طاقة' — عملية مختلفة تمامًا عن إعادة التدوير.</span>"] },
  { ch: "ch3", q: "Which of the following is an example of sustainability?", opts: ["Donating money to a local school", "Building new roads to reduce traffic congestion", "Recycling", "Increasing employee salaries"], ans: 2, exp: ["❌ Donating to schools is philanthropic (Carroll's 4th level) — a good act, but not specifically an example of environmental sustainability.<br><span dir='rtl'>❌ التبرع للمدارس خيري (المستوى الرابع في هرم كارول) — عمل طيب، لكنه ليس مثالًا محددًا على الاستدامة البيئية.</span>", "❌ Building roads may reduce emissions locally but often induces more driving — not a clear sustainability example and may worsen environmental impact overall.<br><span dir='rtl'>❌ بناء الطرق قد يُقلل الانبعاثات محليًا لكنه كثيرًا ما يُحفّز المزيد من القيادة — وليس مثالًا واضحًا على الاستدامة.</span>", "✅ Correct. Recycling is one of the country's greatest sustainability success stories — it directly reduces resource extraction, energy use, and waste, supporting long-term environmental well-being.<br><span dir='rtl'>✅ صح — إعادة التدوير من أبرز قصص نجاح الاستدامة — تُقلل مباشرةً من استخراج الموارد واستهلاك الطاقة والنفايات، مما يدعم الرفاه البيئي طويل الأمد.</span>", "❌ Increasing salaries is an economic/social responsibility — not specifically an environmental sustainability practice.<br><span dir='rtl'>❌ رفع الرواتب مسؤولية اقتصادية/اجتماعية — وليست ممارسة استدامة بيئية تحديدًا.</span>"] }

,
  // ── Added from Test Bank PDF (MCQ + T/F) ──
  { ch: "ch1", q: "Which of the following is one of the rights spelled out by John F. Kennedy in his Consumers' Bill of Rights?", opts: ["The right to consumerism", "The right to safety", "The right to be protected", "The right to be ethical", "The right to be heard"], ans: 1, exp: ["❌ Incorrect. The correct answer is: The right to safety", "✅ Correct. The right to safety", "❌ Incorrect. The correct answer is: The right to safety", "❌ Incorrect. The correct answer is: The right to safety", "❌ Incorrect. The correct answer is: The right to safety"] },
  { ch: "ch1", q: "Which of the following was developed in the 1980s to guide corporate support for ethical conduct by establishing a set of principles?", opts: ["Federal Sentencing Guidelines for Organizations", "Defense Industry Initiative on Business Ethics and Conduct", "Foreign Corrupt Practices Act", "U.S. Sentencing Commission", "The Southern Common Market"], ans: 1, exp: ["❌ Incorrect. The correct answer is: Defense Industry Initiative on Business Ethics and Conduct", "✅ Correct. Defense Industry Initiative on Business Ethics and Conduct", "❌ Incorrect. The correct answer is: Defense Industry Initiative on Business Ethics and Conduct", "❌ Incorrect. The correct answer is: Defense Industry Initiative on Business Ethics and Conduct", "❌ Incorrect. The correct answer is: Defense Industry Initiative on Business Ethics and Conduct"] },
  { ch: "ch1", q: "President Obama's administration focused on which of these major ethical issues?", opts: ["Decreasing environmental legislation", "Deregulation", "Tax decreases", "Incentives to oil companies", "Healthcare and consumer protection"], ans: 4, exp: ["❌ Incorrect. The correct answer is: Healthcare and consumer protection", "❌ Incorrect. The correct answer is: Healthcare and consumer protection", "❌ Incorrect. The correct answer is: Healthcare and consumer protection", "❌ Incorrect. The correct answer is: Healthcare and consumer protection", "✅ Correct. Healthcare and consumer protection"] },
  { ch: "ch1", q: "Which of the following statements about business ethics is true?", opts: ["A firm that has ethical management will succeed financially.", "Codes of ethics should cover every business ethics issue.", "Business ethics focuses more on laws than on values.", "Individuals apply the same ethical rules in business as they do at home.", "Conflict or trade-offs do not exist between profits and business ethics."], ans: 4, exp: ["❌ Incorrect. The correct answer is: Conflict or trade-offs do not exist between profits and busi", "❌ Incorrect. The correct answer is: Conflict or trade-offs do not exist between profits and busi", "❌ Incorrect. The correct answer is: Conflict or trade-offs do not exist between profits and busi", "❌ Incorrect. The correct answer is: Conflict or trade-offs do not exist between profits and busi", "✅ Correct. Conflict or trade-offs do not exist between profits and business ethics."] },
  { ch: "ch1", q: "Because of Sarbanes-Oxley, what must publicly traded companies develop in order to assist in maintaining transparency in financial reporting?", opts: ["Ethics officers", "Ethics programs", "Codes of ethics", "Legal counsel", "Accountants"], ans: 2, exp: ["❌ A. Ethics officers", "❌ B. Ethics programs", "✅ C. Codes of ethics — Correct.", "❌ D. Legal counsel", "❌ E. Accountants"] },
  { ch: "ch1", q: "Which of the following statements about the Dodd-Frank Wall Street Reform and Consumer Protection Act is true?", opts: ["It was very popular among Wall Street bankers.", "It represented modest reform to the finance industry.", "It came out of theological discussions in the 1920s.", "It was designed to make the financial services industry more responsible.", "It made it mandatory for public corporations to hire ethics officers."], ans: 3, exp: ["❌ Incorrect. The correct answer is: It was designed to make the financial services industry more", "❌ Incorrect. The correct answer is: It was designed to make the financial services industry more", "❌ Incorrect. The correct answer is: It was designed to make the financial services industry more", "✅ Correct. It was designed to make the financial services industry more responsible.", "❌ Incorrect. The correct answer is: It was designed to make the financial services industry more"] },
  { ch: "ch1", q: "The term that comprises organizational principles, values, and norms that may originate from individuals, organizational statements, or from the legal system that primarily guides individual and group behavior in business is defined as _______.", opts: ["stakeholder orientation", "values", "principles", "business ethics", "integrity management"], ans: 3, exp: ["❌ Incorrect. The correct answer is: business ethics", "❌ Incorrect. The correct answer is: business ethics", "❌ Incorrect. The correct answer is: business ethics", "✅ Correct. business ethics", "❌ Incorrect. The correct answer is: business ethics"] },
  { ch: "ch1", q: "Which of the following concepts refers to a person's personal philosophy about what is right or wrong?", opts: ["Philosophy", "Values", "Principles", "Integrity", "Morals"], ans: 4, exp: ["❌ Incorrect. The correct answer is: Morals", "❌ Incorrect. The correct answer is: Morals", "❌ Incorrect. The correct answer is: Morals", "❌ Incorrect. The correct answer is: Morals", "✅ Correct. Morals"] },
  { ch: "ch1", q: "A situation where a person is faced with multiple choices, all of which are undesirable as defined by that person, is known as a(n) _______.", opts: ["value dilemma", "integrity management", "philosophical dilemma", "legal dilemma", "moral dilemma"], ans: 4, exp: ["❌ Incorrect. The correct answer is: moral dilemma", "❌ Incorrect. The correct answer is: moral dilemma", "❌ Incorrect. The correct answer is: moral dilemma", "❌ Incorrect. The correct answer is: moral dilemma", "✅ Correct. moral dilemma"] },
  { ch: "ch1", q: "Every organization has the potential for unethical behavior, even if it is not a business.", opts: ["True", "False"], ans: 0, exp: ["✅ Correct. True", "❌ Incorrect. The correct answer is: True"] },
  { ch: "ch1", q: "Morals are enduring beliefs and ideals that are socially enforced.", opts: ["True", "False"], ans: 1, exp: ["❌ Incorrect. The correct answer is: False", "✅ Correct. False"] },
  { ch: "ch1", q: "The Consumers' Bill of Rights developed by John F. Kennedy maintains that consumers have the right to safety, the right to be heard, the right to free speech, and the right to choose.", opts: ["True", "False"], ans: 1, exp: ["❌ Incorrect. The correct answer is: False", "✅ Correct. False"] },
  { ch: "ch1", q: "A majority of consumers believe it is a company's responsibility to have a moral or ethical viewpoint.", opts: ["True", "False"], ans: 0, exp: ["✅ Correct. True", "❌ Incorrect. The correct answer is: True"] },
  { ch: "ch2", q: "Which of the following groups is defined as one that does not typically engage in transactions with a company and is not affected by its actions?", opts: ["Employees", "Secondary stakeholders", "Primary stakeholders", "Investors", "Customers"], ans: 1, exp: ["❌ Incorrect. The correct answer is: Secondary stakeholders", "✅ Correct. Secondary stakeholders", "❌ Incorrect. The correct answer is: Secondary stakeholders", "❌ Incorrect. The correct answer is: Secondary stakeholders", "❌ Incorrect. The correct answer is: Secondary stakeholders"] },
  { ch: "ch2", q: "A firm that recognizes other stakeholders beyond investors, employees, and suppliers, and explicitly acknowledges that business must attend to the bottom line?", opts: ["A stakeholder model of socially responsible corporate governance", "A stakeholder bias", "A code of ethics", "A stakeholder interaction model", "A corporate interface model"], ans: 3, exp: ["❌ Incorrect. The correct answer is: A stakeholder interaction model", "❌ Incorrect. The correct answer is: A stakeholder interaction model", "❌ Incorrect. The correct answer is: A stakeholder interaction model", "✅ Correct. A stakeholder interaction model", "❌ Incorrect. The correct answer is: A stakeholder interaction model"] },
  { ch: "ch2", q: "When unethical acts are discovered in a firm, which of the following is true in most instances?", opts: ["They are caused by unwilling participants.", "The cause is due to external stakeholders.", "The perpetrators are caught and prosecuted.", "Their acceptance and perpetuation were facilitated by cooperation or complicity.", "The cause of the unethical conduct is a corrupt board of directors."], ans: 3, exp: ["❌ Incorrect. The correct answer is: Their acceptance and perpetuation were facilitated by cooper", "❌ Incorrect. The correct answer is: Their acceptance and perpetuation were facilitated by cooper", "❌ Incorrect. The correct answer is: Their acceptance and perpetuation were facilitated by cooper", "✅ Correct. Their acceptance and perpetuation were facilitated by cooperation or complicity.", "❌ Incorrect. The correct answer is: Their acceptance and perpetuation were facilitated by cooper"] },
  { ch: "ch2", q: "Which of the following statements accurately describes the normative approach?", opts: ["It focuses on the firm's behavior and usually addresses how decisions and strategies are made for stakeholder", "It describes what happens if firms behave in a particular way.", "It is the degree to which a firm understands and addresses stakeholder demands.", "It describes reciprocal relationships between the firm and a host of stakeholders.", "It identifies ethical guidelines that dictate how firms should treat stakeholders."], ans: 4, exp: ["❌ Incorrect. The correct answer is: It identifies ethical guidelines that dictate how firms shou", "❌ Incorrect. The correct answer is: It identifies ethical guidelines that dictate how firms shou", "❌ Incorrect. The correct answer is: It identifies ethical guidelines that dictate how firms shou", "❌ Incorrect. The correct answer is: It identifies ethical guidelines that dictate how firms shou", "✅ Correct. It identifies ethical guidelines that dictate how firms should treat stakeholder"] },
  { ch: "ch2", q: "The idea of the invisible hand, which is a fundamental concept in free market capitalism, was developed by which of the following?", opts: ["Adam Smith", "John Maynard Keynes", "Janet Yellen", "Noel Biderman", "Milton Friedman"], ans: 0, exp: ["✅ Correct. Adam Smith", "❌ Incorrect. The correct answer is: Adam Smith", "❌ Incorrect. The correct answer is: Adam Smith", "❌ Incorrect. The correct answer is: Adam Smith", "❌ Incorrect. The correct answer is: Adam Smith"] },
  { ch: "ch2", q: "The idea that because people live in a community, social rules should benefit the community is known as _______.", opts: ["the stakeholder interaction model", "consumer protection", "the common good", "sustainability", "corporate governance"], ans: 2, exp: ["❌ Incorrect. The correct answer is: the common good", "❌ Incorrect. The correct answer is: the common good", "✅ Correct. the common good", "❌ Incorrect. The correct answer is: the common good", "❌ Incorrect. The correct answer is: the common good"] },
  { ch: "ch2", q: "The extent to which a firm meets the economic, legal, ethical, and philanthropic responsibilities placed on it by its stakeholders?", opts: ["reputation", "corporate citizenship", "corporate ethical audit", "ethical citizenship", "fiduciary duties"], ans: 1, exp: ["❌ Incorrect. The correct answer is: corporate citizenship", "✅ Correct. corporate citizenship", "❌ Incorrect. The correct answer is: corporate citizenship", "❌ Incorrect. The correct answer is: corporate citizenship", "❌ Incorrect. The correct answer is: corporate citizenship"] },
  { ch: "ch2", q: "Which of the following is a major ethical concern among corporate boards of directors?", opts: ["Compensation", "The non-traditional directorship approach", "Dividend reporting", "Secondary stakeholders", "Debt swaps"], ans: 0, exp: ["✅ Correct. Compensation", "❌ Incorrect. The correct answer is: Compensation", "❌ Incorrect. The correct answer is: Compensation", "❌ Incorrect. The correct answer is: Compensation", "❌ Incorrect. The correct answer is: Compensation"] },
  { ch: "ch2", q: "Which model of corporate governance is founded in classic economic precepts?", opts: ["Economic", "Shareholder", "Stakeholder", "Board", "ISO"], ans: 1, exp: ["❌ Incorrect. The correct answer is: Shareholder", "✅ Correct. Shareholder", "❌ Incorrect. The correct answer is: Shareholder", "❌ Incorrect. The correct answer is: Shareholder", "❌ Incorrect. The correct answer is: Shareholder"] },
  { ch: "ch2", q: "Board members being linked to more than one company is defined as which of the following?", opts: ["The stakeholder concept", "The stakeholder model of corporate governance", "An interlocking directorate", "A conflict of interest", "A multiple directorate"], ans: 2, exp: ["❌ Incorrect. The correct answer is: An interlocking directorate", "❌ Incorrect. The correct answer is: An interlocking directorate", "✅ Correct. An interlocking directorate", "❌ Incorrect. The correct answer is: An interlocking directorate", "❌ Incorrect. The correct answer is: An interlocking directorate"] },
  { ch: "ch2", q: "The obligation of individuals to make decisions that are in the best interests of the corporation and its stakeholders is known as which of the following?", opts: ["duty of loyalty", "duty of oversight", "duty to audit", "duty of control", "duty of cooperation"], ans: 0, exp: ["✅ Correct. duty of loyalty", "❌ Incorrect. The correct answer is: duty of loyalty", "❌ Incorrect. The correct answer is: duty of loyalty", "❌ Incorrect. The correct answer is: duty of loyalty", "❌ Incorrect. The correct answer is: duty of loyalty"] },
  { ch: "ch2", q: "In Dodge vs. Ford Motor Co., the court ruled that a business exists for the profit of shareholders, and the board of directors should focus on that objective.", opts: ["True", "False"], ans: 0, exp: ["✅ Correct. True", "❌ Incorrect. The correct answer is: True"] },
  { ch: "ch2", q: "The final step in implementing a stakeholder perspective is identifying stakeholders.", opts: ["True", "False"], ans: 1, exp: ["❌ Incorrect. The correct answer is: False", "✅ Correct. False"] },
  { ch: "ch2", q: "Evidence suggests that caring about the well-being of stakeholders leads to increased profits.", opts: ["True", "False"], ans: 0, exp: ["✅ Correct. True", "❌ Incorrect. The correct answer is: True"] },
  { ch: "ch2", q: "Ethics and social responsibility can be used interchangeably.", opts: ["True", "False"], ans: 1, exp: ["❌ Incorrect. The correct answer is: False", "✅ Correct. False"] },
  { ch: "ch2", q: "Government regulatory agencies are considered a secondary stakeholder group.", opts: ["True", "False"], ans: 1, exp: ["❌ Incorrect. The correct answer is: False", "✅ Correct. False"] },
  { ch: "ch2", q: "A board of directors' fiduciary duty to a company refers to an assumed position of trust and confidence that entails certain responsibilities.", opts: ["True", "False"], ans: 0, exp: ["✅ Correct. True", "❌ Incorrect. The correct answer is: True"] },
  { ch: "ch3", q: "One of the biggest factors in land pollution is the dumping of waste into landfills. By far the world's biggest wasters are", opts: ["Europe", "China", "Russia", "the United States", "Canada"], ans: 3, exp: ["❌ Incorrect. The correct answer is: the United States", "❌ Incorrect. The correct answer is: the United States", "❌ Incorrect. The correct answer is: the United States", "✅ Correct. the United States", "❌ Incorrect. The correct answer is: the United States"] },
  { ch: "ch3", q: "The world's forests, which cover more than 30 percent of the planet, are being destroyed, with forests shrinking by approximately how many acres each year?", opts: ["The corn industry", "Beef, soy, palm oil, and wood products", "Human-lit fires", "A lack of rain", "Wildfires"], ans: 1, exp: ["❌ Incorrect. The correct answer is: Beef, soy, palm oil, and wood products", "✅ Correct. Beef, soy, palm oil, and wood products", "❌ Incorrect. The correct answer is: Beef, soy, palm oil, and wood products", "❌ Incorrect. The correct answer is: Beef, soy, palm oil, and wood products", "❌ Incorrect. The correct answer is: Beef, soy, palm oil, and wood products"] },
  { ch: "ch3", q: "Many businesses can benefit from urban renewal movements that reduce sprawl, but it can create disadvantages for which of the following?", opts: ["car and oil companies", "the airline industry", "the railroad industry", "service-oriented companies", "humans and animals"], ans: 0, exp: ["✅ Correct. car and oil companies", "❌ Incorrect. The correct answer is: car and oil companies", "❌ Incorrect. The correct answer is: car and oil companies", "❌ Incorrect. The correct answer is: car and oil companies", "❌ Incorrect. The correct answer is: car and oil companies"] },
  { ch: "ch3", q: "The Environmental Protection Agency's primary mission is to _______.", opts: ["protect human health and the environment", "ensure all Fortune 500 firms hire a chief sustainability officer", "protect threatened and endangered species", "encourage alternative energy sources", "collect taxes from the chemical and petroleum industries"], ans: 0, exp: ["✅ Correct. protect human health and the environment", "❌ Incorrect. The correct answer is: protect human health and the environment", "❌ Incorrect. The correct answer is: protect human health and the environment", "❌ Incorrect. The correct answer is: protect human health and the environment", "❌ Incorrect. The correct answer is: protect human health and the environment"] },
  { ch: "ch3", q: "The Clean Water Act makes it illegal for anyone to discharge any pollutant from a point source directly into navigable", opts: ["good reason", "direct order", "permit", "inspector present", "limit"], ans: 2, exp: ["❌ Incorrect. The correct answer is: permit", "❌ Incorrect. The correct answer is: permit", "✅ Correct. permit", "❌ Incorrect. The correct answer is: permit", "❌ Incorrect. The correct answer is: permit"] },
  { ch: "ch3", q: "Which of the following acts focuses on reducing pollution through cost-effective changes in production, operation,", opts: ["Pollution Prevention Act", "Toxic Substances Control Act", "Clean Air Act", "Energy Policy Act", "Oil Pollution Act"], ans: 0, exp: ["✅ Correct. Pollution Prevention Act", "❌ Incorrect. The correct answer is: Pollution Prevention Act", "❌ Incorrect. The correct answer is: Pollution Prevention Act", "❌ Incorrect. The correct answer is: Pollution Prevention Act", "❌ Incorrect. The correct answer is: Pollution Prevention Act"] },
  { ch: "ch3", q: "Which of the following is considered a misleading practice related to sustainability?", opts: ["Designing environmentally friendly buildings", "Recycling", "Greenwashing", "Source reduction", "Sustainable agriculture"], ans: 2, exp: ["❌ Incorrect. The correct answer is: Greenwashing", "❌ Incorrect. The correct answer is: Greenwashing", "✅ Correct. Greenwashing", "❌ Incorrect. The correct answer is: Greenwashing", "❌ Incorrect. The correct answer is: Greenwashing"] },
  { ch: "ch3", q: "To empower the EPA with the ability to track the 75,000 industrial chemicals currently produced or imported into the United States, Congress enacted which of the following?", opts: ["Federal Water Pollution Control Act", "Federal Insecticide, Fungicide and Rodenticide Act", "Safe Drinking Water Act", "Toxic Substances Control Act", "Food Quality Protection Act"], ans: 3, exp: ["❌ Incorrect. The correct answer is: Toxic Substances Control Act", "❌ Incorrect. The correct answer is: Toxic Substances Control Act", "❌ Incorrect. The correct answer is: Toxic Substances Control Act", "✅ Correct. Toxic Substances Control Act", "❌ Incorrect. The correct answer is: Toxic Substances Control Act"] },
  { ch: "ch3", q: "Wind power holds great promise for the United States because it is home to one of the greatest sources of wind energy", opts: ["Rocky Mountains", "Everglades", "Great Lakes", "Pacific Rim", "Great Plains"], ans: 4, exp: ["❌ Incorrect. The correct answer is: Great Plains", "❌ Incorrect. The correct answer is: Great Plains", "❌ Incorrect. The correct answer is: Great Plains", "❌ Incorrect. The correct answer is: Great Plains", "✅ Correct. Great Plains"] },
  { ch: "ch3", q: "A more dependable energy source than some other forms of alternative energy, geothermal energy provides _______.", opts: ["heat from the sun", "a radiated heat", "heat from steam", "a constant source of heat", "a dry heat"], ans: 3, exp: ["❌ Incorrect. The correct answer is: a constant source of heat", "❌ Incorrect. The correct answer is: a constant source of heat", "❌ Incorrect. The correct answer is: a constant source of heat", "✅ Correct. a constant source of heat", "❌ Incorrect. The correct answer is: a constant source of heat"] },
  { ch: "ch3", q: "Which of these is considered the largest form of renewable energy?", opts: ["Hydropower", "Solar power", "Geothermal power", "Biofuels", "Nuclear power"], ans: 0, exp: ["✅ Correct. Hydropower", "❌ Incorrect. The correct answer is: Hydropower", "❌ Incorrect. The correct answer is: Hydropower", "❌ Incorrect. The correct answer is: Hydropower", "❌ Incorrect. The correct answer is: Hydropower"] },
  { ch: "ch3", q: "Which of the following is the most controversial form of alternative energy after nuclear power?", opts: ["Hydropower", "Geothermal power", "Solar power", "Wind power", "Ethanol"], ans: 4, exp: ["❌ Incorrect. The correct answer is: Ethanol", "❌ Incorrect. The correct answer is: Ethanol", "❌ Incorrect. The correct answer is: Ethanol", "❌ Incorrect. The correct answer is: Ethanol", "✅ Correct. Ethanol"] },
  { ch: "ch3", q: "Which of the following is the name for a certification program that recognizes sustainable building practices and promotes green design?", opts: ["Brundtland Report", "WasteWise", "LEED", "Kyoto Protocol", "USMCA"], ans: 2, exp: ["❌ Incorrect. The correct answer is: LEED", "❌ Incorrect. The correct answer is: LEED", "✅ Correct. LEED", "❌ Incorrect. The correct answer is: LEED", "❌ Incorrect. The correct answer is: LEED"] },
  { ch: "ch3", q: "Which type of business describes one that attempts to avoid dealing with environmental issues and hopes nothing bad", opts: ["A newly established business", "A socially responsible business", "A low-commitment business", "A single-impact-driven business", "A law-abiding business"], ans: 2, exp: ["❌ Incorrect. The correct answer is: A low-commitment business", "❌ Incorrect. The correct answer is: A low-commitment business", "✅ Correct. A low-commitment business", "❌ Incorrect. The correct answer is: A low-commitment business", "❌ Incorrect. The correct answer is: A low-commitment business"] },
  { ch: "ch3", q: "One of the country's greatest sustainability success stories is _______.", opts: ["water conservation", "pollution control", "manufacturing", "composting", "recycling"], ans: 4, exp: ["❌ Incorrect. The correct answer is: recycling", "❌ Incorrect. The correct answer is: recycling", "❌ Incorrect. The correct answer is: recycling", "❌ Incorrect. The correct answer is: recycling", "✅ Correct. recycling"] },
  { ch: "ch3", q: "Which of the following is a comprehensive set of environmental standards developed by the International", opts: ["Green Globes", "Kyoto Protocol", "ISO 14000", "Cancun Package", "LEED"], ans: 2, exp: ["❌ Incorrect. The correct answer is: ISO 14000", "❌ Incorrect. The correct answer is: ISO 14000", "✅ Correct. ISO 14000", "❌ Incorrect. The correct answer is: ISO 14000", "❌ Incorrect. The correct answer is: ISO 14000"] },
  { ch: "ch3", q: "Sustainability is defined as the long-term well-being of the natural environment and the mutually beneficial", opts: ["customers, investors, managers, and policies", "board members, presidents, managers, and nonprofit organizations", "investors, creditors, suppliers, and the marketing department", "nature and individuals, organizations, and business strategies", "managers, boards, CEOs, and stakeholder strategies"], ans: 3, exp: ["❌ Incorrect. The correct answer is: nature and individuals, organizations, and business strategi", "❌ Incorrect. The correct answer is: nature and individuals, organizations, and business strategi", "❌ Incorrect. The correct answer is: nature and individuals, organizations, and business strategi", "✅ Correct. nature and individuals, organizations, and business strategies", "❌ Incorrect. The correct answer is: nature and individuals, organizations, and business strategi"] },
  { ch: "ch3", q: "Created in 1997, the Kyoto Protocol was an international treaty meant to curb global _______.", opts: ["natural resource use", "greenwashing activities", "water pollution", "greenhouse gas emissions", "competition"], ans: 3, exp: ["❌ Incorrect. The correct answer is: greenhouse gas emissions", "❌ Incorrect. The correct answer is: greenhouse gas emissions", "❌ Incorrect. The correct answer is: greenhouse gas emissions", "✅ Correct. greenhouse gas emissions", "❌ Incorrect. The correct answer is: greenhouse gas emissions"] },
  { ch: "ch3", q: "A strategy involving stakeholder assessment to create meaningful long-term relationships with customers while maintaining, supporting, and enhancing the natural environment is known as _______.", opts: ["green marketing", "recycling initiatives", "stakeholder assessment", "risk analysis", "strategic environmental audit"], ans: 0, exp: ["✅ Correct. green marketing", "❌ Incorrect. The correct answer is: green marketing", "❌ Incorrect. The correct answer is: green marketing", "❌ Incorrect. The correct answer is: green marketing", "❌ Incorrect. The correct answer is: green marketing"] },
  { ch: "ch3", q: "The long-term variation in average weather patterns is referred to as _______.", opts: ["water pollution", "greenhouse gas", "climate change", "the Kyoto Protocol", "the ozone layer"], ans: 2, exp: ["❌ Incorrect. The correct answer is: climate change", "❌ Incorrect. The correct answer is: climate change", "✅ Correct. climate change", "❌ Incorrect. The correct answer is: climate change", "❌ Incorrect. The correct answer is: climate change"] },
  { ch: "ch3", q: "Because ethanol is created from corn in the United States, there are concerns that the increased use of ethanol will decrease food supplies.", opts: ["True", "False"], ans: 0, exp: ["✅ Correct. True", "❌ Incorrect. The correct answer is: True"] },
  { ch: "ch3", q: "Greenwashing is a strategy involving stakeholder assessment to create meaningful long-term relationships with customers, while maintaining, supporting, and enhancing the natural environment.", opts: ["True", "False"], ans: 1, exp: ["❌ Incorrect. The correct answer is: False", "✅ Correct. False"] },
  { ch: "ch3", q: "Green Globes and LEED are certification groups that authorize buildings as 'green.'", opts: ["True", "False"], ans: 0, exp: ["✅ Correct. True", "❌ Incorrect. The correct answer is: True"] },
  { ch: "ch3", q: "Acid rain, waste management, urban sprawl, and deforestation are all environmental issues related to land.", opts: ["True", "False"], ans: 1, exp: ["❌ Incorrect. The correct answer is: False", "✅ Correct. False"] },
  { ch: "ch3", q: "Recycling is the reprocessing of materials—especially steel, aluminum, paper, glass, rubber, and some plastics—for reuse.", opts: ["True", "False"], ans: 0, exp: ["✅ Correct. True", "❌ Incorrect. The correct answer is: True"] }
];

// ── MOCK EXAM BANK ─────────────────────────────
const mockBank = [
  { ch: "ch1", q: "Corporate social responsibility is defined as an organization's obligation to _______ its positive effects and _______ its negative effects on stakeholders.", opts: ["Maximize... minimize", "Minimize... maximize", "Ignore... address", "Report... hide"], ans: 0 },

  // ════════════ TEST BANK — MISSING QUESTIONS (40 new) ════════════
  { ch: "ch1", q: "Which of the following is one of the rights spelled out by John F. Kennedy in his Consumers' Bill of Rights?", opts: ["The right to consumerism", "The right to safety", "The right to be protected", "The right to be ethical", "The right to be heard"], ans: 1, exp: ["❌ A. The right to consumerism", "✅ B. The right to safety — Correct.", "❌ C. The right to be protected", "❌ D. The right to be ethical", "❌ E. The right to be heard"] },
  { ch: "ch1", q: "Which of the following was developed in the 1980s to guide corporate support for ethical conduct by establishing a method for discussing best practices?", opts: ["Federal Sentencing Guidelines for Organizations", "Defense Industry Initiative on Business Ethics and Conduct", "Foreign Corrupt Practices Act", "U.S. Sentencing Commission", "The Southern Common Market"], ans: 1, exp: ["❌ A. Federal Sentencing Guidelines for Organizations", "✅ B. Defense Industry Initiative on Business Ethics and Conduct — Correct.", "❌ C. Foreign Corrupt Practices Act", "❌ D. U.S. Sentencing Commission", "❌ E. The Southern Common Market"] },
  { ch: "ch1", q: "President Obama's administration focused on which of these major ethical issues?", opts: ["Decreasing environmental legislation", "Deregulation", "Tax decreases", "Incentives to oil companies", "Healthcare and consumer protection"], ans: 4, exp: ["❌ A. Decreasing environmental legislation", "❌ B. Deregulation", "❌ C. Tax decreases", "❌ D. Incentives to oil companies", "✅ E. Healthcare and consumer protection — Correct."] },
  { ch: "ch1", q: "Which of the following statements about business ethics is true?", opts: ["A firm that has ethical management will succeed financially.", "Codes of ethics should cover every business ethics issue.", "Business ethics focuses more on laws than on values.", "Individuals apply the same ethical rules in business as they do at home.", "Conflict or trade-offs do not exist between profits and business ethics."], ans: 4, exp: ["❌ A. A firm that has ethical management will succeed financially.", "❌ B. Codes of ethics should cover every business ethics issue.", "❌ C. Business ethics focuses more on laws than on values.", "❌ D. Individuals apply the same ethical rules in business as they do at home.", "✅ E. Conflict or trade-offs do not exist between profits and business ethics. — Correct."] },
  { ch: "ch1", q: "Because of Sarbanes-Oxley, what must publicly traded companies develop in order to assist in maintaining transparency in financial reporting?", opts: ["Ethics officers", "Ethics programs", "Codes of ethics", "Legal counsel", "Accountants"], ans: 2, exp: ["❌ A. Ethics officers", "❌ B. Ethics programs", "✅ C. Codes of ethics — Correct.", "❌ D. Legal counsel", "❌ E. Accountants"] },
  { ch: "ch1", q: "Which of the following statements about the Dodd-Frank Wall Street Reform and Consumer Protection Act is true?", opts: ["It was very popular among Wall Street bankers.", "It represented modest reform to the finance industry.", "It came out of theological discussions in the 1920s.", "It was designed to make the financial services industry more responsible.", "It made it mandatory for public corporations to hire ethics officers."], ans: 3, exp: ["❌ A. It was very popular among Wall Street bankers.", "❌ B. It represented modest reform to the finance industry.", "❌ C. It came out of theological discussions in the 1920s.", "✅ D. It was designed to make the financial services industry more responsible. — Correct.", "❌ E. It made it mandatory for public corporations to hire ethics officers."] },
  { ch: "ch1", q: "The term that comprises organizational principles, values, and norms that may originate from individuals, organizational statements, or from the legal system that primarily guides individual and group behavior in business is defined as _______.", opts: ["stakeholder orientation", "values", "principles", "business ethics", "integrity management"], ans: 3, exp: ["❌ A. stakeholder orientation", "❌ B. values", "❌ C. principles", "✅ D. business ethics — Correct.", "❌ E. integrity management"] },
  { ch: "ch1", q: "A situation where a person is faced with multiple choices, all of which are undesirable as defined by that person, is known as a(n) _______.", opts: ["value dilemma", "integrity management", "philosophical dilemma", "legal dilemma", "moral dilemma"], ans: 4, exp: ["❌ A. value dilemma", "❌ B. integrity management", "❌ C. philosophical dilemma", "❌ D. legal dilemma", "✅ E. moral dilemma — Correct."] },
  { ch: "ch2", q: "Which of the following groups is defined as one that does not typically engage in transactions with a company and therefore is not essential for its survival?", opts: ["Employees", "Secondary stakeholders", "Primary stakeholders", "Investors", "Customers"], ans: 1, exp: ["❌ A. Employees", "✅ B. Secondary stakeholders — Correct.", "❌ C. Primary stakeholders", "❌ D. Investors", "❌ E. Customers"] },
  { ch: "ch2", q: "A firm that recognizes other stakeholders beyond investors, employees, and suppliers, and explicitly acknowledges that dialogue exists between a firm\'s internal and external environments, has adopted which of the following?", opts: ["A stakeholder model of socially responsible corporate governance", "A stakeholder bias", "A code of ethics", "A stakeholder interaction model", "A corporate interface model"], ans: 3, exp: ["❌ A. A stakeholder model of socially responsible corporate governance", "❌ B. A stakeholder bias", "❌ C. A code of ethics", "✅ D. A stakeholder interaction model — Correct.", "❌ E. A corporate interface model"] },
  { ch: "ch2", q: "When unethical acts are discovered in a firm, which of the following is true in most instances?", opts: ["They are caused by unwilling participants.", "The cause is due to external stakeholders.", "The perpetrators are caught and prosecuted.", "Their acceptance and perpetuation were facilitated by cooperation or complicity.", "The cause of the unethical conduct is a corrupt board of directors."], ans: 3, exp: ["❌ A. They are caused by unwilling participants.", "❌ B. The cause is due to external stakeholders.", "❌ C. The perpetrators are caught and prosecuted.", "✅ D. Their acceptance and perpetuation were facilitated by cooperation or complicity. — Correct.", "❌ E. The cause of the unethical conduct is a corrupt board of directors."] },
  { ch: "ch2", q: "Which of the following statements accurately describes the normative approach?", opts: ["It focuses on the firm's behavior and usually addresses how decisions and strategies are made for stakeholder relationships.", "It describes what happens if firms behave in a particular way.", "It is the degree to which a firm understands and addresses stakeholder demands.", "It describes reciprocal relationships between the firm and a host of stakeholders.", "It identifies ethical guidelines that dictate how firms should treat stakeholders."], ans: 4, exp: ["❌ A. It focuses on the firm's behavior and usually addresses how decisions and strategies are made for stakeholder relationships.", "❌ B. It describes what happens if firms behave in a particular way.", "❌ C. It is the degree to which a firm understands and addresses stakeholder demands.", "❌ D. It describes reciprocal relationships between the firm and a host of stakeholders.", "✅ E. It identifies ethical guidelines that dictate how firms should treat stakeholders. — Correct."] },
  { ch: "ch2", q: "The idea of the invisible hand, which is a fundamental concept in free market capitalism, was developed by which of the following individuals?", opts: ["Adam Smith", "John Maynard Keynes", "Janet Yellen", "Noel Biderman", "Milton Friedman"], ans: 0, exp: ["✅ A. Adam Smith — Correct.", "❌ B. John Maynard Keynes", "❌ C. Janet Yellen", "❌ D. Noel Biderman", "❌ E. Milton Friedman"] },
  { ch: "ch2", q: "The idea that because people live in a community, social rules should benefit the community is known as _______.", opts: ["the stakeholder interaction model", "consumer protection", "the common good", "sustainability", "corporate governance"], ans: 2, exp: ["❌ A. the stakeholder interaction model", "❌ B. consumer protection", "✅ C. the common good — Correct.", "❌ D. sustainability", "❌ E. corporate governance"] },
  { ch: "ch2", q: "The extent to which a firm meets the economic, legal, ethical, and philanthropic responsibilities placed on it by various stakeholders is referred to as its _______.", opts: ["reputation", "corporate citizenship", "corporate ethical audit", "ethical citizenship", "fiduciary duties"], ans: 1, exp: ["❌ A. reputation", "✅ B. corporate citizenship — Correct.", "❌ C. corporate ethical audit", "❌ D. ethical citizenship", "❌ E. fiduciary duties"] },
  { ch: "ch2", q: "Which of the following is a major ethical concern among corporate boards of directors?", opts: ["Compensation", "The non-traditional directorship approach", "Dividend reporting", "Secondary stakeholders", "Debt swaps"], ans: 0, exp: ["✅ A. Compensation — Correct.", "❌ B. The non-traditional directorship approach", "❌ C. Dividend reporting", "❌ D. Secondary stakeholders", "❌ E. Debt swaps"] },
  { ch: "ch2", q: "Which model of corporate governance is founded in classic economic precepts?", opts: ["Economic", "Shareholder", "Stakeholder", "Board", "ISO"], ans: 1, exp: ["❌ A. Economic", "✅ B. Shareholder — Correct.", "❌ C. Stakeholder", "❌ D. Board", "❌ E. ISO"] },
  { ch: "ch2", q: "Board members being linked to more than one company is defined as which of the following?", opts: ["The stakeholder concept", "The stakeholder model of corporate governance", "An interlocking directorate", "A conflict of interest", "A multiple directorate"], ans: 2, exp: ["❌ A. The stakeholder concept", "❌ B. The stakeholder model of corporate governance", "✅ C. An interlocking directorate — Correct.", "❌ D. A conflict of interest", "❌ E. A multiple directorate"] },
  { ch: "ch2", q: "The obligation of individuals to make decisions that are in the best interests of the corporation and its stakeholders is known as a _______.", opts: ["duty of loyalty", "duty of oversight", "duty to audit", "duty of control", "duty of cooperation"], ans: 0, exp: ["✅ A. duty of loyalty — Correct.", "❌ B. duty of oversight", "❌ C. duty to audit", "❌ D. duty of control", "❌ E. duty of cooperation"] },
  { ch: "ch3", q: "One of the biggest factors in land pollution is the dumping of waste into landfills. By far the world's biggest wasters are consumers in _______.", opts: ["Europe", "China", "Russia", "the United States", "Canada"], ans: 3, exp: ["❌ A. Europe", "❌ B. China", "❌ C. Russia", "✅ D. the United States — Correct.", "❌ E. Canada"] },
  { ch: "ch3", q: "The world's forests, which cover more than 30 percent of the planet, are being destroyed, with forests shrinking by 502,000 square miles over the past 25 years. Wide-spread deforestation is caused predominantly by which of the following?", opts: ["The corn industry", "Beef, soy, palm oil, and wood products", "Human-lit fires", "A lack of rain", "Wildfires"], ans: 1, exp: ["❌ A. The corn industry", "✅ B. Beef, soy, palm oil, and wood products — Correct.", "❌ C. Human-lit fires", "❌ D. A lack of rain", "❌ E. Wildfires"] },
  { ch: "ch3", q: "Many businesses can benefit from urban renewal movements that reduce sprawl, but it can create disadvantages for _______.", opts: ["car and oil companies", "the airline industry", "the railroad industry", "service-oriented companies", "humans and animals"], ans: 0, exp: ["✅ A. car and oil companies — Correct.", "❌ B. the airline industry", "❌ C. the railroad industry", "❌ D. service-oriented companies", "❌ E. humans and animals"] },
  { ch: "ch3", q: "The Environmental Protection Agency's primary mission is to _______.", opts: ["protect human health and the environment", "ensure all Fortune 500 firms hire a chief sustainability officer", "protect threatened and endangered species", "encourage alternative energy sources", "collect taxes from the chemical and petroleum industries"], ans: 0, exp: ["✅ A. protect human health and the environment — Correct.", "❌ B. ensure all Fortune 500 firms hire a chief sustainability officer", "❌ C. protect threatened and endangered species", "❌ D. encourage alternative energy sources", "❌ E. collect taxes from the chemical and petroleum industries"] },
  { ch: "ch3", q: "Which of the following statements accurately describes the Clean Air Act?", opts: ["It allowed the EPA to track industrial chemicals.", "It focused on promoting alternative forms of energy.", "It established national air quality standards.", "It provided tax benefits to consumers who purchase hybrid cars.", "It focused on reducing pollution through cost-effective change."], ans: 2, exp: ["❌ A. It allowed the EPA to track industrial chemicals.", "❌ B. It focused on promoting alternative forms of energy.", "✅ C. It established national air quality standards. — Correct.", "❌ D. It provided tax benefits to consumers who purchase hybrid cars.", "❌ E. It focused on reducing pollution through cost-effective change."] },
  { ch: "ch3", q: "The Clean Water Act makes it illegal for anyone to discharge any pollutant from a point source directly into navigable waters without a(n) _______.", opts: ["good reason", "direct order", "permit", "inspector present", "limit"], ans: 2, exp: ["❌ A. good reason", "❌ B. direct order", "✅ C. permit — Correct.", "❌ D. inspector present", "❌ E. limit"] },
  { ch: "ch3", q: "Which of the following acts focuses on reducing pollution through cost-effective changes in production, operation, and raw materials use?", opts: ["Pollution Prevention Act", "Toxic Substances Control Act", "Clean Air Act", "Energy Policy Act", "Oil Pollution Act"], ans: 0, exp: ["✅ A. Pollution Prevention Act — Correct.", "❌ B. Toxic Substances Control Act", "❌ C. Clean Air Act", "❌ D. Energy Policy Act", "❌ E. Oil Pollution Act"] },
  { ch: "ch3", q: "Which of the following is considered a misleading practice related to sustainability?", opts: ["Designing environmentally friendly buildings", "Recycling", "Greenwashing", "Source reduction", "Sustainable agriculture"], ans: 2, exp: ["❌ A. Designing environmentally friendly buildings", "❌ B. Recycling", "✅ C. Greenwashing — Correct.", "❌ D. Source reduction", "❌ E. Sustainable agriculture"] },
  { ch: "ch3", q: "To empower the EPA with the ability to track the 75,000 industrial chemicals currently produced or imported into the United States, Congress passed the _______.", opts: ["Federal Water Pollution Control Act", "Federal Insecticide, Fungicide and Rodenticide Act", "Safe Drinking Water Act", "Toxic Substances Control Act", "Food Quality Protection Act"], ans: 3, exp: ["❌ A. Federal Water Pollution Control Act", "❌ B. Federal Insecticide, Fungicide and Rodenticide Act", "❌ C. Safe Drinking Water Act", "✅ D. Toxic Substances Control Act — Correct.", "❌ E. Food Quality Protection Act"] },
  { ch: "ch3", q: "Wind power holds great promise for the United States because it is home to one of the greatest sources of wind energy in the world, found in the _______.", opts: ["Rocky Mountains", "Everglades", "Great Lakes", "Pacific Rim", "Great Plains"], ans: 4, exp: ["❌ A. Rocky Mountains", "❌ B. Everglades", "❌ C. Great Lakes", "❌ D. Pacific Rim", "✅ E. Great Plains — Correct."] },
  { ch: "ch3", q: "A more dependable energy source than some other forms of alternative energy, geothermal energy provides _______.", opts: ["heat from the sun", "a radiated heat", "heat from steam", "a constant source of heat", "a dry heat"], ans: 3, exp: ["❌ A. heat from the sun", "❌ B. a radiated heat", "❌ C. heat from steam", "✅ D. a constant source of heat — Correct.", "❌ E. a dry heat"] },
  { ch: "ch3", q: "Which of these is considered the largest form of renewable energy?", opts: ["Hydropower", "Solar power", "Geothermal power", "Biofuels", "Nuclear power"], ans: 0, exp: ["✅ A. Hydropower — Correct.", "❌ B. Solar power", "❌ C. Geothermal power", "❌ D. Biofuels", "❌ E. Nuclear power"] },
  { ch: "ch3", q: "Which of the following is the most controversial form of alternative energy after nuclear power?", opts: ["Hydropower", "Geothermal power", "Solar power", "Wind power", "Ethanol"], ans: 4, exp: ["❌ A. Hydropower", "❌ B. Geothermal power", "❌ C. Solar power", "❌ D. Wind power", "✅ E. Ethanol — Correct."] },
  { ch: "ch3", q: "Which of the following is the name for a certification program that recognizes sustainable building practices and strategies?", opts: ["Brundtland Report", "WasteWise", "LEED", "Kyoto Protocol", "USMCA"], ans: 2, exp: ["❌ A. Brundtland Report", "❌ B. WasteWise", "✅ C. LEED — Correct.", "❌ D. Kyoto Protocol", "❌ E. USMCA"] },
  { ch: "ch3", q: "Which type of business describes one that attempts to avoid dealing with environmental issues and hopes nothing bad happens or no one ever finds out about an environmental accident or abuse?", opts: ["A newly established business", "A socially responsible business", "A low-commitment business", "A single-impact-driven business", "A law-abiding business"], ans: 2, exp: ["❌ A. A newly established business", "❌ B. A socially responsible business", "✅ C. A low-commitment business — Correct.", "❌ D. A single-impact-driven business", "❌ E. A law-abiding business"] },
  { ch: "ch3", q: "One of the country's greatest sustainability success stories is _______.", opts: ["water conservation", "pollution control", "manufacturing", "composting", "recycling"], ans: 4, exp: ["❌ A. water conservation", "❌ B. pollution control", "❌ C. manufacturing", "❌ D. composting", "✅ E. recycling — Correct."] },
  { ch: "ch3", q: "Which of the following is a comprehensive set of environmental standards developed by the International Organization for Standardization to encourage a cleaner, safer, healthier world?", opts: ["Green Globes", "Kyoto Protocol", "ISO 14000", "Cancun Package", "LEED"], ans: 2, exp: ["❌ A. Green Globes", "❌ B. Kyoto Protocol", "✅ C. ISO 14000 — Correct.", "❌ D. Cancun Package", "❌ E. LEED"] },
  { ch: "ch3", q: "Sustainability is defined as the long-term well-being of the natural environment and the mutually beneficial interactions among _______.", opts: ["customers, investors, managers, and policies", "board members, presidents, managers, and nonprofit organizations", "investors, creditors, suppliers, and the marketing department", "nature and individuals, organizations, and business strategies", "managers, boards, CEOs, and stakeholder strategies"], ans: 3, exp: ["❌ A. customers, investors, managers, and policies", "❌ B. board members, presidents, managers, and nonprofit organizations", "❌ C. investors, creditors, suppliers, and the marketing department", "✅ D. nature and individuals, organizations, and business strategies — Correct.", "❌ E. managers, boards, CEOs, and stakeholder strategies"] },
  { ch: "ch3", q: "Created in 1997, the Kyoto Protocol was an international treaty meant to curb global _______.", opts: ["natural resource use", "greenwashing activities", "water pollution", "greenhouse gas emissions", "competition"], ans: 3, exp: ["❌ A. natural resource use", "❌ B. greenwashing activities", "❌ C. water pollution", "✅ D. greenhouse gas emissions — Correct.", "❌ E. competition"] },
  { ch: "ch3", q: "A strategy involving stakeholder assessment to create meaningful long-term relationships with customers while maintaining, supporting, and enhancing the natural environment is known as _______.", opts: ["green marketing", "recycling initiatives", "stakeholder assessment", "risk analysis", "strategic environmental audit"], ans: 0, exp: ["✅ A. green marketing — Correct.", "❌ B. recycling initiatives", "❌ C. stakeholder assessment", "❌ D. risk analysis", "❌ E. strategic environmental audit"] },
  { ch: "ch3", q: "The long-term variation in average weather patterns is referred to as _______.", opts: ["water pollution", "greenhouse gas", "climate change", "the Kyoto Protocol", "the ozone layer"], ans: 2, exp: ["❌ A. water pollution", "❌ B. greenhouse gas", "✅ C. climate change — Correct.", "❌ D. the Kyoto Protocol", "❌ E. the ozone layer"] },

  { ch: "ch1", q: "Which legislation was enacted after the accounting scandals of the early 2000s to restore confidence in financial reporting?", opts: ["Foreign Corrupt Practices Act", "Dodd-Frank Act", "Sarbanes-Oxley Act", "Federal Sentencing Guidelines"], ans: 2 },
  { ch: "ch1", q: "Morals are defined as _______.", opts: ["Organizational principles and values guiding group behavior", "Enduring beliefs and ideals that are socially enforced", "A person's personal philosophies about what is right or wrong", "Specific and pervasive boundaries for behavior"], ans: 2 },
  { ch: "ch1", q: "Ethical culture refers to _______.", opts: ["Rules, standards, and moral principles regarding what is right or wrong", "Acceptable behavior as defined by the company and industry", "The institutionalization of ethics into all levels of decision making", "A person's personal philosophy about right and wrong"], ans: 1 },
  { ch: "ch1", q: "The Defense Industry Initiative on Business Ethics and Conduct was established in the _______.", opts: ["1960s", "1970s", "1980s", "1990s"], ans: 2 },
  { ch: "ch1", q: "Which of the following is an example of how ethics contributes to employee commitment?", opts: ["Increased turnover rates", "Greater absence of misconduct", "Higher salaries for top executives", "Reduced community involvement"], ans: 1 },
  { ch: "ch1", q: "The Foreign Corrupt Practices Act outlawed _______.", opts: ["Securities fraud", "Bribery of foreign public officials", "Corporate tax evasion", "Price collusion among competitors"], ans: 1 },
  { ch: "ch1", q: "ISO 19600 is described as which of the following?", opts: ["A set of 10 principles concerning human rights and anti-corruption", "A global compliance management standard addressing risks and stakeholder needs", "An environmental standard for sustainable business practices", "A certification program for ethical leadership"], ans: 1 },
  { ch: "ch1", q: "Business ethics is becoming an integral part of management's efforts to achieve _______.", opts: ["Government compliance", "Competitive advantage", "Higher executive pay", "Social media presence"], ans: 1 },
  { ch: "ch1", q: "Principles are defined as _______.", opts: ["Enduring beliefs and ideals that are socially enforced", "Acceptable behavior as defined by the company and industry", "Specific and pervasive boundaries for behavior that should not be violated", "A person's personal philosophy about what is right or wrong"], ans: 2 },
  { ch: "ch2", q: "Primary stakeholders are those _______.", opts: ["Who do not typically engage directly in transactions with a company", "Whose continued association and resources are absolutely necessary for a firm's survival", "Who influence the company through media and trade associations", "Who are only concerned with environmental issues"], ans: 1 },
  { ch: "ch2", q: "Social responsibility has how many levels?", opts: ["Two — economic and legal", "Three — economic, legal, and ethical", "Four — economic, legal, ethical, and philanthropic", "Five — including environmental"], ans: 2 },
  { ch: "ch2", q: "The stakeholder model of corporate governance takes a _______ view of the purpose of business.", opts: ["Narrow, profit-focused", "Broader, considering stakeholder welfare", "Legal and compliance-focused", "Government-centered"], ans: 1 },
  { ch: "ch2", q: "Milton Friedman suggested that the market is a better deterrent to wrongdoing than _______.", opts: ["Ethical training programs", "New laws and regulations", "Stakeholder pressure", "Corporate governance systems"], ans: 1 },
  { ch: "ch2", q: "Corporate governance establishes fundamental systems and processes for which of the following?", opts: ["Maximizing shareholder profits only", "Preventing and detecting misconduct, investigating and disciplining, and continuous improvement", "Setting executive compensation levels", "Marketing the company's products"], ans: 1 },
  { ch: "ch2", q: "The duty of loyalty is defined as _______.", opts: ["The legal obligation to make informed and prudent decisions", "The obligation to make decisions in the best interest of the corporation and its stakeholders", "The responsibility to disclose all financial information", "The duty to protect employees from misconduct"], ans: 1 },
  { ch: "ch2", q: "Step 6 of implementing the stakeholder perspective involves _______.", opts: ["Assessing the corporate culture", "Identifying stakeholder groups", "Gaining stakeholder feedback", "Identifying resources and determining urgency"], ans: 2 },
  { ch: "ch2", q: "The Descriptive approach to stakeholder theory _______.", opts: ["Identifies ethical guidelines that dictate how firms should treat stakeholders", "Focuses on the firm's behavior and how decisions are made for stakeholder relationships", "Describes what happens if firms behave in a particular way", "Measures the degree to which a firm understands stakeholder demands"], ans: 1 },
  { ch: "ch2", q: "An interlocking directorate refers to _______.", opts: ["A board member who holds the position of both CEO and chairman", "Board members being linked to more than one company", "A board composed of only outside directors", "Directors who hold shares in the company"], ans: 1 },
  { ch: "ch2", q: "Oversight in corporate governance refers to _______.", opts: ["The process of auditing and improving organizational decisions", "A system of checks and balances that limits opportunities to deviate from ethical policies", "How closely workplace decisions align with strategic direction", "The development of formal systems of accountability"], ans: 1 },
  { ch: "ch3", q: "Sustainability is defined as _______.", opts: ["Meeting current needs without compromising the ability of future generations", "The potential for long-term well-being of the natural environment, including mutually beneficial interactions among nature and individuals", "A strategy involving stakeholder assessment to maintain the natural environment", "Socially responsible activities that create competitive advantages"], ans: 1 },
  { ch: "ch3", q: "Green marketing is defined as _______.", opts: ["Selling products with recycled packaging", "Misleading consumers into thinking products are more eco-friendly than they are", "A strategy involving stakeholder assessment to create long-term relationships while enhancing the natural environment", "Reporting sustainability metrics to stakeholders"], ans: 2 },
  { ch: "ch3", q: "Greenwashing refers to _______.", opts: ["Using only green-colored packaging", "Misleading a consumer into thinking a product is more environmentally friendly than it really is", "Washing industrial waste using natural methods", "A company's voluntary commitment to environmental causes"], ans: 1 },
  { ch: "ch3", q: "The LEED certification program recognizes _______.", opts: ["Companies with the best environmental track record", "Sustainable building practices and strategies", "Businesses that meet ISO 14000 standards", "Products that are made from recycled materials"], ans: 1 },
  { ch: "ch3", q: "ISO 14000 encourages _______.", opts: ["A comprehensive set of environmental standards for a cleaner, safer, healthier world", "Voluntary reduction of greenhouse gas emissions by governments", "National air quality standards", "Corporate governance transparency"], ans: 0 },
  { ch: "ch3", q: "Biofuels, particularly ethanol, are controversial because _______.", opts: ["They are more expensive than nuclear power", "Manufacturing them takes a lot of energy and critics argue they decrease the world's food supply", "They cannot be produced in sufficient quantities", "They are patented by large corporations"], ans: 1 },
  { ch: "ch3", q: "The Endangered Species Act _______.", opts: ["Regulates atmospheric emissions", "Protects endangered species and their habitats", "Tracks industrial chemicals produced in the US", "Focuses on reducing pollution through cost-effective changes"], ans: 1 },
  { ch: "ch3", q: "Stakeholder assessment in environmental responsibility requires _______.", opts: ["Acknowledging and actively monitoring environmental concerns of all legitimate stakeholders", "Focusing exclusively on the largest shareholders", "Implementing the cheapest environmental solutions available", "Complying only with government-mandated environmental requirements"], ans: 0 },
  { ch: "ch3", q: "Urban sprawl in environmental discussions refers to _______.", opts: ["Industrial waste disposal in urban areas", "Large-scale suburban developments that contribute to environmental concerns", "The concentration of pollution in urban centers", "Electronic waste accumulated in cities"], ans: 1 },
  { ch: "ch3", q: "Environmental Social Governance (ESG) factors are used by most businesses to _______.", opts: ["Set executive compensation", "Report air, land, and water sustainability issues", "Measure stakeholder satisfaction", "Evaluate employee performance"], ans: 1 },

  // ── ملخصات العنود — مفاهيم مضافة ──────────────────────────────────────
  // Chapter 1
  { ch: "ch1", q: "Which of the following best describes 'workplace integrity' as discussed in business ethics?", opts: ["Honesty in financial reporting only", "The pressure to compromise standards, observed misconduct, reporting misconduct, and retaliation against reports", "Following all company rules without question", "Maintaining a professional appearance at work"], ans: 1, exp: ["❌ Financial reporting honesty is part of integrity but not the full concept of workplace integrity.<br><span dir='rtl'>❌ الأمانة في التقارير المالية جزء من النزاهة لكن ليست المفهوم الكامل لنزاهة مكان العمل.</span>", "✅ Correct. Workplace integrity encompasses: the pressure to compromise organizational standards, observed misconduct, the reporting of misconduct when observed, and retaliation against reports.<br><span dir='rtl'>✅ صح — نزاهة مكان العمل تشمل: الضغط على التسوية، مشاهدة المخالفات، الإبلاغ عنها، والانتقام من المُبلِّغين.</span>", "❌ Following rules without question is compliance — not what workplace integrity encompasses.<br><span dir='rtl'>❌ اتباع القواعد دون تساؤل هو الامتثال — وليس ما تشمله نزاهة مكان العمل.</span>", "❌ Appearance is not part of the workplace integrity concept in business ethics.<br><span dir='rtl'>❌ المظهر ليس جزءًا من مفهوم نزاهة مكان العمل في أخلاقيات الأعمال.</span>"] },

  { ch: "ch1", q: "A value dilemma is defined as _______.", opts: ["A moral conflict between personal and organizational values", "Two or more beliefs or ideals in conflict with one another", "A legal issue involving conflicting regulations", "A financial trade-off between profit and ethics"], ans: 1, exp: ["❌ A value dilemma is not specifically about personal vs. organizational values — it is about beliefs or ideals in conflict.<br><span dir='rtl'>❌ معضلة القيم ليست تحديدًا عن القيم الشخصية مقابل التنظيمية — بل تتعلق بتعارض المعتقدات أو المُثل.</span>", "✅ Correct. A value dilemma = two or more beliefs or ideals in conflict with one another.<br><span dir='rtl'>✅ صح — معضلة القيم = تعارض معتقدين أو مبدأين أو أكثر مع بعضهما.</span>", "❌ Legal conflicts are not defined as value dilemmas — they are regulatory or compliance issues.<br><span dir='rtl'>❌ النزاعات القانونية لا تُعرَّف بمعضلات قيم — بل هي قضايا تنظيمية أو امتثال.</span>", "❌ Financial trade-offs relate to economic decision making, not the definition of a value dilemma.<br><span dir='rtl'>❌ المقايضات المالية تتعلق بصنع القرار الاقتصادي، وليست تعريف معضلة القيم.</span>"] },

  { ch: "ch1", q: "Which of the following is NOT one of the four factors that determine a firm's ethical culture?", opts: ["Corporate policies", "Top management's leadership on ethical issues", "The company's stock price performance", "The opportunity for unethical behavior"], ans: 2, exp: ["❌ Corporate policies ARE one of the four factors of ethical culture.<br><span dir='rtl'>❌ سياسات الشركة هي أحد العوامل الأربعة للثقافة الأخلاقية.</span>", "❌ Top management leadership IS one of the four factors that shape ethical culture.<br><span dir='rtl'>❌ قيادة الإدارة العليا هي أحد العوامل الأربعة التي تشكّل الثقافة الأخلاقية.</span>", "✅ Correct. Stock price performance is NOT one of the four factors. The four are: (1) corporate policies, (2) top management's leadership, (3) influence of coworkers, and (4) opportunity for unethical behavior.<br><span dir='rtl'>✅ صح — أداء سعر السهم ليس أحد العوامل الأربعة. العوامل الأربعة هي: السياسات، القيادة العليا، تأثير الزملاء، وفرصة السلوك غير الأخلاقي.</span>", "❌ Opportunity for unethical behavior IS one of the four factors of ethical culture.<br><span dir='rtl'>❌ فرصة السلوك غير الأخلاقي هي أحد العوامل الأربعة للثقافة الأخلاقية.</span>"] },

  { ch: "ch1", q: "Studying business ethics helps you do which of the following?", opts: ["Avoid paying taxes legally", "Identify ethical issues, recognize resolution approaches, and cope with value conflicts", "Make decisions based solely on profit maximization", "Avoid all involvement in ethical decision making"], ans: 1, exp: ["❌ Tax avoidance is not a purpose of studying business ethics.<br><span dir='rtl'>❌ تجنب الضرائب ليس هدفًا من أهداف دراسة أخلاقيات الأعمال.</span>", "✅ Correct. Studying business ethics helps you: (1) identify ethical issues, (2) recognize approaches for resolving them, (3) cope with conflicts between personal and organizational values, and (4) gain knowledge for better decisions.<br><span dir='rtl'>✅ صح — تساعدك الدراسة على: تحديد المشكلات الأخلاقية، التعرف على أساليب حلها، التعامل مع تضارب القيم، واكتساب معرفة لقرارات أفضل.</span>", "❌ Profit maximization alone contradicts the purpose of studying ethics.<br><span dir='rtl'>❌ تعظيم الربح وحده يتناقض مع هدف دراسة الأخلاقيات.</span>", "❌ The opposite is true — studying ethics increases your involvement in ethical decision making.<br><span dir='rtl'>❌ العكس هو الصحيح — دراسة الأخلاقيات تزيد انخراطك في صنع القرار الأخلاقي.</span>"] },

  // Chapter 2
  { ch: "ch2", q: "The Instrumental approach to stakeholder relationships _______.", opts: ["Prescribes how firms should treat stakeholders based on ethical guidelines", "Focuses on how decisions are actually made for stakeholder relationships", "Describes what happens to a firm if it behaves in a particular way toward stakeholders", "Measures the degree to which stakeholders influence executive pay"], ans: 2, exp: ["❌ That is the Normative approach — it prescribes ideal treatment of stakeholders.<br><span dir='rtl'>❌ هذا هو النهج المعياري — يصف المعاملة المثالية لأصحاب المصلحة.</span>", "❌ That is the Descriptive approach — it focuses on how decisions are actually made.<br><span dir='rtl'>❌ هذا هو النهج الوصفي — يركز على كيفية اتخاذ القرارات فعليًا.</span>", "✅ Correct. The Instrumental approach describes the consequences — what happens to the firm if it treats stakeholders in a particular way (e.g., better treatment → better business outcomes).<br><span dir='rtl'>✅ صح — النهج الأداتي (التطبيقي) يصف النتائج — ماذا يحدث للشركة إذا تصرفت بطريقة معينة تجاه أصحاب المصلحة.</span>", "❌ Executive pay is related to compensation policy, not the instrumental stakeholder approach.<br><span dir='rtl'>❌ أجور المديرين تتعلق بسياسة التعويض، وليست بالنهج الأداتي.</span>"] },

  { ch: "ch2", q: "Executive compensation shifted from internal equity to external equity. What was the main consequence of this shift?", opts: ["Executive pay became more tied to company performance", "Executive compensation increased significantly as CEOs compared their pay to peers at other firms", "Executives received less pay overall", "Employee wages increased proportionally"], ans: 1, exp: ["❌ The shift to external equity moved compensation AWAY from performance-based metrics toward peer comparison.<br><span dir='rtl'>❌ التحول إلى العدالة الخارجية أبعد التعويض عن مقاييس الأداء باتجاه مقارنة الأقران.</span>", "✅ Correct. When executive pay shifted to external equity (comparing to what CEOs at other companies earn), compensation rose dramatically as executives benchmarked against the highest-paid peers.<br><span dir='rtl'>✅ صح — عندما تحول التعويض إلى العدالة الخارجية (المقارنة بأجور الرؤساء التنفيذيين في شركات أخرى)، ارتفعت التعويضات بشكل كبير.</span>", "❌ The effect was the opposite — executive pay increased, not decreased.<br><span dir='rtl'>❌ الأثر كان عكسيًا — تعويضات المديرين ارتفعت، لم تنخفض.</span>", "❌ Employee wages did not increase proportionally — the ratio of executive to median employee pay actually widened.<br><span dir='rtl'>❌ أجور الموظفين لم ترتفع بشكل متناسب — بل اتسعت نسبة التعويض بين المديرين ومتوسط الموظفين.</span>"] },

  { ch: "ch2", q: "A corporation's image and intangible asset with tangible value is referred to as its _______.", opts: ["Brand identity", "Reputation", "Corporate citizenship", "Market share"], ans: 1, exp: ["❌ Brand identity is the visual and messaging elements of a brand — not the same as reputation.<br><span dir='rtl'>❌ هوية العلامة التجارية هي عناصرها البصرية والرسائلية — وليست السمعة.</span>", "✅ Correct. Reputation = a corporation's image and an intangible asset with tangible value. A good reputation builds trust and financial performance.<br><span dir='rtl'>✅ صح — السمعة = صورة الشركة وأصل غير ملموس ذو قيمة ملموسة. السمعة الجيدة تبني الثقة والأداء المالي.</span>", "❌ Corporate citizenship refers to meeting economic, legal, ethical, and philanthropic responsibilities — not just the firm's image.<br><span dir='rtl'>❌ المواطنة الشركاتية تشير إلى تلبية المسؤوليات الاقتصادية والقانونية والأخلاقية والخيرية، وليست فقط صورة الشركة.</span>", "❌ Market share is a financial/competitive metric — not the definition of reputation.<br><span dir='rtl'>❌ الحصة السوقية مقياس مالي/تنافسي — وليست تعريف السمعة.</span>"] },

  { ch: "ch2", q: "The shareholder model of corporate governance focuses primarily on _______.", opts: ["Balancing the interests of all stakeholders equally", "Developing and improving formal systems for maintaining performance accountability between top management and shareholders", "Maximizing philanthropic contributions to society", "Ensuring environmental sustainability goals are met"], ans: 1, exp: ["❌ Balancing all stakeholders equally is the stakeholder model, not the shareholder model.<br><span dir='rtl'>❌ تحقيق التوازن بين جميع أصحاب المصلحة هو نموذج أصحاب المصلحة، وليس نموذج المساهمين.</span>", "✅ Correct. The shareholder model of corporate governance focuses on maximizing shareholder wealth and developing formal accountability systems between top management and shareholders.<br><span dir='rtl'>✅ صح — نموذج المساهمين في حوكمة الشركات يركز على تعظيم ثروة المساهمين وتطوير أنظمة مساءلة رسمية بين الإدارة العليا والمساهمين.</span>", "❌ Philanthropic contributions are part of Carroll's pyramid, not the focus of the shareholder governance model.<br><span dir='rtl'>❌ المساهمات الخيرية جزء من هرم Carroll، وليست محور نموذج حوكمة المساهمين.</span>", "❌ Environmental sustainability is part of ESG and the stakeholder model — not the shareholder model's primary focus.<br><span dir='rtl'>❌ الاستدامة البيئية جزء من ESG ونموذج أصحاب المصلحة — وليس المحور الأساسي لنموذج المساهمين.</span>"] },

  { ch: "ch2", q: "In Step 5 of implementing the stakeholder perspective, a challenge is considered 'urgent' when _______.", opts: ["It involves financial losses exceeding a set threshold", "The challenge is viewed as significant AND stakeholder pressures on the issue are expected to be high", "Government regulations require immediate action", "The board of directors votes to prioritize it"], ans: 1, exp: ["❌ Financial losses are a consideration but not the definition of urgency in stakeholder implementation.<br><span dir='rtl'>❌ الخسائر المالية اعتبار لكن ليست تعريف الإلحاح في تنفيذ منظور أصحاب المصلحة.</span>", "✅ Correct. A challenge is urgent when: (1) it is viewed as significant AND (2) stakeholder pressures on the issue can be expected to be high. Both criteria must be present.<br><span dir='rtl'>✅ صح — التحدي يُعتبر ملحًا عندما: (1) يُنظر إليه على أنه كبير و(2) يُتوقع أن تكون ضغوط أصحاب المصلحة عليه عالية. يجب توافر كلا المعيارين.</span>", "❌ Government regulations create compliance urgency but that is separate from the stakeholder perspective urgency definition.<br><span dir='rtl'>❌ اللوائح الحكومية تخلق إلحاحًا للامتثال لكن ذلك منفصل عن تعريف الإلحاح في منظور أصحاب المصلحة.</span>", "❌ Board voting is a governance mechanism, not what defines stakeholder urgency.<br><span dir='rtl'>❌ تصويت مجلس الإدارة آلية حوكمة، وليس ما يُعرِّف إلحاح أصحاب المصلحة.</span>"] },

  // Chapter 3
  { ch: "ch3", q: "Air pollution typically arises from three different sources. Which of the following is an example of a NATURAL source?", opts: ["Factories and power plants", "Cars and trucks", "Windblown dust and volcanic eruptions", "Airplanes and trains"], ans: 2, exp: ["❌ Factories and power plants are stationary sources — man-made, not natural.<br><span dir='rtl'>❌ المصانع ومحطات الطاقة مصادر ثابتة — من صنع الإنسان، وليست طبيعية.</span>", "❌ Cars and trucks are mobile sources — man-made, not natural.<br><span dir='rtl'>❌ السيارات والشاحنات مصادر متحركة — من صنع الإنسان، وليست طبيعية.</span>", "✅ Correct. The three sources of air pollution are: (1) Stationary (factories, power plants), (2) Mobile (cars, trucks, planes), and (3) Natural (windblown dust, volcanic eruptions).<br><span dir='rtl'>✅ صح — المصادر الثلاثة لتلوث الهواء: (1) الثابتة (المصانع، محطات الطاقة)، (2) المتحركة (السيارات، الشاحنات)، (3) الطبيعية (الغبار المتطاير والانفجارات البركانية).</span>", "❌ Airplanes and trains are mobile sources — man-made, not natural sources of air pollution.<br><span dir='rtl'>❌ الطائرات والقطارات مصادر متحركة — من صنع الإنسان، وليست مصادر طبيعية لتلوث الهواء.</span>"] },

  { ch: "ch3", q: "The Doha Amendment to the Kyoto Protocol _______.", opts: ["Created a new cap-and-trade system", "Was an extension that focused on ensuring implementation agreements of the Kyoto Protocol", "Replaced the Kyoto Protocol entirely with stricter targets", "Required developing nations to reduce emissions for the first time"], ans: 1, exp: ["❌ Cap-and-trade systems exist separately and were not created by the Doha Amendment.<br><span dir='rtl'>❌ أنظمة سقف الانبعاثات والتجارة موجودة بشكل منفصل ولم يُنشئها تعديل الدوحة.</span>", "✅ Correct. The Doha Amendment was an extension of the Kyoto Protocol that focused on ensuring the implementation of existing agreements.<br><span dir='rtl'>✅ صح — تعديل الدوحة كان امتدادًا لبروتوكول كيوتو ركّز على ضمان تنفيذ الاتفاقيات القائمة.</span>", "❌ The Doha Amendment extended the Protocol — it did not replace it entirely.<br><span dir='rtl'>❌ تعديل الدوحة مدّد البروتوكول — ولم يحل محله كليًا.</span>", "❌ Developing nations' obligations were a point of contention but not specifically what the Doha Amendment addressed.<br><span dir='rtl'>❌ التزامات الدول النامية كانت نقطة خلافية لكن ليست ما عالجه تعديل الدوحة تحديدًا.</span>"] },

  { ch: "ch3", q: "Better environmental performance can increase revenue for a firm in which of the following ways?", opts: ["By reducing the number of employees needed", "Through better market access, product differentiation, and sale of pollution-control technology", "By eliminating all environmental regulations", "By outsourcing production to countries with fewer environmental standards"], ans: 1, exp: ["❌ Reducing employees is a cost-cutting measure, not a revenue generation strategy from better environmental performance.<br><span dir='rtl'>❌ تقليص الموظفين إجراء لخفض التكاليف، وليس استراتيجية لزيادة الإيرادات من الأداء البيئي.</span>", "✅ Correct. The three ways better environmental performance increases revenue: (1) Better access to certain markets, (2) Differentiation of products, (3) Sale of pollution-control technology.<br><span dir='rtl'>✅ صح — الطرق الثلاث التي يزيد بها الأداء البيئي الإيرادات: (1) تحسين الوصول إلى أسواق معينة، (2) تمييز المنتجات، (3) بيع تقنيات التحكم في التلوث.</span>", "❌ Eliminating regulations would increase short-term costs and legal risks — not a revenue strategy.<br><span dir='rtl'>❌ إلغاء اللوائح يزيد التكاليف قصيرة المدى والمخاطر القانونية — وليس استراتيجية إيرادات.</span>", "❌ Outsourcing to avoid environmental standards is the opposite of better environmental performance.<br><span dir='rtl'>❌ الاستعانة بمصادر خارجية لتجنب المعايير البيئية هو عكس تحسين الأداء البيئي.</span>"] },

  { ch: "ch3", q: "A company that 'views the environment as an opportunity to advance the business strategy' and 'conducts environmental audits' demonstrates which level of environmental commitment?", opts: ["Low commitment", "Medium commitment", "High commitment", "Regulatory compliance only"], ans: 2, exp: ["❌ Low commitment companies deal only with existing problems and make limited plans.<br><span dir='rtl'>❌ الشركات ذات الالتزام المنخفض تتعامل فقط مع المشاكل القائمة وتضع خططًا محدودة.</span>", "❌ Medium commitment companies comply with laws and address PR concerns but view the environment as a threat, not an opportunity.<br><span dir='rtl'>❌ الشركات ذات الالتزام المتوسط تمتثل للقوانين وتعالج مخاوف العلاقات العامة لكنها ترى البيئة تهديدًا، لا فرصة.</span>", "✅ Correct. High environmental commitment = views environment as OPPORTUNITY, has strategic programs, consults stakeholders, and conducts environmental audits with internationally recognized standards.<br><span dir='rtl'>✅ صح — الالتزام البيئي العالي = ترى البيئة فرصة، لديها برامج استراتيجية، تستشير أصحاب المصلحة، وتُجري تدقيقات بيئية وفق معايير دولية.</span>", "❌ Regulatory compliance only is characteristic of low or medium commitment, not high.<br><span dir='rtl'>❌ الامتثال التنظيمي فقط سمة من الالتزام المنخفض أو المتوسط، وليس العالي.</span>"] }
];

// ── FLASH CARD BANK ────────────────────────────
const flashCards = [

  // ════════════════ Chapter 1 — Business Ethics ════════════════

  { ch: "ch1", front: "Business Ethics", back: "Comprises organizational principles, values, and norms that may originate from individuals, organizational statements, or from the legal system that primarily guide individual and group behavior in business. | المبادئ والقيم والمعايير التنظيمية التي توجّه السلوك الفردي والجماعي في الأعمال." },

  { ch: "ch1", front: "Morals vs. Ethics", back: "Morals: a person's PERSONAL philosophies about what is right or wrong — relates to the individual alone.\nEthics: behavior or decisions made within a GROUP's values — right/wrong is defined by the group, not the individual.\nالأخلاق الفردية (شخصية) ← الأخلاقيات (جماعية — يحددها المجتمع/الشركة)." },

  { ch: "ch1", front: "Principles", back: "Specific and pervasive boundaries for behavior that should NOT be violated. Often become the basis for rules (e.g., human rights, freedom of speech). | حدود سلوكية محددة وشاملة لا ينبغي انتهاكها." },

  { ch: "ch1", front: "Values", back: "Enduring beliefs and ideals that are socially enforced. | المعتقدات والمُثُل الدائمة التي يُطبِّقها المجتمع." },

  { ch: "ch1", front: "Moral Dilemma", back: "A situation where two or more MORALS are in conflict with one another. | تعارض معيارين أخلاقيين أو أكثر." },

  { ch: "ch1", front: "Value Dilemma", back: "A situation where two or more VALUES or beliefs are in conflict with one another. | تعارض قيمتين أو أكثر مع بعضهما." },

  { ch: "ch1", front: "Ethical Culture", back: "Acceptable behavior as defined by the company and industry. Reflects the integrity of decisions made.\n4 factors that shape it: (1) Corporate policies, (2) Top management leadership, (3) Coworker influence, (4) Opportunity for unethical behavior.\nالثقافة الأخلاقية تُشكّلها 4 عوامل: السياسات · قيادة الإدارة · الزملاء · الفرصة." },

  { ch: "ch1", front: "History of Business Ethics", back: "• Before the 1960s — ethical issues in business were discussed in THEOLOGY & PHILOSOPHY domains.\n• 1920s — major ethical concern was the LIVING WAGE.\n• 1960s — rise of consumerism shaped business ethics as a formal field.\nقبل الستينيات: أُطر دينية/فلسفية · عشرينيات: الأجر المعيشي · ستينيات: حركة المستهلكين." },

  { ch: "ch1", front: "Consumerism", back: "Activities undertaken by independent individuals, groups, and organizations to protect their rights as consumers. Rose significantly in the 1960s. | حركة حماية المستهلك — نشطت في الستينيات." },

  { ch: "ch1", front: "Workplace Integrity", back: "Encompasses four elements: (1) Pressure to compromise organizational standards, (2) Observed misconduct, (3) Reporting of misconduct, (4) Retaliation against those who report. | نزاهة بيئة العمل: الضغط · المشاهدة · الإبلاغ · الانتقام." },

  { ch: "ch1", front: "Potential Risk Areas", back: "Misuse of company resources, abusive behavior, harassment, accounting fraud, conflicts of interest, defective products, bribery, product knock-offs, and employee theft. | إساءة الموارد · التحرش · الاحتيال المحاسبي · الرشوة · المنتجات المعيبة والمقلدة · السرقة." },

  { ch: "ch1", front: "4 Reasons to Study Business Ethics", back: "1. Identify ethical issues when they arise.\n2. Recognize approaches for resolving them.\n3. Cope with conflicts between personal and organizational values.\n4. Gain knowledge to make more ethical decisions.\nتحديد المشكلات · حلها · التعامل مع تضارب القيم · اتخاذ قرارات أفضل." },

  { ch: "ch1", front: "Benefits of Business Ethics", back: "Four key benefits:\n(1) Employee Commitment — willingness to sacrifice for the organization.\n(2) Investor Loyalty — foundation for efficiency and profits.\n(3) Customer Satisfaction — increases trust.\n(4) Profits — ethical conduct leads to better performance.\nالالتزام · الولاء · الرضا · الأرباح." },

  { ch: "ch1", front: "Pros & Cons of Business Ethics", back: "PROS: employee commitment, customer satisfaction, profits, efficiency, reduced lawsuits.\nCONS: eats into revenues/sales/profitability; does NOT maximize shareholder benefits.\nإيجابيات: الالتزام والرضا والأرباح. سلبيات: تأكل الإيرادات ولا تعظّم فوائد المساهمين." },

  { ch: "ch1", front: "DII — Defense Industry Initiative (1986)", back: "Established in 1986 by major defense contractors. The FIRST major corporate initiative to establish ethics best practices. Its six principles became the FOUNDATION for the FSGO. | أُسست 1986 من مقاولي الدفاع — أول مبادرة شركاتية للأخلاقيات — أساس الـ FSGO." },

  { ch: "ch1", front: "FSGO — Federal Sentencing Guidelines (1991)", back: "Enacted in 1991. Uses a 'carrot and stick' approach — REWARDS firms that proactively build ethics programs with reduced penalties; PUNISHES firms that don't. | صدر 1991، يكافئ الشركات ذات برامج الأخلاقيات بعقوبات مخففة (جزرة وعصا)." },

  { ch: "ch1", front: "SOX — Sarbanes-Oxley Act (2002)", back: "Created an accounting oversight board. Required corporations to establish codes of ethics for financial reporting. Made SECURITIES FRAUD a criminal offense. | أنشأ مجلس مراقبة محاسبي وجعل الاحتيال في الأوراق المالية جريمة جنائية." },

  { ch: "ch1", front: "FCPA — Foreign Corrupt Practices Act (1977)", back: "Makes it ILLEGAL for U.S. persons and companies to bribe foreign government officials to obtain or retain business. First major U.S. law on international business ethics. | يُجرِّم رشوة المسؤولين الأجانب من قِبَل شركات أمريكية — أول قانون دولي للأخلاقيات." },

  { ch: "ch1", front: "ISO 19600", back: "A global compliance management standard that addresses risks, legal requirements, and stakeholder needs. Voluntary — not legally binding. | معيار دولي طوعي لإدارة الامتثال يعالج المخاطر والمتطلبات القانونية." },

  { ch: "ch1", front: "UN Global Compact", back: "A set of 10 principles concerning human rights, labor, the environment, and anti-corruption. Purpose: create openness and alignment among business, government, society, labor, and the United Nations. | 10 مبادئ: حقوق الإنسان · العمل · البيئة · مكافحة الفساد." },

  // ════════════════ Chapter 2 — Stakeholders & Social Responsibility ════════════════

  { ch: "ch2", front: "Stakeholders", back: "Those who have a 'stake' or claim in some aspect of a company's products, operations, markets, industry, and outcomes. The relationship is TWO-WAY: businesses influence stakeholders AND stakeholders influence businesses. | العلاقة في الاتجاهين — الشركة تؤثر في أصحاب المصلحة والعكس." },

  { ch: "ch2", front: "Primary vs. Secondary Stakeholders", back: "Primary: DIRECT economic relationship — employees, customers, shareholders, suppliers, communities. ESSENTIAL to survival.\nSecondary: INDIRECT — government, media, competitors, NGOs. Less essential but still influential.\nأولية (مباشرة، ضرورية للبقاء) ← ثانوية (غير مباشرة، مؤثرة)." },

  { ch: "ch2", front: "3 Approaches to Stakeholder Relationships", back: "Normative: identifies ethical guidelines for HOW firms SHOULD treat stakeholders.\nDescriptive: focuses on how decisions ARE MADE for stakeholder relationships.\nInstrumental: describes WHAT HAPPENS to a firm if it behaves in a particular way toward stakeholders.\nمعياري (ينبغي) · وصفي (ما يحدث) · أداتي (النتائج)." },

  { ch: "ch2", front: "Stakeholder Interaction Model", back: "Recognizes multiple stakeholders and explicitly acknowledges that DIALOGUE exists between a firm's INTERNAL (employees, management) and EXTERNAL (customers, communities, regulators) environments. | يُقرّ بوجود حوار بين البيئة الداخلية والخارجية للشركة." },

  { ch: "ch2", front: "Stakeholder Orientation", back: "The degree to which a firm understands and addresses stakeholder demands. Includes: (1) generating data about stakeholders, (2) distributing it throughout the firm, (3) responding to it. | مدى فهم الشركة لمتطلبات أصحاب المصلحة والاستجابة لها." },

  { ch: "ch2", front: "Social Responsibility", back: "An organization's obligation to MAXIMIZE its positive impact on stakeholders and MINIMIZE its negative impact.\nFour levels (Carroll's Pyramid): Economic → Legal → Ethical → Philanthropic.\nتعظيم الأثر الإيجابي وتقليل السلبي. أربعة مستويات." },

  { ch: "ch2", front: "Carroll's CSR Pyramid", back: "Four levels from bottom to top:\n1) Economic — be PROFITABLE (most fundamental)\n2) Legal — OBEY the law\n3) Ethical — do what is RIGHT beyond the law\n4) Philanthropic — be a GOOD CORPORATE CITIZEN (give back)\nهرم: اقتصادي ← قانوني ← أخلاقي ← خيري." },

  { ch: "ch2", front: "Corporate Citizenship", back: "The extent to which businesses strategically meet the economic, legal, ethical, and philanthropic responsibilities placed on them by stakeholders.\nFour dimensions: (1) sustained economic performance, (2) rigorous compliance, (3) ethical actions beyond law, (4) voluntary contributions.\nالمواطنة المؤسسية: الوفاء الاستراتيجي بالمسؤوليات الأربع." },

  { ch: "ch2", front: "Reputation", back: "A corporation's image and an INTANGIBLE ASSET with TANGIBLE value. Can increase or decrease based on how stakeholders perceive the firm's conduct. | صورة الشركة — أصل غير ملموس بقيمة ملموسة حقيقية." },

  { ch: "ch2", front: "Corporate Governance", back: "The development of formal systems of accountability, oversight, and control.\nCore functions: (1) Preventing & detecting misconduct, (2) Investigating & disciplining violations, (3) Recovery & continuous improvement.\nمنظومة رسمية من المساءلة والرقابة والتحكم." },

  { ch: "ch2", front: "Accountability, Oversight & Control", back: "Accountability: workplace decisions align with the firm's strategic direction and ethical/legal standards.\nOversight: system of checks and balances limiting deviation from policies.\nControl: process of auditing and improving organizational decisions.\nمساءلة · رقابة · تحكم — ثلاثة أعمدة لحوكمة الشركات." },

  { ch: "ch2", front: "Shareholder vs. Stakeholder Model of Governance", back: "Shareholder Model: MAXIMIZE WEALTH for investors/owners — accountability runs between management and shareholders.\nStakeholder Model: BROADER view — considers ALL stakeholder welfare alongside corporate needs.\nنموذج المساهم (الربح أولًا) ← نموذج أصحاب المصلحة (رعاية الجميع)." },

  { ch: "ch2", front: "Fiduciaries", back: "Persons placed in positions of TRUST who act on behalf of the best interests of the organization. Examples: board directors and corporate officers.\nBound by: Duty of Care + Duty of Loyalty.\nأشخاص في مناصب ثقة يتصرفون لمصلحة المنظمة." },

  { ch: "ch2", front: "Duty of Care vs. Duty of Loyalty", back: "Duty of Care (Diligence): make INFORMED and PRUDENT decisions; avoid causing harm to others.\nDuty of Loyalty: make decisions in the BEST INTEREST of the corporation and its stakeholders — no self-interest.\nالعناية الواجبة: قرارات مدروسة · الولاء: قرارات تخدم الشركة لا الفرد." },

  { ch: "ch2", front: "Executive Compensation", back: "Shifted from INTERNAL equity (how executive pay relates to employee pay) to EXTERNAL equity (what CEOs at other companies earn), causing significant pay increases.\nStakeholders support high compensation ONLY when linked to strong performance.\nتحوّل من عدالة داخلية إلى خارجية — سبّب ارتفاعًا كبيرًا في رواتب المديرين." },

  { ch: "ch2", front: "Interlocking Directorate", back: "Board members linked to MORE THAN ONE company. LEGAL unless it involves a DIRECT COMPETITOR. | عضو مجلس الإدارة المرتبط بأكثر من شركة — قانوني إلا مع المنافس المباشر." },

  { ch: "ch2", front: "Adam Smith & Milton Friedman", back: "Adam Smith (capitalism founder): each individual must produce for the COMMON GOOD — the 'invisible hand' guides markets.\nMilton Friedman: basic mission of business is to PRODUCE GOODS/SERVICES AT A PROFIT; the market deters wrongdoing better than laws.\nسميث: مصلحة الفرد تخدم المجتمع · فريدمان: مهمة الأعمال الربح فقط." },

  { ch: "ch2", front: "Dodge v. Ford (1919)", back: "Landmark court case: ruled that a corporation must operate primarily for the benefit of its SHAREHOLDERS, NOT for charitable or social purposes. Established the SHAREHOLDER PRIMACY doctrine. | قضية بارزة: الشركة للمساهمين أولًا — أرست مبدأ أولوية المساهمين." },

  { ch: "ch2", front: "6 Steps — Implementing Stakeholder Perspective", back: "1. Assess corporate culture\n2. Identify stakeholder groups\n3. Identify stakeholder issues\n4. Assess organizational commitment to social responsibility\n5. Identify resources and determine urgency\n6. Gain stakeholder feedback\nست خطوات لتطبيق منظور أصحاب المصلحة." },

  // ════════════════ Chapter 3 — Sustainability ════════════════

  { ch: "ch3", front: "Sustainability", back: "The potential for the long-term well-being of the natural environment, including all biological entities, as well as mutually beneficial interactions among nature and individuals, organizations, and business strategies. | الرفاه طويل الأمد للبيئة مع تحقيق مصالح متبادلة بين الطبيعة والأعمال." },

  { ch: "ch3", front: "Sustainable Development", back: "Meeting the needs of the PRESENT without compromising the ability of FUTURE GENERATIONS to meet their own needs. Emphasis on the natural environment. | تلبية احتياجات الحاضر دون المساس بقدرة الأجيال القادمة." },

  { ch: "ch3", front: "Triple Bottom Line (TBL)", back: "A sustainability framework measuring performance across three dimensions:\n• People — social equity\n• Planet — environmental stewardship\n• Profit — economic performance\nإطار يقيس الناس + الكوكب + الربح." },

  { ch: "ch3", front: "Greenwashing", back: "Misleading a consumer into thinking a good or service is MORE environmentally friendly than it really is. | تضليل المستهلك بادعاء صداقة بيئية مبالغ فيها." },

  { ch: "ch3", front: "Green Marketing", back: "A strategy involving stakeholder assessment to create meaningful long-term relationships with customers while MAINTAINING, SUPPORTING, and ENHANCING the natural environment. | استراتيجية تسويقية تُعزز البيئة الطبيعية وتحافظ عليها." },

  { ch: "ch3", front: "ESG", back: "Environmental, Social, Governance. A framework used by most businesses to REPORT air, land, and water sustainability issues and evaluate firm performance in these areas. | إطار تقارير: بيئي + اجتماعي + حوكمة." },

  { ch: "ch3", front: "3 Sources of Air Pollution", back: "1) Stationary — factories, power plants\n2) Mobile — cars, trucks, planes, trains\n3) Natural — windblown dust, volcanic eruptions\nثابتة + متحركة + طبيعية." },

  { ch: "ch3", front: "Acid Rain", back: "Caused by nitrous oxides and sulfur dioxides exposed to air and rain. Result of STATIONARY and MOBILE sources of air pollution. | ناتجة عن أكاسيد النيتروجين والكبريت من المصادر الثابتة والمتحركة." },

  { ch: "ch3", front: "Kyoto Protocol & Doha Amendment", back: "Kyoto Protocol: international treaty to curb greenhouse gas emissions — countries VOLUNTARILY reduce national outputs.\nDoha Amendment: extension of Kyoto Protocol focused on ensuring IMPLEMENTATION of existing climate agreements.\nكيوتو: تقليل طوعي للانبعاثات · دوحة: ضمان تنفيذ الاتفاقيات." },

  { ch: "ch3", front: "Cap-and-Trade", back: "A market-based environmental policy that sets a CAP (limit) on total carbon emissions and allows companies to BUY/SELL emission allowances. Designed to reduce greenhouse gases cost-effectively. | سقف للانبعاثات + تداولها في السوق." },

  { ch: "ch3", front: "EPA — Environmental Protection Agency", back: "U.S. government agency. Mission: 'protect human health and the environment.' The MOST INFLUENTIAL regulatory agency dealing with environmental issues in the U.S. | الوكالة الأمريكية لحماية البيئة — الأكثر تأثيرًا في تطبيق التشريعات البيئية." },

  { ch: "ch3", front: "Key Environmental Laws", back: "• Clean Air Act — regulates atmospheric emissions, national air quality standards\n• Clean Water Act — protects navigable waters from pollution\n• Toxic Substances Control Act — EPA tracks 75,000 industrial chemicals\n• Pollution Prevention Act — cost-effective changes in production\n• Endangered Species Act — protects endangered species & habitats\nخمسة قوانين بيئية رئيسية." },

  { ch: "ch3", front: "ISO 14000", back: "A comprehensive set of environmental standards that encourage a cleaner, safer, and healthier world. Developed by the International Organization for Standardization. | مجموعة شاملة من المعايير البيئية الدولية." },

  { ch: "ch3", front: "LEED Certification", back: "Leadership in Energy & Environmental Design. A globally recognized certification program that recognizes SUSTAINABLE, ENERGY-EFFICIENT building practices and strategies. | شهادة القيادة في الطاقة والتصميم البيئي للمباني المستدامة." },

  { ch: "ch3", front: "Deforestation", back: "Destruction of forests (which cover >30% of the planet). Caused predominantly by BEEF, SOY, PALM OIL, and WOOD PRODUCTS industries. | إزالة الغابات (أكثر من 30% من الكوكب) — بسبب اللحوم وفول الصويا وزيت النخيل والخشب." },

  { ch: "ch3", front: "Rachel Carson — Silent Spring", back: "Rachel Carson's book addressed the INDISCRIMINATE USE OF PESTICIDES and helped SPARK THE MODERN ENVIRONMENTAL MOVEMENT. | كتاب 'الربيع الصامت' فضح الاستخدام العشوائي للمبيدات وأشعل الحركة البيئية الحديثة." },

  { ch: "ch3", front: "GM Organisms & Seeds", back: "Genetically Modified organisms: plant/animal DNA manipulated to produce desired effects (pest resistance, drought resistance, higher yield).\nKey fact: GM seeds are PATENTED — farmers CANNOT keep harvested seed and must purchase new seeds each year.\nالبذور المعدلة وراثيًا مُسجَّلة ببراءة اختراع — لا يمكن للمزارعين الاحتفاظ بها." },

  { ch: "ch3", front: "Hydropower", back: "The LARGEST form of renewable energy. Uses moving water to generate electricity.\nPros: decreases greenhouse gas emissions and air pollution.\nCons: destroys wildlife/human habitats; disrupts aquatic life cycles.\nأكبر مصدر للطاقة المتجددة — فوائد بيئية لكن يضر بالموائل الطبيعية." },

  { ch: "ch3", front: "6 Alternative Energy Sources", back: "1) Wind — could meet 20% of U.S. energy needs\n2) Geothermal — Earth's natural heat (expensive, limited locations)\n3) Solar — 100% renewable but expensive and inefficient\n4) Nuclear — pollution-free but dangerous waste\n5) Biofuels/Ethanol — controversial, may increase food prices\n6) Hydropower — LARGEST renewable, but harms habitats\nستة مصادر طاقة بديلة." },

  { ch: "ch3", front: "3 Ways Environmental Performance Increases Revenue", back: "1) Better ACCESS to certain markets\n2) DIFFERENTIATION of products\n3) SALE of pollution-control technology\nثلاث طرق لزيادة الإيرادات عبر الأداء البيئي." },

];

// ── QUIZ STATE ────────────────────────────────
let quizQs = [], quizIdx = 0, quizCorrect = 0, quizWrong = 0, quizAnswered = false;
let quizTimeLimit = 0, quizTimeRemaining = 0, quizTimerInt = null, quizStartTime = null;
let mockQs = [], mockIdx = 0, mockCorrect = 0, mockWrong = 0, mockAnswers = [];
let mockTimeLimit = 1800, mockTimeRemaining = 1800, mockTimerInt = null;
let currentFlashCards = [], fcIdx = 0, fcMastered = [], fcQueue = [];

// ── STREAK & STATS ────────────────────────────
let streakData = JSON.parse(localStorage.getItem('bus214_streak') || '{"count":0,"lastDate":""}');
let bestScores = JSON.parse(localStorage.getItem('bus214_bestScores') || '{}');
let totalQuizzes = parseInt(localStorage.getItem('bus214_totalQuizzes') || '0');
let totalCorrect = parseInt(localStorage.getItem('bus214_totalCorrect') || '0');
let totalWrong   = parseInt(localStorage.getItem('bus214_totalWrong')   || '0');

function updateStreak() {
  const today = new Date().toISOString().split('T')[0];
  if (streakData.lastDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  if (streakData.lastDate === yesterday) {
    streakData.count++;
  } else {
    streakData.count = 1;
  }
  streakData.lastDate = today;
  localStorage.setItem('bus214_streak', JSON.stringify(streakData));
}

// ── NAVIGATION ────────────────────────────────
function showPage(id) {
  // Clear any running quiz/mock timers and lockdown modes
  if (typeof quizTimerInt !== 'undefined') clearInterval(quizTimerInt);
  if (typeof mockTimerInt !== 'undefined') clearInterval(mockTimerInt);
  document.body.classList.remove('quiz-mode', 'mock-mode');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link, .bottom-nav-item').forEach(l => l.classList.remove('active'));
  const page = document.getElementById(id);
  if (page) { page.classList.add('active'); window.scrollTo(0,0); }
  // Refresh scroll reveal for newly visible page
  if (typeof window.refreshScrollReveal === 'function') setTimeout(window.refreshScrollReveal, 50);
  document.querySelectorAll(`[data-page="${id}"]`).forEach(l => l.classList.add('active'));
  if (id === 'page-dashboard') renderDashboard();
  if (id === 'page-quiz') { renderMasteryBadges(); if (typeof showQuizResumeBanner === 'function') showQuizResumeBanner(); }
  if (id === 'page-mock' && typeof showMockResumeBanner === 'function') showMockResumeBanner();
  if (id === 'page-wrong-review' && typeof renderWrongReview === 'function') renderWrongReview();
  if (id === 'page-testbank' && typeof tbShowSetup === 'function') tbShowSetup();
  if (id === 'page-before-exam' && typeof initBeforeExam === 'function') initBeforeExam();
  if (id === 'page-past-exams' && typeof peShowSetup === 'function') peShowSetup();
  // Restore user highlights + notes + drawings on chapter pages
  if (typeof restoreHighlights === 'function') setTimeout(function(){ restoreHighlights(id); }, 50);
  if (typeof restoreNotes === 'function') setTimeout(function(){ restoreNotes(id); }, 50);
  // Drawings: always turn off draw mode when navigating, then restore
  if (drawState && drawState.active) toggleDrawMode();
  if (typeof restoreDrawings === 'function') setTimeout(function(){ restoreDrawings(id); }, 100);
  // Sync mobile bottom bar active state
  const mobMap = {
    'page-home': 'mob-btn-home',
    'page-quiz': 'mob-btn-quiz',
    'page-flash': 'mob-btn-flash',
    'page-mock': 'mob-btn-mock'
  };
  document.querySelectorAll('.mob-bar-btn').forEach(b => b.classList.remove('active'));
  const mobBtn = mobMap[id] ? document.getElementById(mobMap[id]) : null;
  if (mobBtn) mobBtn.classList.add('active');
}

function setMobActive(id) {
  document.querySelectorAll('.mob-bar-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(id);
  if (btn) btn.classList.add('active');
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main-content');
  const toggle = document.getElementById('sidebar-toggle');
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('show');
  } else {
    sidebar.classList.toggle('closed');
    if (main) main.classList.toggle('expanded');
  }
  if (toggle) {
    const isOpen = sidebar.classList.contains('open') || (window.innerWidth > 768 && !sidebar.classList.contains('closed'));
    toggle.innerHTML = isOpen
      ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
      : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  }
}

// ── DARK MODE ────────────────────────────────
const SVG_MOON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
const SVG_SUN = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
const SVG_MOON_20 = SVG_MOON.replace(/width="16"/g,'width="20"').replace(/height="16"/g,'height="20"');
const SVG_SUN_20 = SVG_SUN.replace(/width="16"/g,'width="20"').replace(/height="16"/g,'height="20"');

function setHtmlBg(isDark) {
  document.documentElement.style.backgroundColor = isDark ? '#0B1120' : '#EFF6FF';
  const tc = document.querySelector('meta[name="theme-color"]');
  if (tc) tc.setAttribute('content', isDark ? '#0B1120' : '#2563EB');
}
function initDarkMode() {
  if (localStorage.getItem('bus214_dark') === '1') {
    document.body.classList.add('dark');
    setHtmlBg(true);
    const btn = document.getElementById('dark-btn');
    if (btn) btn.innerHTML = SVG_SUN + ' Light Mode';
    const floatBtn = document.getElementById('dark-btn-float');
    if (floatBtn) floatBtn.innerHTML = SVG_SUN_20;
  } else {
    setHtmlBg(false);
  }
}
function toggleDark() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  setHtmlBg(isDark);
  localStorage.setItem('bus214_dark', isDark ? '1' : '0');
  const btn = document.getElementById('dark-btn');
  if (btn) btn.innerHTML = isDark ? SVG_SUN + ' Light Mode' : SVG_MOON + ' Dark Mode';
  const floatBtn = document.getElementById('dark-btn-float');
  if (floatBtn) floatBtn.innerHTML = isDark ? SVG_SUN_20 : SVG_MOON_20;
}

// ── ARABIC TOGGLE ────────────────────────────
function toggleArabic() {
  const hidden = document.body.classList.toggle('hide-arabic');
  localStorage.setItem('bus214_ar_hidden', hidden ? '1' : '0');
  const btn = document.getElementById('ar-btn-float');
  if (btn) {
    btn.title = hidden ? 'إظهار الترجمة العربية' : 'إخفاء الترجمة العربية';
    btn.classList.toggle('ar-hidden', hidden);
    btn.classList.toggle('ar-on', !hidden);
  }
}
(function initArabic() {
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('ar-btn-float');
    if (localStorage.getItem('bus214_ar_hidden') === '1') {
      document.body.classList.add('hide-arabic');
      if (btn) { btn.classList.add('ar-hidden'); btn.title = 'إظهار الترجمة العربية'; }
    } else {
      if (btn) btn.classList.add('ar-on');
    }
  });
})();

// ── ELI5 / SIMPLE MODE ───────────────────────
function toggleELI5() {
  document.body.classList.toggle('eli5-mode');
  const btn = document.getElementById('eli5-btn');
  const isActive = document.body.classList.contains('eli5-mode');
  if (btn) {
    btn.classList.toggle('active');
    btn.textContent = isActive ? '🌟' : '💡';
  }
  localStorage.setItem('bus214-eli5', isActive ? '1' : '0');
}
if (localStorage.getItem('bus214-eli5') === '1') {
  document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('eli5-mode');
    const _eli5Btn = document.getElementById('eli5-btn');
    if (_eli5Btn) { _eli5Btn.classList.add('active'); _eli5Btn.textContent = '🌟'; }
  });
}

// ── QUIZ RESUME ───────────────────────────────
const QUIZ_RESUME_KEY = 'bus214_quiz_resume';
function quizSaveProgress() {
  if (!quizQs.length) return;
  try {
    localStorage.setItem(QUIZ_RESUME_KEY, JSON.stringify({
      qs: quizQs.map(function(q){ return { ch: q.ch, q: q.q }; }), // reference by text
      idx: quizIdx, correct: quizCorrect, wrong: quizWrong,
      filter: window.quizCurrentCh, timeRemaining: quizTimeRemaining || 0,
      savedAt: Date.now()
    }));
  } catch (e) {}
}
function quizClearResume() { try { localStorage.removeItem(QUIZ_RESUME_KEY); } catch(e) {} }
function quizGetResume() {
  try {
    const r = JSON.parse(localStorage.getItem(QUIZ_RESUME_KEY) || 'null');
    if (!r) return null;
    if (Date.now() - r.savedAt > 86400000) { quizClearResume(); return null; } // 24h
    return r;
  } catch (e) { return null; }
}
function showQuizResumeBanner() {
  const banner = document.getElementById('quiz-resume-banner');
  if (!banner) return;
  const r = quizGetResume();
  if (!r || r.idx >= r.qs.length) { banner.style.display = 'none'; return; }
  const pct = Math.round(r.idx / r.qs.length * 100);
  banner.innerHTML = '<div><div style="font-weight:700;color:var(--accent);font-size:.95rem;">🔖 كويز محفوظ</div><div style="font-size:.82rem;color:var(--muted);margin-top:3px;">سؤال ' + r.idx + ' من ' + r.qs.length + ' (' + pct + '%)</div></div>'
    + '<div style="display:flex;gap:6px;"><button onclick="quizClearResume();showQuizResumeBanner();" style="background:transparent;color:var(--muted);border:1.5px solid var(--line);padding:8px 14px;border-radius:10px;font-weight:600;font-size:.82rem;cursor:pointer;font-family:inherit;">حذف</button>'
    + '<button onclick="quizResumeSession()" style="background:var(--accent);color:#fff;border:none;padding:8px 18px;border-radius:10px;font-weight:700;font-size:.82rem;cursor:pointer;font-family:inherit;">استئناف ←</button></div>';
  banner.style.display = 'flex';
}
function quizResumeSession() {
  const r = quizGetResume();
  if (!r) return;
  // Rebuild questions from refs
  const pool = (typeof allQuizQ !== 'undefined' ? allQuizQ : []);
  const byText = {};
  pool.forEach(function(q){ byText[q.q] = q; });
  const rebuilt = r.qs.map(function(ref){ return byText[ref.q]; }).filter(Boolean);
  if (rebuilt.length === 0) { quizClearResume(); return; }
  quizQs = rebuilt; quizIdx = r.idx; quizCorrect = r.correct; quizWrong = r.wrong; quizAnswered = false;
  window.quizCurrentCh = r.filter; quizTimeRemaining = r.timeRemaining || 0;
  window.quizAnswerLog = [];
  document.body.classList.add('quiz-mode');
  document.getElementById("quiz-start-screen").classList.add('quiz-screen-hidden');
  document.getElementById("quiz-game-screen").classList.remove('quiz-screen-hidden');
  document.getElementById("quiz-result-screen").classList.add('quiz-screen-hidden');
  if (typeof renderQuizQuestion === 'function') renderQuizQuestion();
}

// ── QUIZ MODE ────────────────────────────────
function startQuiz() {
  quizClearResume(); // start fresh
  const filter = document.querySelector("input[name=quiz-filter]:checked").value;
  window.quizCurrentCh = (filter === "all") ? null : filter;
  const count = parseInt(document.getElementById("quiz-count").value);
  quizTimeLimit = parseInt(document.getElementById("quiz-time-limit").value || "0", 10);
  quizTimeRemaining = quizTimeLimit;
  let pool = filter === "all" ? allQuizQ : allQuizQ.filter(q => q.ch === filter);
  pool = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));
  quizQs = pool; quizIdx = 0; quizCorrect = 0; quizWrong = 0; quizAnswered = false;
  window.quizAnswerLog = [];
  // Sync toggle states from localStorage
  const aaToggle = document.getElementById('quiz-aa-toggle');
  if (aaToggle) aaToggle.checked = localStorage.getItem('bus214_autoAdvance') === '1';
  const confirmToggle = document.getElementById('quiz-confirm-toggle');
  if (confirmToggle) confirmToggle.checked = localStorage.getItem('bus214_confirmMode') === '1';
  quizStartTime = Date.now();
  document.body.classList.add('quiz-mode');
  document.getElementById("quiz-start-screen").classList.add('quiz-screen-hidden');
  document.getElementById("quiz-game-screen").classList.remove('quiz-screen-hidden');
  document.getElementById("quiz-result-screen").classList.add('quiz-screen-hidden');
  window.scrollTo({ top: document.getElementById('quiz-section').offsetTop - 20, behavior: 'smooth' });
  clearInterval(quizTimerInt);
  quizTimerInt = setInterval(() => {
    if (quizTimeLimit > 0) {
      quizTimeRemaining = Math.max(0, quizTimeRemaining - 1);
      const m = Math.floor(quizTimeRemaining / 60), s = quizTimeRemaining % 60;
      const timerEl = document.getElementById("quiz-timer-display");
      timerEl.textContent = "⏱ " + m + ":" + (s < 10 ? "0" : "") + s;
      // Add urgent pulse when ≤ 30 seconds remain
      if (quizTimeRemaining <= 30) timerEl.classList.add('timer-urgent');
      else timerEl.classList.remove('timer-urgent');
      if (quizTimeRemaining <= 0) endQuiz();
    }
  }, 1000);
  renderQuizQ();
}

function renderQuizQ() {
  if (quizIdx >= quizQs.length) { endQuiz(); return; }
  const q = quizQs[quizIdx];
  quizAnswered = false;
  window._pendingAnswer = -1;
  const pct = (quizIdx / quizQs.length) * 100;
  document.getElementById("qpf").style.width = pct + "%";
  document.getElementById("q-counter").textContent = `Question ${quizIdx + 1} / ${quizQs.length}`;
  const chLabels = (window.CH_LABELS && window.CH_LABELS.quizLong) || { ch1: "Chapter 1 — Business Ethics", ch2: "Chapter 2 — Stakeholders & Governance", ch3: "Chapter 3 — Sustainability" };
  const chColors = { ch1: "#2563EB", ch2: "#7C3AED", ch3: "#10b981" };
  document.getElementById("quiz-chapter-tag").innerHTML = `<span style="background:${chColors[q.ch] || '#2563EB'};color:#fff;padding:3px 10px;border-radius:999px;font-size:.78rem;">${chLabels[q.ch] || q.ch}</span>`;
  document.getElementById("quiz-q-text").textContent = q.q;

  // ── Shuffle options (once per question, skip True/False) ──
  if (!q._disp) {
    if (q.opts.length <= 2) {
      q._disp = { opts: q.opts, ans: q.ans, indices: q.opts.map((_, i) => i) };
    } else {
      const idx = q.opts.map((_, i) => i);
      for (let k = idx.length - 1; k > 0; k--) {
        const j = Math.floor(Math.random() * (k + 1));
        [idx[k], idx[j]] = [idx[j], idx[k]];
      }
      q._disp = { opts: idx.map(i => q.opts[i]), ans: idx.indexOf(q.ans), indices: idx };
    }
  }

  const optsDiv = document.getElementById("quiz-opts");
  optsDiv.innerHTML = "";
  const confirmMode = localStorage.getItem('bus214_confirmMode') === '1';
  q._disp.opts.forEach((o, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-mcq-btn";
    btn.textContent = ["A","B","C","D","E"][i] + ". " + o;
    btn.onclick = confirmMode ? () => selectPendingAnswer(i) : () => handleQuizAnswer(i);
    optsDiv.appendChild(btn);
  });

  // Sync confirm toggle state
  const confirmToggle = document.getElementById('quiz-confirm-toggle');
  if (confirmToggle) confirmToggle.checked = confirmMode;

  // Retry banner
  const retryBanner = document.getElementById('quiz-retry-banner');
  if (retryBanner) retryBanner.style.display = q._isRetry ? 'flex' : 'none';
  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("quiz-feedback").className = "quiz-feedback";
  document.getElementById("quiz-next-btn").style.display = "none";
  const confirmBtn = document.getElementById('quiz-confirm-btn');
  if (confirmBtn) confirmBtn.style.display = 'none';
  const expEl = document.getElementById("quiz-explanation");
  if (expEl) { expEl.style.display = "none"; expEl.innerHTML = ""; }
  if (quizTimeLimit === 0) document.getElementById("quiz-timer-display").textContent = "";
}

function selectPendingAnswer(i) {
  if (quizAnswered) return;
  window._pendingAnswer = i;
  document.querySelectorAll("#quiz-opts .quiz-mcq-btn").forEach((btn, idx) => {
    btn.classList.toggle('pending-selected', idx === i);
  });
  const confirmBtn = document.getElementById('quiz-confirm-btn');
  if (confirmBtn) confirmBtn.style.display = 'block';
}

function confirmPendingAnswer() {
  if (window._pendingAnswer >= 0) handleQuizAnswer(window._pendingAnswer);
}

function handleQuizAnswer(chosen) {
  if (quizAnswered) return;
  quizAnswered = true;
  window._pendingAnswer = -1;
  const q = quizQs[quizIdx];
  const disp = q._disp || { opts: q.opts, ans: q.ans, indices: q.opts.map((_, i) => i) };
  const confirmBtn = document.getElementById('quiz-confirm-btn');
  if (confirmBtn) confirmBtn.style.display = 'none';
  const allBtns = document.querySelectorAll("#quiz-opts .quiz-mcq-btn");
  allBtns.forEach((btn, i) => {
    btn.disabled = true;
    btn.classList.remove('pending-selected');
    if (i === disp.ans) {
      btn.classList.add("correct");
      btn.classList.add("correct-anim");
    } else if (i === chosen) {
      btn.classList.add("wrong");
      btn.classList.add("wrong-anim");
    }
  });
  // Log using original index so buildWrongReview works correctly
  const origChosen = disp.indices[chosen];
  window.quizAnswerLog.push({ q, chosen: origChosen });
  const fb = document.getElementById("quiz-feedback");
  const isCorrect = chosen === disp.ans;
  if (isCorrect) {
    quizCorrect++;
    fb.textContent = "✅ صحيح!";
    fb.className = "quiz-feedback correct";
    if (window.SFX) SFX.play('correct');
  } else {
    quizWrong++;
    fb.textContent = "❌ خطأ — الإجابة الصحيحة: " + ["A","B","C","D","E"][disp.ans];
    fb.className = "quiz-feedback wrong";
    if (window.SFX) SFX.play('wrong');
    if (typeof saveWrongAnswer === 'function') saveWrongAnswer(q, origChosen);
    // Spaced repetition: re-insert question after 5 questions (max 2 retries)
    if ((q._retryCount || 0) < 3) {
      const retryQ = Object.assign({}, q, { _isRetry: true, _retryCount: (q._retryCount || 0) + 1, _disp: null });
      const insertAt = Math.min(quizIdx + 5, quizQs.length);
      quizQs.splice(insertAt, 0, retryQ);
    }
  }
  // Gamification
  const combo = updateCombo(isCorrect);
  const multiplier = getComboMultiplier(combo);
  if (isCorrect) awardXP(10, multiplier);
  showQuizEncouragement(isCorrect);
  // Show explanation — supports array (per-option) or string (Mid 2 testbank) formats
  const expEl = document.getElementById("quiz-explanation");
  const rawExp = q.exp ? (Array.isArray(q.exp) ? q.exp[q.ans] : q.exp) : null;
  if (expEl && rawExp) {
    // Extract Arabic (from <span dir='rtl'>...</span> if present) and English parts
    const arMatch = rawExp.match(/dir=['"]rtl['"][^>]*>([^<]+)/);
    const arText = arMatch
      ? arMatch[1].replace(/^[✅❌]\s*(صح\s*—?\s*|Correct\.?\s*)/i, '').trim()
      : (/[\u0600-\u06FF]/.test(rawExp) && !/<span/.test(rawExp)
          ? rawExp.replace(/^[✅❌]\s*/u, '').trim()  // Mid 2 plain Arabic string
          : '');
    const enText = rawExp.split('<br>')[0]
      .replace(/<[^>]+>/g, '')
      .replace(/^[✅❌]\s*(Correct\.?\s*|صح\s*—?\s*)/i, '')
      .trim();
    const cleanEn = /[\u0600-\u06FF]/.test(enText) ? '' : enText;
    expEl.textContent = '';
    const icon = isCorrect ? '💡 ' : '📖 ';
    if (cleanEn) {
      const enDiv = document.createElement('div');
      enDiv.setAttribute('dir', 'ltr');
      enDiv.setAttribute('lang', 'en');
      enDiv.style.cssText = 'text-align:left;direction:ltr;unicode-bidi:isolate;margin-bottom:' + (arText ? '8px' : '0') + ';';
      enDiv.textContent = icon + cleanEn;
      expEl.appendChild(enDiv);
    }
    if (arText) {
      const arDiv = document.createElement('div');
      arDiv.setAttribute('dir', 'rtl');
      arDiv.setAttribute('lang', 'ar');
      arDiv.style.cssText = 'text-align:right;direction:rtl;unicode-bidi:isolate;';
      arDiv.textContent = (cleanEn ? '' : icon) + arText;
      expEl.appendChild(arDiv);
    }
    if (cleanEn || arText) {
      expEl.className = isCorrect ? 'quiz-explanation exp-clean correct' : 'quiz-explanation exp-clean wrong';
      expEl.style.display = 'block';
    } else {
      expEl.style.display = 'none';
    }
  } else if (expEl) {
    expEl.style.display = 'none';
  }
  const nextBtn = document.getElementById("quiz-next-btn");
  nextBtn.style.display = "block";
  setTimeout(() => nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  // Save quiz progress for resume
  if (typeof quizSaveProgress === 'function') quizSaveProgress();
  // Auto-advance on correct answer
  if (isCorrect && localStorage.getItem('bus214_autoAdvance') === '1') {
    clearTimeout(window._autoAdvTimer);
    const bar = document.getElementById('quiz-aa-bar');
    if (bar) {
      bar.style.transition = 'none';
      bar.style.width = '100%';
      bar.style.display = 'block';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        bar.style.transition = 'width 1.3s linear';
        bar.style.width = '0%';
      }));
    }
    window._autoAdvTimer = setTimeout(() => { if (quizAnswered) nextQuizQ(); }, 1400);
  }
}

function nextQuizQ() {
  clearTimeout(window._autoAdvTimer);
  const bar = document.getElementById('quiz-aa-bar');
  if (bar) { bar.style.display = 'none'; bar.style.width = '100%'; }
  quizIdx++;
  renderQuizQ();
}

function endQuiz() {
  clearInterval(quizTimerInt);
  document.body.classList.remove('quiz-mode');
  if (typeof quizClearResume === 'function') quizClearResume();
  const total = quizCorrect + quizWrong;
  const pct = total ? Math.round((quizCorrect / total) * 100) : 0;
  const elapsed = quizStartTime ? Math.round((Date.now() - quizStartTime) / 1000) : 0;
  document.getElementById("quiz-start-screen").classList.remove('quiz-screen-hidden');
  document.getElementById("quiz-game-screen").classList.add('quiz-screen-hidden');
  document.getElementById("quiz-result-screen").classList.remove('quiz-screen-hidden');
  document.getElementById("quiz-final-score").textContent = pct + "%";
  const badge = pct >= 90 ? "🏆" : pct >= 75 ? "🥇" : pct >= 60 ? "🥈" : "📚";
  const msg = pct >= 90 ? "Excellent!" : pct >= 75 ? "Great Job!" : pct >= 60 ? "Good Effort!" : "Keep Studying!";
  document.getElementById("quiz-final-badge").textContent = badge;
  document.getElementById("quiz-confetti-msg").textContent = msg;
  document.getElementById("quiz-final-label").textContent = pct >= 60 ? "You passed!" : "Need more practice";
  document.getElementById("res-correct").textContent = quizCorrect;
  document.getElementById("res-wrong").textContent = quizWrong;
  const m = Math.floor(elapsed / 60), s = elapsed % 60;
  document.getElementById("res-time").textContent = m + ":" + (s < 10 ? "0" : "") + s;
  const chKey = window.quizCurrentCh || "all";
  if (!bestScores[chKey] || pct > bestScores[chKey]) {
    bestScores[chKey] = pct;
    localStorage.setItem('bus214_bestScores', JSON.stringify(bestScores));
  }
  if (quizWrong === 0 && quizCorrect >= quizQs.length && quizQs.length > 0) { const gd = getGameData(); gd.perfectQuiz = true; saveGameData(gd); checkBadges(gd); }
  totalQuizzes++;
  totalCorrect += quizCorrect;
  totalWrong += quizWrong;
  localStorage.setItem('bus214_totalQuizzes', totalQuizzes);
  localStorage.setItem('bus214_totalCorrect', totalCorrect);
  localStorage.setItem('bus214_totalWrong', totalWrong);
  updateStreak();
  renderMasteryBadges();
  renderHomeMastery();
  // Confetti + sound for high scores
  if (pct >= 80 && window.launchConfetti) launchConfetti();
  if (window.SFX) SFX.play('complete');
  // Save to Firebase if signed in
  if (typeof saveQuizResult === 'function') {
    saveQuizResult(chKey, pct, quizCorrect, quizWrong, elapsed);
  }
  // Inline wrong-answers review (built below score card)
  buildWrongReview();
  // Show "عرض الأخطاء" button only if there are wrongs
  const revBtnWrap = document.getElementById('quiz-review-btn-wrap');
  if (revBtnWrap) revBtnWrap.style.display = quizWrong > 0 ? 'block' : 'none';
  // Scroll to score card
  setTimeout(() => {
    const resultEl = document.getElementById('quiz-result-screen');
    if (resultEl) resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function buildWrongReview() {
  const revEl = document.getElementById('quiz-wrong-review');
  if (!revEl) return;
  // Deduplicate by question text — keep last attempt (so if retry was correct, it's removed)
  const lastAttempt = new Map();
  (window.quizAnswerLog || []).forEach(a => lastAttempt.set(a.q.q, a));
  const wrongs = Array.from(lastAttempt.values()).filter(a => a.chosen !== a.q.ans);
  revEl.textContent = '';
  if (!wrongs.length) return;
  const letters = ['A','B','C','D','E'];
  const header = document.createElement('div');
  header.className = 'wrev-header';
  header.textContent = '📋 مراجعة الأخطاء — ' + wrongs.length + ' سؤال';
  revEl.appendChild(header);
  wrongs.forEach(function(a, idx) {
    const q = a.q;
    const item = document.createElement('div');
    item.className = 'wrev-item';
    // Number row + question
    const numRow = document.createElement('div');
    numRow.className = 'wrev-num-row';
    const num = document.createElement('div');
    num.className = 'wrev-num';
    num.textContent = idx + 1;
    const qDiv = document.createElement('div');
    qDiv.className = 'wrev-q';
    qDiv.textContent = q.q;
    numRow.appendChild(num);
    numRow.appendChild(qDiv);
    item.appendChild(numRow);
    // Choices
    const choices = document.createElement('div');
    choices.className = 'wrev-choices';
    const wrongDiv = document.createElement('div');
    wrongDiv.className = 'wrev-ans wrev-wrong';
    wrongDiv.textContent = '✗ ' + letters[a.chosen] + '. ' + q.opts[a.chosen];
    const correctDiv = document.createElement('div');
    correctDiv.className = 'wrev-ans wrev-correct';
    correctDiv.textContent = '✓ ' + letters[q.ans] + '. ' + q.opts[q.ans];
    choices.appendChild(wrongDiv);
    choices.appendChild(correctDiv);
    item.appendChild(choices);
    const body = document.createElement('div');
    body.className = 'wrev-body';
    if (q.exp && q.exp[q.ans]) {
      // Extract clean Arabic explanation only (after <br> or <span dir='rtl'>)
      const raw = q.exp[q.ans];
      const arMatch = raw.match(/dir=['"]rtl['"][^>]*>([^<]+)/);
      const enMatch = raw.split('<br>')[0].replace(/<[^>]+>/g, '').replace(/^[✅❌]\s*(Correct\.?\s*)/i, '').trim();
      const arText = arMatch ? arMatch[1].replace(/^[✅❌]\s*(صح\s*—?\s*)/,'').trim() : '';
      const showText = arText || enMatch;
      if (showText) {
        const expDiv = document.createElement('div');
        expDiv.className = 'wrev-exp';
        const label = document.createElement('span');
        label.className = 'wrev-exp-label';
        label.textContent = 'لماذا؟ ';
        const text = document.createElement('span');
        text.textContent = showText;
        expDiv.appendChild(label);
        expDiv.appendChild(text);
        body.appendChild(expDiv);
      }
    }
    item.appendChild(body);
    revEl.appendChild(item);
  });
  const retryBtn = document.createElement('button');
  retryBtn.className = 'quiz-btn quiz-btn-primary wrev-retry-btn';
  retryBtn.textContent = '🔄 أعد تجربة الأخطاء (' + wrongs.length + ')';
  retryBtn.onclick = retryWrongOnly;
  revEl.appendChild(retryBtn);
  setTimeout(function() { revEl.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 200);
}

function retryWrongOnly() {
  const wrongs = (window.quizAnswerLog || []).filter(function(a) { return a.chosen !== a.q.ans; }).map(function(a) { return a.q; });
  if (!wrongs.length) return;
  quizQs = wrongs.slice().sort(function() { return Math.random() - 0.5; });
  quizIdx = 0; quizCorrect = 0; quizWrong = 0; quizAnswered = false;
  window.quizAnswerLog = [];
  quizStartTime = Date.now();
  quizTimeLimit = 0;
  document.body.classList.add('quiz-mode');
  document.getElementById('quiz-start-screen').classList.add('quiz-screen-hidden');
  document.getElementById('quiz-game-screen').classList.remove('quiz-screen-hidden');
  document.getElementById('quiz-result-screen').classList.add('quiz-screen-hidden');
  const revEl = document.getElementById('quiz-wrong-review');
  if (revEl) revEl.textContent = '';
  clearInterval(quizTimerInt);
  window.scrollTo({ top: (document.getElementById('quiz-section') || document.body).offsetTop - 20, behavior: 'smooth' });
  renderQuizQ();
}

function renderMasteryBadges() {
  ["ch1","ch2","ch3"].forEach(ch => {
    const el = document.getElementById("mastery-" + ch);
    if (!el) return;
    const score = bestScores[ch];
    if (score === undefined) { el.textContent = ""; return; }
    if (score >= 90) el.innerHTML = '<span style="color:#f59e0b;font-size:.75rem;">⭐ ' + score + '%</span>';
    else if (score >= 75) el.innerHTML = '<span style="color:#2563EB;font-size:.75rem;">✓ ' + score + '%</span>';
    else el.innerHTML = '<span style="color:#94a3b8;font-size:.75rem;">' + score + '%</span>';
  });
  // Update question count badges
  const counts = {
    all: allQuizQ.length,
    ch1: allQuizQ.filter(q => q.ch === 'ch1').length,
    ch2: allQuizQ.filter(q => q.ch === 'ch2').length,
    ch3: allQuizQ.filter(q => q.ch === 'ch3').length
  };
  Object.entries(counts).forEach(([ch, n]) => {
    const el = document.getElementById('count-' + ch);
    if (el) el.textContent = n + ' Q';
  });
}

function retakeQuiz() {
  document.getElementById("quiz-result-screen").classList.add('quiz-screen-hidden');
  document.getElementById("quiz-start-screen").classList.remove('quiz-screen-hidden');
}

function startQuickCheck(ch) {
  // Pre-set quiz filter and count, then navigate to quiz
  showPage('page-quiz');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Select the right chapter radio
  document.querySelectorAll("input[name=quiz-filter]").forEach(r => {
    r.checked = r.value === ch;
  });
  // Set count to 5
  const countSel = document.getElementById("quiz-count");
  if (countSel) countSel.value = "5";
  // Show start screen
  document.getElementById("quiz-start-screen").classList.remove('quiz-screen-hidden');
  document.getElementById("quiz-game-screen").classList.add('quiz-screen-hidden');
  document.getElementById("quiz-result-screen").classList.add('quiz-screen-hidden');
  // Auto-start after brief delay
  setTimeout(() => startQuiz(), 300);
}

// ── MOCK EXAM RESUME ───────────────────────────
const MOCK_RESUME_KEY = 'bus214_mock_resume';
function mockSaveProgress() {
  if (!mockQs.length) return;
  try {
    localStorage.setItem(MOCK_RESUME_KEY, JSON.stringify({
      qs: mockQs.map(function(q){ return { ch: q.ch, q: q.q }; }),
      idx: mockIdx, correct: mockCorrect, wrong: mockWrong,
      answers: mockAnswers.map(function(a){ return { q: a.q.q, chosen: a.chosen }; }),
      timeRemaining: mockTimeRemaining || 0,
      savedAt: Date.now()
    }));
  } catch (e) {}
}
function mockClearResume() { try { localStorage.removeItem(MOCK_RESUME_KEY); } catch(e) {} }
function mockGetResume() {
  try {
    const r = JSON.parse(localStorage.getItem(MOCK_RESUME_KEY) || 'null');
    if (!r) return null;
    if (Date.now() - r.savedAt > 86400000) { mockClearResume(); return null; }
    return r;
  } catch (e) { return null; }
}
function mockResumeSession() {
  const r = mockGetResume();
  if (!r) return;
  const pool = (typeof testBankQ !== 'undefined' ? testBankQ : []);
  const byText = {};
  pool.forEach(function(q){ byText[q.q] = q; });
  const rebuilt = r.qs.map(function(ref){ return byText[ref.q]; }).filter(Boolean);
  if (rebuilt.length === 0) { mockClearResume(); return; }
  mockQs = rebuilt; mockIdx = r.idx; mockCorrect = r.correct; mockWrong = r.wrong;
  mockAnswers = r.answers.map(function(a){ return { q: byText[a.q] || {q:a.q}, chosen: a.chosen }; }).filter(function(a){return a.q.opts;});
  mockTimeRemaining = r.timeRemaining || mockTimeLimit;
  document.body.classList.add('mock-mode');
  document.getElementById("mock-start-screen").style.display = "none";
  document.getElementById("mock-game-screen").style.display = "block";
  document.getElementById("mock-result-screen").style.display = "none";
  clearInterval(mockTimerInt);
  mockTimerInt = setInterval(() => {
    mockTimeRemaining = Math.max(0, mockTimeRemaining - 1);
    const m = Math.floor(mockTimeRemaining / 60), s = mockTimeRemaining % 60;
    const timerEl = document.getElementById("mock-timer");
    timerEl.textContent = "⏱ " + m + ":" + (s < 10 ? "0" : "") + s;
    if (mockTimeRemaining <= 300) {
      timerEl.classList.add("pulse-red");
    } else {
      timerEl.classList.remove("pulse-red");
    }
    if (typeof mockSaveResume === 'function' && mockTimeRemaining % 5 === 0) mockSaveResume();
    if (mockTimeRemaining <= 0) endMock();
  }, 1000);
  if (typeof renderMockQ === 'function') renderMockQ();
}
function showMockResumeBanner() {
  const banner = document.getElementById('mock-resume-banner');
  if (!banner) return;
  const r = mockGetResume();
  if (!r || r.idx >= r.qs.length) { banner.style.display = 'none'; return; }
  const pct = Math.round(r.idx / r.qs.length * 100);
  banner.innerHTML = '<div><div style="font-weight:700;color:var(--accent);font-size:.95rem;">🔖 امتحان تجريبي محفوظ</div><div style="font-size:.82rem;color:var(--muted);margin-top:3px;">سؤال ' + r.idx + ' من ' + r.qs.length + ' (' + pct + '%)</div></div>'
    + '<div style="display:flex;gap:6px;"><button onclick="mockClearResume();showMockResumeBanner();" style="background:transparent;color:var(--muted);border:1.5px solid var(--line);padding:8px 14px;border-radius:10px;font-weight:600;font-size:.82rem;cursor:pointer;font-family:inherit;">حذف</button>'
    + '<button onclick="mockResumeSession()" style="background:var(--accent);color:#fff;border:none;padding:8px 18px;border-radius:10px;font-weight:700;font-size:.82rem;cursor:pointer;font-family:inherit;">استئناف ←</button></div>';
  banner.style.display = 'flex';
}

// ── ADAPTIVE QUIZ ENGINE (WEAKNESS MODE) ────────
// 120-char prefix avoids collisions on Ferrell's "Which moral philosophy
// evaluates the morality of an action on the basis of..." stems (4 distinct Qs).
function qStatsKey(qText) { return (qText || '').trim().substring(0, 120); }
function getQStats() {
  try { return JSON.parse(localStorage.getItem('bus214_qstats') || '{}'); }
  catch(e) { return {}; }
}
function updateQStats(qText, isCorrect) {
  try {
    const stats = getQStats();
    const key = qStatsKey(qText);
    if (!stats[key]) stats[key] = { c: 0, t: 0 };
    stats[key].t++;
    if (isCorrect) stats[key].c++;
    stats[key].ts = Date.now();
    localStorage.setItem('bus214_qstats', JSON.stringify(stats));
  } catch(e) {}
}

function startAdaptiveMock() {
  mockClearResume();
  const stats = getQStats();

  // Create a pool of questions with weights
  const weightedPool = testBankQ.map(q => {
    const key = qStatsKey(q.q);
    const qStat = stats[key];
    let weight = 1; // Default weight
    if (qStat && qStat.t > 0) {
      // Weight = 1 + (1 - accuracy) * 3
      weight = 1 + (1 - (qStat.c / qStat.t)) * 3;
    }
    return { q, weight, rand: Math.random() };
  });

  // Sort by combination of random and weight (Higher weight = higher chance to be at the top)
  weightedPool.sort((a, b) => (b.weight * b.rand) - (a.weight * a.rand));

  const pool = weightedPool.slice(0, 15).map(wp => wp.q); // 15 questions for weakness mode
  
  mockQs = pool; mockIdx = 0; mockCorrect = 0; mockWrong = 0; mockAnswers = [];
  mockTimeLimit = 15 * 60; // 15 mins
  mockTimeRemaining = mockTimeLimit;
  document.body.classList.add('mock-mode');
  document.getElementById("mock-start-screen").style.display = "none";
  document.getElementById("mock-game-screen").style.display = "block";
  document.getElementById("mock-result-screen").style.display = "none";
  clearInterval(mockTimerInt);
  mockTimerInt = setInterval(() => {
    mockTimeRemaining = Math.max(0, mockTimeRemaining - 1);
    const m = Math.floor(mockTimeRemaining / 60), s = mockTimeRemaining % 60;
    const timerEl = document.getElementById("mock-timer");
    timerEl.textContent = "⏱ " + m + ":" + (s < 10 ? "0" : "") + s;
    if (mockTimeRemaining <= 300) {
      timerEl.classList.add("pulse-red");
    } else {
      timerEl.classList.remove("pulse-red");
    }
    if (typeof mockSaveResume === 'function' && mockTimeRemaining % 5 === 0) mockSaveResume();
    if (mockTimeRemaining <= 0) endMock();
  }, 1000);
  renderMockQ();
}

// ── CONFUSION-PAIR DRILLS ─────────────────────
function startConfusionDrill(pairId) {
  const pair = window.CONFUSION_PAIRS.find(p => p.id === pairId);
  if (!pair) return;

  // Filter testBankQ: match against question stem + correct answer only,
  // NOT all options. This avoids false positives where a concept appears
  // as a distractor (e.g. Puffery as wrong answer to an Insider Trading Q).
  let pool = testBankQ.filter(q => {
    const correctOpt = q.opts[q.ans] || '';
    const text = (q.q + " " + correctOpt).toLowerCase();
    if (pair.keywords) {
      return pair.keywords.some(kw => text.includes(kw.toLowerCase()));
    }
    const includes = pair.include || [];
    const excludes = pair.exclude || [];
    const hasInclude = includes.some(kw => text.includes(kw.toLowerCase()));
    if (!hasInclude) return false;
    const hasExclude = excludes.some(kw => text.includes(kw.toLowerCase()));
    return !hasExclude;
  });

  // Take up to 10 random questions
  pool = pool.sort(() => Math.random() - 0.5).slice(0, 10);
  if (pool.length === 0) {
    alert("لا يوجد أسئلة كافية لهذا التدريب!");
    return;
  }

  mockClearResume();
  mockQs = pool; mockIdx = 0; mockCorrect = 0; mockWrong = 0; mockAnswers = [];
  document.body.classList.add('mock-mode');
  
  // Hide timer for drills
  document.getElementById("mock-timer").style.display = "none";
  
  // Add contrast message logic
  window._currentConfusionContrast = pair.contrast;

  document.getElementById("mock-start-screen").style.display = "none";
  document.getElementById("mock-game-screen").style.display = "block";
  document.getElementById("mock-result-screen").style.display = "none";
  clearInterval(mockTimerInt); // No timer!
  
  renderMockQ();
}

function renderConfusionGrid() {
  const container = document.getElementById("confusion-drills-container");
  if (!container || !window.CONFUSION_PAIRS) return;
  
  let html = '<h3 style="margin-bottom:15px; margin-top:30px; font-size:1.2rem; color:var(--text); border-bottom:1px solid var(--line); padding-bottom:8px;">🎯 خلط المفاهيم (Confusion Drills)</h3>';
  html += '<p style="font-size:0.85rem; color:var(--muted); margin-bottom:15px;">تدريبات سريعة للتمييز بين المفاهيم المتشابهة والمربكة في الاختبار (بدون مؤقت).</p>';
  html += '<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:10px;">';
  
  window.CONFUSION_PAIRS.forEach(pair => {
    // Pre-compute matching question count so user knows drill size
    const count = (typeof testBankQ !== 'undefined' ? testBankQ : []).filter(q => {
      const correctOpt = q.opts[q.ans] || '';
      const text = (q.q + " " + correctOpt).toLowerCase();
      if (pair.keywords) return pair.keywords.some(kw => text.includes(kw.toLowerCase()));
      const inc = (pair.include || []).some(kw => text.includes(kw.toLowerCase()));
      if (!inc) return false;
      const exc = (pair.exclude || []).some(kw => text.includes(kw.toLowerCase()));
      return !exc;
    }).length;
    html += `<button class="quiz-btn" onclick="startConfusionDrill('${pair.id}')" style="padding:12px; font-size:0.85rem; border:1px solid var(--line); border-radius:10px; background:var(--paper); color:var(--text); cursor:pointer; box-shadow:0 2px 4px rgba(0,0,0,0.05);">${pair.label}<div style="font-size:.72rem; color:var(--muted); margin-top:4px;">${count} سؤال</div></button>`;
  });
  
  html += '</div>';
  container.innerHTML = html;
}


// ── STUDY ROADMAP (4-day plan to reduce decision fatigue) ──
const ROADMAP_PLAN = [
  {
    dayNum: 1, label: 'الإثنين — Mon', date: '2026-05-04', emoji: '📚',
    theme: 'يوم الفصل الخامس (Ch 5)',
    tasks: [
      { id: 'd1-t1', label: 'راجع Ch 5 — Quick Review', mins: 15, action: () => showPage('page-ch1') },
      { id: 'd1-t2', label: 'حل 20 سؤال Test Bank — Ch 5', mins: 25, action: () => showPage('page-testbank') },
      { id: 'd1-t3', label: 'خلط المفاهيم: Issue vs Dilemma', mins: 10, action: () => { showPage('page-mock'); setTimeout(() => { if (typeof startConfusionDrill === 'function') startConfusionDrill('issue-dilemma'); }, 200); } }
    ]
  },
  {
    dayNum: 2, label: 'الثلاثاء — Tue', date: '2026-05-05', emoji: '🧭',
    theme: 'فصل 6 + 7 (Decision Framework + Moral Philosophy)',
    tasks: [
      { id: 'd2-t1', label: 'راجع Ch 6 — Decision Framework', mins: 20, action: () => showPage('page-ch2') },
      { id: 'd2-t2', label: 'راجع Ch 7 — Moral Philosophy', mins: 20, action: () => showPage('page-ch3') },
      { id: 'd2-t3', label: 'خلط: Teleology vs Deontology', mins: 15, action: () => { showPage('page-mock'); setTimeout(() => { if (typeof startConfusionDrill === 'function') startConfusionDrill('teleology-deontology'); }, 200); } }
    ]
  },
  {
    dayNum: 3, label: 'الأربعاء — Wed', date: '2026-05-06', emoji: '🎯',
    theme: 'يوم الاختبار التجريبي (Mock + Adaptive)',
    tasks: [
      { id: 'd3-t1', label: 'Mock Exam كامل (30 سؤال)', mins: 30, action: () => showPage('page-mock') },
      { id: 'd3-t2', label: 'وضع نقاط الضعف (Adaptive)', mins: 20, action: () => { showPage('page-mock'); setTimeout(() => { if (typeof startAdaptiveMock === 'function') startAdaptiveMock(); }, 200); } },
      { id: 'd3-t3', label: 'تجميعات سابقة — اختر سنة', mins: 20, action: () => showPage('page-past-exams') }
    ]
  },
  {
    dayNum: 4, label: 'الخميس — Thu (يوم الميد)', date: '2026-05-07', emoji: '🏆',
    theme: 'مراجعة سريعة وثقة',
    tasks: [
      { id: 'd4-t1', label: 'Flash Cards — مراجعة سريعة', mins: 15, action: () => { showPage('page-flash'); if (typeof initFlashCards === 'function') initFlashCards(); } },
      { id: 'd4-t2', label: 'مراجعة الأسئلة اللي خطأت فيها', mins: 15, action: () => showPage('page-wrong-review') },
      { id: 'd4-t3', label: 'نفس عميق ✨ ثم انطلق', mins: 5, action: () => alert('بالتوفيق يا حسام! 🎓 أنت قد سويت كل اللي تقدر تسويه. ادخل الاختبار بثقة 💪') }
    ]
  }
];

function getRoadmapState() {
  try { return JSON.parse(localStorage.getItem('bus214_roadmap') || '{}'); }
  catch (e) { return {}; }
}
function setRoadmapTaskDone(taskId, done) {
  try {
    const state = getRoadmapState();
    state[taskId] = done ? Date.now() : null;
    localStorage.setItem('bus214_roadmap', JSON.stringify(state));
  } catch (e) {}
}

function _rmEl(tag, attrs, text) {
  const el = document.createElement(tag);
  if (attrs) for (const k in attrs) {
    if (k === 'style') el.setAttribute('style', attrs[k]);
    else if (k === 'cls') el.className = attrs[k];
    else el.setAttribute(k, attrs[k]);
  }
  if (text != null) el.textContent = text;
  return el;
}

function renderRoadmap() {
  const container = document.getElementById('roadmap-container');
  if (!container) return;
  while (container.firstChild) container.removeChild(container.firstChild);
  const state = getRoadmapState();
  const today = new Date().toISOString().slice(0, 10);

  const examDate = new Date('2026-05-07');
  const now = new Date();
  const daysLeft = Math.max(0, Math.ceil((examDate - now) / (1000 * 60 * 60 * 24)));
  const daysLeftEl = document.getElementById('rm-days-left');
  if (daysLeftEl) daysLeftEl.textContent = daysLeft + (daysLeft === 1 ? ' يوم' : ' أيام');

  let todayDoneCount = 0, todayTotalCount = 0;

  ROADMAP_PLAN.forEach((day, dayIdx) => {
    const isToday = day.date === today;
    const isPast = day.date < today;
    const dayDoneCount = day.tasks.filter(t => state[t.id]).length;
    const allDone = dayDoneCount === day.tasks.length;
    if (isToday) { todayDoneCount = dayDoneCount; todayTotalCount = day.tasks.length; }

    // Dynamic relative-date prefix (اليوم / غداً / أمس) based on real current date
    const dayMs = 24 * 60 * 60 * 1000;
    const diffDays = Math.round((new Date(day.date) - new Date(today)) / dayMs);
    let relativePrefix = '';
    if (diffDays === 0) relativePrefix = 'اليوم · ';
    else if (diffDays === 1) relativePrefix = 'غداً · ';
    else if (diffDays === -1) relativePrefix = 'أمس · ';
    else if (diffDays === 2) relativePrefix = 'بعد غدٍ · ';
    const displayLabel = relativePrefix + day.label;

    const headerStyle = isToday
      ? 'background:linear-gradient(135deg, var(--accent), #60A5FA); color:#fff;'
      : isPast ? 'background:var(--paper); color:var(--muted); opacity:.6;' : 'background:var(--paper); color:var(--text);';

    const dayWrap = _rmEl('div', { style: 'margin-bottom:20px; border:1.5px solid ' + (isToday ? 'var(--accent)' : 'var(--line)') + '; border-radius:14px; overflow:hidden;' });

    const header = _rmEl('div', { style: 'padding:14px 18px; ' + headerStyle + ' display:flex; justify-content:space-between; align-items:center;' });
    const headerLeft = _rmEl('div');
    const titleEl = _rmEl('strong', { style: 'font-size:1.05rem;' }, day.emoji + ' ' + displayLabel);
    const themeEl = _rmEl('div', { style: 'font-size:.82rem; margin-top:2px; opacity:.9;' }, day.theme);
    headerLeft.appendChild(titleEl); headerLeft.appendChild(themeEl);
    const headerRight = _rmEl('div', { style: 'font-size:.85rem; font-weight:700;' }, dayDoneCount + '/' + day.tasks.length + (allDone ? ' ✅' : ''));
    header.appendChild(headerLeft); header.appendChild(headerRight);
    dayWrap.appendChild(header);

    const tasksWrap = _rmEl('div', { style: 'padding:8px 0; background:var(--bg);' });
    day.tasks.forEach((t, taskIdx) => {
      const done = !!state[t.id];
      const row = _rmEl('div', { style: 'display:flex; align-items:center; gap:12px; padding:12px 18px; border-bottom:1px solid var(--line);' });

      const cb = _rmEl('input', { type: 'checkbox', style: 'width:20px; height:20px; cursor:pointer; flex-shrink:0;' });
      cb.checked = done;
      cb.addEventListener('change', () => { setRoadmapTaskDone(t.id, cb.checked); renderRoadmap(); });
      row.appendChild(cb);

      const middle = _rmEl('div', { style: 'flex:1; ' + (done ? 'text-decoration:line-through; color:var(--muted);' : '') });
      middle.appendChild(_rmEl('div', { style: 'font-weight:600; font-size:.95rem;' }, t.label));
      middle.appendChild(_rmEl('div', { style: 'font-size:.75rem; color:var(--muted); margin-top:2px;' }, '⏱ ' + t.mins + ' دقيقة'));
      row.appendChild(middle);

      if (!done) {
        const btn = _rmEl('button', { style: 'background:var(--accent); color:#fff; border:none; padding:8px 14px; border-radius:8px; font-weight:600; font-size:.82rem; cursor:pointer; font-family:inherit; flex-shrink:0;' }, 'ابدأ ←');
        btn.addEventListener('click', () => ROADMAP_PLAN[dayIdx].tasks[taskIdx].action());
        row.appendChild(btn);
      }
      tasksWrap.appendChild(row);
    });
    dayWrap.appendChild(tasksWrap);
    container.appendChild(dayWrap);
  });

  const todayEl = document.getElementById('rm-today-progress');
  if (todayEl) todayEl.textContent = todayDoneCount + '/' + todayTotalCount;
}
window.ROADMAP_PLAN = ROADMAP_PLAN;
window.setRoadmapTaskDone = setRoadmapTaskDone;
window.renderRoadmap = renderRoadmap;

// ── FOCUS MODE (hide sidebar/HUD/FABs to reduce distraction) ──
function toggleFocusMode() {
  const enabled = document.body.classList.toggle('focus-mode');
  try { localStorage.setItem('bus214_focus_mode', enabled ? '1' : '0'); } catch (e) {}
  const btn = document.getElementById('focus-mode-toggle');
  if (btn) btn.textContent = enabled ? '🎯 إيقاف وضع التركيز' : '🎯 تفعيل وضع التركيز';
  let exitBtn = document.getElementById('focus-exit-fab');
  if (enabled && !exitBtn) {
    exitBtn = document.createElement('button');
    exitBtn.id = 'focus-exit-fab';
    exitBtn.textContent = '✕ خروج من التركيز';
    exitBtn.onclick = toggleFocusMode;
    exitBtn.style.cssText = 'position:fixed; top:20px; left:20px; z-index:99998; background:var(--accent); color:#fff; border:none; padding:10px 16px; border-radius:24px; font-weight:700; font-size:.85rem; cursor:pointer; box-shadow:0 4px 12px rgba(0,0,0,0.2); font-family:inherit;';
    document.body.appendChild(exitBtn);
  } else if (!enabled && exitBtn) {
    exitBtn.remove();
  }
}
window.toggleFocusMode = toggleFocusMode;
try { if (localStorage.getItem('bus214_focus_mode') === '1') setTimeout(toggleFocusMode, 100); } catch (e) {}

// ── PAST EXAMS (reuses Test Bank machinery via tbState._areaId) ──
function getPastExamStats(examId) {
  try {
    const all = JSON.parse(localStorage.getItem("bus214_past_exam_stats") || "{}");
    return all[examId] || {};
  } catch (e) { return {}; }
}
function savePastExamStats(examId, stats) {
  try {
    const all = JSON.parse(localStorage.getItem("bus214_past_exam_stats") || "{}");
    all[examId] = stats;
    localStorage.setItem("bus214_past_exam_stats", JSON.stringify(all));
  } catch (e) {}
}

function startPastExamTB(selectedCh) {
  if (!window.PAST_EXAMS) return;
  // Aggregate every past-exam question, then filter by chapter
  let allQs = [];
  window.PAST_EXAMS.forEach(e => allQs.push(...e.questions));
  let pool = (selectedCh === "all" || !selectedCh) ? allQs : allQs.filter(q => q.ch === selectedCh);
  const count = parseInt(document.getElementById("pe-count").value || "20");
  pool = pool.sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));
  pool.forEach(q => delete q._tbDisp);
  // Route TB machinery to PE area
  tbState = {
    questions: pool, current: 0, correct: 0, wrong: 0, answered: false, wrongList: [],
    _areaId: "pe-quiz-area", _chId: "pe-setup-exams", _setId: "pe-setup-settings"
  };
  // Make retry/exam-mode honor PE toggles by aliasing to TB globals
  window._tbRetryEnabled = !!window._peRetryEnabled;
  window._tbExamMode = !!window._peExamMode;
  if (typeof tbClearResume === "function") tbClearResume();
  const chSec = document.getElementById("pe-setup-exams");
  const setSec = document.getElementById("pe-setup-settings");
  if (chSec) chSec.style.display = "none";
  if (setSec) setSec.style.display = "none";
  renderTBQuestion();
  const area = document.getElementById("pe-quiz-area");
  if (area) area.scrollIntoView({ behavior: "smooth", block: "start" });
}

function peShowSetup() {
  // Reset TB state to default IDs (so other flows are not affected)
  tbState = { questions: [], current: 0, correct: 0, wrong: 0, answered: false, wrongList: [] };
  const chSec = document.getElementById("pe-setup-exams");
  const setSec = document.getElementById("pe-setup-settings");
  const area = document.getElementById("pe-quiz-area");
  if (chSec) chSec.style.display = "";
  if (setSec) setSec.style.display = "";
  if (area) area.innerHTML = "";
}
// ── MOCK EXAM ─────────────────────────────────
function startMock() {
  mockClearResume();
  const pool = [...testBankQ].sort(() => Math.random() - 0.5).slice(0, 30);
  mockQs = pool; mockIdx = 0; mockCorrect = 0; mockWrong = 0; mockAnswers = [];
  mockTimeRemaining = mockTimeLimit;
  document.body.classList.add('mock-mode');
  document.getElementById("mock-start-screen").style.display = "none";
  document.getElementById("mock-game-screen").style.display = "block";
  document.getElementById("mock-result-screen").style.display = "none";
  clearInterval(mockTimerInt);
  mockTimerInt = setInterval(() => {
    mockTimeRemaining = Math.max(0, mockTimeRemaining - 1);
    const m = Math.floor(mockTimeRemaining / 60), s = mockTimeRemaining % 60;
    const timerEl = document.getElementById("mock-timer");
    timerEl.textContent = "⏱ " + m + ":" + (s < 10 ? "0" : "") + s;
    if (mockTimeRemaining <= 300) {
      timerEl.classList.add("pulse-red");
    } else {
      timerEl.classList.remove("pulse-red");
    }
    if (typeof mockSaveResume === 'function' && mockTimeRemaining % 5 === 0) mockSaveResume();
    if (mockTimeRemaining <= 0) endMock();
  }, 1000);
  renderMockQ();
}

function renderMockQ() {
  mockAnswered = false;
  if (mockIdx >= mockQs.length) { endMock(); return; }
  const q = mockQs[mockIdx];
  const pct = (mockIdx / mockQs.length) * 100;
  document.getElementById("mock-progress-fill").style.width = pct + "%";
  document.getElementById("mock-counter").textContent = `Q ${mockIdx + 1} / ${mockQs.length}`;
  const chLabels = (window.CH_LABELS && window.CH_LABELS.short) || { ch1: "Chapter 1", ch2: "Chapter 2", ch3: "Chapter 3" };
  document.getElementById("mock-ch-tag").textContent = chLabels[q.ch] || q.ch;
  document.getElementById("mock-q-text").textContent = q.q;
  const optsDiv = document.getElementById("mock-opts");
  optsDiv.innerHTML = "";
  q.opts.forEach((o, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-mcq-btn";
    btn.textContent = ["A","B","C","D","E"][i] + ". " + o;
    btn.onclick = () => handleMockAnswer(i);
    optsDiv.appendChild(btn);
  });
  document.getElementById("mock-feedback").textContent = "";
  document.getElementById("mock-feedback").className = "quiz-feedback";
  document.getElementById("mock-next-btn").style.display = "none";
}

let mockAnswered = false;
function handleMockAnswer(chosen) {
  if (mockAnswered) return;
  mockAnswered = true;
  const q = mockQs[mockIdx];
  const allBtns = document.querySelectorAll("#mock-opts .quiz-mcq-btn");
  allBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.ans) btn.classList.add("correct");
    else if (i === chosen) btn.classList.add("wrong");
  });
  if (chosen === q.ans) {
    mockCorrect++;
    document.getElementById("mock-feedback").textContent = "✅ Correct!";
    document.getElementById("mock-feedback").className = "quiz-feedback correct";
    if (window.SFX) SFX.play('correct');
  } else {
    mockWrong++;
    document.getElementById("mock-feedback").textContent = "❌ Wrong — The correct answer is: " + ["A","B","C","D","E"][q.ans] + ". " + q.opts[q.ans];
    document.getElementById("mock-feedback").className = "quiz-feedback wrong shake";
    if (window.SFX) SFX.play('wrong');
    if (typeof saveWrongAnswer === 'function') saveWrongAnswer(q, chosen);
  }
  
  // Show contrast message if in Confusion Drill mode
  if (window._currentConfusionContrast) {
    let contrastMsg = document.getElementById("confusion-contrast-msg");
    if (!contrastMsg) {
      contrastMsg = document.createElement("div");
      contrastMsg.id = "confusion-contrast-msg";
      contrastMsg.style.cssText = "margin-top:15px; padding:12px; background:var(--accent-soft); border:1.5px solid var(--accent); border-radius:10px; font-weight:bold; color:var(--text); text-align:right;";
      document.getElementById("mock-opts").parentNode.insertBefore(contrastMsg, document.getElementById("mock-opts").nextSibling);
    }
    contrastMsg.innerHTML = window._currentConfusionContrast;
    contrastMsg.style.display = "block";
  }

  updateQStats(q.q, chosen === q.ans);
  mockAnswers.push({ q: mockQs[mockIdx], chosen });
  window.mockAnswers = mockAnswers;
  document.getElementById("mock-next-btn").style.display = "block";
  if (typeof mockSaveProgress === 'function') mockSaveProgress();
}

function nextMockQ() {
  mockIdx++;
  renderMockQ();
}

function endMock() {
  clearInterval(mockTimerInt);
  document.body.classList.remove('mock-mode');
  if (typeof mockClearResume === 'function') mockClearResume();
  const total = mockCorrect + mockWrong;
  const pct = total ? Math.round((mockCorrect / total) * 100) : 0;
  document.getElementById("mock-game-screen").style.display = "none";
  document.getElementById("mock-result-screen").style.display = "block";
  document.getElementById("mock-final-score").textContent = pct + "%";
  const grade = pct >= 90 ? "A+" : pct >= 80 ? "A" : pct >= 70 ? "B" : pct >= 60 ? "C" : "F";
  document.getElementById("mock-grade").textContent = grade;
  document.getElementById("mock-res-correct").textContent = mockCorrect;
  document.getElementById("mock-res-wrong").textContent = mockWrong;
  document.getElementById("mock-timer").style.display = "inline-block"; // restore timer
  window._currentConfusionContrast = null; // clear drill state
  let contrastMsg = document.getElementById("confusion-contrast-msg");
  if (contrastMsg) contrastMsg.style.display = "none";
  // Update best scores
  if (!bestScores['all'] || pct > bestScores['all']) bestScores['all'] = pct;
  localStorage.setItem('bus214_bestScores', JSON.stringify(bestScores));
  totalQuizzes++;
  totalCorrect += mockCorrect;
  totalWrong += mockWrong;
  localStorage.setItem('bus214_totalQuizzes', totalQuizzes);
  localStorage.setItem('bus214_totalCorrect', totalCorrect);
  localStorage.setItem('bus214_totalWrong', totalWrong);
  // Confetti + sound for high scores
  if (pct >= 80 && window.launchConfetti) launchConfetti();
  if (window.SFX) SFX.play('complete');
  updateStreak();
  if (typeof renderMasteryBadges === 'function') renderMasteryBadges();
  if (typeof renderHomeMastery === 'function') renderHomeMastery();
  // Render solutions
  const letters = ["A","B","C","D","E"];
  let solHtml = mockAnswers.map((a, i) => {
    const isCorrect = a.chosen === a.q.ans;
    return `<div class="mock-sol-item ${isCorrect ? 'mock-sol-ok' : 'mock-sol-wrong'}">
      <div class="mock-sol-q">${i+1}. ${a.q.q}</div>
      ${a.q.opts.map((opt, j) => {
        let cls = '';
        if (j === a.q.ans) cls = 'mock-sol-correct';
        else if (j === a.chosen && !isCorrect) cls = 'mock-sol-chosen';
        return `<div class="mock-sol-opt ${cls}">${letters[j]}. ${opt}</div>`;
      }).join('')}
    </div>`;
  }).join('');
  const solEl = document.getElementById('mock-solutions');
  if (solEl) solEl.innerHTML = solHtml;
}

function retakeMock() {
  document.getElementById("mock-result-screen").style.display = "none";
  document.getElementById("mock-start-screen").style.display = "block";
}

// ── FLASH CARDS ───────────────────────────────
let fcFilter = "all";

function initFlashCards() {
  fcFilter = "all";
  loadFlashCards();
}

function loadFlashCards() {
  let cards = fcFilter === "all" ? flashCards : flashCards.filter(c => c.ch === fcFilter);
  // Exclude already-mastered cards from current pool
  currentFlashCards = [...cards].filter(c => !fcMasteredSet.has(c.ch + '|' + c.front)).sort(() => Math.random() - 0.5);
  if (currentFlashCards.length === 0) currentFlashCards = [...cards].sort(() => Math.random() - 0.5);
  fcIdx = 0;
  renderFlashCard();
  updateFCProgress();
  updateFCMasteredBadge();
}

function setFCFilter(f) {
  fcFilter = f;
  document.querySelectorAll('.fc-filter-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`[data-fc="${f}"]`);
  if (btn) btn.classList.add('active');
  loadFlashCards();
}

function renderFlashCard() {
  if (currentFlashCards.length === 0) {
    document.getElementById("fc-front").textContent = "لا توجد بطاقات";
    document.getElementById("fc-back").textContent = "";
    return;
  }
  const card = currentFlashCards[fcIdx];
  document.getElementById("fc-front").textContent = card.front;
  document.getElementById("fc-back").textContent = card.back;
  const el = document.getElementById("flash-card");
  if (el) el.classList.remove("flipped");
  // أخفي أزرار التقييم، أظهر Prev/Next
  const rating = document.getElementById("fc-rating-row");
  const nav    = document.getElementById("fc-nav-row");
  if (rating) rating.style.display = 'none';
  if (nav)    nav.style.display    = 'flex';
  document.getElementById("fc-counter").textContent = `${fcIdx + 1} / ${currentFlashCards.length}`;
}

function flipCard() {
  const el = document.getElementById("flash-card");
  if (!el) return;
  el.classList.toggle("flipped");
  const rating = document.getElementById("fc-rating-row");
  const nav    = document.getElementById("fc-nav-row");
  if (el.classList.contains("flipped")) {
    // بعد القلب: أظهر أزرار التقييم، أخفي Prev/Next
    if (rating) rating.style.display = 'flex';
    if (nav)    nav.style.display    = 'none';
  } else {
    if (rating) rating.style.display = 'none';
    if (nav)    nav.style.display    = 'flex';
  }
}

function nextCard() {
  if (currentFlashCards.length === 0) return;
  fcIdx = (fcIdx + 1) % currentFlashCards.length;
  renderFlashCard();
  updateFCProgress();
}

function prevCard() {
  if (currentFlashCards.length === 0) return;
  fcIdx = (fcIdx - 1 + currentFlashCards.length) % currentFlashCards.length;
  renderFlashCard();
  updateFCProgress();
}

function updateFCProgress() {
  const bar = document.getElementById("fc-progress-bar");
  if (bar && currentFlashCards.length > 0) {
    bar.style.width = ((fcIdx + 1) / currentFlashCards.length * 100) + "%";
  }
}

// Spaced repetition state (persisted per filter session)
let fcMasteredSet = new Set(JSON.parse(localStorage.getItem('bus214_fc_mastered') || '[]'));

function markCard(rating) {
  if (currentFlashCards.length === 0) return;
  const card = currentFlashCards[fcIdx];
  const key = card.ch + '|' + card.front;

  if (rating === 'easy') {
    // Mark as mastered — remove from current queue
    fcMasteredSet.add(key);
    localStorage.setItem('bus214_fc_mastered', JSON.stringify([...fcMasteredSet]));
    currentFlashCards.splice(fcIdx, 1);
    if (currentFlashCards.length === 0) {
      document.getElementById("fc-front").textContent = "🎉 أتقنت جميع البطاقات!";
      document.getElementById("fc-back").textContent = "";
      const rating = document.getElementById("fc-rating-row");
      const nav = document.getElementById("fc-nav-row");
      if (rating) rating.style.display = 'none';
      if (nav) nav.style.display = 'flex';
      updateFCMasteredBadge();
      return;
    }
    if (fcIdx >= currentFlashCards.length) fcIdx = 0;
  } else if (rating === 'hard') {
    // Re-insert card 2 positions ahead so student sees it again soon
    const insertAt = Math.min(fcIdx + 2, currentFlashCards.length);
    currentFlashCards.splice(insertAt, 0, { ...card });
    fcIdx = (fcIdx + 1) % currentFlashCards.length;
  } else {
    // OK — just advance
    fcIdx = (fcIdx + 1) % currentFlashCards.length;
  }

  renderFlashCard();
  updateFCProgress();
  updateFCMasteredBadge();
}

function updateFCMasteredBadge() {
  const badge = document.getElementById('fc-mastered-badge');
  const countEl = document.getElementById('fc-mastered-count');
  if (!badge || !countEl) return;
  const count = fcMasteredSet.size;
  if (count > 0) {
    badge.style.display = 'inline-block';
    countEl.textContent = count;
  } else {
    badge.style.display = 'none';
  }
}

function resetMastered() {
  fcMasteredSet = new Set();
  localStorage.removeItem('bus214_fc_mastered');
  updateFCMasteredBadge();
  loadFlashCards();
}

// ── DASHBOARD ────────────────────────────────
function renderDashboard() {
  const totalQ = totalCorrect + totalWrong;
  const acc = totalQ ? Math.round(totalCorrect / totalQ * 100) : 0;
  const el = document.getElementById("dash-streak");
  if (el) el.textContent = streakData.count + " 🔥";
  const el2 = document.getElementById("dash-accuracy");
  if (el2) el2.textContent = acc + "%";
  const el3 = document.getElementById("dash-quizzes");
  if (el3) el3.textContent = totalQuizzes;
  const el4 = document.getElementById("dash-best-all");
  if (el4) el4.textContent = bestScores["all"] !== undefined ? bestScores["all"] + "%" : "—";
  const el5 = document.getElementById("dash-best-ch1");
  if (el5) el5.textContent = bestScores["ch1"] !== undefined ? bestScores["ch1"] + "%" : "—";
  const el6 = document.getElementById("dash-best-ch2");
  if (el6) el6.textContent = bestScores["ch2"] !== undefined ? bestScores["ch2"] + "%" : "—";
  const el7 = document.getElementById("dash-best-ch3");
  if (el7) el7.textContent = bestScores["ch3"] !== undefined ? bestScores["ch3"] + "%" : "—";

  // Update visual bars
  const barAll = document.getElementById("dash-bar-all");
  if (barAll) barAll.style.width = (bestScores["all"] || 0) + "%";
  const barCh1 = document.getElementById("dash-bar-ch1");
  if (barCh1) barCh1.style.width = (bestScores["ch1"] || 0) + "%";
  const barCh2 = document.getElementById("dash-bar-ch2");
  if (barCh2) barCh2.style.width = (bestScores["ch2"] || 0) + "%";
  const barCh3 = document.getElementById("dash-bar-ch3");
  if (barCh3) barCh3.style.width = (bestScores["ch3"] || 0) + "%";

  // Weak Area Alert
  const weakEl = document.getElementById("dash-weak-alert");
  if (weakEl) {
    const chNames = { ch1: 'الفصل الأول (أخلاقيات الأعمال)', ch2: 'الفصل الثاني (أصحاب المصلحة)', ch3: 'الفصل الثالث (الاستدامة)' };
    const scores = ['ch1','ch2','ch3'].map(ch => ({ ch, score: bestScores[ch] })).filter(x => x.score !== undefined);
    if (scores.length === 0) {
      weakEl.style.display = 'none';
    } else {
      const weakest = scores.reduce((a, b) => a.score < b.score ? a : b);
      const strongest = scores.reduce((a, b) => a.score > b.score ? a : b);
      let msg = '', bg = '', textColor = '', icon = '';
      const isDark = document.body.classList.contains('dark');
      if (weakest.score < 60) {
        icon = '🔴';
        bg = isDark ? 'rgba(220,38,38,0.12)' : '#fef2f2';
        textColor = isDark ? '#F87171' : '#991B1B';
        msg = `ركز على <strong>${chNames[weakest.ch]}</strong> — درجتك ${weakest.score}% تحتاج تحسين`;
      } else if (weakest.score < 80) {
        icon = '🟡';
        bg = isDark ? 'rgba(245,158,11,0.12)' : '#fffbeb';
        textColor = isDark ? '#FBBF24' : '#92400E';
        msg = `<strong>${chNames[weakest.ch]}</strong> هو أضعف فصل لديك (${weakest.score}%) — راجعه قبل الاختبار`;
      } else {
        icon = '🟢';
        bg = isDark ? 'rgba(5,150,105,0.12)' : '#f0fdf4';
        textColor = isDark ? '#34D399' : '#065F46';
        msg = `أداء ممتاز! أعلى درجة في <strong>${chNames[strongest.ch]}</strong> (${strongest.score}%)`;
      }
      weakEl.style.display = 'flex';
      weakEl.style.background = bg;
      weakEl.style.borderRadius = '14px';
      weakEl.style.padding = '14px 18px';
      weakEl.style.alignItems = 'center';
      weakEl.style.gap = '12px';
      weakEl.innerHTML = `<span style="font-size:1.2rem;">${icon}</span><span style="font-size:.88rem;line-height:1.6;color:${textColor};font-weight:600;">${msg}</span>`;
    }
  }
}

// ── HOME PAGE — MASTERY BARS ──────────────────
function renderHomeMastery() {
  const bestScores = JSON.parse(localStorage.getItem('bus214_bestScores') || '{}');
  ['ch1','ch2','ch3'].forEach(ch => {
    const pct = bestScores[ch] !== undefined ? bestScores[ch] : null;
    const bar = document.getElementById('home-bar-' + ch);
    const lbl = document.getElementById('home-pct-' + ch);
    if (bar) bar.style.width = (pct !== null ? pct : 0) + '%';
    if (lbl) lbl.textContent = pct !== null ? pct + '%' : '—';
  });
}

// ── HOME PAGE — CONCEPT OF THE DAY ────────────
function renderConceptOfDay() {
  if (typeof flashCards === 'undefined') return;
  const cards = Array.isArray(flashCards) ? flashCards : Object.values(flashCards);
  if (!cards.length) return;
  const dayIndex = Math.floor(Date.now() / 86400000) % cards.length;
  const card = cards[dayIndex];
  const chLabels = (window.CH_LABELS && window.CH_LABELS.cotd) || { ch1:'📖 الفصل الأول', ch2:'🤝 الفصل الثاني', ch3:'🌱 الفصل الثالث' };
  const el = id => document.getElementById(id);
  if (el('cotd-chapter')) el('cotd-chapter').textContent = chLabels[card.ch] || card.ch;
  if (el('cotd-term'))    el('cotd-term').textContent    = card.front || card.term || '';
  if (el('cotd-def'))     el('cotd-def').textContent     = card.back  || card.def  || '';
}

// ── SEARCH ────────────────────────────────────
const SEARCH_PAGES = (window.SEARCH_PAGES_OVERRIDE) || [
  { id: 'page-ch1', label: '📖 Chapter 1 — Business Ethics' },
  { id: 'page-ch2', label: '🤝 Chapter 2 — Stakeholders & Governance' },
  { id: 'page-ch3', label: '🌱 Chapter 3 — Sustainability' },
  { id: 'page-quick', label: '⚡ Quick Review' },
];

function openSearch() {
  const ov = document.getElementById('search-overlay');
  ov.classList.add('open');
  ov.style.display = 'flex';
  setTimeout(() => document.getElementById('search-input').focus(), 50);
}

function closeSearch() {
  const ov = document.getElementById('search-overlay');
  ov.classList.remove('open');
  ov.style.display = 'none';
  document.getElementById('search-input').value = '';
  document.getElementById('search-results').innerHTML = '<p style="color:var(--muted);font-size:.85rem;text-align:center;margin:0;">اكتب للبحث في الفصول الثلاثة</p>';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSearch();
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
});

function runSearch(query) {
  const container = document.getElementById('search-results');
  query = query.trim().toLowerCase();
  if (query.length < 2) {
    container.innerHTML = '<p style="color:var(--muted);font-size:.85rem;text-align:center;margin:0;">اكتب للبحث في الفصول الثلاثة</p>';
    return;
  }
  
  // Advanced Synonym Mapping
  const synonyms = {
    "ethics": "أخلاق", "أخلاق": "ethics",
    "fraud": "احتيال", "احتيال": "fraud",
    "bribery": "رشوة", "رشوة": "bribery",
    "dilemma": "معضلة", "معضلة": "dilemma",
    "culture": "ثقافة", "ثقافة": "culture",
    "justice": "عدالة", "عدالة": "justice",
    "philosophy": "فلسفة", "فلسفة": "philosophy",
    "virtue": "فضيلة", "فضيلة": "virtue",
    "stakeholder": "أصحاب المصلحة", "مصلحة": "stakeholder"
  };
  
  let searchTerms = [query];
  Object.keys(synonyms).forEach(key => {
    if (query.includes(key)) searchTerms.push(synonyms[key]);
  });
  
  const results = [];
  const searchRegexes = searchTerms.map(term => new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'));

  SEARCH_PAGES.forEach(({ id, label }) => {
    const pageEl = document.getElementById(id);
    if (!pageEl) return;
    const nodes = pageEl.querySelectorAll('li, td, p, h3, h4, .qr-def, .qr-term, .mk-term, .mk-desc');
    nodes.forEach(node => {
      const text = node.innerText || node.textContent || '';
      let isMatch = false;
      let matchedRegex = null;
      for (const re of searchRegexes) {
        if (re.test(text)) {
          isMatch = true;
          matchedRegex = re;
          re.lastIndex = 0;
          break;
        }
      }
      
      if (isMatch) {
        const snippet = text.replace(/\s+/g, ' ').trim().substring(0, 150);
        const highlighted = snippet.replace(matchedRegex, m => `<mark style="background:#FEF08A;color:#854D0E;padding:0 4px;border-radius:4px;font-weight:bold;">${m}</mark>`);
        // Ensure we don't add duplicates
        if (!results.find(r => r.html === highlighted)) {
          results.push({ pageId: id, pageLabel: label, html: highlighted });
        }
      }
    });
  });
  
  // NOTE: allQuizQ search is intentionally REMOVED to protect Mock Exam integrity.

  if (results.length === 0) {
    container.innerHTML = '<p style="color:var(--muted);font-size:.85rem;text-align:center;margin:0;">لا نتائج — No results found</p>';
    return;
  }
  container.innerHTML = results.slice(0, 15).map(r => `
    <div class="search-result" onclick="goToResult('${r.pageId}')">
      <div class="search-result-page">${r.pageLabel}</div>
      <div class="search-result-text">${r.html}</div>
    </div>`).join('');
}

function goToResult(pageId) {
  closeSearch();
  showPage(pageId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── CHAPTER QUIZ ──────────────────────────────
function handleChQ(btn, isCorrect) {
  const item = btn.closest('.chq-item');
  if (item.dataset.answered) return;
  item.dataset.answered = '1';
  if (isCorrect) item.dataset.correct = '1';
  
  const qText = item.querySelector('.chq-text') ? item.querySelector('.chq-text').innerText : '';
  if (qText) updateQStats(qText, isCorrect);
  item.querySelectorAll('.chq-btn').forEach(b => {
    b.disabled = true;
    if (b === btn) b.classList.add(isCorrect ? 'chq-correct' : 'chq-wrong');
  });
  // highlight correct btn when user answered wrong
  if (!isCorrect) {
    item.classList.add('shake');
    item.querySelectorAll('.chq-btn').forEach(b => {
      if (b.getAttribute('onclick').includes('true')) b.classList.add('chq-correct');
    });
  }
  // update score once all answered
  const block = item.closest('.ch-quiz-block');
  const items = block.querySelectorAll('.chq-item');
  const answered = block.querySelectorAll('.chq-item[data-answered]');
  if (answered.length === items.length) {
    const correct = block.querySelectorAll('.chq-item[data-correct]').length;
    const scoreEl = block.querySelector('.chq-score');
    const pct = Math.round(correct / items.length * 100);
    scoreEl.textContent = `نتيجتك: ${correct}/${items.length} — ${pct}% ${pct===100?'🏆':pct>=80?'🥇':pct>=60?'👍':'📚'}`;
    scoreEl.style.display = 'block';
  }
}

// ═══════════════════════════════════════════════
//  FEATURE: PDF EXPORT — Test Bank
// ═══════════════════════════════════════════════
function exportTestBankPDF(ch) {
  const letters = ['A','B','C','D','E'];
  const pool = ch === 'all' ? testBankQ : testBankQ.filter(q => q.ch === ch);
  const chNames = (window.CH_LABELS && window.CH_LABELS.tbLong) || { ch1: 'Chapter 1 — Business Ethics', ch2: 'Chapter 2 — Stakeholders & Governance', ch3: 'Chapter 3 — Sustainability', all: 'Chapters 1–3' };
  const chColors = { ch1: '#2563EB', ch2: '#7C3AED', ch3: '#10b981', all: '#1e293b' };
  const color = chColors[ch] || '#1e293b';
  const w = window.open('', '_blank');
  let html = `<!DOCTYPE html><html dir="ltr"><head><meta charset="UTF-8">
  <title>Test Bank — ${chNames[ch]}</title>
  <style>
    * { box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; max-width: 100%; }
    body { font-family: Arial, sans-serif; font-size: 11pt; margin: 20mm 15mm; color: #1e293b; word-wrap: break-word; overflow-wrap: break-word; hyphens: auto; }
    h1 { font-size: 16pt; color: ${color}; border-bottom: 2px solid ${color}; padding-bottom: 8px; margin-bottom: 4px; }
    .meta { font-size: 9pt; color: #64748b; margin-bottom: 20px; }
    .q-block { margin-bottom: 18px; break-inside: avoid; page-break-inside: avoid; }
    .q-num { font-weight: 800; color: ${color}; margin-bottom: 4px; font-size: 10pt; }
    .q-text { font-weight: 600; margin-bottom: 6px; line-height: 1.5; word-wrap: break-word; overflow-wrap: break-word; white-space: normal; }
    .opt { padding: 2px 0 2px 12px; font-size: 10.5pt; line-height: 1.5; word-wrap: break-word; overflow-wrap: break-word; white-space: normal; }
    .opt.correct { font-weight: 700; color: #16a34a; }
    .divider { border: none; border-top: 1px solid #e2e8f0; margin: 14px 0; }
    @media print { body { margin: 10mm 12mm; } @page { margin: 12mm 10mm; } }
  </style></head><body>
  <h1>📋 Test Bank — ${chNames[ch]}</h1>
  <div class="meta">Ferrell, Business Ethics 13e &nbsp;·&nbsp; ${pool.length} Questions &nbsp;·&nbsp; BUS 214</div>`;

  pool.forEach((q, idx) => {
    const isTF = q.opts.length <= 2;
    html += `<div class="q-block">
      <div class="q-num">Q${idx + 1}${isTF ? ' [T/F]' : ''}</div>
      <div class="q-text">${q.q}</div>`;
    q.opts.forEach((o, i) => {
      const isAns = i === q.ans;
      html += `<div class="opt${isAns ? ' correct' : ''}">${letters[i]}. ${o}${isAns ? ' ✓' : ''}</div>`;
    });
    html += `</div><hr class="divider">`;
  });

  html += `</body></html>`;
  w.document.write(html);
  w.document.close();
  setTimeout(() => w.print(), 500);
}

// ═══════════════════════════════════════════════
//  FEATURE: PDF EXPORT — Wrong Answers Summary
// ═══════════════════════════════════════════════
function exportWrongAnswersPDF(mode) {
  let wrong = [];
  if (mode === 'mock') {
    wrong = (window.mockAnswers || []).filter(a => a.chosen !== a.q.ans);
  } else {
    wrong = (window.quizAnswerLog || []).filter(a => a.chosen !== a.q.ans);
  }
  const chNames = (window.CH_LABELS && window.CH_LABELS.short) || { ch1:'Chapter 1', ch2:'Chapter 2', ch3:'Chapter 3' };
  const w = window.open('', '_blank');
  if (!w) { alert('فعّل النوافذ المنبثقة للتصدير'); return; }
  w.document.write(`<!DOCTYPE html><html dir="ltr"><head><meta charset="UTF-8">
    <title>BUS 214 — Wrong Answers Review</title>
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: system-ui, sans-serif; padding: 32px; color: #1a1a1a; max-width: 800px; margin: 0 auto; }
      h1 { font-size: 1.5rem; color: #2563EB; margin-bottom: 4px; }
      .meta { color: #666; font-size: .85rem; margin-bottom: 24px; }
      .card { border: 1.5px solid #e5e7eb; border-radius: 12px; padding: 16px; margin-bottom: 14px; page-break-inside: avoid; box-shadow: 0 3px 10px rgba(0,0,0,.05); }
      .q-text { font-weight: 600; margin-bottom: 8px; line-height: 1.6; }
      .opts { list-style: none; }
      .opts li { padding: 4px 8px; border-radius: 6px; margin: 3px 0; font-size: .9rem; }
      .opts li.correct { background: #dcfce7; color: #166534; font-weight: 700; }
      .opts li.wrong { background: #fee2e2; color: #991b1b; text-decoration: line-through; }
      .ch-tag { display: inline-block; background: #ede9fe; color: #2563EB; font-size: .75rem; font-weight: 700; padding: 2px 8px; border-radius: 6px; margin-bottom: 8px; }
      .no-print { margin-bottom: 20px; }
      @media print { .no-print { display: none; } }
    </style></head><body>
    <div class="no-print"><button onclick="window.print()" style="background:#2563EB;color:#fff;border:none;padding:10px 24px;border-radius:8px;font-weight:600;cursor:pointer;">🖨️ Print / Save as PDF</button></div>
    <h1>BUS 214 — Wrong Answers Review</h1>
    <p class="meta">${wrong.length} wrong answers · ${new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})}</p>`);
  if (wrong.length === 0) {
    w.document.write('<p style="text-align:center;padding:40px;color:#16a34a;font-size:1.2rem;font-weight:700;">🎉 No wrong answers!</p>');
  } else {
    wrong.forEach(({ q, chosen }, idx) => {
      const optsHtml = q.opts.map((opt, i) => {
        let cls = i === q.ans ? 'correct' : (i === chosen ? 'wrong' : '');
        return `<li class="${cls}">${String.fromCharCode(65+i)}. ${opt}</li>`;
      }).join('');
      w.document.write(`<div class="card"><span class="ch-tag">${chNames[q.ch]||q.ch}</span><div class="q-text">${idx+1}. ${q.q}</div><ul class="opts">${optsHtml}</ul></div>`);
    });
  }
  w.document.write('</body></html>');
  w.document.close();
}

// ═══════════════════════════════════════════════
//  FEATURE: SHARE RESULT AS IMAGE
// ═══════════════════════════════════════════════
function shareResult(mode) {
  const canvas = document.getElementById('share-canvas');
  const ctx = canvas.getContext('2d');
  const W = 600, H = 400;
  canvas.width = W; canvas.height = H;
  let score, correct, wrong;
  if (mode === 'mock') {
    score = document.getElementById('mock-final-score')?.textContent || '—';
    correct = document.getElementById('mock-res-correct')?.textContent || '—';
    wrong = document.getElementById('mock-res-wrong')?.textContent || '—';
  } else {
    score = document.getElementById('quiz-final-score')?.textContent || '—';
    correct = document.getElementById('res-correct')?.textContent || '—';
    wrong = document.getElementById('res-wrong')?.textContent || '—';
  }
  const scoreNum = parseInt(score) || 0;
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, '#0B1120'); grad.addColorStop(1, '#1E3A5F');
  ctx.fillStyle = grad; ctx.fillRect(0, 0, W, H);
  ctx.globalAlpha = 0.08; ctx.fillStyle = '#2563EB';
  ctx.beginPath(); ctx.arc(500, 80, 120, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(100, 350, 80, 0, Math.PI*2); ctx.fill();
  ctx.globalAlpha = 1;
  ctx.fillStyle = '#60A5FA'; ctx.font = 'bold 18px system-ui'; ctx.textAlign = 'center';
  ctx.fillText('BUS 214 Study Hub', W/2, 45);
  ctx.fillStyle = '#93C5FD'; ctx.font = '14px system-ui';
  ctx.fillText((mode === 'mock' ? 'Mock Exam' : 'Quiz') + ' Result', W/2, 70);
  const cx = W/2, cy = 175, r = 65;
  const col = scoreNum >= 85 ? '#16a34a' : scoreNum >= 70 ? '#d97706' : scoreNum >= 55 ? '#ea580c' : '#dc2626';
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.fillStyle = col; ctx.globalAlpha = 0.2; ctx.fill();
  ctx.globalAlpha = 1; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.strokeStyle = col; ctx.lineWidth = 4; ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = 'bold 42px system-ui'; ctx.fillText(score, cx, cy + 12);
  ctx.font = '13px system-ui'; ctx.fillStyle = '#94a3b8'; ctx.fillText('Score', cx, cy + 32);
  [{label:'Correct',value:correct,color:'#4ade80'},{label:'Wrong',value:wrong,color:'#f87171'}].forEach((s,i) => {
    const sx = 180 + i * 240;
    ctx.fillStyle = s.color; ctx.font = 'bold 28px system-ui'; ctx.fillText(s.value, sx, 300);
    ctx.fillStyle = '#94a3b8'; ctx.font = '12px system-ui'; ctx.fillText(s.label, sx, 320);
  });
  ctx.fillStyle = '#475569'; ctx.font = '11px system-ui'; ctx.fillText('bus-214-study-hub.vercel.app', W/2, 375);
  canvas.toBlob(async (blob) => {
    const file = new File([blob], 'bus214-result.png', { type: 'image/png' });
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], title: 'BUS 214 Result', text: `حصلت على ${score} في BUS 214! 🎓` }); } catch(e) { dlImg(blob); }
    } else { dlImg(blob); }
  }, 'image/png');
}
function dlImg(blob) { const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download='bus214-result.png';document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(u); }

// ═══════════════════════════════════════════════
//  FEATURE: CHAPTER PDF EXPORT (Summary Booklet)
// ═══════════════════════════════════════════════
function exportChapterPDF(pageId, chapterName) {
  const page = document.getElementById(pageId);
  if (!page) return;
  const isDark = document.body.classList.contains('dark');
  const p = isDark ? {
    c1:'#60A5FA',c2:'#3B82F6',c3:'#93C5FD',bg1:'#0B1D3A',bg2:'#1a1744',bg3:'#2e1065',
    line:'#1E3A5F',ink:'#e8e4f8',muted:'#a5a0c8',paper:'#0B1D3A',bodyBg:'#0f0d1a',
    tipBg:'#1a1506',tipBorder:'#78350f',tipAccent:'#fbbf24',tipText:'#fde68a',
    memoBg:'#0c1929',memoBorder:'#1e3a5f',memoAccent:'#60a5fa',memoText:'#93c5fd',
    coverGrad:'linear-gradient(160deg,#0f0520 0%,#0B1D3A 30%,#2563EB 70%,#60A5FA 100%)',
    svgStops:['#0f0520','#0B1D3A','#2563EB','#60A5FA']
  } : {
    c1:'#2563EB',c2:'#5b54d9',c3:'#4338ca',bg1:'#ede9fe',bg2:'#f5f3ff',bg3:'#e0e7ff',
    line:'#93C5FD',ink:'#1e293b',muted:'#64748b',paper:'#ffffff',bodyBg:'#ffffff',
    tipBg:'#fffbeb',tipBorder:'#fde68a',tipAccent:'#f59e0b',tipText:'#92400e',
    memoBg:'#eff6ff',memoBorder:'#bfdbfe',memoAccent:'#3b82f6',memoText:'#1e40af',
    coverGrad:'linear-gradient(160deg,#0B1D3A 0%,#1E3A5F 30%,#2563EB 70%,#60A5FA 100%)',
    svgStops:['#0B1D3A','#1E3A5F','#2563EB','#60A5FA']
  };
  const dateStr = new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
  const shadow = isDark ? 'rgba(0,0,0,.3)' : 'rgba(0,0,0,.06)';
  const shadowSm = isDark ? 'rgba(0,0,0,.2)' : 'rgba(0,0,0,.04)';
  const w = window.open('', '_blank');
  w.document.write(`<!DOCTYPE html><html dir="ltr"><head><meta charset="UTF-8">
    <title>BUS 214 — ${chapterName}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      @page { size: A4; margin: 12mm 14mm 12mm 14mm; }
      :root { --c1:${p.c1};--c2:${p.c2};--c3:${p.c3};--bg1:${p.bg1};--bg2:${p.bg2};--line:${p.line};--ink:${p.ink};--muted:${p.muted}; }
      * { box-sizing:border-box;margin:0;padding:0;word-wrap:break-word;overflow-wrap:break-word;max-width:100%; }
      body { font-family:'Inter',system-ui,sans-serif;color:var(--ink);line-height:1.55;font-size:11.5px;max-width:780px;margin:0 auto;background:${p.bodyBg};-webkit-font-smoothing:antialiased;word-wrap:break-word;overflow-wrap:break-word;hyphens:auto; }
      .toolbar { position:sticky;top:0;z-index:100;background:${isDark?p.paper:'#fff'};padding:14px 32px;border-bottom:1px solid ${isDark?p.line:'#e2e8f0'};display:flex;align-items:center;gap:14px;box-shadow:0 2px 12px rgba(0,0,0,${isDark?'.15':'.04'}); }
      .toolbar-btn { background:linear-gradient(135deg,var(--c1),var(--c2));color:#fff;border:none;padding:10px 28px;border-radius:10px;font-weight:700;cursor:pointer;font-size:.92rem;font-family:inherit;box-shadow:0 4px 14px rgba(108,99,255,.25); }
      .toolbar .hint { color:var(--muted);font-size:.82rem; }
      .content { padding:20px 24px 36px; }
      .section { margin-bottom:14px; }
      .section h3 { font-size:.95rem;font-weight:700;color:var(--c2);margin:10px 0 6px;padding-bottom:6px;border-bottom:1.5px solid var(--line); }
      .block { background:${isDark?p.paper:'#fff'};border:1.5px solid var(--line);border-left:5px solid var(--c1);border-radius:12px;padding:10px 14px;margin:6px 0;page-break-inside:avoid;box-shadow:0 4px 16px ${shadow},0 1px 3px ${shadowSm}; }
      .block strong { color:var(--c1); }
      .block em { color:var(--muted);font-style:italic; }
      .ar { direction:rtl;text-align:right;font-family:'Cairo',sans-serif;color:var(--c2);font-size:.82rem;font-weight:600;line-height:1.8;margin-top:4px;padding:4px 10px;background:var(--bg1);border-radius:8px;border-right:3px solid var(--c1); }
      .tip { background:${p.tipBg};border:1.5px solid ${p.tipBorder};border-left:5px solid ${p.tipAccent};border-radius:12px;padding:8px 14px;margin:6px 0;font-size:.86rem;page-break-inside:avoid;color:${p.tipText};box-shadow:0 4px 16px ${shadow}; }
      .tip strong { color:${p.tipAccent};font-weight:700; }
      .memo { background:${p.memoBg};border:1.5px solid ${p.memoBorder};border-left:5px solid ${p.memoAccent};border-radius:12px;padding:8px 14px;margin:6px 0;font-size:.86rem;page-break-inside:avoid;color:${p.memoText};box-shadow:0 4px 16px ${shadow}; }
      .note { background:${p.tipBg};border:1.5px solid ${p.tipBorder};border-left:5px solid ${p.tipAccent};border-radius:12px;padding:8px 14px;margin:6px 0;font-size:.86rem;page-break-inside:avoid;color:${p.tipText};box-shadow:0 4px 16px ${shadow}; }
      .note strong { color:${p.tipAccent};font-weight:700; }
      .step-wrap { margin:6px 0; }
      .step-card { display:flex;align-items:flex-start;gap:12px;background:${isDark?p.paper:'#fff'};border:1.5px solid var(--line);border-left:5px solid var(--c1);border-radius:12px;padding:10px 14px;margin:5px 0;page-break-inside:avoid;box-shadow:0 4px 16px ${shadow}; }
      .step-badge { background:var(--c1);color:#fff;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.85rem;flex-shrink:0;margin-top:1px; }
      .step-body { flex:1; }
      .hbox { background:var(--bg1);border:1.5px solid var(--line);border-radius:12px;padding:10px 14px;margin:6px 0;page-break-inside:avoid;box-shadow:0 3px 12px ${shadow}; }
      .hbox strong { color:var(--c2); }
      table { width:100%;border-collapse:separate;border-spacing:0;margin:6px 0;font-size:.82rem;border-radius:12px;overflow:hidden;border:1.5px solid var(--line);box-shadow:0 4px 16px ${shadow}; }
      th { background:var(--c2);color:#fff;padding:10px 14px;text-align:left;font-weight:700;font-size:.78rem; }
      td { padding:9px 14px;border-bottom:1px solid ${isDark?p.line:'#e5e7eb'};color:${isDark?p.muted:'#334155'};vertical-align:top; }
      tr:nth-child(even) td { background:var(--bg2); }
      tr:last-child td { border-bottom:none; }
      .footer { text-align:center;color:var(--muted);font-size:.72rem;padding:24px 0;border-top:1.5px solid ${isDark?p.line:'#e2e8f0'};margin-top:24px; }
      @media print {
        .toolbar { display:none !important; }
        body { padding:0;max-width:none;font-size:11px; }
        .content { padding:16px 0 32px; }
        .block,.tip,.memo,.hbox,.step-card,.note { break-inside:avoid;page-break-inside:avoid;box-shadow:none!important; }
        table { box-shadow:none!important;page-break-inside:auto; }
        tr { page-break-inside:avoid; }
        td,th { word-wrap:break-word;overflow-wrap:break-word;white-space:normal; }
        td { color:#334155 !important; }
        .section h3 { page-break-after:avoid; }
      }
    </style></head><body>
    <div class="toolbar">
      <button class="toolbar-btn" onclick="window.print()">🖨️ طباعة / حفظ كـ PDF</button>
      <span class="hint">اختر "Save as PDF" في خيارات الطابعة</span>
    </div>
    <div style="padding:28px 32px 20px;border-bottom:4px solid ${p.c1};margin-bottom:24px;">
      <div style="display:inline-block;border:1.5px solid ${p.c1};color:${p.c1};padding:4px 14px;border-radius:20px;font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:12px;">BUS 214 — Business Ethics</div>
      <h1 style="font-size:1.5rem;font-weight:900;color:${isDark ? p.c1 : p.c3};margin:0 0 6px;line-height:1.3;">${chapterName}</h1>
      <div style="font-size:.88rem;color:#64748b;">Ferrell · Business Ethics · 13th Edition</div>
      <div style="margin-top:12px;padding-top:10px;border-top:1px solid ${p.line};display:flex;gap:20px;font-size:.78rem;color:#94a3b8;">
        <span>📅 ${dateStr}</span>
        <span>📖 ملخص شامل</span>
        <span>🌐 bus-214-study-hub.vercel.app</span>
      </div>
    </div>
    <div class="content">
  `);

  // Process chapter content
  const sections = page.querySelectorAll('.summary-block, .chapter > table, .chapter > .benefits-grid, .chapter > .energy-grid');
  // Also get direct children of the chapter section
  const chapter = page.querySelector('.chapter');
  if (chapter) {
    const children = chapter.children;
    for (let i = 0; i < children.length; i++) {
      const el = children[i];
      const tag = el.tagName;
      const cls = el.className || '';

      if (tag === 'H2') continue; // Skip main title
      if (cls.includes('ch-pdf-btn') || tag === 'BUTTON') continue;
      if (el.style?.display === 'none') continue;

      if (tag === 'H3') {
        const arSpan = el.querySelector('.ar-line');
        const arText = arSpan ? arSpan.textContent : '';
        const mainText = el.textContent.replace(arText, '').trim();
        w.document.write('<h3>' + mainText + (arText ? ' <span style="direction:rtl;font-family:Cairo,sans-serif;color:var(--c1);font-size:.8rem;font-weight:600;">' + arText + '</span>' : '') + '</h3>');
      }
      else if (cls.includes('summary-block')) {
        w.document.write('<div class="section">');
        const h3 = el.querySelector('h3');
        if (h3) {
          const arSpan = h3.querySelector('.ar-line');
          const arText = arSpan ? arSpan.textContent : '';
          const mainText = h3.textContent.replace(arText, '').trim();
          w.document.write('<h3>' + mainText + (arText ? ' <span style="direction:rtl;font-family:Cairo,sans-serif;color:var(--c1);font-size:.8rem;font-weight:600;">' + arText + '</span>' : '') + '</h3>');
        }
        // Process children in order to preserve note-boxes and steps
        let sectionHtml = '';
        Array.from(el.children).forEach(child => {
          const cc = child.className || '';
          const ct = child.tagName;
          if (ct === 'H3') return;
          if (cc.includes('note-box')) {
            const arS = child.querySelector('.ar-line');
            const arT = arS ? arS.textContent : '';
            let nh = child.innerHTML;
            if (arS) nh = nh.replace(arS.outerHTML, '');
            sectionHtml += '<div class="tip">' + nh + (arT ? '<div class="ar">' + arT + '</div>' : '') + '</div>';
          } else if (cc.includes('steps-list')) {
            sectionHtml += '<div>';
            Array.from(child.querySelectorAll('.step-item')).forEach(item => {
              const numEl = item.querySelector('.step-num');
              const num = numEl ? numEl.textContent.trim() : '';
              const arS = item.querySelector('.ar-line');
              const arT = arS ? arS.textContent : '';
              let bh = item.innerHTML;
              if (numEl) bh = bh.replace(numEl.outerHTML, '');
              if (arS) bh = bh.replace(arS.outerHTML, '');
              sectionHtml += '<div class="block" style="display:flex;gap:10px;align-items:flex-start;"><div style="background:var(--c1);color:#fff;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.8rem;flex-shrink:0;">' + num + '</div><div>' + bh + (arT ? '<div class="ar">' + arT + '</div>' : '') + '</div></div>';
            });
            sectionHtml += '</div>';
          } else if (ct === 'UL' || ct === 'OL') {
            Array.from(child.querySelectorAll('li')).forEach(li => {
              const arS = li.querySelector('.ar-line');
              const arT = arS ? arS.textContent : '';
              let lh = li.innerHTML;
              if (arS) lh = lh.replace(arS.outerHTML, '');
              sectionHtml += '<div class="block">' + lh + (arT ? '<div class="ar">' + arT + '</div>' : '') + '</div>';
            });
          } else if (ct === 'TABLE' || cc.includes('summary-table')) {
            sectionHtml += child.outerHTML;
          } else if (cc.includes('benefit-card') || cc.includes('energy-card')) {
            sectionHtml += '<div class="hbox">' + child.innerHTML + '</div>';
          }
        });
        w.document.write(sectionHtml);
        w.document.write('</div>');
      }
      else if (tag === 'SPAN' && cls.includes('ar-line')) {
        // Top-level Arabic line (chapter subtitle)
        continue;
      }
      else if (tag === 'P' && el.style?.color) {
        // Source line
        continue;
      }
      else if (tag === 'TABLE' || cls.includes('summary-table')) {
        w.document.write(el.outerHTML);
      }
      else if (cls.includes('key-takeaways')) {
        const header = el.querySelector('div');
        const headerArSpan = header ? header.querySelector('.ar-line') : null;
        const headerArText = headerArSpan ? headerArSpan.textContent : '';
        const headerMain = header ? header.textContent.replace(headerArText, '').trim() : '🎯 Key Takeaways';
        let ktHtml = '<div class="tip" style="margin:14px 0;"><div style="font-weight:800;font-size:1rem;margin-bottom:8px;">' + headerMain + (headerArText ? ' <span style="direction:rtl;font-family:Cairo,sans-serif;font-size:.82rem;font-weight:600;">' + headerArText + '</span>' : '') + '</div>';
        const lis = el.querySelectorAll('li');
        lis.forEach(li => {
          const arS = li.querySelector('.ar-line');
          const arT = arS ? arS.textContent : '';
          let lh = li.innerHTML;
          if (arS) lh = lh.replace(arS.outerHTML, '');
          ktHtml += '<div style="margin:6px 0;padding:6px 10px;">' + lh + (arT ? '<div class="ar" style="margin-top:4px;">' + arT + '</div>' : '') + '</div>';
        });
        ktHtml += '</div>';
        const _wd = w.document; _wd.write(ktHtml);
      }
    }
  }

  w.document.write('<div class="footer">BUS 214 Study Hub — ملخص شامل · bus-214-study-hub.vercel.app · ' + dateStr + '</div>');
  w.document.write('</div></body></html>');
  w.document.close();
}

// ═══════════════════════════════════════════════
//  FEATURE: SMART REMINDERS
// ═══════════════════════════════════════════════
function checkReminders() {
  const LAST_KEY = 'bus214_lastVisit';
  const EXAM = new Date('2026-04-12T00:00:00');
  const last = parseInt(localStorage.getItem(LAST_KEY) || '0');
  const now = Date.now();
  localStorage.setItem(LAST_KEY, now);
  const daysToExam = Math.ceil((EXAM.getTime() - now) / (1000*60*60*24));
  let msg = '';
  // Check streak warning: user has a streak but hasn't studied today
  try {
    const streak = JSON.parse(localStorage.getItem('bus214_streak') || '{"count":0,"lastDate":""}');
    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (streak.count >= 3 && streak.lastDate === yesterday) {
      // About to lose streak!
      msg = `🔥 عندك streak ${streak.count} يوم — حل ولو كويز صغير اليوم عشان ما ينكسر!`;
    }
  } catch (e) {}
  // Daily tip: if user studied today, confirm it
  if (!msg && last) {
    const daysSince = Math.floor((now - last) / (1000*60*60*24));
    if (daysToExam > 0) {
      if (daysSince >= 3) msg = `⏰ ما راجعت من ${daysSince} أيام! باقي ${daysToExam} يوم على الاختبار`;
      else if (daysToExam <= 3) msg = `🔥 باقي ${daysToExam} يوم فقط على الاختبار! وقت المراجعة النهائية`;
      else if (daysToExam <= 7) msg = `📚 باقي ${daysToExam} أيام على الاختبار — استمر بالمراجعة!`;
    }
  }
  // Check if user has wrong answers to review (motivation)
  if (!msg) {
    try {
      const wrongs = JSON.parse(localStorage.getItem('bus214_wrongAnswers') || '[]');
      if (wrongs.length >= 5) {
        msg = `📋 عندك ${wrongs.length} أخطاء محفوظة — وقت المراجعة!`;
      }
    } catch (e) {}
  }
  if (msg) {
    const toast = document.getElementById('reminder-toast');
    const textEl = document.getElementById('reminder-toast-text');
    if (toast && textEl) { textEl.textContent = msg; toast.style.display = 'flex'; setTimeout(() => toast.style.display = 'none', 10000); }
  }
}

// ═══════════════════════════════════════════════
//  HOOK: Track quiz answers for PDF export
// ═══════════════════════════════════════════════
window.quizAnswerLog = [];
window.mockAnswers = window.mockAnswers || [];

// Patch handleQuizAnswer to log answers
const _origHandleQuizAnswer = typeof handleQuizAnswer === 'function' ? handleQuizAnswer : null;
if (_origHandleQuizAnswer) {
  window._origHandleQuizAnswer = _origHandleQuizAnswer;
}

// ═══════════════════════════════════════════════
//  GAMIFICATION SYSTEM
// ═══════════════════════════════════════════════
const GAME_KEY = 'bus214_game';

function getGameData() {
  const defaults = { xp: 0, level: 1, streak: 0, lastDate: null, badges: [], totalCorrect: 0, totalAnswered: 0, combo: 0, maxCombo: 0 };
  try { return { ...defaults, ...JSON.parse(localStorage.getItem(GAME_KEY)) }; }
  catch { return defaults; }
}

function saveGameData(d) { localStorage.setItem(GAME_KEY, JSON.stringify(d)); }

const LEVELS = [
  { level:1, name:'مبتدئ',    icon:'🌱', xpNeeded:0   },
  { level:2, name:'طالب',     icon:'📖', xpNeeded:200 },
  { level:3, name:'متقدم',    icon:'🎯', xpNeeded:500 },
  { level:4, name:'محترف',    icon:'⚡', xpNeeded:1000},
  { level:5, name:'خبير',     icon:'🏆', xpNeeded:2000},
  { level:6, name:'أسطورة',   icon:'👑', xpNeeded:4000},
];

function getLevelInfo(xp) {
  let current = LEVELS[0];
  for (const l of LEVELS) { if (xp >= l.xpNeeded) current = l; }
  const idx = LEVELS.indexOf(current);
  const next = LEVELS[idx + 1] || null;
  const progress = next ? Math.round((xp - current.xpNeeded) / (next.xpNeeded - current.xpNeeded) * 100) : 100;
  return { ...current, next, progress };
}

const BADGES = [
  { id:'first_correct',  icon:'⭐', name:'أول إجابة صح',        check: d => d.totalCorrect >= 1 },
  { id:'streak_3',       icon:'🔥', name:'3 أيام متتالية',       check: d => d.streak >= 3 },
  { id:'combo_5',        icon:'⚡', name:'5 صح متتالية',         check: d => d.maxCombo >= 5 },
  { id:'combo_10',       icon:'💥', name:'10 صح متتالية',        check: d => d.maxCombo >= 10 },
  { id:'answered_25',    icon:'📚', name:'25 سؤال',              check: d => d.totalAnswered >= 25 },
  { id:'answered_50',    icon:'💯', name:'50 سؤال',              check: d => d.totalAnswered >= 50 },
  { id:'answered_100',   icon:'🎓', name:'100 سؤال',             check: d => d.totalAnswered >= 100 },
  { id:'level_3',        icon:'🎯', name:'وصلت المستوى المتقدم', check: d => d.level >= 3 },
  { id:'level_5',        icon:'👑', name:'وصلت مستوى الخبير',    check: d => d.level >= 5 },
  { id:'perfect_quiz',   icon:'🌟', name:'كويز بدون أخطاء',      check: d => d.perfectQuiz },
];

function awardXP(amount, comboMultiplier) {
  const d = getGameData();
  const oldLevel = getLevelInfo(d.xp).level;
  const earned = Math.round(amount * comboMultiplier);
  d.xp += earned;
  const newLevelInfo = getLevelInfo(d.xp);
  d.level = newLevelInfo.level;
  saveGameData(d);
  showXPPop(earned, comboMultiplier > 1);
  if (newLevelInfo.level > oldLevel) showLevelUp(newLevelInfo);
  return earned;
}

function updateCombo(correct) {
  const d = getGameData();
  if (correct) {
    d.combo = (d.combo || 0) + 1;
    d.maxCombo = Math.max(d.maxCombo || 0, d.combo);
    d.totalCorrect = (d.totalCorrect || 0) + 1;
  } else {
    d.combo = 0;
  }
  d.totalAnswered = (d.totalAnswered || 0) + 1;
  saveGameData(d);
  updateStreakDaily();
  checkBadges(d);
  updateGameHUD();
  return d.combo;
}

function getComboMultiplier(combo) {
  if (combo >= 10) return 3;
  if (combo >= 5)  return 2;
  if (combo >= 3)  return 1.5;
  return 1;
}

function updateStreakDaily() {
  const d = getGameData();
  const today = new Date().toDateString();
  if (d.lastDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    d.streak = d.lastDate === yesterday ? (d.streak || 0) + 1 : 1;
    d.lastDate = today;
    saveGameData(d);
  }
}

function checkBadges(d) {
  let newBadges = [];
  for (const b of BADGES) {
    if (!d.badges.includes(b.id) && b.check(d)) {
      d.badges.push(b.id);
      newBadges.push(b);
    }
  }
  if (newBadges.length) { saveGameData(d); newBadges.forEach(b => showBadgeToast(b)); }
}

function showXPPop(amount, isCombo) {
  const el = document.createElement('div');
  el.className = 'xp-pop' + (isCombo ? ' xp-pop-combo' : '');
  el.textContent = (isCombo ? '🔥 ' : '') + '+' + amount + ' XP';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1200);
}

const QUIZ_ENCOURAGEMENTS_CORRECT = [
  'ممتاز! 🌟', 'صح! 💪', 'أحسنت! 🎯',
  'رائع! ✨', 'بالضبط! 🔥', 'عظيم! 🏆',
  'واو! 😎', 'صاح! 👏', 'زين! ⭐'
];
const QUIZ_ENCOURAGEMENTS_WRONG = [
  'كمّل 💪', 'المرة الجاية! 💡', 'تقدر! 🌱',
  'ما يهم، واصل! 🚀', 'الغلط تعلّم 💡', 'ارفع رأسك 👊'
];

function playAnswerSound(isCorrect) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (isCorrect) {
      [523.25, 783.99].forEach((freq, i) => {
        const osc = ctx.createOscillator(); const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);
        gain.gain.setValueAtTime(0.28, ctx.currentTime + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.25);
        osc.start(ctx.currentTime + i * 0.12);
        osc.stop(ctx.currentTime + i * 0.12 + 0.25);
      });
    } else {
      const osc = ctx.createOscillator(); const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(330, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.35);
    }
  } catch (e) {}
}

function showQuizEncouragement(isCorrect) {
  playAnswerSound(isCorrect);
  const pool = isCorrect ? QUIZ_ENCOURAGEMENTS_CORRECT : QUIZ_ENCOURAGEMENTS_WRONG;
  const msg = pool[Math.floor(Math.random() * pool.length)];
  const el = document.createElement('div');
  el.className = 'quiz-encourage' + (isCorrect ? '' : ' quiz-encourage-wrong');
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1400);
}

function showLevelUp(levelInfo) {
  const el = document.createElement('div');
  el.className = 'level-up-toast';
  el.innerHTML = `<div class="lu-icon">${levelInfo.icon}</div><div class="lu-text"><strong>ترقية!</strong><br>وصلت مستوى <strong>${levelInfo.name}</strong></div>`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

function showBadgeToast(badge) {
  const el = document.createElement('div');
  el.className = 'badge-toast';
  el.innerHTML = `<span class="bt-icon">${badge.icon}</span><div><strong>شارة جديدة!</strong><br>${badge.name}</div>`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

function updateGameHUD() {
  const d = getGameData();
  const li = getLevelInfo(d.xp);
  const hudLevel = document.getElementById('hud-level');
  const hudXP    = document.getElementById('hud-xp');
  const hudStreak = document.getElementById('hud-streak');
  const hudCombo  = document.getElementById('hud-combo');
  const hudXPBar  = document.getElementById('hud-xp-bar');
  if (hudLevel) hudLevel.textContent = li.icon + ' ' + li.name;
  if (hudXP)    hudXP.textContent    = d.xp + ' XP';
  if (hudStreak) hudStreak.textContent = '🔥 ' + (d.streak || 0);
  if (hudCombo && d.combo > 1) { hudCombo.textContent = '⚡ x' + d.combo; hudCombo.style.display = 'flex'; }
  else if (hudCombo) hudCombo.style.display = 'none';
  if (hudXPBar) hudXPBar.style.width = li.progress + '%';
}

function renderBadgesPage() {
  const d = getGameData();
  const li = getLevelInfo(d.xp);
  // Update stats
  const el = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  el('badge-level-icon', li.icon);
  el('badge-level-name', li.name);
  el('badge-xp-text', d.xp + ' XP');
  el('badge-streak-text', (d.streak || 0) + ' أيام');
  el('badge-combo-text', d.maxCombo || 0);
  el('badge-answered-text', d.totalAnswered || 0);
  // Render badges grid
  const grid = document.getElementById('badges-grid');
  if (!grid) return;
  grid.innerHTML = BADGES.map(b => {
    const earned = d.badges.includes(b.id);
    return `<div style="border-radius:16px;padding:18px;text-align:center;border:2px solid ${earned ? '#f59e0b' : 'var(--line)'};background:${earned ? 'linear-gradient(135deg,#fef3c7,#fde68a)' : 'var(--paper)'};transition:all .2s;">
      <div style="font-size:2rem;${earned ? '' : 'opacity:.3;filter:grayscale(1);'}">${b.icon}</div>
      <div style="font-size:.8rem;font-weight:700;margin-top:6px;color:${earned ? '#92400e' : 'var(--ink)'};">${b.name}</div>
      <div style="font-size:.68rem;color:${earned ? '#b45309' : 'var(--muted)'};margin-top:2px;">${earned ? '✅ مفتوحة' : '🔒 مقفلة'}</div>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════
//  FEATURE: POMODORO TIMER
// ═══════════════════════════════════════════════
const POMO_KEY = 'bus214_pomo';
const POMO_DURATIONS = { work: 25*60, short: 5*60, long: 15*60 };
let pomoState = { mode: 'work', timeLeft: POMO_DURATIONS.work, running: false, timer: null, session: 1, totalSessions: 4 };

function pomoGetStats() {
  try { return JSON.parse(localStorage.getItem(POMO_KEY)) || { today: '', sessions: 0, minutes: 0, total: 0 }; } catch { return { today: '', sessions: 0, minutes: 0, total: 0 }; }
}
function pomoSaveStats(s) { localStorage.setItem(POMO_KEY, JSON.stringify(s)); }

function pomoRenderStats() {
  const s = pomoGetStats();
  const today = new Date().toDateString();
  if (s.today !== today) { s.sessions = 0; s.minutes = 0; s.today = today; pomoSaveStats(s); }
  const el = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  el('pomo-today-sessions', s.sessions);
  el('pomo-today-minutes', s.minutes);
  el('pomo-total-sessions', s.total);
  const dotsEl = document.getElementById('pomo-dots');
  if (dotsEl) {
    dotsEl.innerHTML = Array.from({length: pomoState.totalSessions}, (_, i) =>
      `<div style="width:12px;height:12px;border-radius:50%;${i < pomoState.session - 1 ? 'background:var(--accent);' : 'background:var(--line);'}"></div>`
    ).join('');
  }
}

function pomoUpdateDisplay() {
  const m = Math.floor(pomoState.timeLeft / 60);
  const s = pomoState.timeLeft % 60;
  const timeStr = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
  // Update widget elements
  const el = document.getElementById('pomo-time');
  if (el) el.textContent = timeStr;
  const btn = document.getElementById('pomo-widget-start');
  if (btn) btn.textContent = pomoState.running ? '⏸️ إيقاف' : '▶️ ابدأ';
  const statusEl = document.getElementById('pomo-status');
  if (statusEl) {
    if (pomoState.mode === 'work') statusEl.textContent = pomoState.running ? '🎯 وقت الدراسة' : 'جاهز للدراسة';
    else if (pomoState.mode === 'short') statusEl.textContent = pomoState.running ? '☕ استراحة قصيرة' : 'استراحة قصيرة';
    else statusEl.textContent = pomoState.running ? '🌴 استراحة طويلة' : 'استراحة طويلة';
  }
  const countEl = document.getElementById('pomo-session-count');
  if (countEl) countEl.textContent = `الجلسة ${pomoState.session} من ${pomoState.totalSessions}`;
  // Update full page Pomodoro elements
  const pageDisplay = document.getElementById('pomo-display');
  if (pageDisplay) pageDisplay.textContent = timeStr;
  const pageLabel = document.getElementById('pomo-label');
  if (pageLabel) pageLabel.textContent = pomoState.mode === 'work' ? 'وقت الدراسة' : pomoState.mode === 'short' ? 'استراحة قصيرة' : 'استراحة طويلة';
  const pageFill = document.getElementById('pomo-progress-fill');
  if (pageFill) {
    const total = POMO_DURATIONS[pomoState.mode];
    const pct = ((total - pomoState.timeLeft) / total) * 100;
    pageFill.style.width = pct + '%';
  }
  const pageSessions = document.getElementById('pomo-sessions');
  if (pageSessions) pageSessions.textContent = pomoGetStats().sessions;
  const pageMinutes = document.getElementById('pomo-total-min');
  if (pageMinutes) pageMinutes.textContent = pomoGetStats().minutes;
}

function pomoToggle() {
  if (pomoState.running) { clearInterval(pomoState.timer); pomoState.running = false; }
  else { pomoState.running = true; pomoState.timer = setInterval(pomoTick, 1000); }
  pomoUpdateDisplay();
}

function pomoTick() {
  pomoState.timeLeft--;
  if (pomoState.timeLeft <= 0) {
    clearInterval(pomoState.timer); pomoState.running = false;
    try { const a = new AudioContext(); const o = a.createOscillator(); const g = a.createGain(); o.connect(g); g.connect(a.destination); o.frequency.value = 800; g.gain.value = 0.3; o.start(); setTimeout(() => { o.stop(); a.close(); }, 300); } catch(e) {}
    if (pomoState.mode === 'work') {
      const s = pomoGetStats();
      const today = new Date().toDateString();
      if (s.today !== today) { s.sessions = 0; s.minutes = 0; s.today = today; }
      s.sessions++; s.minutes += 25; s.total++;
      pomoSaveStats(s); pomoRenderStats();
      if (pomoState.session >= pomoState.totalSessions) { pomoSetMode('long'); pomoState.session = 1; }
      else { pomoSetMode('short'); pomoState.session++; }
      alert('🎉 أحسنت! خلص وقت الدراسة — خذ استراحة');
    } else {
      pomoSetMode('work');
      alert('⏰ خلصت الاستراحة — يلا نرجع ندرس!');
    }
    pomoRenderStats();
  }
  pomoUpdateDisplay();
}

function pomoSetMode(mode) {
  clearInterval(pomoState.timer); pomoState.running = false;
  pomoState.mode = mode; pomoState.timeLeft = POMO_DURATIONS[mode];
  pomoUpdateDisplay();
  ['work','short','long'].forEach(m => {
    const btn = document.getElementById('pomo-btn-' + m);
    if (btn) { btn.style.borderColor = m === mode ? 'var(--accent)' : ''; btn.style.color = m === mode ? 'var(--accent)' : ''; }
  });
}

function pomoReset() {
  clearInterval(pomoState.timer);
  pomoState = { mode: 'work', timeLeft: POMO_DURATIONS.work, running: false, timer: null, session: 1, totalSessions: 4 };
  pomoUpdateDisplay(); pomoRenderStats(); pomoSetMode('work');
}

function pomoToggleWidget() {
  const w = document.getElementById('pomo-widget');
  if (!w) return;
  const visible = w.style.display !== 'none';
  w.style.display = visible ? 'none' : 'block';
  if (!visible) { pomoUpdateDisplay(); pomoRenderStats(); }
}

// ── INIT ──────────────────────────────────────
// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  showPage('page-home');
  renderMasteryBadges();
  renderHomeMastery();
  renderConceptOfDay();
  updateStreak();
  checkReminders();
  updateGameHUD();
  renderConfusionGrid();
});
const testBankQ = [
  { ch:"ch1", q:"Corporate social responsibility is defined as which of the following?", opts:["An organization's obligation to maximize its positive effects and minimize its negative effects on stakeholders", "Principles, values, and norms that primarily guide individual and group behavior in the world of business", "The institutionalization of business ethics into all levels of business decision making", "A business's responsibility to manufacture products that function properly", "Charitable contributions made by a business to enhance its reputation with stakeholders"], ans:0 },
  { ch:"ch1", q:"After the accounting scandals of the early 2000s, which of the following was/were enacted to restore confidence in financial reporting?", opts:["Defense Industry Initiative on Business Ethics and Conduct", "Sarbanes -Oxley Act", "Federal Sentencing Guidelines for Organizations", "Foreign Corrupt Practices Act", "Dodd-Frank Wall Street Reform and Consumer Protection Act"], ans:1 },
  { ch:"ch1", q:"Which of the following is one of the rights spelled out by John F. Kennedy in his Consumers' Bill of Rights?", opts:["The right to consumerism", "The right to safety", "The right to be protected", "The right to be ethical", "The right to be heard"], ans:1 },
  { ch:"ch1", q:"During the 1990s, the institutionalization of business ethics was largely driven by which piece of legislation?", opts:["Sarbanes-Oxley Act", "Federal Sentencing Guidelines for Organizations", "Dodd-Frank Wall Street Reform and Consumer Protection Act", "Foreign Corrupt Practices Act", "UN Global Compact"], ans:1 },
  { ch:"ch1", q:"Environmental Social Governance (ESG) refers to which of the following?", opts:["A framework for evaluation of firm performance in the areas of environmental, social, and governance", "The most far-reaching change in organizational control and accounting regulations since the Securities and Exchange Acts of the 1930s", "Guidelines that codified into law incentives to reward organizations for taking action to prevent misconduct", "An organization developed to guide corporate support for ethical conduct", "An organization's obligation to maximize its positive impact and minimize its negative impact on stakeholders"], ans:0 },
  { ch:"ch1", q:"The 1960s saw a rise of consumerism. What is consumerism?", opts:["An increase in consumer rights by individuals, organizations, and governments", "The growth of international retail chain stores that served global consumers", "Activities undertaken by independent individuals, groups, and organizations to protect their rights as consumers", "The widespread adoption of consumer-oriented marketing strategies among businesses", "The tendency of organizations to view consumers as their most important stakeholder"], ans:2 },
  { ch:"ch1", q:"Ethically charged decisions _______.", opts:["are made at all levels of work and management", "are made primarily by top management", "stem from individual moral philosophies", "are less important than other decision-making processes", "are an isolated personal issue"], ans:0 },
  { ch:"ch1", q:"Which of the following was developed in the 1980s to guide corporate support for ethical conduct by establishing a set of principles?", opts:["Federal Sentencing Guidelines for Organizations", "Defense Industry Initiative on Business Ethics and Conduct", "Foreign Corrupt Practices Act", "U.S. Sentencing Commission", "The Southern Common Market"], ans:1 },
  { ch:"ch1", q:"Firms taking action to prevent and detect business misconduct in cooperation with government regulation are", opts:["U.S. Sentencing Commission", "Defense Industry Initiative on Business Ethics and Conduct", "World Trade Organization", "United", "Federal Sentencing Guidelines for Organizations"], ans:4 },
  { ch:"ch1", q:"Which of the following statements about morals is true?", opts:["Morals are the same as principles and ethics.", "Morals relate to the business's ethical culture.", "Morals are emphasized in business ethics programs.", "Morals relate to you and you alone.", "Morals do not have much influence over individual ethical decision making."], ans:3 },
  { ch:"ch1", q:"Which of the following statements about values is true?", opts:["Values are specific and pervasive boundaries for behavior that should not be violated.", "Values are acceptable behavior as defined by the company and industry.", "Values are attempts by businesses to minimize their negative impact on society.", "Values", "Values are enduring beliefs and ideals that are socially enforced."], ans:4 },
  { ch:"ch1", q:"As more than a compliance program, what is business ethics becoming?", opts:["An integral part of management's efforts to achieve competitive advantage", "A guaranteed way to earn higher financial returns", "Mainly a government regulatory issue", "An initiative led by nonprofit organizations", "A program that decreases profits but increases societal benefits"], ans:0 },
  { ch:"ch1", q:"Employees who view their organizational culture as ethical are more likely to _______.", opts:["ask for a raise", "use their personal moral philosophies in decision making", "make personal sacrifices for the organization", "gain more organizational training", "have a greater desire to become managers themselves"], ans:2 },
  { ch:"ch1", q:"President Obama's administration focused on which of these major ethical issues?", opts:["Decreasing environmental legislation", "Deregulation", "Tax decreases", "Incentives to oil companies", "Healthcare and consumer protection"], ans:4 },
  { ch:"ch1", q:"Which of the following statements about business ethics is true?", opts:["A firm that has ethical management will succeed financially.", "Codes of ethics should cover every business ethics issue.", "Business ethics focuses more on laws than on values.", "Individuals apply the same ethical rules in business as they do at home.", "Conflict or trade-offs do not exist between profits and business ethics."], ans:4 },
  { ch:"ch1", q:"A far-reaching change to organizational control and accounting systems, making securities fraud a criminal offense,", opts:["Foreign Corrupt Practices Act", "Sarbanes -Oxley Act", "Consumer Protection Act", "Defense Industry Initiative on Business Ethics and Conduct", "Dodd-Frank Wall Street Reform and Consumer Protection Act"], ans:1 },
  { ch:"ch1", q:"The Foreign Corrupt Practices Act outlawed which of the following?", opts:["Global accounting fraud", "Price collusion", "Corruption in foreign governments", "Bribery of a foreign public official", "Executive misconduct"], ans:3 },
  { ch:"ch1", q:"The Sarbanes-Oxley Act resulted in which of the following?", opts:["It stiffened penalties for personal fraud.", "It created an accounting oversight board that requires corporations to establish codes of ethics for financial", "It required stakeholders to approve corporate firms' financial statements.", "It outlawed bribery of officials in other countries.", "It made securities fraud a civil offense."], ans:1 },
  { ch:"ch1", q:"To survive and contribute to society, which of the following is true?", opts:["Businesses must operate at a loss.", "Businesses must bribe foreign officials with facilitation payments.", "Businesses must ignore the needs and desires of stakeholders.", "Businesses must make a trade-off between profits and business ethics.", "Businesses must earn a profit."], ans:4 },
  { ch:"ch1", q:"Because of Sarbanes-Oxley, what must publicly traded companies develop in order to assist in maintaining transparency in financial reporting?", opts:["Ethics officers", "Ethics programs", "Codes of ethics", "Legal counsel", "Accountants"], ans:2 },
  { ch:"ch1", q:"When building long-term relationships between businesses and consumers, which of the following is essential for maintaining the relationship?", opts:["Profit", "Governance", "Trust", "Knowledge", "A code of ethics"], ans:2 },
  { ch:"ch1", q:"Which of the following statements about the Dodd-Frank Wall Street Reform and Consumer Protection Act is true?", opts:["It was very popular among Wall Street bankers.", "It represented modest reform to the finance industry.", "It came out of theological discussions in the 1920s.", "It was designed to make the financial services industry more responsible.", "It made it mandatory for public corporations to hire ethics officers."], ans:3 },
  { ch:"ch1", q:"In the Reagan/Bush eras, the major focus of the business world was on which of the following?", opts:["Self-regulation rather than regulation by government", "Decreasing the number of mergers", "Decreasing the multinational presence in the U.S. marketplace", "Increasing government influence on the economic arena", "Improving business ethics"], ans:0 },
  { ch:"ch1", q:"The six principles of the Defense Industry Initiative on Business Ethics and Conduct became the foundation for which of the following?", opts:["The Foreign Corrupt Practices Act", "The Federal Sentencing Guidelines for Organizations", "The Ethical Trading Initiative", "The Federal Trade Commission compliance requirements", "The Sarbanes-Oxley Act"], ans:1 },
  { ch:"ch1", q:"Ethical culture is defined as which of the following?", opts:["Ethical culture refers to rules, standards, and moral principles regarding what is right or wrong in specific situations.", "Ethical culture is the establishment and enforcement of ethical codes throughout an organization.", "Ethical culture involves the development of rules and norms that are socially enforced.", "Ethical culture refers to the codification of laws to reward organizations for taking action to prevent misconduct.", "Ethical culture is acceptable behavior as defined by the company and industry."], ans:4 },
  { ch:"ch1", q:"The Federal Sentencing Guidelines for Organizations set the tone for organizational ethics compliance programs", opts:["By codifying into law incentives for organizations to take action such as developing ethical compliance programs to prevent misconduct", "By forcing all organizations to develop mandatory reporting systems and ethics programs", "By eliminating most of the federal legislation that created inefficient and time-consuming activities for businesses", "By providing detailed guidelines for how to set up organizational ethics programs to guard against unethical conduct", "By providing a thorough examination of company codes of ethics to determine whether they are sufficient"], ans:0 },
  { ch:"ch1", q:"The Federal Sentencing Guidelines for Organizations are described by which of the following statements?", opts:["They use a routine mechanical approach that forces all firms to use the same means to avert serious penalties.", "They strive to prosecute misconduct.", "They encourage companies to develop standards and procedures for penalizing misconduct.", "They utilize a carrot-and-stick approach by taking preventive action against misconduct.", "They encourage self-regulation as opposed to oversight of compliance."], ans:3 },
  { ch:"ch1", q:"Employees' perceptions of their firm as having an ethical climate lead to which of the following?", opts:["Lack of focus on goals", "Greater focus on education", "Increased community involvement", "Improved relationships with competitors", "Performance-enhancing outcomes"], ans:4 },
  { ch:"ch1", q:"A global compliance management standard that addresses risks, legal requirements, and stakeholder needs is known as which of the following?", opts:["the Ethical Trading Initiative", "the UN Global Compact", "the Defense Industry Initiative on Business Ethics and Conduct", "stakeholder theory", "ISO 19600"], ans:4 },
  { ch:"ch1", q:"Investors are concerned about business ethics because they know that misconduct can _______.", opts:["harm the ability to monitor changes", "increase prices of consumer products", "cause delays in government intervention", "lower stock prices", "complicate business financial reporting"], ans:3 },
  { ch:"ch1", q:"When an organization has a strong ethical environment, it usually focuses on the core value of placing whose interests", opts:["Customers'", "Employees'", "Stockholders'", "Suppliers'", "Distributors'"], ans:0 },
  { ch:"ch1", q:"Why is the public more tolerant of consumer misconduct than business misconduct?", opts:["Businesses are expected to have a better idea of right and wrong.", "The decisions of individuals have little to do with ethics in the business world.", "There are big differences in wealth and success between businesses and consumers.", "More organizations commit misconduct than individual consumers.", "There is a large income disparity among professional businesspeople."], ans:2 },
  { ch:"ch1", q:"What happens when society deems a particular business action as wrong or unethical?", opts:["Legislation usually follows.", "The guilty individual is jailed.", "Self-regulation is deemed a failure.", "The company goes bankrupt.", "Fines automatically follow."], ans:0 },
  { ch:"ch1", q:"Which business ethics issue was a major concern during the 1920s?", opts:["Sustainability", "Consumerism", "Living wage", "Bribery", "Abusive managers"], ans:2 },
  { ch:"ch1", q:"Specific and pervasive boundaries for behavior that should not be violated are known as _______.", opts:["philosophy", "values", "principles", "business ethics", "morals"], ans:2 },
  { ch:"ch1", q:"The term that comprises organizational principles, values, and norms that may originate from individuals, organizational statements, or from the legal system that primarily guides individual and group behavior in business is defined as _______.", opts:["stakeholder orientation", "values", "principles", "business ethics", "integrity management"], ans:3 },
  // ── Ch1 Missing MCQ ──
  { ch:"ch1", q:"Employees' perceptions of their firm as having an ethical climate lead to which of the following?", opts:["Lack of focus on goals", "Greater focus on education", "Increased community involvement", "Improved relationships with competitors", "Performance-enhancing outcomes"], ans:4 },
  { ch:"ch1", q:"Which of the following concepts refers to a person's personal philosophy about what is right or wrong?", opts:["Philosophy", "Values", "Principles", "Integrity", "Morals"], ans:4 },
  { ch:"ch1", q:"A situation where a person is faced with multiple choices, all of which are undesirable as defined by that person, is known as a(n) _______.", opts:["value dilemma", "integrity management", "philosophical dilemma", "legal dilemma", "moral dilemma"], ans:4 },
  // ── Ch1 True/False ──
  { ch:"ch1", q:"Prior to the 1960s, ethical issues related to business were often discussed in the domain of theology or philosophy.", opts:["True", "False"], ans:0 },
  { ch:"ch1", q:"ISO 19600 is a set of 10 principles concerning human rights, labor, the environment, and anti-corruption.", opts:["True", "False"], ans:1 },
  { ch:"ch1", q:"Every organization has the potential for unethical behavior, even if it is not a business.", opts:["True", "False"], ans:0 },
  { ch:"ch1", q:"Morals are enduring beliefs and ideals that are socially enforced.", opts:["True", "False"], ans:1 },
  { ch:"ch1", q:"The Consumers' Bill of Rights developed by John F. Kennedy maintains that consumers have the right to safety, the right to be heard, the right to free speech, and the right to choose.", opts:["True", "False"], ans:1 },
  { ch:"ch1", q:"A majority of consumers believe it is a company's responsibility to have a moral or ethical viewpoint.", opts:["True", "False"], ans:0 },
  { ch:"ch2", q:"Those who have a claim in some aspect of a firm's products, operations, markets, industry, and outcomes are known as which of the following?", opts:["shareholders", "stockholders", "stakeholders", "claimholders", "special-interest groups"], ans:2 },
  { ch:"ch2", q:"Stakeholders' power over businesses stems from their _______.", opts:["ability to withhold organizational resources", "ability to generate profits", "media impact", "political influence", "stock ownership"], ans:0 },
  { ch:"ch2", q:"Which of the following groups is defined as one that does not typically engage in transactions with a company and is not affected by its actions?", opts:["Employees", "Secondary stakeholders", "Primary stakeholders", "Investors", "Customers"], ans:1 },
  { ch:"ch2", q:"A firm that recognizes other stakeholders beyond investors, employees, and suppliers, and explicitly acknowledges that business must attend to the bottom line?", opts:["A stakeholder model of socially responsible corporate governance", "A stakeholder bias", "A code of ethics", "A stakeholder interaction model", "A corporate interface model"], ans:3 },
  { ch:"ch2", q:"The degree to which a firm understands and addresses stakeholder demands refers to _______.", opts:["a stakeholder orientation", "a shareholder orientation", "the stakeholder interaction model", "a two-way street", "a continuum"], ans:0 },
  { ch:"ch2", q:"Which of the following industries tends to generate a high level of trust from consumers and stakeholders?", opts:["Insurance", "Technology", "Banks", "Mortgage lenders", "Energy"], ans:1 },
  { ch:"ch2", q:"Why is it important for businesses to recognize secondary stakeholder groups?", opts:["They are absolutely necessary for the firm's survival.", "They include the employees necessary for the firm's success.", "They always have more power than primary stakeholders.", "They provide vital resources that companies need.", "They have legitimacy and the power to influence outcomes."], ans:4 },
  { ch:"ch2", q:"A stakeholder group that is absolutely necessary for a firm's survival is defined as a _______.", opts:["direct stakeholder", "tertiary stakeholder", "secondary stakeholder", "special-interest stakeholder", "primary stakeholder"], ans:4 },
  { ch:"ch2", q:"When unethical acts are discovered in a firm, which of the following is true in most instances?", opts:["They are caused by unwilling participants.", "The cause is due to external stakeholders.", "The perpetrators are caught and prosecuted.", "Their acceptance and perpetuation were facilitated by cooperation or complicity.", "The cause of the unethical conduct is a corrupt board of directors."], ans:3 },
  { ch:"ch2", q:"Which of the following statements accurately describes the normative approach?", opts:["It focuses on the firm's behavior and usually addresses how decisions and strategies are made for stakeholder", "It describes what happens if firms behave in a particular way.", "It is the degree to which a firm understands and addresses stakeholder demands.", "It describes reciprocal relationships between the firm and a host of stakeholders.", "It identifies ethical guidelines that dictate how firms should treat stakeholders."], ans:4 },
  { ch:"ch2", q:"A stakeholder orientation can be viewed as a(n) _______.", opts:["necessity for business success", "continuum", "polarizing concept", "good marketing ploy", "expensive proposition"], ans:1 },
  { ch:"ch2", q:"What do suppliers offer that is critical to a firm's long-term success?", opts:["The promise of customer loyalty", "Material resources and/or intangible knowledge", "Infrastructure", "Revenue", "Leadership skills"], ans:1 },
  { ch:"ch2", q:"The four levels of social responsibility include which of the following?", opts:["Economic, social, legal, and voluntary", "Economic, legal, environmental, and ethical", "Financial, legal, environmental, and philanthropic", "Economic, financial, legal, and ethical", "Economic, legal, ethical, and philanthropic"], ans:4 },
  { ch:"ch2", q:"The first of three activities associated with the stakeholder orientation is _______.", opts:["an organization-wide generation of data", "an organization's responsiveness to intelligence", "a set of consumer attributes being identified", "an organizational strategy of target markets", "a human relations department's set of priorities"], ans:0 },
  { ch:"ch2", q:"Public health and safety and the support of local organizations are issues that are most relevant to which stakeholder", opts:["Investors", "Community", "Suppliers", "Customers", "Employees"], ans:1 },
  { ch:"ch2", q:"Minimizing the use of energy and reducing emissions and waste are issues of importance to which of the following", opts:["Environmental groups", "Suppliers", "Employees", "Industry leaders", "Investors"], ans:0 },
  { ch:"ch2", q:"The idea that the basic mission of business is to produce goods and services at a profit, thus maximizing its", opts:["Adam Smith", "Archie Carroll", "Jack Ma", "Karl Marx", "Milton Friedman"], ans:4 },
  { ch:"ch2", q:"The idea of the invisible hand, which is a fundamental concept in free market capitalism, was developed by which of the following?", opts:["Adam Smith", "John Maynard Keynes", "Janet Yellen", "Noel Biderman", "Milton Friedman"], ans:0 },
  { ch:"ch2", q:"Some economists believe that if companies address economic and legal issues, they are satisfying the demands of society. This view is associated with which of the following?", opts:["John Maynard Keynes", "Janet Yellen", "Adam Smith", "Elinor Ostrom", "Milton Friedman"], ans:4 },
  { ch:"ch2", q:"The idea that because people live in a community, social rules should benefit the community is known as _______.", opts:["the stakeholder interaction model", "consumer protection", "the common good", "sustainability", "corporate governance"], ans:2 },
  { ch:"ch2", q:"The extent to which a firm meets the economic, legal, ethical, and philanthropic responsibilities placed on it by its stakeholders?", opts:["reputation", "corporate citizenship", "corporate ethical audit", "ethical citizenship", "fiduciary duties"], ans:1 },
  { ch:"ch2", q:"In corporate governance, the process of auditing and improving organizational decisions and actions is known as which of the following?", opts:["profit", "loyalty", "accountability", "control", "diligence"], ans:3 },
  { ch:"ch2", q:"Accountability, oversight, and control all fall under the definition and implementation of corporate _______.", opts:["profit", "loyalty", "care", "governance", "diligence"], ans:3 },
  { ch:"ch2", q:"Which of the following is a major ethical concern among corporate boards of directors?", opts:["Compensation", "The non-traditional directorship approach", "Dividend reporting", "Secondary stakeholders", "Debt swaps"], ans:0 },
  { ch:"ch2", q:"Which of the following describes the purpose of a stakeholder orientation?", opts:["To emphasize shareholders and provide them with a return on their investment", "To maximize positive outcomes that meet stakeholder needs", "To diminish the role of stakeholders such as the government and employees", "To determine which stakeholders to address and which to ignore", "To allow stakeholders to determine the limits of executive compensation"], ans:1 },
  { ch:"ch2", q:"The first step in implementing the stakeholder perspective is _______.", opts:["identifying stakeholder groups", "assessing the corporate culture", "identifying and gaining stakeholder feedback", "identifying stakeholder issues", "assessing organizational commitment to social responsibility groups"], ans:1 },
  { ch:"ch2", q:"Which model of corporate governance is founded in classic economic precepts?", opts:["Economic", "Shareholder", "Stakeholder", "Board", "ISO"], ans:1 },
  { ch:"ch2", q:"Which of the following would typically be considered a secondary stakeholder group?", opts:["Suppliers", "Customers", "Special-interest groups", "Government regulatory agencies", "Community"], ans:2 },
  { ch:"ch2", q:"Which of the following would typically be considered a primary stakeholder group?", opts:["Competitors", "Community", "Trade associations", "Special interest groups", "The mass media"], ans:1 },
  { ch:"ch2", q:"What do critics of high compensation for boards of directors point to as being problematic?", opts:["The more directors are paid, the more power they have over the organization.", "High compensation could cause a conflict of interest.", "High board member pay leads to poorly compensated employees.", "High pay will render the board less complacent.", "Board of director compensation is negatively related to corporate growth."], ans:1 },
  { ch:"ch2", q:"Board members being linked to more than one company is defined as which of the following?", opts:["The stakeholder concept", "The stakeholder model of corporate governance", "An interlocking directorate", "A conflict of interest", "A multiple directorate"], ans:2 },
  { ch:"ch2", q:"The last step in implementing a stakeholder perspective in an organization is _______.", opts:["identifying resources and determining urgency", "assessing the corporate culture", "identifying stakeholder issues", "gaining stakeholder feedback", "assessing organizational commitment to social responsibility"], ans:3 },
  { ch:"ch2", q:"A stakeholder orientation is not complete unless it includes which of the following?", opts:["Clear accounting procedures", "Major financing activities", "A marketing strategy", "Feedback from special-interest groups", "Activities that address stakeholder issues"], ans:4 },
  { ch:"ch2", q:"A broader view of social responsibility is one that _______.", opts:["views customers as the most important stakeholder", "takes into account a shareholder orientation", "prioritizes all stakeholders the same way", "considers the long-term welfare of society", "emphasizes adherence to law as the highest priority"], ans:3 },
  { ch:"ch2", q:"The obligation of individuals to make decisions that are in the best interests of the corporation and its stakeholders is known as which of the following?", opts:["duty of loyalty", "duty of oversight", "duty to audit", "duty of control", "duty of cooperation"], ans:0 },
  { ch:"ch2", q:"Fiduciaries are persons placed in positions of trust that act on behalf of the best interests of the organization. Both directors and officers of corporations are fiduciaries for their shareholders, tasked with making informed and prudent decisions, referred to as a _______.", opts:["duty of oversight and loyalty", "duty of care or a duty of diligence", "duty of control and audit", "duty of confidence and leadership", "duty of analysis and insight"], ans:1 },
  // ── Ch2 Missing MCQ ──
  { ch:"ch2", q:"The obligation of individuals to make decisions that are in the best interests of the corporation and its stakeholders is known as a _______.", opts:["duty of loyalty", "duty of oversight", "duty to audit", "duty of control", "duty of cooperation"], ans:0 },
  // ── Ch2 True/False ──
  { ch:"ch2", q:"In Dodge vs. Ford Motor Co., the court ruled that a business exists for the profit of shareholders, and the board of directors should focus on that objective.", opts:["True", "False"], ans:0 },
  { ch:"ch2", q:"The final step in implementing a stakeholder perspective is identifying stakeholders.", opts:["True", "False"], ans:1 },
  { ch:"ch2", q:"Evidence suggests that caring about the well-being of stakeholders leads to increased profits.", opts:["True", "False"], ans:0 },
  { ch:"ch2", q:"Ethics and social responsibility can be used interchangeably.", opts:["True", "False"], ans:1 },
  { ch:"ch2", q:"Government regulatory agencies are considered a secondary stakeholder group.", opts:["True", "False"], ans:1 },
  { ch:"ch2", q:"A board of directors' fiduciary duty to a company refers to an assumed position of trust and confidence that entails certain responsibilities.", opts:["True", "False"], ans:0 },
  { ch:"ch3", q:"Sustainable development is best defined as which of the following?", opts:["The potential for the long-term well-being of the environment, including all biological entities, as well as", "Socially responsible activities such as sustainable business practices that create competitive advantages", "When an organization uses its products and brand identity to create social value, quality, and consumer loyalty", "A strategy involving stakeholder assessment to create meaningful long-term relationships with customers, employees, and suppliers", "Meeting the needs of the present without compromising the ability of future generations to meet their own"], ans:4 },
  { ch:"ch3", q:"One of the biggest factors in land pollution is the dumping of waste into landfills. By far the world's biggest wasters are", opts:["Europe", "China", "Russia", "the United States", "Canada"], ans:3 },
  { ch:"ch3", q:"The world's forests, which cover more than 30 percent of the planet, are being destroyed, with forests shrinking by approximately how many acres each year?", opts:["The corn industry", "Beef, soy, palm oil, and wood products", "Human-lit fires", "A lack of rain", "Wildfires"], ans:1 },
  { ch:"ch3", q:"Many businesses can benefit from urban renewal movements that reduce sprawl, but it can create disadvantages for which of the following?", opts:["car and oil companies", "the airline industry", "the railroad industry", "service-oriented companies", "humans and animals"], ans:0 },
  { ch:"ch3", q:"Farmers cannot keep harvested seed from genetically modified crops, but must purchase them each year from the seed company?", opts:["non-organic", "perishable", "uncollectable", "destructive", "patented"], ans:4 },
  { ch:"ch3", q:"The first Earth Day increased stakeholder awareness of environmental concerns and the creation of the Environmental", opts:["Corporate social responsibility", "Alternative energy sources", "Diversity", "Sustainability", "Competition"], ans:3 },
  { ch:"ch3", q:"The Environmental Protection Agency's primary mission is to _______.", opts:["protect human health and the environment", "ensure all Fortune 500 firms hire a chief sustainability officer", "protect threatened and endangered species", "encourage alternative energy sources", "collect taxes from the chemical and petroleum industries"], ans:0 },
  { ch:"ch3", q:"Which of the following statements accurately describes the Clean Air Act?", opts:["It allowed the EPA to track industrial chemicals.", "It focused on promoting alternative forms of energy.", "It established national air quality standards.", "It provided tax benefits to consumers who purchase hybrid cars.", "It focused on reducing pollution through cost-effective change."], ans:2 },
  { ch:"ch3", q:"The Clean Water Act makes it illegal for anyone to discharge any pollutant from a point source directly into navigable", opts:["good reason", "direct order", "permit", "inspector present", "limit"], ans:2 },
  { ch:"ch3", q:"Which of the following acts focuses on reducing pollution through cost-effective changes in production, operation,", opts:["Pollution Prevention Act", "Toxic Substances Control Act", "Clean Air Act", "Energy Policy Act", "Oil Pollution Act"], ans:0 },
  { ch:"ch3", q:"Which of the following is considered a misleading practice related to sustainability?", opts:["Designing environmentally friendly buildings", "Recycling", "Greenwashing", "Source reduction", "Sustainable agriculture"], ans:2 },
  { ch:"ch3", q:"To empower the EPA with the ability to track the 75,000 industrial chemicals currently produced or imported into the United States, Congress enacted which of the following?", opts:["Federal Water Pollution Control Act", "Federal Insecticide, Fungicide and Rodenticide Act", "Safe Drinking Water Act", "Toxic Substances Control Act", "Food Quality Protection Act"], ans:3 },
  { ch:"ch3", q:"Wind power holds great promise for the United States because it is home to one of the greatest sources of wind energy", opts:["Rocky Mountains", "Everglades", "Great Lakes", "Pacific Rim", "Great Plains"], ans:4 },
  { ch:"ch3", q:"A more dependable energy source than some other forms of alternative energy, geothermal energy provides _______.", opts:["heat from the sun", "a radiated heat", "heat from steam", "a constant source of heat", "a dry heat"], ans:3 },
  { ch:"ch3", q:"Which of these is considered the largest form of renewable energy?", opts:["Hydropower", "Solar power", "Geothermal power", "Biofuels", "Nuclear power"], ans:0 },
  { ch:"ch3", q:"Which of the following is the most controversial form of alternative energy after nuclear power?", opts:["Hydropower", "Geothermal power", "Solar power", "Wind power", "Ethanol"], ans:4 },
  { ch:"ch3", q:"Which of the following is the name for a certification program that recognizes sustainable building practices and promotes green design?", opts:["Brundtland Report", "WasteWise", "LEED", "Kyoto Protocol", "USMCA"], ans:2 },
  { ch:"ch3", q:"To report air, land, and water sustainability issues, most businesses use _______.", opts:["environmental, social, and governance (ESG) factors", "triple bottom line", "green marketing", "LEED", "ISO 14000"], ans:0 },
  { ch:"ch3", q:"Which type of business describes one that attempts to avoid dealing with environmental issues and hopes nothing bad", opts:["A newly established business", "A socially responsible business", "A low-commitment business", "A single-impact-driven business", "A law-abiding business"], ans:2 },
  { ch:"ch3", q:"One of the country's greatest sustainability success stories is _______.", opts:["water conservation", "pollution control", "manufacturing", "composting", "recycling"], ans:4 },
  { ch:"ch3", q:"Stakeholder assessment is an important part of which type of approach to environmental issues?", opts:["Low-commitment", "Medium-commitment", "High-commitment", "Hands-off", "Hands-on"], ans:2 },
  { ch:"ch3", q:"It is possible to quantify the trade-offs to determine whether to accept or reject environmentally related activities and policies?", opts:["risk management", "management voting", "board directives", "legal requirements", "customer input"], ans:0 },
  { ch:"ch3", q:"Which of the following is a comprehensive set of environmental standards developed by the International", opts:["Green Globes", "Kyoto Protocol", "ISO 14000", "Cancun Package", "LEED"], ans:2 },
  { ch:"ch3", q:"Which of the following includes the assessment and improvement of business strategies, economic sectors, work", opts:["Competitive advantage", "Marketing", "Sustainability", "Greenwashing", "Risk analysis"], ans:2 },
  { ch:"ch3", q:"Sustainability is defined as the long-term well-being of the natural environment and the mutually beneficial", opts:["customers, investors, managers, and policies", "board members, presidents, managers, and nonprofit organizations", "investors, creditors, suppliers, and the marketing department", "nature and individuals, organizations, and business strategies", "managers, boards, CEOs, and stakeholder strategies"], ans:3 },
  { ch:"ch3", q:"Which of the following does a cap-and-trade program reduce?", opts:["Carbon emissions", "Waste", "Water pollution", "Deforestation", "Fracking"], ans:0 },
  { ch:"ch3", q:"Which of the following statements about genetically modified seeds is true?", opts:["They are able to cross-pollinate with other plants.", "They make food more perishable.", "They often result in greater crop yields.", "They have a negative impact on impoverished areas.", "They do not offer crop resistance to pests such as bugs."], ans:2 },
  { ch:"ch3", q:"Major issues that emerged in the twentieth century include the protection of air, water, land, biodiversity, and renewable natural resources?", opts:["employee relations", "renewable natural resources", "environmental legal regulations", "consumer protection", "greenwashing"], ans:1 },
  { ch:"ch3", q:"Which of the following can cause markedly shorter life spans, along with chronic respiratory problems, in humans and animals?", opts:["Water pollution", "Air pollution", "Climate change", "Deforestation", "Acid rain"], ans:1 },
  { ch:"ch3", q:"Created in 1997, the Kyoto Protocol was an international treaty meant to curb global _______.", opts:["natural resource use", "greenwashing activities", "water pollution", "greenhouse gas emissions", "competition"], ans:3 },
  { ch:"ch3", q:"Which issue did Rachel Carson's book Silent Spring address that sparked the environmental movement?", opts:["Indiscriminate use of genetically modified seeds", "Deforestation", "Urban sprawl", "Indiscriminate use of pesticides", "Lack of renewable energy"], ans:3 },
  { ch:"ch3", q:"The biggest contributor of illnesses in developing countries is likely which of the following?", opts:["Acid rain", "Water pollution", "Deforestation", "Climate change", "Landfill waste"], ans:1 },
  { ch:"ch3", q:"Which of the following is an example of sustainability?", opts:["Recycling", "Donating money", "Building schools", "Helping children learn", "Building roads"], ans:0 },
  { ch:"ch3", q:"A strategy involving stakeholder assessment to create meaningful long-term relationships with customers while maintaining, supporting, and enhancing the natural environment is known as _______.", opts:["green marketing", "recycling initiatives", "stakeholder assessment", "risk analysis", "strategic environmental audit"], ans:0 },
  { ch:"ch3", q:"The long-term variation in average weather patterns is referred to as _______.", opts:["water pollution", "greenhouse gas", "climate change", "the Kyoto Protocol", "the ozone layer"], ans:2 },
  // ── Ch3 Missing MCQ ──
  { ch:"ch3", q:"Which of the following is a comprehensive set of environmental standards developed by the International Organization for Standardization to encourage a cleaner, safer, healthier world?", opts:["Green Globes", "Kyoto Protocol", "ISO 14000", "Cancun Package", "LEED"], ans:2 },
  // ── Ch3 True/False ──
  { ch:"ch3", q:"Because ethanol is created from corn in the United States, there are concerns that the increased use of ethanol will decrease food supplies.", opts:["True", "False"], ans:0 },
  { ch:"ch3", q:"Greenwashing is a strategy involving stakeholder assessment to create meaningful long-term relationships with customers, while maintaining, supporting, and enhancing the natural environment.", opts:["True", "False"], ans:1 },
  { ch:"ch3", q:"Green Globes and LEED are certification groups that authorize buildings as 'green.'", opts:["True", "False"], ans:0 },
  { ch:"ch3", q:"Acid rain, waste management, urban sprawl, and deforestation are all environmental issues related to land.", opts:["True", "False"], ans:1 },
  { ch:"ch3", q:"Recycling is the reprocessing of materials—especially steel, aluminum, paper, glass, rubber, and some plastics—for reuse.", opts:["True", "False"], ans:0 },
];
// ═══════════════════════════════════════════════
//  BEFORE THE EXAM — comprehensive pre-exam review
// ═══════════════════════════════════════════════
const BEXAM_CONTENT = {
  ch1: {
    title: 'Chapter 5 — Recognizing Ethical Issues in Business',
    color: '#F59E0B',
    bgSoft: '#FEF3C7',
    border: '#F59E0B',
    summary: [
      { term: 'Ethical Issue', def: 'مشكلة تتطلب الاختيار بين أفعال تُقيَّم كصح/خطأ.', eng: 'Requires choosing among right/wrong actions.' },
      { term: 'Ethical Dilemma', def: 'كل الخيارات لها نتائج سلبية — تختار الأقل ضرراً.', eng: 'All alternatives have negative outcomes.' },
      { term: '3 Foundational Values', def: '<strong>Integrity</strong> (النزاهة) · <strong>Honesty</strong> (الأمانة) · <strong>Fairness</strong> (الإنصاف).', eng: 'Three core values for identifying ethical issues.' },
      { term: 'Fairness — 3 Elements', def: '<strong>Equality</strong> (المساواة) · <strong>Reciprocity</strong> (المعاملة بالمثل) · <strong>Optimization</strong> (التحسين).', eng: 'Three elements motivating fairness.' },
      { term: 'Commission vs Omission Lying', def: '<strong>Commission</strong> = الخداع بالكلمات. <strong>Omission</strong> = عدم الإبلاغ عن المشاكل.', eng: 'Two types of lying: active vs silent.' },
      { term: 'Bribery: Active vs Passive', def: '<strong>Active</strong> = العاطي (يرتكب الجريمة). <strong>Passive</strong> = المسؤول المتلقي.', eng: 'Active = giver commits offense; Passive = receiver does.' },
      { term: 'Facilitation Payments', def: 'قانونية في أمريكا (FCPA) بحالات معينة، <strong>ممنوعة</strong> في بريطانيا.', eng: 'Legal in US (FCPA) sometimes, illegal in UK.' },
      { term: 'FCPA', def: 'قانون أمريكي يمنع رشوة <strong>المسؤولين الأجانب</strong>.', eng: 'US law against bribing foreign officials.' },
      { term: 'Hostile Work Environment — 3 Criteria', def: '1) السلوك غير مرحب به. 2) حاد ومتكرر ومغيّر لظروف العمل. 3) شخص عاقل سيجده عدائياً.', eng: 'Unwelcome · Severe/Pervasive · Reasonable Person test.' },
      { term: 'Age Discrimination Act', def: 'يحمي الأفراد <strong>40 سنة فأكثر</strong>، ويمنع إلزام التقاعد قبل 70.', eng: 'Protects workers 40+; no forced retirement before 70.' },
      { term: 'Insider Trading', def: 'قانوني فقط إذا كان في شركتك <strong>+ تبلغ SEC خلال يومي عمل</strong>.', eng: 'Legal only in own company AND reported to SEC within 2 days.' },
      { term: 'Consumer Fraud Types', def: '<strong>Collusion</strong> (موظف يساعد) · <strong>Duplicity</strong> (تمثيل حوادث) · <strong>Guile</strong> (حيل).', eng: 'Three types of consumer fraud.' },
      { term: 'Puffery', def: 'مبالغة إعلانية لا يعتمد عليها مشترٍ عاقل (مثل \"أفضل قهوة\"). قانونية.', eng: 'Exaggeration no reasonable buyer relies on.' },
      { term: 'Crisis Management', def: 'التعامل مع حدث عالي التأثير يتسم بالغموض والحاجة لفعل سريع.', eng: 'Handling high-impact ambiguous events.' }
    ],
    tips: [
      '🎯 فرّق بين Issue و Dilemma: Issue فيها صح وخطأ، Dilemma كلها خيارات سلبية',
      '⚖️ Active Bribery = العاطي | Passive Bribery = المتلقي',
      '📋 احفظ Consumer Fraud: Collusion (موظف)، Duplicity (تمثيل)، Guile (حيل)',
      '📅 Insider Trading قانوني فقط: في شركتك + SEC خلال يومين',
      '🌐 FCPA للمسؤولين الأجانب، ADEA للعمر 40+'
    ]
  },
  ch2: {
    title: 'Chapter 6 — A Framework for Ethical Decision Making',
    color: '#2563EB',
    bgSoft: '#DBEAFE',
    border: '#2563EB',
    summary: [
      { term: 'Ethical Decision Making — الخطوة الأولى', def: 'التعرف على وجود قضية أخلاقية (Ethical Awareness).', eng: 'Recognize ethical issue exists.' },
      { term: 'Ethical Issue Intensity', def: 'مدى أهمية القضية في نظر الفرد/المجموعة/المنظمة. شخصية وزمنية.', eng: 'Relevance/importance perceived by individual/group/org.' },
      { term: 'Moral Intensity', def: 'تصور الفرد للضغط الاجتماعي والضرر للآخرين.', eng: 'Perceived social pressure and harm to others.' },
      { term: 'Individual Factors (5)', def: '<strong>Gender · Education · Nationality · Age · Locus of Control</strong>.', eng: 'Five individual factors.' },
      { term: 'Locus of Control', def: '<strong>Internal</strong> = تتحكم بحياتك بجهدك. <strong>External</strong> = قوى خارجية تتحكم.', eng: 'Internal = master of fate; External = go with flow.' },
      { term: 'Organizational Factors', def: '<strong>Corporate Culture · Ethical Culture · Significant Others · Obedience to Authority</strong>.', eng: 'Four key org factors.' },
      { term: 'Significant Others', def: 'الزملاء والمدراء — تأثيرهم اليومي <strong>أكبر</strong> من CEO أو الدين.', eng: 'Peers/managers have MORE daily impact than CEO.' },
      { term: 'Opportunity', def: 'الظروف التي تحد أو تسمح بالسلوك غير الأخلاقي. <strong>غياب العقاب = Opportunity</strong>.', eng: 'Conditions permitting behavior; absence of punishment.' },
      { term: 'Guilt', def: 'أول علامة على قرار غير أخلاقي. النية ≠ السلوك → ذنب.', eng: 'First sign of unethical decision.' },
      { term: 'Normative vs Descriptive', def: '<strong>Normative</strong> = كيف <em>يجب</em>. <strong>Descriptive</strong> = كيف <em>يحصل فعلاً</em>.', eng: 'Normative = should; Descriptive = is.' },
      { term: 'Veil of Ignorance (Rawls)', def: 'كيف تضع المبادئ إذا لم تعرف موقعك المستقبلي في المجتمع؟', eng: 'Design principles not knowing your future position.' },
      { term: 'Equality Principle', def: 'لكل شخص حقوق أساسية متوافقة مع حريات الآخرين.', eng: 'Basic rights compatible with others\' liberties.' },
      { term: 'Difference Principle', def: 'التفاوت يجب أن يفيد <strong>أقل الأفراد حظاً</strong>.', eng: 'Inequalities must benefit the least-advantaged.' },
      { term: 'Institutions (Social)', def: 'الدين، التعليم، العائلة — تؤسس القيم المعيارية.', eng: 'Religion, education, family shape normative values.' }
    ],
    tips: [
      '🎯 Moral Intensity ≠ Ethical Issue Intensity — انتبه للفرق',
      '⚖️ Internal Locus = إيجابي للأخلاق | External = يمشي مع التيار',
      '👥 Significant Others أقوى من CEO في التأثير اليومي',
      '📖 Normative = المثالي | Descriptive = الواقع',
      '🎭 Veil of Ignorance = صمّم المجتمع وأنت لا تعرف موقعك'
    ]
  },
  ch3: {
    title: 'Chapter 7 — Moral Philosophy and Cognitive Moral Development',
    color: '#DC2626',
    bgSoft: '#FEE2E2',
    border: '#DC2626',
    summary: [
      { term: 'Moral Philosophy', def: 'مبادئ شخصية لتحديد الصح والخطأ (فردية).', eng: 'Individual principles; person-specific.' },
      { term: 'Business Ethics', def: 'قرارات جماعية لأهداف العمل.', eng: 'Group decisions for business objectives.' },
      { term: 'Teleology (Consequentialism)', def: 'الفعل صح إذا أنتج <strong>نتيجة مرغوبة</strong>. تشمل Egoism & Utilitarianism.', eng: 'Judged by consequences.' },
      { term: 'Egoism', def: 'تعظيم <strong>المصلحة الذاتية</strong>. Enlightened Egoism = طويل المدى مع مراعاة الآخرين.', eng: 'Self-interest maximization.' },
      { term: 'Utilitarianism', def: '<strong>أعظم خير لأكبر عدد</strong>. Rule vs Act.', eng: 'Greatest good for greatest number.' },
      { term: 'Deontology', def: 'تركز على <strong>الحقوق والنوايا</strong> لا النتائج. Nonconsequentialism.', eng: 'Rights & intentions, not consequences.' },
      { term: 'Categorical Imperative (Kant)', def: '"تصرّف كما لو أن فعلك سيصبح <strong>قانوناً كونياً</strong>."', eng: '"Act so your rule could become universal law."' },
      { term: 'Relativist Perspective', def: 'الأخلاق ذاتية من تجارب الأفراد والمجموعات. تتغير مع الظروف.', eng: 'Subjective from individual/group experiences.' },
      { term: 'Virtue Ethics', def: 'ما سيعتبره شخص <strong>ناضج ذو شخصية أخلاقية</strong> مناسباً. Inductive.', eng: 'What a mature moral person would do.' },
      { term: '3 Types of Justice', def: '<strong>Distributive</strong> (النتائج) · <strong>Procedural</strong> (العمليات) · <strong>Interactional</strong> (العلاقات).', eng: 'Outcomes · Processes · Relationships.' },
      { term: 'Kohlberg\'s 6 Stages', def: '1) Obedience · 2) Self-interest · 3) Relationships · 4) Social System · 5) Social Contract · 6) Universal Principles.', eng: 'Cognitive Moral Development stages.' },
      { term: 'Kohlberg\'s 3 Levels', def: '<strong>Pre-conventional</strong> (1-2) · <strong>Conventional</strong> (3-4) · <strong>Post-conventional</strong> (5-6).', eng: 'Three levels of CMD.' },
      { term: 'Adam Smith vs Milton Friedman', def: 'Smith = أخلاق الأعمال تأتي من أخلاق الناس الصالحين. Friedman = السوق يكافئ ويعاقب، الربح هدف.', eng: 'Two views on free markets.' },
      { term: 'White-Collar Crime', def: 'جرائم <strong>غير عنيفة</strong> من أفراد متعلمين في مناصب قوة. خسائر أكبر من الجرائم العنيفة.', eng: 'Nonviolent crimes by educated; monetary loss > violent crime.' },
      { term: 'Economic Freedom', def: 'الملكية الذاتية، حرية الاختيار، التبادل الطوعي، الأسواق المفتوحة.', eng: 'Self-ownership, choice, voluntary exchange.' }
    ],
    tips: [
      '🎯 Teleology = النتائج | Deontology = الحقوق والنوايا',
      '🌍 Utilitarianism = الأغلبية | Egoism = الفرد',
      '⚖️ 3 أنواع عدالة: Distributive (نتائج)، Procedural (عمليات)، Interactional (علاقات)',
      '📊 Kohlberg 6 مراحل → 3 مستويات (قبل التقليدي، التقليدي، بعد التقليدي)',
      '💼 White-Collar Crime: أشخاص متعلمون في مناصب قوة'
    ]
  }
};

function initBeforeExam() {
  // Countdown
  try {
    const examDate = new Date('2026-05-07T00:00:00');
    const now = Date.now();
    const days = Math.max(0, Math.ceil((examDate.getTime() - now) / 86400000));
    const el = document.getElementById('bexam-days');
    if (el) el.textContent = days;
  } catch (e) {}
  // Default to ch1 tab
  switchBexamTab('ch1');
}

function switchBexamTab(ch) {
  const tabs = ['ch1', 'ch2', 'ch3'];
  tabs.forEach(function(c) {
    const btn = document.getElementById('bexam-tab-' + c);
    if (!btn) return;
    if (c === ch) {
      const data = BEXAM_CONTENT[c];
      btn.style.cssText = 'flex:1;min-width:130px;padding:14px;border-radius:12px;border:1.5px solid ' + data.border + ';background:linear-gradient(135deg,' + data.bgSoft + ',' + data.bgSoft + ');color:' + data.border + ';font-weight:800;font-size:.92rem;cursor:pointer;font-family:inherit;';
    } else {
      btn.style.cssText = 'flex:1;min-width:130px;padding:14px;border-radius:12px;border:1.5px solid var(--line);background:var(--paper);color:var(--ink);font-weight:600;font-size:.92rem;cursor:pointer;font-family:inherit;';
    }
  });
  renderBexamContent(ch);
}

function renderBexamContent(ch) {
  const container = document.getElementById('bexam-content');
  if (!container) return;
  const data = BEXAM_CONTENT[ch];
  if (!data) { container.innerHTML = ''; return; }
  let html = '<section class="chapter" style="margin-top:0;padding:20px 24px;">';
  html += '<h2 style="margin-top:0;color:' + data.border + ';">' + data.title + '</h2>';

  // Key terms summary
  html += '<div style="font-weight:800;font-size:1rem;margin:20px 0 12px;color:var(--ink);">📌 أهم التعاريف والمفاهيم</div>';
  html += '<div style="display:flex;flex-direction:column;gap:10px;">';
  data.summary.forEach(function(item) {
    const encodedTerm = item.term.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    html += '<div style="background:var(--bg);border:1.5px solid var(--line);border-right:4px solid ' + data.border + ';border-radius:12px;padding:14px 16px;">'
      + '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;flex-wrap:wrap;margin-bottom:10px;">'
      + '<div style="font-weight:800;font-size:1rem;color:' + data.border + ';">' + item.term + '</div>'
      + '<button onclick="showRelatedQuestions(\'' + encodedTerm + '\',\'' + ch + '\')" style="background:' + data.bgSoft + ';color:' + data.border + ';border:1.5px solid ' + data.border + ';padding:5px 12px;border-radius:8px;font-size:.75rem;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap;">📝 شلون يجي في الاختبار؟</button>'
      + '</div>'
      + '<div style="font-size:.92rem;line-height:1.7;color:var(--ink);margin-bottom:8px;"><span style="font-weight:700;color:var(--muted);font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;margin-left:4px;">EN:</span> ' + item.eng + '</div>'
      + '<div style="font-size:.9rem;line-height:1.7;color:var(--ink);direction:rtl;padding:8px 10px;background:var(--paper);border-radius:8px;border-right:3px solid ' + data.border + ';"><span style="font-weight:700;color:var(--muted);font-size:.72rem;margin-left:4px;">AR:</span> ' + item.def + '</div>'
      + '</div>';
  });
  html += '</div>';

  // Exam tips
  html += '<div style="font-weight:800;font-size:1rem;margin:24px 0 12px;color:var(--ink);">💡 نصائح للاختبار</div>';
  html += '<div style="background:linear-gradient(135deg,' + data.bgSoft + ',' + data.bgSoft + ');border:2px solid ' + data.border + ';border-radius:14px;padding:16px 20px;">';
  html += '<ul style="margin:0;padding-right:20px;color:' + data.border + ';font-size:.92rem;line-height:2;">';
  data.tips.forEach(function(tip) { html += '<li>' + tip + '</li>'; });
  html += '</ul></div>';

  html += '</section>';
  container.innerHTML = html;
}

// Show related TB questions for a given term
function showRelatedQuestions(term, ch) {
  const pool = (typeof MID2_TESTBANK !== 'undefined' ? MID2_TESTBANK : (typeof testBankQ !== 'undefined' ? testBankQ : []));
  const chQuestions = pool.filter(function(q){ return q.ch === ch; });
  // Simple keyword search — match any word in the term against question text or options
  const termWords = term.toLowerCase().replace(/[^a-z\u0600-\u06FF\s]/g, ' ').split(/\s+/).filter(function(w){ return w.length > 2; });
  const related = chQuestions.filter(function(q) {
    const haystack = (q.q + ' ' + (q.opts || []).join(' ') + ' ' + (q.exp || '')).toLowerCase();
    return termWords.some(function(w){ return haystack.indexOf(w) !== -1; });
  }).slice(0, 5);
  // Build modal
  let modal = document.getElementById('rq-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'rq-modal';
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:10003;display:none;align-items:center;justify-content:center;padding:20px;';
    modal.onclick = function(e) { if (e.target === modal) modal.style.display = 'none'; };
    document.body.appendChild(modal);
  }
  const letters = ['A','B','C','D','E'];
  let html = '<div style="background:var(--paper);border-radius:18px;max-width:700px;width:100%;max-height:85vh;overflow-y:auto;padding:24px;direction:rtl;">';
  html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">';
  html += '<div style="font-weight:800;font-size:1.1rem;">📝 "' + term + '" في الاختبار</div>';
  html += '<button onclick="document.getElementById(\'rq-modal\').style.display=\'none\'" style="background:transparent;border:none;font-size:1.6rem;color:var(--muted);cursor:pointer;padding:0 8px;">×</button>';
  html += '</div>';
  if (related.length === 0) {
    html += '<div style="text-align:center;padding:40px 20px;color:var(--muted);">ما لقينا أسئلة مرتبطة بهذا المصطلح — جرّب راجع من بنك الأسئلة الكامل.</div>';
  } else {
    html += '<div style="font-size:.82rem;color:var(--muted);margin-bottom:14px;">وجدنا <strong>' + related.length + '</strong> سؤال مرتبط:</div>';
    related.forEach(function(q, idx) {
      const dispAns = q.ans;
      html += '<div style="background:var(--bg);border:1.5px solid var(--line);border-radius:12px;padding:14px 16px;margin-bottom:10px;">';
      html += '<div style="font-weight:700;margin-bottom:10px;line-height:1.7;font-size:.92rem;">Q' + (idx+1) + '. ' + q.q + '</div>';
      (q.opts || []).forEach(function(opt, j) {
        const isCorrect = j === dispAns;
        let style = 'padding:7px 12px;border-radius:8px;margin-bottom:4px;font-size:.85rem;line-height:1.5;';
        if (isCorrect) style += 'background:rgba(5,150,105,0.12);border:1px solid rgba(5,150,105,0.3);color:var(--good);font-weight:700;';
        else style += 'color:var(--muted);';
        html += '<div style="' + style + '">' + letters[j] + '. ' + opt + (isCorrect ? ' ✓' : '') + '</div>';
      });
      if (q.exp) {
        html += '<div style="margin-top:8px;padding:8px 12px;background:var(--accent-soft);border-radius:8px;font-size:.82rem;line-height:1.6;color:var(--ink);">💡 ' + q.exp + '</div>';
      }
      html += '</div>';
    });
  }
  html += '</div>';
  modal.innerHTML = html;
  modal.style.display = 'flex';
}

// ═══════════════════════════════════════════════
//  DRAWING / PEN TOOL (Apple Pencil, touch, mouse)
// ═══════════════════════════════════════════════
const DRAW_KEY_PREFIX = 'bus214_draw_';
let drawState = {
  active: false,
  drawing: false,
  color: '#000000',
  size: 4,
  eraser: false,
  pencilOnly: true, // default: Apple Pencil only — finger scrolls the page
  strokes: [], // current page's strokes: [{color, size, eraser, points:[{x,y,p}]}]
  currentStroke: null,
  pageId: null,
  canvas: null,
  ctx: null
};

function getPageStrokes(pageId) {
  try {
    const raw = localStorage.getItem(DRAW_KEY_PREFIX + pageId);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
function savePageStrokes(pageId, strokes) {
  try { localStorage.setItem(DRAW_KEY_PREFIX + pageId, JSON.stringify(strokes)); } catch (e) {}
}

function setupDrawCanvas() {
  const canvas = document.getElementById('draw-canvas');
  if (!canvas) return null;
  drawState.canvas = canvas;
  drawState.ctx = canvas.getContext('2d');
  // Size canvas to match page content (account for device pixel ratio for crisp drawing)
  const pageEl = document.querySelector('.page.active');
  if (!pageEl) return null;
  // Use offsetParent chain (layout coords) instead of getBoundingClientRect
  // so we're not affected by the .page.active fade-slide transform animation.
  let pageTop = 0, pageLeft = 0, walker = pageEl;
  while (walker) {
    pageTop += walker.offsetTop;
    pageLeft += walker.offsetLeft;
    walker = walker.offsetParent;
  }
  const pageW = pageEl.offsetWidth;
  const pageH = pageEl.offsetHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap at 2x to limit memory
  canvas.style.top = pageTop + 'px';
  canvas.style.left = pageLeft + 'px';
  canvas.style.width = pageW + 'px';
  canvas.style.height = pageH + 'px';
  canvas.width = Math.floor(pageW * dpr);
  canvas.height = Math.floor(pageH * dpr);
  drawState.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return canvas;
}
// Handle orientation change / resize on iPad
let _drawResizeTimer;
window.addEventListener('resize', function() {
  if (!drawState.active && (!drawState.pageId || getPageStrokes(drawState.pageId).length === 0)) return;
  clearTimeout(_drawResizeTimer);
  _drawResizeTimer = setTimeout(function() {
    setupDrawCanvas();
    redrawStrokes();
  }, 200);
});
window.addEventListener('orientationchange', function() {
  setTimeout(function() {
    if (drawState.canvas) { setupDrawCanvas(); redrawStrokes(); }
  }, 300);
});

function toggleDrawMode() {
  const toolbar = document.getElementById('draw-toolbar');
  const canvas = document.getElementById('draw-canvas');
  if (!toolbar || !canvas) return;
  if (drawState.active) {
    // Turn off
    drawState.active = false;
    toolbar.style.display = 'none';
    canvas.style.pointerEvents = 'none';
    // Restore normal page gestures
    document.body.style.overscrollBehavior = '';
    document.documentElement.style.overscrollBehavior = '';
    const fab = document.getElementById('draw-fab');
    if (fab) fab.style.opacity = '1';
  } else {
    // Turn on
    drawState.pageId = getCurrentPageId();
    if (!drawState.pageId) return;
    setupDrawCanvas();
    // Load existing strokes
    drawState.strokes = getPageStrokes(drawState.pageId);
    redrawStrokes();
    canvas.style.display = 'block';
    canvas.style.pointerEvents = 'auto';
    // touch-action: ALWAYS 'none' so the PEN draws cleanly without
    // the browser hijacking strokes for pan/zoom. Finger scrolling
    // when pencilOnly is on is handled manually via touch listeners
    // (see _onCanvasTouchStart/Move/End below) using touchType to
    // distinguish stylus from finger on iOS.
    canvas.style.touchAction = 'none';
    toolbar.style.display = 'flex';
    drawState.active = true;
    // Prevent pull-to-refresh and rubber-band scroll while drawing
    document.body.style.overscrollBehavior = 'none';
    document.documentElement.style.overscrollBehavior = 'none';
    const fab = document.getElementById('draw-fab');
    if (fab) fab.style.opacity = '0.5';
  }
}

function setDrawColor(btn, color) {
  drawState.color = color;
  drawState.eraser = false;
  document.querySelectorAll('.draw-color-btn').forEach(function(b){ b.style.borderColor = 'transparent'; });
  btn.style.borderColor = '#60A5FA';
  const eraserBtn = document.getElementById('draw-eraser-btn');
  if (eraserBtn) eraserBtn.style.borderColor = 'transparent';
}
function setDrawSize(btn, size) {
  drawState.size = size;
  document.querySelectorAll('.draw-size-btn').forEach(function(b){ b.style.borderColor = 'transparent'; });
  btn.style.borderColor = '#60A5FA';
}
function toggleEraser() {
  drawState.eraser = !drawState.eraser;
  const btn = document.getElementById('draw-eraser-btn');
  if (btn) btn.style.borderColor = drawState.eraser ? '#60A5FA' : 'transparent';
}
function togglePencilOnly() {
  drawState.pencilOnly = !drawState.pencilOnly;
  const btn = document.getElementById('draw-pencil-only-btn');
  if (btn) {
    btn.style.borderColor = drawState.pencilOnly ? '#60A5FA' : 'transparent';
    btn.style.background = drawState.pencilOnly ? '#1e3a8a' : '#374151';
    btn.title = drawState.pencilOnly ? 'قلم Apple فقط — الإصبع للتمرير ✓' : 'اضغط لتفعيل وضع القلم فقط (الإصبع للتمرير)';
  }
}

// ── FINGER SCROLL via touch events (in pencilOnly mode) ─────
// touch-action:none on canvas so the pen draws cleanly without browser
// gesture hijacking. But that would block finger scroll too — we restore
// it manually here using TouchEvent.touchType (iOS) to distinguish
// stylus from finger. Finger movement → window.scrollBy.
function _isFingerTouch(t) {
  // iOS Safari: 'direct' = finger, 'stylus' = Apple Pencil.
  // Other browsers: touchType undefined → assume finger.
  return !t.touchType || t.touchType === 'direct';
}
function _onCanvasTouchStart(e) {
  if (!drawState.active || !drawState.pencilOnly) return;
  // Find finger (not stylus) — manual loop instead of Array.from to avoid alloc
  let finger = null;
  for (let i = 0; i < e.touches.length; i++) {
    if (_isFingerTouch(e.touches[i])) { finger = e.touches[i]; break; }
  }
  if (!finger) return;
  drawState._fingerScroll = { lastY: finger.clientY, id: finger.identifier, dyAccum: 0, scheduled: false };
}
function _onCanvasTouchMove(e) {
  const fs = drawState._fingerScroll;
  if (!fs) return;
  let t = null;
  for (let i = 0; i < e.touches.length; i++) {
    if (e.touches[i].identifier === fs.id) { t = e.touches[i]; break; }
  }
  if (!t) return;
  fs.dyAccum += fs.lastY - t.clientY;
  fs.lastY = t.clientY;
  // Batch the scroll commit to next animation frame — avoids forcing
  // synchronous reflow on every touch sample (60-120Hz).
  if (!fs.scheduled) {
    fs.scheduled = true;
    requestAnimationFrame(() => {
      if (drawState._fingerScroll === fs) {
        window.scrollBy(0, fs.dyAccum);
        fs.dyAccum = 0;
        fs.scheduled = false;
      }
    });
  }
}
function _onCanvasTouchEnd(e) {
  const fs = drawState._fingerScroll;
  if (!fs) return;
  let stillThere = false;
  for (let i = 0; i < e.touches.length; i++) {
    if (e.touches[i].identifier === fs.id) { stillThere = true; break; }
  }
  if (!stillThere) drawState._fingerScroll = null;
}

function drawUndo() {
  if (!drawState.pageId || drawState.strokes.length === 0) return;
  drawState.strokes.pop();
  savePageStrokes(drawState.pageId, drawState.strokes);
  redrawStrokes();
}
function drawClear() {
  if (!drawState.pageId) return;
  if (!confirm('مسح كل الرسم في هذه الصفحة؟')) return;
  drawState.strokes = [];
  savePageStrokes(drawState.pageId, drawState.strokes);
  redrawStrokes();
}

function redrawStrokes() {
  if (!drawState.ctx || !drawState.canvas) return;
  const ctx = drawState.ctx;
  ctx.clearRect(0, 0, drawState.canvas.width, drawState.canvas.height);
  drawState.strokes.forEach(function(stroke) { drawStrokeOnCanvas(stroke); });
}
// Map velocity (px/ms) to width multiplier — Notability-style "ink feel":
// slow strokes = thick, fast strokes = thin. Range clamped 0.7x..1.35x.
function _velMul(v) {
  // v ~0.2 px/ms = slow handwriting → 1.35x; v ~3 px/ms = quick scribble → 0.7x
  const t = Math.max(0, Math.min(1, (v - 0.15) / (3.0 - 0.15)));
  return 1.35 - t * 0.65;
}

function drawStrokeOnCanvas(stroke) {
  const ctx = drawState.ctx;
  if (!ctx || !stroke.points || stroke.points.length === 0) return;
  ctx.globalCompositeOperation = stroke.eraser ? 'destination-out' : 'source-over';
  ctx.strokeStyle = stroke.color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const pts = stroke.points;
  const N = pts.length;
  // Smoothed velocity per-segment (EMA) to avoid jittery thickness
  let smoothV = -1;
  for (let i = 1; i < N; i++) {
    const p1 = pts[i-1], p2 = pts[i];
    // Velocity (only if timestamps present)
    if (p1.t && p2.t && p2.t > p1.t) {
      const dx = p2.x - p1.x, dy = p2.y - p1.y;
      const v = Math.sqrt(dx*dx + dy*dy) / (p2.t - p1.t);
      smoothV = smoothV < 0 ? v : (smoothV * 0.65 + v * 0.35);
    }
    const pressure = ((p1.p || 0.5) + (p2.p || 0.5)) / 2;
    const pressureMul = stroke.eraser ? 1 : (0.6 + pressure * 0.8);
    const velMul = (smoothV >= 0 && !stroke.eraser) ? _velMul(smoothV) : 1.0;
    // Tapered ends — first 3 and last 3 segments scale down to mimic ink
    // entry/exit. Skip taper for very short strokes.
    let taperMul = 1;
    if (N > 8 && !stroke.eraser) {
      if (i <= 3)       taperMul = 0.55 + i * 0.15;            // 0.70, 0.85, 1.00 → settled
      else if (i >= N - 3) taperMul = 0.55 + (N - 1 - i) * 0.15; // taper out
    }
    ctx.lineWidth = stroke.size * pressureMul * velMul * taperMul;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    if (i + 1 < N) {
      const p3 = pts[i+1];
      const mx = (p2.x + p3.x) / 2;
      const my = (p2.y + p3.y) / 2;
      ctx.quadraticCurveTo(p2.x, p2.y, mx, my);
    } else {
      ctx.lineTo(p2.x, p2.y);
    }
    ctx.stroke();
  }
}

// Pointer position using cached rect (refreshed at stroke start) to avoid
// layout thrash from getBoundingClientRect() on every pointermove event.
// Includes timestamp for velocity calculation (Notability-style ink feel).
function getPointerPosFast(e) {
  const rect = drawState.strokeRect;
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
    p: e.pressure || 0.5,
    t: e.timeStamp || performance.now()
  };
}
// Slow-path used at stroke start (no cached rect yet)
function getPointerPos(e, canvas) {
  const rect = canvas.getBoundingClientRect();
  const clientX = (e.touches ? e.touches[0].clientX : e.clientX);
  const clientY = (e.touches ? e.touches[0].clientY : e.clientY);
  return { x: clientX - rect.left, y: clientY - rect.top, p: e.pressure || 0.5 };
}

function startStroke(e) {
  if (!drawState.active) return;
  if (drawState.pencilOnly && e.pointerType !== 'pen') return;
  if (e.pointerType === 'touch' && drawState.drawing) return;
  e.preventDefault();
  // Capture pointer so we keep getting move/up events even if finger leaves canvas
  if (drawState.canvas.setPointerCapture && e.pointerId != null) {
    try { drawState.canvas.setPointerCapture(e.pointerId); } catch (_) {}
  }
  drawState.drawing = true;
  drawState.activePointerId = e.pointerId;
  drawState.strokeRect = drawState.canvas.getBoundingClientRect();
  const pos = getPointerPosFast(e);
  drawState.currentStroke = {
    color: drawState.color,
    size: drawState.size,
    eraser: drawState.eraser,
    points: [pos]
  };
}

function continueStroke(e) {
  if (!drawState.active || !drawState.drawing || !drawState.currentStroke) return;
  if (drawState.activePointerId != null && e.pointerId !== drawState.activePointerId) return;
  if (drawState.pencilOnly && e.pointerType !== 'pen') return;
  e.preventDefault();

  const ctx = drawState.ctx;
  const s = drawState.currentStroke;
  // Apple Pencil samples at 240Hz but pointermove fires at 60-120Hz —
  // getCoalescedEvents() returns the in-between samples for full fidelity.
  const coalesced = (typeof e.getCoalescedEvents === 'function') ? e.getCoalescedEvents() : null;
  const events = (coalesced && coalesced.length > 0) ? coalesced : [e];

  // Set static ctx props once (saves N redundant assignments per move)
  ctx.globalCompositeOperation = s.eraser ? 'destination-out' : 'source-over';
  ctx.strokeStyle = s.color;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  for (let i = 0; i < events.length; i++) {
    s.points.push(getPointerPosFast(events[i]));
    const pts = s.points;
    if (pts.length < 2) continue;

    // Compute velocity for newest segment (Notability-style ink feel)
    const pLast = pts[pts.length-1], pPrev = pts[pts.length-2];
    if (pLast.t && pPrev.t && pLast.t > pPrev.t) {
      const dx = pLast.x - pPrev.x, dy = pLast.y - pPrev.y;
      const v = Math.sqrt(dx*dx + dy*dy) / (pLast.t - pPrev.t);
      s.smoothV = (s.smoothV === undefined) ? v : (s.smoothV * 0.65 + v * 0.35);
    }
    const velMul = (s.smoothV !== undefined && !s.eraser) ? _velMul(s.smoothV) : 1.0;

    if (pts.length < 3) {
      const p1 = pts[0], p2 = pts[1];
      const pr = ((p1.p || 0.5) + (p2.p || 0.5)) / 2;
      ctx.lineWidth = s.size * (s.eraser ? 1 : (0.6 + pr * 0.8)) * velMul;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      continue;
    }
    const p1 = pts[pts.length-3], p2 = pts[pts.length-2], p3 = pts[pts.length-1];
    const m1x = (p1.x + p2.x) * 0.5, m1y = (p1.y + p2.y) * 0.5;
    const m2x = (p2.x + p3.x) * 0.5, m2y = (p2.y + p3.y) * 0.5;
    const pr = ((p2.p || 0.5) + (p3.p || 0.5)) / 2;
    ctx.lineWidth = s.size * (s.eraser ? 1 : (0.6 + pr * 0.8)) * velMul;
    ctx.beginPath();
    ctx.moveTo(m1x, m1y);
    ctx.quadraticCurveTo(p2.x, p2.y, m2x, m2y);
    ctx.stroke();
  }
}
function endStroke(e) {
  if (!drawState.active || !drawState.drawing) return;
  if (e && e.pointerId != null && drawState.activePointerId != null && e.pointerId !== drawState.activePointerId) return;
  // Release pointer capture if we have it
  if (drawState.canvas && e && e.pointerId != null && drawState.canvas.hasPointerCapture && drawState.canvas.hasPointerCapture(e.pointerId)) {
    try { drawState.canvas.releasePointerCapture(e.pointerId); } catch (_) {}
  }
  drawState.drawing = false;
  drawState.activePointerId = null;
  drawState.strokeRect = null;
  if (drawState.currentStroke && drawState.currentStroke.points.length > 0) {
    drawState.strokes.push(drawState.currentStroke);
    savePageStrokes(drawState.pageId, drawState.strokes);
    // Final smooth re-render: live draw was incremental segments, the full
    // bezier path looks slightly cleaner.
    redrawStrokes();
  }
  drawState.currentStroke = null;
}

// Wire up pointer events once on load
function _wireDrawListeners(canvas) {
  if (!canvas || canvas._drawWired) return;
  canvas._drawWired = true;
  canvas.addEventListener('pointerdown', startStroke);
  canvas.addEventListener('pointermove', continueStroke);
  canvas.addEventListener('pointerup', endStroke);
  canvas.addEventListener('pointercancel', endStroke);
  canvas.addEventListener('pointerleave', endStroke);
  // Manual finger scroll listeners — ALL passive so they don't block
  // the iOS compositor thread. touch-action:none on canvas already
  // prevents native scroll, so we don't need preventDefault.
  canvas.addEventListener('touchstart', _onCanvasTouchStart, { passive: true });
  canvas.addEventListener('touchmove', _onCanvasTouchMove, { passive: true });
  canvas.addEventListener('touchend', _onCanvasTouchEnd, { passive: true });
  canvas.addEventListener('touchcancel', _onCanvasTouchEnd, { passive: true });
}
document.addEventListener('DOMContentLoaded', function() {
  _wireDrawListeners(document.getElementById('draw-canvas'));
});
setTimeout(function() {
  _wireDrawListeners(document.getElementById('draw-canvas'));
}, 500);

// Show/hide draw FAB per page
function isAuthOverlayBlocking() {
  const o = document.getElementById('auth-overlay');
  return !!(o && getComputedStyle(o).display !== 'none');
}
function updateDrawFabVisibility(pageId) {
  const fab = document.getElementById('draw-fab');
  if (!fab) return;
  if (document.body.classList.contains('quiz-mode') || document.body.classList.contains('mock-mode')) {
    fab.style.display = 'none';
    return;
  }
  if (isAuthOverlayBlocking()) {
    fab.style.display = 'none';
    return;
  }
  const showOn = ['page-home', 'page-ch1', 'page-ch2', 'page-ch3', 'page-quick', 'page-flash'];
  fab.style.display = showOn.indexOf(pageId) !== -1 ? 'block' : 'none';
  // Has existing drawings? Indicate on FAB
  const hasDrawings = getPageStrokes(pageId).length > 0;
  fab.style.boxShadow = hasDrawings ? '0 0 0 3px rgba(124,58,237,.4), 0 6px 20px rgba(124,58,237,.4)' : '0 6px 20px rgba(124,58,237,.4)';
}

// Restore drawings when showing a page
function restoreDrawings(pageId) {
  updateDrawFabVisibility(pageId);
  const canvas = document.getElementById('draw-canvas');
  const strokes = getPageStrokes(pageId);
  if (strokes.length === 0) {
    // Hide canvas when no drawings and not in draw mode
    if (canvas && !drawState.active) canvas.style.display = 'none';
    return;
  }
  // Show canvas at page layout and replay strokes
  setTimeout(function() {
    setupDrawCanvas();
    drawState.strokes = strokes;
    drawState.pageId = pageId;
    redrawStrokes();
    if (canvas) {
      canvas.style.display = 'block';
      canvas.style.pointerEvents = 'none'; // allow scroll/interaction until draw mode enabled
    }
  }, 100);
}

// Hide canvas when leaving page if draw mode is off
const _origShowPage = window.showPage;
// (showPage enhancement handled below via hook in main showPage function)

// ═══════════════════════════════════════════════
//  STICKY NOTES (per-page user notes)
// ═══════════════════════════════════════════════
const NOTES_KEY_PREFIX = 'bus214_notes_';

function getPageNotes(pageId) {
  try { return JSON.parse(localStorage.getItem(NOTES_KEY_PREFIX + pageId) || '[]'); }
  catch (e) { return []; }
}
function savePageNotes(pageId, list) {
  try { localStorage.setItem(NOTES_KEY_PREFIX + pageId, JSON.stringify(list)); } catch (e) {}
}
function getCurrentPageId() {
  const active = document.querySelector('.page.active');
  return active ? active.id : null;
}
function getPageLabel(pageId) {
  const map = {
    'page-home': 'الصفحة الرئيسية',
    'page-ch1': 'Chapter 1',
    'page-ch2': 'Chapter 2',
    'page-ch3': 'Chapter 3',
    'page-ch5': 'Chapter 5 — Ethical Issues',
    'page-ch6': 'Chapter 6 — Decision Framework',
    'page-ch7': 'Chapter 7 — Moral Philosophy',
    'page-quick-review': 'المراجعة السريعة',
    'page-flash': 'Flash Cards',
    'page-quiz': 'Quiz Mode',
    'page-mock': 'Mock Exam',
    'page-testbank': 'Test Bank',
    'page-dashboard': 'Dashboard',
    'page-wrong-review': 'المراجعة'
  };
  return map[pageId] || pageId;
}

function toggleNotesPanel() {
  const panel = document.getElementById('notes-panel');
  if (!panel) return;
  const isOpen = panel.style.display === 'flex';
  if (isOpen) {
    panel.style.display = 'none';
  } else {
    panel.style.display = 'flex';
    const pid = getCurrentPageId();
    const lbl = document.getElementById('notes-page-label');
    if (lbl) lbl.textContent = pid ? getPageLabel(pid) : '';
    renderNotesList();
  }
}
function renderNotesList() {
  const pid = getCurrentPageId();
  const list = document.getElementById('notes-list');
  if (!list || !pid) return;
  const notes = getPageNotes(pid);
  if (notes.length === 0) {
    list.innerHTML = '<div style="text-align:center;padding:30px 10px;color:var(--muted);font-size:.85rem;"><div style="font-size:2.5rem;opacity:.3;margin-bottom:8px;">📭</div>لا توجد ملاحظات بعد<div style="font-size:.72rem;margin-top:4px;">ملاحظاتك تُحفظ محلياً في جهازك</div></div>';
    return;
  }
  let html = '';
  notes.slice().reverse().forEach(function(n, idx) {
    const realIdx = notes.length - 1 - idx;
    const dateStr = new Date(n.ts).toLocaleDateString('ar-SA') + ' · ' + new Date(n.ts).toLocaleTimeString('ar-SA', {hour:'2-digit',minute:'2-digit'});
    const escaped = (n.text || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
    html += '<div style="background:#FEF3C7;border:1.5px solid #FDE68A;border-right:4px solid #F59E0B;border-radius:10px;padding:12px 14px;margin-bottom:10px;position:relative;">'
      + '<div style="font-size:.88rem;line-height:1.6;color:#78350F;word-wrap:break-word;">' + escaped + '</div>'
      + '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;padding-top:8px;border-top:1px solid rgba(180,83,9,.15);">'
      + '<span style="font-size:.7rem;color:#92400E;">' + dateStr + '</span>'
      + '<button onclick="deleteNote(' + realIdx + ')" style="background:transparent;border:none;color:#92400E;font-size:.78rem;font-weight:700;cursor:pointer;padding:2px 8px;border-radius:6px;">🗑️ حذف</button>'
      + '</div></div>';
  });
  list.innerHTML = html;
}
function addNote() {
  const input = document.getElementById('notes-input');
  const pid = getCurrentPageId();
  if (!input || !pid) return;
  const text = input.value.trim();
  if (!text) return;
  const notes = getPageNotes(pid);
  notes.push({ text: text, ts: Date.now() });
  savePageNotes(pid, notes);
  input.value = '';
  renderNotesList();
  updateNotesFabVisibility(pid);
}
function deleteNote(idx) {
  const pid = getCurrentPageId();
  if (!pid) return;
  const notes = getPageNotes(pid);
  if (idx < 0 || idx >= notes.length) return;
  if (!confirm('حذف هذه الملاحظة؟')) return;
  notes.splice(idx, 1);
  savePageNotes(pid, notes);
  renderNotesList();
  updateNotesFabVisibility(pid);
}
function updateNotesFabVisibility(pageId) {
  const fab = document.getElementById('notes-fab');
  if (!fab) return;
  // Hide on quiz/mock/testbank active sessions
  if (document.body.classList.contains('quiz-mode') || document.body.classList.contains('mock-mode')) {
    fab.style.display = 'none';
    return;
  }
  if (isAuthOverlayBlocking()) {
    fab.style.display = 'none';
    return;
  }
  // Show on chapter, review, home pages
  const showOn = ['page-home', 'page-ch1', 'page-ch2', 'page-ch3', 'page-quick', 'page-flash'];
  fab.style.display = showOn.indexOf(pageId) !== -1 ? 'block' : 'none';
  // Update badge if notes exist
  const count = getPageNotes(pageId).length;
  fab.textContent = count > 0 ? '📝·' + count : '📝';
}
function restoreNotes(pageId) {
  // Just update FAB visibility + count when navigating
  updateNotesFabVisibility(pageId);
}

// ═══════════════════════════════════════════════
//  HIGHLIGHTER (user-selected text highlights)
// ═══════════════════════════════════════════════
const HL_KEY_PREFIX = 'bus214_hl_';

function getPageHighlights(pageId) {
  try { return JSON.parse(localStorage.getItem(HL_KEY_PREFIX + pageId) || '[]'); }
  catch (e) { return []; }
}
function savePageHighlights(pageId, list) {
  try { localStorage.setItem(HL_KEY_PREFIX + pageId, JSON.stringify(list)); } catch (e) {}
}

// Show highlighter popup on text selection within a chapter page
document.addEventListener('mouseup', function(e) {
  const popup = document.getElementById('highlighter-popup');
  if (!popup) return;
  // Don't show if clicking inside popup itself
  if (popup.contains(e.target)) return;
  const sel = window.getSelection();
  const text = sel.toString().trim();
  if (!text || text.length < 2 || text.length > 300) {
    popup.style.display = 'none';
    return;
  }
  // Only show inside allowed pages (chapters, quick review, etc.)
  const allowedPages = ['page-ch1', 'page-ch2', 'page-ch3', 'page-ch5', 'page-ch6', 'page-ch7', 'page-quick', 'page-quick-review', 'page-home'];
  const range = sel.getRangeAt(0);
  let node = range.commonAncestorContainer;
  if (node.nodeType === 3) node = node.parentElement;
  const pageEl = node.closest('.page');
  if (!pageEl || allowedPages.indexOf(pageEl.id) === -1) {
    popup.style.display = 'none';
    return;
  }
  // Position popup above selection
  const rect = range.getBoundingClientRect();
  popup.style.display = 'flex';
  const popupW = 200;
  const left = Math.max(10, Math.min(window.innerWidth - popupW - 10, rect.left + window.scrollX + rect.width / 2 - popupW / 2));
  const top = rect.top + window.scrollY - 44;
  popup.style.left = left + 'px';
  popup.style.top = top + 'px';
  popup.style.display = 'flex';
});
// Hide on scroll or click away
document.addEventListener('scroll', function() {
  const popup = document.getElementById('highlighter-popup');
  if (popup) popup.style.display = 'none';
}, true);
document.addEventListener('mousedown', function(e) {
  const popup = document.getElementById('highlighter-popup');
  if (!popup || popup.style.display === 'none') return;
  if (popup.contains(e.target)) return;
  popup.style.display = 'none';
});

function applyHighlight(color) {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return;
  const text = sel.toString().trim();
  if (!text) return;
  const range = sel.getRangeAt(0);
  let node = range.commonAncestorContainer;
  if (node.nodeType === 3) node = node.parentElement;
  const pageEl = node.closest('.page');
  if (!pageEl) return;
  const pageId = pageEl.id;
  // Wrap selection using execCommand for simplicity (handles cross-element selections)
  try {
    const mark = document.createElement('mark');
    mark.className = 'user-hl';
    mark.style.background = color;
    mark.dataset.hlColor = color;
    mark.dataset.hlText = text;
    range.surroundContents(mark);
    // Click to remove
    mark.onclick = function(ev) {
      ev.stopPropagation();
      if (!confirm('حذف هذا الهايلايت؟')) return;
      const parent = mark.parentNode;
      while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
      parent.removeChild(mark);
      parent.normalize();
      // Remove from storage
      const list = getPageHighlights(pageId);
      const idx = list.findIndex(function(h){ return h.text === text && h.color === color; });
      if (idx !== -1) { list.splice(idx, 1); savePageHighlights(pageId, list); }
    };
    // Save to localStorage
    const list = getPageHighlights(pageId);
    list.push({ text: text, color: color, ts: Date.now() });
    savePageHighlights(pageId, list);
  } catch (e) {
    // surroundContents fails if range crosses element boundaries — fall back
    alert('حدد النص داخل فقرة واحدة لحفظ الهايلايت');
  }
  document.getElementById('highlighter-popup').style.display = 'none';
  sel.removeAllRanges();
}

function removeHighlight() {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return;
  let node = sel.getRangeAt(0).commonAncestorContainer;
  if (node.nodeType === 3) node = node.parentElement;
  const mark = node.closest && node.closest('mark.user-hl');
  if (mark) { mark.click(); } else {
    alert('حدد نص مُهايلت لحذفه');
  }
  document.getElementById('highlighter-popup').style.display = 'none';
}

// Restore highlights when showing a chapter page
function restoreHighlights(pageId) {
  const pageEl = document.getElementById(pageId);
  if (!pageEl) return;
  const list = getPageHighlights(pageId);
  if (!list.length) return;
  // Skip if already restored
  if (pageEl.dataset.hlRestored === '1') return;
  pageEl.dataset.hlRestored = '1';
  list.forEach(function(hl) {
    try { highlightTextInElement(pageEl, hl.text, hl.color); } catch (e) {}
  });
}
function highlightTextInElement(root, text, color) {
  if (!text || text.length < 2) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: function(node) {
      if (node.parentElement && node.parentElement.closest('mark.user-hl, script, style')) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.indexOf(text) !== -1 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  const nodes = [];
  let n;
  while ((n = walker.nextNode())) nodes.push(n);
  nodes.forEach(function(node) {
    const idx = node.nodeValue.indexOf(text);
    if (idx === -1) return;
    const range = document.createRange();
    range.setStart(node, idx);
    range.setEnd(node, idx + text.length);
    const mark = document.createElement('mark');
    mark.className = 'user-hl';
    mark.style.background = color;
    mark.dataset.hlColor = color;
    mark.dataset.hlText = text;
    try {
      range.surroundContents(mark);
      const pageEl = mark.closest('.page');
      const pageId = pageEl && pageEl.id;
      mark.onclick = function(ev) {
        ev.stopPropagation();
        if (!confirm('حذف هذا الهايلايت؟')) return;
        const parent = mark.parentNode;
        while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
        parent.removeChild(mark);
        parent.normalize();
        if (pageId) {
          const list = getPageHighlights(pageId);
          const i = list.findIndex(function(h){ return h.text === text && h.color === color; });
          if (i !== -1) { list.splice(i, 1); savePageHighlights(pageId, list); }
        }
      };
    } catch (e) {}
  });
}

// ═══════════════════════════════════════════════
//  BOOKMARKS (Starred Questions)
// ═══════════════════════════════════════════════
const BOOKMARK_KEY = 'bus214_bookmarks';
function getBookmarks() {
  try { return JSON.parse(localStorage.getItem(BOOKMARK_KEY) || '[]'); }
  catch (e) { return []; }
}
function isBookmarked(qText) {
  if (!qText) return false;
  return getBookmarks().indexOf(qText) !== -1;
}
function toggleBookmark(qText) {
  if (!qText) return false;
  const list = getBookmarks();
  const idx = list.indexOf(qText);
  if (idx === -1) list.push(qText);
  else list.splice(idx, 1);
  try { localStorage.setItem(BOOKMARK_KEY, JSON.stringify(list)); } catch (e) {}
  return idx === -1; // true if just added
}
function tbToggleBookmark(btn) {
  const q = tbState.questions[tbState.current];
  if (!q) return;
  const added = toggleBookmark(q.q);
  btn.innerHTML = added ? '🔖' : '🏷️';
  btn.title = added ? 'تمت الإضافة للإشارات' : 'اضغط للحفظ في الإشارات';
  btn.style.background = added ? 'var(--cta-soft,#FEF3C7)' : 'transparent';
  btn.style.borderColor = added ? 'var(--cta,#F59E0B)' : 'var(--line)';
  if (typeof showXPToast === 'function' && added) showXPToast('🔖 تم الحفظ');
}

// Navigate to a specific <h3> section within a chapter page
function goToTopic(pageId, h3Idx) {
  if (typeof showPage === 'function') showPage(pageId);
  setTimeout(function() {
    var page = document.getElementById(pageId);
    if (!page) return;
    var h3s = page.querySelectorAll('h3');
    var target = h3s[h3Idx || 0];
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Flash highlight
    var prev = target.style.background;
    target.style.transition = 'background .4s';
    target.style.background = 'var(--cta-soft, #FEF3C7)';
    setTimeout(function(){ target.style.background = prev || ''; }, 1600);
  }, 120);
}

// ═══════════════════════════════════════════════
//  TEST BANK QUIZ
// ═══════════════════════════════════════════════
let tbState = { questions: [], current: 0, correct: 0, wrong: 0, answered: false, wrongList: [] };
const TB_RESUME_KEY = 'bus214_tb_resume';

// Allow Past Exams (and other future flows) to reuse this machinery
// by routing render output to a different area + setup IDs.
function _tbAreaId()  { return tbState._areaId  || 'tb-quiz-area'; }
function _tbChId()    { return tbState._chId    || 'tb-setup-chapters'; }
function _tbSetId()   { return tbState._setId   || 'tb-setup-settings'; }

function tbSaveProgress() {
  if (!tbState.questions.length) return;
  try {
    localStorage.setItem(TB_RESUME_KEY, JSON.stringify({
      current: tbState.current,
      correct: tbState.correct,
      wrong: tbState.wrong,
      questions: tbState.questions.map(q => ({ ...q, _tbDisp: undefined })),
      wrongList: tbState.wrongList.map(w => ({ qIdx: w.q.q, chosen: w.chosen })),
      savedAt: Date.now()
    }));
  } catch(e) {}
}

function tbClearResume() {
  localStorage.removeItem(TB_RESUME_KEY);
}

function tbGetResume() {
  try {
    const r = JSON.parse(localStorage.getItem(TB_RESUME_KEY) || 'null');
    if (!r) return null;
    // Expire after 7 days
    if (Date.now() - r.savedAt > 604800000) { tbClearResume(); return null; }
    return r;
  } catch(e) { return null; }
}

function startTestBank(ch) {
  const selectedCh = ch || window._tbSelectedCh || 'all';
  const count = parseInt(document.getElementById('tb-count')?.value || '20');
  let pool = selectedCh === 'all' ? [...testBankQ] : testBankQ.filter(q => q.ch === selectedCh);
  pool = pool.sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));
  // Clear previous shuffle cache so options re-shuffle each new session
  pool.forEach(q => delete q._tbDisp);
  tbState = { questions: pool, current: 0, correct: 0, wrong: 0, answered: false, wrongList: [] };
  tbClearResume();
  // Hide setup sections
  const chSec = document.getElementById(_tbChId());
  const setSec = document.getElementById(_tbSetId());
  if (chSec) chSec.style.display = 'none';
  if (setSec) setSec.style.display = 'none';
  renderTBQuestion();
  // Scroll to quiz area
  const area = document.getElementById(_tbAreaId());
  if (area) area.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function tbResumeSession() {
  const r = tbGetResume();
  if (!r) return;
  tbState = { questions: r.questions, current: r.current, correct: r.correct, wrong: r.wrong, answered: false, wrongList: [] };
  const chSec = document.getElementById(_tbChId());
  const setSec = document.getElementById(_tbSetId());
  if (chSec) chSec.style.display = 'none';
  if (setSec) setSec.style.display = 'none';
  renderTBQuestion();
  const area = document.getElementById(_tbAreaId());
  if (area) area.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function tbShowSetup() {
  const chSec = document.getElementById(_tbChId());
  const setSec = document.getElementById(_tbSetId());
  if (chSec) chSec.style.display = '';
  if (setSec) setSec.style.display = '';
  const area = document.getElementById(_tbAreaId());
  if (area) {
    // Show resume banner if there's a saved session
    const r = tbGetResume();
    if (r && r.current > 0 && r.current < r.questions.length) {
      const pct = Math.round(r.current / r.questions.length * 100);
      area.innerHTML = `<div style="background:var(--accent-soft,#CCFBF1);border:1.5px solid var(--accent);border-radius:14px;padding:16px 20px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="font-weight:700;color:var(--accent);font-size:.95rem;">🔖 جلسة سابقة محفوظة</div>
          <div style="font-size:.82rem;color:var(--muted);margin-top:3px;">سؤال ${r.current} من ${r.questions.length} (${pct}% اكتمل)</div>
        </div>
        <button onclick="tbResumeSession()" style="background:var(--accent);color:#fff;border:none;padding:10px 22px;border-radius:10px;font-weight:700;font-size:.88rem;cursor:pointer;font-family:inherit;">استئناف ←</button>
      </div>`;
    } else {
      area.innerHTML = '';
    }
  }
}

function renderTBQuestion() {
  const area = document.getElementById(_tbAreaId());
  if (!area) return;
  if (tbState.current >= tbState.questions.length) {
    tbClearResume(); // Session complete — clear saved progress
    const pct = Math.round((tbState.correct / tbState.questions.length) * 100);
    const badge = pct >= 90 ? '🏆' : pct >= 75 ? '🥇' : pct >= 60 ? '🥈' : '📚';
    // Save to dashboard stats
    totalQuizzes++;
    totalCorrect += tbState.correct;
    totalWrong += tbState.wrong;
    localStorage.setItem('bus214_totalQuizzes', totalQuizzes);
    localStorage.setItem('bus214_totalCorrect', totalCorrect);
    localStorage.setItem('bus214_totalWrong', totalWrong);
    if (typeof updateStreak === 'function') updateStreak();
    // Confetti + sound for high scores
    if (pct >= 80 && window.launchConfetti) launchConfetti();
    if (window.SFX) SFX.play('complete');
    // Build wrong review HTML
    const hasWrong = tbState.wrongList.length > 0;
    const letters = ['A','B','C','D','E'];
    let wrongReviewHtml = '';
    if (hasWrong) {
      const wrongsForBreakdown = tbState.wrongList.map(w => ({ ch: w.q.ch }));
      const chapterBreakdownHtml = (typeof renderChapterBreakdown === 'function')
        ? renderChapterBreakdown(wrongsForBreakdown) : '';
      wrongReviewHtml = chapterBreakdownHtml + `
        <div id="tb-wrong-review-wrap" style="margin-top:18px;">
          <button onclick="(function(){var el=document.getElementById('tb-wrong-review');if(el.style.display==='none'){el.style.display='block';this.textContent='▲ إخفاء الأسئلة الغلط'}else{el.style.display='none';this.textContent='📋 عرض الأسئلة الغلط ↓'}}).call(this)"
            style="width:100%;padding:12px 20px;border-radius:12px;border:1.5px solid #F59E0B;background:#FFFBEB;color:#92400E;font-weight:700;font-size:.9rem;cursor:pointer;font-family:inherit;margin-bottom:8px;">
            📋 عرض الأسئلة الغلط ↓ (${tbState.wrongList.length})
          </button>
          <div id="tb-wrong-review" style="display:none;">
            ${tbState.wrongList.map((w, wi) => {
              const chPage = w.q.topicPage || { ch1:'page-ch1', ch2:'page-ch2', ch3:'page-ch3' }[w.q.ch];
              const hasTopic = typeof w.q.topicIdx === 'number';
              const slideLink = chPage
                ? `<a href="#" onclick="${hasTopic ? `goToTopic('${chPage}',${w.q.topicIdx})` : `showPage('${chPage}')`};return false;" style="display:inline-block;margin-inline-start:8px;font-size:.72rem;background:var(--accent-soft);color:var(--accent);padding:4px 10px;border-radius:8px;font-weight:700;text-decoration:none;">📖 راجع الموضوع</a>`
                : '';
              return `
              <div style="background:var(--paper);border:1.5px solid var(--line);border-radius:16px;padding:18px;margin-bottom:12px;text-align:right;">
                <div style="font-size:.72rem;font-weight:700;color:var(--accent);margin-bottom:8px;">${(window.CH_LABELS && window.CH_LABELS.short && window.CH_LABELS.short[w.q.ch]) || w.q.ch.toUpperCase()}${slideLink}</div>
                <div style="font-weight:700;font-size:.95rem;color:var(--ink);margin-bottom:14px;line-height:1.6;">${w.q.q}</div>
                ${(w.q._tbDisp ? w.q._tbDisp.opts : w.q.opts).map((opt, oi) => {
                  const origIdx = w.q._tbDisp ? w.q._tbDisp.indices[oi] : oi;
                  const isCorrect = origIdx === w.q.ans;
                  const isChosen = w.chosen !== null && (w.q._tbDisp ? w.q._tbDisp.indices[w.chosen] : w.chosen) === origIdx;
                  let bg = 'var(--paper)', border = 'var(--line)', color = 'var(--ink)', extra = '';
                  if (isCorrect) { bg = '#e6f7ed'; border = 'var(--good)'; color = '#059669'; extra = ' ✓'; }
                  else if (isChosen) { bg = '#fdf2f2'; border = '#DC2626'; color = '#DC2626'; extra = ' ✗'; }
                  return `<div style="display:flex;gap:10px;padding:10px 14px;border-radius:10px;border:1.5px solid ${border};background:${bg};color:${color};font-size:.88rem;margin-bottom:6px;font-weight:${isCorrect ? '700' : '400'};line-height:1.5;">
                    <span style="font-weight:800;min-width:22px;">${letters[oi]}${extra}</span>
                    <span>${opt}</span>
                  </div>`;
                }).join('')}
              </div>`;
            }).join('')}
          </div>
        </div>`;
    }
    area.innerHTML = `
      <div class="chapter" style="text-align:center;padding:36px 24px;animation:pageFadeSlide .3s ease both;">
        <div style="width:80px;height:80px;border-radius:50%;background:${pct >= 80 ? 'linear-gradient(135deg,#059669,#34D399)' : pct >= 60 ? 'linear-gradient(135deg,#F59E0B,#FBBF24)' : 'linear-gradient(135deg,#DC2626,#F87171)'};display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:2.2rem;">${badge}</div>
        <div style="font-size:3rem;font-weight:900;color:var(--accent);line-height:1;">${pct}%</div>
        <div style="font-size:.95rem;font-weight:700;color:${pct >= 60 ? 'var(--good)' : 'var(--destructive, #DC2626)'};margin-top:6px;">${pct >= 80 ? 'ممتاز!' : pct >= 60 ? 'جيد!' : 'تحتاج مراجعة'}</div>
        <div style="display:flex;justify-content:center;gap:24px;margin:24px 0;">
          <div style="background:rgba(5,150,105,0.08);border-radius:14px;padding:14px 24px;">
            <div style="font-size:1.8rem;font-weight:900;color:var(--good);">${tbState.correct}</div>
            <div style="font-size:.78rem;color:var(--muted);font-weight:600;">صح</div>
          </div>
          <div style="background:rgba(220,38,38,0.08);border-radius:14px;padding:14px 24px;">
            <div style="font-size:1.8rem;font-weight:900;color:var(--destructive, #DC2626);">${tbState.wrong}</div>
            <div style="font-size:.78rem;color:var(--muted);font-weight:600;">غلط</div>
          </div>
          <div style="background:var(--accent-soft);border-radius:14px;padding:14px 24px;">
            <div style="font-size:1.8rem;font-weight:900;color:var(--accent);">${tbState.questions.length}</div>
            <div style="font-size:.78rem;color:var(--muted);font-weight:600;">إجمالي</div>
          </div>
        </div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
          <button onclick="tbShowSetup()" style="padding:12px 28px;border-radius:12px;border:none;background:var(--accent);color:#fff;font-weight:700;font-size:.9rem;cursor:pointer;font-family:inherit;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-left:6px"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg> حاول مرة ثانية</button>
          <button onclick="tbShowSetup();showPage('page-home')" style="padding:12px 28px;border-radius:12px;border:1.5px solid var(--line);background:var(--paper);color:var(--ink);font-weight:700;font-size:.9rem;cursor:pointer;font-family:inherit;">الرئيسية</button>
        </div>
        ${wrongReviewHtml}
      </div>`;
    return;
  }
  const q = tbState.questions[tbState.current];
  const ci = tbState.current + 1;
  const total = tbState.questions.length;
  tbState.answered = false;
  window._tbPendingAnswer = null;

  // ── Shuffle options (skip T/F) ──
  const isTF = q.opts.length === 2 && (q.opts[0] === 'True' || q.opts[0] === 'صح');
  if (!q._tbDisp) {
    if (isTF) {
      q._tbDisp = { opts: q.opts, ans: q.ans, indices: q.opts.map((_, i) => i) };
    } else {
      const idx = q.opts.map((_, i) => i);
      for (let k = idx.length - 1; k > 0; k--) {
        const j = Math.floor(Math.random() * (k + 1));
        [idx[k], idx[j]] = [idx[j], idx[k]];
      }
      q._tbDisp = { opts: idx.map(i => q.opts[i]), ans: idx.indexOf(q.ans), indices: idx };
    }
  }
  const dispOpts = q._tbDisp.opts;
  const dispAns  = q._tbDisp.ans;

  const letters = ['A','B','C','D','E'];
  const optsHtml = dispOpts.map((opt, i) => {
    if (isTF) {
      const icon = opt === 'True' || opt === 'صح'
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
      const color = opt === 'True' || opt === 'صح' ? 'var(--good)' : 'var(--destructive, #DC2626)';
      return `<button class="quiz-mcq-btn" onclick="handleTBAnswer(${i})" style="display:flex;align-items:center;gap:12px;flex:1;justify-content:center;padding:16px 20px;border-radius:14px;border:1.5px solid var(--line);background:var(--paper);color:var(--ink);font-size:1rem;font-weight:700;cursor:pointer;transition:all .2s;font-family:inherit;">
        <span style="color:${color}">${icon}</span>
        <span>${opt === 'True' ? 'صح (True)' : 'خطأ (False)'}</span>
      </button>`;
    }
    return `<button class="quiz-mcq-btn" onclick="handleTBAnswer(${i})" style="display:flex;align-items:flex-start;gap:12px;width:100%;text-align:left;padding:14px 18px;border-radius:14px;border:1.5px solid var(--line);background:var(--paper);color:var(--ink);font-size:.92rem;font-weight:500;cursor:pointer;transition:all .2s;font-family:inherit;line-height:1.6;">
      <span style="background:var(--accent-soft);color:var(--accent);font-weight:800;font-size:.8rem;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:8px;flex-shrink:0;">${letters[i]}</span>
      <span>${opt}</span>
    </button>`;
  }).join('');
  const retryBadge = q._isRetry ? '<span style="font-size:.72rem;font-weight:700;color:#fff;background:#F59E0B;padding:4px 10px;border-radius:8px;">🔄 إعادة</span>' : '';
  const bookmarked = isBookmarked(q.q);
  const bmIcon = bookmarked ? '🔖' : '🏷️';
  const bmTitle = bookmarked ? 'تمت الإضافة للإشارات (اضغط لإزالتها)' : 'اضغط للحفظ في الإشارات';
  const bmStyle = bookmarked
    ? 'background:var(--cta-soft,#FEF3C7);border-color:var(--cta,#F59E0B);'
    : 'background:transparent;border-color:var(--line);';
  area.innerHTML = `
    <div class="chapter" style="margin-bottom:0;padding:24px;animation:pageFadeSlide .3s ease both;${q._isRetry ? 'border:2px solid #F59E0B;' : ''}">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="font-size:.9rem;font-weight:800;color:var(--accent);">سؤال ${ci} <span style="font-weight:400;color:var(--muted);">/ ${total}</span></span>
        <div style="display:flex;gap:6px;align-items:center;">
          <button onclick="tbToggleBookmark(this)" title="${bmTitle}" style="${bmStyle}border:1.5px solid;padding:4px 10px;border-radius:8px;cursor:pointer;font-size:.9rem;line-height:1;transition:all .15s;">${bmIcon}</button>
          ${retryBadge}
          ${isTF ? '<span style="font-size:.72rem;font-weight:700;color:var(--cta,#F59E0B);background:var(--cta-soft,#FEF3C7);padding:4px 10px;border-radius:8px;">T/F</span>' : ''}
          <span style="font-size:.72rem;font-weight:700;color:#fff;background:var(--accent);padding:4px 12px;border-radius:8px;letter-spacing:.03em;">${(window.CH_LABELS && window.CH_LABELS.short && window.CH_LABELS.short[q.ch]) || q.ch.toUpperCase()}</span>
        </div>
      </div>
      <div style="width:100%;height:5px;background:var(--line);border-radius:99px;margin-bottom:20px;overflow:hidden;">
        <div style="width:${Math.round(ci/total*100)}%;height:100%;background:linear-gradient(90deg,var(--accent),#60A5FA);border-radius:99px;transition:width .4s cubic-bezier(.4,0,.2,1);"></div>
      </div>
      <div style="font-size:1.05rem;font-weight:600;line-height:1.75;margin-bottom:20px;color:var(--ink);">${q.q}</div>
      <div id="tb-opts" style="display:flex;${isTF ? 'flex-direction:row;' : 'flex-direction:column;'}gap:${isTF ? '12px' : '8px'};">${optsHtml}</div>
      <div id="tb-feedback" style="margin-top:14px;font-weight:700;min-height:24px;font-size:.95rem;"></div>
      <div style="display:flex;gap:10px;margin-top:16px;">
        <button id="tb-next-btn" onclick="tbState.current++;renderTBQuestion();setTimeout(()=>{const a=document.getElementById(_tbAreaId());if(a)a.scrollIntoView({behavior:'smooth',block:'start'});},80);" style="display:none;background:var(--accent);color:#fff;border:none;padding:12px 32px;border-radius:12px;font-weight:700;font-size:.9rem;cursor:pointer;font-family:inherit;transition:all .15s;">${ci === total ? 'عرض النتيجة' : 'التالي ←'}</button>
      </div>
    </div>`;
}

function handleTBAnswer(chosen) {
  if (tbState.answered) return;
  tbState.answered = true;
  const q = tbState.questions[tbState.current];
  // Map display index → original index via _tbDisp
  const dispAns = q._tbDisp ? q._tbDisp.ans : q.ans;
  const isCorrect = chosen === dispAns;
  if (isCorrect) tbState.correct++; else tbState.wrong++;
  const examMode = window._tbExamMode === true;
  const btns = document.querySelectorAll('#tb-opts .quiz-mcq-btn');
  const isDark = document.body.classList.contains('dark');
  btns.forEach((btn, i) => {
    btn.style.pointerEvents = 'none';
    if (examMode) {
      // Exam mode: just mark the chosen answer, don't reveal correct
      if (i === chosen) {
        btn.style.background = isDark ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.08)';
        btn.style.borderColor = 'var(--accent)';
        btn.style.fontWeight = '700';
      }
      return;
    }
    if (i === dispAns) {
      btn.style.background = isDark ? 'rgba(5,150,105,0.15)' : '#e6f7ed';
      btn.style.borderColor = 'var(--good)';
      btn.style.color = isDark ? '#34D399' : '#059669';
      btn.style.fontWeight = '800';
    } else if (i === chosen && !isCorrect) {
      btn.style.background = isDark ? 'rgba(220,38,38,0.12)' : '#fdf2f2';
      btn.style.borderColor = isDark ? '#F87171' : '#DC2626';
      btn.style.color = isDark ? '#F87171' : '#DC2626';
      btn.style.textDecoration = 'line-through';
    }
  });
  const fb = document.getElementById('tb-feedback');
  // ── Save wrong for review (even in exam mode so it's tracked) ──
  if (!isCorrect) {
    tbState.wrongList.push({ q, chosen });
    if (typeof saveWrongAnswer === 'function') saveWrongAnswer(q, chosen);
    // Re-queue in retry mode, but NOT in exam mode (exam stays linear)
    if (!examMode && window._tbRetryEnabled !== false && (q._retryCount || 0) < 1) {
      const retryQ = Object.assign({}, q, { _isRetry: true, _retryCount: (q._retryCount || 0) + 1 });
      delete retryQ._tbDisp;
      const insertAt = Math.min(tbState.current + 4, tbState.questions.length);
      tbState.questions.splice(insertAt, 0, retryQ);
    }
  }
  // Helper: render feedback with proper bilingual + RTL handling
  const renderTBFeedback = (headerText, exp, borderColor, isOk) => {
    fb.textContent = '';
    const header = document.createElement('div');
    header.style.cssText = 'margin-bottom:6px;';
    header.textContent = headerText;
    fb.appendChild(header);
    if (!exp) return;
    const rawExp = Array.isArray(exp) ? exp[q.ans] : String(exp);
    if (!rawExp) return;
    // Extract Arabic + English parts
    const arMatch = rawExp.match(/dir=['"]rtl['"][^>]*>([^<]+)/);
    const arText = arMatch
      ? arMatch[1].replace(/^[✅❌]\s*(صح\s*—?\s*|Correct\.?\s*)/i, '').trim()
      : (/[\u0600-\u06FF]/.test(rawExp) && !/<span/.test(rawExp)
          ? rawExp.replace(/^[✅❌]\s*/u, '').trim()
          : '');
    const enText = rawExp.split('<br>')[0]
      .replace(/<[^>]+>/g, '')
      .replace(/^[✅❌]\s*(Correct\.?\s*|صح\s*—?\s*)/i, '')
      .trim();
    const cleanEn = /[\u0600-\u06FF]/.test(enText) ? '' : enText;
    if (!cleanEn && !arText) return;
    const box = document.createElement('div');
    box.style.cssText = 'font-size:.85rem;font-weight:400;color:var(--ink);background:var(--paper);border:1px solid ' + borderColor + ';border-radius:10px;padding:10px 14px;margin-top:6px;line-height:1.7;';
    if (cleanEn) {
      const enDiv = document.createElement('div');
      enDiv.setAttribute('dir', 'ltr');
      enDiv.setAttribute('lang', 'en');
      enDiv.style.cssText = 'text-align:left;direction:ltr;unicode-bidi:isolate;' + (arText ? 'margin-bottom:8px;padding-bottom:8px;border-bottom:1px dashed var(--line);' : '');
      enDiv.textContent = enText;
      box.appendChild(enDiv);
    }
    if (arText) {
      const arDiv = document.createElement('div');
      arDiv.setAttribute('dir', 'rtl');
      arDiv.setAttribute('lang', 'ar');
      arDiv.style.cssText = 'text-align:right;direction:rtl;unicode-bidi:isolate;';
      arDiv.textContent = arText;
      box.appendChild(arDiv);
    }
    fb.appendChild(box);
  };
  if (examMode) {
    fb.textContent = '';
    const msg = document.createElement('div');
    msg.style.cssText = 'color:var(--muted);font-size:.82rem;font-weight:500;';
    msg.textContent = 'تم التسجيل — تابع للسؤال التالي';
    fb.appendChild(msg);
    fb.style.color = 'var(--muted)';
  } else if (!isCorrect) {
    const correctLetter = ['A','B','C','D','E'][dispAns];
    renderTBFeedback('❌ الإجابة الصحيحة: ' + correctLetter, q.exp, 'var(--line)', false);
    fb.style.color = 'var(--destructive, #DC2626)';
  } else {
    const okText = q._isRetry ? '✅ صح! أحسنت — تذكرتها 💪' : '✅ صح!';
    renderTBFeedback(okText, q._isRetry ? null : q.exp, '#d1fae5', true);
    fb.style.color = 'var(--good)';
  }
  if (window.SFX) SFX.play(isCorrect ? 'correct' : 'wrong');
  // Update next button text dynamically (total may have grown)
  const nextBtn = document.getElementById('tb-next-btn');
  nextBtn.style.display = 'inline-block';
  const remaining = tbState.questions.length - tbState.current - 1;
  nextBtn.textContent = remaining === 0 ? 'عرض النتيجة' : 'التالي ←';
  // Scroll to show feedback + next button
  setTimeout(() => nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
  // Save progress for resume
  tbSaveProgress();
  if (typeof updateCombo === 'function') {
    const combo = updateCombo(isCorrect);
    const multiplier = getComboMultiplier(combo);
    if (isCorrect) awardXP(10, multiplier);
    showQuizEncouragement(isCorrect);
  }
}

// System B Pomodoro removed — using System A (pomoToggle/pomoSetMode/pomoReset above)

// ══════════════════════════════════════════════
//  WRONG ANSWER REVIEW
// ══════════════════════════════════════════════
function saveWrongAnswer(q, chosen) {
  const wrongs = JSON.parse(localStorage.getItem('bus214_wrongAnswers') || '[]');
  wrongs.push({
    question: q.q,
    opts: q.opts,
    correct: q.ans,
    chosen: chosen,
    ch: q.ch,
    exp: q.exp || '',
    date: new Date().toISOString()
  });
  // Keep only last 100
  if (wrongs.length > 100) wrongs.splice(0, wrongs.length - 100);
  localStorage.setItem('bus214_wrongAnswers', JSON.stringify(wrongs));
}

function renderChapterBreakdown(wrongs) {
  // Count wrongs per chapter
  const chCounts = {};
  wrongs.forEach(function(w){
    const ch = (w.ch || '').toString().toLowerCase();
    chCounts[ch] = (chCounts[ch] || 0) + 1;
  });
  const isMid2 = document.body.dataset && document.body.dataset.mid === '2';
  const chList = isMid2 ? ['ch1', 'ch2', 'ch3'] : ['ch1', 'ch2', 'ch3'];
  const chLabels = isMid2
    ? { ch1: 'Ch 5 — Ethical Issues', ch2: 'Ch 6 — Framework', ch3: 'Ch 7 — Moral Philosophy' }
    : { ch1: 'Ch 1 — Ethics', ch2: 'Ch 2 — Stakeholders', ch3: 'Ch 3 — Sustainability' };
  const chPages = { ch1: 'page-ch1', ch2: 'page-ch2', ch3: 'page-ch3' };
  const maxCount = Math.max(1, ...Object.values(chCounts));
  let html = '<div style="background:var(--bg);border:1.5px solid var(--line);border-radius:14px;padding:16px;margin-bottom:16px;">';
  html += '<div style="font-weight:700;font-size:.92rem;margin-bottom:12px;">📊 الفصول اللي تحتاج تركيز</div>';
  chList.forEach(function(ch) {
    const n = chCounts[ch] || 0;
    const pct = Math.round((n / maxCount) * 100);
    const barColor = n === 0 ? 'var(--good)' : n > maxCount * 0.6 ? 'var(--destructive,#DC2626)' : 'var(--cta,#F59E0B)';
    const slideLink = n > 0 && chPages[ch]
      ? ' <a href="#" onclick="showPage(\'' + chPages[ch] + '\');return false;" style="margin-inline-start:8px;font-size:.72rem;background:var(--accent-soft);color:var(--accent);padding:3px 8px;border-radius:8px;font-weight:700;text-decoration:none;white-space:nowrap;">📖 افتح الملخص</a>'
      : '';
    html += '<div style="margin-bottom:10px;">'
      + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;font-size:.82rem;gap:8px;flex-wrap:wrap;">'
      + '<span style="font-weight:600;">' + (chLabels[ch] || ch) + slideLink + '</span>'
      + '<span style="color:var(--muted);font-weight:700;">' + n + ' خطأ</span></div>'
      + '<div style="height:8px;background:var(--line);border-radius:99px;overflow:hidden;">'
      + '<div style="height:100%;width:' + pct + '%;background:' + barColor + ';border-radius:99px;transition:width .4s;"></div></div></div>';
  });
  html += '</div>';
  return html;
}

function renderWrongReview() {
  const container = document.getElementById('wrong-review-list');
  if (!container) return;
  const wrongs = JSON.parse(localStorage.getItem('bus214_wrongAnswers') || '[]');
  if (wrongs.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:40px 20px;color:var(--muted);"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity:.4;margin-bottom:12px"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/></svg><p style="font-weight:600;">ما فيه أخطاء! ممتاز</p></div>';
    return;
  }
  const letters = ['A','B','C','D','E'];
  let html = renderChapterBreakdown(wrongs);
  html += '<div style="font-size:.85rem;color:var(--muted);margin-bottom:16px;">عدد الأخطاء: <strong>' + wrongs.length + '</strong></div>';
  wrongs.slice().reverse().forEach((w, i) => {
    html += '<div class="wrong-review-card" style="background:var(--bg);border:1.5px solid var(--line);border-radius:14px;padding:16px;margin-bottom:12px;">';
    html += '<div style="font-size:.72rem;color:var(--muted);margin-bottom:6px;">Ch ' + w.ch + ' · ' + new Date(w.date).toLocaleDateString('ar-SA') + '</div>';
    html += '<div style="font-weight:700;margin-bottom:10px;line-height:1.6;">' + w.question + '</div>';
    w.opts.forEach((opt, j) => {
      const isCorrect = j === w.correct;
      const isChosen = j === w.chosen;
      let style = 'padding:8px 12px;border-radius:8px;margin-bottom:4px;font-size:.88rem;';
      if (isCorrect) style += 'background:rgba(5,150,105,0.12);border:1px solid rgba(5,150,105,0.3);color:var(--good);font-weight:700;';
      else if (isChosen) style += 'background:rgba(220,38,38,0.08);border:1px solid rgba(220,38,38,0.2);color:var(--destructive,#DC2626);text-decoration:line-through;';
      else style += 'color:var(--muted);';
      html += '<div style="' + style + '">' + letters[j] + '. ' + opt + (isCorrect ? ' ✓' : '') + '</div>';
    });
    if (w.exp) {
      // exp can be an array (per-option) or a plain string
      let expText = '';
      if (Array.isArray(w.exp)) {
        // Show only the correct answer's explanation, strip emoji prefixes
        expText = (w.exp[w.correct] || '').replace(/^[✅❌⚠️]\s*/u, '').trim();
      } else {
        expText = String(w.exp).replace(/^[✅❌⚠️]\s*/u, '').trim();
      }
      if (expText) {
        html += '<div style="margin-top:10px;padding:10px 14px;background:var(--accent-soft);border-radius:10px;font-size:.84rem;line-height:1.6;">'
          + '<span style="font-weight:700;color:var(--accent);">💡 لماذا؟ </span>'
          + '<span style="color:var(--ink);">' + expText + '</span>'
          + '</div>';
      }
    }
    html += '</div>';
  });
  container.innerHTML = html;
}

function clearWrongAnswers() {
  if (!confirm('مسح كل الإجابات الخاطئة المحفوظة؟')) return;
  localStorage.removeItem('bus214_wrongAnswers');
  renderWrongReview();
}

// ── BOOKMARKS REVIEW ──────────────────────────────
function renderBookmarks() {
  const container = document.getElementById('bookmarks-list');
  if (!container) return;
  const bookmarks = getBookmarks();
  if (bookmarks.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:40px 20px;color:var(--muted);"><div style="font-size:48px;opacity:.4;margin-bottom:12px;">🏷️</div><p style="font-weight:600;">ما حفظت أي سؤال بعد!</p><p style="font-size:.82rem;">اضغط على الأيقونة 🏷️ في أي سؤال لحفظه هنا</p></div>';
    return;
  }
  const letters = ['A','B','C','D','E'];
  const pool = (typeof testBankQ !== 'undefined' ? testBankQ : []).concat(typeof allQuizQ !== 'undefined' ? allQuizQ : []);
  let html = '<div style="font-size:.85rem;color:var(--muted);margin-bottom:16px;">عدد المحفوظات: <strong>' + bookmarks.length + '</strong></div>';
  bookmarks.slice().reverse().forEach(function(qText) {
    const q = pool.find(function(x){ return x.q === qText; });
    html += '<div style="background:var(--bg);border:1.5px solid var(--line);border-radius:14px;padding:16px;margin-bottom:12px;position:relative;">';
    html += '<button onclick="unbookmarkAndRefresh(\'' + qText.replace(/'/g, "\\'").substring(0,100) + '\')" style="position:absolute;top:10px;left:10px;background:transparent;border:1.5px solid var(--line);color:var(--muted);padding:4px 10px;border-radius:8px;cursor:pointer;font-size:.78rem;">حذف</button>';
    if (q) {
      html += '<div style="font-size:.72rem;color:var(--muted);margin-bottom:6px;">Ch ' + (q.ch || '?') + '</div>';
      html += '<div style="font-weight:700;margin-bottom:10px;line-height:1.6;padding-top:6px;">' + q.q + '</div>';
      (q.opts || []).forEach(function(opt, j) {
        const isCorrect = j === q.ans;
        let style = 'padding:8px 12px;border-radius:8px;margin-bottom:4px;font-size:.88rem;';
        if (isCorrect) style += 'background:rgba(5,150,105,0.12);border:1px solid rgba(5,150,105,0.3);color:var(--good);font-weight:700;';
        else style += 'color:var(--muted);';
        html += '<div style="' + style + '">' + letters[j] + '. ' + opt + (isCorrect ? ' ✓' : '') + '</div>';
      });
      if (q.exp) {
        let expText = Array.isArray(q.exp) ? (q.exp[q.ans] || '') : String(q.exp);
        expText = expText.replace(/^[✅❌⚠️]\s*/u, '').trim();
        if (expText) {
          html += '<div style="margin-top:10px;padding:10px 14px;background:var(--accent-soft);border-radius:10px;font-size:.84rem;line-height:1.6;">'
            + '<span style="font-weight:700;color:var(--accent);">💡 </span>'
            + '<span style="color:var(--ink);">' + expText + '</span></div>';
        }
      }
    } else {
      html += '<div style="font-weight:600;line-height:1.6;color:var(--muted);">' + qText + '</div>';
      html += '<div style="font-size:.78rem;color:var(--muted);margin-top:6px;">⚠️ لم يُعثر على السؤال في المجموعة الحالية</div>';
    }
    html += '</div>';
  });
  container.innerHTML = html;
}
function unbookmarkAndRefresh(qText) {
  toggleBookmark(qText);
  renderBookmarks();
}
function clearBookmarks() {
  if (!confirm('مسح كل الإشارات المحفوظة؟')) return;
  localStorage.removeItem(BOOKMARK_KEY);
  renderBookmarks();
}
function switchReviewTab(tab) {
  const wrongBtn = document.getElementById('rev-tab-wrong');
  const bmBtn = document.getElementById('rev-tab-bm');
  const wrongSec = document.getElementById('rev-wrong-section');
  const bmSec = document.getElementById('rev-bm-section');
  if (!wrongBtn || !bmBtn) return;
  if (tab === 'wrong') {
    wrongBtn.style.cssText = 'flex:1;padding:12px;border-radius:12px;border:1.5px solid var(--destructive,#DC2626);background:rgba(220,38,38,.08);color:var(--destructive,#DC2626);font-weight:700;font-size:.88rem;cursor:pointer;font-family:inherit;';
    bmBtn.style.cssText = 'flex:1;padding:12px;border-radius:12px;border:1.5px solid var(--line);background:var(--paper);color:var(--ink);font-weight:600;font-size:.88rem;cursor:pointer;font-family:inherit;';
    wrongSec.style.display = '';
    bmSec.style.display = 'none';
  } else {
    wrongBtn.style.cssText = 'flex:1;padding:12px;border-radius:12px;border:1.5px solid var(--line);background:var(--paper);color:var(--ink);font-weight:600;font-size:.88rem;cursor:pointer;font-family:inherit;';
    bmBtn.style.cssText = 'flex:1;padding:12px;border-radius:12px;border:1.5px solid var(--cta,#F59E0B);background:var(--cta-soft,#FEF3C7);color:var(--cta,#F59E0B);font-weight:700;font-size:.88rem;cursor:pointer;font-family:inherit;';
    wrongSec.style.display = 'none';
    bmSec.style.display = '';
    renderBookmarks();
  }
}

// ── QUIZ KEYBOARD SHORTCUTS ────────────────────────────────
document.addEventListener("keydown", function(e) {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.isContentEditable) return;
  const gameScreen = document.getElementById("quiz-game-screen");
  if (!gameScreen || gameScreen.classList.contains("quiz-screen-hidden")) return;
  const key = e.key.toLowerCase();
  const keyMap = { "a": 0, "1": 0, "b": 1, "2": 1, "c": 2, "3": 2, "d": 3, "4": 3, "e": 4, "5": 4 };
  if (key in keyMap && !quizAnswered) {
    e.preventDefault();
    const idx = keyMap[key];
    const btns = document.querySelectorAll("#quiz-opts .quiz-mcq-btn");
    if (btns[idx]) handleQuizAnswer(idx);
  } else if ((key === " " || key === "enter" || key === "arrowright") && quizAnswered) {
    e.preventDefault();
    clearTimeout(window._autoAdvTimer);
    const bar = document.getElementById("quiz-aa-bar");
    if (bar) { bar.style.display = "none"; bar.style.width = "100%"; }
    nextQuizQ();
  }
});
