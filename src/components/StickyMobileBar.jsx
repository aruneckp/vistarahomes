import { Phone, MessageCircle } from "lucide-react";
import { business } from "../data/business";

export default function StickyMobileBar() {
  const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    "Hi Vistara Homes, I'd like to know more about staying with you in Tirupati."
  )}`;

  return (
    <div className="sticky-bar" role="navigation" aria-label="Quick contact">
      <a href={`tel:${business.phoneHref}`} className="sticky-bar__btn sticky-bar__btn--call">
        <Phone size={17} />
        Call
      </a>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="sticky-bar__btn sticky-bar__btn--whatsapp">
        <MessageCircle size={17} />
        WhatsApp
      </a>
      <a href="#book" className="sticky-bar__btn sticky-bar__btn--book">
        Book
      </a>
    </div>
  );
}
