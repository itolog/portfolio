import { useMemo } from "react";

import { RigidItem } from "@/constants";
import { useLocation, useRoute } from "wouter";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

import styles from "./poHint.module.scss";

const PoHint = () => {
	const [, params] = useRoute("/item/:id");
	const [, setLocation] = useLocation();
	const active = createSelectors(useAppStore).use.activeItem();

	const hintText = useMemo(() => {
		if (active === RigidItem.IPOD) {
			return "Press Enter to play music and R to turn it off.";
		}

		if (active === RigidItem.LINKEDIN || active === RigidItem.GIT) {
			return "Press Enter to open the link";
		}

		if (active === RigidItem.SKILLS) {
			return "To open the portal press Enter or click on the portal";
		}

		return "";
	}, [active]);

	if (!active) return null;

	return (
		<div className={styles.hint}>
			<button className={styles.button} onClick={() => setLocation("/")}>
				{params ? "< back" : hintText}
			</button>
		</div>
	);
};

export default PoHint;
