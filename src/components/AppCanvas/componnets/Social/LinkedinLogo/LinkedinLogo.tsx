import { animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { Euler } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

import { RigidItem } from "@/constants";

import useSocialAnim from "@/components/AppCanvas/componnets/Social/hooks/useSocialAnim.tsx";
import { GLTFResult } from "@/components/AppCanvas/componnets/Social/LinkedinLogo/types.ts";

import useAnimationStore from "@/store/animationsStore.ts";
import createSelectors from "@/store/createSelectors.ts";

const LinkedinLogo = (props: JSX.IntrinsicElements["group"]) => {
	const { nodes, materials } = useGLTF("/models/3d_linkedin_logo/scene.gltf") as GLTFResult;

	const { intensity, rotation, positionY } = useSocialAnim(RigidItem.LINKEDIN);
	const updateSocialActive = createSelectors(useAnimationStore).use.updateSocialActive();

	return (
		<RigidBody type={"fixed"} name={RigidItem.LINKEDIN}>
			<CuboidCollider
				args={[0.8, 0.4, 1]}
				position={[-4, 0.4, 4]}
				sensor
				onIntersectionEnter={() => {
					updateSocialActive(RigidItem.LINKEDIN);
				}}
				onIntersectionExit={() => {
					updateSocialActive("");
				}}
			/>
			<animated.pointLight
				color={"lime"}
				position={[-4.3, 0.23, 4]}
				distance={2}
				intensity={intensity}
			/>
			<animated.group
				scale={0.28}
				position-x={-4}
				position-y={positionY}
				position-z={4}
				dispose={null}
				rotation={rotation as unknown as Euler}
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
			</animated.group>
		</RigidBody>
	);
};

useGLTF.preload("/models/3d_linkedin_logo/scene.gltf");

export default LinkedinLogo;
