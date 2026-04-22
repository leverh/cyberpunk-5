import { useRef, useEffect } from "react";

/**
 * Adds a "vis" class to the element when it enters the viewport.
 * Used for scroll-triggered reveal animations.
 *
 * @param {number} threshold — IntersectionObserver threshold (0–1)
 * @returns {React.RefObject}
 */
export default function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("vis");
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}
