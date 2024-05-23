import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { Euler } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

import { RigidItem } from "@/constants";

import useSocialAnim from "@/components/AppCanvas/componnets/Social/hooks/useSocialAnim.tsx";
import { GLTFResult } from "@/components/AppCanvas/componnets/Social/LinkedinLogo/types.ts";
import StarPortal from "@/components/AppCanvas/componnets/StarPortal/StarPortal.tsx";

import useAnimationStore from "@/store/animationsStore.ts";
import createSelectors from "@/store/createSelectors.ts";

const LinkedinLogo = (props: JSX.IntrinsicElements["group"]) => {
	const { nodes, materials } = useGLTF("/models/3d_linkedin_logo/scene.gltf") as GLTFResult;

	const { intensity, rotation, positionY, active } = useSocialAnim(RigidItem.LINKEDIN);
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
		<group>
			<CuboidCollider
				args={[0.8, 0.4, 1]}
				position={[-4, 0.4, 4]}
				sensor
				onIntersectionEnter={handleIntersectionEnter}
				onIntersectionExit={handleIntersectionExit}
			/>

			<a.group
				onClick={handleOpen}
				scale={0.28}
				position-x={-4}
				position-y={positionY}
				position-z={4}
				dispose={null}
				rotation={rotation as unknown as Euler}
				{...props}>
				<a.pointLight color={"lime"} distance={2} intensity={intensity} />
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
			</a.group>
			<RigidBody type={"fixed"} position={[-4, 0, 4]} colliders={"hull"} name={RigidItem.LINKEDIN}>
				<StarPortal playAnimation={active === RigidItem.LINKEDIN} />
			</RigidBody>
		</group>
	);
};

useGLTF.preload("/models/3d_linkedin_logo/scene.gltf");

export default LinkedinLogo;
