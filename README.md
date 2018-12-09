# chatroom

This is a personal project where I try to build a chatroom web app using Lumen, React+Redux and Material-UI.

In more detail here is what I have to this date :

- Lumen working with a MongoDB database as the API, it currently provide the app with the list of chatrooms available as well as the possibility to create on. It basically does the same with message and user (though user is just avaiable as guest right now).

- React with redux, material-UI and socket.io for the actual web app. you can currently use it to create chatroom, join one of them and then send message (both to the api and the socket server) and receive them either through an API fetch on join or through the socket server when someone emits an action.

- A basic node.js socket.io server to dispatch messages to everyone present in a given chatroom when a message is received.

I have not yet made a github for either the API or the socket.io server so you might run into some trouble if you try to run the app yourself. Anyway to run it simply do :

    npm install
    npm run start
