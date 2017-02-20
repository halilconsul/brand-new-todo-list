import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import selectedTaskSelector from '../selectors/selectedTask.js';
import TaskListActions from '../actions/TaskListActions.js';
import TasksActions from '../actions/TasksActions.js';
import TasksPageEdit from '../components/TasksPageEdit.jsx';

class TasksPageEditContainer extends React.Component {
   componentWillUnmount() {
      this.props.router.goBack();
   }

   handleTaskEdit({ title, checked, message }) {
      this.props.TasksActions.updateTask({
         id: this.props.currentTask.id,
         title: title,
         checked: checked,
         message: message
      });
      return this.handleTaskEditorClose();
   }

   handleTaskEditorClose() {
      this.props.TasksActions.closeTaskEditor();
   }

   handleTaskRelocated({ newTaskListId, title, checked, message }) {
      this.props.TaskListActions.shiftTask({
         taskListId: newTaskListId,
         id: this.props.currentTask.id,
         title: title,
         checked: checked,
         message: message
      });
      this.handleTaskEditorClose();
   }

   render() {
      return (
         <TasksPageEdit
            currentTask={this.props.currentTask}
            onTaskEdit={this.handleTaskEdit.bind(this)}
            handleEditorClose={this.handleTaskEditorClose.bind(this)}
            relocatedTaskListId={this.props.relocatedTaskListId}
            onTaskRelocate={this.handleTaskRelocated.bind(this)}
         />
      );
   }
}

function mapStateToProps(store) {
   return {
      currentTask: selectedTaskSelector(store),
      relocatedTaskListId: store.app.relocatedTaskListId
   }
}

function mapDispatchToProps(dispatch) {
   return {
      TasksActions: bindActionCreators(TasksActions, dispatch),
      TaskListActions: bindActionCreators(TaskListActions,dispatch)
   }
}

const wrappedComponent = withRouter(TasksPageEditContainer);
export default connect(mapStateToProps, mapDispatchToProps)(wrappedComponent);
