import { animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { Euler } from "@react-three/fiber";
import { CapsuleCollider, CuboidCollider, RigidBody } from "@react-three/rapier";

import { RigidItem } from "@/constants";

import PoText3D from "@/components/AppCanvas/componnets/PoText3d/PoText3d.tsx";
import useSocialAnim from "@/components/AppCanvas/componnets/Social/hooks/useSocialAnim.tsx";
import { GLTFResult } from "@/components/AppCanvas/componnets/Social/LinkedinLogo/types.ts";

import useAnimationStore from "@/store/animationsStore.ts";
import createSelectors from "@/store/createSelectors.ts";

const LinkedinLogo = (props: JSX.IntrinsicElements["group"]) => {
	const { nodes, materials } = useGLTF("/models/3d_linkedin_logo/scene.gltf") as GLTFResult;

	const { intensity, rotation, positionY, textVisible, color } = useSocialAnim(RigidItem.LINKEDIN);
	const updateSocialActive = createSelectors(useAnimationStore).use.updateSocialActive();

	const handleOpen = () => {
		window.open(import.meta.env.VITE_LINKEDIN_URL);
	};

	const handleIntersectionEnter = () => {
		updateSocialActive(RigidItem.LINKEDIN);
	};

	const handleIntersectionExit = () => {
		updateSocialActive("");
	};

	return (
		<RigidBody type={"fixed"} colliders={false} name={RigidItem.LINKEDIN}>
			<CapsuleCollider position={[-4, 0.8, 4]} args={[0.8, 0.3]}>
				<PoText3D
					textVisible={textVisible}
					color={color}
					text={"Enter"}
					vertical
					position={[0.1, 1.6, 0]}
				/>
			</CapsuleCollider>
			<CuboidCollider
				args={[0.8, 0.4, 1]}
				position={[-4, 0.4, 4]}
				sensor
				onIntersectionEnter={handleIntersectionEnter}
				onIntersectionExit={handleIntersectionExit}
			/>

			<animated.group
				onClick={handleOpen}
				scale={0.28}
				position-x={-4}
				position-y={positionY}
				position-z={4}
				dispose={null}
				rotation={rotation as unknown as Euler}
				{...props}>
				<animated.pointLight color={"lime"} distance={2} intensity={intensity} />
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
