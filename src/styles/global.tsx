import { Global, css } from '@emotion/react'

import { palette } from './colors'

const styles = css`
  ${palette}

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
    cursor: url(/assets/pixel.cur), auto;
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  @font-face {
    font-family: Futura-Heavy-Oblique;
    src: url(/fonts/Futura-Heavy-Oblique.otf) format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url(/fonts/Inter-roman.var.woff2) format('woff2');
    font-display: swap;
  }
`

export const GlobalStyles = () => <Global styles={styles} />
