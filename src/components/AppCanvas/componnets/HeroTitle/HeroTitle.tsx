import { Text3D } from "@react-three/drei";

import { fontUrl } from "@/config";

const rotationX = -0.1;
const rotationY = 3.6;

const HeroTitle = () => {
	return (
		<group>
			<Text3D
				castShadow
				rotation-x={rotationX}
				rotation-y={rotationY}
				position={[-95, -5, 30]}
				font={fontUrl}>
				Serhii Romanichenko
				<meshNormalMaterial />
			</Text3D>
			<Text3D
				castShadow
				rotation-x={rotationX}
				rotation-y={rotationY}
				position={[-95, -7, 30]}
				font={fontUrl}>
				FrontEnd Developer
				<meshNormalMaterial />
			</Text3D>
		</group>
	);
};

export default HeroTitle;
