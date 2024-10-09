import { useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";

import { RigidItem } from "@/constants";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

const useSkillsRouting = () => {
  const active = createSelectors(useAppStore).use.activeItem();

  const updateFrameVisibility = createSelectors(useAppStore).use.updateFrameVisibility();

  const [sub] = useKeyboardControls();

  useEffect(() => {
    return sub(
      (state) => state.enter,
      () => {
        if (active === RigidItem.SKILLS) {
          updateFrameVisibility({
            open: true,
            type: "skills",
          });
        }

        if (active === RigidItem.JUST_FOR_FUN) {
          updateFrameVisibility({
            open: true,
            type: "justForFun",
          });
        }
      },
    );
  }, [active, sub, updateFrameVisibility]);

  useEffect(() => {
    return sub(
      (state) => state.cancel,
      () => {
        updateFrameVisibility({
          open: false,
          type: null,
        });
      },
    );
  }, [sub, updateFrameVisibility]);
};

export default useSkillsRouting;
