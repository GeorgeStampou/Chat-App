const socket = io();
const form = document.querySelector('.chat-form-div');
const input = document.getElementById('message');
const messagesDiv = document.querySelector('.messages');

const username = window.location.href.split('?')[1].split('=')[1];

socket.emit('join', username);

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(input.value) {
        socket.emit('chatMessage', input.value);
        input.value = '';
    }
})

const createMessage = ({username, message, time}) => {
    
    const div = document.createElement('div');
    div.classList.add('message-div')
    const pHead = document.createElement('p');
    pHead.classList.add('message-head');
    pHead.innerHTML = `${username}, ${time}`;
    div.appendChild(pHead);
    const p = document.createElement('p');
    p.innerText = message;
    div.appendChild(p);
    messagesDiv.appendChild(div);
}

socket.on('chatMessage', ({username, message, time})=> createMessage({username, message, time}));

