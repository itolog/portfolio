import { animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import { RigidItem } from "@/constants";

import { GLTFResult } from "@/components/AppCanvas/componnets/Social/GitLogo/types.ts";
import useSocialAnim from "@/components/AppCanvas/componnets/Social/hooks/useSocialAnim.tsx";

const GitLogo = (props: JSX.IntrinsicElements["group"]) => {
	const { nodes, materials } = useGLTF("/models/3d_github_logo/scene.gltf") as GLTFResult;
	const { intensity } = useSocialAnim(RigidItem.GIT);
	return (
		<RigidBody type={"fixed"} name={RigidItem.GIT}>
			<animated.pointLight
				color={"red"}
				position={[-3.2, 0.3, 3]}
				distance={2}
				intensity={intensity}
			/>
			<group
				scale={10}
				receiveShadow
				position={[-3, 0.32, 3]}
				rotation={[0, Math.PI, 0]}
				{...props}
				dispose={null}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_4.geometry}
					material={materials.glossy_putih}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_5.geometry}
					material={materials.github}
				/>
			</group>
		</RigidBody>
	);
};

useGLTF.preload("/models/3d_github_logo/scene.gltf");

export default GitLogo;
