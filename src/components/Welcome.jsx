import { images } from "../data/content";
import Spark from "./Spark";

export default function Welcome() {
  return (
    <section id="welcome" className="section welcome">
      <div className="container welcome__grid">
        <div className="welcome__image-wrap">
          <img src={images.exteriorDay} alt="Vistara Homes seen from the park across the street, daytime" />
        </div>
        <div className="welcome__text">
          <p className="eyebrow">
            <Spark size={12} color="var(--maroon)" />
            About Vistara Homes
          </p>
          <h2>A quiet street, close to everything Tirupati is here for</h2>
          <p className="welcome__lead">
            Vistara Homes sits on a residential lane a short drive from the Tirupati railway
            station and the bus stand for Tirumala — far enough to sleep well, close enough that
            you're never far from your next darshan slot.
          </p>
          <p>
            Every apartment is run like a home rather than a hotel: real kitchens, proper
            wardrobes, and a caretaker who keeps hours around your travel plans, not office hours.
            Families, elders, and groups travelling together are who we built this for.
          </p>
          <div className="welcome__stats">
            <div>
              <strong>5 min</strong>
              <span>to Tirumala bus point</span>
            </div>
            <div>
              <strong>24×7</strong>
              <span>caretaker on site</span>
            </div>
            <div>
              <strong>3</strong>
              <span>stay types to choose from</span>
            </div>
          </div>

          <div className="welcome__ethos">
            <Spark size={18} color="var(--gold)" />
            <div>
              <p className="welcome__ethos-line">
                <span className="welcome__ethos-sanskrit">अतिथि देवो भव</span>
                <span className="welcome__ethos-translit">— Athithi Devo Bhava, "the guest is akin to god"</span>
              </p>
              <p className="welcome__ethos-body">
                It's an old idea, and in a pilgrim town like Tirupati it's still a living one. We try
                to carry it into how we run Vistara Homes — a warm welcome whatever the hour, not
                just a stay for the night.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
