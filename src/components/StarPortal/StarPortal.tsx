import { Sparkles } from "@react-three/drei";
import { FC } from "react";

interface Props {
	scale?: number;
	position?: [number, number, number];
	color: string;
}

const StarPortal: FC<Props> = ({ scale, position, color }) => {
	return (
		<group position={position} scale={scale}>
			<Sparkles count={20} color={color} size={6} speed={0.8} />
		</group>
	);
};

export default StarPortal;
