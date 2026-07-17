import { useEffect, useState } from "react";
import { Star, ShieldCheck, Clock, CalendarCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "../data/content";
import { business } from "../data/business";
import Spark from "./Spark";

const SLIDE_DURATION = 6000;

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Verified host" },
  { icon: Clock, label: "24×7 caretaker" },
  { icon: CalendarCheck, label: "Free cancellation" },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (heroSlides.length < 2) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  const prevSlide = () => setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setActive((i) => (i + 1) % heroSlides.length);

  return (
    <section id="top" className="hero">
      <div className="hero__slides" aria-hidden="true">
        {heroSlides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            className={`hero__image ${i === active ? "hero__image--active" : ""}`}
          />
        ))}
      </div>
      <div className="hero__scrim" />

      <div className="hero__sparks" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <Spark key={i} size={10} color="var(--gold-soft)" className={`hero__spark hero__spark--${i}`} />
        ))}
      </div>

      <div className="container hero__content">
        <p className="eyebrow eyebrow--light">
          <Spark size={12} color="var(--gold)" />
          Tirupati &middot; 10 minutes from Tirumala foothills
        </p>
        <h1 className="hero__title">Vistara Homes</h1>
        <p className="hero__subtitle">
          A home stay built around the pilgrim's journey — spacious stays, a kitchen of your own,
          and someone awake to welcome you, whatever time your bus gets in.
        </p>
        <p className="hero__rating">
          <Star size={15} fill="var(--gold)" color="var(--gold)" />
          <strong>{business.reviewRating}</strong> ({business.reviewCount} stays) on {business.reviewSource}
        </p>
        <div className="hero__actions">
          <a href="#book" className="btn btn-gold">
            Check availability
          </a>
          <a href={`tel:${business.phoneHref}`} className="btn btn-outline">
            Call the caretaker
          </a>
        </div>

        <div className="hero__badges">
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <span key={label} className="hero__badge">
              <Icon size={14} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {heroSlides.length > 1 && (
        <>
          <button className="hero__arrow hero__arrow--prev" onClick={prevSlide} aria-label="Previous photo">
            <ChevronLeft size={20} />
          </button>
          <button className="hero__arrow hero__arrow--next" onClick={nextSlide} aria-label="Next photo">
            <ChevronRight size={20} />
          </button>
          <div className="hero__dots" role="tablist" aria-label="Hero photo selector">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.src}
                role="tab"
                aria-selected={i === active}
                aria-label={`Show photo ${i + 1} of ${heroSlides.length}`}
                className={`hero__dot ${i === active ? "hero__dot--active" : ""}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </>
      )}

      <a href="#welcome" className="hero__scroll-cue" aria-label="Scroll to learn more">
        <span />
      </a>
    </section>
  );
}
