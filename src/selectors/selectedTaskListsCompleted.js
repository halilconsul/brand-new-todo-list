import { createSelector } from 'reselect';

const taskListSelector = store => store.taskList.taskList;

export const getCompletedTaskLists = (taskLists) => {
   let counter = 0;
   taskLists.map(task => {
      if (task.isComplete == true) {
         counter = counter + 1;
      }
   });
   return counter;
}

export default createSelector(
   taskListSelector,
   getCompletedTaskLists
);
