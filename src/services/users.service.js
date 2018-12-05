import { config } from '../config';
import { authHeader } from '../helpers';

export const usersService = {
  createGuest
};

function createGuest() {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "guest": true })
  };

  return fetch(`${config.apiUrl}/users`, requestOptions)
    .then(handleResponse)
    .then(user => {
      return user;
    });
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}