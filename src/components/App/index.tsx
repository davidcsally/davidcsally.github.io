import React from 'react';

import GlobalStyles from 'styles/global'

import HeroBlock from '../HeroBlock'
import TechnologySection from '../TechnologySection'
import PortfolioBlock from '../PortfolioBlock'

const App = () => (
  <div>
    <GlobalStyles />
    <HeroBlock />
    <TechnologySection />
    <PortfolioBlock />
  </div>
);

export default App;
