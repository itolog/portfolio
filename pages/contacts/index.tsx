import React, { memo } from 'react';
import { motion } from 'framer-motion';
import MailForm from '../../components/MailForm/MailForm';

import MainLayout from '../../shared/Layouts/MainLayout';
import MyMap from '../../components/MyMap/MyMap';
import SubTitle from '../../shared/UI/SubTitle/SubTitle';

import styles from './contacts.module.scss';

const index = memo(() => {
  return (
    <MainLayout title='Contacts'>
      <motion.section
        initial='exit'
        animate='enter'
        exit='exit'
        className={styles.contactsContainer}>
        <SubTitle title='Контакты' />

        <MailForm />

        <MyMap />
      </motion.section>
    </MainLayout>
  );
});

export default index;
