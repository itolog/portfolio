import { useRapier } from "@react-three/rapier";
import { useEffect, useMemo } from "react";

const useCharacterController = () => {
  const { world } = useRapier();
  const characterController = useMemo(() => {
    const controller = world.createCharacterController(0.01);
    controller.setApplyImpulsesToDynamicBodies(true);
    controller.enableAutostep(5, 0.1, false);
    controller.enableSnapToGround(1);
    controller.setMaxSlopeClimbAngle((45 * Math.PI) / 180);
    controller.setMinSlopeSlideAngle((30 * Math.PI) / 180);

    return controller;
  }, [world]);

  useEffect(() => {
    return () => {
      world.removeCharacterController(characterController);
    };
  }, [characterController, world]);

  return {
    characterController,
    world,
  };
};

export default useCharacterController;
