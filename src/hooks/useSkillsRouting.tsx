import { useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";

import { RigidItem } from "@/constants";
import { useLocation, useRoute } from "wouter";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

const useSkillsRouting = () => {
	const [, setLocation] = useLocation();
	const [, params] = useRoute("/item/:id");
	const active = createSelectors(useAppStore).use.activeItem();
	const enter = useKeyboardControls((state) => state.enter);
	const cancel = useKeyboardControls((state) => state.cancel);

	useEffect(() => {
		if (enter && active === RigidItem.SKILLS) {
			setLocation("/item/" + RigidItem.SKILLS);
		}

		if (enter && active === RigidItem.JUST_FOR_FUN) {
			setLocation("/item/" + RigidItem.JUST_FOR_FUN);
		}

		if (cancel && params) {
			setLocation("/");
		}
	}, [active, cancel, enter, params, setLocation]);
};

export default useSkillsRouting;
