import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import { RigidItem } from "@/constants";
import { useControls } from "leva";

import { GLTFResult } from "@/components/AppCanvas/componnets/Social/LinkedinLogo/types.ts";

const LinkedinLogo = (props: JSX.IntrinsicElements["group"]) => {
	const { nodes, materials } = useGLTF("/models/3d_linkedin_logo/scene.gltf") as GLTFResult;

	const { position, rotation } = useControls("opt", {
		position: [-4, 0.23, 3],
		rotation: [0, Math.PI, 0],
	});

	return (
		<RigidBody type={"fixed"} name={RigidItem.LINKEDIN}>
			<group scale={0.28} position={position} dispose={null} rotation={rotation} {...props}>
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
