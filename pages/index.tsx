import Head from 'next/head'

import 'normalize.css'
import 'border-box.css'

import App from '../src/components/App'

const Home = () => (
  <>
    <Head>
      <title>David Sally | Software Engineer</title>
      <meta name="description" content="David Sally | Software Engineer" />
      <meta name="author" content="David Sally" />
      <meta
        name="keywords"
        content="David Sally, Software Engineer, Los Angeles, React, Node, Postgres, Redux, Redux Saga, Javascript, ES6"
      />
      <link rel="shortcut icon" href="/favicon.ico" type="img/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1" />
    </Head>
    <App />
  </>
)

export default Home
