import { animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { Euler } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

import { RigidItem } from "@/constants";

import { GLTFResult } from "@/components/AppCanvas/componnets/Social/GitLogo/types.ts";
import useSocialAnim from "@/components/AppCanvas/componnets/Social/hooks/useSocialAnim.tsx";

import useAnimationStore from "@/store/animationsStore.ts";
import createSelectors from "@/store/createSelectors.ts";

const GitLogo = (props: JSX.IntrinsicElements["group"]) => {
	const { nodes, materials } = useGLTF("/models/3d_github_logo/scene.gltf") as GLTFResult;
	const { intensity, rotation, positionY } = useSocialAnim(RigidItem.GIT);

	const updateSocialActive = createSelectors(useAnimationStore).use.updateSocialActive();

	return (
		<RigidBody type={"fixed"} name={RigidItem.GIT}>
			<CuboidCollider
				args={[0.8, 0.4, 1]}
				position={[4, 0.4, 4]}
				sensor
				onIntersectionEnter={() => {
					updateSocialActive(RigidItem.GIT);
				}}
				onIntersectionExit={() => {
					updateSocialActive("");
				}}
			/>
			<animated.pointLight
				color={"red"}
				position={[4, 0.23, 4]}
				distance={2}
				intensity={intensity}
			/>

			<animated.group
				scale={10}
				receiveShadow
				position-x={4}
				position-y={positionY}
				position-z={4}
				rotation={rotation as unknown as Euler}
				dispose={null}
				{...props}>
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
			</animated.group>
		</RigidBody>
	);
};

useGLTF.preload("/models/3d_github_logo/scene.gltf");

export default GitLogo;
