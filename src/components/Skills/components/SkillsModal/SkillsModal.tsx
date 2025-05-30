import { a, config, useSpring } from "@react-spring/web";
import { TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useCallback, useMemo } from "react";

import BackToMainPageButton from "@/ui/BackToMainPageButton/BackToMainPageButton.tsx";

import { justForFun, skills } from "@/components/Skills/components/SkillsModal/data";
import SkillsWrapper from "@/components/Skills/components/SkillsWrapper/SkillsWrapper.tsx";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

import styles from "./skillsModal.module.scss";

const SkillsModal = () => {
  const skillsModal = createSelectors(useAppStore).use.skillsModal();
  const updateFrameVisibility = createSelectors(useAppStore).use.updateFrameVisibility();

  const handleCloseModal = useCallback(() => {
    updateFrameVisibility({
      open: false,
      type: null,
    });
  }, [updateFrameVisibility]);

  const words = useMemo(() => {
    if (skillsModal.type === "skills") {
      return skills;
    }

    return justForFun;
  }, [skillsModal]);

  const { size, ...rest } = useSpring({
    config: config.stiff,
    from: { size: "0%", opacity: 0 },
    to: {
      size: skillsModal.open ? "100%" : "0%",
      opacity: skillsModal.open ? 1 : 0,
    },
  });

  return (
    <a.div style={{ ...rest, width: size, height: size }} className={styles.skillsModal}>
      <div className={styles.back}>
        <BackToMainPageButton onClick={handleCloseModal} />
      </div>

      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <SkillsWrapper words={words} />
        <TrackballControls />
      </Canvas>
    </a.div>
  );
};

export default SkillsModal;
