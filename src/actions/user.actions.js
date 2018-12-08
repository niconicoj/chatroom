import { userConstants } from '../constants';
import { usersService } from '../services';
import { alertActions } from './';

import io from 'socket.io-client';

export const usersActions = {
  enterChatroom,
  registerAsGuest,
  leaveChatroom
};

const socket = io('51.75.252.252:8890',{ 
  forceNew: true,
  autoConnect: false 
});

function subscribeToChatroom(chatroom, cb) {
  socket.on('newMessage', message => cb(null, message));
  socket.emit('subscribeToChatroom', chatroom);
}

function enterChatroom(chatroom) {
  return dispatch => {
    dispatch(request(chatroom));

    socket.open();
    subscribeToChatroom(chatroom, (err, message) =>{
      console.log(JSON.parse(message));
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

    socket.close();

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