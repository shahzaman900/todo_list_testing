/* eslint-disable linebreak-style */
let tasks = [];

function addTask(description) {
  const id = tasks.length;
  const task = { description, complete: false, index: id + 1 };
  tasks = tasks.push(task);
  console.log(tasks);
  return tasks;
}
module.exports = addTask;