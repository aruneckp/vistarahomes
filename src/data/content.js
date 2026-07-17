import exteriorDusk from "../assets/images/exterior-dusk-playground.jpg";
import exteriorDay from "../assets/images/exterior-day-wide.jpg";
import exteriorNight from "../assets/images/exterior-night-facade.jpg";
import livingCoral from "../assets/images/living-room-coral.jpg";
import livingPink from "../assets/images/living-room-pink.jpg";
import livingBlue from "../assets/images/living-room-blue-sofas.jpg";
import livingDining from "../assets/images/living-dining-room.jpg";
import kitchen from "../assets/images/kitchen.jpg";
import bedroomMaroon from "../assets/images/bedroom-maroon.jpg";
import bedroomGold1 from "../assets/images/bedroom-gold-1.jpg";
import bedroomGold2 from "../assets/images/bedroom-gold-2.jpg";
import lobby from "../assets/images/common-lobby.jpg";

export const images = {
  exteriorDusk,
  exteriorDay,
  exteriorNight,
  livingCoral,
  livingPink,
  livingBlue,
  livingDining,
  kitchen,
  bedroomMaroon,
  bedroomGold1,
  bedroomGold2,
  lobby,
};

// Hero slideshow — rotates through these in order.
// TODO: once Tirupati/Tirumala photos (temple, gopuram, hills) are provided,
// import them above and add entries here to mix them into the rotation.
export const heroSlides = [
  { src: exteriorNight, alt: "Vistara Homes building lit up at night, in Tirupati" },
  { src: exteriorDay, alt: "Vistara Homes seen from the park across the street, daytime" },
  { src: exteriorDusk, alt: "Vistara Homes at dusk, view from the park across the road" },
];

// TODO: replace every `priceFrom` below with your real per-night rate.
export const rooms = [
  {
    id: "family-suite",
    name: "Family Suite",
    tag: "Most booked for Tirumala darshan groups",
    priceFrom: "₹3,500",
    image: livingDining,
    description:
      "A full apartment with a separate living and dining area, built for families travelling together for darshan. Comes with a working kitchenette so the first and last meal of the trip can be home-cooked.",
    amenities: ["Sleeps up to 6", "Private kitchenette", "Dining table for 4", "Smart TV & Wi-Fi"],
  },
  {
    id: "comfort-suite",
    name: "Comfort Suite",
    tag: "Ideal for couples & small families",
    priceFrom: "₹1,800",
    image: bedroomMaroon,
    description:
      "A quieter double stay with a plush bed, wardrobe space, and an en-suite bath — turned down daily with fresh linen so you can rest well before the climb to Tirumala.",
    amenities: ["Double bed", "En-suite bathroom", "Daily housekeeping", "Reading lamp & wardrobe"],
  },
  {
    id: "deluxe-suite",
    name: "Deluxe Suite",
    tag: "Extra space, warmly furnished",
    priceFrom: "₹2,500",
    image: bedroomGold2,
    description:
      "Our largest stay category, with a full-height wardrobe wall and a window seat that catches the morning light — a favourite with returning pilgrim families.",
    amenities: ["King bed", "Window seating nook", "Full wardrobe wall", "Premium linen"],
  },
];

export const landmarks = [
  { label: "Tirupati Railway Station", distance: "approx. 10 minutes by auto" },
  { label: "Tirumala bus point (RTC bus stand)", distance: "approx. 5 minutes away" },
  { label: "Alipiri footpath start", distance: "approx. 10 minutes by auto" },
  { label: "Srinivasam Complex", distance: "approx. 8 minutes by auto" },
  { label: "Renigunta Airport", distance: "approx. 25 minutes by road" },
];

export const pilgrimTips = [
  "Darshan slots on the TTD portal (ttdevasthanams.ap.gov.in) open roughly 90 days in advance — book ahead if you can, and carry a photo ID for everyone in your group.",
  "Free luggage cloakrooms are available at the Srinivasam Complex and at Alipiri if you're doing the footpath climb — you don't need to carry bags up the hill.",
  "Arriving on an overnight bus or train? Our caretaker is up around the clock, so a 3 AM check-in is completely normal here.",
];

