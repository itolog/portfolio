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
			position={[-45, -15.5, 65]}>
			<group position={[40, -15, 70]}>
				<SkillsWrapper words={skills} />
			</group>
		</Frame>
	);
};

export default CommercialSkillsPortal;
