import { userConstants } from '../constants';

export function user(state = {}, action) {
  switch (action.type) {
    case userConstants.ENTER_CHATROOM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.ENTER_CHATROOM_SUCCESS:
      return {
          ...state,
          loading: false,
          currentChatroom: action.chatroom
      };
    case userConstants.ENTER_CHATROOM_FAILURE:
      return { 
        ...state,
      };
    default:
      return state
  }
}