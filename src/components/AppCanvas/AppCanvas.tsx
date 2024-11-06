import { AdaptiveDpr, AdaptiveEvents, KeyboardControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { lazy, Suspense } from "react";

import { keysMap } from "@/config";
import Loader from "@/UI/Loader/Loader";
import PerformanceMonitor from "@/utils/PerformanceMonitor/PerformanceMonitor.tsx";

import Ground from "@/components/Ground/Ground";
import HeroController from "@/components/HeroController/HeroController";
import HeroTitle from "@/components/HeroTitle/HeroTitle";
import SectionTooltip from "@/components/SectionTooltip/SectionTooltip";

const PoHint = lazy(() => import("@/components/PoHint/PoHint"));
const Joystick = lazy(() => import("@/components/Joystick/Joystick"));
const SkillsModal = lazy(() => import("@/components/Skills/components/SkillsModal/SkillsModal"));
const GitLogo = lazy(() => import("@/components/Social/GitLogo/GitLogo"));
const LinkedinLogo = lazy(() => import("@/components/Social/LinkedinLogo/LinkedinLogo"));
const Ipod = lazy(() => import("@/components/Ipod/Ipod"));
const CommercialSkillsPortal = lazy(
  () =>
    import("@/components/Skills/components/portals/CommercialSkillsPortal/CommercialSkillsPortal"),
);
const JustForFunSkillsPortal = lazy(
  () =>
    import("@/components/Skills/components/portals/JustForFunSkillsPortal/JustForFunSkillsPortal"),
);

const AppCanvas = () => {
  return (
    <div className={"app-canvas"}>
      <Suspense fallback={null}>
        <Joystick />
        <PoHint />
        <SkillsModal />
      </Suspense>

      <Loader />

      <Canvas>
        <PerformanceMonitor />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <ambientLight intensity={4} />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade />

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
    </div>
  );
};

export default AppCanvas;
