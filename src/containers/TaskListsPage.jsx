import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import TaskListsPage from '../components/TaskListsPage.jsx';
import TasksActions from '../actions/TasksActions.js';
import TaskListActions from '../actions/TaskListActions.js';
import selectTaskListsComplete from '../selectors/selectedTaskListsCompleted.js';
import ConfirmModal from '../components/ConfirmModal.jsx';

class TaskListsPageContainer extends React.Component {
   constructor() {
      super();
      this.state = {
         isModalOpen: false,
         taskListId: ''
      }
   }
   componentWillReceiveProps(nextProps) {
      if (nextProps.search !== this.props.search) {
         this.props.TasksActions.searchTask(nextProps.search);
      }
   }

   componentWillMount() {
      this.props.router.push('tasks/');
   }

   handleTaskListAdd({ title }) {
      this.props.TaskListActions.addTaskList({
         title: title,
      });
   }

   handleTaskListDelete(taskListId) {
      this.setState({
         isModalOpen: true,
         taskListId: taskListId
      });
   }

   deleteTaskList(taskListId) {
      this.props.TaskListActions.deleteTaskList(taskListId);
      this.props.router.push('/tasks');
      return this.handleModalClose();
   }

   handleTaskListEdit(taskListId, { name }) {
      this.props.TaskListActions.updateTaskList({
         taskListId: taskListId,
         title: name,
      });
   }

   handleRouteChange(taskListId) {
      this.props.router.push(`tasks/${taskListId}`);
   }

   handleTaskRelocate(taskListId) {
      this.props.TaskListActions.relocateTask(taskListId);
   }

   handleSearch(search) {
      const { router, location } = this.props;
      router.push({
         pathname: location.pathname,
         query: {...location.query, search}
      });
   }

   handleDeleteSubmit() {
      return this.deleteTaskList(this.state.taskListId);
   }

   handleDeleteCancel() {
      return this.handleModalClose();
   }

   handleModalClose() {
      this.setState({  isModalOpen: false });
   }

   renderTaskListPage() {
      return (
         <TaskListsPage
            onSearch={this.handleSearch.bind(this)}
            taskList={this.props.taskList}
            currentTaskListId={this.props.params.taskId}
            children={this.props.children}
            onAddTaskList={this.handleTaskListAdd.bind(this)}
            onDeleteTaskList={this.handleTaskListDelete.bind(this)}
            onEditTaskList={this.handleTaskListEdit.bind(this)}
            onRouteChange={this.handleRouteChange.bind(this)}
            isTaskEdited={this.props.isTaskEdited}
            onTaskRelocate={this.handleTaskRelocate.bind(this)}
            totalTaskListsChecked={this.props.totalTaskListsChecked}
         />
      );
   }

   renderConfirmModal() {
      return (
         <ConfirmModal
            isOpen={this.state.isModalOpen}
            onSubmit={this.handleDeleteSubmit.bind(this)}
            onClose={this.handleDeleteCancel.bind(this)}
         />
      );
   }

   render() {
      return (
         <div>
            {this.renderTaskListPage()}
            {this.renderConfirmModal()}
         </div>
      );
   }
}

function mapStateToProps(store, ownProps) {
   return {
      taskList: store.taskList.taskList,
      isTaskEdited: store.app.isTaskEdited,
      totalTaskListsChecked: selectTaskListsComplete(store),
      search: ownProps.location.query.search
   }
}

function mapDispatchToProps(dispatch) {
   return {
      TaskListActions: bindActionCreators(TaskListActions, dispatch),
      TasksActions: bindActionCreators(TasksActions, dispatch)
   }
}

const wrappedComponent = withRouter(TaskListsPageContainer)
export default connect(mapStateToProps, mapDispatchToProps)(wrappedComponent);
