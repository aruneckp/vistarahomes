import { useState } from "react";
import { MessageCircle, CheckCircle2, Star } from "lucide-react";
import Spark from "./Spark";
import { business } from "../data/business";

const initialForm = {
  name: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: "2",
  room: "Family Suite",
  message: "",
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.checkIn || !form.checkOut) {
      setError("Please fill in your name, phone number, and travel dates.");
      return;
    }
    setError("");

    const lines = [
      `Enquiry from the Vistara Homes website:`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Check-in: ${form.checkIn}`,
      `Check-out: ${form.checkOut}`,
      `Guests: ${form.guests}`,
      `Room preference: ${form.room}`,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="book" className="section booking">
      <div className="container booking__grid">
        <div className="booking__intro">
          <p className="eyebrow">
            <Spark size={12} color="var(--maroon)" />
            Book Your Stay
          </p>
          <h2>Check availability for your dates</h2>
          <p className="booking__lead">
            Fill in your travel dates and we'll confirm the room over WhatsApp — usually within
            the hour. No advance payment needed to enquire.
          </p>
          <p className="booking__rating">
            <Star size={15} fill="var(--maroon)" color="var(--maroon)" />
            <strong>{business.reviewRating}</strong> from {business.reviewCount} guests on {business.reviewSource}
          </p>
          <a href={`tel:${business.phoneHref}`} className="booking__call">
            Prefer to talk? Call {business.phoneDisplay}
          </a>
        </div>

        <form className="booking__form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="booking__success">
              <CheckCircle2 size={34} color="var(--maroon)" />
              <h3>Enquiry sent to WhatsApp</h3>
              <p>
                We've opened WhatsApp with your details filled in — send the message and our
                caretaker will confirm your room shortly.
              </p>
              <button type="button" className="btn btn-outline-dark" onClick={() => { setSent(false); setForm(initialForm); }}>
                Send another enquiry
              </button>
            </div>
          ) : (
            <>
              <div className="booking__row">
                <label>
                  Full name
                  <input type="text" value={form.name} onChange={update("name")} placeholder="Your name" />
                </label>
                <label>
                  Phone number
                  <input type="tel" value={form.phone} onChange={update("phone")} placeholder="10-digit mobile number" />
                </label>
              </div>

              <div className="booking__row">
                <label>
                  Check-in
                  <input type="date" value={form.checkIn} onChange={update("checkIn")} />
                </label>
                <label>
                  Check-out
                  <input type="date" value={form.checkOut} onChange={update("checkOut")} />
                </label>
              </div>

              <div className="booking__row">
                <label>
                  Guests
                  <select value={form.guests} onChange={update("guests")}>
                    {[1, 2, 3, 4, 5, 6, "7+"].map((n) => (
                      <option key={n} value={n}>{n} guest{n === 1 ? "" : "s"}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Room preference
                  <select value={form.room} onChange={update("room")}>
                    <option>Family Suite</option>
                    <option>Comfort Room</option>
                    <option>Deluxe Room</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </div>

              <label>
                Anything else we should know?
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Elderly travellers, early check-in, airport pickup, etc."
                />
              </label>

              {error && <p className="booking__error">{error}</p>}

              <button type="submit" className="btn btn-maroon booking__submit">
                <MessageCircle size={17} />
                Send enquiry on WhatsApp
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
