import { memo } from 'react';

import NavigationMobile from '../Navigation/NavigationMobile/NavigationMobile';
import NavigationDesctop from '../Navigation/NavigationDesctop/NavigationDesctop';
import Ava from '../../shared/UI/Ava/Ava';

import styles from './header.module.scss';

const Header = memo(() => {
  return (
    <header className={styles.header}>
      <Ava />
      {/* MENU */}

      <NavigationMobile />
      <NavigationDesctop />
    </header>
  );
});

export default Header;
