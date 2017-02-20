import AppConstants from '../constants/AppConstants.js';
import { formatTaskList, updateTaskList, deleteTask } from '../utils/index.js';

const initialState = {
   taskList: [
      {
         "id": 1025301245615,
         "title": 'Learn something new',
         "isComplete": true
      }
   ]
}

export default function reducer(state=initialState, action) {
   switch (action.type) {
      case AppConstants.TASK_LIST_ADD_FULFILLED: {
         const allTaskList = [...state.taskList];
         const newTaskList = formatTaskList(action.payload);
         allTaskList.unshift(newTaskList);
         return {
            ...state,
            taskList: allTaskList
         }
      }
         break;

      case AppConstants.TASK_LIST_UPDATE_FULFILLED: {
         const allTaskList = [...state.taskList];
         const updatedTaskList = action.payload;
         return {
            ...state,
            taskList: updateTaskList(allTaskList, updatedTaskList)
         }
      }
         break;

      case AppConstants.TASK_LIST_DELETE_FULFILLED: {
         const allTaskList = [...state.taskList];
         const taskListId = action.payload;
         return {
            ...state,
            taskList: deleteTask(allTaskList, taskListId)
         }
      }
         break;

      case AppConstants.CHECK_TASK_LIST_COMPLETE_FULFILLED: {
         const allTasks = [...state.taskList];
         const updatedTask = allTasks.findIndex(task => task.id == action.payload.taskListId);
         allTasks[updatedTask].isComplete = action.payload.isComplete;
         return {
            ...state,
            taskList: allTasks
         }
      }
         break;
   }
   return state;
}
