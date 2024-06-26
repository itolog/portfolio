import { TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";

import Loader from "@/UI/Loader/Loader.tsx";

import Cloud from "@/components/Cloud/Cloud.tsx";
import { justForFun, skills } from "@/components/SkillsModal/data";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

import styles from "./skillsModal.module.scss";

const SkillsModal = () => {
	const skillsModal = createSelectors(useAppStore).use.skillsModal();

	const words = useMemo(() => {
		if (skillsModal.type === "skills") {
			return skills;
		}

		return justForFun;
	}, [skillsModal]);

	return (
		<div className={styles.skillsModal}>
			<Suspense fallback={<Loader />}>
				<Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
					<fog attach="fog" args={["#27282c", 0, 80]} />
					<group rotation={[10, 10.5, 10]}>
						<Cloud words={words} radius={20} />
					</group>
					<TrackballControls />
				</Canvas>
			</Suspense>
		</div>
	);
};

export default SkillsModal;
