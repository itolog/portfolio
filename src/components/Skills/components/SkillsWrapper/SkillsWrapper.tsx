import { FC } from "react";

import { Skills } from "@/types";

import SkillsCloud from "@/components/Cloud/Cloud.tsx";
import ModalEnvironment from "@/components/Skills/components/SkillsModal/ModalEnvironment/ModalEnvironment.tsx";

interface Props {
	words: Skills;
}

const SkillsWrapper: FC<Props> = ({ words }) => {
	return (
		<>
			<ModalEnvironment />

			<SkillsCloud words={words} radius={20} />
		</>
	);
};

export default SkillsWrapper;
