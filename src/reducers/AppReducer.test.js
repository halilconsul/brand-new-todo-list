import expect from 'expect';
import AppReducer from './AppReducer.js';
import TaskListActions from '../actions/TaskListActions.js';
import TasksActions from '../actions/TasksActions.js';

describe('App Reducer', () => {
   it('should add currentTaskListId when passed LOAD_TASKS_FULFILLED', () => {
      const initialState = {
         currentTaskListId: 'oldTaskListId'
      };
      const newTaskListId = 'newTaskListId';
      const action = TasksActions.loadTasks(newTaskListId);
      const newState = AppReducer(initialState, action);
      expect(newState.currentTaskListId).toEqual(newTaskListId);
   });

   // it('should get currentTaskId when passed GET_CURRENT_TASK_FULFILLED', () => {
   //    const initialState = {
   //       currentTaskId: 'oldTaskId'
   //    };
   //    const newTaskId = 'newTaskId';
   //    const action = TasksActions.getCurrentTask(newTaskId);
   //    const newState = AppReducer(initialState, action);
   //    expect(newState.currentTaskId).toEqual(newTaskId);
   // });

   it('should turn editor on when passed OPEN_TASK_EDITOR_FULFILLED', () => {
      const initialState = {
         isTaskEdited: false
      };
      const action = TasksActions.openTaskEditor();
      const newState = AppReducer(initialState, action);
      expect(newState.isTaskEdited).toEqual(true);
   });

   it('should turn editor off when passed CLOSE_TASK_EDITOR_FULFILLED', () => {
      const initialState = {
         isTaskEdited: true
      };
      const action = TasksActions.closeTaskEditor();
      const newState = AppReducer(initialState, action);
      expect(newState.isTaskEdited).toEqual(false);
   });

   it('should add newTaskListId when passed RELOCATE_TASK_FULFILLED', () => {
      const initialState = {
         relocatedTaskListId: 'oldTaskListId'
      };
      const newTaskListId = 'newTaskListId';
      const action = TaskListActions.relocateTask(newTaskListId);
      const newState = AppReducer(initialState, action);
      expect(newState.relocatedTaskListId).toEqual(newTaskListId);
   });

   it('should add newTaskTitle when passed SEARCH_TASK_FULFILLED', () => {
      const initialState = {
         searchedTaskName: 'oldTaskList'
      };
      const newTaskListTitle = 'newTaskListTitle';
      const action = TasksActions.searchTask(newTaskListTitle);
      const newState = AppReducer(initialState, action);
      expect(newState.searchedTaskName).toEqual(newTaskListTitle);
   });
});
