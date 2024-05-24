import { CameraControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

import { Vector3 } from "three";
import { useRoute } from "wouter";

const Rig = ({ position = new Vector3(0, 0, 2), focus = new Vector3(0, 0, 0) }) => {
	const { controls, scene } = useThree();
	const [, params] = useRoute("/item/:id");

	useEffect(() => {
		const active = scene.getObjectByName(params?.id as string);

		if (active) {
			active?.parent?.localToWorld(position.set(0, 0.5, 0.25));
			active?.parent?.localToWorld(focus.set(0, 0, -2));
		}

		(controls as unknown as CameraControls)?.setLookAt(
			...position.toArray(),
			...focus.toArray(),
			true,
		);
	}, [controls, focus, params?.id, position, scene]);

	return (
		<CameraControls
			makeDefault
			minPolarAngle={0}
			maxDistance={5}
			minDistance={1}
			maxPolarAngle={Math.PI / 2}
		/>
	);
};

export default Rig;
