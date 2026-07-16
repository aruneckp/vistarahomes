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

export const rooms = [
  {
    id: "family-suite",
    name: "Family Suite",
    tag: "Most booked for Tirumala darshan groups",
    image: livingDining,
    description:
      "A full apartment with a separate living and dining area, built for families travelling together for darshan. Comes with a working kitchenette so the first and last meal of the trip can be home-cooked.",
    amenities: ["Sleeps up to 6", "Private kitchenette", "Dining table for 4", "Smart TV & Wi-Fi"],
  },
  {
    id: "comfort-room",
    name: "Comfort Room",
    tag: "Ideal for couples & small families",
    image: bedroomMaroon,
    description:
      "A quieter double room with a plush bed, wardrobe space, and an en-suite bath — turned down daily with fresh linen so you can rest well before the climb to Tirumala.",
    amenities: ["Double bed", "En-suite bathroom", "Daily housekeeping", "Reading lamp & wardrobe"],
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    tag: "Extra space, warmly furnished",
    image: bedroomGold2,
    description:
      "Our largest room category, with a full-height wardrobe wall and a window seat that catches the morning light — a favourite with returning pilgrim families.",
    amenities: ["King bed", "Window seating nook", "Full wardrobe wall", "Premium linen"],
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
  { src: bedroomGold1, caption: "Deluxe Room" },
  { src: kitchen, caption: "In-apartment kitchen" },
  { src: livingBlue, caption: "Comfort Room lounge" },
  { src: bedroomMaroon, caption: "Comfort Room bedroom" },
  { src: livingPink, caption: "Second living room" },
  { src: bedroomGold2, caption: "Deluxe Room wardrobe wall" },
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
