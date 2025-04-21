const usersService = require('../services/users.service');

module.exports.getUsers = (req, res) => {
  const users = usersService.getUsers().length ? usersService.getUsers() : [];

  res.send(users);

  return users;
};

module.exports.getUser = (req, res) => {
  const { id } = req.params;

  const todo = usersService.getUserById(id);

  if (!todo) {
    res.sendStatus(404);

    return;
  }

  res.send(todo);
};

module.exports.createUser = (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.sendStatus(400);

    return;
  }

  res.statusCode = 201;

  res.send(usersService.createUser(name));
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;

  if (!usersService.getUserById(id)) {
    res.sendStatus(404);

    return;
  }

  usersService.deleteUser(id);

  res.sendStatus(204);
};

module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name || !id) {
    res.sendStatus(400);

    return;
  }

  const newUser = usersService.updateUser({ id, name });

  if (!newUser) {
    res.sendStatus(404);

    return;
  }

  res.send(newUser);

  res.sendStatus(200);
};
