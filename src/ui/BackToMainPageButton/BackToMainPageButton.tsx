import { FC, MouseEventHandler } from "react";

import SvgIcons from "@/ui/SvgIcon/SvgIcons.tsx";
import { SvgIconType } from "@/ui/SvgIcon/types.ts";

import styles from "./styles.module.scss";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: SvgIconType;
}

const BackToMainPageButton: FC<Props> = ({ onClick, icon = "arrow" }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <SvgIcons name={icon} />
    </button>
  );
};

export default BackToMainPageButton;
