import React, { Component } from 'react';

import HeroBlock from '../HeroBlock';
import Chatbot from '../Chatbot';
import { CookieBar } from '../CookieBar';
import { SupremeBlock } from '../SupremeBlock';
import { AboutMe } from '../AboutMe';

interface State {
  isChatOpen: boolean;
  isCookieBarOpen: boolean;
}

const COOKIE = 'acceptedCookies=true';

const cookieExpiration = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 30);
  return `expires=${now.toUTCString()}`;
};

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      isChatOpen: false,
      isCookieBarOpen: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      if (document.cookie.includes('acceptedCookies')) this.openChat();
      else this.openCookieBar();
    }, 1000);
  }

  render() {
    const { closeChat, openChat, closeCookieBarAndOpenChat } = this;
    const { isChatOpen, isCookieBarOpen } = this.state;

    return (
      <div>
        <HeroBlock />
        <AboutMe />
        <SupremeBlock />
        <CookieBar
          isCookieBarOpen={isCookieBarOpen}
          closeCookieBar={closeCookieBarAndOpenChat}
        />
        <Chatbot
          isOpen={isChatOpen}
          closeChat={closeChat}
          openChat={openChat}
        />
      </div>
    );
  }

  openChat = () => {
    const { isChatOpen } = this.state;
    if (isChatOpen) return;
    this.setState({ isChatOpen: true });
  }

  openCookieBar = () => this.setState({ isCookieBarOpen: true });

  closeCookieBar = () => {
    document.cookie = `${COOKIE}; ${cookieExpiration()}; path=/; SameSite=Strict`;
    this.setState({ isCookieBarOpen: false });
  }

  closeCookieBarAndOpenChat = () => {
    this.closeCookieBar();
    setTimeout(() => this.openChat(), 5000);
  }

  closeChat = () => this.setState({ isChatOpen: false })
}

export default App;
