import styled from 'styled-components'

import type { FC } from 'react'

import { flex } from 'styles/mixins'
import { Column } from 'components/shared/Blocks'
import Text from 'components/shared/Text'
import Margin from 'components/shared/Margin'

interface LogoComponent {
  height?: string
  width?: string
}

export interface PortfolioItemProps {
  title: string
  description: string
  skills: string[]
  logo: {
    component: FC<LogoComponent>
    height?: string
    width?: string
    backgroundColor: string
  }
}

const Grid = styled.li`
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 5px 0px rgba(207, 207, 207, 1);
  transition: all 100ms linear;
  height: 100%;
  border-radius: 3px;

  &:hover {
    box-shadow: 10px 10px 8px 3px rgba(0, 0, 0, 0.596);
  }
`

const LogoContainer = styled.div<{ backgroundColor: string }>`
  ${flex()}
  height: 12rem;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`

const StyledColumn = styled(Column)`
  flex: 1;
  padding: 1rem;
  background-color: white;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  justify-content: flex-start;
`

const H3 = styled.h3`
  text-align: center;
  font-family: 'Inter', Helvetica, sans-serif;
`

const Code = styled.code`
  text-align: center;
`

export const PortfolioItem = ({
  title,
  description,
  skills,
  logo,
}: PortfolioItemProps) => (
  <Grid>
    <LogoContainer backgroundColor={logo.backgroundColor}>
      <logo.component height={logo.height} width={logo.width} />
    </LogoContainer>
    <StyledColumn>
      <Margin mb="1rem">
        <H3>{title}</H3>
      </Margin>
      <Margin mb="0.5rem">
        <Text textAlign="center">{description}</Text>
      </Margin>
      <Code>{skills.join(', ')}</Code>
    </StyledColumn>
  </Grid>
)
