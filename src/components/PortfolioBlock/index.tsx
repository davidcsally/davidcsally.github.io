import React from 'react';
import styled from 'styled-components/macro';

const H2 = styled.h2`
  color: #ffffff;
`;

const H3 = styled.h3`
  color: #ffffff;
`;

const P = styled.p`
  line-height: 1.5rem;
  color: #ffffff;
`;

const List = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  grid-gap: 1rem;
  justify-content: center;

  transition: all 200ms linear;
`;

const Box = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 1rem;

  width: 100%;
  min-height: 400px;
  border: 2px solid black;

  background-color: #484848;

  transition: all 200ms linear;

  &:hover {
    transform: scale(1.05);
  }
`;

const Container = styled.div`
  min-height: 500px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #000000;
`;

const PortfolioBlock = () => (
  <Container>
    <H2>Projects</H2>
    <List>
      <Box>
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
      </Box>
      <Box>
        <H3>Disney</H3>
        <P>
          At Disney, I worked on www.shopdisney.com, which consisted of two main
          projects: the catalog, and checkout.
          {' '}
          <br />
          {' '}
          <br />

          The catalog portion consisted of an es5 backbone application, that was
          managed with a propetary CMS.
          <br />
          <br />

          Checkout (and the account portion) were built using create-react-app,
          was a separate, PCI compliant single page application.
        </P>
      </Box>
      <Box>
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
      </Box>
      <Box>
        <H3>React-Sight</H3>
        <P>
          React-Sight is an open source Chrome extension for React developers, and
          provides them with a visual, graph based version of the React DevTools.
          <br />
          <br />
          React-Sight has over 2,000 stars on GitHub, and over 11,000 downloads from
          the Chrome extensions marketplace.
        </P>
      </Box>
      <Box>
        <H3>Bio-Rad Laboratories</H3>
        <P>
          At Bio-Rad, I was involved in prototyping, building, and testing next generation
          droplet digital PCR technology.
        </P>
      </Box>
    </List>
  </Container>
);

export default PortfolioBlock;
