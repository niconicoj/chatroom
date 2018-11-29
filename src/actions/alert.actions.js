import { alertConstants } from '../constants';

export const alertActions = {
    success,
    error,
    clear,
    hide
};

function success(message) {
    return { type: alertConstants.SUCCESS, show:true, message };
}

function error(message) {
    return { type: alertConstants.ERROR, show:true, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}

function hide() {
    return { type: alertConstants.HIDE };
}