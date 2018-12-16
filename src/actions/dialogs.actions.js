import { dialogConstants } from '../constants';

export const dialogActions = {
    openCreateAccount,
    openLogin,
    closeDialog
};

function openCreateAccount() {
    return { type: dialogConstants.OPEN_CREATE_ACCOUNT };
}

function openLogin() {
    return { type: dialogConstants.OPEN_LOGIN };
}

function closeDialog() {
    return { type: dialogConstants.CLOSE};
}
