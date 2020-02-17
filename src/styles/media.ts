// style-utils.js
import { css } from 'styled-components';

// values in px
const breakpoints = {
  medium: 768,
  large: 1024,
};

/**
 * Media query helpers for tablet+ and desktop+ screen sizes.
 * Based on https://github.com/styled-components/styled-components/blob/master/packages/styled-components/docs/tips-and-tricks.md
 */
export const media = {
  tablet: (content: TemplateStringsArray) => css`
    @media (min-width: ${breakpoints.medium}px) {
      ${css(content)};
    }
  `,

  desktop: (content: TemplateStringsArray) => css`
    @media (min-width: ${breakpoints.large}px) {
      ${css(content)};
    }
  `,
};
