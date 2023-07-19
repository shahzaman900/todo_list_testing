import { getDateFromLocalStorage, storeDateInLocalStorage } from './index.js';

export default function deleteList(id) {
  const tasks = getDateFromLocalStorage();
  const filterArray = tasks.filter((task) => task.index !== id);
  filterArray.forEach((task, index) => {
    task.index = index + 1;
  });
  storeDateInLocalStorage(filterArray);
}

module.exports = { deleteList };
