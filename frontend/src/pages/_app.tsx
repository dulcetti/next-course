import { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyles } from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Papo de Bar</title>
        <meta name="description" content="Site fodasse pro Papo de Bar" />
        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch icon" href="/images/icon-512.png" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
