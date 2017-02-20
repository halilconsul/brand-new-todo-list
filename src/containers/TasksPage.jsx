import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { ActionCreators } from 'redux-undo';
import store from '../store/index.js';
import TaskListActions from '../actions/TaskListActions.js';
import TasksActions from '../actions/TasksActions.js';
import TasksPage from '../components/TasksPage.jsx';

import selectedTaskListSelector from '../selectors/selectedTaskList.js';
import selectTasksComplete from '../selectors/selectedTasksComplete.js';
import selectTasksSearched from '../selectors/selectedTasksSearched.js';

class TasksPageContainer extends React.Component {
   componentWillMount() {
      this.props.TasksActions.loadTasks(this.props.params.taskId);
   }

   componentWillReceiveProps(nextProps) {
      if (nextProps.params.taskId !== this.props.params.taskId) {
         this.props.TasksActions.loadTasks(nextProps.params.taskId);
      }
      if (nextProps.totalTasksChecked == nextProps.currentTaskList.length) {
         return this.checkTaskListComplete(nextProps.params.taskId, true);
      } else {
         return this.checkTaskListComplete(nextProps.params.taskId, false);
      }
   }

   checkTaskListComplete(taskId, bool) {
      this.props.TaskListActions.checkTaskListComplete({
         taskListId: taskId,
         isComplete: bool
      });
   }

   handleTaskAdd({ title }) {
      this.props.TasksActions.addTask({
         taskListId: this.props.params.taskId,
         title: title
      });
   }

   handleTaskStatusChange(taskId, { isChecked }) {
      this.props.TasksActions.updateTaskStatus({
         id: taskId,
         checked: isChecked
      });
   }

   handleRouteChange(taskId) {
      const taskList = this.props.params.taskId;
      this.props.router.push(`tasks/${taskList}/${taskId}`);
      this.props.TasksActions.getCurrentTask({
         id: taskId
      });
      return this.handleTaskEditorOpen();
   }

   handleTaskEditorOpen() {
      this.props.TasksActions.openTaskEditor();
   }

   handleTaskDelete(taskId) {
      this.props.TasksActions.deleteTask({
         id: taskId
      });
   }

   handleTaskUndo() {
      store.dispatch(ActionCreators.undo());
   }

   handleTaskRedo() {
      store.dispatch(ActionCreators.redo());
   }

   render() {
      return (
         <TasksPage
            searchedTasks={this.props.searchedTasks}
            currentTaskList={this.props.currentTaskList}
            onAddTask={this.handleTaskAdd.bind(this)}
            onTaskStatusChange={this.handleTaskStatusChange.bind(this)}
            onTaskDelete={this.handleTaskDelete.bind(this)}
            children={this.props.children}
            handleRouteChange={this.handleRouteChange.bind(this)}
            currentTaskEdit={this.props.isTaskEdited}
            handleTaskUndo={this.handleTaskUndo.bind(this)}
            handleTaskRedo={this.handleTaskRedo.bind(this)}
         />
      );
   }
}

function mapStateToProps(store) {
   return {
      currentTaskList: selectedTaskListSelector(store),
      totalTasksChecked: selectTasksComplete(store),
      isTaskEdited: store.app.isTaskEdited,
      searchedTasks: selectTasksSearched(store),
   }
}

function mapDispatchToProps(dispatch) {
   return {
      TaskListActions: bindActionCreators(TaskListActions, dispatch),
      TasksActions: bindActionCreators(TasksActions, dispatch)
   }
}

const wrappedComponent = withRouter(TasksPageContainer);
export default connect(mapStateToProps, mapDispatchToProps)(wrappedComponent);
