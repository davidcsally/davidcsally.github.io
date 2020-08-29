import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  transition: transform 200ms linear;

  &:hover {
    transform: scale(1.1);
  }
`

export const Dictionary: React.FC<any> = ({
  className,
  height,
  width,
}) => (
  <Svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 360 80"
    xmlSpace="preserve"
    className={className}
    height={height}
    width={width}
  >
    <g>
      <path
        fill="white"
        d="M231,62.6c-1.2,0-2.8-0.1-3.7-0.2c0.1-0.4,0.3-1.4,0.4-2.3l0.1-0.4h-0.1l-0.1,0.1c-1.3,1.9-2.7,2.6-4.7,2.6c-0.2,0-0.4,0-0.7,0c-4.1-0.3-6-1.9-6-5.5c0-0.5,0-1,0.1-1.6c0.9-4.7,4.3-5.7,9.5-6l3.2-0.1c0.4,0,0.8-0.4,0.8-0.7l0.5-2.7c0.1-0.5-0.3-1.1-0.8-1.3c-1.2-0.4-2.6-0.6-3.9-0.6c-1.5,0-3.6,0.3-5.1,0.6l0,0c-0.2,0-0.2-0.1-0.3-0.2c0-0.4-0.1-0.8-0.1-1.4c0-0.9,0-1.8,0.2-2.7c0-0.1,0.1-0.2,0.3-0.3c1.9-0.4,4-0.7,6.1-0.7c3.2,0,6.6,0.7,8.6,1.9c0.4,0.3,0.7,0.9,0.6,1.4c0,0.1-2.2,12.7-2.4,14c0,0.1-0.6,4.4-0.7,5.8C232.4,62.6,231.7,62.6,231,62.6z M225.1,52.7c-2,0.1-3.1,0.5-3.5,2.6c0,0.2-0.1,0.5-0.1,0.9c0,1.1,0.4,2.3,2.5,2.3c1.4,0,2.7-0.4,3.8-1c0.2-0.1,0.4-0.4,0.4-0.6l0.5-3.2c0.1-0.3,0-0.5-0.2-0.7c-0.2-0.2-0.4-0.4-0.7-0.4l0,0L225.1,52.7z"
      />
      <path
        fill="white"
        d="M87.8,75.4c-15.7,0-28.6-12.5-28.6-27.9S72,19.5,87.8,19.5c7.2,0,13.8,2.6,18.8,7h6.6c-6.1-7-15.2-11.5-25.3-11.5c-5.5,0-10.7,1.3-15.3,3.7L60.7,1.1C60,0,58.6-0.3,57.5,0.4c-1.1,0.7-1.3,2.1-0.6,3.2l11.7,17.4c-1.7,1.1-3.2,2.5-4.7,4L34.7,1.1c-1-0.8-2.5-0.7-3.3,0.3s-0.7,2.5,0.3,3.3l29.2,23.8c-1.1,1.4-2,2.9-2.8,4.5L3.4,4.8c-1.2-0.6-2.5-0.2-3.1,1s-0.2,2.5,1,3.1l55,28.3c-0.6,1.9-1.2,4.1-1.4,6.2L8.1,32.1c-1.3-0.3-2.5,0.4-2.9,1.7C5,35,5.7,36.2,6.9,36.6L54.5,48c0,2.2,0.3,4.4,0.8,6.4l-32.6,2.1c-1.3,0.1-2.2,1.1-2.2,2.5c0.1,1.2,1.2,2.2,2.5,2.1L56.8,59C61.6,71.2,73.7,80,87.9,80c9.8,0,18.5-4.1,24.6-10.7h-6.8C100.7,73.1,94.5,75.4,87.8,75.4z"
      />
      <path
        fill="white"
        d="M88.1,62.5c-3.3,0-8.1-0.2-10.9-0.6l5.5-30.6c2.8-0.4,7.9-0.6,10.8-0.6c7.8,0,12,4.5,12,12.7C105.6,54.8,98.5,62.5,88.1,62.5z M92.2,36.2c-1,0-2.5,0-3.7,0.2h-0.2l-3.6,20.3H85c0.9,0.1,3,0.2,4.1,0.2c5.9,0,9.5-5.2,9.5-13.9C98.6,38.7,96.3,36.2,92.2,36.2z"
      />
      <path
        fill="white"
        d="M107.8,62.1l4-22.2h5.4l-4,22.2H107.8z M115,36.9c-1.9,0-2.5-1.3-2.5-2.5c0-2.2,1.6-3.7,3.8-3.7c1.9,0,2.5,1.3,2.5,2.5C118.8,35.4,117.3,36.9,115,36.9z"
      />
      <path
        fill="white"
        d="M129.2,62.6c-5.8,0-9.2-3.3-9.2-8.8c0-1,0.1-2,0.3-3.1c1.3-7.4,5.1-11.2,11.5-11.2c2,0,4.4,0.4,6,0.9c-0.3,1.4-0.8,3.3-1.5,4.9c-1.2-0.4-2.7-0.7-4.2-0.7c-3.3,0-4.9,1.8-5.7,6.3c-0.2,1.1-0.3,1.9-0.3,2.7c0,2.9,1.3,4.1,4.5,4.1c1.3,0,3.1-0.4,4.5-1.1c0.3,1.8,0.4,3.4,0.4,4.9C134,62,131,62.6,129.2,62.6z"
      />
      <path
        fill="white"
        d="M147.4,62.6c-4.3,0-6.5-1.9-6.5-5.7c0-0.8,0.1-1.5,0.2-2.1l1.8-10.2H140l0.8-4.6h2.9l0.9-4.8c1.7-0.4,3.8-0.8,5.6-0.9l-1,5.6h6c-0.2,1.3-0.5,3-1.1,4.6h-5.7L146.5,55c-0.1,0.3-0.1,0.5-0.1,0.7c0,1.8,1.3,2,2.8,2c1,0,2.3-0.3,3.2-0.6c0,0.5,0.1,1.1,0.1,1.7c0,1.1-0.1,2.2-0.2,2.9C151,62.3,148.7,62.6,147.4,62.6z"
      />
      <path
        fill="white"
        d="M156.1,62.1l4-22.2h5.4l-4,22.2H156.1z M163.3,36.9c-1.9,0-2.5-1.3-2.5-2.5c0-2.2,1.6-3.7,3.8-3.7c1.9,0,2.5,1.3,2.5,2.5C167,35.4,165.6,36.9,163.3,36.9z"
      />
      <path
        fill="white"
        d="M177.6,62.6c-5.9,0-9.3-3.2-9.3-8.8c0-1.1,0.2-2.4,0.3-3.3c1.2-7,5.3-11,11.7-11c5.9,0,9.3,3.2,9.3,8.8c0,0.9-0.1,2.1-0.3,3.3C188.1,58.7,184,62.6,177.6,62.6z M179.9,43.9c-3,0-4.6,2.1-5.4,7c-0.2,1.1-0.3,2.1-0.3,2.9c0,2.8,1.3,4.2,3.8,4.2c3,0,4.5-2,5.4-7c0.2-1,0.3-2.1,0.3-2.9C183.6,45.3,182.4,43.9,179.9,43.9z"
      />
      <path
        fill="white"
        d="M204.8,62.1l2.7-15.2c0.1-0.4,0.1-0.5,0.1-0.7c0-1.5-1.1-2.3-3.1-2.3c-1.3,0-2.7,0.4-4.2,1.2l-0.1,0.1l-3,16.8h-5.4l4-22c1.6-0.2,3.7-0.3,5.5-0.4l-0.4,2.3h0.8l0.1-0.1c2.2-2.3,4.2-2.5,6.1-2.5c2.2,0,5.7,0.6,5.7,5c0,0.4-0.1,1-0.2,1.7l-2.9,15.9H204.8z"
      />
      <path
        fill="white"
        d="M239,62.1l4-22c1.6-0.2,3.7-0.3,5.5-0.4l-0.5,2.9h0.2l0.1-0.1c2.2-2.7,4.7-3.1,6-3.1c0.4,0,1,0.1,1.3,0.2c-0.4,1.8-0.9,3.9-1.5,5.6c-0.6-0.2-1.3-0.2-2.1-0.2c-1.5,0-3.2,0.4-4.6,1.1l-0.1,0.1l-2.9,15.8H239z"
      />
      <path
        fill="white"
        d="M255.4,71.6c-0.8,0-2.8-0.1-4-0.7c0.4-1.8,0.9-3.5,1.5-4.8c0.9,0.3,2.4,0.4,3.5,0.4c1.7,0,2.5-0.5,3.6-2.3l1.2-1.8v-0.1c-1.4-5-3.2-13.7-3.5-22.1c1.5-0.2,3.6-0.3,5.2-0.4l1.4,13.4c0.1,0.4,0.2,1.5,0.2,2.6v0.3h0.8l0.1-0.2c0.3-0.8,0.6-1.7,1.1-2.6l6.5-13.5c1.5,0,3.8,0.1,5.3,0.3L267,61.8C262.9,70,259.6,71.6,255.4,71.6z"
      />
      <path
        fill="white"
        d="M277.5,62.6c-1.7,0-2.7-0.9-2.7-2.4c0-2.6,2-3.6,3.7-3.6c1.5,0,2.5,1,2.5,2.5C281.1,61.6,279.1,62.6,277.5,62.6z"
      />
      <path
        fill="white"
        d="M294.3,62.6c-5.8,0-9.2-3.3-9.2-8.8c0-1,0.1-2,0.3-3.1c1.3-7.4,5.1-11.2,11.5-11.2c2,0,4.4,0.4,6,0.9c-0.3,1.4-0.8,3.3-1.5,4.9c-1.2-0.4-2.7-0.7-4.2-0.7c-3.3,0-4.9,1.8-5.7,6.3c-0.2,1.1-0.3,1.9-0.3,2.7c0,2.9,1.3,4.1,4.5,4.1c1.4,0,3-0.4,4.2-0.9c0.2,1.6,0.3,3.4,0.3,5C298.6,62.2,296,62.6,294.3,62.6z"
      />
      <path
        fill="white"
        d="M312.9,62.6c-5.9,0-9.3-3.2-9.3-8.8c0-1.1,0.2-2.4,0.3-3.3c1.2-7,5.3-11,11.7-11c5.9,0,9.3,3.2,9.3,8.8c0,0.9-0.1,2.1-0.3,3.3C323.4,58.7,319.3,62.6,312.9,62.6z M315.2,43.9c-3,0-4.6,2.1-5.4,7c-0.2,1.1-0.3,2.1-0.3,2.9c0,2.8,1.3,4.2,3.8,4.2c3,0,4.5-2,5.4-7c0.2-1,0.3-2.1,0.3-2.9C318.9,45.3,317.7,43.9,315.2,43.9z"
      />
      <path
        fill="white"
        d="M351.3,62.1L354,47c0.1-0.3,0.1-0.4,0.1-0.7c0-1.1-0.4-2.3-2.8-2.3c-1.2,0-2.6,0.5-3.8,1.2l-0.1,0.1l-3,16.7h-5.4l2.7-15.2c0.1-0.4,0.1-0.6,0.1-0.8c0-1-0.4-2.2-2.7-2.2c-1.3,0-2.4,0.4-3.9,1.2l-0.1,0.1l-3,16.7h-5.4l4-22c1.6-0.2,3.7-0.3,5.5-0.4l-0.4,2.3h0.8l0.1-0.1c2.1-2.1,3.8-2.5,6-2.5c2.5,0,4,1,4.3,2.8l0.1,0.5l0.4-0.4c2.2-2.1,4.2-3,6.7-3c2.1,0,5.7,0.6,5.7,5c0,0.5-0.1,1.2-0.2,1.7l-3.1,16.1H351.3z"
      />
    </g>
  </Svg>
)
