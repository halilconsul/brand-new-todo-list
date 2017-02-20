import AppConstants from '../constants/AppConstants.js';

const TasksPageActions = {
   loadTasks(taskId) {
      return {
         type: AppConstants.LOAD_TASKS_FULFILLED,
         payload: taskId
      }
   },

   addTask(task) {
      return {
         type: AppConstants.ADD_TASK_FULFILLED,
         payload: task
      }
   },

   updateTaskStatus(params) {
      return {
         type: AppConstants.UPDATE_TASK_STATUS_FULFILLED,
         payload: params
      }
   },

   updateTask(params) {
      return {
         type: AppConstants.UPDATE_TASK_STATUS_FULFILLED,
         payload: params
      }
   },

   deleteTask(params) {
      return {
         type: AppConstants.DELETE_TASK_FULFILLED,
         payload: params
      }
   },

   getCurrentTask(params) {
      return {
         type: AppConstants.GET_CURRENT_TASK_FULFILLED,
         payload: params
      }
   },

   openTaskEditor() {
      return {
         type: AppConstants.OPEN_TASK_EDITOR_FULFILLED
      }
   },

   closeTaskEditor() {
      return {
         type: AppConstants.CLOSE_TASK_EDITOR_FULFILLED
      }
   },

   searchTask(task) {
      return {
         type: AppConstants.SEARCH_TASK_FULFILLED,
         payload: task
      }
   }
}

export default TasksPageActions;
