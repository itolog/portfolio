import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { ANIMATIONS_TYPE, Controls } from "@/constants";
import Ecctrl, { useJoystickControls } from "ecctrl";

import Hero from "@/components/AppCanvas/componnets/Hero/Hero.tsx";

import useAnimationStore from "@/store/animations.ts";
import createSelectors from "@/store/createSelectors.ts";

const HeroController = () => {
	const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
	const leftPressed = useKeyboardControls((state) => state[Controls.left]);
	const rightPressed = useKeyboardControls((state) => state[Controls.right]);
	const backPressed = useKeyboardControls((state) => state[Controls.back]);
	const forwardPressed = useKeyboardControls((state) => state[Controls.forward]);
	const runPressed = useKeyboardControls((state) => state[Controls.run]);
	const curButton1Pressed = useJoystickControls((state) => state.curButton1Pressed);
	const curRunState = useJoystickControls((state) => state.curRunState);
	const curJoystickAng = useJoystickControls((state) => state.curJoystickAng);
	const curJoystickDis = useJoystickControls((state) => state.curJoystickDis);
	const isRun = curRunState || curJoystickAng > 0 || curJoystickDis > 0;

	const updateAnimType = createSelectors(useAnimationStore).use.updateAnimationType();

	useFrame(() => {
		if (rightPressed || leftPressed || backPressed || forwardPressed || isRun) {
			updateAnimType(ANIMATIONS_TYPE.WALK);

			if (!jumpPressed && runPressed) {
				updateAnimType(ANIMATIONS_TYPE.RUN);
			}

			if (jumpPressed || curButton1Pressed) {
				updateAnimType(ANIMATIONS_TYPE.WALK);
			}
		} else if (jumpPressed || curButton1Pressed) {
			updateAnimType(ANIMATIONS_TYPE.WALK);
		} else {
			updateAnimType(ANIMATIONS_TYPE.IDLE);
		}
	});

	return (
		<Ecctrl>
			<Hero scale={0.5} />
		</Ecctrl>
	);
};

export default HeroController;
