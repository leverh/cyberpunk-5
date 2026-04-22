import { useState, useEffect } from "react";

/**
 * Typewriter effect — reveals `text` one character at a time.
 *
 * @param {string}  text  — full string to type out
 * @param {number}  speed — ms between characters
 * @param {number}  wait  — initial delay before typing starts
 * @returns {string} — the portion of text revealed so far
 */
export default function useTyping(text, speed = 38, wait = 700) {
  const [output, setOutput] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), wait);
    return () => clearTimeout(t);
  }, [wait]);

  useEffect(() => {
    if (!started || output.length >= text.length) return;
    const t = setTimeout(
      () => setOutput(text.slice(0, output.length + 1)),
      speed
    );
    return () => clearTimeout(t);
  }, [output, started, text, speed]);

  return output;
}
