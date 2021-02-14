import React from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

import { flex } from 'styles/mixins'

interface Props {
  isCookieBarOpen: boolean;
  closeCookieBar: () => void;
}

const Column = styled.div`
  ${flex({ direction: 'column' })}
`

const Row = styled.div`
  ${flex()}
`

const Container = styled(motion.section)`
  ${flex()}
  position: fixed;
  display: inline-block;
  bottom: 0;
  min-height: 5rem;
  background-color: white;
  color: black;
  width: 100%;
  border: 2px solid black;
  font-size: 1.5rem;
  padding: 1rem;
  z-index: 10;

  p {
    margin-right: 1.5rem;
  }
`

const animation = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 10,
  },
}

const TinyText = styled.p`
  font-size: 12px;
`

const Button = styled.button`
  padding: 1rem 1rem;
  border: 2px solid black;
  background-color: black;
  color: white;
  border-radius: 4px;
  cursor: pointer;
`

const InlineBlock = styled.p`
  display: inline-block;
`

export const CookieBar: React.FC<Props> = ({ isCookieBarOpen, closeCookieBar }) => (
  <AnimatePresence>
    {isCookieBarOpen
      ? (
        <Container key="cookie-bar" {...animation}>
          <Column>
            <Row>
              <InlineBlock>This site uses cookies. Or does it?</InlineBlock>
              <Button
                type="button"
                onClick={() => closeCookieBar()}
              >
                Who Cares
              </Button>
            </Row>
            <TinyText>(but actually it uses a cookie to remember if you clicked this)</TinyText>
          </Column>
        </Container>
      )
      : null}
  </AnimatePresence>
)
