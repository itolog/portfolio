import React from 'react';

import styles from './error.module.scss';

interface Props {
  error: string;
}

const Error: React.FC<Props> = ({ error }) => {
  return (
    <section className={styles.error}>
      <h1>{error}</h1>
    </section>
  );
};

export default Error;
