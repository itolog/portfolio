import { Text3D } from "@react-three/drei";

import { fontUrl } from "@/config";
import { RigidItem } from "@/constants";
import useSkillsRouting from "@/hooks/useSkillsRouting.tsx";

import Frame from "@/components/Frame/Frame.tsx";

const Skills = () => {
	useSkillsRouting();

	return (
		<Frame
			id={RigidItem.SKILLS}
			title={"Skills"}
			rotation={[0, 4.7, 0]}
			position={[-45, -15.5, 65]}>
			<Text3D position={[0, 0, 1]} font={fontUrl}>
				Skills
				<meshNormalMaterial />
			</Text3D>
		</Frame>
	);
};

export default Skills;
