import useSkillsRouting from "@/hooks/useSkillsRouting.tsx";

import Frame from "@/components/Frame/Frame.tsx";
import { skills } from "@/components/Skills/components/SkillsModal/data";
import SkillsWrapper from "@/components/Skills/components/SkillsWrapper/SkillsWrapper.tsx";

const CommercialSkillsPortal = () => {
	useSkillsRouting();

	return (
		<Frame
			id="skills"
			title={"Skills"}
			description={"Commercial Experience"}
			rotation={[0, 4.7, 0]}
			position={[35, 2, 17]}>
			<group position={[80, 0, 15]}>
				<SkillsWrapper words={skills} />
			</group>
		</Frame>
	);
};

export default CommercialSkillsPortal;
