const io = require('socket.io')(3000, {cors: {origin: "*",},});

const {addUser, removeUser, getUser} = require('./users');

io.on('connection', socket => {

    // User join event
    socket.on('new-user', ({name}, callback) => {
      //Check if username exists, if not return user obj.
      const { error, user } = addUser({ id: socket.id, name});

      if(error) return callback(error);

      socket.broadcast.emit('user-connected', name);
      socket.broadcast.emit('chat-message', { user: name, message: `${name} has entered to chat.`});

      callback();
    });

    // Message event
    socket.on('send-chat-message', (message, callback) => {
      const user = getUser(socket.id);

      socket.broadcast.emit('chat-message', { user: user.name, message: message});

      callback();
    });


    socket.on('disconnect', () => {
      const user = removeUser(socket.id);

      socket.broadcast.emit('user-disconnected' , user);

    });
  })