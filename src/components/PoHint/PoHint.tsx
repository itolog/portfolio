import { a, config, useSpring } from "@react-spring/web";

import SvgIcons from "@/UI/SvgIcon/SvgIcons.tsx";

import useHint from "@/components/PoHint/hooks/useHint.tsx";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

import styles from "./poHint.module.scss";

const PoHint = () => {
  const isLoading = createSelectors(useAppStore).use.isLoading();

  const { cameraUpdated, hintText } = useHint();

  const { size, ...rest } = useSpring({
    config: config.stiff,
    from: { size: "30px" },
    to: {
      size: hintText || cameraUpdated ? "320px" : "30px",
    },
  });

  const { x } = useSpring({
    from: { x: 0 },
    x: hintText || cameraUpdated ? 1 : 0,
    config: { duration: 1000 },
  });

  if (isLoading) return null;

  return (
    <a.div style={{ ...rest, width: size }} className={styles.hint}>
      <a.div className={styles.container}>
        <SvgIcons
          classes={{
            root: styles.icon,
          }}
          size={"24px"}
          name={"info"}
        />

        <a.span
          className={styles.text}
          style={{
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1, 0.9, 1],
            }),
          }}>
          {hintText}
        </a.span>
      </a.div>
    </a.div>
  );
};

export default PoHint;
