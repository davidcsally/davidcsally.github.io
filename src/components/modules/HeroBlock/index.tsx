import styled from '@emotion/styled'

import Image from 'next/image'

import Margin from 'components/shared/Margin'
import Text from 'components/shared/Text'

import LinkedIn from 'components/icons/LinkedIn'
import Github from 'components/icons/Github'
import Angellist from 'components/icons/Angellist'
import Medium from 'components/icons/Medium'
import Instagram from 'components/icons/Instagram'

const P = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  color: white;
`

const H1 = styled.h1`
  color: white;
  background-color: var(--supremely-red);
  padding: 1rem;
  font-size: 2rem;
  font-family: 'Futura-Heavy-Oblique';

  transition: all 200ms linear;

  :hover {
    transform: translateX(1px);
    box-shadow: 2px 3px 16px 7px rgba(0, 0, 0, 0.5);
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 200px;
  width: 100%;
  font-size: 1.5em;
  z-index: 1;
`

const TextContainer = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  position: relative;
  background-color: black;
`

const Position = styled.div`
  background-color: black;
  position: absolute;
  min-height: 100vh;
  height: 100%;
  width: 100%;
`

const Nope = styled.div`
  position: relative;
  box-shadow: 0;
  transition: box-shadow 200ms linear;
  border-radius: 50%;

  :after {
    content: '';
    position: absolute;
    opacity: 0;
    width: 100%;
    border-bottom: solid 2px red;
    top: 50%;
    transform: rotate(45deg);
    transition: opacity 200ms linear;
  }

  &:hover {
    box-shadow: 0px 0px 0px 2px red;

    :after {
      opacity: 1;
    }
  }
`

const HeroBlock = () => (
  <Container data-testid="hero-module">
    <Position>
      <Image
        src="/images/yosemite.jpg"
        alt="Yosemite at night"
        layout="fill"
        objectFit="cover"
        priority
      />
    </Position>
    <TextContainer>
      <Margin mb="1rem">
        <P>hello, world!</P>
      </Margin>
      <Margin mb="1rem">
        <H1>David Sally</H1>
      </Margin>
      <Margin mb="1rem">
        <Text color="white">Software Engineer | Oakland, CA</Text>
      </Margin>
    </TextContainer>
    <ButtonContainer>
      <LinkedIn href="https://www.linkedin.com/in/davidcsally" />
      <Github href="https://github.com/davidcsally" />
      <Angellist href="https://angel.co/david-sally" />
      <Medium href="https://medium.com/@davidchristophersally" />
      <Nope>
        <Instagram />
      </Nope>
    </ButtonContainer>
  </Container>
)

export default HeroBlock
