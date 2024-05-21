import { config, SpringValue, useSpring } from "@react-spring/three";

import useAnimationStore from "@/store/animationsStore.ts";
import createSelectors from "@/store/createSelectors.ts";

interface ReturnType {
	intensity: SpringValue<number>;
	rotation: SpringValue<number[]>;
	positionY: SpringValue<number>;
}

const useSocialAnim = (name: string): ReturnType => {
	const active = createSelectors(useAnimationStore).use.socialActive();

	const { intensity, rotation, positionY } = useSpring({
		intensity: active === name ? 20 : 1,
		rotation: active === name ? [-1.4, Math.PI, 0] : [0, Math.PI, 0],
		positionY: active === name ? 3 : 0.3,
		config: config.molasses,
	});

	return {
		intensity,
		rotation,
		positionY,
	};
};

export default useSocialAnim;
