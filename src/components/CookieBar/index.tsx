import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';

const Container = styled<any>(motion.div)`
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

export const CookieBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen ?
        (
          <Container key="cookie-bar" {...animation}>
            <p>This site uses cookies. Or does it?</p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
            >
              Accept
            </button>
          </Container>
        )
        : null}
    </AnimatePresence>
  );
};
