export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { quest, date, time, phone, lang } = req.body || {};
  if (!quest || !date || !time || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'psychoquest.md@gmail.com';

  // --- Telegram ---
  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    const text = [
      `\u{1F3AD} *New Booking!*`,
      ``,
      `*Quest:* ${quest}`,
      `*Date:* ${date}`,
      `*Time:* ${time}`,
      `*Phone:* ${phone}`,
    ].join('\n');

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'Markdown',
        }),
      });
    } catch (e) {
      console.error('Telegram error:', e);
    }
  }

  // --- Email via Resend ---
  if (RESEND_API_KEY && NOTIFY_EMAIL) {
    const subject = `PSYCHO Booking: ${quest} - ${date} ${time}`;
    const html = `
      <div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto;background:#0a0a0a;color:#e5e5e5;border-radius:12px;overflow:hidden">
        <div style="background:#e53935;padding:24px;text-align:center">
          <h1 style="margin:0;color:#fff;font-size:22px">New Booking</h1>
        </div>
        <div style="padding:24px">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#999">Quest</td><td style="padding:8px 0;font-weight:bold">${quest}</td></tr>
            <tr><td style="padding:8px 0;color:#999">Date</td><td style="padding:8px 0;font-weight:bold">${date}</td></tr>
            <tr><td style="padding:8px 0;color:#999">Time</td><td style="padding:8px 0;font-weight:bold">${time}</td></tr>
            <tr><td style="padding:8px 0;color:#999">Phone</td><td style="padding:8px 0;font-weight:bold">${phone}</td></tr>
          </table>
        </div>
        <div style="padding:16px 24px;text-align:center;border-top:1px solid #222;color:#666;font-size:12px">
          PSYCHO Quest &amp; Horror Cinema
        </div>
      </div>
    `;

    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'PSYCHO Quest <onboarding@resend.dev>',
          to: [NOTIFY_EMAIL],
          subject,
          html,
        }),
      });
    } catch (e) {
      console.error('Email error:', e);
    }
  }

  return res.status(200).json({ success: true });
}
