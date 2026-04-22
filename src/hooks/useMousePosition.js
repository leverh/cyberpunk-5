import { useState, useEffect } from "react";

/**
 * Tracks the mouse position across the viewport.
 *
 * @returns {{ x: number, y: number }}
 */
export default function useMousePosition() {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handler = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return pos;
}
