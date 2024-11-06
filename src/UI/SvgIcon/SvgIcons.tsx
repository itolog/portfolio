import { FC } from "react";

import { icons } from "@/UI/SvgIcon/icons.tsx";
import { SvgIconType } from "@/UI/SvgIcon/types.ts";
import cl from "clsx";

import styles from "./svgIcon.module.scss";

interface Classes {
  root?: string;
}

interface Props {
  name: SvgIconType;
  color?: string;
  size?: string;
  classes?: Classes;
}

const SvgIcons: FC<Props> = ({ name, color = "white", classes, size = "100%" }) => {
  const containerClass = cl(styles.svgIconContainer, classes?.root);

  return (
    <div style={{ color, width: size, height: size }} className={containerClass}>
      {icons[name]}
    </div>
  );
};

export default SvgIcons;
