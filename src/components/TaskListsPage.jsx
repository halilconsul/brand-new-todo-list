import React from 'react';
import { withRouter } from 'react-router';
import TaskList from './TaskList.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';
import '../style/globalStyle.scss';
import './TaskListsPage.scss';

const ENTER_KEY = 13;

class TaskListsPage extends React.Component {
   handleSearch() {
      this.props.onSearch(this.SearchInput.value);
      this.SearchInput.value = '';
   }

   handleKeyDown(e) {
      if (e.keyCode === ENTER_KEY) {
         return this.handleTaskListAdd();
      }
   }

   handleTaskListAdd() {
      const { onAddTaskList } = this.props;
      if (this.input.value == '') {
         return;
      } else {
         onAddTaskList({
            title: this.input.value,
         });
      }
      this.input.value = '';
   }

   renderProgressBar(value) {
      return (
         <MuiThemeProvider>
            <LinearProgress
               mode="determinate"
               value={value}
            />
         </MuiThemeProvider>
      );
   }

   renderAddField() {
      return (
         <div className="addField">
            <input
               className="inputField inputField_lg"
               type="text"
               ref={c => this.input = c}
               onKeyDown={this.handleKeyDown.bind(this)}
            />
            <button
               className="button button_lg"
               onClick={this.handleTaskListAdd.bind(this)}
            >
               Add
            </button>
         </div>
      );
   }

   renderTaskList(task) {
      return (
         <TaskList
            key={task.id}
            title={task.title}
            isTaskListActive={this.props.currentTaskListId == task.id}
            onRouteChange={this.props.onRouteChange.bind(this, task.id)}
            onDelete={this.props.onDeleteTaskList.bind(this, task.id)}
            onEdit={this.props.onEditTaskList.bind(this, task.id)}
            isTaskEdited={this.props.isTaskEdited}
            router={this.props.router}
            onTaskRelocate={this.props.onTaskRelocate.bind(this, task.id)}
         />
      );
   }

   renderTaskListContainer() {
      return (
         <MuiThemeProvider>
            <div className="TasklistsPage__ul">
               {this.props.taskList.map(task => this.renderTaskList(task))}
            </div>
         </MuiThemeProvider>
      );
   }

   renderChildren(children) {
      return (
         <div className="TaskListsPage__children">
            {children}
         </div>
      );
   }

   renderActionButtons() {
      return (
         <div className="addField">
            <input
               className="inputField inputField_lg"
               type="text"
               ref={c => this.SearchInput = c}
            />
            <button
               className="button button_lg"
               onClick={this.handleSearch.bind(this)}
            >
               Search
            </button>
         </div>
      );
   }

   renderHeader() {
      return (
         <div className="TaskListsPage__header">
            <h1 className="TaskListsPage__title">To-Do List</h1>
            <div className="TaskListsPage__action">
               {this.renderActionButtons()}
            </div>
         </div>
      );
   }

   allTaskListsRender() {
      return (
         <div className="TasklistsPage__tasks">
            <div className="TaskListsPage__action">
               {this.renderAddField()}
            </div>
            <div className="TasklistsPage__taskList">
               {this.renderTaskListContainer()}
            </div>
         </div>
      );
   }

   render() {
      const value = (100*this.props.totalTaskListsChecked)/this.props.taskList.length;
      return (
         <div className="TaskListsPage">
            {this.renderHeader()}
            {this.renderProgressBar(value)}
            {this.allTaskListsRender()}
            {this.renderChildren(this.props.children)}
         </div>
      );
   }
}

TaskListsPage.propTypes = {
   onSearch: React.PropTypes.func,
   taskList: React.PropTypes.array,
   currentTaskListId: React.PropTypes.string,
   onAddTaskList: React.PropTypes.func,
   onDeleteTaskList: React.PropTypes.func,
   onEditTaskList: React.PropTypes.func,
   onRouteChange: React.PropTypes.func,
   children: React.PropTypes.object,
   isTaskEdited: React.PropTypes.bool,
   onTaskRelocate: React.PropTypes.func,
   totalTaskListsChecked: React.PropTypes.number
}

export default withRouter(TaskListsPage);
