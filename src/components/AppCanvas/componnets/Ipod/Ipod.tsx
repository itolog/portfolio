import { PositionalAudio, useGLTF, useKeyboardControls } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";

import { damagedAudio1Url, ipodlUrl } from "@/config";
import { Controls, RigidItem } from "@/constants";
import * as THREE from "three";

import { GLTFResult } from "@/components/AppCanvas/componnets/Ipod/types.ts";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

const Ipod = (props: JSX.IntrinsicElements["group"]) => {
	const { nodes, materials } = useGLTF(ipodlUrl) as GLTFResult;
	const audioRef = useRef<THREE.PositionalAudio>(null);

	const updateActiveItem = createSelectors(useAppStore).use.updateActiveItem();

	const active = createSelectors(useAppStore).use.activeItem();
	const enter = useKeyboardControls((state) => state[Controls.enter]);
	const cancel = useKeyboardControls((state) => state[Controls.cancel]);

	useEffect(() => {
		(async () => {
			if (active === RigidItem.IPOD && enter) {
				await audioRef.current?.context.resume();
			}

			if (active === RigidItem.IPOD && cancel) {
				await audioRef.current?.context.suspend();
			}
		})();
	}, [active, cancel, enter]);

	const handleIntersectionEnter = () => {
		updateActiveItem(RigidItem.IPOD);
	};

	const handleIntersectionExit = () => {
		updateActiveItem("");
	};

	return (
		<RigidBody type={"fixed"} name={RigidItem.IPOD}>
			<CuboidCollider
				args={[0.5, 0.6, 0.4]}
				position={[-4.6, 0.3, 0]}
				sensor
				onIntersectionEnter={handleIntersectionEnter}
				onIntersectionExit={handleIntersectionExit}
			/>
			<group
				dispose={null}
				scale={0.3}
				position={[-5, 0.7, 0]}
				rotation={[-Math.PI / 2, Math.PI, Math.PI * 0.5]}
				{...props}>
				<PositionalAudio ref={audioRef} url={damagedAudio1Url} distance={2} autoplay loop />

				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_4.geometry}
					material={materials["Material.006"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_5.geometry}
					material={materials.Shiney_Back}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_6.geometry}
					material={materials.Port}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_7.geometry}
					material={materials.Screen}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_8.geometry}
					material={materials.Wheel}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_9.geometry}
					material={materials["Material.016"]}
				/>
			</group>
		</RigidBody>
	);
};

useGLTF.preload(ipodlUrl);

export default Ipod;
