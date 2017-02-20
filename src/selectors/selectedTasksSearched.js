import { createSelector } from 'reselect';

const tasksSelector = store => store.task.present.tasks;
const searchedTaskName = store => store.app.searchedTaskName;

export const getCompletedTasks = (tasks, searchedTask) => {
   if (searchedTask) {
      const searchQuery = searchedTask.toLowerCase();
      const displayedTasks = tasks.filter(task => {
         const searchValue = task.title.toLowerCase();
         return searchValue.indexOf(searchQuery) !== -1;
      });
      return displayedTasks;
   } else {
      return;
   }
}

export default createSelector(
   tasksSelector,
   searchedTaskName,
   getCompletedTasks
);
