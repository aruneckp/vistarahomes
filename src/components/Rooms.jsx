import { rooms, amenities } from "../data/content";
import Spark from "./Spark";

export default function Rooms() {
  return (
    <section id="rooms" className="section rooms">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">
            <Spark size={12} color="var(--maroon)" />
            Rooms &amp; Stay
          </p>
          <h2>Choose the room that fits your group</h2>
          <p>
            Every category comes fully furnished and serviced. Larger groups usually split
            across two apartments on the same floor.
          </p>
        </div>

        <div className="rooms__grid">
          {rooms.map((room) => (
            <article key={room.id} className="room-card">
              <div className="room-card__image">
                <img src={room.image} alt={room.name} loading="lazy" />
              </div>
              <div className="room-card__body">
                <p className="room-card__tag">{room.tag}</p>
                <h3>{room.name}</h3>
                <p className="room-card__desc">{room.description}</p>
                <ul className="room-card__amenities">
                  {room.amenities.map((a) => (
                    <li key={a}>
                      <Spark size={9} color="var(--gold)" />
                      {a}
                    </li>
                  ))}
                </ul>
                <a href="#book" className="room-card__cta">
                  Enquire for this room &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="amenities-strip">
          <h3 className="amenities-strip__title">Every stay includes</h3>
          <div className="amenities-strip__grid">
            {amenities.map((a) => (
              <div key={a.label} className="amenities-strip__item">
                <Spark size={11} color="var(--maroon)" />
                <div>
                  <strong>{a.label}</strong>
                  <span>{a.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
