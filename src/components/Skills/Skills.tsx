import { RigidItem } from "@/constants";
import useSkillsRouting from "@/hooks/useSkillsRouting.tsx";

import Cloud from "@/components/Cloud/Cloud.tsx";
import Frame from "@/components/Frame/Frame.tsx";

const Skills = () => {
	useSkillsRouting();

	return (
		<Frame
			id={RigidItem.SKILLS}
			title={"Skills"}
			rotation={[0, 4.7, 0]}
			position={[-45, -15.5, 65]}>
			<group rotation={[10, 10.5, 10]}>
				<Cloud count={8} radius={20} />
			</group>
		</Frame>
	);
};

export default Skills;
