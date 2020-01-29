import React from 'react';
import styled from 'styled-components';

import heroImage from '../../assets/yosemite.jpg';
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
  font-family: 'Open Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const H1 = styled.h1`
  color: white;
  font-weight: normal;
  background-color: #D02120;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 2rem;
  font-family: 'Futura-Medium';
  font-style: italic;

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
  padding-top: ${({ paddingTop }) => paddingTop };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: url('${({ backgroundImage }) => backgroundImage}') no-repeat center center fixed;
`;

const HeroBlock: React.FC<Props> = () => (
  <Container backgroundImage={heroImage}>
    <TextContainer paddingTop={'100px'}>
      <P>hello, world!</P>
      <H1>David Sally</H1>
      <Description>Software Engineer | Los Angeles, CA</Description>
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
