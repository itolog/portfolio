import React, { memo } from 'react';
import { useFetch } from '../../shared/hooks/use-fetch';
import MainLayout from '../../shared/Layouts/MainLayout';

import styles from './works.module.scss';
import WorkCard from '../../components/WorkCard/WorkCard';
import Error from '../../shared/components/Error/Error';
import WorkLoaderSkeleton from '../../shared/UI/WorkLoaderSkeleton/WorkLoaderSkeleton';
import { Work } from '../../shared/interfaces/work';

const Works = memo(() => {
  const { data, loading, error } = useFetch(`${process.env.API_URL}/works`);

  return (
    <MainLayout title='Works'>
      <section className={styles.works}>
        <h1 className='subtitle'>Works</h1>
        {/* ERROR */}
        {error && <Error error={error.message} />}

        <ul className={styles.worksContainer}>
          {loading && <WorkLoaderSkeleton />}
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
