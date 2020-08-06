import React, { memo } from 'react';
import { Field, useField } from 'formik';

import styles from './pfInput.module.scss';

interface Props {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  icon: React.ReactChild;
  as?: string;
}

const PfInput: React.FC<Props> = memo(({ name, icon, as = 'input' }, props) => {
  const [field, meta] = useField(name);
  return (
    <div className={styles.pfInputContainer}>
      <div className={styles.inputWrapp}>
        <label htmlFor={name}>{icon}</label>
        <Field {...field} {...props} className={styles.textInput} as={as} />
      </div>
      <div className={styles.error}>
        {meta.touched && meta.error && meta.error}
      </div>
    </div>
  );
});

export default PfInput;
