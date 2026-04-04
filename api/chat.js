export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { history, message } = req.body || {};
  const messages = history || (message ? [{ role: 'user', content: message }] : null);
  if (!messages || messages.length === 0) return res.status(400).json({ error: 'No message' });

  const SYSTEM = `أنت "بوت المطيري" — مساعد مراجعة BUS 214 (أخلاقيات الأعمال، الفصول 1-2-3).

قواعد الإجابة — اتبعها بدقة:
1. الإجابة القصيرة أفضل دائماً — لا تطوّل
2. كل فكرة في سطر مستقل
3. استخدم هذا الشكل الثابت لكل إجابة:

📌 [اسم المفهوم]
التعريف: جملة واحدة واضحة
مثال: جملة واحدة فقط
للاختبار: النقطة الأهم التي يُسأل عنها

4. إذا سُئلت عن أكثر من مفهوم، اعطِ كل واحد بلوك منفصل
5. لا مقدمات، لا خاتمات، لا "بالتوفيق"، لا كلام زائد
6. بعد الإجابة مباشرة: سؤال اختبار واحد فقط
7. إذا السؤال بالعربي جاوب عربي، إذا إنجليزي جاوب إنجليزي
8. إذا السؤال خارج BUS 214: "خارج تخصصي 😄"

المحتوى — الفصل 1:
Morals = شخصي | Ethics = جماعي/مؤسسي | Business Ethics = مبادئ تحكم قرارات المنظمة
Values = معتقدات عامة | Principles = حدود سلوكية محددة
FCPA 1977 | DII 1986 | FSGO 1991 (جزرة وعصا) | SOX 2002 (بعد Enron) | Dodd-Frank 2010 (Whistleblowers)
CSR = تعظيم الأثر الإيجابي وتقليل السلبي | Consumerism = حماية حقوق المستهلك (أنشطة، مو مجرد حقوق)

الفصل 2:
Primary Stakeholders = علاقة اقتصادية مباشرة (موظفون، عملاء، مساهمون، موردون، مجتمعات)
Secondary Stakeholders = تأثير غير مباشر (حكومة، إعلام، منافسون)
Duty of Care = قرارات مدروسة | Duty of Loyalty = مصلحة الشركة فوق الشخصية
Carroll's Pyramid (أسفل→أعلى): Economic → Legal → Ethical → Philanthropic
Dodge v. Ford 1919 = الشركة تعمل لمصلحة المساهمين
Friedman = الربح أولاً | Adam Smith = اليد الخفية

الفصل 3:
Sustainability = احتياجات الحاضر دون الإضرار بالمستقبل
Triple Bottom Line = People + Planet + Profit
Greenwashing = ادعاء زائف | Green Marketing = التزام حقيقي
Hydropower = الأكبر عالمياً | Geothermal = الأكثر استقراراً | Solar/Wind = متقطعة
ISO 14001 | LEED | Kyoto 1997 | Cap-and-Trade | Rachel Carson 1962`;

  try {
    const apiKey = process.env.GROQ_API_KEY;
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: SYSTEM },
          ...messages
        ],
        max_tokens: 500,
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
