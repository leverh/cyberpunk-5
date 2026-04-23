import { PROCESS_STEPS } from "../../config";
import { Reveal, SectionHeader } from "../ui";
import styles from "./Process.module.css";

function ProcessStep({ num, name, desc }) {
  return (
    <div className={styles.step}>
      <div className={styles.dotWrap}>
        <div className={styles.dot}>{num}</div>
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
}

export default function Process() {
  return (
    <section className={styles.section} id="process">
      <SectionHeader id="003" tag="BUILD SEQUENCE" />

      <Reveal delay={1}>
        <h2 className={styles.title}>
          From signal
          <br />
          <em>to launch.</em>
        </h2>
      </Reveal>

      <Reveal delay={2}>
        <p className={styles.intro}>
          A clear build sequence from first brief to finished deployment. No
          surprises — you always know where we are in the process.
        </p>
      </Reveal>

      <Reveal delay={3}>
        <div className={styles.steps}>
          <div className={styles.connector} />
          {PROCESS_STEPS.map((s) => (
            <ProcessStep key={s.num} {...s} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}