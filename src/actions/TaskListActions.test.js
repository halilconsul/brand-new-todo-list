import expect from 'expect';
import TaskListActions from './TaskListActions.js';
import AppConstants from '../constants/AppConstants.js';

describe('TaskListActions', () => {
   describe('addTaskList', () => {
      it('should create TASK_LIST_ADD_FULFILLED action', () => {
         const taskList = {taskListTitle: 'taskListTitle'};
         const expectedAction = {
            type: AppConstants.TASK_LIST_ADD_FULFILLED,
            payload: taskList
         };
         const action = TaskListActions.addTaskList(taskList);
         expect(action).toEqual(expectedAction);
      });
   });

   describe('deleteTaskList', () => {
      it('should create TASK_LIST_DELETE_FULFILLED action', () => {
         const taskList = {taskListId: 'taskListId'};
         const expectedAction = {
            type: AppConstants.TASK_LIST_DELETE_FULFILLED,
            payload: taskList
         };
         const action = TaskListActions.deleteTaskList(taskList);
         expect(action).toEqual(expectedAction);
      });
   });

   describe('updateTaskList', () => {
      it('should create TASK_LIST_UPDATE_FULFILLED action', () => {
         const taskList = {
            taskListId: 'taskListId',
            title: 'taskListTitle'
         };
         const expectedAction = {
            type: AppConstants.TASK_LIST_UPDATE_FULFILLED,
            payload: taskList
         };
         const action = TaskListActions.updateTaskList(taskList);
         expect(action).toEqual(expectedAction);
      });
   });

   describe('relocateTask', () => {
      it('should create RELOCATE_TASK_FULFILLED action', () => {
         const taskList = {taskListId: 'taskListId'};
         const expectedAction = {
            type: AppConstants.RELOCATE_TASK_FULFILLED,
            payload: taskList
         };
         const action = TaskListActions.relocateTask(taskList);
         expect(action).toEqual(expectedAction);
      });
   });

   describe('shiftTask', () => {
      it('should create SHIFT_TASK_FULFILLED action', () => {
         const taskList = {
            taskListId: 'taskListId',
            id: 'taskId',
            title: 'taskTitle',
            checked: '',
            message: ''
         };
         const expectedAction = {
            type: AppConstants.SHIFT_TASK_FULFILLED,
            payload: taskList
         };
         const action = TaskListActions.shiftTask(taskList);
         expect(action).toEqual(expectedAction);
      });
   });

   describe('checkTaskListComplete', () => {
      it('should create CHECK_TASK_LIST_COMPLETE_FULFILLED action', () => {
         const taskList = {
            taskListId: 'taskListId',
            isComplete: 'taskId'
         };
         const expectedAction = {
            type: AppConstants.CHECK_TASK_LIST_COMPLETE_FULFILLED,
            payload: taskList
         };
         const action = TaskListActions.checkTaskListComplete(taskList);
         expect(action).toEqual(expectedAction);
      });
   });
});
