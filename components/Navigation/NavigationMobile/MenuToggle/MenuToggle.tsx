import React, { memo } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from './menuToggle.module.scss';

interface Props {
  toggle: () => void;
}

const MenuToggle: React.FC<Props> = memo(({ toggle }) => (
  <FaBars size={40} className={styles.menuBurger} onClick={toggle} />
));

export default MenuToggle;
