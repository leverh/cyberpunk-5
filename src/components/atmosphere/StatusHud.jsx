import { useState, useEffect } from "react";
import { DEVELOPER } from "../../config";
import styles from "./StatusHud.module.css";

export default function StatusHud() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.hud}>
      <span className={styles.live}>● ONLINE</span>
      <span>{time}</span>
      <span>{DEVELOPER.location}</span>
    </div>
  );
}
