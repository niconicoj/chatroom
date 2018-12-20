import io from 'socket.io-client';

export const ioSocket = {
  subscribeToChatroom,
  emitMessage,
  openSocket,
  closeSocket,
};

const socket = io('https://252.ip-51-75-252.eu:8890',{ 
  autoConnect: false,
  secure: true
});

function openSocket(){
	socket.open();
}

function closeSocket(){
	socket.close();
}

function subscribeToChatroom(chatroom, user, cb) {
  socket.on(`newMessage.${chatroom}`, message => cb(null, message));
  const json = JSON.stringify({
    chatroom: chatroom,
    user: user
  });
  socket.emit('subscribeToChatroom', json);
}

function emitMessage(message) {
	socket.emit('message', JSON.stringify(message));
}