import styled from 'styled-components'

const Svg = styled.svg`
  transition: transform 200ms linear;

  &:hover {
    transform: scale(1.1);
  }
`

export const MedCircle = ({
  fill = '#001119',
  className,
  height = 40,
  width = 75,
}: any) => (
  <Svg
    viewBox="0 0 108 108"
    className={className}
    height={height}
    width={width}
  >
    <defs>
      <linearGradient x1="50%" y1="71.4799361%" x2="37.5665905%" y2="37.1385596%" id="linearGradient-1">
        <stop stopColor="#0288D1" offset="0%" />
        <stop stopColor="#095B87" stopOpacity="0.883689991" offset="100%" />
      </linearGradient>
      <radialGradient
        cx="51.2851199%"
        cy="50%"
        fx="51.2851199%"
        fy="50%"
        r="51.8560853%"
        gradientTransform="translate(0.512851,0.500000),rotate(-90.000000),scale(1.000000,2.240061),translate(-0.512851,-0.500000)"
        id="radialGradient-2"
      >
        <stop stopColor="#527587" offset="0%" />
        <stop stopColor="#0288D1" offset="100%" />
      </radialGradient>
    </defs>
    <g id="Style-Guide" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Artboard" transform="translate(-195.000000, -412.000000)">
        <g id="Logo" transform="translate(119.000000, 316.000000)">
          <g id="Group-2" transform="translate(0.000000, 80.000000)">
            <g id="Brand-logo" transform="translate(78.000000, 18.000000)">
              <g id="M">
                <path
                  d="M29.5,29 L29.5,29 C33.6421356,29 37,32.3578644 37,36.5 L37,69.5 C37,73.6421356 33.6421356,77 29.5,77 L29.5,77 C25.3578644,77 22,73.6421356 22,69.5 L22,36.5 C22,32.3578644 25.3578644,29 29.5,29 Z"
                  id="Rectangle-3"
                  fill="url(#linearGradient-1)"
                  fillRule="nonzero"
                />
                <path
                  d="M75.5,29 L75.5,29 C79.6421356,29 83,32.3578644 83,36.5 L83,69.5 C83,73.6421356 79.6421356,77 75.5,77 L75.5,77 C71.3578644,77 68,73.6421356 68,69.5 L68,36.5 C68,32.3578644 71.3578644,29 75.5,29 Z"
                  id="Rectangle-3"
                  fill="url(#linearGradient-1)"
                  fillRule="nonzero"
                />
                <path
                  d="M57.8593281,63.7874891 C56.3795462,65.2643066 54.4394906,66.0018092 52.5000001,65.9999967 C50.5605095,66.0018092 48.6204541,65.2643066 47.1406719,63.7874891 C47.0471893,63.6941938 46.9566631,63.5990652 46.8690933,63.5022194 L24.2169522,40.8954585 C21.2610159,37.945444 21.2610159,33.1625254 24.2169522,30.2125109 C27.1728886,27.2624964 31.9654082,27.2624964 34.9213446,30.2125109 L52.5000001,47.7559502 L70.0786557,30.2125109 C73.0345919,27.2624964 77.8271116,27.2624964 80.7830478,30.2125109 C83.7389841,33.1625254 83.7389841,37.945444 80.7830478,40.8954585 L58.130907,63.5022194 C58.0433371,63.5990652 57.9528107,63.6941938 57.8593281,63.7874891 Z"
                  id="Combined-Shape"
                  fill="#0288D1"
                  fillRule="nonzero"
                />
                <circle id="Circle" stroke="url(#radialGradient-2)" strokeWidth="3" cx="52" cy="52" r="52" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </Svg>
)
