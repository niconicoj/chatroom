import { userConstants } from '../constants';
import { alertActions } from './';
import { history } from '../helpers';

export const userActions = {
  enterChatroom
};

function enterChatroom(chatroom) {
  return dispatch => {
    dispatch(request(chatroom));
    dispatch(success(chatroom));
  };

  function request(chatroom) { return { type: userConstants.ENTER_CHATROOM_REQUEST, chatroom } }
  function success(chatroom) { return { type: userConstants.ENTER_CHATROOM_SUCCESS, chatroom } }
  function failure(error) { return { type: userConstants.ENTER_CHATROOM_FAILURE, error } }
}
