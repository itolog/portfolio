import { AdaptiveDpr, AdaptiveEvents, KeyboardControls, Stars } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import { Controls } from "@/constants";

import AppCanvas from "@/components/AppCanvas/AppCanvas.tsx";
import Ground from "@/components/Ground/Ground.tsx";
import HeroController from "@/components/HeroController/HeroController.tsx";
import HeroTitle from "@/components/HeroTitle/HeroTitle.tsx";
import Ipod from "@/components/Ipod/Ipod.tsx";
import SectionTooltip from "@/components/SectionTooltip/SectionTooltip.tsx";
import CommercialSkillsPortal from "@/components/Skills/components/portals/CommercialSkillsPortal/CommercialSkillsPortal.tsx";
import JustForFunSkillsPortal from "@/components/Skills/components/portals/JustForFunSkillsPortal/JustForFunSkillsPortal.tsx";
import GitLogo from "@/components/Social/GitLogo/GitLogo.tsx";
import LinkedinLogo from "@/components/Social/LinkedinLogo/LinkedinLogo.tsx";

const map = [
  { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
  { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
  { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
  { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
  { name: Controls.jump, keys: ["Space"] },
  { name: Controls.run, keys: ["Shift"] },
  { name: Controls.enter, keys: ["Enter"] },
  { name: Controls.cancel, keys: ["KeyR"] },
  { name: Controls.camera, keys: ["KeyE"] },
  { name: Controls.info, keys: ["KeyI"] },
];

const MainPage = () => {
  return (
    <AppCanvas>
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

      <Physics timeStep="vary">
        <ambientLight intensity={4} />
        <KeyboardControls map={map}>
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
    </AppCanvas>
  );
};

export default MainPage;
