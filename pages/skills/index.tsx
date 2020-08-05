import { memo, useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import MainLayout from 'shared/Layouts/MainLayout';
import SkillsList from '../../components/SkillsList/SkillsList';
import Error from '../../shared/components/Error/Error';
import SubTitle from '../../shared/UI/SubTitle/SubTitle';
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
      <motion.section
        initial='exit'
        animate='enter'
        exit='exit'
        className={styles.skills}>
        <SubTitle title='Навыки' />

        {!loading && error && <Error error={error.message} />}

        <SkillsList title='HTML' />
        <SkillsList loading={loading} title='CSS' skills={css} />
        <SkillsList loading={loading} title='JS' skills={js} />
        <SkillsList loading={loading} title='OTHER' skills={other} />
      </motion.section>
    </MainLayout>
  );
});

export default index;
