import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN')!
const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

interface BookingPayload {
  type: 'INSERT'
  table: 'bookings'
  record: {
    id: string
    room_id: string
    booking_date: string
    time_slot: string
    customer_name: string
    phone: string
    email: string
    players: number
    message: string | null
    lang: string
    status: string
    created_at: string
  }
}

serve(async (req) => {
  try {
    const payload: BookingPayload = await req.json()
    const booking = payload.record

    // Get room name
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    const { data: room } = await supabase
      .from('rooms')
      .select('name_en, name_ru')
      .eq('id', booking.room_id)
      .single()

    const roomName = room?.name_en || 'Unknown'

    // --- Send Telegram notification ---
    const telegramText = [
      `\u{1F3AD} *New Booking!*`,
      ``,
      `*Quest:* ${roomName}`,
      `*Date:* ${booking.booking_date}`,
      `*Time:* ${booking.time_slot}`,
      `*Players:* ${booking.players}`,
      ``,
      `*Customer:* ${booking.customer_name}`,
      `*Phone:* ${booking.phone}`,
      `*Email:* ${booking.email}`,
      booking.message ? `*Note:* ${booking.message}` : '',
    ].filter(Boolean).join('\n')

    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramText,
        parse_mode: 'Markdown',
      }),
    })

    // --- Send email confirmation to customer ---
    // Using Supabase's built-in email via Edge Function
    // For production, replace with your SMTP provider (Resend, SendGrid, etc.)
    const emailHtml = getEmailHtml(booking, roomName)

    // Send via Resend (recommended) - set RESEND_API_KEY in env
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (RESEND_API_KEY && booking.email) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'PSYCHO Quest <noreply@psychoquest.md>',
          to: [booking.email],
          subject: `Booking Confirmation - ${roomName} - ${booking.booking_date}`,
          html: emailHtml,
        }),
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Notification error:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
})

function getEmailHtml(booking: BookingPayload['record'], roomName: string): string {
  const lang = booking.lang || 'ru'

  const texts: Record<string, Record<string, string>> = {
    en: {
      title: 'Booking Received!',
      intro: `Hi ${booking.customer_name}, your booking has been received.`,
      quest: 'Quest',
      date: 'Date',
      time: 'Time',
      players: 'Players',
      note: 'We will confirm your booking within 1 hour. If you have questions, call us at +37379603666.',
      footer: 'PSYCHO Quest & Horror Cinema',
    },
    ro: {
      title: 'Rezervare Primita!',
      intro: `Salut ${booking.customer_name}, rezervarea ta a fost primita.`,
      quest: 'Quest',
      date: 'Data',
      time: 'Ora',
      players: 'Jucatori',
      note: 'Vom confirma rezervarea in maxim 1 ora. Daca ai intrebari, suna-ne la +37379603666.',
      footer: 'PSYCHO Quest & Horror Cinema',
    },
    ru: {
      title: 'Бронь получена!',
      intro: `Привет ${booking.customer_name}, ваша бронь получена.`,
      quest: 'Квест',
      date: 'Дата',
      time: 'Время',
      players: 'Игроков',
      note: 'Мы подтвердим вашу бронь в течение 1 часа. Если есть вопросы, звоните +37379603666.',
      footer: 'PSYCHO Quest & Horror Cinema',
    },
  }

  const t = texts[lang] || texts.ru

  return `
    <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; background: #0a0a0a; color: #e5e5e5; border-radius: 12px; overflow: hidden;">
      <div style="background: #e53935; padding: 24px; text-align: center;">
        <h1 style="margin: 0; color: #fff; font-size: 22px;">${t.title}</h1>
      </div>
      <div style="padding: 24px;">
        <p style="margin: 0 0 20px; color: #ccc;">${t.intro}</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #999;">${t.quest}</td><td style="padding: 8px 0; font-weight: bold;">${roomName}</td></tr>
          <tr><td style="padding: 8px 0; color: #999;">${t.date}</td><td style="padding: 8px 0; font-weight: bold;">${booking.booking_date}</td></tr>
          <tr><td style="padding: 8px 0; color: #999;">${t.time}</td><td style="padding: 8px 0; font-weight: bold;">${booking.time_slot}</td></tr>
          <tr><td style="padding: 8px 0; color: #999;">${t.players}</td><td style="padding: 8px 0; font-weight: bold;">${booking.players}</td></tr>
        </table>
        <p style="margin: 20px 0 0; color: #999; font-size: 13px;">${t.note}</p>
      </div>
      <div style="padding: 16px 24px; text-align: center; border-top: 1px solid #222; color: #666; font-size: 12px;">
        ${t.footer} &mdash; Chisinau, Calea Orheiului 90A
      </div>
    </div>
  `
}
