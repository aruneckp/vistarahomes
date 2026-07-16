import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210"; // TODO: replace with the real WhatsApp business number

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
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
