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

const H2 = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

const H3 = styled.h3`
  color: black;
  margin: 0;
`;

const P = styled.p`
  line-height: 1.5rem;
  color: #ffffff;
  color: black;
`;

const List = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  display: grid;
  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: all 200ms linear;
`;

// const Box = styled.li`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;

//   padding: 1rem;

//   width: 100%;
//   min-height: 400px;
//   border: 2px solid black;

//   background-color: #484848;

//   transition: all 200ms linear;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

const Container = styled.div`
  min-height: 500px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f2f2f2;
`;

const LogoContainer = styled.div<{ backgroundColor: string }>`
  ${flex()}
  height: 12rem;

  background-color: ${({ backgroundColor }) => backgroundColor};
  /* border: 1px solid #b7b7b7; */
  border-right-width: 0;
`;

const StyledColumn = styled(Column)`
  flex: 1;
  padding: 1rem;
  align-items: flex-start;
  background-color: white;
  /* border: 1px solid #b7b7b7; */
  border-top: 2px solid black;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  box-shadow: 10px 10px 5px 0px rgba(207,207,207,1);

`;

const MaxWidth = styled.div`
  ${flex({ direction: 'column' })}
  max-width: 90rem;
  margin: 0 auto;
`;

export const PortfolioBlock = () => (
  <Container>
    <MaxWidth>
      <H2>Projects</H2>
      <List>
        <Grid>
          <LogoContainer backgroundColor="#7023f0">
            <MeLogo height="60%" width="60%" />
          </LogoContainer>
          <StyledColumn>
            <H3>MeUndies</H3>
            <P>
              At MeUndies, I helped build out new features and redesign existing ones.
              Some of the pages and features I played a major role in:
              <br />
              - Desktop navigation
              <br />
              - Checkout
              <br />
              - The gift card flow
              <br />
              - Account Management
              <br />
              <br />
              In addition, I helped build our component library, and many of the shared
              components and icons used on the site.
            </P>
          </StyledColumn>
        </Grid>
        <Grid>
          <LogoContainer backgroundColor="#0795e6">
            <Disney height="70%" width="70%" />
          </LogoContainer>
          <StyledColumn>
            <H3>Disney</H3>
            <P>
              At Disney, I worked on www.shopdisney.com, which consisted of two main
              projects: the catalog, and checkout.
              <br />
              <br />
              The catalog portion consisted of an es5 backbone application, that was
              managed with a propetary CMS.
              <br />
              <br />
              Checkout (and the account portion) were built using create-react-app,
              was a separate, PCI compliant single page application.
            </P>
          </StyledColumn>
        </Grid>
        <Grid>
          <LogoContainer backgroundColor="white">
            <MedCircle height="70%" width="70%" />
          </LogoContainer>
          <StyledColumn>
            <H3>MedCircle</H3>
            <P>
              At MedCircle, I worked on our full stack health focused social network.
              <br />
              <br />
              Our techstack included a server rendered React + Redux front end, with
              a node based API.
              <br />
              <br />
            </P>
          </StyledColumn>
        </Grid>
        <Grid>
          <LogoContainer backgroundColor="white">
            <ReactSight />
          </LogoContainer>
          <StyledColumn>
            <H3>React-Sight</H3>
            <P>
              React-Sight is an open source Chrome extension for React developers, and
              provides them with a visual, graph based version of the React DevTools.
              <br />
              <br />
              React-Sight has over 2,000 stars on GitHub, and over 11,000 downloads from
              the Chrome extensions marketplace.
            </P>
          </StyledColumn>
        </Grid>
        <Grid>
          <LogoContainer backgroundColor="white">
            <Biorad />
          </LogoContainer>
          <StyledColumn>
            <H3>Bio-Rad Laboratories</H3>
            <P>
              At Bio-Rad, I was involved in prototyping, building, and testing next generation
              droplet digital PCR technology.
            </P>
          </StyledColumn>
        </Grid>
      </List>
    </MaxWidth>
  </Container>
);
