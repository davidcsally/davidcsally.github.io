import styled from '@emotion/styled'

import { flex } from 'styles/mixins'
import Margin from 'components/shared/Margin'

const splitter = (text: string) =>
  text.split(' ').map((word, index) => <span key={index}>{word} </span>)

const CopyContainer = styled.div`
  ${flex({ direction: 'column' })}
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.63);
  color: white;
  max-width: 500px;
  justify-content: flex-start;

  p {
    line-height: 1.5;

    &::selection {
      background: var(--supremely-red);
    }

    span {
      &::selection {
        background: var(--supremely-red);
      }

      font-variation-settings: 'wght' 400;
      transition: font-variation-settings 150ms linear;

      &:hover {
        font-variation-settings: 'wght' 600;
      }
    }
  }
`

const copy1 = `
  Hello! I'm David Sally, a full stack engineer based out of Oakland, California.
  I'm a highly opinionated software engineer with 5+ years experience in software,
  robotics, and biotechnology. I enjoy building fast, responsive web apps using React,
  Redux, and Typescript.
`

const TextSection = () => (
  <CopyContainer>
    <Margin mb="1rem">
      <p>{splitter(copy1)}</p>
    </Margin>
    <Margin mb="1rem">
      <p>
        I specialize in Front End Development, and enjoy pointing out elements
        on a page that I built. Outside of Javascript, I‘m fascinated by the
        biotech world and constant innovations in microfluidics and CRISPR. In
        my free time, you can find me attempting to fix the latest thing to
        break on my Pontiac firebird.
      </p>
    </Margin>
  </CopyContainer>
)

export default TextSection
