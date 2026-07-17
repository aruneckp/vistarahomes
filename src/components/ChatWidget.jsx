import { useEffect, useState } from "react";
import {
  MessageCircle,
  X,
  ChevronLeft,
  Home,
  MapPin,
  Sparkles,
  ClipboardCheck,
  HelpCircle,
  Phone,
  CalendarCheck,
} from "lucide-react";
import Logo from "./Logo";
import { business } from "../data/business";
import { rooms, landmarks, amenities, houseRules, faqs } from "../data/content";

const NUDGE_DELAY = 3500;

const MENU = [
  { key: "stays", icon: Home, label: "Available stays & pricing" },
  { key: "reach", icon: MapPin, label: "How to reach us" },
  { key: "amenities", icon: Sparkles, label: "Amenities & services" },
  { key: "policies", icon: ClipboardCheck, label: "Booking policies" },
  { key: "faq", icon: HelpCircle, label: "Common questions" },
];

const TITLES = {
  menu: "How can we help?",
  stays: "Available stays & pricing",
  reach: "How to reach us",
  amenities: "Amenities & services",
  policies: "Booking policies",
  faq: "Common questions",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState("menu");
  const [showNudge, setShowNudge] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setShowNudge(true), NUDGE_DELAY);
    return () => clearTimeout(id);
  }, []);

  const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    "Hi Vistara Homes, I'd like to know more about staying with you in Tirupati."
  )}`;

  const openPanel = () => {
    setOpen(true);
    setShowNudge(false);
  };

  const goToBooking = () => {
    setOpen(false);
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Vistara Homes assistant">
          <div className="chat-panel__header">
            <Logo size={26} color="var(--gold-soft)" />
            <div>
              <strong>Vistara Homes</strong>
              <span>Usually replies in minutes</span>
            </div>
            <button aria-label="Close chat" onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="chat-panel__body">
            {view !== "menu" && (
              <>
                <button className="chat-back" onClick={() => setView("menu")}>
                  <ChevronLeft size={15} /> Menu
                </button>
                <h4 className="chat-title">{TITLES[view]}</h4>
              </>
            )}

            {view === "menu" && (
              <>
                <div className="chat-bubble">
                  🙏 Namaste! I'm here to help with anything about your stay in Tirupati. What
                  would you like to know?
                </div>
                <div className="chat-options">
                  {MENU.map(({ key, icon: Icon, label }) => (
                    <button key={key} onClick={() => setView(key)}>
                      <Icon size={16} />
                      {label}
                    </button>
                  ))}
                  <button className="chat-options__cta" onClick={goToBooking}>
                    <CalendarCheck size={16} />
                    Book this stay
                  </button>
                </div>
              </>
            )}

            {view === "stays" && (
              <>
                <div className="chat-bubble">Here's what we currently have:</div>
                {rooms.map((r) => (
                  <div key={r.id} className="chat-card">
                    <div className="chat-card__head">
                      <strong>{r.name}</strong>
                      <span>
                        {r.priceFrom}
                        <em>/night</em>
                      </span>
                    </div>
                    <p>{r.tag}</p>
                  </div>
                ))}
              </>
            )}

            {view === "reach" && (
              <>
                <div className="chat-bubble">{business.addressLine}</div>
                {landmarks.map((l) => (
                  <div key={l.label} className="chat-card chat-card--row">
                    <strong>{l.label}</strong>
                    <span>{l.distance}</span>
                  </div>
                ))}
              </>
            )}

            {view === "amenities" && (
              <>
                <div className="chat-bubble">Every stay includes:</div>
                {amenities.map((a) => (
                  <div key={a.label} className="chat-card chat-card--row">
                    <strong>{a.label}</strong>
                    <span>{a.note}</span>
                  </div>
                ))}
              </>
            )}

            {view === "policies" && (
              <>
                <div className="chat-bubble">Plain terms, no fine print:</div>
                {houseRules.map((r) => (
                  <div key={r.label} className="chat-card">
                    <div className="chat-card__head"><strong>{r.label}</strong></div>
                    <p>{r.value}</p>
                  </div>
                ))}
              </>
            )}

            {view === "faq" && (
              <>
                <div className="chat-bubble">A few things guests often ask:</div>
                {faqs.slice(0, 5).map((f) => (
                  <div key={f.q} className="chat-card">
                    <div className="chat-card__head"><strong>{f.q}</strong></div>
                    <p>{f.a}</p>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="chat-panel__footer">
            <a href={`tel:${business.phoneHref}`} className="chat-panel__footer-btn">
              <Phone size={15} /> Call
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="chat-panel__footer-btn chat-panel__footer-btn--whatsapp"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
      )}

      {!open && showNudge && (
        <div className="whatsapp-nudge">
          <button className="whatsapp-nudge__close" aria-label="Dismiss" onClick={() => setShowNudge(false)}>
            <X size={13} />
          </button>
          <button onClick={openPanel}>
            💬 Need help planning your stay? Ask our assistant.
          </button>
        </div>
      )}

      <button
        className="whatsapp-fab"
        aria-label={open ? "Close assistant" : "Chat with Vistara Homes"}
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : openPanel())}
      >
        {!open && <span className="whatsapp-fab__ring" aria-hidden="true" />}
        {open ? <X size={24} /> : <MessageCircle size={26} strokeWidth={2} />}
      </button>
    </div>
  );
}
