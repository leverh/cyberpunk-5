import { DEVELOPER, STATS } from "../../config";
import { Reveal, SectionHeader } from "../ui";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <SectionHeader id="001" tag="IDENTITY VERIFIED" />

      <Reveal delay={1}>
        <h2 className={styles.title}>
          Architect of
          <br />
          <em>digital realities.</em>
        </h2>
      </Reveal>

      <div className={styles.grid}>
        <Reveal delay={2}>
          <div className={styles.text}>
            <p>{DEVELOPER.bio}</p>
            <p>{DEVELOPER.extendedBio}</p>

            <div className={styles.terminal}>
              <span className={styles.tYellow}>$</span> cat status.log
              <br />
              <span className={styles.tTeal}>LOCATION:</span>{" "}
              {DEVELOPER.location}
              <br />
              <span className={styles.tTeal}>STATUS:</span>{" "}
              <span className={styles.tYellow}>{DEVELOPER.status}</span>
              <br />
              <span className={styles.tTeal}>CLEARANCE:</span> LEVEL 5
              <br />
              <span className={styles.tTeal}>UPTIME:</span> 99.97%
              <br />
              <span className={styles.tRed}>WARNING:</span> YOUR WEBSITE DESERVES MORE THAN A TEMPLATE
            </div>
          </div>
        </Reveal>

        <Reveal delay={3}>
          <div className={styles.portrait}>
            <div className={`${styles.corner} ${styles.cornerTl}`} />
            <div className={`${styles.corner} ${styles.cornerTr}`} />
            <div className={`${styles.corner} ${styles.cornerBl}`} />
            <div className={`${styles.corner} ${styles.cornerBr}`} />
            <img src={DEVELOPER.portraitImg} alt="Developer" loading="lazy" />
          </div>
        </Reveal>
      </div>

      <Reveal delay={4}>
        <div className={styles.statsRow}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statCell}>
              <div className={styles.statVal}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
