import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContentEdit from 'material-ui/svg-icons/editor/mode-edit';
import ContentDelete from 'material-ui/svg-icons/action/delete';
import '../style/globalStyle.scss';
import './Task.scss';

class Task extends React.Component {
   handleCheck() {
      this.props.onStatusChange({
         isChecked: !this.props.checked
      });
   }

   renderCheckBox() {
      return (
         <div className="Task__action">
            <Checkbox
               checked={this.props.checked}
               onCheck={this.handleCheck.bind(this)}
            />
         </div>
      );
   }

   renderTitle() {
      return (
         <p className="Task__title">
            {this.props.title}
         </p>
      );
   }

   renderAtionButtons() {
      return (
         <div className="Task__action">
            <ContentEdit
               className="icon"
               onClick={this.props.changeRoute}
            />
            <ContentDelete
               className="icon"
               onClick={this.props.onTaskDelete}
            />
         </div>
      )
   }

   render() {
      return (
         <MuiThemeProvider>
            <div className="Task">
               {this.renderCheckBox()}
               {this.renderTitle()}
               {this.renderAtionButtons()}
            </div>
         </MuiThemeProvider>
      );
   }
}

Task.propTypes = {
   title: React.PropTypes.string,
   checked: React.PropTypes.bool,
   onStatusChange: React.PropTypes.func,
   onTaskDelete: React.PropTypes.func,
   changeRoute: React.PropTypes.func
}
export default Task;
