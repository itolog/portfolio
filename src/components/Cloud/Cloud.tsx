import { FC, useMemo } from "react";

import { Skill, Skills } from "@/types";
import { Vector3 } from "three";

import Word from "@/components/Cloud/components/Word/Word.tsx";

interface Props {
	words: Skills;
	radius: number;
}

type Temp = [Vector3, Skill][];

const Cloud: FC<Props> = ({ words = [], radius = 20 }) => {
	const wordPositions = useMemo(() => {
		const temp: Temp = [];

		const phiSpan = Math.PI * (3 - Math.sqrt(5));
		for (let i = 0; i < words.length; i++) {
			const y = 1 - (i / (words.length - 1)) * 2;
			const radiusAtY = Math.sqrt(1 - y * y);
			const theta = phiSpan * i;
			const x = Math.cos(theta) * radiusAtY;
			const z = Math.sin(theta) * radiusAtY;
			temp.push([new Vector3(x, y, z).multiplyScalar(radius), words[i]]);
		}
		return temp;
	}, [words, radius]);

	return wordPositions.map(([pos, item], index) => (
		<Word key={index} item={item} position={pos}>
			{item.name}
		</Word>
	));
};

export default Cloud;
