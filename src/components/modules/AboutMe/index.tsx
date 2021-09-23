import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { flex } from 'styles/mixins'
import { media } from 'styles/media'

import SquareRatio from 'components/shared/SquareRatio'
import Margin from 'components/shared/Margin'
import Text from 'components/shared/Text'

import TextSection from './TextSection'

const MaxWidth = styled.div`
  ${flex({ direction: 'column' })}
  max-width: 90rem;
  margin: 0 auto;
`

const H2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px white;
`

const StyledNextImage = styled(Image)`
  position: absolute;
  backface-visibility: hidden;
`

const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  gap: 1rem;

  ${media.tablet`
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  `}
`

/* TODO: use aspect-ratio when it gets support: `aspect-ratio: 1 / 1;` */
const ImageContainer = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: rotateY(${({ isFlipped }) => (isFlipped ? '-180deg' : '0deg')});
  position: relative;
`

const Back = styled.div`
  transform: rotateY(180deg);
  position: absolute;
  backface-visibility: hidden;
  border: 2px solid red;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 2rem;
`

const Container = styled.section`
  background-color: white;
  border: 5px dashed black;
  padding: 2rem;
  background: linear-gradient(
    45deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
`

/** Just a lil section about me */
const AboutMe = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <Container data-testid="about-me">
      <MaxWidth>
        <H2 tabIndex={0}>About Me</H2>
        <Column>
          <TextSection />
          <SquareRatio max="500px">
            <ImageContainer
              isFlipped={isFlipped}
              onClick={() => {
                setIsFlipped(!isFlipped)
              }}
            >
              <StyledNextImage
                src="/images/coding.jpg"
                alt="David hard at work"
                title="Who's that handsome guy?"
                objectFit="cover"
                layout="fill"
              />
              <Back>
                <Margin mb="0.5rem">
                  <Text bold fontSize="1.5rem">
                    David Sally
                  </Text>
                </Margin>
                <Text fontSize="1.25rem">
                  David works hard to juggle databases, apis, servers, micro
                  services, front ends, and other industry jargon.
                </Text>
              </Back>
            </ImageContainer>
          </SquareRatio>
        </Column>
      </MaxWidth>
    </Container>
  )
}

export default AboutMe
