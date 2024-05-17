import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import { RigidItem } from "@/constants";

import { GLTFResult } from "@/components/AppCanvas/componnets/Social/GitLogo/types.ts";

const GitLogo = (props: JSX.IntrinsicElements["group"]) => {
	const { nodes, materials } = useGLTF("/models/3d_github_logo/scene.gltf") as GLTFResult;

	return (
		<RigidBody type={"fixed"} name={RigidItem.GIT}>
			<group
				scale={10}
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
