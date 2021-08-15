import Image from 'next/image'

const ChatProfileImage = () => (
  <Image
    src="/images/david-linkedin.png"
    alt="Chat profile"
    height={36}
    width={36}
    loading="lazy"
    data-testid="profile-image"
  />
)

export default ChatProfileImage
