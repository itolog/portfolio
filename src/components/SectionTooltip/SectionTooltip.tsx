import { Text3D } from "@react-three/drei";
import { FC } from "react";

import { fontUrl } from "@/config";

import Arrow from "@/components/Arrow/Arrow.tsx";

interface Props {
	position: [number, number, number];
	scale?: number;
	text: string;
	textSize?: number;
	arrowRotation?: [number, number, number];
}

const SectionTooltip: FC<Props> = ({
	arrowRotation = [1.55, 1.52, 0],
	position,
	scale = 0.2,
	text,
	textSize = 3,
}) => {
	return (
		<group position={position} scale={scale}>
			<Text3D size={textSize} castShadow rotation-y={Math.PI} position={[2, 10, 0]} font={fontUrl}>
				{text}
				<meshStandardMaterial color={"#25c2c2"} />
			</Text3D>

			<Arrow rotation={arrowRotation} />
		</group>
	);
};

export default SectionTooltip;
