import React, { Component } from 'react';

import GlobalStyles from 'styles/global';

import HeroBlock from '../HeroBlock';
import Chatbot from '../Chatbot';
import { CookieBar } from '../CookieBar';
import { SupremeBlock } from '../SupremeBlock';

interface State {
  isChatOpen: boolean;
  isCookieBarOpen: boolean;
}

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
      this.openCookieBar();
    }, 1000);
  }

  render() {
    const { closeChat, openChat, closeCookieBarAndOpenChat } = this;
    const { isChatOpen, isCookieBarOpen } = this.state;

    return (
      <div>
        <GlobalStyles />
        <HeroBlock />
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

  closeCookieBar = () => this.setState({ isCookieBarOpen: false });

  closeCookieBarAndOpenChat = () => {
    this.closeCookieBar();
    setTimeout(() => this.openChat(), 5000);
  }

  closeChat = () => this.setState({ isChatOpen: false })
}

export default App;
