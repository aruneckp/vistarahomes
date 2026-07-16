import { testimonials } from "../data/content";
import Spark from "./Spark";

export default function Testimonials() {
  return (
    <section id="experience" className="section testimonials">
      <div className="container">
        <div className="section-head section-head--light">
          <p className="eyebrow eyebrow--light">
            <Spark size={12} color="var(--gold)" />
            Guest Experience
          </p>
          <h2>What families say after their stay</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonial-card">
              <Spark size={18} color="var(--gold)" />
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.origin}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
