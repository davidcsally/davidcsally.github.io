import styled from 'styled-components'

interface Props {
  fontSize?: string
  bold?: boolean
  color?: string
  textAlign?: string
  fontStyle?: string
  display?: 'flex'
}

const Text = styled.span<Props>`
  font-size: ${({ fontSize = '1rem' }) => fontSize};
  ${({ color }) => color && `color: ${color};`}
  ${({ display }) => display && `display: ${display};`}
  ${({ bold }) => bold && `font-weight: bold;`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ fontStyle }) => fontStyle && `font-style: ${fontStyle};`}
`
export default Text
