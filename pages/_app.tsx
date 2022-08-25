import React from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

import { GlobalStyles } from 'styles/global'

const cache = createCache({ key: 'next' })

const App = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <GlobalStyles />
    <Component {...pageProps} />
  </CacheProvider>
)

export default App
