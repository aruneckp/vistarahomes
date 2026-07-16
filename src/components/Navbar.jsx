import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Spark from "./Spark";

const LINKS = [
  { href: "#rooms", label: "Rooms" },
  { href: "#gallery", label: "Gallery" },
  { href: "#experience", label: "Experience" },
  { href: "#location", label: "Location" },
  { href: "#book", label: "Book" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled || open ? "navbar--solid" : ""}`}>
      <div className="container navbar__row">
        <a href="#top" className="navbar__brand" onClick={() => setOpen(false)}>
          <Spark size={16} color="var(--gold)" />
          <span>
            Vistara <em>Homes</em>
          </span>
        </a>

        <nav className="navbar__links navbar__links--desktop">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="tel:+919876543210" className="navbar__call">
          <Phone size={15} />
          <span>+91 98765 43210</span>
        </a>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="navbar__links navbar__links--mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="tel:+919876543210" className="navbar__call navbar__call--mobile">
            <Phone size={15} /> <span>+91 98765 43210</span>
          </a>
        </nav>
      )}
    </header>
  );
}
