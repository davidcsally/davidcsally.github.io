import styled from 'styled-components'

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

const H2 = styled.h2`
  color: #ffffff;
  margin: 2rem 0;
`

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: white;
  font-style: italic;
  font-family: 'Comic Sans MS';
  margin: 0 0 2rem 0;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 400px;
  background-color: blue;
  padding: 1rem;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`

const TechLabels = styled.div`
  font-size: 1rem;
  background-color: lightgray;
  color: black;
  border-radius: 10px;
  padding: 0.25rem 1rem;
  margin: 1rem 0.25rem;
  width: auto;

  &:hover {
  }
`

const TechnologySection = () => (
  <Column>
    <H2>Skills</H2>
    <Subtitle>The jargon section</Subtitle>
    <Row>
      {tech.map((t) => (
        <TechLabels key="t">{t}</TechLabels>
      ))}
    </Row>
  </Column>
)

export default TechnologySection
