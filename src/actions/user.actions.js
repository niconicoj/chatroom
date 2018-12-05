import { userConstants } from '../constants';
import { usersService } from '../services';
import { alertActions } from './';

export const usersActions = {
  enterChatroom,
  registerAsGuest
};

function enterChatroom(chatroom) {
  return dispatch => {
    dispatch(request(chatroom));
    dispatch(success(chatroom));
  };

  function request(chatroom) { return { type: userConstants.ENTER_CHATROOM_REQUEST, chatroom } }
  function success(chatroom) { return { type: userConstants.ENTER_CHATROOM_SUCCESS, chatroom } }
  // function failure(error) { return { type: userConstants.ENTER_CHATROOM_FAILURE, error } }
}


function registerAsGuest() {
	return dispatch => {
    dispatch(request());

    usersService.createGuest().then(
      user => { 
      		localStorage.setItem('user', JSON.stringify(user));
          dispatch(success(user));
          dispatch(alertActions.success('Guest created !'));
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