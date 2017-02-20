import React from 'react';
import ContentEdit from 'material-ui/svg-icons/editor/mode-edit';
import ContentDelete from 'material-ui/svg-icons/action/delete';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FileFolderOpen from 'material-ui/svg-icons/file/folder-open';
import CancelIcon from 'material-ui/svg-icons/content/clear';
import CompleteIcon from 'material-ui/svg-icons/action/done';
import ContentChangeFolder from 'material-ui/svg-icons/content/reply-all';
import '../style/globalStyle.scss';
import './TaskList.scss';

const ENTER_KEY = 13;
const ESC_KEY = 27;

class TaskList extends React.Component {
   constructor() {
      super();
      this.state = { isEditingTaskList: false }
   }

   handleDeleteClick(e) {
      this.props.onDelete();
   }

   handleEditClick(taskId, e) {
      this.setState({  isEditingTaskList: true }, () => this.input.focus());
   }

   handleKeyDown(e) {
      if (e.keyCode === ENTER_KEY) {
         return this.submitTitleEdited();
      }
      if (e.keyCode === ESC_KEY) {
         this.closeEditing();
      }
   }

   submitTitleEdited() {
      this.props.onEdit({
         name: this.input.value
      });
      this.closeEditing();
   }

   closeEditing() {
      this.setState({ isEditingTaskList: false });
   }

   handleRouteChange() {
      // prevent from clicking while taskEditing
      if (this.props.isTaskEdited) {
         return false;
      } else {
         // prevent from clicking when taskList is active
         if (this.props.isTaskListActive) {
            return false;
         } else {
            // add current taskListId to the routing
            this.props.onRouteChange();
         }
      }
   }

   renderTaskListFolder(isTaskListActive) {
      if (isTaskListActive) {
         return (<FileFolderOpen className="icon" />);
      } else {
         return (<FileFolder className="icon" /> );
      }
   }

   isTaskListEditing(isEditingTaskList) {
      if (isEditingTaskList) {
         return (
            <input
               type="text"
               ref={c => this.input = c}
               defaultValue={this.props.title}
               className="TaskList__link_edit"
               onKeyDown={this.handleKeyDown.bind(this)}
            />
         );
      } else {
         return (
            <p className="TaskList__link">
               {this.props.title}
            </p>
         );
      }
   }

   showEditingButtons() {
      return (
         <div>
            <CompleteIcon
               className="icon"
               onClick={this.submitTitleEdited.bind(this)}
            />
            <CancelIcon
               className="icon"
               onClick={this.closeEditing.bind(this)}
            />
         </div>
      );
   }

   showDefaultButtons() {
      return (
         <div>
            <ContentEdit
               className="icon"
               onClick={this.handleEditClick.bind(this)}
            />
            <ContentDelete
               className="icon"
               onClick={this.handleDeleteClick.bind(this)}
            />
         </div>
      );
   }

   isTaskListInputActive() {
      if (this.state.isEditingTaskList) {
         return this.showEditingButtons();
      } else {
         return this.showDefaultButtons();
      }
   }

   showChangeFolderAction() {
      return (
         <div className="TaskList__replace">
            <ContentChangeFolder
               className="TaskList__icon icon"
               onClick={this.props.onTaskRelocate}
            />
         </div>
      );
   }

   showEditTaskListACtion() {
      return (
         <div className="TaskList__edit">
            {this.isTaskListInputActive()}
         </div>
      );
   }

   showControlButtons(isTaskEdited) {
      if (isTaskEdited) {
         return this.showChangeFolderAction();
      } else {
         return this.showEditTaskListACtion();
      }
   }

   render() {
      const isActive = this.props.isTaskListActive ? 'TaskList TaskList__active' : 'TaskList';
      const blurStyle = this.props.isTaskEdited ? 'TaskList__list_blur TaskList__list' : 'TaskList__list';
      return (
         <div className={isActive}>
            <li
               className={blurStyle}
               onClick={this.handleRouteChange.bind(this)}
            >
               {this.renderTaskListFolder(this.props.isTaskListActive)}
               {this.isTaskListEditing(this.state.isEditingTaskList)}
            </li>
            {this.showControlButtons(this.props.isTaskEdited)}
         </div>
      );
   }
}

TaskList.propTypes = {
   isTaskListActive: React.PropTypes.bool,
   isTaskEdited: React.PropTypes.bool,
   onTaskRelocate: React.PropTypes.func,
   title: React.PropTypes.string,
   onEdit: React.PropTypes.func,
   onDelete: React.PropTypes.func,
   onRouteChange: React.PropTypes.func,
   router: React.PropTypes.object
}
export default TaskList;
