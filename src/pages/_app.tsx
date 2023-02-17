import '@/styles/globals.css';
import Head from 'next/head';
import Default from '@/layouts/default';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Ricardo Meneses Morales</title>
      </Head>
      <Default>
        <Component {...pageProps} />
      </Default>
    </>
  );
}

export default appWithTranslation(App);
