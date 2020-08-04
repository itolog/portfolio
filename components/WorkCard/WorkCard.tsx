import React from 'react';
import { Work } from '../../shared/interfaces/work';

import styles from './workCard.module.scss';

const WorkCard: React.FC<Work> = ({ title, description, href, img }) => {
  return (
    <li className={styles.workLi}>
      <div className={styles.workImg}>
        <img src={img} alt={title} />
        <p className={styles.workImgDescription}>{description}</p>
      </div>
      <a href={href} target='_balnk' className={styles.workHref}>
        <span className={styles.workTitle}>{title}</span>
      </a>
    </li>
  );
};

export default WorkCard;
