import { Phone, Mail, MapPin } from "lucide-react";
import Spark from "./Spark";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__sparks" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <Spark key={i} size={12} color="var(--gold)" />
        ))}
      </div>

      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#top" className="navbar__brand">
            <Spark size={16} color="var(--gold)" />
            <span>
              Vistara <em>Homes</em>
            </span>
          </a>
          <p>A home stay in Tirupati, built for the pilgrim's journey to Tirumala.</p>
        </div>

        <div className="footer__col">
          <h4>Reach us</h4>
          <a href="tel:+919876543210"><Phone size={15} /> +91 98765 43210</a>
          <a href="mailto:stay@vistarahomestirupati.com"><Mail size={15} /> stay@vistarahomestirupati.com</a>
          <span className="footer__address"><MapPin size={15} /> Tirupati, Andhra Pradesh</span>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <a href="#rooms">Rooms &amp; Stay</a>
          <a href="#gallery">Gallery</a>
          <a href="#location">Location</a>
          <a href="#book">Book a stay</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>&copy; {new Date().getFullYear()} Vistara Homes, Tirupati. All rights reserved.</span>
      </div>
    </footer>
  );
}
