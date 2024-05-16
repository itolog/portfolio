import { Text3D } from "@react-three/drei";

const rotationX = 0.3;
const rotationY = -Math.PI;
const fontUrl = "/fonts/rick_font.json";

const HeroTitle = () => {
	return (
		<group>
			<Text3D
				castShadow
				rotation-x={rotationX}
				rotation-y={rotationY}
				position={[6, 4, 6]}
				font={fontUrl}>
				Serhii Romanichenko
				<meshNormalMaterial />
			</Text3D>
			<Text3D
				castShadow
				rotation-x={rotationX}
				rotation-y={rotationY}
				position={[6, 2, 6]}
				font={fontUrl}>
				FrontEnd Developer
				<meshNormalMaterial />
			</Text3D>
		</group>
	);
};

export default HeroTitle;
