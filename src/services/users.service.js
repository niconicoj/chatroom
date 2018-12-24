import { config } from '../config';

export const usersService = {
  createGuest,
  createAccount,
  getUser,
  login,
  changeAvatar
};

function createGuest() {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "guest": true })
  };

  return fetch(`${config.apiUrl}/users/register`, requestOptions)
    .then(handleResponse)
    .then(user => {
      return user;
    });
}

function createAccount(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "guest": false, "name": username, "password": password })
  };

  return fetch(`${config.apiUrl}/users/register`, requestOptions)
    .then(handleResponse)
    .then(user => {
      return user;
    });
}

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "name": username, "password": password })
  };

  return fetch(`${config.apiUrl}/users/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      return user;
    });
}

function getUser(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions)
    .then(handleResponse)
    .then(user => {
      return user;
    });
}

function changeAvatar(id, avatar, token) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'token': token },
    body: JSON.stringify({ "avatar": avatar })
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions)
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