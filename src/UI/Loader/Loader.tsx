import ProgressLoader from "@/UI/ProgressLoader/ProgressLoader.tsx";

import { Keys } from "@/components/Help/Help.tsx";

import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={styles.container}>
      <ProgressLoader />
      <Keys />
    </div>
  );
};

export default Loader;
