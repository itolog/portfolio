import React, { memo } from 'react';

import { motion } from 'framer-motion';

import styles from './subTitle.module.scss';

interface Props {
  title: string;
}

const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const backVariants = {
  exit: { x: 20, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.5, ...transition } },
};

const SubTitle: React.FC<Props> = memo(({ title }) => {
  return (
    <motion.h1 variants={backVariants} className={styles.subtitle}>
      {title}
    </motion.h1>
  );
});

export default SubTitle;
