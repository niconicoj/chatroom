import { userConstants } from '../constants';
import { usersService } from '../services';
import { alertActions, chatroomsActions } from './';
import { ioSocket } from '../helpers';

export const usersActions = {
  enterChatroom,
  registerAsGuest,
  leaveChatroom
};

function enterChatroom(chatroom, user) {
  return dispatch => {
    dispatch(request(chatroom));
    ioSocket.openSocket();
    ioSocket.subscribeToChatroom(chatroom, user, (err, message) =>{
      const json = JSON.parse(message);
      chatroomsActions.receiveMessage(json);
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

  function request() { return { type: userConstants.REGISTER_REQUEST } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.ENTER_CHATROOM_FAILURE, error } }
}