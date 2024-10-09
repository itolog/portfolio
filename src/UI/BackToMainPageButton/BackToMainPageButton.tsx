import { FC, MouseEventHandler } from "react";

import SvgIcons from "@/UI/SvgIcon/SvgIcons.tsx";
import { SvgIconType } from "@/UI/SvgIcon/types.ts";

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
