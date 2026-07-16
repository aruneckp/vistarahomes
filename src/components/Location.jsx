import { MapPin, Train, Bus, Car } from "lucide-react";
import Spark from "./Spark";

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
            <span>Vistara Homes, Tirupati, Andhra Pradesh &mdash; exact address shared on booking confirmation</span>
          </div>

          <ul className="location__routes">
            <li>
              <Train size={17} />
              <span><strong>Tirupati Railway Station</strong> — approx. 10 minutes by auto</span>
            </li>
            <li>
              <Bus size={17} />
              <span><strong>Tirumala bus point</strong> — approx. 5 minutes away</span>
            </li>
            <li>
              <Car size={17} />
              <span><strong>Renigunta Airport</strong> — approx. 25 minutes by road</span>
            </li>
          </ul>
        </div>

        <div className="location__map">
          <iframe
            title="Vistara Homes location in Tirupati"
            src="https://maps.google.com/maps?q=Tirupati,+Andhra+Pradesh&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
