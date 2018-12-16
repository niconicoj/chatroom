import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import { dialogActions, usersActions } from '../../actions';

class LoginDialog extends React.Component {

	state = {
		error: false,
    username: "",
    password: "",
    passwordCheck: "",
  }

	handleLogin = () => {
    if ( this.verifyInput() ) {
      this.props.dispatch(usersActions.login(this.state.username, this.state.password));
      this.handleClose();
    }
  }

	handleClose = () => {
		this.props.dispatch(dialogActions.closeDialog());
	}

	verifyInput = () => {
		const error = {
			noUsername: !Boolean(this.state.username),
			noPassword: !Boolean(this.state.password),
		};
    this.setState({...this.state, error});

    return ( !error.noUsername && !error.noPassword );
  }

  handleKeyPress = (e) => {
    if ( ( e.key === 'Enter' ) && ( this.verifyInput() ) ) {
      this.handleLogin();
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ 
      [name]: value,
      error: {
	    	checkPassed: true
	    }
    });
  }

  render () {

  	const { fullScreen, dialog } = this.props;
  	const open = dialog.login;
  	const {  noUsername, noPassword } = this.state.error;

    return (
	    <Dialog
	    	fullScreen={fullScreen}
			  open={Boolean(open)}
			  onClose={this.handleClose}
			  aria-labelledby="form-dialog-title"
			>
			  <DialogTitle id="form-dialog-title">Log in !</DialogTitle>
			  <DialogContent>
			    <DialogContentText>
			      If you already have an account you can log in here !
			    </DialogContentText>
			    <TextField
			    	error={noUsername}
			    	value={this.state.username}
			      margin="dense"
			      id="username"
			      label="username"
			      type="text"
			      fullWidth
			      name="username"
			      onChange={this.handleChange}
			      onKeyPress={this.handleKeyPress}
			      helperText={noUsername ? "Please enter your username.":""}
			    />
			    <TextField
			    	error={noPassword}
			    	value={this.state.password}
			      margin="dense"
			      id="password"
			      label="password"
			      type="password"
			      fullWidth
			      name="password"
			      onChange={this.handleChange}
			      onKeyPress={this.handleKeyPress}
			      helperText={noPassword ? "Please enter your password.":""}
			    />
			  </DialogContent>
			  <DialogActions>
			    <Button onClick={this.handleClose} color="primary">
			      Cancel
			    </Button>
			    <Button variant="contained" onClick={this.handleLogin} color="primary">
			      Log in !
			    </Button>
			  </DialogActions>
			</Dialog>
    )
  }
}

function mapStateToProps(state) {
  const { dialog, user } = state;
    return {
      dialog,
      user
    };
}

LoginDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

const connectedLoginDialog = connect(mapStateToProps)(withMobileDialog()(LoginDialog));
export { connectedLoginDialog as LoginDialog }; 