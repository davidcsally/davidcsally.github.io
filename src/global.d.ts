import { CSSProp } from 'styled-components/macro';

declare global {
  interface Window {
    amplitude: any;
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp
  }
}
