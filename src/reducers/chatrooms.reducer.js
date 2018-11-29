import { chatroomsConstants } from '../constants';

export function chatrooms(state = {}, action) {
  switch (action.type) {
    case chatroomsConstants.CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case chatroomsConstants.CREATE_SUCCESS:
      return {
        ...state,
        chatrooms: [...state.chatrooms, action.chatroom]
      };
    case chatroomsConstants.CREATE_FAILURE:
      return { 
        ...state,
      };
    case chatroomsConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case chatroomsConstants.GETALL_SUCCESS:
      return {
        chatrooms: action.chatrooms.message
      };
    case chatroomsConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}