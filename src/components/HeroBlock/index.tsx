import React from 'react';
import styled from 'styled-components/macro';

import ySmallWebP from '../../assets/yosemite/yosemite_small.webp';
import ySmallJpg from '../../assets/yosemite/yosemite_small.jpg';
import yFullWebP from '../../assets/yosemite/yosemite_60.webp';
import yFullJpg from '../../assets/yosemite/yosemite.jpg';

import LinkedIn from '../icons/LinkedIn';
import Github from '../icons/Github';
import Angellist from '../icons/Angellist';
import Medium from '../icons/Medium';

interface Props {
  backgroundImage?: string;
  paddingTop?: string;
}

const P = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  color: white;
`;

const Description = styled.p`
  color: white;
  margin-top: 10px;
  font-weight: 400;
  line-height: 1.8;
  font-family: 'Inter', "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const H1 = styled.h1`
  color: white;
  background-color: var(--supremely-red);
  padding: 1rem;
  margin: 1rem 0;
  font-size: 2rem;
  font-family: 'Futura-Heavy-Oblique';

  transition: all 200ms linear;

  :hover {
    transform: translateX(1px);
    box-shadow: 2px 3px 16px 7px rgba(0, 0, 0, 0.5);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 200px;
  width: 100%;
  font-size: 1.5em;
`;

const TextContainer = styled.div<Props>`
  padding-top: ${({ paddingTop }) => paddingTop};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  position: relative;
  background-color: black;
`;

const Picture = styled.picture`
  width: 100%;
`;

const Img = styled.img`
  background-color: black;
  object-fit: cover;
  position: absolute;
  min-height: 100vh;
  width: 100%;
`;

const HeroBlock: React.FC<Props> = () => (
  <Container>
    <Picture>
      <source
        media="(min-width: 0px)"
        srcSet={ySmallWebP}
        type="image/webp"
      />
      <source
        media="(min-width: 0px)"
        srcSet={ySmallJpg}
        type="image/jpg"
      />
      <source
        media="(min-width: 769px)"
        srcSet={yFullWebP}
        type="image/webp"
      />
      <source
        media="(min-width: 769px)"
        srcSet={yFullJpg}
        type="image/jpg"
      />
      <Img
        src={yFullJpg}
        alt="yosemite at night"
      />
    </Picture>
    <TextContainer paddingTop="100px">
      <P>hello, world!</P>
      <H1>David Sally</H1>
      <Description>Software Engineer | Oakland, CA</Description>
    </TextContainer>
    <ButtonContainer>
      <LinkedIn href="https://www.linkedin.com/in/davidcsally" />
      <Github href="https://github.com/davidcsally" />
      <Angellist href="https://angel.co/david-sally" />
      <Medium href="https://medium.com/@davidchristophersally" />
    </ButtonContainer>
  </Container>
);

export default HeroBlock;
