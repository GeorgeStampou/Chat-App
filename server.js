require('dotenv').config();
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const {createUser, getUser, deleteUser, getAllUsers} = require('./data/users');
const {formatTime} = require('./data/time');

const app = express();
const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (socket)=>{
    socket.on('join', (username) => {
        const user = createUser(socket.id, username);
        const time = formatTime();
        
        socket.broadcast.emit('chatMessage', {username: 'ChatBot', message: `${user.username} joined`, time: time})

        const users = getAllUsers();
        io.emit('usersStatus', users);
    })

    socket.on('chatMessage', (message) => {
        const user = getUser(socket.id);
        const time = formatTime();
        io.emit('chatMessage', {username: user.username, message: message, time: time});
    })

    socket.on('disconnect', () => {
        
        const user = deleteUser(socket.id);
        if(user){
            const time = formatTime();
            socket.broadcast.emit('chatMessage', {username: 'ChatBot', message: `${user.username} left`, time: time});

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