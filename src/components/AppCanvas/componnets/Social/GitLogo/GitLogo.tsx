import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { Euler } from "@react-three/fiber";
import { CuboidCollider } from "@react-three/rapier";

import { RigidItem } from "@/constants";

import { GLTFResult } from "@/components/AppCanvas/componnets/Social/GitLogo/types.ts";
import useSocialAnim from "@/components/AppCanvas/componnets/Social/hooks/useSocialAnim.tsx";
import StarPortal from "@/components/AppCanvas/componnets/StarPortal/StarPortal.tsx";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

const GitLogo = (props: JSX.IntrinsicElements["group"]) => {
	const { nodes, materials } = useGLTF("/models/3d_github_logo/scene.gltf") as GLTFResult;
	const { intensity, rotation, positionY, active } = useSocialAnim(RigidItem.GIT);

	const updateSocialActive = createSelectors(useAppStore).use.updateActiveItem();

	const handleOpen = () => {
		window.open(import.meta.env.VITE_GIT_URL);
	};

	const handleIntersectionEnter = () => {
		updateSocialActive(RigidItem.GIT);
	};

	const handleIntersectionExit = () => {
		updateSocialActive("");
	};

	return (
		<group>
			<CuboidCollider
				args={[0.8, 0.4, 1]}
				position={[-77, -18, 38]}
				sensor
				onIntersectionEnter={handleIntersectionEnter}
				onIntersectionExit={handleIntersectionExit}
			/>
			<a.group
				onClick={handleOpen}
				scale={10}
				position-x={-76.9}
				position-y={positionY}
				position-z={38.2}
				rotation={rotation as unknown as Euler}
				dispose={null}
				{...props}>
				<a.pointLight color={"red"} distance={2} intensity={intensity} />
				<mesh geometry={nodes.Object_4.geometry} material={materials.glossy_putih} />
				<mesh geometry={nodes.Object_5.geometry} material={materials.github} />
			</a.group>

			<StarPortal position={[-77, -18, 38]} scale={0.7} playAnimation={active === RigidItem.GIT} />
		</group>
	);
};

useGLTF.preload("/models/3d_github_logo/scene.gltf");

export default GitLogo;
