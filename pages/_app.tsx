import React from 'react';
import Head from 'next/head';
// @ts-ignore
import NextNprogress from 'nextjs-progressbar';
import { AppProps } from 'next/app';

import '../shared/styles/root.scss';
import ErrorBoundary from 'shared/components/ErrorBoundary/ErrorBoundary';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <title>Javascript Fullstack Developer</title>
      </Head>
      <NextNprogress
        color='#FC5EC7'
        startPosition='0.3'
        stopDelayMs='200'
        height='4'
      />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
