import { combineReducers } from 'redux';
import AppConstants from '../constants/AppConstants.js';
import undoable, { includeAction } from 'redux-undo';
import TaskListReducer from './TaskListReducer.js';
import TasksReducer from './TasksReducer.js';
import AppReducer from './AppReducer.js';

const rootReducer = combineReducers({
   app: AppReducer,
   taskList: TaskListReducer,
   task: undoable(TasksReducer, {
      filter: includeAction([AppConstants.ADD_TASK_FULFILLED, AppConstants.DELETE_TASK_FULFILLED])
   })
});

export default rootReducer;
