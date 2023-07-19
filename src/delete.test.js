import { getDateFromLocalStorage, storeDateInLocalStorage } from './index.js';

const deleteList = require('./delete');

describe('deleteList', () => {
  beforeAll(() => {
    const tasks = [
      { description: 'Task 1', complete: false, index: 1 },
      { description: 'Task 2', complete: false, index: 2 },
      { description: 'Task 3', complete: false, index: 3 },
    ];
    storeDateInLocalStorage(tasks);
  });

  afterEach(() => {
    storeDateInLocalStorage([]);
  });

  test('deletes a task from the list', () => {
    deleteList(2);
    const tasks = getDateFromLocalStorage();
    expect(tasks.length).toBe(2);
    expect(tasks[0].description).toBe('Task 1');
    expect(tasks[0].complete).toBe(false);
    expect(tasks[0].index).toBe(1);
    expect(tasks[1].description).toBe('Task 3');
    expect(tasks[1].complete).toBe(false);
    expect(tasks[1].index).toBe(2);
  });
});
