import { Physics } from "@react-three/cannon";
import { Center, CubeCamera, Environment, OrbitControls } from "@react-three/drei";

import { IS_DEV } from "@/constants";
import PerformanceMonitor from "@/utils/PerformanceMonitor/PerformanceMonitor.tsx";

import AppCanvas from "@/components/AppCanvas/AppCanvas.tsx";
import DroidLab from "@/components/AppCanvas/componnets/DroidLab/DroidLab.tsx";
import Hero from "@/components/AppCanvas/componnets/Hero/Hero.tsx";
// import Rings from "@/components/AppCanvas/componnets/Rings/Rings.tsx";
import SkyBox from "@/components/AppCanvas/componnets/SkyBox/SkyBox.tsx";

const MainPage = () => {
	return (
		<AppCanvas>
			{IS_DEV && <PerformanceMonitor />}
			<SkyBox />
			<Physics>
				<OrbitControls target={[0, 0.35, 1]} maxPolarAngle={1.45} minZoom={1} />
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
				{/* <Rings /> */}
				<Hero />

				<CubeCamera resolution={256} frames={Infinity}>
					{(texture) => (
						<>
							<Environment map={texture} />

							<Center>
								<DroidLab />
							</Center>
						</>
					)}
				</CubeCamera>
			</Physics>
		</AppCanvas>
	);
};

export default MainPage;
