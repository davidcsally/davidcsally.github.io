import { createGlobalStyle } from 'styled-components'

import { palette } from './colors'

const GlobalStyles = createGlobalStyle`
  ${palette}

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
  }

  body {
    * {
      outline-width: 0;
    }

    *:focus {
      outline-style: dashed;
      outline-offset: 2px;
      outline-width: 4px;
      outline-color: var(--outline-color);
    }
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`

export default GlobalStyles
