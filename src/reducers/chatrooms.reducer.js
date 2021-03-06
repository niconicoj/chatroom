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
        loading: false,
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
        ...state,
        loading: false,
        chatrooms: action.chatrooms.message
      };
    case chatroomsConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };

    case chatroomsConstants.FILTER_REQUEST:
      return {
        ...state,
      };
    case chatroomsConstants.FILTER_SUCCESS:
      return {
        ...state,
        chatroomFilter: action.filter
      };
    case chatroomsConstants.FILTER_FAILURE:
      return { 
        ...state,
        error: action.error
      };

    case chatroomsConstants.GET_MESSAGES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case chatroomsConstants.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.messages
      };
    case chatroomsConstants.GET_MESSAGES_FAILURE:
      return { 
        ...state,
        error: action.error
      };

    case chatroomsConstants.SEND_MESSAGE_REQUEST:
      return {
        ...state,
        messages: [...state.messages, {...action.message, sending:true}]
      };
    case chatroomsConstants.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [...state.messages.filter(message => !Boolean(message.sending)),
          action.message]
      };
    case chatroomsConstants.SEND_MESSAGE_FAILURE:
      return { 
        ...state,
        error: action.error
      };

    case chatroomsConstants.RECEIVE_MESSAGE_REQUEST:
      return {
        ...state
      };
    case chatroomsConstants.RECEIVE_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
    case chatroomsConstants.RECEIVE_MESSAGE_FAILURE:
      return { 
        ...state,
        error: action.error
      };

    default:
      return state
  }
}