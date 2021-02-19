import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

import gradient from './gradient'

interface Props {
  initialTime: number;
}

const handColor = '#d8c700'

const tick = (initial: number, offset = '-2.75rem') => keyframes`
  0% {
    transform: rotate(${initial}deg) translateY(${offset});
  }

  100% {
    transform: rotate(${initial + 360}deg) translateY(${offset});
  }
`

const Circle = styled.div`
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 1px 11px 1px rgba(0,0,0,0.75);
  background-image: url('/images/marble.jpg');
  background-size: cover;
  background-position: center;

  &:after {
    content: '';
    z-index: 1;
    height: 0.5rem;
    width: 0.5rem;
    display: block;
    background-color: black;
    clip-path: circle(50%);
  }
`

const Minutes = styled.div<Props>`
  height: 7rem;
  width: 10px;
  background-color: ${handColor};
  position: absolute;
  transform-origin: center;
  animation: ${({ initialTime }) => tick(initialTime)} 3600s infinite steps(60);
  background-image: url(${gradient});
  filter: drop-shadow(6px 4px 4px black);

  &:before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${handColor};
    transform: translateY(-4px);
  }

  &:after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 4px solid ${handColor};
    transform: translateY(4px);
    bottom: 0;
  }
`

const Hours = styled.div<Props>`
  height: 4.5rem;
  width: 12px;
  background-color: ${handColor};
  position: absolute;
  transform-origin: center;
  transform: translateY(-1.5rem);
  animation: ${({ initialTime }) => tick(initialTime, '20px')} 86400s infinite steps(60);
  background-image: url(${gradient});
  filter: drop-shadow(6px 4px 4px black);

  &:before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 4px solid ${handColor};
    transform: translateY(-4px);
  }

  &:after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 4px solid ${handColor};
    transform: translateY(4px);
    bottom: 0;
  }
`

const Clock = () => {
  const [minute, setMinute] = useState(0)
  const [hour, setHour] = useState(0)

  useEffect(() => {
    const currentTime = new Date()
    const currentMinute = currentTime.getMinutes()
    let currentHour = currentTime.getHours()
    if (currentHour > 12) currentHour -= 12
    setMinute(currentMinute)
    setHour(currentHour)
  }, [setMinute, setHour])

  return (
    <Circle>
      <Hours initialTime={(hour / 12) * 360} />
      <Minutes initialTime={(minute / 60) * 360} />
    </Circle>
  )
}

export default Clock
