import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";

import { keysMap } from "@/config";
import Loader from "@/UI/Loader/Loader";

import CanvasCommon from "@/components/AppCanvas/components/CanvasCommon/CanvasCommon.tsx";
import Ground from "@/components/Ground/Ground";
import HeroController from "@/components/HeroController/HeroController";
import HeroTitle from "@/components/HeroTitle/HeroTitle";
import Ipod from "@/components/Ipod/Ipod.tsx";
import Joystick from "@/components/Joystick/Joystick.tsx";
import PoHint from "@/components/PoHint/PoHint.tsx";
import SectionTooltip from "@/components/SectionTooltip/SectionTooltip";
import CommercialSkillsPortal from "@/components/Skills/components/portals/CommercialSkillsPortal/CommercialSkillsPortal.tsx";
import JustForFunSkillsPortal from "@/components/Skills/components/portals/JustForFunSkillsPortal/JustForFunSkillsPortal.tsx";
import SkillsModal from "@/components/Skills/components/SkillsModal/SkillsModal.tsx";
import GitLogo from "@/components/Social/GitLogo/GitLogo.tsx";
import LinkedinLogo from "@/components/Social/LinkedinLogo/LinkedinLogo.tsx";

const AppCanvas = () => {
  return (
    <div className={"app-canvas"}>
      <Joystick />
      <PoHint />
      <SkillsModal />

      <Suspense fallback={<Loader />}>
        <Canvas>
          <CanvasCommon />
          <Physics timeStep="vary">
            <KeyboardControls map={keysMap}>
              <GitLogo />
              <LinkedinLogo />
              <Ipod />
              {/* SKILLS */}
              <CommercialSkillsPortal />
              <JustForFunSkillsPortal />

              <HeroController />
            </KeyboardControls>

            <SectionTooltip text={"Social"} textSize={8} position={[-1, 13, -7]} />
            <SectionTooltip text={"Skills"} textSize={8} position={[35, 16, 17]} />

            {/*  TITLE */}
            <HeroTitle />
            <Ground />
          </Physics>
        </Canvas>
      </Suspense>
    </div>
  );
};

export default AppCanvas;
