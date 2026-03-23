function esc(str) {
  return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escMd(str) {
  return String(str || '').replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
}

export default async function handler(req, res) {
  // CORS: only allow same origin
  const origin = req.headers.origin || req.headers.referer || '';
  const allowed = ['https://psycho-phi.vercel.app', 'http://localhost'];
  if (!allowed.some(a => origin.startsWith(a))) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { quest, date, time, phone, lang } = req.body || {};
  if (!quest || !date || !time || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Sanitize inputs
  const safeQuest = String(quest).slice(0, 100);
  const safeDate = String(date).slice(0, 10);
  const safeTime = String(time).slice(0, 5);
  const safePhone = String(phone).slice(0, 20);

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'psychoquest.md@gmail.com';

  // --- Telegram ---
  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    const text = [
      `\u{1F3AD} *New Booking\\!*`,
      ``,
      `*Quest:* ${escMd(safeQuest)}`,
      `*Date:* ${escMd(safeDate)}`,
      `*Time:* ${escMd(safeTime)}`,
      `*Phone:* ${escMd(safePhone)}`,
    ].join('\n');

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'MarkdownV2',
        }),
      });
    } catch (e) {
      console.error('Telegram error:', e);
    }
  }

  // --- Email via Resend ---
  if (RESEND_API_KEY && NOTIFY_EMAIL) {
    const subject = `PSYCHO Booking: ${safeQuest} - ${safeDate} ${safeTime}`;
    const html = `
      <div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto;background:#0a0a0a;color:#e5e5e5;border-radius:12px;overflow:hidden">
        <div style="background:#e53935;padding:24px;text-align:center">
          <h1 style="margin:0;color:#fff;font-size:22px">New Booking</h1>
        </div>
        <div style="padding:24px">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#999">Quest</td><td style="padding:8px 0;font-weight:bold">${esc(safeQuest)}</td></tr>
            <tr><td style="padding:8px 0;color:#999">Date</td><td style="padding:8px 0;font-weight:bold">${esc(safeDate)}</td></tr>
            <tr><td style="padding:8px 0;color:#999">Time</td><td style="padding:8px 0;font-weight:bold">${esc(safeTime)}</td></tr>
            <tr><td style="padding:8px 0;color:#999">Phone</td><td style="padding:8px 0;font-weight:bold">${esc(safePhone)}</td></tr>
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
