import { useScrolled } from "../../hooks";
import { NAV_LINKS } from "../../config";
import styles from "./Nav.module.css";

export default function Nav() {
  const stuck = useScrolled(80);

  return (
    <nav className={`${styles.nav} ${stuck ? styles.stuck : ""}`}>
      <a href="#top" className={styles.brand}>
        [ EVER ]
      </a>
      <ul className={styles.links}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
