// import { useMemo } from "react";
import { heroUrl } from "@/config";
import { RigidItem } from "@/constants";
// import { hasTouchSupport } from "@/utils/bowser.ts";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { useControls } from "leva";

import Hero from "@/components/Hero/Hero.tsx";

const animationSet = {
	idle: "idle",
	walk: "walk",
	run: "run",
	jumpIdle: "jump",
	jumpLand: "jumpLand",
	jump: "jumpIdle",
};

const HeroController = () => {
	// const mode = useMemo(() => {
	// 	return hasTouchSupport() ? undefined : "FixedCamera";
	// }, []);

	const { position } = useControls("op", {
		position: [-26, 0, -25],
	});

	return (
		<Ecctrl
			name={RigidItem.HERO_CONTROLLER}
			sprintMult={4}
			ccd
			capsuleHalfHeight={0.6}
			camTargetPos={{ x: 0, y: 4, z: -1 }}
			camInitDis={-7}
			fixedCamRotMult={0.8}
			// mode={mode}
			position={position}
			animated>
			<EcctrlAnimation characterURL={heroUrl} animationSet={animationSet}>
				<Hero scale={0.5} />
			</EcctrlAnimation>
		</Ecctrl>
	);
};

export default HeroController;
