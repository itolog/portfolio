import { FC, useMemo } from "react";

import { generate } from "random-words";
import { Spherical, Vector3 } from "three";

import Word from "@/components/Cloud/components/Word/Word.tsx";

interface Props {
	count: number;
	radius: number;
}

const Cloud: FC<Props> = ({ count = 4, radius = 20 }) => {
	const words = useMemo(() => {
		const temp = [];
		const spherical = new Spherical();
		const phiSpan = Math.PI / (count + 1);
		const thetaSpan = (Math.PI * 2) / count;
		for (let i = 1; i < count + 1; i++)
			for (let j = 0; j < count; j++)
				temp.push([
					new Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)),
					generate(),
				]);
		return temp;
	}, [count, radius]);
	return words.map(([pos, word], index) => {
		return (
			<Word key={index} position={pos as Vector3}>
				{word}
			</Word>
		);
	});
};

export default Cloud;
