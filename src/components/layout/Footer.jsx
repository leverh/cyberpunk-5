import { NAV_LINKS } from "../../config";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>[ EVER ]</div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} MADE BY EVER // HANDCRAFTED IN THE NET // ALL SYSTEMS NOMINAL
      </p>

      <ul className={styles.links}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li>
            <a href="/legal">Legal</a>
        </li>
      </ul>
    </footer>
  );
}