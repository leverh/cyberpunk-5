import { DEVELOPER, STATS, ABOUT_CARDS } from "../../config";
import { Reveal, SectionHeader } from "../ui";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <SectionHeader id="001" tag="AGENCY DOSSIER" />

      <Reveal delay={1}>
        <h2 className={styles.title}>
  Engineered for
  <br />
  <em>dark terrain.</em>
</h2>
      </Reveal>

      <div className={styles.grid}>
        {/* ── Left: bio + terminal ── */}
        <Reveal delay={2}>
          <div className={styles.text}>
            <p>{DEVELOPER.bio}</p>
            <p>{DEVELOPER.extendedBio}</p>

            <div className={styles.terminal}>
  <span className={styles.tYellow}>$</span> cat agency.log
  <br />
  <span className={styles.tTeal}>BASE:</span>{" "}
  {DEVELOPER.location}
  <br />
  <span className={styles.tTeal}>STATUS:</span>{" "}
  <span className={styles.tYellow}>{DEVELOPER.status}</span>
  <br />
  <span className={styles.tTeal}>CLEARANCE:</span> LEVEL 5 — NEED TO KNOW
  <br />
  <span className={styles.tTeal}>UPTIME:</span> 99.97%
  <br />
  <span className={styles.tRed}>WARNING:</span> YOUR BRAND DESERVES BETTER THAN AVERAGE
</div>
          </div>
        </Reveal>

        {/* ── Right: info cards ── */}
        <Reveal delay={3}>
          <div className={styles.cards}>
            {ABOUT_CARDS.map((card) => (
              <div key={card.label} className={styles.card}>
                <div className={styles.cardLabel}>{card.label}</div>
                <div className={styles.cardValue}>{card.value}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ── Stats row ── */}
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