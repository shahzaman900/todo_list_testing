"use strict";

/* eslint-disable linebreak-style */
var tasks = [];

function addTask(description) {
  var id = tasks.length;
  var task = {
    description: description,
    complete: false,
    index: id + 1
  };
  tasks = tasks.push(task);
  console.log(tasks);
  return tasks;
}

module.exports = addTask;