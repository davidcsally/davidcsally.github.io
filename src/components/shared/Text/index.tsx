import styled from 'styled-components'

interface Props {
  fontSize?: string
  bold?: boolean
  color?: string
  textAlign?: string
  fontStyle?: string
}

const Text = styled.span<Props>`
  font-size: ${({ fontSize = '1rem' }) => fontSize};
  ${({ color }) => color && `color: ${color};`}
  ${({ bold }) => bold && `font-weight: bold;`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ fontStyle }) => fontStyle && `font-style: ${fontStyle};`}
`
export default Text
