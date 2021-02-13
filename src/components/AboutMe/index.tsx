import React from 'react'
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

const Img = styled.img`
  height: 100%;
  width: 100%;
  transform: scale(1);
  transform-origin: center;
  transition: transform 150ms linear;

  img {
    height: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }
`

const Column = styled.div`
  ${flex({ direction: 'column' })}
`

const CopyContainer = styled.div`
  ${flex({ direction: 'column' })}
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.63);
  color: white;

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

  ${media.tablet`
    margin-right: 2rem;
 `}
`

const ImageContainer = styled.div`
  overflow: hidden;
  max-height: 500px;
  margin: 1rem;

  ${media.tablet`
    margin-left: 2rem;
 `}
`

const splitter = (text: string) => {
  const words = text.split(' ')
  return words.map((word, index) => <span key={index}>{word} </span>)
}

const Container = styled.section`
  background-color: white;
  border: 5px dashed black;
  padding: 2rem;
  background: linear-gradient(45deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
`

const copy1 = `
Hello! I'm David Sally, a full stack engineer based out of Oakland, California.
I'm a highly opinionated software engineer with 5+ years experience in software,
robotics, and biotechnology. I enjoy building fast, responsive web apps using React,
Redux, and Typescript.
`

/** Just a lil section about me */
export const AboutMe: React.FC = () => (
  <Container>
    <MaxWidth>
      <H2>About Me</H2>
      <Column>
        <CopyContainer>
          <p>
            {splitter(copy1)}
          </p>
          <p>
            I specialize in Front End Development, and enjoy pointing out elements on a page that
            I built. Outside of Javascript, I‘m fascinated by the biotech world and constant
            innovations in microfluidics and CRISPR. In my free time, you can find me attempting
            to fix the latest thing to break on my Pontiac firebird.
          </p>
        </CopyContainer>
        <ImageContainer>
          <Image
            src="/images/coding.jpg"
            width={500}
            height={500}
            alt="David hard at work"
            title="Who's that handsome guy?"
          />
        </ImageContainer>
      </Column>
    </MaxWidth>
  </Container>
)
