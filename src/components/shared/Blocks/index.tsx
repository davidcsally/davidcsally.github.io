import styled from 'styled-components'

import { flex } from 'styles/mixins'
import { media } from 'styles/media'

export const Column = styled.div`
  ${flex({ direction: 'column' })}
  width: 100%;
`

export const Row = styled.div`
  ${flex({ direction: 'row' })}
  width: 100%;
`

export const ResponsiveCol = styled.div`
  ${flex({ direction: 'column' })}
  width: 100%;

  ${media.tablet`
    flex-direction: row;
  `}
`
