import { ChatMessage } from './types';

// actions
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_ANIMATION = 'SET_ANIMATION';
export const MOVE_NEW_TO_SAVED = 'MOVE_NEW_TO_SAVED';

export const moveNewToSaved = (payload) => ({
  action: MOVE_NEW_TO_SAVED,
});

export interface State {
  savedMessages: ChatMessage[];
  newMessages: ChatMessage[];
}

export const chatReducer = (state: State, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_ANIMATION: {
      const { savedMessages } = state;
      const copy = savedMessages.slice(0, payload);
      const updated = { ...savedMessages[payload], initial: false };
      const rest = savedMessages.slice(payload + 1);

      return { ...state, savedMessages: copy.concat(updated).concat(rest) };
    }

    case ADD_MESSAGE: {
      const newMessage = {
        message: payload,
        initial: true,
        isSender: true,
      };

      const newMessages = [...state.newMessages, newMessage];
      return { ...state, newMessages };
    }

    case MOVE_NEW_TO_SAVED: {
      const savedMessages = state.savedMessages.map((m) => ({ ...m, initial: false }));
      const newMessages = state.newMessages.map((m) => ({ ...m, initial: false }));

      return { savedMessages: [...savedMessages, ...newMessages], newMessages: [] };
    }

    default: return state;
  }
};
