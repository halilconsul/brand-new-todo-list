import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import './ConfirmModal.scss';

class ConfirmModal extends React.Component {
   handleClose() {
      const { onClose } = this.props;
      if (onClose) {
         onClose();
      }
   }

   handleSubmit() {
      const { onSubmit } = this.props;
      if (onSubmit) {
         onSubmit();
      }
   }

   renderText() {
      return (
         <div className="ConfirmModal">
            <h4 className="ConfirmModal__title">Are you sure you want to delete the taskList?</h4>
            <p className="ConfirmModal__text">All its tasks will be deleted!</p>
         </div>
      );
   }

   renderActionButtons() {
      const style = { margin: '12px' };
      return [
         <RaisedButton
            label='No'
            onClick={this.handleClose.bind(this)}
            secondary={true}
            style={style}
         />,
         <RaisedButton
            primary={true}
            label='Yes'
            onClick={this.handleSubmit.bind(this)}
            style={style}
         />
      ];
   }

   render() {
      return (
         <MuiThemeProvider>
            <Dialog
               modal={true}
               contentStyle={{ maxWidth: 400 }}
               actions={this.renderActionButtons()}
               open={this.props.isOpen}
               onRequestClose={this.handleClose.bind(this)}
            >
               {this.renderText()}
            </Dialog>
         </MuiThemeProvider>
      );
   }
}

ConfirmModal.propTypes = {
   isOpen: React.PropTypes.bool,
   onSubmit: React.PropTypes.func,
   onClose: React.PropTypes.func,
}

export default ConfirmModal;
