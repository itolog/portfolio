import { useEffect, useState, useCallback, memo } from 'react';

import MainLayout from '../shared/Layouts/MainLayout';
import cites from '../shared/data/cites';

import styles from './index.module.scss';
interface Props {
  description: [
    {
      _id: string;
      description: string;
    },
  ];
}

const Home: React.FC<Props> = memo(({ description }) => {
  const [msage, setMesg] = useState('');
  const [cite, setSite] = useState(0);

  const getRandomCites = useCallback((): number => {
    const max = cites.length;
    return Math.floor(Math.random() * max);
  }, []);

  useEffect(() => {
    setMesg(description[0].description);
  }, [description]);

  useEffect(() => {
    setSite(getRandomCites());
  }, [getRandomCites]);

  return (
    <MainLayout title='Javascript Fullstack Developer'>
      <section className={styles.conteiner}>
        <h1 className={styles.title}>
          Сергей Романиченко<span className={styles.title__dot}>.</span>
        </h1>
        <h2 className={styles.subtitle}>Front-end разработчик</h2>
        <p className={styles.descriptionText}>{msage}</p>

        {/* Cites */}
        <div className={styles.cites}>&rdquo;{cites[cite]}&rdquo;</div>
      </section>
    </MainLayout>
  );
});

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/home`);
  const description = await res.json();

  return {
    props: {
      description,
    },
  };
};

export default Home;
