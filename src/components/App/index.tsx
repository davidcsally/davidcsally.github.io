import React from 'react';
import styled from 'styled-components';

import GlobalStyles from 'styles/global'

import HeroBlock from '../HeroBlock'
import PortfolioBlock from '../PortfolioBlock'

const App = () => (
  <div>
    <GlobalStyles />
    <HeroBlock />
    <PortfolioBlock />
  </div>
);

export default App;
