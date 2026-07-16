import { ClipboardCheck } from "lucide-react";
import Spark from "./Spark";
import { houseRules } from "../data/content";

export default function Policies() {
  return (
    <section id="policies" className="section policies">
      <div className="container">
        <div className="section-head section-head--light">
          <p className="eyebrow eyebrow--light">
            <Spark size={12} color="var(--gold)" />
            Good To Know
          </p>
          <h2>House rules &amp; booking policy</h2>
          <p>Plain terms, no fine print — here's everything to plan around.</p>
        </div>

        <div className="policies__grid">
          {houseRules.map((rule) => (
            <div key={rule.label} className="policies__item">
              <ClipboardCheck size={18} color="var(--gold-soft)" />
              <div>
                <strong>{rule.label}</strong>
                <span>{rule.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
