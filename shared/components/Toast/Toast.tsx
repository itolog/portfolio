import React, { useState, useEffect } from 'react';

import styles from './toast.module.scss';

export type ToastType = 'error' | 'info' | 'success';

interface Props {
  isOpen: boolean;
  message: string;
  type?: ToastType;
}

const Toast: React.FC<Props> = ({ type = 'info', isOpen, message }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      {open ? (
        <div className={`${styles.toastContainer} ${styles[type]}`}>
          <span className={`${styles[type] + 'Text'}`}>{message}</span>
        </div>
      ) : null}
    </>
  );
};

export default Toast;
