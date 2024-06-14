import { Sky, Text } from "@react-three/drei";

import { fontBaseUrl } from "@/config";
import { RigidItem } from "@/constants";
import useSkillsRouting from "@/hooks/useSkillsRouting.tsx";

import Frame from "@/components/Frame/Frame.tsx";

const JustForFun = () => {
	useSkillsRouting();

	return (
		<Frame
			id={RigidItem.JUST_FOR_FUN}
			fontSize={0.15}
			title={"Just for fun"}
			rotation={[0, 4.7, 0]}
			fontColor={"#080a01"}
			position={[-45, -15.5, 70]}>
			<Sky />
			<Text font={fontBaseUrl} fontSize={3} letterSpacing={-0.06}>
				JustForFun
			</Text>
		</Frame>
	);
};

export default JustForFun;
