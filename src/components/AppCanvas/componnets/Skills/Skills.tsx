import { Stars, Text } from "@react-three/drei";

import { fontBaseUrl } from "@/config";

import Frame from "@/components/AppCanvas/componnets/Frame/Frame.tsx";

const Skills = () => {
	return (
		<Frame id={"1"} title={"Skills"} position={[1, 1, 5]}>
			<Stars />
			<Text font={fontBaseUrl} fontSize={3} letterSpacing={-0.06}>
				Skills
			</Text>
		</Frame>
	);
};

export default Skills;
