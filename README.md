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

Contact details, hours, and policy all live in **one file** — `src/data/business.js` — so most
of the list below is a single edit:

| What | Where |
|---|---|
| Phone, WhatsApp number, email, address, map embed src, check-in/out times, review rating | `src/data/business.js` |
| Room pricing (`priceFrom` on each room) | `src/data/content.js` |
| House rules / cancellation policy | `houseRules` in `src/data/content.js` |
| FAQ answers | `faqs` in `src/data/content.js` — keep the matching `FAQPage` JSON-LD in `index.html` in sync |
| Guest testimonials | Currently sample quotes — swap in real guest feedback, `src/data/content.js` |
| Exact geo coordinates for SEO | `geo` in `src/data/business.js` and the `LodgingBusiness` JSON-LD in `index.html` |
| Social share image (`og-image.jpg`) | Currently a property exterior photo — swap the file in `public/` if you want a different one |
| Canonical/`og:url` domain | Currently a placeholder domain — replace throughout `index.html` once deployed |

Search the project for `TODO` comments to find every placeholder in context.

## Notes on the booking form

There's no backend wired up. Submitting the form opens WhatsApp with a pre-filled enquiry
message, which works immediately with no server needed. If you'd rather receive enquiries by
email, swap the `handleSubmit` logic in `src/components/BookingForm.jsx` for a form service
like Formspree, or point it at your own API.

## Project structure

```
src/
  components/    — one component per section (Navbar, Hero, Rooms, Gallery, FAQ, Policies, etc.)
  data/
    business.js  — single source of truth for contact info, hours, and policy
    content.js   — room/gallery/testimonial/FAQ data and image imports
  assets/images/ — the property photos
  index.css      — design tokens (colors, fonts, spacing)
  styles.css     — component styles
```

## Design notes

The palette (mahogany brown, temple maroon, gopuram gold) is pulled directly from the
property's own materials — the wood-clad facade and the maroon/gold bed linen — echoing
Tirupati's temple-town colors. The four-point "spark" glyph used throughout (nav, bullets,
footer) is a nod to the diamond-shaped uplights on the building's night facade.
