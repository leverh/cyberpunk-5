import { DEVELOPER } from "../../config";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
  © {new Date().getFullYear()} MADE BY EVER // HANDCRAFTED IN THE NET // ALL SYSTEMS NOMINAL
</p>
    </footer>
  );
}
