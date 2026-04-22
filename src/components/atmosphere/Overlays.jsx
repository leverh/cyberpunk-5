import styles from "./Overlays.module.css";

/**
 * Fixed atmospheric overlays that sit on top of the viewport.
 * All are pointer-events: none so they don't block interaction.
 */
export default function Overlays() {
  return (
    <>
      <div className={styles.grid} />
      <div className={styles.scanlines} />
      <div className={styles.vignette} />
      <div className={styles.noise} />
      <div className={styles.glitchFlash} />
      <div className={styles.crtLine} />
    </>
  );
}
