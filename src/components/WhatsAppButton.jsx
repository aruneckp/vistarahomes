import { MessageCircle } from "lucide-react";
import { business } from "../data/business";

export default function WhatsAppButton() {
  const url = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    "Hi Vistara Homes, I'd like to know more about staying with you in Tirupati."
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with Vistara Homes on WhatsApp"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  );
}
