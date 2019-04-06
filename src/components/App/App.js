import React from 'react';
import styled from 'styled-components';

import heroImage from '../../assets/yosemite.jpg';
import LinkedIn from '../icons/LinkedIn/LinkedIn';
import Github from '../icons/Github/Github';
import Angellist from '../icons/Angellist/Angellist';
import Medium from '../icons/Medium/Medium';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url('${heroImage}') no-repeat center center fixed;
`;

const H1 = styled.h1`
  color: white;
  font-weight: normal;
  margin: 0;
  margin-top: 10px;
  font-size: 2rem;
  font-family: 'Open Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const TextContainer = styled.div`
  padding-top: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 200px;
  width: 100%;
  font-size: 1.5em;
  color: white;
`;

const App = () => (
  <Container>
    <TextContainer>
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

export default App;
