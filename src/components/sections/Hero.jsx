import { DEVELOPER } from "../../config";
import { useTyping } from "../../hooks";
import { ButtonPrimary, ButtonGhost } from "../ui";
import styles from "./Hero.module.css";

export default function Hero() {
  const typed = useTyping(DEVELOPER.role, 40, 900);
  const isTyping = typed.length < DEVELOPER.role.length;

  return (
    <section className={styles.hero}>
      <div className={styles.overline}>{DEVELOPER.handle}</div>

      <h1 className={styles.name} data-text={DEVELOPER.name}>
        {DEVELOPER.name}
      </h1>

      <p className={styles.sub}>
        <span className={styles.typed}>
          {typed}
          {isTyping && <span className={styles.cursor}>█</span>}
        </span>
        <br />
        <br />
        {DEVELOPER.bio}
      </p>

      <div className={styles.ctaRow}>
        <ButtonPrimary href="#projects">
  VIEW OPERATIONS
</ButtonPrimary>
<ButtonGhost href="#contact" dot>
  INITIATE CONTACT
</ButtonGhost>
      </div>

      <div className={styles.scrollPrompt}>
        <div className={styles.scrollLine} />
        <span>SCROLL TO INFILTRATE</span>
      </div>
    </section>
  );
}
