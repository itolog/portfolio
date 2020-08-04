import { memo, useEffect, useState } from 'react';

import MainLayout from 'shared/Layouts/MainLayout';
import SkillsList from '../../components/SkillsList/SkillsList';
import Error from '../../shared/components/Error/Error';
import { useFetch } from 'shared/hooks/use-fetch';

import styles from './skills.module.scss';

const index = memo(() => {
  const [css, setCss] = useState<string[]>([]);
  const [js, setJs] = useState<string[]>([]);
  const [other, setOther] = useState<string[]>([]);
  const { data, loading, error } = useFetch(`${process.env.API_URL}/skills`);

  useEffect(() => {
    if (data) {
      const { css, js, other } = data[0];
      setCss(css);
      setJs(js);
      setOther(other);
    }
  }, [data]);

  return (
    <MainLayout title='Skills'>
      <section className={styles.skills}>
        <h1 className='subtitle'>Навыки</h1>

        {!loading && error && <Error error={error.message} />}

        <SkillsList title='HTML' />
        <SkillsList loading={loading} title='CSS' skills={css} />
        <SkillsList loading={loading} title='JS' skills={js} />
        <SkillsList loading={loading} title='OTHER' skills={other} />
      </section>
    </MainLayout>
  );
});

export default index;
