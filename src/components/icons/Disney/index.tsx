import styled from '@emotion/styled'

const Svg = styled.svg`
  transition: transform 200ms linear;

  &:hover {
    transform: scale(1.1);
  }
`

interface Props {
  fill?: string
  height: number
  width: number
}

const Disney = ({ fill = 'white', height, width }: Props) => (
  <Svg id="icon-logo" width={width} height={height} viewBox="0 0 319.96 93.04">
    <title>shopDisney Logo</title>
    <path
      fill={fill}
      d="M256.1,156.3s-28.1-15.5-51.8-8.1a4,4,0,0,0-2.9,1.9c-1.4,1.9-2.6,3.2-2,4.7s4.3,2.2,7.5,1.3c0,0,1.5-.9-0.3-1.6a12,12,0,0,0-2.8-.8s-1-.3,0-0.7,11.8-3.5,30.6,1.9,44,21.5,42.8,37.4-26.1,15.9-26.1,15.9a57.26,57.26,0,0,1-12-1.4c0-5.2,0-14,.2-19.4,6,0.4,18.6,1.5,20.2,4.5,0,0,.8.8-1.8,2.1-1.9,1.1-3.6,1.5-1.9,2.4,0,0,2.5,1.5,3.9,1.1s5.5-1.8,6-6-4.6-8.5-11.9-10c-5.7-1.1-8.8-1.7-14-1.6,0.1-4.7-.4-10.6-1.4-12.1-1.3-1.9-2.7-4.3-3.8-1.7-1.1,2.4-2,7.4-2.4,14.3-8.1,1.1-17,4.2-19.7,7.5a5.22,5.22,0,0,0,0,7c0.2,0.3,5.8,9,18.3,15,0.1,2.3.5,4.8,1.4,6.2,1.9,3,5.4,1,6,.5,0.4-.3.7-1.3,0.8-3.5a51.81,51.81,0,0,0,26.8.5c16.7-4.5,19.3-14.7,19.9-20.8C286.6,186.6,282.5,170.5,256.1,156.3ZM239.5,187h0Zm-8.4,17.3A40.71,40.71,0,0,1,214.4,193s-1.8-2,.9-3.1c2.5-1,7.7-2.4,16.9-2.8C232.1,189.9,231.8,195.9,231.1,204.3Z"
      transform="translate(-91.6 -146.2)"
    />
    <path
      fill={fill}
      d="M298.9,176.1c6.7-2.1,13.3-8.4,13.5-13.6s-5.6-5.3-5.6-5.3h-0.1c-0.9-3.3-7-3-7-3-12.4.7-16.7,9.1-17.3,11.4a7.08,7.08,0,0,0,2,7.1,3.74,3.74,0,0,0-.1,3.2c0.2,0.6,1.3,2.5,2.5,2.4,0.9-.1,1.5-0.6,2.6-2.5C291.7,176.9,294.7,177.4,298.9,176.1Zm5.9-14.7c4.5-.6,2.7,3.6,2.7,3.6-3.6,6.9-11.4,7-15.7,6.1C294.7,166.9,300.9,161.9,304.8,161.4Zm-18,6.9c-0.5-.9-0.4-2.1.9-4.1a9,9,0,0,1,7.3-4A32.94,32.94,0,0,0,286.8,168.3Z"
      transform="translate(-91.6 -146.2)"
    />
    <path
      fill={fill}
      d="M295.8,198.8s-0.1-10.2-.3-12.3a6.54,6.54,0,0,0-1.5-4.1c-0.6-.9-1.5-2.2-3.1-0.9s-1.9,9.7-2.3,16.5-0.1,11,.7,12.2,4,1.8,5.4.7,1-11,1-11v-1.1h0.1Z"
      transform="translate(-91.6 -146.2)"
    />
    <path
      fill={fill}
      d="M329.7,183.4c-2.1-2.5-14.1-2.4-14.1-2.4-4.4.2-14.7,1.8-16.1,6.3s-0.3,6-.3,6c1.2,2.3,9.8,2.4,12.2,2.6s8.6,1.2,10.8,2.4,0.6,2.9.6,2.9c-2.1,3-13.7,3.3-13.7,3.3s-4.1-.1-5.2-0.9-1.4-1.6-.2-3,4.3,0.2,4.3.2a12.33,12.33,0,0,0,5.9,2c3.4,0.2,5.9-1,6-2.2s-2.9-2.4-2.9-2.4c-10.1-3.1-14.3-.8-14.3-0.8-5.6,3.4-1.6,8.1-1.6,8.1,8.8,9.9,22.9,4,24.6,2.7s2.3-2.8,2.5-6.7-1.5-5.8-1.5-5.8c-2.8-3.7-11-3.9-13.3-4.1s-6.9-.9-8.1-1.1a0.6,0.6,0,0,1-.3-1.1c1.5-1.1,12.5-1.7,18.4-1.9l3.3-.3a3.26,3.26,0,0,0,2.9-2.4A1.51,1.51,0,0,0,329.7,183.4Z"
      transform="translate(-91.6 -146.2)"
    />
    <path
      fill={fill}
      d="M347.5,177.6a1.18,1.18,0,0,0-1.7.7,5.38,5.38,0,0,0,0,2.7,110.27,110.27,0,0,1,3.5,17.9s0.1,1.9-.2,2.1a0.5,0.5,0,0,1-.6-0.1c-0.3-.1-3.8-6.2-3.8-6.2l-0.6-1.1c-3.9-6.6-6.1-8.8-6.1-8.8-0.6-.5-2-2-3.9-0.1s-3.4,8.4-4.1,14.4-0.4,9.5.5,11a2.9,2.9,0,0,0,4.4.8c1.6-1.2,1.6-9.2,2-13.3s0.7-3.4.7-3.4c0.4,0,2.1,3.8,2.1,3.8s4.7,10.2,7.7,11.8,5.7-.8,6.7-3,2.9-9.7.7-18.1S347.5,177.6,347.5,177.6Z"
      transform="translate(-91.6 -146.2)"
    />
    <path
      fill={fill}
      d="M379,207.4c0.4-1.4-1-3.3-2.3-3.7-1.1-.3-10.6,1.2-11.8,1.4s-0.6-.8-0.6-0.8l1.6-4.8s8.9-.1,10.2-0.3a1.36,1.36,0,0,0,1.3-1,14.35,14.35,0,0,0,.1-2.7,1.21,1.21,0,0,0-1.2-1.3,54.94,54.94,0,0,0-8.1-.1l1.2-3.8H370a66.47,66.47,0,0,0,12.6-.9c1.8-.4.9-2.2,0.9-2.2-2.2-4.6-4.7-4.3-4.7-4.3a84.17,84.17,0,0,0-19.6,1.7c-1.2.5-1.1,1.4,0.3,3.2a6,6,0,0,0,4.1,1.9l-2.4,4.6a4,4,0,0,0-2.5.7c-1.1,1.1.2,4.6,0.2,4.6s-0.5,1-1.1,2.6-2.2,4.3-.1,8.5,5.4,4,5.4,4C369.1,214.8,378.4,209.5,379,207.4Z"
      transform="translate(-91.6 -146.2)"
    />
    <path
      fill={fill}
      d="M408.6,186.5a4.69,4.69,0,0,0-5.6-.2c-5.2,2.7-11.8,10.8-15.4,15.5-0.5-3.4,1.9-7.7,1.9-7.7l0.6-1c2.9-4.8,3.3-5.3,3.9-6.6s0.9-4,.3-4.3-1.6.6-1.6,0.6c-8.6,7.2-10,15.5-10,15.5-0.9,4.3-.2,7.4,1,9.6-4.9,10.2-6.7,19.9-6.7,23.7a8.7,8.7,0,0,0,4.8,7.5c1.7,0.7,2-1.4,2-1.4a95,95,0,0,1,7.3-24.3c8.6,2.3,15.7-6.7,17.9-10.1a19.22,19.22,0,0,0,2.5-9.1C411.7,193.8,411.6,188.7,408.6,186.5Zm-6.1,16.6a14.88,14.88,0,0,1-7.8,2.9,67,67,0,0,1,9.9-13.2c2.8-2.9,3-.2,3-0.2C408.1,197.9,404.2,201.7,402.5,203.1Z"
      transform="translate(-91.6 -146.2)"
    />
    <path
      fill={fill}
      d="M103.7,196.3c-2.9-.9-5.6-1.7-5.6-3.5v-0.1c0-1.4,1.3-2.4,3.5-2.4a14,14,0,0,1,5.8,1.7,2.27,2.27,0,0,0,3.4-2,2.58,2.58,0,0,0-1.4-2.2,16.76,16.76,0,0,0-7.8-2c-4.9,0-8.8,2.9-8.8,7.6v0.1c0,4.7,4.1,6.3,7.8,7.3,2.9,0.9,5.5,1.6,5.5,3.5v0.1c0,1.6-1.4,2.7-3.9,2.7a12.85,12.85,0,0,1-7.1-2.4,2.38,2.38,0,0,0-1.2-.3,2.26,2.26,0,0,0-2.3,2.3,2.4,2.4,0,0,0,1.1,2,16.86,16.86,0,0,0,9.4,3c5.2,0,9.2-2.6,9.2-7.8v-0.1C111.4,199.1,107.3,197.4,103.7,196.3Z"
      transform="translate(-91.6 -146.2)"
    />
    <path
      fill={fill}
      d="M130.2,185.6a9,9,0,0,0-7.8,4.3V179.2a2.85,2.85,0,0,0-5.7,0v29.1a2.85,2.85,0,0,0,5.7,0V196.9c0-3.9,2.3-6.2,5.6-6.2s5.3,2.2,5.3,6.1v11.5a2.82,2.82,0,0,0,2.9,2.8,2.73,2.73,0,0,0,2.8-2.8V195C139,189.4,135.8,185.6,130.2,185.6Z"
      transform="translate(-91.6 -146.2)"
    />
    <path
      fill={fill}
      d="M157.3,185.6a13,13,0,0,0-13.3,13v0.1a13.26,13.26,0,0,0,26.5-.1v-0.1A12.87,12.87,0,0,0,157.3,185.6Zm7.5,13.1c0,4.3-2.9,7.8-7.5,7.8a7.66,7.66,0,0,1-7.6-7.9v-0.1c0-4.3,2.9-7.9,7.5-7.9s7.6,3.6,7.6,8.1h0Z"
      transform="translate(-91.6 -146.2)"
    />
    <path
      fill={fill}
      d="M190,185.6c-4,0-6.6,2.1-8.5,4.7v-1.6a2.9,2.9,0,0,0-2.9-2.9,2.82,2.82,0,0,0-2.8,2.9v27.2a2.85,2.85,0,0,0,5.7,0v-8.8a10.1,10.1,0,0,0,8.5,4.4c5.9,0,11.5-4.7,11.5-12.9v-0.1C201.5,190.2,195.8,185.6,190,185.6Zm5.7,13c0,4.9-3.2,7.9-7.1,7.9s-7.2-3.2-7.2-7.9v-0.1c0-4.7,3.4-7.9,7.2-7.9s7.1,3.1,7.1,8h0Z"
      transform="translate(-91.6 -146.2)"
    />
  </Svg>
)

export default Disney
