import { Plus } from "lucide-react";
import Spark from "./Spark";
import { faqs } from "../data/content";

export default function FAQ() {
  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">
            <Spark size={12} color="var(--maroon)" />
            Frequently Asked
          </p>
          <h2>Questions pilgrim families ask us most</h2>
          <p>Can't find what you're looking for? Send us a message and we'll answer directly.</p>
        </div>

        <div className="faq__list">
          {faqs.map((item) => (
            <details key={item.q} className="faq__item">
              <summary>
                <span>{item.q}</span>
                <Plus size={18} className="faq__icon" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
