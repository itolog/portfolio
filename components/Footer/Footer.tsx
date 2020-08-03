import { memo } from 'react';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';

import colors from '../../shared/constants/colors';
import themes from '../../shared/constants/themes';

import styles from './footer.module.scss';

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.navSocial}>
        <li>
          {' '}
          <a
            href='https://github.com/itolog'
            target='_blank'
            rel='noreferrer'
            aria-label='Github'>
            <FaGithub color={colors.SOCIAL} size={themes.SOCIAL_BTN_SIZE} />
          </a>
        </li>
        <li>
          <a
            href='https://linkedin.com/in/serhii-romanichenko-92788a148'
            target='_blank'
            rel='noreferrer'
            aria-label='Linkedin'>
            <FaLinkedin color={colors.SOCIAL} size={themes.SOCIAL_BTN_SIZE} />
          </a>
        </li>
        <li>
          <a
            href='https://web.telegram.org/#/im?p=@Itolog'
            target='_blank'
            rel='noreferrer'
            aria-label='Telegram'>
            <FaTelegram color={colors.SOCIAL} size={themes.SOCIAL_BTN_SIZE} />
          </a>
        </li>
      </ul>
    </footer>
  );
});

export default Footer;
