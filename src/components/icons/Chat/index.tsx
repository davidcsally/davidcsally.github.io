import styled from 'styled-components'

interface Props {
  className?: string;
}

const Svg = styled.svg`
  height: 100%;
  width: 100%;
`

const Chat = ({ className }: Props) => (
  <Svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    width="512px"
    height="512px"
  >
    <path
      fill="white"
      d="M448,0H64C28.704,0,0,28.704,0,64v288c0,35.296,28.704,64,64,64h32v80c0,6.208,3.584,11.872,9.216,14.496c2.144,0.992,4.48,1.504,6.784,1.504c3.68,0,7.328-1.28,10.24-3.712L232.992,416H448c35.296,0,64-28.704,64-64V64    C512,28.704,483.296,0,448,0z"
    />
  </Svg>
)

export default Chat
