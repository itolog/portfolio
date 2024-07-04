import { useKeyboardControls } from "@react-three/drei";
import { useEffect, useMemo } from "react";

import { heroUrl } from "@/config";
import { RigidItem } from "@/constants";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

import Hero from "@/components/Hero/Hero.tsx";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

const animationSet = {
	idle: "idle",
	walk: "walk",
	run: "run",
	jumpIdle: "jump",
	jumpLand: "jumpLand",
	jump: "jumpIdle",
};

const HeroController = () => {
	const camera = useKeyboardControls((state) => state.camera);
	const info = useKeyboardControls((state) => state.info);
	const cameraFirstPerson = createSelectors(useAppStore).use.cameraFirstPerson();
	const active = createSelectors(useAppStore).use.activeItem();
	const updateCameraFirstPerson = createSelectors(useAppStore).use.updateCameraFirstPerson();
	const updateShowInfo = createSelectors(useAppStore).use.updateShowInfo();

	useEffect(() => {
		if (camera && !active) {
			updateCameraFirstPerson();
		}
	}, [camera, updateCameraFirstPerson, active]);

	useEffect(() => {
		if (info && !active) {
			updateShowInfo();
		}
	}, [active, info, updateShowInfo]);

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
			position={[-26, 8, -25]}
			animated>
			<EcctrlAnimation characterURL={heroUrl} animationSet={animationSet}>
				<Hero scale={0.5} />
			</EcctrlAnimation>
		</Ecctrl>
	);
};

export default HeroController;
