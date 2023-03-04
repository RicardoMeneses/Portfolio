import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='es'>
      <Head>
        <meta
          name='description'
          content='Desarrollador Web con más de tres años de experiencia en Full Stack con JavaScript / ReactJS / VueJS / NodeJS / MongoDB'
        />
        <meta name='keywords' content='Desarrollador Web, Full Stack, Front-End, Back-End' />
        <meta name='author' content='Ricardo Meneses Morales' />
        <meta property='og:title' content='Ricardo Meneses Morales - Desarrollador Web' />
        <meta
          property='og:description'
          content='Desarrollador Web con más de tres años de experiencia en Full Stack con JavaScript / ReactJS / VueJS / NodeJS / MongoDB'
        />
        <meta property='og:url' content='https://soyricardom.com/' />
        <meta property='og:image' content='https://soyricardom.com/img/logo.png' />
        <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/sie.manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
