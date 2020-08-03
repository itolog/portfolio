import { memo } from 'react';

import styles from './ava.module.scss';

const Ava = memo(() => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__ava}>
        <img className={styles.hero__img} src='/ava.jpg' alt='hero-img' />
      </div>
    </div>
  );
});

export default Ava;
