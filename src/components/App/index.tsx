import React, { Component } from 'react';

import GlobalStyles from 'styles/global';

import HeroBlock from '../HeroBlock';
import Chatbot from '../Chatbot';

interface State {
  isChatOpen: boolean;
  isModalOpen: boolean;
  hideChat: boolean;
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      isModalOpen: false,
      isChatOpen: false,
      hideChat: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.openChat();
    }, 5000);
  }

  render() {
    const { closeChat, openChat, setHideChat } = this;
    const { isChatOpen, hideChat } = this.state;

    return (
      <div>
        <GlobalStyles />
        <HeroBlock />
        <Chatbot
          isOpen={isChatOpen}
          closeChat={closeChat}
          openChat={openChat}
          hideChat={hideChat}
          setHideChat={setHideChat}
        />
      </div>
    );
  }

  openChat = () => this.setState({ isChatOpen: true })

  closeChat = () => this.setState({ isChatOpen: false })

  setHideChat = () => this.setState({ hideChat: true })
}

export default App;
