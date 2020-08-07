import React from 'react';

import styles from './myMap.module.scss';

const MyMap = () => {
  return (
    <section className={styles.map}>
      <iframe
        width='100%'
        height='400'
        loading='lazy'
        frameBorder='0'
        src='https://www.google.com/maps/embed/v1/place?key=AIzaSyD_A1wbrF2Wchm6M0JlbEt7jIGErW5iN7o&q=Zaporozhye+Ukraine&zoom=7'
        allowFullScreen></iframe>
    </section>
  );
};

export default MyMap;
