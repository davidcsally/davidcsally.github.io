import React, { Component } from 'react';

import GlobalStyles from 'styles/global';

import HeroBlock from '../HeroBlock';
import Chatbot from '../Chatbot';
import { SupremeBlock } from '../SupremeBlock';

interface State {
  isChatOpen: boolean;
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      isChatOpen: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.openChat();
    }, 5000);
  }

  render() {
    const { closeChat, openChat } = this;
    const { isChatOpen } = this.state;

    return (
      <div>
        <GlobalStyles />
        <HeroBlock />
        <SupremeBlock />
        <Chatbot
          isOpen={isChatOpen}
          closeChat={closeChat}
          openChat={openChat}
        />
      </div>
    );
  }

  openChat = () => this.setState({ isChatOpen: true })

  closeChat = () => this.setState({ isChatOpen: false })
}

export default App;
