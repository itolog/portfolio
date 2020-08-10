import { useEffect, useState, useCallback, memo } from 'react';
import SkeletonLoader from '../shared/UI/SkeletonLoader/SkeletonLoader';

import MainLayout from '../shared/Layouts/MainLayout';
import Error from '../shared/components/Error/Error';
import cites from '../shared/data/cites';
import { useFetch } from 'shared/hooks/use-fetch';

import styles from './index.module.scss';

interface UserInfo {
  _id: string;
  description: string;
  title: string;
}

const Home = memo(() => {
  const [dataUser, setDataUser] = useState<UserInfo>();
  const [cite, setSite] = useState(0);

  const { data, loading, error } = useFetch(`${process.env.API_URL}/home`);

  const getRandomCites = useCallback((): number => {
    const max = cites.length;
    return Math.floor(Math.random() * max);
  }, []);

  useEffect(() => {
    if (data) {
      setDataUser(data[0]);
    }
  }, [data]);

  useEffect(() => {
    setSite(getRandomCites());
  }, [getRandomCites]);

  return (
    <MainLayout title='Javascript Fullstack Developer'>
      <section className={styles.conteiner}>
        {!loading && error && <Error error={error.message} />}
        <h1 className={styles.title}>
          Сергей Романиченко<span className={styles.title__dot}>.</span>
        </h1>
        <h2 className={styles.subtitle}>
          {dataUser?.title || (
            <SkeletonLoader color='#ff68b6' highlightColor='grey' count={1} />
          )}
        </h2>
        <div className={styles.descriptionText}>
          {dataUser?.description || (
            <SkeletonLoader color='white' highlightColor='grey' count={2} />
          )}
        </div>

        {/* Cites */}
        <div className={styles.cites}>&rdquo;{cites[cite]}&rdquo;</div>
      </section>
    </MainLayout>
  );
});

export default Home;
