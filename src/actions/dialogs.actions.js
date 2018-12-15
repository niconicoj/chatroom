import { dialogConstants } from '../constants';

export const dialogActions = {
    openCreateAccount,
    closeCreateAccount
};

function openCreateAccount() {
    return { type: dialogConstants.OPEN_CREATE_ACCOUNT };
}

function closeCreateAccount() {
    return { type: dialogConstants.CLOSE};
}
