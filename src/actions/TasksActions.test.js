import expect from 'expect';
import TasksActions from './TasksActions.js';
import AppConstants from '../constants/AppConstants.js';

describe('TasksActions', () => {
   describe('loadTasks', () => {
      it('should create LOAD_TASKS_FULFILLED action', () => {
         const taskList = 'taskListId';
         const expectedAction = {
            type: AppConstants.LOAD_TASKS_FULFILLED,
            payload: taskList
         };
         const action = TasksActions.loadTasks(taskList);
         expect(action).toEqual(expectedAction);
      });
   });

   describe('addTask', () => {
      it('should create ADD_TASK_FULFILLED action', () => {
         const taskList = {
            taskListId: 'taskListId',
            title: 'taskTitle'
         };
         const expectedAction = {
            type: AppConstants.ADD_TASK_FULFILLED,
            payload: taskList
         };
         const action = TasksActions.addTask(taskList);
         expect(action).toEqual(expectedAction);
      });
   });

   describe('updateTaskStatus', () => {
      it('should create UPDATE_TASK_STATUS_FULFILLED action', () => {
         const taskList = {
            id: 'taskListId',
            status: ''
         };
         const expectedAction = {
            type: AppConstants.UPDATE_TASK_STATUS_FULFILLED,
            payload: taskList
         };
         const action = TasksActions.updateTaskStatus(taskList);
         expect(action).toEqual(expectedAction);
      });
   });

   describe('updateTask', () => {
      it('should create UPDATE_TASK_STATUS_FULFILLED action', () => {
         const taskList = {
            taskId: 'taskListId',
            status: 'checked',
            title: 'task title',
            message: 'task message'
         };
         const expectedAction = {
            type: AppConstants.UPDATE_TASK_STATUS_FULFILLED,
            payload: taskList
         };
         const action = TasksActions.updateTask(taskList);
         expect(action).toEqual(expectedAction);
      });
   });

   describe('deleteTask', () => {
      it('should create DELETE_TASK_FULFILLED action', () => {
         const taskList = { taskId: 'taskListId' };
         const expectedAction = {
            type: AppConstants.DELETE_TASK_FULFILLED,
            payload: taskList
         };
         const action = TasksActions.deleteTask(taskList);
         expect(action).toEqual(expectedAction);
      });
   });

   describe('getCurrentTask', () => {
      it('should create GET_CURRENT_TASK_FULFILLED action', () => {
         const taskList = { taskId: 'taskListId' };
         const expectedAction = {
            type: AppConstants.GET_CURRENT_TASK_FULFILLED,
            payload: taskList
         };
         const action = TasksActions.getCurrentTask(taskList);
         expect(action).toEqual(expectedAction);
      });
   });

   describe('openTaskEditor', () => {
      it('should create OPEN_TASK_EDITOR_FULFILLED action', () => {
         const expectedAction = {
            type: AppConstants.OPEN_TASK_EDITOR_FULFILLED
         };
         const action = TasksActions.openTaskEditor();
         expect(action).toEqual(expectedAction);
      });
   });

   describe('closeTaskEditor', () => {
      it('should create CLOSE_TASK_EDITOR_FULFILLED action', () => {
         const expectedAction = {
            type: AppConstants.CLOSE_TASK_EDITOR_FULFILLED
         };
         const action = TasksActions.closeTaskEditor();
         expect(action).toEqual(expectedAction);
      });
   });

   describe('searchTask', () => {
      it('should create SEARCH_TASK_FULFILLED action', () => {
         const taskTitle = 'taskListId';
         const expectedAction = {
            type: AppConstants.SEARCH_TASK_FULFILLED,
            payload: taskTitle
         };
         const action = TasksActions.searchTask(taskTitle);
         expect(action).toEqual(expectedAction);
      });
   });
});
