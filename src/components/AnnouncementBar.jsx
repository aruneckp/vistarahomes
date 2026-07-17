import { X } from "lucide-react";
import Spark from "./Spark";

export default function AnnouncementBar({ onClose }) {
  return (
    <div className="announcement-bar">
      <p>
        <Spark size={10} color="var(--gold-soft)" />
        Planning your Tirumala darshan? Book early for a guaranteed stay in peak season.
      </p>
      <button onClick={onClose} aria-label="Dismiss announcement">
        <X size={15} />
      </button>
    </div>
  );
}
