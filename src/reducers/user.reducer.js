import { userConstants } from '../constants';

let localUser = JSON.parse(localStorage.getItem('user'));
const initialState = localUser ? localUser : {};

export function user(state = initialState, action) {
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
          inChatroom: action.chatroom
      };
    case userConstants.ENTER_CHATROOM_FAILURE:
      return { 
        ...state,
      };

    case userConstants.LEAVE_CHATROOM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.LEAVE_CHATROOM_SUCCESS:

      const { inChatroom, ...nextState } = state;
      return {
          ...nextState,
          loading: false,
      };
    case userConstants.LEAVE_CHATROOM_FAILURE:
      return { 
        ...state,
      };

    case userConstants.REGISTER_GUEST_REQUEST:
      return {
        ...state,
        registering: true,
      };
    case userConstants.REGISTER_GUEST_SUCCESS:
      return {
          ...state,
          registering: false,
          name: action.user.name,
          guest: action.user.guest,
          _id: action.user._id

      };
    case userConstants.REGISTER_GUEST_FAILURE:
      return {};

    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        registering: true,
      };
    case userConstants.REGISTER_SUCCESS:
      return {
          ...state,
          registering: false,
          name: action.data.user.name,
          guest: action.data.user.guest,
          _id: action.data.user._id,
          api_token: action.data.api_token
      };
    case userConstants.REGISTER_FAILURE:
      return {};

      case userConstants.VERIFY_REQUEST:
      return {
        ...state,
        registering: true,
      };
    case userConstants.VERIFY_SUCCESS:
      return {
          ...state,
          api_token: action.data.api_token
      };
    case userConstants.VERIFY_FAILURE:
      return {};

    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
          ...state,
          loggingIn: false,
          name: action.data.user.name,
          guest: action.data.user.guest,
          _id: action.data.user._id,
          api_token: action.data.api_token
      };
    case userConstants.LOGIN_FAILURE:
      return {};

    case userConstants.LOGOUT_REQUEST:
      return {
        ...state,
        loggingOut: true,
      };
    case userConstants.LOGOUT_SUCCESS:
      return {
          ...state,
          loggingOut: false,
          name: action.user.name,
          guest: action.user.guest,
          _id: action.user._id
      };
    case userConstants.LOGOUT_FAILURE:
      return {};

    default:
      return state
  }
}