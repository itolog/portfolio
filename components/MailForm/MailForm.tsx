import React, { useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { FaAt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

import PfInput from '../../shared/forms/PfInput/PfInput';
import CustomIcon from '../../shared/UI/CustomIcon/CustomIcon';
import SubmitButton from '../../shared/UI/SubmitButton/SubmitButton';
import Toast, { ToastType } from '../../shared/components/Toast/Toast';
import MailSchema from './validation';

import styles from './mailForm.module.scss';

interface Values {
  email: string;
  name: string;
  message: string;
}

const MailForm = () => {
  const [openToast, setOpenTast] = useState(false);
  const [toastType, setToastType] = useState<ToastType>();
  const [toastMsg, setToastMsg] = useState('');

  const onSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>,
  ) => {
    console.log('values', values);
    setOpenTast(true);
    setToastType('info');
    setToastMsg('идёт отправка');
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className={styles.mailFormContainer}>
      <Toast isOpen={openToast} message={toastMsg} type={toastType} />
      <Formik
        initialValues={{ email: '', name: '', message: '' }}
        validationSchema={MailSchema}
        onSubmit={onSubmit}>
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className={styles.mailForm}>
            <PfInput
              icon={<CustomIcon icon={<FaAt />} size='1.4em' />}
              label='email'
              name='email'
              type='text'
              placeholder='email'
            />

            <PfInput
              icon={<CustomIcon icon={<FaUser />} size='1.4em' />}
              label='name'
              name='name'
              type='text'
              placeholder='name'
            />

            <PfInput
              icon={<CustomIcon icon={<FaEnvelope />} size='1.4em' />}
              label='message'
              name='message'
              type='text'
              as='textarea'
              placeholder='message'
            />

            <SubmitButton title='отправить' disabled={isSubmitting} />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default MailForm;
