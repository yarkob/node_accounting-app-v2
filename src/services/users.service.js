const { genId } = require('./utility.service');

let users = [];

const setInitUsers = () => {
  users = [];
};

const getUsers = () => {
  return users;
};

const getUserById = (id) => {
  return users.find((user) => user.id === +id) || null;
};

const deleteUser = (id) => {
  users = users.filter((user) => user.id !== +id);
};

const createUser = (name) => {
  const newUser = { id: genId(users), name };

  users.push(newUser);

  return newUser;
};

const updateUser = (user) => {
  users = users.map((checkUser) => {
    if (checkUser.id === +user.id) {
      return user;
    }

    return checkUser;
  });

  return { id: +user.id, name: user.name };
};

module.exports = {
  setInitUsers,
  getUsers,
  getUserById,
  deleteUser,
  createUser,
  updateUser,
};
