import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { Euler } from "@react-three/fiber";
import { CuboidCollider } from "@react-three/rapier";

import { linkedinUrl } from "@/config";
import { RigidItem } from "@/constants";

import useSocialAnim from "@/components/Social/hooks/useSocialAnim.tsx";
import { GLTFResult } from "@/components/Social/LinkedinLogo/types.ts";
import StarPortal from "@/components/StarPortal/StarPortal.tsx";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

const LinkedinLogo = (props: JSX.IntrinsicElements["group"]) => {
	const { nodes, materials } = useGLTF(linkedinUrl) as GLTFResult;

	const { intensity, rotation, positionY, active } = useSocialAnim(RigidItem.LINKEDIN);
	const updateSocialActive = createSelectors(useAppStore).use.updateActiveItem();

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
				args={[0.8, 0.4, 1.2]}
				position={[-4, 0, -7]}
				sensor
				onIntersectionEnter={handleIntersectionEnter}
				onIntersectionExit={handleIntersectionExit}
			/>

			<a.group
				onClick={handleOpen}
				scale={0.28}
				position-x={-4}
				position-y={positionY}
				position-z={-7}
				dispose={null}
				rotation={rotation as unknown as Euler}
				{...props}>
				<a.pointLight color={"lime"} distance={2} intensity={intensity} />
				<mesh geometry={nodes.Object_4.geometry} material={materials.glossy_linkedin} />
				<mesh geometry={nodes.Object_5.geometry} material={materials.glossy_putih} />
			</a.group>
			<StarPortal
				position={[-4, 0, -7]}
				scale={0.7}
				playAnimation={active === RigidItem.LINKEDIN}
			/>
		</group>
	);
};

useGLTF.preload(linkedinUrl);

export default LinkedinLogo;
