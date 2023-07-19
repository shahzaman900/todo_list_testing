"use strict";

var add = require('./add');

test('should ', function () {
  expect(add('shah')).toEqual([{
    description: 'shah',
    complete: true,
    index: 1
  }]);
});