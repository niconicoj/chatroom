import { userConstants } from '../constants';
import { usersService } from '../services';
import { alertActions, chatroomsActions } from './';
import { ioSocket } from '../helpers';

export const usersActions = {
  enterChatroom,
  registerAsGuest,
  leaveChatroom,
  verifyUser
};

function enterChatroom(chatroom, user) {
  return dispatch => {
    dispatch(request(chatroom));
    ioSocket.openSocket();
    ioSocket.subscribeToChatroom(chatroom, user, (err, message) =>{
      const json = JSON.parse(message);
      console.log('preparing emit message');
      dispatch(chatroomsActions.receiveMessage(json));
    });

    dispatch(success(chatroom));
  };

  function request(chatroom) { return { type: userConstants.ENTER_CHATROOM_REQUEST, chatroom } }
  function success(chatroom) { return { type: userConstants.ENTER_CHATROOM_SUCCESS, chatroom } }
  // function failure(error) { return { type: userConstants.ENTER_CHATROOM_FAILURE, error } }
}

function leaveChatroom() {
  return dispatch => {
    dispatch(request());
    ioSocket.closeSocket();
    dispatch(success());
  };

  function request() { return { type: userConstants.LEAVE_CHATROOM_REQUEST } }
  function success() { return { type: userConstants.LEAVE_CHATROOM_SUCCESS } }
  // function failure(error) { return { type: userConstants.ENTER_CHATROOM_FAILURE, error } }
}

function verifyUser(id) {
  return dispatch => {
    dispatch(request());

    usersService.getUser(id).then(
      user => { 
          dispatch(success(user));
      },
      error => {
          dispatch(failure(error.toString()));
          dispatch(registerAsGuest());
      }
    );
  };

  function request() { return { type: userConstants.VERIFY_REQUEST } }
  function success(user) { return { type: userConstants.VERIFY_SUCCESS } }
  function failure(error) { return { type: userConstants.VERIFY_FAILURE } }
}

function registerAsGuest() {
	return dispatch => {
    dispatch(request());

    usersService.createGuest().then(
      user => { 
      		localStorage.setItem('user', JSON.stringify(user));
          dispatch(success(user));
          dispatch(alertActions.success('Welcome !'));
      },
      error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() { return { type: userConstants.REGISTER_GUEST_REQUEST } }
  function success(user) { return { type: userConstants.REGISTER_GUEST_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_GUEST_FAILURE, error } }
}