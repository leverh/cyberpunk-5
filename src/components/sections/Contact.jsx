import { DEVELOPER } from "../../config";
import { Reveal, SectionHeader, ButtonPrimary, ButtonGhost } from "../ui";
import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <SectionHeader id="006" tag="OPEN CHANNEL" />

      <Reveal delay={1}>
        <h2 className={styles.title}>
          Open for
          <br />
          <em>transmission.</em>
        </h2>
      </Reveal>

      <Reveal delay={2}>
        <p className={styles.message}>
  Got a project that needs more than a template and a prayer?
  Tell us what you're building. We'll tell you if we can make it dangerous.
</p>
        <a href={`mailto:${DEVELOPER.email}`} className={styles.email}>
          {DEVELOPER.email}
        </a>
      </Reveal>

      <Reveal delay={3}>
        <div className={styles.buttons}>
          <ButtonGhost
  href={DEVELOPER.github}
  target="_blank"
  rel="noopener noreferrer"
>
  INTEL // GITHUB
</ButtonGhost>
<ButtonGhost
  href={DEVELOPER.linkedin}
  target="_blank"
  rel="noopener noreferrer"
>
  NETWORK // LINKEDIN
</ButtonGhost>
        </div>
      </Reveal>

      <Reveal delay={4}>
        <ContactForm />
      </Reveal>
    </section>
  );
}