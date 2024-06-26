import { Text3D } from "@react-three/drei";

import { fontUrl } from "@/config";

const rotationX = -0.1;
const rotationY = 3.5;

const HeroTitle = () => {
	return (
		<Text3D
			castShadow
			rotation-x={rotationX}
			rotation-y={rotationY}
			position={[-95, -5, 37]}
			font={fontUrl}>
			Serhii Romanichenko{"\n"}FrontEnd Developer
			<meshNormalMaterial />
		</Text3D>
	);
};

export default HeroTitle;
