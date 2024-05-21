import { a, SpringValue } from "@react-spring/three";
import { Text3D } from "@react-three/drei";
import { FC, useMemo } from "react";

import { fontUrl } from "@/config";
import { addItemEvery } from "@/utils/lodash";

interface Props {
	text: string;
	vertical?: boolean;
	position?: [number, number, number];
	rotation?: [number, number, number];
	size?: 0.3;
	textVisible: SpringValue<boolean>;
	color: SpringValue<string>;
}

const PoText3D: FC<Props> = ({
	text,
	vertical = false,
	position,
	size = 0.25,
	rotation = [0, Math.PI, 0],
	textVisible = false,
	color,
}) => {
	const parsedText = useMemo(() => {
		if (vertical) {
			return addItemEvery(text, "\n", 1);
		} else {
			return text;
		}
	}, [text, vertical]);

	return (
		<Text3D
			size={size}
			rotation={rotation}
			position={position}
			receiveShadow
			castShadow
			font={fontUrl}>
			{parsedText}
			<a.meshStandardMaterial visible={textVisible} color={color} />
		</Text3D>
	);
};

export default PoText3D;
