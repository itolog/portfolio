import { useKeyboardControls } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";

import { heroUrl } from "@/config";
import { RigidItem } from "@/constants";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

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
	const [cameraFirstPerson, setCameraFirstPerson] = useState(false);
	const camera = useKeyboardControls((state) => state.camera);

	useEffect(() => {
		if (camera) {
			setCameraFirstPerson((prevState) => !prevState);
		}
	}, [camera]);

	const mode = useMemo(() => {
		return cameraFirstPerson ? "FixedCamera" : undefined;
	}, [cameraFirstPerson]);

	return (
		<Ecctrl
			ccd
			name={RigidItem.HERO_CONTROLLER}
			sprintMult={4}
			camTargetPos={{ x: 0, y: 4, z: -1 }}
			camInitDis={-7}
			fixedCamRotMult={0.8}
			mode={mode}
			position={[-26, 7, -25]}
			animated>
			<EcctrlAnimation characterURL={heroUrl} animationSet={animationSet}>
				<Hero scale={0.5} />
			</EcctrlAnimation>
		</Ecctrl>
	);
};

export default HeroController;
