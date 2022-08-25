// style-utils.js
import { css } from '@emotion/react'

// values in px
const breakpoints = {
  small: 480,
  medium: 768,
  large: 1024,
}

/**
 * Media query helpers for tablet+ and desktop+ screen sizes.
 * Based on https://github.com/styled-components/styled-components/blob/master/packages/styled-components/docs/tips-and-tricks.md
 */
export const media = {
  small: (content: TemplateStringsArray) => css`
    @media (min-width: ${breakpoints.small}px) {
      ${css(content)};
    }
  `,

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
}
