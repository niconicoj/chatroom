import { chatroomConstants } from '../constants';

export function chatroom(state = {}, action) {
  switch (action.type) {
    case chatroomConstants.CREATE_REQUEST:
      return {
        loading: true
      };
    case chatroomConstants.CREATE_SUCCESS:
      return {
        items: action.chatroom
      };
    case chatroomConstants.CREATE_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}