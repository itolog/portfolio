import { animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import { RigidItem } from "@/constants";

import useSocialAnim from "@/components/AppCanvas/componnets/Social/hooks/useSocialAnim.tsx";
import { GLTFResult } from "@/components/AppCanvas/componnets/Social/LinkedinLogo/types.ts";

const LinkedinLogo = (props: JSX.IntrinsicElements["group"]) => {
	const { nodes, materials } = useGLTF("/models/3d_linkedin_logo/scene.gltf") as GLTFResult;

	const { intensity } = useSocialAnim(RigidItem.LINKEDIN);

	return (
		<RigidBody type={"fixed"} name={RigidItem.LINKEDIN}>
			<animated.pointLight
				color={"lime"}
				position={[-4.3, 0.23, 3]}
				distance={2}
				intensity={intensity}
			/>
			<group
				scale={0.28}
				position={[-4, 0.23, 3]}
				dispose={null}
				rotation={[0, Math.PI, 0]}
				{...props}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_4.geometry}
					material={materials.glossy_linkedin}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_5.geometry}
					material={materials.glossy_putih}
				/>
			</group>
		</RigidBody>
	);
};

useGLTF.preload("/models/3d_linkedin_logo/scene.gltf");

export default LinkedinLogo;
