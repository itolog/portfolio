import React, { useState, useEffect } from 'react';
import { FaWindowClose } from 'react-icons/fa';
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
  }, [setOpen, isOpen]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <div className={`${styles.toastContainer} ${styles[type]}`}>
          <FaWindowClose onClick={handleClose} className={styles.close} />
          <span className={`${styles[type] + 'Text'}`}>{message}</span>
        </div>
      ) : null}
    </>
  );
};

export default Toast;
