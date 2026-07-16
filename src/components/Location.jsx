import { MapPin, Info } from "lucide-react";
import Spark from "./Spark";
import { business } from "../data/business";
import { landmarks, pilgrimTips } from "../data/content";

export default function Location() {
  return (
    <section id="location" className="section location">
      <div className="container location__grid">
        <div>
          <p className="eyebrow">
            <Spark size={12} color="var(--maroon)" />
            Location
          </p>
          <h2>Easy to find, easy to reach</h2>
          <p className="location__lead">
            Vistara Homes is set on a quiet residential street in Tirupati, Andhra Pradesh —
            share this address with your driver or auto:
          </p>

          <div className="location__address">
            <MapPin size={18} color="var(--maroon)" />
            <span>{business.addressLine}</span>
          </div>

          <ul className="location__routes">
            {landmarks.map((l) => (
              <li key={l.label}>
                <Spark size={11} color="var(--maroon)" />
                <span><strong>{l.label}</strong> — {l.distance}</span>
              </li>
            ))}
          </ul>

          <div className="location__tips">
            <h4><Info size={16} color="var(--gold)" /> Good to know before you travel</h4>
            <ul>
              {pilgrimTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="location__map">
          <iframe
            title="Vistara Homes location in Tirupati"
            src={business.mapEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
