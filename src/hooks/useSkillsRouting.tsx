import { useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";

import { RigidItem } from "@/constants";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

const useSkillsRouting = () => {
	const active = createSelectors(useAppStore).use.activeItem();
	const enter = useKeyboardControls((state) => state.enter);
	const cancel = useKeyboardControls((state) => state.cancel);

	const updateFrameVisibility = createSelectors(useAppStore).use.updateFrameVisibility();

	useEffect(() => {
		if (enter && active === RigidItem.SKILLS) {
			updateFrameVisibility({
				open: true,
				type: "skills",
			});
		}

		if (enter && active === RigidItem.JUST_FOR_FUN) {
			updateFrameVisibility({
				open: true,
				type: "justForFun",
			});
		}

		if (cancel) {
			updateFrameVisibility({
				open: false,
				type: null,
			});
		}
	}, [active, cancel, enter, updateFrameVisibility]);
};

export default useSkillsRouting;
