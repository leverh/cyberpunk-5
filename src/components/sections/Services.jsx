import { SERVICES } from "../../config";
import { Reveal, SectionHeader } from "../ui";
import styles from "./Services.module.css";

function ServiceCard({ num, name, desc }) {
  return (
    <div className={styles.card}>
      <div className={styles.num}>{num}</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.desc}>{desc}</div>
      <div className={styles.arrow}>↗</div>
      <div className={styles.fill} />
    </div>
  );
}

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <SectionHeader id="002" tag="SYSTEM CAPABILITIES" />

      <div className={styles.header}>
        <Reveal delay={1}>
          <h2 className={styles.title}>
            Services
            <br />
            <em>offered.</em>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p className={styles.intro}>
            Every engagement is custom — no packages, no upsells. You get
            exactly what your business needs, built to last.
          </p>
        </Reveal>
      </div>

      <Reveal delay={3}>
        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}