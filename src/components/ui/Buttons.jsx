import styles from "./Buttons.module.css";

export function ButtonPrimary({ href, children, ...rest }) {
  return (
    <a href={href} className={styles.primary} {...rest}>
      {children}
    </a>
  );
}

export function ButtonGhost({ href, children, dot = false, ...rest }) {
  return (
    <a href={href} className={styles.ghost} {...rest}>
      {dot && <span className={styles.dot} />}
      {children}
    </a>
  );
}
