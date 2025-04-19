const express = require('express');

const expensesController = require('../controllers/users.controller');

const expensesRouter = express.Router();

expensesRouter.get('/', expensesController.getUsers);

expensesRouter.get('/:id', expensesController.getUser);

expensesRouter.post('/', expensesController.createUser);

expensesRouter.delete('/:id', expensesController.deleteUser);

expensesRouter.patch('/:id', expensesController.updateUser);

module.exports = expensesRouter;
