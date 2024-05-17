import { config, SpringValue, useSpring } from "@react-spring/three";

import useAnimationStore from "@/store/animationsStore.ts";
import createSelectors from "@/store/createSelectors.ts";

interface ReturnType {
	intensity: SpringValue<number>;
}

const useSocialAnim = (name: string): ReturnType => {
	const active = createSelectors(useAnimationStore).use.socialActive();

	const { intensity } = useSpring({
		intensity: active === name ? 20 : 1,
		config: config.molasses,
	});
	return {
		intensity,
	};
};

export default useSocialAnim;
