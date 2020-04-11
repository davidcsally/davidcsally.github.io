import React from 'react';
import styled, { css } from 'styled-components/macro';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  isCookieBarOpen: boolean;
  closeCookieBar: () => void;
}

const Container = styled(motion.div)`
  position: fixed;
  bottom: 0;
  min-height: 5rem;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const CookieBar: React.FC<Props> = ({ isCookieBarOpen, closeCookieBar }) => (
  <AnimatePresence>
    {isCookieBarOpen
      ? (
        <Container key="cookie-bar" {...animation}>
          <p>This site uses cookies. Or does it?</p>
          <button
            type="button"
            onClick={() => closeCookieBar()}
            css={css`padding: 1rem 1rem;`}
          >
            Ok
          </button>
        </Container>
      )
      : null}
  </AnimatePresence>
);
