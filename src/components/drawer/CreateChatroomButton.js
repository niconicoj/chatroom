import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircle from '@material-ui/icons/AddCircle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class CreateChatroomButton extends React.Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render () {
    return (
      <div>
        <ListItem 
          button
          onClick={this.handleClickOpen}
        >
          <ListItemIcon>
            <AddCircle />
          </ListItemIcon>
          <ListItemText primary="Create Chatroom" />
        </ListItem>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
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
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Create !
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}


export default CreateChatroomButton;