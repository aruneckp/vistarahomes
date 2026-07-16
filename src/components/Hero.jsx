import { images } from "../data/content";
import Spark from "./Spark";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <img
        src={images.exteriorNight}
        alt="Vistara Homes building lit up at night, in Tirupati"
        className="hero__image"
      />
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
          A home stay built around the pilgrim's journey — spacious rooms, a kitchen of your own,
          and someone awake to welcome you, whatever time your bus gets in.
        </p>
        <div className="hero__actions">
          <a href="#book" className="btn btn-gold">
            Check availability
          </a>
          <a href="tel:+919876543210" className="btn btn-outline">
            Call the caretaker
          </a>
        </div>
      </div>

      <a href="#welcome" className="hero__scroll-cue" aria-label="Scroll to learn more">
        <span />
      </a>
    </section>
  );
}
