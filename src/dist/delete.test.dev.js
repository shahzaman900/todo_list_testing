"use strict";

var _index = require("./index.js");

var deleteList = require("./delete");

describe("deleteList", function () {
  beforeAll(function () {
    var tasks = [{
      description: "Task 1",
      complete: false,
      index: 1
    }, {
      description: "Task 2",
      complete: false,
      index: 2
    }, {
      description: "Task 3",
      complete: false,
      index: 3
    }];
    (0, _index.storeDateInLocalStorage)(tasks);
  });
  afterEach(function () {
    (0, _index.storeDateInLocalStorage)([]);
  });
  test("deletes a task from the list", function () {
    deleteList(2);
    var tasks = (0, _index.getDateFromLocalStorage)();
    expect(tasks.length).toBe(2);
    expect(tasks[0].description).toBe("Task 1");
    expect(tasks[0].complete).toBe(false);
    expect(tasks[0].index).toBe(1);
    expect(tasks[1].description).toBe("Task 3");
    expect(tasks[1].complete).toBe(false);
    expect(tasks[1].index).toBe(2);
  });
});