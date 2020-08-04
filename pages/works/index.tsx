import React, { memo } from 'react';
import { useFetch } from '../../shared/hooks/use-fetch';
import MainLayout from '../../shared/Layouts/MainLayout';

import styles from './works.module.scss';
import WorkCard from '../../components/WorkCard/WorkCard';
import { Work } from '../../shared/interfaces/work';

const Works = memo(() => {
  const { data, loading, error } = useFetch(`${process.env.API_URL}/works`);

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <MainLayout title='Works'>
      <section className={styles.works}>
        <h1>Works</h1>
        {loading && (
          <div style={{ color: 'lime', fontSize: '100px' }}>loading...</div>
        )}
        <ul className={styles.worksContainer}>
          {data?.map((item: Work) => {
            return (
              <WorkCard
                key={item._id}
                href={item.href}
                title={item.title}
                img={item.img}
                description={item.description}
              />
            );
          })}
        </ul>
      </section>
    </MainLayout>
  );
});

export default Works;
