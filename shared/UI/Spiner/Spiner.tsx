import React, { memo } from 'react';

import styles from './spiner.module.scss';

const Spiner = memo(() => {
  return (
    <div>
      <div className={styles.spinner}></div>
    </div>
  );
});

export default Spiner;
