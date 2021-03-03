import Image from 'next/image'
import styled from 'styled-components'

const Positioning = styled.div`
  width: 80%;
  height: 100%;
  max-width: 10rem;
  position: relative;
  transition: transform 200ms linear;

  &:hover {
    transform: scale(1.1);
  }
`

export const Biorad = () => (
  <Positioning>
    <Image
      src="/images/biorad.png"
      alt="Bio-Rad Laboratories"
      layout="fill"
      objectFit="contain"
      loading="lazy"
    />
  </Positioning>
)
