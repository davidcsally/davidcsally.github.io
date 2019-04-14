import React, { Component } from 'react';

import * as S from './styles';

import heroImage from '../../assets/yosemite.jpg';
import LinkedIn from '../icons/LinkedIn/LinkedIn';
import Github from '../icons/Github/Github';
import Angellist from '../icons/Angellist/Angellist';
import Medium from '../icons/Medium/Medium';

class App extends Component {
  render() {
    return (
      <S.Container backgroundImage={heroImage}>
        <S.TextContainer paddingTop={'100px'}>
          <S.P>hello, world!</S.P>
          <S.H1Container>
            <S.H1>David Sally</S.H1>
          </S.H1Container>
          <S.Description>Software Engineer | Los Angeles, CA</S.Description>
        </S.TextContainer>
        <S.ButtonContainer>
          <LinkedIn href="https://www.linkedin.com/in/davidcsally" />
          <Github href="https://github.com/davidcsally" />
          <Angellist href="https://angel.co/david-sally" />
          <Medium href="https://medium.com/@davidchristophersally" />
        </S.ButtonContainer>
      </S.Container>
    );
  }
}

export default App;
