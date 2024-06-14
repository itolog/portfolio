import { Center, KeyboardControls, Sky, Stars } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import { Controls, IS_DEV } from "@/constants";
import PerformanceMonitor from "@/utils/PerformanceMonitor/PerformanceMonitor.tsx";

import AppCanvas from "@/components/AppCanvas/AppCanvas.tsx";
import Ground from "@/components/Ground/Ground.tsx";
import HeroController from "@/components/HeroController/HeroController.tsx";
import HeroTitle from "@/components/HeroTitle/HeroTitle.tsx";
import Ipod from "@/components/Ipod/Ipod.tsx";
import JustForFun from "@/components/JustForFun/JustForFun.tsx";
import Rig from "@/components/Rig/Rig.tsx";
import Skills from "@/components/Skills/Skills.tsx";
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
];

const MainPage = () => {
	return (
		<AppCanvas>
			{IS_DEV && <PerformanceMonitor />}

			<Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
			<Sky />

			<Physics gravity={[0, -9.81, 0]}>
				<ambientLight intensity={4} />
				<KeyboardControls map={map}>
					<GitLogo />
					<LinkedinLogo />
					<Ipod />
					{/* SKILLS */}
					<Skills />
					<JustForFun />

					<HeroController />
				</KeyboardControls>

				{/*  TITLE */}
				<HeroTitle />
				<Rig />
				<Center>
					<Ground />
				</Center>
			</Physics>
		</AppCanvas>
	);
};

export default MainPage;
