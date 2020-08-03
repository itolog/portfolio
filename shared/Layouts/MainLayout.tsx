import React, { memo } from 'react';
import Head from 'next/head';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import styles from './mainLayout.module.scss';

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
  title?: string;
}

const MainLayout: React.FC<LayoutProps> = memo(
  ({ children, title = 'portfolio' }) => {
    return (
      <div className={styles.wrapp}>
        <Head>
          <title>{title}</title>
        </Head>

        {/* Main Content */}
        <div className={styles.content}>
          <Header />
          <main className={styles.main}>{children}</main>
        </div>

        <Footer />
      </div>
    );
  },
);

export default MainLayout;
