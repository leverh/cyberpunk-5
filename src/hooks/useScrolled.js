import { useState, useEffect } from "react";

/**
 * Returns `true` once the user has scrolled past `offset` pixels.
 *
 * @param {number} offset — scroll threshold in pixels
 * @returns {boolean}
 */
export default function useScrolled(offset = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > offset);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [offset]);

  return scrolled;
}
