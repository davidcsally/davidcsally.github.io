import styled from 'styled-components'

import { Column } from 'components/shared/Blocks'

const Background = styled.footer`
  background-color: black;
  color: #00ff41;
  padding: 0.5rem;

  a {
    color: #00ff41;
  }
`

const Footer = () => (
  <Background>
    <Column>
      <div>Made with {'<'}3 in California</div>
      <a href="https://github.com/davidcsally/davidcsally.github.io">
        Source code available on GitHub
      </a>
    </Column>
  </Background>
)

export default Footer
