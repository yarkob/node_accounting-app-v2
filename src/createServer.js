'use strict';

const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users.route');
const expensesRouter = require('./routes/expenses.route');
const { setInitUsers } = require('./services/users.service');
const { setInitExpenses } = require('./services/expenses.service');

function createServer() {
  const app = express();

  setInitUsers();
  setInitExpenses();

  app.use(cors());

  app.use('/users', express.json(), usersRouter);

  app.use('/expenses', express.json(), expensesRouter);

  return app;
}

module.exports = {
  createServer,
};
