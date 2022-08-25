import styled from '@emotion/styled'

interface Props {
  mb?: string
  mr?: string
}

const Margin = styled.div<Props>`
  ${({ mb }) => mb && `margin-bottom: ${mb};`}
  ${({ mr }) => mr && `margin-right: ${mr};`}
`

export default Margin
