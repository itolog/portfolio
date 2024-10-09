import styles from "./help.module.scss";

const controlOptions = [
  { keys: ["↑", "W"], action: "Forward" },
  { keys: ["←", "A"], action: "Left" },
  { keys: ["→", "D"], action: "Right" },
  { keys: ["↓", "S"], action: "Backward" },
  { keys: ["Enter"], action: "Action" },
  { keys: ["Space"], action: "Jump" },
  { keys: ["Shift"], action: "Turbo Boost" },
  { keys: ["R"], action: "Cancel/Back" },
  { keys: ["E"], action: "Change camera mode" },
  { keys: ["I"], action: "Info" },
];

export function Keys(): JSX.Element {
  return (
    <div className={styles.keysContainer}>
      {controlOptions.map(({ keys, action }) => (
        <div className={styles.popupItem} key={action}>
          <div className={styles.action}>{action}</div>
          <div className={styles.popupItemKeys}>
            {keys.map((key) => (
              <span className={styles.popupItemKey} key={key}>
                <span>{key}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
