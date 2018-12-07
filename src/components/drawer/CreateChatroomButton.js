import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircle from '@material-ui/icons/AddCircle';
import Divider from '@material-ui/core/Divider';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import CreateChatroomDialog from './CreateChatroomDialog';
import { chatroomsActions } from '../../actions';

const styles = theme => ({
  stickyButton: {
    padding: 0,
    backgroundColor: 'inherit'
  },
  stickyHeader: {
    color: '#747474'
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

  handleFilter = (e) => {
    const { name, value } = e.target;
    this.props.dispatch(chatroomsActions.filterChatrooms(value));
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
          <ListItem component="div">
            <TextField
              id="outlined-adornment-password"
              variant="outlined"
              type='text'
              label="Search a chatroom"
              onChange={this.handleFilter}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                    >
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </ListItem>
          <ListItem component="div">
          <Typography variant="h6" className={classes.stickyHeader}>
            Chatrooms
          </Typography>
          </ListItem>
          <Divider />
          <CreateChatroomDialog
            open={this.state.open}
            onClose={this.handleClose}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            onCancel={this.handleClose}
            onCreate={this.handleCreate}
          />
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