import React, { memo } from 'react';
import SkeletonLoader from '../../shared/UI/SkeletonLoader/SkeletonLoader';

import styles from './skillsList.module.scss';

interface Props {
  title: string;
  skills?: string[];
  loading?: boolean;
}

const SkillsList: React.FC<Props> = memo(({ title, skills, loading }) => {
  return (
    <section className={styles.skillsListContainer}>
      <h2>{title}</h2>

      <ul className={styles.skillsList}>
        {loading && skills?.length === 0 && (
          <SkeletonLoader color='#202020' highlightColor='#444' count={2} />
        )}
        {skills &&
          skills.map((item, index) => {
            return (
              <li key={index} className={styles.skillItem}>
                {item}
              </li>
            );
          })}
      </ul>
    </section>
  );
});

export default SkillsList;
