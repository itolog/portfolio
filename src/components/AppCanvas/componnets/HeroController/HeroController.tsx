import { RigidItem } from "@/constants";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

import Hero from "@/components/AppCanvas/componnets/Hero/Hero.tsx";

import useAnimationStore from "@/store/animationsStore.ts";
import createSelectors from "@/store/createSelectors.ts";

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
	const updateSocialActive = createSelectors(useAnimationStore).use.updateSocialActive();

	return (
		<Ecctrl
			ccd
			onCollisionEnter={({ other }) => {
				if (other.rigidBodyObject?.name === RigidItem.GIT) {
					updateSocialActive(RigidItem.GIT);
				}
				if (other.rigidBodyObject?.name === RigidItem.LINKEDIN) {
					updateSocialActive(RigidItem.LINKEDIN);
				}
			}}
			onCollisionExit={({ other }) => {
				if (
					other.rigidBodyObject?.name === RigidItem.GIT ||
					other.rigidBodyObject?.name === RigidItem.LINKEDIN
				) {
					updateSocialActive("");
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
