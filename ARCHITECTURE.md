# PSYCHO - Horror Quest Booking Site

## Problem
People looking for horror quest experiences need a modern, multilingual booking platform. Most local quest rooms have outdated websites with clunky booking flows and no mobile optimization. Players want to browse quests, check availability, and book instantly — in their preferred language.

## Solution
PSYCHO is a sleek, mobile-first horror quest booking website supporting Romanian, Russian, and English. It features immersive quest descriptions, a seamless booking form with email notifications via FormSubmit.co, and a dark horror-themed UI that sets the mood before visitors even arrive.

## Tech Stack
- Vanilla HTML5 + CSS3 + JavaScript (ES6+)
- Zero frameworks, CDN-only dependencies:
  - Google Fonts: `https://fonts.googleapis.com/css2?family=Creepster&family=Inter:wght@400;500;600;700&display=swap`
  - Flatpickr (date picker): `https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css` + `https://cdn.jsdelivr.net/npm/flatpickr`
  - Flatpickr Dark Theme: `https://cdn.jsdelivr.net/npm/flatpickr/dist/themes/dark.css`
- localStorage for language preference + booking history
- FormSubmit.co for email notifications (zero API keys)
- Responsive design (mobile-first approach)

## File Structure
```
psycho/
├── index.html          # Entry point, all HTML structure
├── style.css           # All styles (mobile-first, dark theme)
├── app.js              # All logic (i18n, booking, theme toggle)
├── og-image.svg        # Social sharing image
├── ARCHITECTURE.md     # This file
└── README.md           # Project documentation
```

## Core Modules (in app.js)

### i18n Module
- Purpose: Handle language switching (RO/RU/EN)
- Input: Language code from user selection or localStorage
- Output: Updates all `[data-i18n]` elements with translated text

### Quest Gallery Module
- Purpose: Render quest cards with details, fear ratings, and CTA
- Input: Quest data array
- Output: Interactive quest cards with booking triggers

### Booking Module
- Purpose: Handle booking form submission
- Input: User form data (name, phone, email, quest, date, time, players)
- Output: Form submission to FormSubmit.co, localStorage history update

### Theme Module
- Purpose: Dark/light theme toggle with system preference detection
- Input: User toggle or prefers-color-scheme
- Output: Theme class on body, localStorage persistence

### Booking History Module
- Purpose: Show past bookings from localStorage
- Input: localStorage data
- Output: Rendered booking history list

## Monetization Plan

### Revenue Model
This is a direct business site — revenue comes from quest bookings:
- 2-3 players: 1,000 MDL per session
- Each additional player: +300 MDL
- Maximum 10 players per session
- Corporate/team-building packages at premium rates

### Growth Revenue
- Google AdSense on blog content (future)
- Affiliate partnerships with local restaurants/hotels
- Gift card sales (V2)

## Growth Strategy

### SEO Plan
- Target keywords: "horror quest Chisinau", "escape room Moldova", "quest room booking"
- Semantic HTML throughout (header, main, section, article, footer)
- Multi-language content = 3x organic search surface
- Blog section (V2) for "best horror quests Moldova" type content

### Social Sharing
- Web Share API integration on quest pages
- Open Graph image with horror branding
- Shareable booking confirmation ("I'm going to PSYCHO!")

### Viral Loops
- "Bring a friend" discount mention
- Social proof: player count / review snippets
- Instagram-worthy quest photos (V2)

## V2 Roadmap
- Online payment integration (Stripe/local payment)
- Real-time availability calendar
- Photo gallery from quest sessions
- Customer reviews/ratings
- Blog with horror content + SEO
- Gift cards / voucher system
- Admin dashboard for managing bookings
- Push notifications for upcoming bookings
- Loyalty program
