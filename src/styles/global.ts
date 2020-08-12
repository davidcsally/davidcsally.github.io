import { createGlobalStyle } from 'styled-components/macro';

import { palette } from './colors';
import '../fonts.css';
import '../cursor.css';

export default createGlobalStyle`
  ${palette}

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
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
`;
