"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = deleteList;

var _index = require("./index.js");

function deleteList(id) {
  var tasks = (0, _index.getDateFromLocalStorage)();
  var filterArray = tasks.filter(function (task) {
    return task.index !== id;
  });
  filterArray.forEach(function (task, index) {
    task.index = index + 1;
  });
  (0, _index.storeDateInLocalStorage)(filterArray);
}

module.exports = {
  deleteList: deleteList
};