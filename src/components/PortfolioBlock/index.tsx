import React from 'react';
import styled from 'styled-components/macro';

import { flex } from 'styles/mixins';
// // import { media } from 'styles/media';

import {
  // ResponsiveCol,
  Column,
} from '../Blocks';

import { MeLogo } from '../icons/MeLogo';
import { Disney } from '../icons/Disney';
import { MedCircle } from '../icons/MedCircle';
import { Biorad } from '../icons/Biorad';
import { ReactSight } from '../icons/ReactSight';
import { Dictionary } from '../icons/Dictionary';

const H2 = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 2rem;
  font-family: "Inter", Helvetica, sans-serif;
`;

const H3 = styled.h3`
  color: black;
  margin: 0;
  text-align: center;
  font-family: "Inter", Helvetica, sans-serif;
`;

const P = styled.p`
  line-height: 1.5rem;
  color: #ffffff;
  color: black;
  font-family: "Inter", Helvetica, sans-serif;
`;

const List = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(10.5rem, 1fr));
  grid-gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 200ms linear;
`;

const Container = styled.div`
  min-height: 500px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f2f2f2;
`;

const LogoContainer = styled.div<{ backgroundColor: string }>`
  ${flex()}
  height: 12rem;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledColumn = styled(Column)`
  flex: 1;
  padding: 1rem;
  align-items: center;
  background-color: white;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const Grid = styled.li`
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 5px 0px rgba(207,207,207,1);
  transition: all 100ms linear;
  height: 100%;
  border-radius: 3px;

  &:hover {
    box-shadow: 10px 10px 8px 3px rgba(0, 0, 0, 0.596);
  }
`;

const MaxWidth = styled.div`
  ${flex({ direction: 'column' })}
  max-width: 90rem;
  width: 100%;
  margin: 0 auto;
`;

const Code = styled.code`
  text-align: center;
`;

export const PortfolioBlock = () => (
  <Container>
    <MaxWidth>
      <H2>Stuff I&apos;ve done</H2>
      <List>
        <Grid>
          <LogoContainer backgroundColor="blue">
            <Dictionary height="auto" width="80%" />
          </LogoContainer>
          <StyledColumn>
            <H3>Dictionary.com</H3>
            <P>Senior Software Engineer</P>
            <Code>React, Web Vitals</Code>
          </StyledColumn>
        </Grid>
        <Grid>
          <LogoContainer backgroundColor="#7023f0">
            <MeLogo height="60%" width="60%" />
          </LogoContainer>
          <StyledColumn>
            <H3>MeUndies</H3>
            <P>Full Stack Engineer</P>
            <Code>React, Redux, Rails, Solidus</Code>
          </StyledColumn>
        </Grid>
        <Grid>
          <LogoContainer backgroundColor="#0795e6">
            <Disney height="70%" width="70%" />
          </LogoContainer>
          <StyledColumn>
            <H3>Disney</H3>
            <P>Full Stack Engineer</P>
            <Code>React, Redux, Backbone, Rails</Code>
          </StyledColumn>
        </Grid>
        <Grid>
          <LogoContainer backgroundColor="#e7e7e7">
            <MedCircle height="70%" width="70%" />
          </LogoContainer>
          <StyledColumn>
            <H3>MedCircle</H3>
            <P>Full Stack Engineer</P>
            <Code>React, Redux, Node, Express</Code>
          </StyledColumn>
        </Grid>
        <Grid>
          <LogoContainer backgroundColor="#e7e7e7">
            <ReactSight />
          </LogoContainer>
          <StyledColumn>
            <H3>React-Sight</H3>
            <P>Open Source Project</P>
            <Code>React, D3, Boostrap, Chrome Extension</Code>
          </StyledColumn>
        </Grid>
        <Grid>
          <LogoContainer backgroundColor="#e7e7e7">
            <Biorad />
          </LogoContainer>
          <StyledColumn>
            <H3>Bio-Rad Laboratories</H3>
            <P>Research Associate</P>
            <Code>Digital PCR, centrifuging, pipetting, soldering</Code>
          </StyledColumn>
        </Grid>
      </List>
    </MaxWidth>
  </Container>
);
