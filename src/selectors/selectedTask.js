import { createSelector } from 'reselect';

const tasksSelector = store => store.task.present.tasks;
const currentTaskId = store => store.app.currentTaskId;

export const getCurrentTask = (tasks, taskId) => {
   const currentTask = tasks.filter(task => task.id == taskId);
   return currentTask[0];
}

export default createSelector(
   tasksSelector,
   currentTaskId,
   getCurrentTask
);
