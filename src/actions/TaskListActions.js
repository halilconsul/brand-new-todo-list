import AppConstants from '../constants/AppConstants.js';

const TaskListActions = {
   addTaskList(taskList) {
      return {
         type: AppConstants.TASK_LIST_ADD_FULFILLED,
         payload: taskList
      }
   },

   deleteTaskList(taskListId) {
      return {
         type: AppConstants.TASK_LIST_DELETE_FULFILLED,
         payload: taskListId
      }
   },

   updateTaskList(taskList) {
      return {
         type: AppConstants.TASK_LIST_UPDATE_FULFILLED,
         payload: taskList
      }
   },

   relocateTask(taskListId) {
      return {
         type: AppConstants.RELOCATE_TASK_FULFILLED,
         payload: taskListId
      }
   },

   shiftTask(params) {
      return {
         type: AppConstants.SHIFT_TASK_FULFILLED,
         payload: params
      }
   },

   checkTaskListComplete(params) {
      return {
         type: AppConstants.CHECK_TASK_LIST_COMPLETE_FULFILLED,
         payload: params
      }
   }
}

export default TaskListActions;
