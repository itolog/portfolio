import {
	Center,
	CubeCamera,
	Environment,
	KeyboardControls,
	OrbitControls,
} from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

import { Controls, IS_DEV } from "@/constants";
import PerformanceMonitor from "@/utils/PerformanceMonitor/PerformanceMonitor.tsx";

import AppCanvas from "@/components/AppCanvas/AppCanvas.tsx";
import Fence from "@/components/AppCanvas/componnets/Fence/Fence.tsx";
import Ground from "@/components/AppCanvas/componnets/Ground/Ground.tsx";
import HeroController from "@/components/AppCanvas/componnets/HeroController/HeroController.tsx";
import SkyBox from "@/components/AppCanvas/componnets/SkyBox/SkyBox.tsx";

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
				<spotLight
					castShadow
					position={[0, 10, 10]}
					angle={0.15}
					penumbra={1}
					decay={0}
					intensity={Math.PI}
				/>
				<pointLight castShadow position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
				<KeyboardControls map={map}>
					<HeroController />
				</KeyboardControls>

				<RigidBody type={"fixed"} position={[-3, -0.3, 0]}>
					<mesh>
						<boxGeometry />
						<meshStandardMaterial />
					</mesh>
				</RigidBody>

				<Fence />

				<CubeCamera resolution={256} frames={Infinity}>
					{(texture) => (
						<>
							<Environment map={texture} />

							<Center>
								<Ground />
							</Center>
						</>
					)}
				</CubeCamera>
			</Physics>
		</AppCanvas>
	);
};

export default MainPage;
