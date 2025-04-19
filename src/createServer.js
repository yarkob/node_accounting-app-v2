'use strict';

const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users.route');
const expensesRouter = require('./routes/expenses.route');
const { getUsers } = require('./services/users.service');

function createServer() {
  const app = express();

  // eslint-disable-next-line
  console.log('server created', getUsers());

  app.use(cors());

  app.use('/users', express.json(), usersRouter);

  app.use('/expenses', express.json(), expensesRouter);

  return app;
}

module.exports = {
  createServer,
};
