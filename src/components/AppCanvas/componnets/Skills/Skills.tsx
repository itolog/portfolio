import { Text3D } from "@react-three/drei";

import { fontUrl } from "@/config";

import Frame from "@/components/AppCanvas/componnets/Frame/Frame.tsx";

const Skills = () => {
	return (
		<Frame id={"1"} title={"Skills"} rotation={[0, 4.7, 0]} position={[-45, -17, 65]}>
			<Text3D position={[0, 0, 1]} font={fontUrl}>
				Skills
				<meshNormalMaterial />
			</Text3D>
		</Frame>
	);
};

export default Skills;
