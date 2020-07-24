import React from 'react';
import styled from 'styled-components/macro';

import codingMobileJpg from 'assets/coding/coding_mobile.jpg';
import codingMobileWebp from 'assets/coding/coding_mobile.webp';
import codingTabletJpg from 'assets/coding/coding_tablet.jpg';
import codingTabletWebp from 'assets/coding/coding_tablet.webp';
import codingJpg from 'assets/coding/coding.jpg';
import codingWebp from 'assets/coding/coding.webp';

import { flex } from 'styles/mixins';
import { media } from 'styles/media';

const MaxWidth = styled.div`
  ${flex({ direction: 'column' })}
  max-width: 90rem;
  margin: 0 auto;
`;

const H2 = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px white;
`;

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
`;

const Row = styled.div`
  ${flex({ direction: 'column' })}

  ${media.tablet`
    flex-direction: row;
  `}
`;

const CopyContainer = styled.div`
  ${flex({ direction: 'column' })}
  flex: 1;
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
`;

const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
  max-height: 500px;
  margin: 1rem;

  ${media.tablet`
    margin-left: 2rem;
 `}
`;

const splitter = (text: string) => {
  const words = text.split(' ');
  return words.map((w) => <span>{w} </span>);
};

const Container = styled.section`
  background-color: white;
  border: 5px dashed black;
  padding: 2rem;
  background: linear-gradient(45deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
`;

const copy1 = `
Hello! I'm David Sally, a full stack engineer based out of Oakland, California.
I'm a highly opinionated software engineer with 5+ years experience in software,
robotics, and biotechnology. I enjoy building fast, responsive web apps using React,
Redux, and Typescript.
`;

/** Just a lil section about me */
export const AboutMe: React.FC = () => (
  <Container>
    <MaxWidth>
      <H2>About Me</H2>
      <Row>
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
          <picture>
            <source
              srcSet={codingMobileWebp}
              type="image/webp"
            />
            <source
              srcSet={codingMobileJpg}
              type="image/jpg"
            />
            <source
              srcSet={codingTabletWebp}
              type="image/webp"
              media="(min-width: 769px)"
            />
            <source
              srcSet={codingTabletJpg}
              type="image/jpg"
              media="(min-width: 769px)"
            />
            <source
              srcSet={codingWebp}
              type="image/webp"
              media="(min-width: 1024px)"
            />
            <source
              srcSet={codingJpg}
              type="image/jpg"
              media="(min-width: 1024px)"
            />
            <Img
              src={codingJpg}
              alt="David hard at work"
              title="Who's that handsome guy?"
              loading="lazy"
            />
          </picture>
        </ImageContainer>
      </Row>
    </MaxWidth>
  </Container>
);