export const houseRules = [
  { label: "Check-in", value: "12:00 PM — early check-in on request, no extra charge, just tell us your ETA" },
  { label: "Check-out", value: "11:00 AM" },
  { label: "ID proof", value: "Valid government photo ID required for all adult guests at check-in" },
  { label: "Food policy", value: "Pure vegetarian kitchen in every apartment; no non-veg food on the premises" },
  { label: "Cancellation", value: "Free cancellation up to 48 hours before check-in; details confirmed when you book" },
  { label: "Payment", value: "Cash, UPI, and major cards accepted on arrival — no advance payment needed to enquire" },
];

export const faqs = [
  {
    q: "How far is Vistara Homes from the Tirumala bus point and railway station?",
    a: "About 5 minutes to the Tirumala bus point and 10 minutes to Tirupati Railway Station by auto — close enough that you're never far from your next darshan slot.",
  },
  {
    q: "Can we check in late at night or very early in the morning?",
    a: "Yes. Pilgrims arrive at all hours on overnight buses and trains, so our caretaker keeps hours around your travel plans, not office hours. Just share your expected arrival time when you enquire.",
  },
  {
    q: "Is there a kitchen we can use?",
    a: "Every apartment has its own working, pure-vegetarian kitchen — most families use it for at least their first and last meal of the trip.",
  },
  {
    q: "Do you help with darshan ticket booking?",
    a: "We don't book tickets on your behalf, but we're happy to guide you on the TTD portal and QR-based token process, and to point you to the nearest counters if you need offline tokens.",
  },
  {
    q: "Where can we leave our luggage if we're doing the Alipiri footpath climb?",
    a: "There are free TTD luggage cloakrooms at both Srinivasam Complex and Alipiri, a short auto ride from the property, so you don't have to carry bags up the hill.",
  },
  {
    q: "What's the cancellation policy?",
    a: "Free cancellation up to 48 hours before your check-in date. We'll confirm the exact terms over WhatsApp when your booking is confirmed.",
  },
  {
    q: "Is parking available for self-drive or taxi pickups?",
    a: "Yes, covered parking is available on-site for self-drive guests, and there's easy pickup/drop access for taxis and autos.",
  },
  {
    q: "Can we book more than one apartment for an extended family or group?",
    a: "Yes — larger groups usually split across two or more apartments on the same floor, so everyone stays close together.",
  },
];

export const amenities = [
  { label: "Fully furnished kitchen", note: "Cook a home meal whenever you like" },
  { label: "Housekeeping included", note: "Fresh towels & linen, daily" },
  { label: "Power backup", note: "Uninterrupted comfort, day or night" },
  { label: "Lift access", note: "No stairs with luggage or elders" },
  { label: "Covered parking", note: "For self-drive & taxi pickups" },
  { label: "24-hour caretaker", note: "Someone on call for anything you need" },
];

export const gallery = [
  { src: exteriorNight, caption: "Vistara Homes at night" },
  { src: exteriorDay, caption: "The building, by day" },
  { src: livingDining, caption: "Living & dining area" },
  { src: livingCoral, caption: "Family Suite living room" },
  { src: bedroomGold1, caption: "Deluxe Suite" },
  { src: kitchen, caption: "In-apartment kitchen" },
  { src: livingBlue, caption: "Comfort Suite lounge" },
  { src: bedroomMaroon, caption: "Comfort Suite bedroom" },
  { src: livingPink, caption: "Second living room" },
  { src: bedroomGold2, caption: "Deluxe Suite wardrobe wall" },
  { src: lobby, caption: "Ground floor common area" },
  { src: exteriorDusk, caption: "Evening, from the park across the road" },
];

export const testimonials = [
  {
    quote:
      "We arrived late for our Tirumala darshan and the caretaker was still waiting up for us with the keys. The kitchen meant we didn't need to hunt for food at midnight.",
    name: "Ramesh & family",
    origin: "Chennai",
  },
  {
    quote:
      "Booked the Family Suite for eight of us. Clean rooms, proper beds — not the usual lodge mattress — and close enough to walk to the bus stand for Tirumala buses.",
    name: "Lakshmi Narayanan",
    origin: "Bengaluru",
  },
  {
    quote:
      "Quiet residential lane, but five minutes from everything. Exactly what you want after a long temple queue.",
    name: "Priya & Arvind",
    origin: "Hyderabad",
  },
];
