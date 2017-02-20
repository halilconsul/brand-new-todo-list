import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../style/globalStyle.scss';
import './TasksPageEdit.scss';

class TasksPageEdit extends React.Component {
   componentWillReceiveProps(nextProps) {
      if (nextProps.relocatedTaskListId != this.props.relocatedTaskListId) {
         this.props.onTaskRelocate({
            "newTaskListId": nextProps.relocatedTaskListId,
            "title": this.input.value,
            "checked": this.checkBox.state.switched,
            "message": this.textArea.value
         });
      }
   }

   handleChangesSubmit() {
      this.props.onTaskEdit({
         "title": this.input.value,
         "checked": this.checkBox.state.switched,
         "message": this.textArea.value
      });
   }

   handleChangesCancel() {
      this.props.handleEditorClose();
   }

   renderControllButtons() {
      return (
         <div className="TasksPageEdit__control">
            <button
               className="button button_md"
               onClick={this.handleChangesSubmit.bind(this)}
            >Save changes</button>
            <button
               className="button button_md"
               onClick={this.props.handleEditorClose}
            >Cancel</button>
         </div>
      );
   }

   renderTitle(currentTask) {
      return (
         <div className="TasksPageEdit__title">
            <input
               type="text"
               ref={c => this.input = c}
               defaultValue={currentTask ? currentTask.title : 'hello'}
               className="inputField inputField_lg"
            />
            <Checkbox
               ref={c => this.checkBox = c}
               className="TasksPageEdit__icon"
               defaultChecked={currentTask ? currentTask.checked : null}
            />
         </div>
      );
   }

   renderTaskText(currentTask) {
      return (
         <div className="TasksPageEdit__text">
            <textarea
               className="textarea"
               name="taskMessage"
               ref={c => this.textArea = c}
               defaultValue={currentTask ? currentTask.message : null}
            >
            </textarea>
         </div>
      );
   }

   render() {
      return (
         <MuiThemeProvider>
            <div className="TasksPageEdit">
               {this.renderControllButtons()}
               <div className="TasksPageEdit__container">
                  {this.renderTitle(this.props.currentTask)}
                  {this.renderTaskText(this.props.currentTask)}
               </div>
            </div>
         </MuiThemeProvider>
      );
   }
}

TasksPageEdit.propTypes = {
   currentTask: React.PropTypes.object,
   onTaskEdit: React.PropTypes.func,
   handleEditorClose: React.PropTypes.func,
   relocatedTaskListId: React.PropTypes.number,
   onTaskRelocate: React.PropTypes.func
}

export default TasksPageEdit;
