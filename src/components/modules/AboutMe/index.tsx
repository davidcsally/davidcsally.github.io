import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { flex } from 'styles/mixins'
import { media } from 'styles/media'

const MaxWidth = styled.div`
  ${flex({ direction: 'column' })}
  max-width: 90rem;
  margin: 0 auto;
`

const H2 = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px white;
`

const StyledNextImage = styled(Image)`
  position: absolute;
  backface-visibility: hidden;
`

const Column = styled.div`
  /* ${flex({ direction: 'column' })} */

  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  gap: 1rem;

  ${media.tablet`
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  `}
`

const CopyContainer = styled.div`
  ${flex({ direction: 'column' })}
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.63);
  color: white;
  max-width: 500px;
  justify-content: flex-start;

  p {
    line-height: 1.5;

    &::selection {
      background: var(--supremely-red);
    }

    span {
      &::selection {
        background: var(--supremely-red);
      }

      font-variation-settings: 'wght' 400;
      transition: font-variation-settings 150ms linear;

      &:hover {
        font-variation-settings: 'wght' 600;
      }
    }
  }
`

const Square = styled.div`
  display: grid;
  max-width: 500px;
  max-height: 500px;
  width: 100%;
  margin: 0 auto;
`

const Svg = styled.svg`
  grid-area: 1 / 1;
`

/* TODO: use aspect-ratio when it gets support: `aspect-ratio: 1 / 1;` */
const ImageContainer = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  grid-area: 1 / 1;

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

const splitter = (text: string) =>
  text.split(' ').map((word, index) => <span key={index}>{word} </span>)

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

const P = styled.p`
  font-size: 1.25rem;
`

const ImgTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`

const copy1 = `
  Hello! I'm David Sally, a full stack engineer based out of Oakland, California.
  I'm a highly opinionated software engineer with 5+ years experience in software,
  robotics, and biotechnology. I enjoy building fast, responsive web apps using React,
  Redux, and Typescript.
`

const Margin = styled.div<{ mb?: string; mr?: string }>`
  ${({ mb }) => mb && `margin-bottom: ${mb};`}
  ${({ mr }) => mr && `margin-right: ${mr};`}
`

/** Just a lil section about me */
export const AboutMe = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <Container data-testid="about-me">
      <MaxWidth>
        <H2>About Me</H2>
        <Column>
          <CopyContainer>
            <Margin mb="1rem">
              <p>{splitter(copy1)}</p>
            </Margin>
            <Margin mb="1rem">
              <p>
                I specialize in Front End Development, and enjoy pointing out
                elements on a page that I built. Outside of Javascript, I‘m
                fascinated by the biotech world and constant innovations in
                microfluidics and CRISPR. In my free time, you can find me
                attempting to fix the latest thing to break on my Pontiac
                firebird.
              </p>
            </Margin>
          </CopyContainer>
          <Square>
            <Svg viewBox="0 0 1 1" />
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
                <ImgTitle>David Sally</ImgTitle>
                <P>
                  David works hard to juggle databases, apis, servers, micro
                  services, front ends, and other industry jargon.
                </P>
              </Back>
            </ImageContainer>
          </Square>
        </Column>
      </MaxWidth>
    </Container>
  )
}
