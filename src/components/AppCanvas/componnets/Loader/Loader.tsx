import { useProgress } from "@react-three/drei";
import { useEffect, useMemo } from "react";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

import styles from "./styles.module.scss";

const Loader = () => {
	const { progress } = useProgress();
	const updateLoading = createSelectors(useAppStore).use.updateLoading();

	const loading = useMemo(() => {
		const r = 70;
		const c = Math.PI * (r * 2);

		return ((100 - progress) / 100) * c;
	}, [progress]);

	useEffect(() => {
		if (progress === 100) {
			updateLoading(false);
		} else {
			updateLoading(true);
		}
	}, [progress, updateLoading]);

	return (
		<div className={styles.container}>
			<div className={styles.containerProgressbars}>
				<div className={styles.progressbar}>
					<svg className={styles.progressbarSvg}>
						<circle
							cx="80"
							cy="80"
							r="70"
							strokeDashoffset={loading}
							className={`${styles.progressbarSvgCircle} ${styles.shadowScss}`}
						/>
					</svg>
					<span className={`${styles.progressbarText} ${styles.shadowScss}`}>
						{Math.round(progress)}%
					</span>
				</div>
			</div>
		</div>
	);
};

export default Loader;
