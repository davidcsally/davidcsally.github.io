import styled from 'styled-components'

const Background = styled.footer`
  background-color: black;
  color: #00ff41;
  padding: 0.5rem;

  a {
    color: #00ff41;
  }
`

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
