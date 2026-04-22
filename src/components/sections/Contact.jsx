import { DEVELOPER } from "../../config";
import { Reveal, SectionHeader, ButtonPrimary, ButtonGhost } from "../ui";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <SectionHeader id="004" tag="OPEN CHANNEL" />

      <Reveal delay={1}>
        <h2 className={styles.title}>
          Open for
          <br />
          <em>transmission.</em>
        </h2>
      </Reveal>

      <Reveal delay={2}>
        <p className={styles.message}>
          Got a contract worth taking? I'm available for freelance ops,
          full-time positions, and collaborations that push boundaries. Let's
          build something that matters.
        </p>
      </Reveal>

      <Reveal delay={3}>
        <div className={styles.buttons}>
          <ButtonPrimary href={`mailto:${DEVELOPER.email}`}>
            INITIATE CONTACT
          </ButtonPrimary>
          <ButtonGhost
            href={DEVELOPER.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </ButtonGhost>
          <ButtonGhost
            href={DEVELOPER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </ButtonGhost>
        </div>
      </Reveal>
    </section>
  );
}
