import { useEffect, useMemo, useState } from "react";

import { RigidItem } from "@/constants";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

const useHint = () => {
	const active = createSelectors(useAppStore).use.activeItem();
	const cameraFirstPerson = createSelectors(useAppStore).use.cameraFirstPerson();

	const [hintText, setHintText] = useState("");
	const [cameraUpdated, setCameraUpdated] = useState(false);

	useEffect(() => {
		if (active === RigidItem.IPOD) {
			setHintText("Press Enter to play music and R to turn it off.");
		} else if (active === RigidItem.LINKEDIN || active === RigidItem.GIT) {
			setHintText("Press Enter to open the link");
		} else if (active === RigidItem.SKILLS || active === RigidItem.JUST_FOR_FUN) {
			setHintText("To open the portal press Enter or click on the portal");
		} else {
			setHintText("");
		}
	}, [active]);

	useEffect(() => {
		if (cameraFirstPerson) {
			setCameraUpdated(true);
			setHintText("Fixed Camera Mode");

			setTimeout(() => {
				setCameraUpdated(false);
				setHintText("");
			}, 2500);
		} else {
			setCameraUpdated(true);
			setHintText("Free Camera Mode");

			setTimeout(() => {
				setCameraUpdated(false);
				setHintText("");
			}, 2500);
		}
	}, [cameraFirstPerson]);

	return useMemo(() => {
		return {
			hintText,
			cameraUpdated,
			active,
		};
	}, [active, cameraUpdated, hintText]);
};

export default useHint;
