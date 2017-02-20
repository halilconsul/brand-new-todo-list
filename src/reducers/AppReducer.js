import AppConstants from '../constants/AppConstants.js';

const initialState = {
   currentTaskListId: null,
   currentTaskId: null,
   isTaskEdited: false,
   relocatedTaskListId: null,
   searchedTaskName: ''
}

export default function reducer(state=initialState, action) {
   switch (action.type) {
      case AppConstants.LOAD_TASKS_FULFILLED: {
         return {
            ...state,
            currentTaskListId: action.payload
         }
      }
         break;

      case AppConstants.GET_CURRENT_TASK_FULFILLED: {
         return {
            ...state,
            currentTaskId: action.payload.id
         }
      }
         break;

      case AppConstants.OPEN_TASK_EDITOR_FULFILLED: {
         return {
            ...state,
            isTaskEdited: true
         }
      }
         break;

      case AppConstants.CLOSE_TASK_EDITOR_FULFILLED: {
         return {
            ...state,
            isTaskEdited: false
         }
      }
         break;

      case AppConstants.RELOCATE_TASK_FULFILLED: {
         return {
            ...state,
            relocatedTaskListId: action.payload
         }
      }
         break;

      case AppConstants.SEARCH_TASK_FULFILLED: {
         return {
            ...state,
            searchedTaskName: action.payload
         }
      }
         break;
   }
   return state;
}
