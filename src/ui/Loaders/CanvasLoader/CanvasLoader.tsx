import { useProgress } from "@react-three/drei";
import { useMemo } from "react";

import cl from "clsx";

import { Keys } from "@/components/Help/Help.tsx";

import styles from "./styles.module.scss";

const radius = 70;

const CanvasLoader = () => {
  const { progress, active } = useProgress();

  const loading = useMemo(() => {
    const c = Math.PI * (radius * 2);

    return ((100 - progress) / 100) * c;
  }, [progress]);

  const rootClass = cl(styles.container, {
    [styles.containerHidden]: !active,
  });

  return (
    <div className={rootClass}>
      <div className={styles.containerProgressbars}>
        <div className={styles.progressbar}>
          <svg className={styles.progressbarSvg}>
            <circle
              cx="80"
              cy="80"
              r="70"
              strokeDashoffset={loading}
              className={`${styles.progressbarSvgCircle} ${styles.shadowScss}`}
            />
          </svg>

          <span className={`${styles.progressbarText} ${styles.shadowScss}`}>
            {parseInt(progress.toString())}%
          </span>
        </div>
      </div>

      <Keys />
    </div>
  );
};

export default CanvasLoader;
