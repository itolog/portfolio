import { Stars } from "@react-three/drei";

import useSkillsRouting from "@/hooks/useSkillsRouting.tsx";

import Frame from "@/components/Frame/Frame.tsx";

const Skills = () => {
	useSkillsRouting();

	return (
		<Frame id="skills" title={"Skills"} rotation={[0, 4.7, 0]} position={[-45, -15.5, 65]}>
			<Stars />
		</Frame>
	);
};

export default Skills;
