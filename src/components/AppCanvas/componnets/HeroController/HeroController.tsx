import { RigidItem } from "@/constants";
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
			ccd
			onCollisionEnter={({ other }) => {
				if (other.rigidBodyObject?.name === RigidItem.GIT) {
					console.log("UP", other.rigidBodyObject);
				}
			}}
			onCollisionExit={({ other }) => {
				if (other.rigidBodyObject?.name === RigidItem.GIT) {
					console.log("OUT", other.rigidBodyObject);
				}
			}}
			animated>
			<EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
				<Hero scale={0.5} />
			</EcctrlAnimation>
		</Ecctrl>
	);
};

export default HeroController;
