import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Text = styled.p`
  font-family: 'Inter', 'Comic Sans MS';
  margin: 0.5rem 0;
  font-size: 2.5rem;
  font-variation-settings: 'wght' 600, 'slnt' 0;
  transition: font-variation-settings 250ms linear;

  &:hover {
    font-variation-settings: 'wght' 600, 'slnt' -20;
  }
`;

const Header: React.FC<Props> = ({ children, ...rest }) => <Text {...rest}>{children}</Text>;

export default Header;
