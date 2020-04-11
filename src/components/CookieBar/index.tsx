import React from 'react';
import styled, { css } from 'styled-components/macro';
import { AnimatePresence, motion } from 'framer-motion';

import { flex } from 'styles/mixins';

interface Props {
  isCookieBarOpen: boolean;
  closeCookieBar: () => void;
}

const Column = styled.div`
  ${flex({ direction: 'column' })}
`;

const Row = styled.div`
  ${flex()}
`;

const Container = styled(motion.div)`
  ${flex()}
  position: fixed;
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

  button {
    border: 2px solid black;
    background-color: black;
    color: white;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
  }
`;

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
};

const TinyText = styled.p`
  font-size: 12px;
`;

export const CookieBar: React.FC<Props> = ({ isCookieBarOpen, closeCookieBar }) => (
  <AnimatePresence>
    {isCookieBarOpen
      ? (
        <Container key="cookie-bar" {...animation}>
          <Column>
            <Row>
              <p>This site uses cookies. Or does it?</p>
              <button
                type="button"
                onClick={() => closeCookieBar()}
                css={css`padding: 1rem 1rem;`}
              >
                Who Cares
              </button>
            </Row>
            <TinyText>(but actually it uses a cookie to remember if you clicked this)</TinyText>
          </Column>
        </Container>
      )
      : null}
  </AnimatePresence>
);
