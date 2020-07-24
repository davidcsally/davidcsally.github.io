import { CSSProp } from 'styled-components';

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
