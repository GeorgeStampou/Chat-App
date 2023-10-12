require('dotenv').config();
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const {createUser, getUser, deleteUser, getAllUsers} = require('./data/users');
const {createMessage} = require('./data/message');

const app = express();
const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (socket)=>{
    socket.on('join', (username) => {
        const user = createUser(socket.id, username);
        const messageObj = createMessage('ChatBot', `${user.username} joined`);
        
        socket.broadcast.emit('chatMessage', messageObj);

        const users = getAllUsers();
        io.emit('usersStatus', users);
    })

    socket.on('chatMessage', (message) => {
        const user = getUser(socket.id);
        const messageObj = createMessage(user.username, message);
        io.emit('chatMessage', messageObj);
    })

    socket.on('disconnect', () => {
        
        const user = deleteUser(socket.id);
        if(user){
            const messageObj = createMessage('ChatBot', `${user.username} left`); 
            socket.broadcast.emit('chatMessage', messageObj);

            const users = getAllUsers();
            io.emit('usersStatus', users);
        } else { 
            console.log("user not found");
        }
    })
})

app.use(express.static('./public/'));   

const port = process.env.PORT || 3000;

server.listen(port, ()=>console.log(`Server is listening on port ${port}...`));