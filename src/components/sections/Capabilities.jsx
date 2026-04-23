import { useRef, useState, useEffect } from "react";
import { CAPABILITIES } from "../../config";
import { Reveal, SectionHeader } from "../ui";
import styles from "./Capabilities.module.css";

function CapItem({ label, cat }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.item} ${vis ? styles.itemVis : ""}`}
    >
      <div className={styles.fill} />
      <span className={styles.cat}>{cat}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default function Capabilities() {
  return (
    <section className={styles.section} id="capabilities">
      <SectionHeader id="004" tag="CYBERWARE SCAN" />

      <Reveal delay={1}>
        <h2 className={styles.title}>
          Technical
          <br />
          <em>arsenal.</em>
        </h2>
      </Reveal>

      <div className={styles.grid}>
        {CAPABILITIES.map((c) => (
          <CapItem key={c.label} {...c} />
        ))}
      </div>
    </section>
  );
}