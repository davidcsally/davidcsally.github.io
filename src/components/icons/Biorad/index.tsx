import React from 'react'
import styled from 'styled-components'

import logo from './logo.png'

const Img = styled.img`
  width: 80%;
  height: auto;
  max-width: 10rem;
  transition: transform 200ms linear;

  &:hover {
    transform: scale(1.1);
  }
`

export const Biorad: React.FC<any> = ({ className }) => (
  <Img className={className} src={logo} alt="Bio-Rad Laboratories" />
)
