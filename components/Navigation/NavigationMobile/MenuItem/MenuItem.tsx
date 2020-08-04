import React, { memo } from 'react';
import { motion } from 'framer-motion';
import ActiveLink from '../../../../shared/UI/ActiveLink/ActiveLink';

import styles from './menuItem.module.scss';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -300,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface Props {
  title: string;
  path: string;
}

const MenuItem: React.FC<Props> = memo(({ title, path }) => {
  return (
    <motion.li className={styles.menuItem} variants={variants}>
      <ActiveLink activeClassName='active' href={path}>
        <a>{title}</a>
      </ActiveLink>
    </motion.li>
  );
});

export default MenuItem;
