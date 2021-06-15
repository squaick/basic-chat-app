const users = [];

// Add user to list
const addUser = ({ id, name}) => {
    name = name.toString().trim().toLowerCase();

    //Filter users by name for username check
    const existingUser = users.find((user) => user.name === name);
    if(existingUser) return { error: 'This username is taken.' };

    const user = { id,name };
    users.push(user);
    return { user };
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id);
}

module.exports = { addUser, removeUser, getUser};