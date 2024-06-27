import useSkillsRouting from "@/hooks/useSkillsRouting.tsx";

import Frame from "@/components/Frame/Frame.tsx";
import { justForFun } from "@/components/Skills/components/SkillsModal/data";
import SkillsWrapper from "@/components/Skills/components/SkillsWrapper/SkillsWrapper.tsx";

const JustForFunSkillsPortal = () => {
	useSkillsRouting();

	return (
		<Frame
			id={"justForFun"}
			fontSize={0.15}
			title={"Just for fun"}
			description={"Pet Projects"}
			rotation={[0, 4.7, 0]}
			position={[-45, -15.5, 70]}>
			<group position={[40, -15, 70]}>
				<SkillsWrapper words={justForFun} />
			</group>
		</Frame>
	);
};

export default JustForFunSkillsPortal;
