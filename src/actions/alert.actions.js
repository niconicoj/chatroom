import { alertConstants } from '../constants';

export const alertActions = {
    success,
    error,
    clear,
    hide
};

function success(message, show = true) {
    return { type: alertConstants.SUCCESS, show:show, message };
}

function error(message, show = true) {
    return { type: alertConstants.ERROR, show:show, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}

function hide() {
    return { type: alertConstants.HIDE };
}