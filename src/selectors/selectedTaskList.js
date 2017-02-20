import { createSelector } from 'reselect';

const tasksSelector = store => store.task.present.tasks;
const currentTaskListId = store => store.app.currentTaskListId;

export const getCurrentTaskList = (tasks, taskListId) => {
   const currentTaskList = tasks.filter(task => task.taskListId == taskListId);
   return currentTaskList;
}

export default createSelector(
   tasksSelector,
   currentTaskListId,
   getCurrentTaskList
);
