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

        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#ffffff' />

        <title>Javascript Fullstack Developer</title>
      </Head>
      <NextNprogress
        color='#FC5EC7'
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
