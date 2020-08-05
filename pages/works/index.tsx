import React, { memo } from 'react';
import { motion } from 'framer-motion';

import { useFetch } from '../../shared/hooks/use-fetch';
import MainLayout from '../../shared/Layouts/MainLayout';
import WorkCard from '../../components/WorkCard/WorkCard';
import Error from '../../shared/components/Error/Error';
import WorkLoaderSkeleton from '../../shared/UI/WorkLoaderSkeleton/WorkLoaderSkeleton';
import SubTitle from 'shared/UI/SubTitle/SubTitle';

import styles from './works.module.scss';

import { Work } from '../../shared/interfaces/work';

interface Props {
  works: Work[];
}

const Works: React.FC<Props> = memo(({ works }) => {
  const { data, loading, error } = useFetch(
    `${process.env.API_URL}/works`,
    works,
  );

  return (
    <MainLayout title='Works'>
      <motion.section
        initial='exit'
        animate='enter'
        exit='exit'
        className={styles.works}>
        <SubTitle title='Работы' />
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
      </motion.section>
    </MainLayout>
  );
});

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`${process.env.API_URL}/works`);
  const works: Work[] = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      works,
    },
  };
}

export default Works;
