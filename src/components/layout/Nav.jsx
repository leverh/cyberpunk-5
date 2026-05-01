import { useState, useEffect } from "react";
import { useScrolled } from "../../hooks";
import { NAV_LINKS } from "../../config";
import styles from "./Nav.module.css";

export default function Nav() {
  const stuck = useScrolled(80);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${stuck ? styles.stuck : ""} ${open ? styles.overlayOpen : ""}`}>
        <a href="#top" className={styles.brand}>
          [ GTC ]
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.navRight}>
          {/* Availability — hidden on mobile */}
          <div className={styles.status}>
            <span className={styles.dot} />
            ACCEPTING CONTRACTS
          </div>

          {/* Mobile menu trigger */}
          <button
            className={styles.trigger}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "[ × ]" : "[ // ]"}
          </button>
        </div>
      </nav>

      {/* Full-screen overlay */}
      <div className={`${styles.overlay} ${open ? styles.overlayVisible : ""}`}>
        {/* Scanline effect */}
        <div className={styles.scanlines} />

        <div className={styles.overlayInner}>
          <ul className={styles.overlayLinks}>
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className={styles.overlayItem}
                style={{ "--i": i }}
              >
                <a href={link.href} onClick={handleLinkClick}>
                  <span className={styles.overlayNum}>0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.overlayFooter}>
            <span className={styles.dot} />
            <span className={styles.overlayStatus}>Accepting contracts</span>
          </div>
        </div>
      </div>
    </>
  );
}