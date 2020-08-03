import { memo } from 'react';

import ActiveLink from '../../../shared/UI/ActiveLink/ActiveLink';
import navItems from '../navItems';

import styles from './navigationDesc.module.scss';

const NavigationDesctop = memo(() => {
  return (
    <nav className={styles.header_navigation__desctop}>
      <ul>
        {navItems.map((item) => {
          return (
            <li key={item.id}>
              <ActiveLink activeClassName='active' href={item.path}>
                <a>{item.title}</a>
              </ActiveLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

export default NavigationDesctop;
