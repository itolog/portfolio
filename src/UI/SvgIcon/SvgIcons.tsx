import { FC } from "react";

import { icons } from "@/UI/SvgIcon/icons.tsx";
import { SvgIconType } from "@/UI/SvgIcon/types.ts";
import cl from "classnames";

import styles from "./svgIcon.module.scss";

interface Classes {
	root?: string;
}

interface Props {
	name: SvgIconType;
	color?: string;
	classes?: Classes;
}

const SvgIcons: FC<Props> = ({ name, color = "white", classes }) => {
	const containerClass = cl(styles.svgIconContainer, classes?.root);

	return (
		<div style={{ color }} className={containerClass}>
			{icons[name]}
		</div>
	);
};

export default SvgIcons;
