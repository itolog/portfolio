import React from 'react';
import Skeleton from 'react-loading-skeleton';

import styles from './workLoaderSkeleton.module.scss';

const WorkLoaderSkeleton = () => {
  const iterator = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {iterator.map((i) => {
        return (
          <li key={i}>
            <Skeleton
              className={styles.workLSkeleton}
              width={200}
              height={200}
            />
          </li>
        );
      })}
    </>
  );
};

export default WorkLoaderSkeleton;
