import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class CreateChatroomDialog extends React.Component {

  render () {

  	const { open, onClose, onChange, onKeyPress, onCancel, onCreate } = this.props;

    return (
	    <Dialog
			  open={open}
			  onClose={onClose}
			  aria-labelledby="form-dialog-title"
			>
			  <DialogTitle id="form-dialog-title">Create a new Chatroom !</DialogTitle>
			  <DialogContent>
			    <DialogContentText>
			      After that you will only need to program a few conversation bots to trick yourself into thinking you have friends.
			    </DialogContentText>
			    <TextField
			      autoFocus
			      margin="dense"
			      id="name"
			      label="Chatroom name"
			      type="email"
			      fullWidth
			      name="chatroomName"
			      onChange={onChange}
			      onKeyPress={onKeyPress}
			    />
			  </DialogContent>
			  <DialogActions>
			    <Button onClick={onCancel} color="primary">
			      Cancel
			    </Button>
			    <Button onClick={onCreate} color="primary">
			      Create !
			    </Button>
			  </DialogActions>
			</Dialog>
    )
  }
}

export default CreateChatroomDialog;