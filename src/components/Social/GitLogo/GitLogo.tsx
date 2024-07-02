import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { Euler } from "@react-three/fiber";
import { CuboidCollider } from "@react-three/rapier";

import { gitUrl } from "@/config";
import { RigidItem } from "@/constants";

import { GLTFResult } from "@/components/Social/GitLogo/types.ts";
import useSocialAnim from "@/components/Social/hooks/useSocialAnim.tsx";
import StarPortal from "@/components/StarPortal/StarPortal.tsx";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

const COLOR = "red";

const GitLogo = (props: JSX.IntrinsicElements["group"]) => {
	const { nodes, materials } = useGLTF(gitUrl) as GLTFResult;
	const { intensity, rotation, positionY } = useSocialAnim(RigidItem.GIT);

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
				args={[0.8, 0.4, 1.2]}
				position={[-1, 0, -7]}
				sensor
				onIntersectionEnter={handleIntersectionEnter}
				onIntersectionExit={handleIntersectionExit}
			/>
			<a.group
				onClick={handleOpen}
				scale={10}
				position-x={-1}
				position-y={positionY}
				position-z={-7}
				rotation={rotation as unknown as Euler}
				dispose={null}
				{...props}>
				<a.pointLight color={COLOR} distance={2} intensity={intensity} />
				<mesh geometry={nodes.Object_4.geometry} material={materials.glossy_putih} />
				<mesh geometry={nodes.Object_5.geometry} material={materials.github} />
			</a.group>

			<StarPortal color={COLOR} position={[-1, 0, -7]} scale={0.7} />
		</group>
	);
};

useGLTF.preload(gitUrl);

export default GitLogo;
