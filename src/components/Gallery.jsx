import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "../data/content";
import Spark from "./Spark";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length),
    []
  );
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % gallery.length), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, prev, next]);

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">
            <Spark size={12} color="var(--maroon)" />
            Gallery
          </p>
          <h2>The property, space by space</h2>
          <p>A closer look before you book — tap any photo to see it full size.</p>
        </div>

        <div className="gallery__grid">
          {gallery.map((item, i) => (
            <button
              key={item.src}
              className={`gallery__cell gallery__cell--${i % 6}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Open photo: ${item.caption}`}
            >
              <img src={item.src} alt={item.caption} loading="lazy" />
              <span className="gallery__cell-caption">{item.caption}</span>
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
          <button className="lightbox__close" onClick={close} aria-label="Close">
            <X size={26} />
          </button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Previous photo">
            <ChevronLeft size={30} />
          </button>

          <figure className="lightbox__figure">
            <img src={gallery[activeIndex].src} alt={gallery[activeIndex].caption} />
            <figcaption>
              {gallery[activeIndex].caption} &middot; {activeIndex + 1} / {gallery.length}
            </figcaption>
          </figure>

          <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Next photo">
            <ChevronRight size={30} />
          </button>
          <button className="lightbox__backdrop" onClick={close} aria-label="Close photo viewer" />
        </div>
      )}
    </section>
  );
}
