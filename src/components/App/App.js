import React, { Component } from 'react';

import * as S from './styles';

import heroImage from '../../assets/yosemite.jpg';
import LinkedIn from '../icons/LinkedIn/LinkedIn';
import Github from '../icons/Github/Github';
import Angellist from '../icons/Angellist/Angellist';
import Medium from '../icons/Medium/Medium';

class App extends Component {
  constructor() {
    super();
    this.state = { paddingTop: '200px' };
  }
  componentDidMount() {
    window.addEventListener('resize', this.newMargin);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.newMargin);
  }

  /** keep the text in the  .~* ✨ stars 💫 *~.  */
  newMargin = () => {
    const height = document.documentElement.clientWidth * 0.2;
    this.setState({ paddingTop: (height < 200) ? `${height}px` : `200px` });
  }

  render() {
    return (
      <S.Container backgroundImage={heroImage}>
        <S.TextContainer paddingTop={this.state.paddingTop}>
          <S.P>hello, world!</S.P>
          <S.H1>David Sally</S.H1>
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
