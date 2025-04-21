module.exports.genId = (array) => {
  return !array.length ? 0 : Math.max(...array.map((user) => user.id)) + 1;
};
