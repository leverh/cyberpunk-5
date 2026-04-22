import styles from "./HudCorners.module.css";

const CORNERS = ["tl", "tr", "bl", "br"];
const STROKE = "rgba(252,238,10,0.15)";

export default function HudCorners() {
  return (
    <>
      {CORNERS.map((pos) => {
        const flipX = pos.includes("r") ? -1 : 1;
        const flipY = pos.includes("b") ? -1 : 1;
        return (
          <div key={pos} className={`${styles.corner} ${styles[pos]}`}>
            <svg viewBox="0 0 60 60" fill="none" width="60" height="60">
              <path
                d={`M${flipX === 1 ? 0 : 60} ${flipY === 1 ? 0 : 60} L${flipX === 1 ? 24 : 36} ${flipY === 1 ? 0 : 60} M${flipX === 1 ? 0 : 60} ${flipY === 1 ? 0 : 60} L${flipX === 1 ? 0 : 60} ${flipY === 1 ? 24 : 36}`}
                stroke={STROKE}
                strokeWidth="1"
              />
            </svg>
          </div>
        );
      })}
    </>
  );
}
