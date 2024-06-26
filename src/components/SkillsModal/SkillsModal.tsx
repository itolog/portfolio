import { a, config, useSpring } from "@react-spring/web";
import { TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useCallback, useMemo } from "react";

import BackToMainPageButton from "@/UI/BackToMainPageButton/BackToMainPageButton.tsx";

import Cloud1 from "@/components/Cloud/Cloud.tsx";
import { justForFun, skills } from "@/components/SkillsModal/data";
import ModalEnvironment from "@/components/SkillsModal/ModalEnvironment/ModalEnvironment.tsx";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

import styles from "./skillsModal.module.scss";

const SkillsModal = () => {
	const skillsModal = createSelectors(useAppStore).use.skillsModal();
	const updateFrameVisibility = createSelectors(useAppStore).use.updateFrameVisibility();

	const handleCloseModal = useCallback(() => {
		updateFrameVisibility({
			open: false,
			type: null,
		});
	}, []);

	const words = useMemo(() => {
		if (skillsModal.type === "skills") {
			return skills;
		}

		return justForFun;
	}, [skillsModal]);

	const { size, ...rest } = useSpring({
		config: config.stiff,
		from: { size: "0%", opacity: 0 },
		to: {
			size: skillsModal.open ? "100%" : "0%",
			opacity: skillsModal.open ? 1 : 0,
		},
	});

	return (
		<a.div style={{ ...rest, width: size, height: size }} className={styles.skillsModal}>
			<div className={styles.back}>
				<BackToMainPageButton onClick={handleCloseModal} />
			</div>

			<Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
				<ModalEnvironment />
				<group rotation={[10, 10.5, 10]}>
					<Cloud1 words={words} radius={20} />
				</group>
				<TrackballControls />
			</Canvas>
		</a.div>
	);
};

export default SkillsModal;
