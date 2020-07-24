import Head from 'next/head'
import 'normalize.css';
import 'border-box.css';
import '../src/fonts.css';

import GlobalStyles from 'styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/davidsface.ico" type="img/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>David Sally | Software Engineer</title>
        <meta name="description" content="David Sally | Software Engineer" />
        <meta name="author" content="David Sally" />
        <meta name="keywords" content="David Sally, Software Engineer, Los Angeles, React, Node, Postgres, Redux, Redux Saga, Javascript, ES6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
