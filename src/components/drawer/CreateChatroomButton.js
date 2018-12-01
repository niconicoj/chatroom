import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
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
import Divider from '@material-ui/core/Divider';

import { chatroomsActions } from '../../actions';

const styles = theme => ({
  stickyButton: {
    padding: 0,
    backgroundColor: 'inherit'
  },
  stickyHeader: {
    paddingTop: 0,
    paddingBottom: 0
  }
});



class CreateChatroomButton extends React.Component {

  state = {
    open: false,
    chatroomName: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleCreate = () => {
    this.props.dispatch(chatroomsActions.create(this.state.chatroomName));
    this.handleClose();
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  render () {

    const { classes } = this.props;

    return (
        <ListSubheader className={classes.stickyButton}>
          <ListItem 
            button
            onClick={this.handleClickOpen}
          >
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText primary="Create Chatroom" />
          </ListItem>
          <Divider />
          <ListItem inset className={classes.stickyHeader}>Chatrooms</ListItem>
          <Divider />
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
                name="chatroomName"
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleCreate} color="primary">
                Create !
              </Button>
            </DialogActions>
          </Dialog>
        </ListSubheader>
    )
  }
}

function mapStateToProps(state) {
  const { chatrooms } = state;
    return {
      chatrooms
    };
}

CreateChatroomButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const connectedCreateChatroomButton = connect(mapStateToProps)(withStyles(styles)(CreateChatroomButton));
export { connectedCreateChatroomButton as CreateChatroomButton }; 