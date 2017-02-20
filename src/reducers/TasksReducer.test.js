import expect from 'expect';
import TasksReducer from './TasksReducer.js';
import TasksActions from '../actions/TasksActions.js';
import TaskListActions from '../actions/TaskListActions.js';

describe('TasksReducer', () => {
   it('should add new task when passed ADD_TASK_FULFILLED', () => {
      const initialState = {
         tasks: [
            {
               "taskListId": 1025301245615,
               "id": 1025378595685,
               "title": 'do something',
               "checked": false,
               "message": 'some text'
            }
         ]
      };
      const task = {
         taskListId: 'taskListId',
         title: 'taskTitle'
      };
      const action = TasksActions.addTask(task);
      const newState = TasksReducer(initialState, action);
      const newTasks = initialState.tasks.push(task);
      expect(newTasks.length).toNotEqual(initialState.tasks.length);
   });

   it('should update task when passed UPDATE_TASK_STATUS_FULFILLED', () => {
      const initialState = {
         tasks: [
            {
               "taskListId": 1025301245615,
               "id": 1025378595685,
               "title": 'do something',
               "checked": false,
               "message": 'some text'
            },
            {
               "taskListId": 132325,
               "id": 10223295685,
               "title": 'go somewhere',
               "checked": false,
               "message": 'some text'
            }
         ]
      };
      const task = {
         id: 1025378595685,
         checked: false
      };
      const action = TasksActions.updateTaskStatus(task);
      const newState = TasksReducer(initialState, action);
      const updatedTaskIndex = initialState.tasks.findIndex(task => task.id == task.id);
      initialState.tasks[updatedTaskIndex].checked = task.checked;
      expect(newState.tasks[updatedTaskIndex].checked).toEqual(task.checked);
   });

   it('should delete task when passed DELETE_TASK_FULFILLED', () => {
      const initialState = {
         tasks: [
            {
               "taskListId": 1025301245615,
               "id": 1025378595685,
               "title": 'do something',
               "checked": false,
               "message": 'some text'
            },
            {
               "taskListId": 132325,
               "id": 10223295685,
               "title": 'go somewhere',
               "checked": false,
               "message": 'some text'
            }
         ]
      };
      const task = { id: 1025378595685 };
      const action = TasksActions.deleteTask(task);
      const newState = TasksReducer(initialState, action);
      const newTaskList = initialState.tasks.filter(task => task.id !== task.id);
      expect(newState.tasks.length).toNotEqual(initialState.tasks.length);
   });

   it('should relocate task when passed SHIFT_TASK_FULFILLED', () => {
      const initialState = {
         tasks: [
            {
               "taskListId": 1025301245615,
               "id": 1025378596685,
               "title": 'do something',
               "checked": false,
               "message": 'some text'
            },
            {
               "taskListId": 1025378595685,
               "id": 10223295685,
               "title": 'go somewhere',
               "checked": false,
               "message": 'some text'
            }
         ]
      };
      const task = {
         taskListId: 1025378595685,
         isComplete: true
      };
      const action = TaskListActions.shiftTask(task);
      const newState = TasksReducer(initialState, action);
      const updatedTaskIndex = initialState.tasks.findIndex(task => task.taskListId == task.taskListId);
      expect(newState.tasks.length).toEqual(initialState.tasks.length);
   });
});
