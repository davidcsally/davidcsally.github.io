import { CSSProp } from 'styled-components/macro';

declare module 'react' {
  interface Attributes {
    css?: CSSProp
  }
}
