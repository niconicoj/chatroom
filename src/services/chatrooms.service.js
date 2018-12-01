import { config } from '../config';
import { authHeader } from '../helpers';

export const chatroomsService = {
  create,
  getAll
};

function create(name) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "name": name })
  };

  return fetch(`${config.apiUrl}/chatrooms`, requestOptions)
    .then(handleResponse)
    .then(chatroom => {
      return chatroom;
    });
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  console.log(`${config.apiUrl}/chatrooms`);
  return fetch(`${config.apiUrl}/chatrooms`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  console.log(response);
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