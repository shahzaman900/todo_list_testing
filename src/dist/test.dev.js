"use strict";

function addTask(description) {
  var id = getDateFromLocalStorage().length;
  var task = {
    description: description,
    complete: false,
    index: id + 1
  };
  tasks.push(task);
  storeDateInLocalStorage(tasks); // displayTaskList();
}

module.exports = addTask;