import { useState, useEffect } from "react";
import { DEVELOPER } from "../../config";
import styles from "./StatusHud.module.css";

export default function StatusHud() {
  const [time, setTime] = useState("");
  const [userLocation, setUserLocation] = useState(DEVELOPER.location);

  useEffect(() => {
    // Clock
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);

    // User Location
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.city && data.region) {
          setUserLocation(`${data.city.toUpperCase()}, ${data.country_code}`);
        }
      })
      .catch(() => console.log("Location access blocked or failed."));

    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.hud}>
      <span className={styles.live}>● ONLINE</span>
      <span>{time}</span>
      {/* Displays user location if found, otherwise falls back to NYC */}
      <span>{userLocation}</span>
    </div>
  );
}