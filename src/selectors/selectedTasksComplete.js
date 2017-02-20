import { createSelector } from 'reselect';

const tasksSelector = store => store.task.present.tasks;
const currentTaskListId = store => store.app.currentTaskListId;

export const getCompletedTasks = (tasks, taskListId) => {
   let counter = 0;
   const currentTaskList = tasks.filter(task => task.taskListId == taskListId);
   currentTaskList.map(task => {
      if (task.checked == true) {
         counter = counter + 1;
      }
   });
   return counter;
}

export default createSelector(
   tasksSelector,
   currentTaskListId,
   getCompletedTasks
);
