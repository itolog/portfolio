import { Center, KeyboardControls, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import { Controls, IS_DEV } from "@/constants";
import PerformanceMonitor from "@/utils/PerformanceMonitor/PerformanceMonitor.tsx";

import AppCanvas from "@/components/AppCanvas/AppCanvas.tsx";
import Fence from "@/components/AppCanvas/componnets/Fence/Fence.tsx";
import Ground from "@/components/AppCanvas/componnets/Ground/Ground.tsx";
import HeroController from "@/components/AppCanvas/componnets/HeroController/HeroController.tsx";
import HeroTitle from "@/components/AppCanvas/componnets/HeroTitle/HeroTitle.tsx";
import SkyBox from "@/components/AppCanvas/componnets/SkyBox/SkyBox.tsx";
import GitLogo from "@/components/AppCanvas/componnets/Social/GitLogo/GitLogo.tsx";
import LinkedinLogo from "@/components/AppCanvas/componnets/Social/LinkedinLogo/LinkedinLogo.tsx";

const map = [
	{ name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
	{ name: Controls.back, keys: ["ArrowDown", "KeyS"] },
	{ name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
	{ name: Controls.right, keys: ["ArrowRight", "KeyD"] },
	{ name: Controls.jump, keys: ["Space"] },
	{ name: Controls.run, keys: ["Shift"] },
];

const MainPage = () => {
	return (
		<AppCanvas>
			{IS_DEV && <PerformanceMonitor />}
			<SkyBox />

			<Physics gravity={[0, -9.81, 0]}>
				<OrbitControls target={[1, 0.3, 1]} maxPolarAngle={1.45} minZoom={1} />
				<ambientLight intensity={3} />
				<PerspectiveCamera makeDefault fov={95} near={0.1} far={75} position={[0, 5, 0]} />
				<KeyboardControls map={map}>
					<HeroController />
				</KeyboardControls>

				<Fence />

				<GitLogo />
				<LinkedinLogo />

				<HeroTitle />

				<Center>
					<Ground />
				</Center>
			</Physics>
		</AppCanvas>
	);
};

export default MainPage;
