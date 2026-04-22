import { useMousePosition } from "../../hooks";
import styles from "./MouseGlow.module.css";

export default function MouseGlow() {
  const { x, y } = useMousePosition();
  return <div className={styles.glow} style={{ left: x, top: y }} />;
}
