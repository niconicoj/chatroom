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

    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        registering: true,
      };
    case userConstants.REGISTER_SUCCESS:
      return {
          ...state,
          registering: false,
          name: action.user.name,
          guest: action.user.guest
      };
    case userConstants.REGISTER_FAILURE:
      return {};

    default:
      return state
  }
}