import { FC } from "react";

import { icons } from "@/UI/SvgIcon/icons.tsx";
import { SvgIconType } from "@/UI/SvgIcon/types.ts";

import styles from "./svgIcon.module.scss";

interface Props {
	name: SvgIconType;
}

const SvgIcons: FC<Props> = ({ name }) => {
	return <div className={styles.svgIconContainer}>{icons[name]}</div>;
};

export default SvgIcons;
