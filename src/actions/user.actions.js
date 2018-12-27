import { userConstants } from '../constants';
import { usersService } from '../services';
import { alertActions, chatroomsActions } from './';
import { ioSocket } from '../helpers';

export const usersActions = {
  enterChatroom,
  registerAsGuest,
  register,
  leaveChatroom,
  verifyUser,
  login,
  logout,
  changeAvatar,
  uploadAvatar
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
      data => { 
          dispatch(success(data));
      },
      error => {
          dispatch(failure(error.toString()));
          dispatch(registerAsGuest());
      }
    );
  };

  function request() { return { type: userConstants.VERIFY_REQUEST } }
  function success(data) { return { type: userConstants.VERIFY_SUCCESS, data } }
  function failure(error) { return { type: userConstants.VERIFY_FAILURE } }
}

function logout() {
  return dispatch => {
    dispatch(request());
    localStorage.removeItem('user');
    usersService.createGuest().then(
      data => { 
          localStorage.setItem('user', JSON.stringify({
            name: data.user.name,
            guest: data.user.guest,
            _id: data.user._id
          }));
          dispatch(success(data));
          dispatch(alertActions.success('See you soon !'));
      },
      error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() { return { type: userConstants.LOGOUT_REQUEST } }
  function success(data) { return { type: userConstants.LOGOUT_SUCCESS, data } }
  function failure(error) { return { type: userConstants.LOGOUT_FAILURE, error } }
}

function registerAsGuest() {
	return dispatch => {
    dispatch(request());

    usersService.createGuest().then(
      user => { 
      		localStorage.setItem('user', JSON.stringify({
            name: user.name,
            guest: user.guest,
            _id: user._id
          }));
          dispatch(success(user));
          dispatch(alertActions.success('Welcome !', false));
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

function register(username, password) {
  return dispatch => {
    dispatch(request());

    usersService.createAccount(username, password).then(
      data => { 
        localStorage.setItem('user', JSON.stringify({
          name: data.user.name,
          guest: data.user.guest,
          _id: data.user._id
        }));
        dispatch(success(data));
        dispatch(alertActions.success(`Welcome ${data.user.name} !`));
      },
      error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() { return { type: userConstants.REGISTER_REQUEST } }
  function success(data) { return { type: userConstants.REGISTER_SUCCESS, data } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function login(username, password) {
  return dispatch => {
    dispatch(request());

    usersService.login(username, password).then(
      data => { 
        localStorage.setItem('user', JSON.stringify({
          name: data.user.name,
          guest: data.user.guest,
          _id: data.user._id
        }));
        dispatch(success(data));
        dispatch(alertActions.success(`Welcome ${data.user.name} !`));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() { return { type: userConstants.LOGIN_REQUEST } }
  function success(data) { return { type: userConstants.LOGIN_SUCCESS, data } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function changeAvatar(id, avatar, token) {
  return dispatch => {
    dispatch(request({avatar: avatar, token: token}));

    usersService.changeAvatar(id, avatar, token).then(
      data => {
        localStorage.setItem('user', JSON.stringify({
          ...JSON.parse(localStorage.getItem('user')),
          avatar: data.avatar
        }));
        dispatch(success(data));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(data) { return { type: userConstants.CHANGE_AVATAR_REQUEST, data } }
  function success(data) { return { type: userConstants.CHANGE_AVATAR_SUCCESS, data } }
  function failure(error) { return { type: userConstants.CHANGE_AVATAR_FAILURE, error } }
}

function uploadAvatar(id, avatar, token ) {
  return dispatch => {
    dispatch(request({avatar: avatar}));

    usersService.uploadAvatar( avatar ).then(
      data => {
        dispatch(success(data));
        dispatch(changeAvatar(id, data.url, token));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(data) { return { type: userConstants.UPLOAD_AVATAR_REQUEST, data } }
  function success(data) { return { type: userConstants.UPLOAD_AVATAR_SUCCESS, data } }
  function failure(error) { return { type: userConstants.UPLOAD_AVATAR_FAILURE, error } }
}