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

   it('should get currentTaskId when passed GET_CURRENT_TASK_FULFILLED', () => {
      const initialState = {
         task: [
            {
               "id": 101,
               "title": 'Learn something new',
               "isComplete": true
            },
            {
               "id": 102,
               "title": 'Learn something',
               "isComplete": true
            },
            {
               "id": 103,
               "title": 'Learn',
               "isComplete": false
            }
         ]
      };

      const currentTaskId = '102';

      const action = TasksActions.getCurrentTask(currentTaskId);
      const newState = AppReducer(initialState, action);

      const currentTaskIndex = initialState.task.findIndex(task => task.id == currentTaskId);
      const currentTask = initialState.task[currentTaskIndex];
      expect(newState.task[currentTaskIndex].id).toEqual(currentTask.id);
      expect(newState.task[currentTaskIndex].title).toEqual(currentTask.title);
      expect(newState.task[currentTaskIndex].isComplete).toEqual(currentTask.isComplete);
   });

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
