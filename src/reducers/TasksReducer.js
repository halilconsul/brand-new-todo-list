import AppConstants from '../constants/AppConstants.js';
import { formatTask, deleteTask, updatedTaskStatus } from '../utils/index.js';

const initialState = {
   tasks: [
      {
         "taskListId": 1025301245615,
         "id": 1025378595685,
         "title": 'Read a book',
         "checked": false,
         "message": 'I need to read that book'
      }
   ]
}

export default function reducer(state=initialState, action) {
   switch (action.type) {
      case AppConstants.ADD_TASK_FULFILLED: {
         const allTasks = [...state.tasks];
         const newTask = formatTask(action.payload);
         allTasks.unshift(newTask);
         return {
            ...state,
            tasks: allTasks
         }
      }
         break;

      case AppConstants.UPDATE_TASK_STATUS_FULFILLED: {
         const allTasks = [...state.tasks];
         const task = action.payload;
         return {
            ...state,
            tasks: updatedTaskStatus(allTasks, task)
         }
      }
         break;

      case AppConstants.DELETE_TASK_FULFILLED: {
         const allTasks = [...state.tasks];
         const taskId = action.payload.id;
         return {
            ...state,
            tasks: deleteTask(allTasks, taskId)
         }
      }
         break;

      case AppConstants.SHIFT_TASK_FULFILLED: {
         const allTasks = [...state.tasks];
         const currentTaskIndex = allTasks.findIndex(task => task.id == action.payload.id);
         allTasks[currentTaskIndex] = formatTask(action.payload);
         return {
            ...state,
            tasks: allTasks
         }
      }
         break;
   }
   return state;
}
