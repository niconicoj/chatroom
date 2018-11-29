import { chatroomsConstants } from '../constants';
import { chatroomsService } from '../services';
import { alertActions } from './';

export const chatroomsActions = {
    create,
    getAll
};

function create(chatroom) {
    return dispatch => {
        dispatch(request(chatroom));

        chatroomsService.create(chatroom)
            .then(
                chatroom => { 
                    dispatch(success(chatroom));
                    dispatch(alertActions.success('Chatroom Created !'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(chatroom) { return { type: chatroomsConstants.CREATE_REQUEST, chatroom } }
    function success(chatroom) { return { type: chatroomsConstants.CREATE_SUCCESS, chatroom } }
    function failure(error) { return { type: chatroomsConstants.CREATE_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        chatroomsService.getAll()
            .then(
                chatrooms => dispatch(success(chatrooms)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: chatroomsConstants.GETALL_REQUEST } }
    function success(chatrooms) { return { type: chatroomsConstants.GETALL_SUCCESS, chatrooms } }
    function failure(error) { return { type: chatroomsConstants.GETALL_FAILURE, error } }
}
