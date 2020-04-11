import React from 'react';
import styled, { css } from 'styled-components/macro';

import PicOfMe from '../../assets/coding.jpg';

import { flex } from '../../styles/mixins';

const Container = css`
  ${flex({ direction: 'column', alignItems: 'flex-start' })}
  background-color: white;
  border: 5px dashed black;
  padding: 2rem;
  background: linear-gradient(45deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%); 
`;

const H2 = css`
  margin: 0;
`;

const Img = css`
  height: 100%;
  width: 100%;
  transform: scale(1);
  transform-origin: center;
  transition: transform 150ms linear;

  &:hover {
    transform: scale(1.1);
  }
`;

const Row = css`
  ${flex()}
`;

const CopyContainer = styled.div`
  ${flex({ direction: 'column' })}
  width: 50%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.63);
  color: white;

  p {
    line-height: 1.5;

    &::selection {
      background: var(--supremely-red);
    }
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  overflow: hidden;
  max-height: 500px;
  margin: 1rem;
`;

/** Just a lil section about me */
export const AboutMe: React.FC = () => (
  <div css={Container}>
    <h2 css={H2}>About Me</h2>
    <div css={Row}>
      <CopyContainer>
        <p>
          Hello! I&apos;m David Sally, a full stack engineer based out of Oakland, California.
          I&apos;m a highly opinionated software engineer with 5+ years experience in software,
          robotics, and biotechnology. I enjoy building fast, responsive web apps using React,
          Redux, and Typescript.
        </p>
        <p>
          I specialize in Front End Development, and enjoy pointing out elements on a page that I
          built. Outside of Javascript, I‘m fascinated by the biotech world and constant innovations
          in microfluidics and CRISPR. In my free time, you can find me attempting to fix the latest
          thing to break on my Pontiac firebird.
        </p>
      </CopyContainer>
      <ImageContainer>
        <img css={Img} src={PicOfMe} alt="David hard at work" title="Who's that handsome guy?" />
      </ImageContainer>
    </div>
  </div>
);
