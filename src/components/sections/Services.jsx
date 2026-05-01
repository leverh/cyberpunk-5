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
      <SectionHeader id="002" tag="AGENCY OPERATIONS" />

      <div className={styles.header}>
        <Reveal delay={1}>
          <h2 className={styles.title}>
  Agency
  <br />
  <em>operations.</em>
</h2>
        </Reveal>

        <Reveal delay={2}>
          <p className={styles.intro}>
  Every engagement is a custom incursion — scoped, executed, and 
  delivered without overhead. No packages. No retainers. Just results.
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