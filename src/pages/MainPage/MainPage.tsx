import {
	Center,
	CubeCamera,
	Environment,
	KeyboardControls,
	OrbitControls,
	PerspectiveCamera,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useMemo } from "react";

import { heroConfig } from "@/config";
import { Controls } from "@/constants";
import { useControls } from "leva";

import AppCanvas from "@/components/AppCanvas/AppCanvas.tsx";
import { Ground } from "@/components/AppCanvas/componnets/Ground/Ground.tsx";
import HeroController from "@/components/AppCanvas/componnets/HeroController/HeroController.tsx";
import SkyBox from "@/components/AppCanvas/componnets/SkyBox/SkyBox.tsx";

const MainPage = () => {
	const map = useMemo(
		() => [
			{ name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
			{ name: Controls.back, keys: ["ArrowDown", "KeyS"] },
			{ name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
			{ name: Controls.right, keys: ["ArrowRight", "KeyD"] },
			{ name: Controls.jump, keys: ["Space"] },
		],
		[],
	);

	const { cameraPos, near, far, fov } = useControls("options", {
		near: heroConfig.cameraConfig.near,
		far: heroConfig.cameraConfig.far,
		cameraPos: heroConfig.cameraConfig.cameraPosition,
		fov: heroConfig.cameraConfig.fov,
	});

	return (
		<KeyboardControls map={map}>
			<AppCanvas>
				<PerspectiveCamera makeDefault fov={fov} near={near} far={far} position={cameraPos} />
				<SkyBox />
				<Physics gravity={[0, -9.81, 0]} debug>
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
					<HeroController />
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
		</KeyboardControls>
	);
};

export default MainPage;
