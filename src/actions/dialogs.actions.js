import { dialogConstants } from '../constants';

export const dialogActions = {
    openCreateAccount,
    openLogin,
    closeDialog,
    openUploadPicture
};

function openCreateAccount() {
    return { type: dialogConstants.OPEN_CREATE_ACCOUNT };
}

function openLogin() {
    return { type: dialogConstants.OPEN_LOGIN };
}

function openUploadPicture() {
    return { type: dialogConstants.OPEN_UPLOAD_PICTURE };
}

function closeDialog() {
    return { type: dialogConstants.CLOSE};
}
