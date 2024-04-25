import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import DroidLab from "@/components/Models/DroidLab/DroidLab.tsx";

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

				<Center>
					<DroidLab />
				</Center>
			</Canvas>
		</Suspense>
	);
};

export default CanvasModel;
