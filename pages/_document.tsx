import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ru'>
        <Head>
          <link rel='preconnect' href='https://itolog-pf.herokuapp.com' />
          <link rel='prefetch' href='https://itolog-pf.herokuapp.com/works' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
