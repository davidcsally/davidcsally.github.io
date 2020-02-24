import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import { FallingButton } from 'components/AnnoyingModal/FallingButton';

import P from '../Text';
import Header from '../Header';

// import { blinking, leftToRight } from 'styles/animations'
import CloseIcon from '../icons/CloseIcon';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}


Modal.setAppElement('#groot');

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  content: {
    top: 'auto',
    bottom: 'auto',
    left: 'auto',
    right: 'auto',
    padding: '0',

    minHeight: '0px',
    margin: '0 auto',
    width: '90%',
    height: '90%',
    borderWidth: 0,
    borderRadius: 0,
  },
};

// color = `#0C0032 #190061 #240090 #3500D3 #282828`

// blueprint grid
const Blueprint = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  height: 100%;

  background-size: 50px 50px;
  background-color: transparent;
  background-image:
    linear-gradient(
      0deg,
      transparent 24%,
      rgba(255, 255, 255, 0.25) 25%,
      rgba(255, 255, 255, 0.25) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.25) 75%,
      rgba(255, 255, 255, 0.25) 76%,
      transparent 77%, transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(255, 255, 255, 0.25) 25%,
      rgba(255, 255, 255, 0.25) 26%,
      transparent 27%, transparent 74%,
      rgba(255, 255, 255, 0.25) 75%,
      rgba(255, 255, 255, 0.25) 76%,
      transparent 77%,
      transparent
    );
`;

const Container = styled.div`
  height: 100%;
  background: radial-gradient(circle, rgba(91,161,227,0.75) 0%, rgba(39,86,139,0.75) 100%);
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  top: 1.5rem;
  right: 1.5rem;
  position: absolute;
  cursor: pointer;
  transition: transform 500ms ease-in-out;
  will-change: transform;

  &:focus,
  &:hover {
    transform: rotate(135deg);
  }
`;

// const StyledHeader = styled(Header)`
//   animation: ${leftToRight} 8s linear infinite;
//   margin: 2rem 0 1rem 0;
//   will-change: transform;
//   transition: transform 8s linear, font-variation-settings 250ms linear;
// `

// const Warning = styled(P)`
//   margin: 2rem 0 1rem 0;
//   font-size: 1.5rem;
//   font-variation-settings: 'wght' 600;
//   color: black;
//   animation: ${blinking} 1s linear infinite;
// `


const EmailCaptureModal: React.FC<Props> = ({ isOpen, closeModal }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    style={modalStyles}
    contentLabel="Example Modal"
  >
    <Container>
      <Blueprint>
        <CloseButton onClick={closeModal}><CloseIcon /></CloseButton>
        {/* <StyledHeader>Welcome to my website!</StyledHeader> */}
        {/* <Warning>Warning</Warning> */}
        <P>This contains some ridiculous css</P>
        <br />
        <P>Enjoy!</P>
        <br />
        <FallingButton closeModal={closeModal} />
      </Blueprint>
    </Container>

  </Modal>
);

export default EmailCaptureModal;
