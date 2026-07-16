# Vistara Homes — Tirupati

A React (Vite) single-page site for Vistara Homes, built to be listed as a home stay in Tirupati.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/` — deploy that folder to Netlify, Vercel, GitHub Pages,
or any static host.

## Before you launch — replace these placeholders

Search the project for the following and update with real details:

| What | Where | File(s) |
|---|---|---|
| WhatsApp number (`919876543210`) | Floating button + booking form | `src/components/WhatsAppButton.jsx`, `src/components/BookingForm.jsx` |
| Phone number (`+91 98765 43210`) | Navbar, hero, footer, location | `src/components/Navbar.jsx`, `Hero.jsx`, `Footer.jsx`, `BookingForm.jsx` |
| Email address | Footer | `src/components/Footer.jsx` |
| Exact street address | Location section | `src/components/Location.jsx` |
| Map embed | Currently centered on "Tirupati" city — replace the `src` in the `<iframe>` with your exact pinned location from Google Maps (Share → Embed a map) | `src/components/Location.jsx` |
| Room names, pricing copy, amenities | `src/data/content.js` |
| Guest testimonials | Currently sample quotes — swap in real guest feedback | `src/data/content.js` |

## Notes on the booking form

There's no backend wired up. Submitting the form opens WhatsApp with a pre-filled enquiry
message, which works immediately with no server needed. If you'd rather receive enquiries by
email, swap the `handleSubmit` logic in `src/components/BookingForm.jsx` for a form service
like Formspree, or point it at your own API.

## Project structure

```
src/
  components/    — one component per section (Navbar, Hero, Rooms, Gallery, etc.)
  data/          — content.js holds room/gallery/testimonial data and image imports
  assets/images/ — the property photos
  index.css      — design tokens (colors, fonts, spacing)
  styles.css     — component styles
```

## Design notes

The palette (mahogany brown, temple maroon, gopuram gold) is pulled directly from the
property's own materials — the wood-clad facade and the maroon/gold bed linen — echoing
Tirupati's temple-town colors. The four-point "spark" glyph used throughout (nav, bullets,
footer) is a nod to the diamond-shaped uplights on the building's night facade.
