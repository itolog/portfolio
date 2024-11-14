import { FC } from "react";

import cl from "clsx";

import { icons } from "@/ui/SvgIcon/icons.tsx";
import { SvgIconType } from "@/ui/SvgIcon/types.ts";

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
