import React, { memo } from 'react';
import Spiner from '../../UI/Spiner/Spiner';

import styles from './submitButton.module.scss';

interface Props {
  title: string;
  disabled?: boolean;
}

const SubmitButton: React.FC<Props> = memo(({ title, disabled }) => {
  return (
    <button className={styles.submitBtn} type='submit' disabled={disabled}>
      {!disabled ? title : <Spiner />}
    </button>
  );
});

export default SubmitButton;
