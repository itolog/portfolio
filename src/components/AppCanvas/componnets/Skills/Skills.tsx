import { Text3D } from "@react-three/drei";

import { fontUrl } from "@/config";

import Frame from "@/components/AppCanvas/componnets/Frame/Frame.tsx";

const Skills = () => {
	return (
		<Frame id={"1"} title={"Skills"} position={[1, 1, 5]}>
			<Text3D position={[0, 0.8, 3]} font={fontUrl}>
				Skills
				<meshNormalMaterial />
			</Text3D>
		</Frame>
	);
};

export default Skills;
