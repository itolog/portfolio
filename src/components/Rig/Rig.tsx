import { CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

import { Vector3 } from "three";
import { useRoute } from "wouter";

const Rig = ({ position = new Vector3(0, 1, 2), focus = new Vector3(0, 0, 0) }) => {
	const { scene, get } = useThree();
	const controls = get().controls as unknown as CameraControls;
	const [, params] = useRoute("/item/:id");

	useEffect(() => {
		const active = scene.getObjectByName(params?.id as string);

		if (active) {
			active?.parent?.localToWorld(position.set(0, 0, 0.25));
			active?.parent?.localToWorld(focus.set(0, 0, -2));
		} else {
			position.set(0, 1, 2);
			focus.set(0, 0, 0);
		}

		controls?.setLookAt(...position.toArray(), ...focus.toArray(), true);
	}, [controls, focus, params?.id, position, scene]);

	return (
		<>
			<CameraControls
				makeDefault
				minPolarAngle={0}
				maxDistance={5}
				minDistance={1}
				maxPolarAngle={Math.PI / 2}
			/>
			{/* <TrackballControls makeDefault /> */}
		</>
	);
};

export default Rig;
