import styled from 'styled-components'

import { flex } from 'styles/mixins'

import data from './data'
import { PortfolioItem } from './PortfolioItem'

const H2 = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 2rem;
  font-family: 'Inter', Helvetica, sans-serif;
`

const List = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10.5rem, 1fr));
  grid-gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 200ms linear;
`

const MaxWidth = styled.div`
  ${flex({ direction: 'column' })}
  max-width: 90rem;
  width: 100%;
  margin: 0 auto;
`

const Container = styled.section`
  min-height: 500px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f2f2f2;
`

const PortfolioBlock = () => (
  <Container data-testid="portfolio-module">
    <MaxWidth>
      <H2>Stuff I&apos;ve done</H2>
      <List>
        {data.map((item, index) => (
          <PortfolioItem
            key={index}
            title={item.title}
            description={item.description}
            skills={item.skills}
            logo={item.logo}
          />
        ))}
      </List>
    </MaxWidth>
  </Container>
)

export default PortfolioBlock
