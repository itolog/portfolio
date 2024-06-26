import SvgIcons from "@/UI/SvgIcon/SvgIcons.tsx";

import styles from "@/components/PoHint/poHint.module.scss";

import useAppStore from "@/store/appSrore.ts";
import createSelectors from "@/store/createSelectors.ts";

const BackToMainPageButton = () => {
	const updateFrameVisibility = createSelectors(useAppStore).use.updateFrameVisibility();

	return (
		<button
			className={styles.button}
			onClick={() => {
				updateFrameVisibility({
					open: false,
					type: null,
				});
			}}>
			<SvgIcons name={"arrow"} />
		</button>
	);
};

export default BackToMainPageButton;
