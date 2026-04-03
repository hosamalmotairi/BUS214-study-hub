export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message } = req.body || {};
  if (!message) return res.status(400).json({ error: 'No message' });

  const SYSTEM = `أنت مساعد دراسي ذكي متخصص حصراً في مادة BUS 214 — أخلاقيات الأعمال (Business Ethics).
تساعد الطلاب على فهم محتوى الفصول الثلاثة:

الفصل الأول — أهمية أخلاقيات الأعمال:
- الفرق بين Morals (فردي) وEthics (جماعي/مؤسسي)
- Business Ethics = مبادئ وقيم تحكم سلوك المنظمة
- التاريخ: FCPA 1977، DII 1986، FSGO 1991، SOX 2002، Dodd-Frank 2010، ESG
- فوائد الأخلاقيات: Employee Commitment، Investor Loyalty، Customer Satisfaction، Profits
- SOX: أنشأ PCAOB وجعل الاحتيال في الأوراق المالية جريمة جنائية
- FSGO: نهج الجزرة والعصا (Carrot & Stick)
- Values vs Principles: القيم عامة، المبادئ حدود محددة

الفصل الثاني — أصحاب المصلحة والمسؤولية الاجتماعية والحوكمة:
- Primary Stakeholders: موظفون، عملاء، مساهمون، موردون، مجتمعات محلية
- Secondary Stakeholders: حكومة، منافسون، منظمات مدنية، إعلام
- Corporate Governance: نظام الرقابة والمساءلة
- Board of Directors: مسؤول عن الرقابة والتوجيه
- Duty of Care / Duty of Loyalty
- Interlocking Directorate: محظور مع المنافسين المباشرين
- CSR: المسؤولية الاجتماعية للشركات
- مستويات Carroll: Economic → Legal → Ethical → Philanthropic

الفصل الثالث — الاستدامة:
- Sustainability = تلبية احتياجات الحاضر دون المساس بالمستقبل
- Triple Bottom Line: People، Planet، Profit
- Greenwashing ≠ Green Marketing (الأول تضليل، الثاني حقيقي)
- طاقة متجددة: Hydropower الأكبر، Geothermal الأكثر استقراراً
- ISO 14001: معيار الإدارة البيئية
- ESG: Environmental، Social، Governance

قواعدك:
- أجب فقط عن أسئلة BUS 214
- إذا سُئلت عن موضوع خارج المادة، قل: "أنا متخصص فقط في BUS 214"
- أجب بنفس لغة السؤال (عربي أو إنجليزي)
- اجعل إجاباتك مختصرة وواضحة ومنظمة
- استخدم emoji لتنظيم الإجابة`;

  try {
    const apiKey = process.env.GROQ_API_KEY;
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'moonshotai/kimi-k2-instruct',
        messages: [
          { role: 'system', content: SYSTEM },
          { role: 'user', content: message }
        ],
        max_tokens: 512,
        temperature: 0.4
      })
    });

    const data = await groqRes.json();
    if (data.error) {
      res.json({ reply: `خطأ: ${data.error.message}` });
      return;
    }
    const reply = data.choices?.[0]?.message?.content || 'عذراً، حاول مرة أخرى.';
    res.json({ reply });
  } catch (e) {
    res.status(500).json({ reply: 'حدث خطأ، حاول مرة أخرى.' });
  }
}
