const io = require('socket.io')(3000, {cors: {origin: "*",},});

const {addUser, removeUser, getUser} = require('./users');

io.on('connection', socket => {
    // Emit on new user joined
    console.log("New connection!");
    socket.on('new-user', name => {
      // addUser(name) to add user to array
      console.log("New user! name: " + name);
      socket.broadcast.emit('user-connected', name)
    })

    socket.on('send-chat-message', message => {
      socket.broadcast.emit('chat-message', { message: message})
    })

    socket.on('disconnect', () => {
      socket.broadcast.emit('user-disconnected' )
      // removeUser(..) to remove the user from array
      console.log("User disconnected");
    })
  })