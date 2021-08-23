import { css } from 'styled-components'

interface Flex {
  direction?: 'column' | 'row'
  alignItems?: 'center' | 'flex-start' | 'flex-end'
  flexWrap?: 'wrap' | 'nowrap'
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
}

/** flex helper with optional config object (with default values) */
export const flex = ({
  direction = 'row',
  alignItems = 'center',
  justifyContent = 'center',
  flexWrap = 'nowrap',
}: Flex = {}) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${flexWrap};
`
