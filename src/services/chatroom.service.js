import { config } from '../config';
import { authHeader } from '../helpers';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function create(name) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    };

    return fetch(`${config.apiUrl}/chatrooms`, requestOptions)
        .then(handleResponse)
        .then(chatroom => {
            return chatroom;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}