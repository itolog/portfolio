import { useProgress } from "@react-three/drei";
import { useEffect, useMemo } from "react";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

import styles from "./progressLoader.module.scss";

const radius = 40;

const ProgressLoader = () => {
  const { progress } = useProgress();
  const updateLoading = createSelectors(useAppStore).use.updateLoading();

  useEffect(() => {
    if (progress === 100) {
      updateLoading(false);
    } else {
      updateLoading(true);
    }
  }, [progress, updateLoading]);

  const loading = useMemo(() => {
    const c = Math.PI * (radius * 2);

    return ((100 - progress) / 100) * c;
  }, [progress]);

  return (
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
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressLoader;
