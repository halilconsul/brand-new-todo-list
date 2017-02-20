import expect from 'expect';
import TaskListReducer from './TaskListReducer.js';
import TaskListActions from '../actions/TaskListActions.js';

describe('TaskListReducer', () => {
   it('should add new TaskList when passed TASK_LIST_ADD_FULFILLED', () => {
      const initialState = {
         taskList: [
            {
               "id": 1025,
               "title": 'Learn something new',
               "isComplete": true
            }
         ]
      };
      const newTaskListTitle = 'taskListTitle';
      const action = TaskListActions.addTaskList(newTaskListTitle);
      const newState = TaskListReducer(initialState, action);
      expect(newState.taskList.length).toNotEqual(initialState.taskList.length);
   });

   it('should update taskList when passed TASK_LIST_UPDATE_FULFILLED', () => {
      const initialState = {
         taskList: [
            {
               "id": 10,
               "title": 'Walk',
               "isComplete": true
            },
            {
               "id": 1022,
               "title": 'Walk',
               "isComplete": true
            }
         ]
      };
      const taskList = {
         taskListId: 10,
         title: 'taskListTitle'
      };
      const action = TaskListActions.updateTaskList(taskList);
      const newState = TaskListReducer(initialState, action);
      const updatedTaskListIndex = initialState.taskList.findIndex(task => task.id == taskList.taskListId);
      expect(newState.taskList[updatedTaskListIndex].title).toEqual(taskList.title);
   });

   it('should delete TaskList when passed TASK_LIST_DELETE_FULFILLED', () => {
      const initialState = {
         taskList: [
            {
               "id": 1025,
               "title": 'Learn something new',
               "isComplete": true
            }
         ]
      };
      const taskList = {taskListId: 1025};
      const action = TaskListActions.deleteTaskList(taskList);
      const newState = TaskListReducer(initialState, action);
      const newTaskList = initialState.taskList.filter(task => task.id !== taskList.taskListId);
      expect(newState.taskList.length).toNotEqual(newTaskList.length);
   });

   it('should toggle TaskList check property when passed CHECK_TASK_LIST_COMPLETE_FULFILLED', () => {
      const initialState = {
         taskList: [
            {
               "id": 102,
               "title": 'Learn something new',
               "isComplete": true
            },
            {
               "id": 1028,
               "title": 'Learn',
               "isComplete": false
            }
         ]
      };
      const taskList = {
         taskListId: 102,
         isComplete: true
      };
      const action = TaskListActions.checkTaskListComplete(taskList);
      const newState = TaskListReducer(initialState, action);
      const newTaskList = initialState.taskList.filter(task => task.id !== taskList.taskListId);
      expect(newState.taskList.length).toNotEqual(newTaskList.length);
   });
});
