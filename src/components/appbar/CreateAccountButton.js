import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import CreateAccountDialog from './CreateAccountDialog';
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



class CreateAccountButton extends React.Component {

  state = {
    open: false,
    error: false,
    username: "",
    password: "",
    passwordCheck: "",
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ 
      [name]: value,
      error: false 
    });
  }

  handleCreate = () => {
    if ( this.verifyInput() ) {
      //this.props.dispatch(chatroomsActions.create(this.state.chatroomName));
      this.handleClose();
    }
  }

  handleKeyPress = (e) => {
    if ( ( e.key === 'Enter' ) && ( this.verifyInput() ) ) {
      this.handleCreate();
    }
  }

  verifyInput = () => {
    if ( !this.state.username ) {
      this.setState({error: "no-username"});
      return false;
    }
    if ( !this.state.password ) {
      this.setState({error: "no-password"});
      return false;
    }
    if ( !this.state.passwordCheck ) {
      this.setState({error: "no-password-check"});
      return false;
    }
    if ( this.state.password !== this.state.passwordCheck ) {
      this.setState({error: "check-failed"});
      return false;
    }
    return true;
  }

  render () {

    const { classes } = this.props;

    return (
      <div>
        <IconButton 
          color="inherit"
          onClick={this.handleClickOpen}
        >
          <AccountCircle style={{ fontSize: 30 }} />
        </IconButton>
        <CreateAccountDialog
          error={this.state.error}
          open={this.state.open}
          onClose={this.handleClose}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          onCancel={this.handleClose}
          onCreate={this.handleCreate}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
    return {
      user
    };
}

CreateAccountButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const connectedCreateAccountButton = connect(mapStateToProps)(withStyles(styles)(CreateAccountButton));
export { connectedCreateAccountButton as CreateAccountButton }; 