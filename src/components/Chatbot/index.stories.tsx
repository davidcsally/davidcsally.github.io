import React from 'react';

import Chatbot from '.';

export default {
  title: 'Chatbot',
  component: Chatbot,
};

export const normal = () => (
  <Chatbot
    isOpen
    hideChat={false}
    openChat={() => { }}
    closeChat={() => { }}
    setHideChat={() => { }}
  />
);
