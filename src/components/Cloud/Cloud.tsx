import { FC, useMemo } from "react";

import { Vector3 } from "three";

import Word from "@/components/Cloud/components/Word/Word.tsx";

interface Props {
	words: string[];
	radius: number;
}

const Cloud: FC<Props> = ({ words = [], radius = 20 }) => {
	const wordPositions = useMemo(() => {
		const temp = [];

		const phiSpan = Math.PI * (3 - Math.sqrt(5)); // golden angle
		for (let i = 0; i < words.length; i++) {
			const y = 1 - (i / (words.length - 1)) * 2; // y goes from 1 to -1
			const radiusAtY = Math.sqrt(1 - y * y); // radius at y
			const theta = phiSpan * i; // golden angle increment
			const x = Math.cos(theta) * radiusAtY;
			const z = Math.sin(theta) * radiusAtY;
			temp.push([new Vector3(x, y, z).multiplyScalar(radius), words[i]]);
		}
		return temp;
	}, [words, radius]);

	return wordPositions.map(([pos, word], index) => (
		<Word key={index} position={pos as Vector3}>
			{word}
		</Word>
	));
};

export default Cloud;
