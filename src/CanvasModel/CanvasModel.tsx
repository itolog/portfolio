import { Center, CubeCamera, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import DroidLab from "@/components/DroidLab/DroidLab.tsx";
// import CanvasEffects from "@/components/effects/CanvasEffects/CanvasEffects.tsx";
import Rings from "@/components/Rings/Rings.tsx";

const CanvasModel = () => {
	return (
		<Suspense fallback={"...loading"}>
			<Canvas shadows>
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
				<Rings />
				{/* <CanvasEffects /> */}
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
			</Canvas>
		</Suspense>
	);
};

export default CanvasModel;
