const socket = io();
const form = document.querySelector(".chat-form-div");
const input = document.getElementById("message");
const messagesDiv = document.querySelector(".messages");


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(input.value) {
        socket.emit('chatMessage', input.value);
        input.value = '';
    }
})

const createMessage = (message) => {
    console.log(message);
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerText = message;
    div.appendChild(p);
    messagesDiv.appendChild(div);
}

socket.on('chatMessage', (message)=> createMessage(message));

