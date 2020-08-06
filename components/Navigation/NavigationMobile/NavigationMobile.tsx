import { useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import MenuToggle from './MenuToggle/MenuToggle';
import MenuItem from './MenuItem/MenuItem';
import navItems from '../navItems';

import styles from './navigation.module.scss';

const variants = {
  open: {
    y: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    y: -300,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);

  return (
    <div className={styles.navigationContainer}>
      <MenuToggle toggle={handleToggle} />

      <motion.nav
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        initial={false}
        className={styles.menuContainer}>
        <motion.ul variants={variants}>
          {navItems.map((item) => (
            <MenuItem title={item.title} path={item.path} key={item.id} />
          ))}
        </motion.ul>
      </motion.nav>
    </div>
  );
});

export default Navigation;
