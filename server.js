require('dotenv').config();
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (socket)=>{
    console.log('a user connected');

    socket.on('chatMessage', (message) => {
        io.emit('chatMessage', message);
    })

    socket.on('disconnect', () => {
        console.log('a user disconnected');
    })
})


app.use(express.static("./public/"));   

const port = process.env.PORT || 3000;

server.listen(port, ()=>console.log(`Server is listening on port ${port}...`));