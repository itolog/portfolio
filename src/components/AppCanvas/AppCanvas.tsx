import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { lazy, Suspense } from "react";

import { keysMap } from "@/config";

import CanvasLoader from "@/ui/Loaders/CanvasLoader/CanvasLoader.tsx";
import PoLoader from "@/ui/Loaders/PoLoader/PoLoader.tsx";

import CanvasCommon from "@/components/AppCanvas/components/CanvasCommon/CanvasCommon";
import Ground from "@/components/Ground/Ground";
import HeroController from "@/components/HeroController/HeroController";
import HeroTitle from "@/components/HeroTitle/HeroTitle";
import Ipod from "@/components/Ipod/Ipod";
import SectionTooltip from "@/components/SectionTooltip/SectionTooltip";
import CommercialSkillsPortal from "@/components/Skills/components/portals/CommercialSkillsPortal/CommercialSkillsPortal";
import JustForFunSkillsPortal from "@/components/Skills/components/portals/JustForFunSkillsPortal/JustForFunSkillsPortal";
import GitLogo from "@/components/Social/GitLogo/GitLogo";
import LinkedinLogo from "@/components/Social/LinkedinLogo/LinkedinLogo";

const Joystick = lazy(() => import("@/components/Joystick/Joystick"));
const PoHint = lazy(() => import("@/components/PoHint/PoHint"));
const SkillsModal = lazy(() => import("@/components/Skills/components/SkillsModal/SkillsModal"));

const AppCanvas = () => {
  return (
    <div className={"app-canvas"}>
      <Suspense fallback={<PoLoader />}>
        <Joystick />
        <PoHint />
        <SkillsModal />
      </Suspense>

      <CanvasLoader />

      <Canvas>
        <CanvasCommon />
        <Physics timeStep="vary">
          <KeyboardControls map={keysMap}>
            <Suspense>
              <GitLogo />
              <LinkedinLogo />
              <Ipod />
              <Ground />
              <HeroController />
            </Suspense>

            <SectionTooltip text={"Social"} textSize={8} position={[-1, 13, -7]} />
            <SectionTooltip text={"Skills"} textSize={8} position={[35, 16, 17]} />

            {/* SKILLS */}
            <CommercialSkillsPortal />
            <JustForFunSkillsPortal />
            {/*  TITLE */}
            <HeroTitle />
          </KeyboardControls>
        </Physics>
      </Canvas>
    </div>
  );
};

export default AppCanvas;
