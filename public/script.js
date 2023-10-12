const form = document.querySelector('.chat-form-div');
const input = document.getElementById('message');
const messagesDiv = document.querySelector('.messages');
const sidebarDiv = document.querySelector('.active-users');

const username = window.location.href.split('?')[1].split('=')[1];

const socket = io();

const showUsers = (users) => {
    console.log(users);
    sidebarDiv.innerHTML = '';
    users.map(user => {
        const li = document.createElement('li');
        li.setAttribute('id', user.id)
        li.innerHTML = user.username;
        sidebarDiv.appendChild(li);
    })    
}

socket.emit('join', username);

socket.on('usersStatus', (users) => showUsers(users));

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(input.value) {
        socket.emit('chatMessage', input.value);
        input.value = '';
    }
})

const createMessage = (message) => {
    
    const div = document.createElement('div');
    div.classList.add('message-div')
    if(message.username === 'ChatBot'){
        div.classList.add('chat-bot-div');
    } else if(message.username === username){
        div.classList.add('user');
    }
    const pHead = document.createElement('p');
    pHead.classList.add('message-head');
    pHead.innerHTML = `${message.username}  ${message.time}`;
    div.appendChild(pHead);
    const p = document.createElement('p');
    p.classList.add('message-body');
    p.innerText = message.content;
    div.appendChild(p);
    messagesDiv.appendChild(div);
}

socket.on('chatMessage', (message) => {
    createMessage(message);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});


