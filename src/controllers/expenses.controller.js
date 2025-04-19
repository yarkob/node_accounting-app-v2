const expensesService = require('../services/expenses.service.js');

module.exports.getAllExpenses = (req, res) => {
  res.send(expensesService.getAllExpenses());
};

module.exports.getExpense = (req, res) => {
  const { id } = req.params;

  const todo = expensesService.getExpenseById(id);

  if (!todo) {
    res.sendStatus(404);

    return;
  }

  res.send(todo);
};

module.exports.createExpense = (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.sendStatus(400);

    return;
  }

  expensesService.createExpense(name);

  res.sendStatus(201);
};

module.exports.deleteExpense = (req, res) => {
  const { id } = req.params;

  if (!expensesService.getExpenseById(id)) {
    res.sendStatus(404);

    return;
  }

  expensesService.deleteExpense(id);

  res.sendStatus(204);
};

module.exports.updateExpense = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name || !id) {
    res.sendStatus(400);

    return;
  }

  const newExpense = expensesService.updateExpense({ id, name });

  if (!newExpense) {
    res.sendStatus(404);

    return;
  }

  res.send(newExpense);

  res.sendStatus(200);
};
