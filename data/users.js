const users = [];

const createUser = (id, username) => {
    const user = {id, username}
    users.push(user);
    return user;
}

const getUser = (id) => {
    return users.find((user) => user.id === id );
}

const deleteUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if(index > -1){
        return users.splice(index, 1)[0];
    }
}

const getAllUsers = () => {
    return users;
}

module.exports = {createUser, getUser, deleteUser, getAllUsers};