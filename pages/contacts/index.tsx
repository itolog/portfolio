import React from 'react';
import { motion } from 'framer-motion';

import MainLayout from '../../shared/Layouts/MainLayout';
import SubTitle from '../../shared/UI/SubTitle/SubTitle';
import axios from 'axios';

const index = () => {
  const handleSend = () => {
    axios
      .post(`${process.env.API_URL}/mail`, {
        from: 'mydick@test.ru',
        text: 'BY SLUT',
        name: 'Gamonya',
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <MainLayout title='Contacts'>
      <motion.section initial='exit' animate='enter' exit='exit'>
        <SubTitle title='Контакты' />
        <button onClick={handleSend}>send</button>
      </motion.section>
    </MainLayout>
  );
};

export default index;
