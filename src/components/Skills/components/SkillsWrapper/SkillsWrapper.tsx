import { Center } from "@react-three/drei";
import { FC } from "react";

import { Skills } from "@/types";

import SkillsCloud from "@/components/Cloud/Cloud.tsx";
import ModalEnvironment from "@/components/Skills/components/SkillsModal/ModalEnvironment/ModalEnvironment.tsx";

interface Props {
	words: Skills;
}

const SkillsWrapper: FC<Props> = ({ words }) => {
	return (
		<Center>
			<ModalEnvironment />
			<group rotation={[10, 10.5, 10]}>
				<SkillsCloud words={words} radius={20} />
			</group>
		</Center>
	);
};

export default SkillsWrapper;
