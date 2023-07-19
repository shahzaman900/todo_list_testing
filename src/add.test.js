const add = require('./add');

test('should ', () => {
  expect(add('shah')).toEqual([
    {
      description: 'shah',
      complete: true,
      index: 1
    }
  ])
});