import { useScrollReveal } from "../../hooks";
import styles from "./Reveal.module.css";

/**
 * Wraps children in a scroll-triggered reveal animation.
 *
 * @param {object}  props
 * @param {number}  props.delay     — stagger index 0–5
 * @param {string}  props.className — additional class names
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useScrollReveal();
  const delayClass = delay ? styles[`d${delay}`] : "";

  return (
    <div ref={ref} className={`${styles.reveal} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
