import styles from "./Overlays.module.css";

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
