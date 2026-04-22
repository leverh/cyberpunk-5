import Reveal from "./Reveal";
import styles from "./SectionHeader.module.css";

/**
 * Numbered section header with decorative scan-line.
 *
 * @param {object} props
 * @param {string} props.id   — e.g. "001"
 * @param {string} props.tag  — e.g. "IDENTITY VERIFIED"
 */
export default function SectionHeader({ id, tag }) {
  return (
    <Reveal>
      <div className={styles.header}>
        <span className={styles.id}>{id}</span>
        <div className={styles.line} />
        <span className={styles.tag}>{tag}</span>
      </div>
    </Reveal>
  );
}
