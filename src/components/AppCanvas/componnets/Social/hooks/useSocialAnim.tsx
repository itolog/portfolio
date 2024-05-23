import { config, SpringValue, useSpring } from "@react-spring/three";
import { useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";

import { RigidItem } from "@/constants";

import useAnimationStore from "@/store/animationsStore.ts";
import createSelectors from "@/store/createSelectors.ts";

interface ReturnType {
	intensity: SpringValue<number>;
	rotation: SpringValue<number[]>;
	positionY: SpringValue<number>;
	active: string;
}

const useSocialAnim = (name: string): ReturnType => {
	const active = createSelectors(useAnimationStore).use.socialActive();
	const [sub] = useKeyboardControls();

	useEffect(() => {
		return sub(
			(state) => state.enter,
			() => {
				if (active === RigidItem.GIT) {
					window.open(import.meta.env.VITE_GIT_URL);
				}
				if (active === RigidItem.LINKEDIN) {
					window.open(import.meta.env.VITE_LINKEDIN_URL);
				}
			},
		);
	}, [active, sub]);

	const { intensity, rotation, positionY } = useSpring({
		intensity: active === name ? 20 : 1,
		rotation: active === name ? [-1.4, Math.PI, 0] : [0, Math.PI, 0],
		positionY: active === name ? 3 : 0.5,
		config: config.molasses,
	});

	return {
		intensity,
		rotation,
		positionY,
		active,
	};
};

export default useSocialAnim;
