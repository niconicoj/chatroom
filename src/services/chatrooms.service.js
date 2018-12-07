import { config } from '../config';
import { authHeader } from '../helpers';

export const chatroomsService = {
  create,
  getAll,
  getChatroomMessages,
  sendMessage
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
  return fetch(`${config.apiUrl}/chatrooms`, requestOptions).then(handleResponse);
}

function getChatroomMessages(chatroomId) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  return fetch(`${config.apiUrl}/chatrooms/${chatroomId}/messages`, requestOptions).then(handleResponse);
}

function sendMessage(text, user, chatroom) {
  console.log(text);
  console.log(user);
  console.log(chatroom);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "message": text, "user": user, "chatroom": chatroom })
  };

  return fetch(`${config.apiUrl}/chatrooms/${chatroom}/messages`, requestOptions)
    .then(handleResponse)
    .then(message => {
      return message;
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