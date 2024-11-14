import { FC, PropsWithChildren } from "react";

import { PoButtonProps } from "@/ui/PoButton/types.ts";

import styles from "./poButton.module.scss";

const PoButton: FC<PropsWithChildren<PoButtonProps>> = ({ children, visible = true }) => {
  if (!visible) return null;

  return (
    <button className={styles.button}>
      <span className={styles.line} />
      <span className={styles.line3} />
      {children}
    </button>
  );
};

export default PoButton;
