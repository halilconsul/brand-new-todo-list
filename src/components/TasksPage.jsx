import React from 'react';
import FlipMove from 'react-flip-move';
import Task from './Task.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import '../style/globalStyle.scss';
import './TasksPage.scss';

const ENTER_KEY = 13;

class TasksPage extends React.Component {
   handleKeyDown(e) {
      if (e.keyCode === ENTER_KEY) {
         return this.handleTaskAdd();
      }
   }

   handleTaskAdd() {
      if (this.input.value =='') {
         return;
      } else {
         this.props.onAddTask({
            title: this.input.value
         });
      }
      return this.clearInput();
   }

   clearInput() {
      this.input.value = '';
   }

   returnTask(task) {
      return (
         <Task
            key={task.id}
            title={task.title}
            checked={task.checked}
            onStatusChange={this.props.onTaskStatusChange.bind(null, task.id)}
            changeRoute={this.props.handleRouteChange.bind(null, task.id)}
            onTaskDelete={this.props.onTaskDelete.bind(this, task.id)}
         />
      );
   }

   renderSearchedTasks() {
      return (
         <div className="TasksPage__tasks">
            <FlipMove>
               {this.props.searchedTasks.map(task => this.returnTask(task))}
            </FlipMove>
         </div>
      )
   }

   renderCurrentTasks() {
      if (this.props.currentTaskList.length != 0) {
         return (
            <div className="TasksPage__tasks">
               <FlipMove>
                  {this.props.currentTaskList.map(task => this.returnTask(task))}
               </FlipMove>
            </div>
         )
      } else {
         return (
            <div className="TasksPage__tasks"></div>
         );
      }
   }

   toggleSearchedTask(searchedTasks) {
      if (searchedTasks) {
         return this.renderSearchedTasks();
      } else {
         return this.renderCurrentTasks();
      }
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
               onClick={this.handleTaskAdd.bind(this)}
            >
               Add
            </button>
         </div>
      );
   }

   renderRedoUndo() {
      return (
         <MuiThemeProvider>
            <div className="TasksPage__history">
               <NavigateBefore
                  className="TasksPage__icon icon"
                  onClick={this.props.handleTaskUndo}
               />
               <NavigateNext
                  className="TasksPage__icon icon"
                  onClick={this.props.handleTaskRedo}
               />
            </div>
         </MuiThemeProvider>
      );
   }

   renderActions() {
      return (
         <div className="TasksPage__action">
            {this.renderRedoUndo()}
            {this.renderAddField()}
         </div>
      )
   }

   isTaskEdited(currentTaskEdit) {
      if (currentTaskEdit) {
         return (
            <div className="TasksPage__editedTask">
               {this.props.children}
            </div>
         );
      } else {
         return (
            <div className="TasksPage__activeTasks">
               {this.renderActions()}
               {this.toggleSearchedTask(this.props.searchedTasks)}
            </div>
         );
      }
   }

   render() {
      return (
         <div className="TasksPage">
            {this.isTaskEdited(this.props.currentTaskEdit)}
         </div>
      );
   }
}

TasksPage.propTypes = {
   currentTaskList: React.PropTypes.array,
   onAddTask: React.PropTypes.func,
   onTaskStatusChange: React.PropTypes.func,
   onTaskDelete: React.PropTypes.func,
   handleRouteChange: React.PropTypes.func,
   children: React.PropTypes.object,
   currentTaskEdit: React.PropTypes.bool,
   handleTaskUndo: React.PropTypes.func,
   handleTaskRedo: React.PropTypes.func,
   searchedTasks: React.PropTypes.array
}

export default TasksPage;
