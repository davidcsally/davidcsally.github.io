import { useEffect, useState } from 'react'

import GlobalStyles from 'styles/global'

import HeroBlock from '../HeroBlock'
import Chatbot from '../Chatbot'
import { CookieBar } from '../CookieBar'
import { SupremeBlock } from '../SupremeBlock'
import { AboutMe } from '../AboutMe'
import { PortfolioBlock } from '../PortfolioBlock'

const COOKIE = 'acceptedCookies=true'

const cookieExpiration = () => {
  const now = new Date()
  now.setMinutes(now.getMinutes() + 30)
  return `expires=${now.toUTCString()}`
}

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isCookieBarOpen, setIsCookieBarOpen] = useState(false)

  const openChat = () => {
    if (isChatOpen) return
    setIsChatOpen(true)
  }

  const closeChat = () => setIsChatOpen(false)

  const openCookieBar = () => setIsCookieBarOpen(true)

  const closeCookieBar = () => {
    document.cookie = `${COOKIE}; ${cookieExpiration()}; path=/; SameSite=Strict`
    setIsCookieBarOpen(false)
  }

  const closeCookieBarAndOpenChat = () => {
    closeCookieBar()
    setTimeout(() => openChat(), 5000)
  }

  useEffect(() => {
    setTimeout(() => {
      if (document.cookie.includes('acceptedCookies')) openChat()
      else openCookieBar()
    }, 1000)
  }, [])

  return (
    <div>
      <GlobalStyles />
      <HeroBlock />
      <AboutMe />
      <SupremeBlock />
      <PortfolioBlock />
      <CookieBar
        isCookieBarOpen={isCookieBarOpen}
        closeCookieBar={closeCookieBarAndOpenChat}
      />
      <Chatbot isOpen={isChatOpen} closeChat={closeChat} openChat={openChat} />
    </div>
  )
}

export default App
