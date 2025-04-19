const { genId } = require('utility.service');

let expenses = [];

const getAllExpenses = () => {
  return expenses;
};

const getExpenseById = (id) => {
  return expenses.find((user) => user.id === +id) || null;
};

const deleteExpense = (id) => {
  expenses = expenses.filter((user) => user.id !== +id);
};

const createExpense = (body) => {
  expenses.push({ id: genId(expenses), ...body });
};

const updateExpense = (user) => {
  expenses = expenses.map((checkExpense) => {
    if (checkExpense.id === +user.id) {
      return user;
    }

    return checkExpense;
  });

  return expenses;
};

module.exports = {
  getAllExpenses,
  getExpenseById,
  deleteExpense,
  createExpense,
  updateExpense,
};
