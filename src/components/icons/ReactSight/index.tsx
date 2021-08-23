import Image from 'next/image'
import styled from 'styled-components'

const Positioning = styled.div`
  @keyframes bounce {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(18px);
    }
    100% {
      transform: translateY(-2px);
    }
  }

  width: 80%;
  max-width: 10rem;
  height: 100%;
  animation: 1500ms bounce infinite;
  animation-play-state: paused;

  &:hover {
    animation-play-state: running;
  }
`

const ReactSight = () => (
  <Positioning>
    <Image
      src="/images/reactsight.png"
      alt="React-Sight"
      layout="fill"
      objectFit="contain"
      loading="lazy"
    />
  </Positioning>
)

export default ReactSight
