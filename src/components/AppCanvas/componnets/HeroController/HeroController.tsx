import Ecctrl, { EcctrlAnimation } from "ecctrl";

import Hero from "@/components/AppCanvas/componnets/Hero/Hero.tsx";

const animationSet = {
	idle: "idle",
	walk: "walk",
	run: "run",
	jumpIdle: "jump",
	jumpLand: "jumpLand",
	jump: "jumpIdle",
};
const characterURL = "./models/rick.glb";

const HeroController = () => {
	return (
		<Ecctrl
			sprintMult={5}
			ccd
			capsuleHalfHeight={0.6}
			camTargetPos={{ x: 0, y: 4, z: -1 }}
			camInitDis={-7}
			position={[-100, 0, 20]}
			animated>
			<EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
				<Hero scale={0.5} />
			</EcctrlAnimation>
		</Ecctrl>
	);
};

export default HeroController;
