import { DATA_STREAM_VALUES } from "../../config";
import styles from "./DataStream.module.css";

export default function DataStream() {
  return (
    <div className={styles.stream}>
      {DATA_STREAM_VALUES.map((val, i) => (
        <span key={i}>{val}</span>
      ))}
    </div>
  );
}
