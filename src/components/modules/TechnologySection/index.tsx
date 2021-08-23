import styled from 'styled-components'

import { flex } from 'styles/mixins'
import Margin from 'components/shared/Margin'
import Text from 'components/shared/Text'

const tech = [
  'JavaScript',
  'TypeScript',
  'Swift',
  'Ruby',
  'React',
  'Redux',
  'Redux-Saga',
  'Redux-Thunk',
  'Storybook',
  'Styled-Components',
  'Accessibility',
  'Webpack',
  'Babel',
  'NextJS',
  'CSS Grid',
  'Express',
  'GraphQL',
  'SQL',
  'MongoDB',
  'Neo4j',
]

const ComicSans = styled.span`
  font-family: 'Comic Sans MS';
`

const Column = styled.div`
  ${flex({ direction: 'column', justifyContent: 'flex-start' })}
`

const Layout = styled.div`
  min-height: 400px;
  background-color: blue;
  padding: 2rem;
`

const Row = styled.div`
  ${flex({ flexWrap: 'wrap' })}
`

const TechLabels = styled.div`
  font-size: 1rem;
  background-color: lightgray;
  color: black;
  border-radius: 10px;
  padding: 0.25rem 1rem;
  margin: 1rem 0.25rem;
  width: auto;
`

const TechnologySection = () => (
  <Layout>
    <Column data-testid="technology-section">
      <Margin mb="2rem">
        <Text fontSize="2rem" as="h2" color="var(--white)">
          Skills
        </Text>
      </Margin>
      <Margin mb="2rem">
        <ComicSans>
          <Text
            as="h3"
            color="var(--white)"
            fontSize="1.5rem"
            fontStyle="italic"
          >
            The jargon section
          </Text>
        </ComicSans>
      </Margin>
      <Row>
        {tech.map((t) => (
          <TechLabels key="t">{t}</TechLabels>
        ))}
      </Row>
    </Column>
  </Layout>
)

export default TechnologySection
