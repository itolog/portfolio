import { a, config, useSpring } from "@react-spring/web";
import { useMemo } from "react";

import { RigidItem } from "@/constants";
import SvgIcons from "@/UI/SvgIcon/SvgIcons.tsx";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

import styles from "./poHint.module.scss";

const PoHint = () => {
	const isLoading = createSelectors(useAppStore).use.isLoading();
	const active = createSelectors(useAppStore).use.activeItem();

	const hintText = useMemo(() => {
		if (active === RigidItem.IPOD) {
			return "Press Enter to play music and R to turn it off.";
		}

		if (active === RigidItem.LINKEDIN || active === RigidItem.GIT) {
			return "Press Enter to open the link";
		}

		if (active === RigidItem.SKILLS || active === RigidItem.JUST_FOR_FUN) {
			return "To open the portal press Enter or click on the portal";
		}

		return <SvgIcons name={"info"} />;
	}, [active]);

	const { size, ...rest } = useSpring({
		config: config.stiff,
		from: { size: "30px" },
		to: {
			size: active ? "320px" : "30px",
		},
	});
	const { x } = useSpring({
		from: { x: 0 },
		x: active ? 1 : 0,
		config: { duration: 1000 },
	});

	if (isLoading) return null;

	return (
		<a.div style={{ ...rest, width: size }} className={styles.hint}>
			<a.div
				style={{
					scale: x.to({
						range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
						output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
					}),
				}}
				className={styles.container}>
				{hintText}
			</a.div>
		</a.div>
	);
};

export default PoHint;
