import { css } from 'styled-components/macro'

interface Flex {
  direction?: 'column' | 'row';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
}

/** flex helper with optional config object (with default values) */
export const flex = ({
  direction = 'row',
  alignItems = 'center',
  justifyContent = 'center',
}: Flex = {}) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`
