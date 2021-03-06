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

class CreateAccountDialog extends React.Component {

	state = {
    error: {
    	checkPassed: true
    },
    username: "",
    password: "",
    passwordCheck: "",
  }

	handleCreate = () => {
    if ( this.verifyInput() ) {
      this.props.dispatch(usersActions.register(this.state.username, this.state.password));
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
			noPasswordCheck: !Boolean(this.state.passwordCheck),
			checkPassed: ( this.state.password === this.state.passwordCheck )
		};
    this.setState({...this.state, error});

    return ( !error.noUsername && !error.noPassword && !error.noPasswordCheck && error.checkPassed );
  }

  handleKeyPress = (e) => {
    if ( ( e.key === 'Enter' ) && ( this.verifyInput() ) ) {
      this.handleCreate();
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
  	const {  noUsername, noPassword, noPasswordCheck, checkPassed } = this.state.error;

  	const open = dialog.createAccount;

    return (
			<Dialog
				fullScreen={fullScreen}
				  open={Boolean(open)}
				  onClose={this.handleClose}
				  aria-labelledby="form-dialog-title"
				>
			  <DialogTitle id="form-dialog-title">Sign up !</DialogTitle>
			  <DialogContent>
			    <DialogContentText>
			      Bored of not having a cool username and avatar ? sign up and you can chose a pseudo and an avatar for yourself !
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
			      onKeyPress={this.onKeyPress}
			      helperText={ Boolean(noUsername) ? "Please enter a username.":""}
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
			      onKeyPress={this.onKeyPress}
			      helperText={ noPassword ? "Please enter a password.":""}
			    />
			    <TextField
			    	error={(( noPasswordCheck ) || ( !checkPassed ))}
			    	value={this.state.passwordCheck}
			      margin="dense"
			      id="passwordCheck"
			      label="confirm your password"
			      type="password"
			      fullWidth
			      name="passwordCheck"
			      onChange={this.handleChange}
			      onKeyPress={this.onKeyPress}
			      helperText={ noPasswordCheck ? "Please validate your password.":
			      	!checkPassed ? "Enter the same password as above here.":""
			  		}
			    />
			  </DialogContent>
			  <DialogActions>
			    <Button onClick={this.handleClose} color="primary">
			      Cancel
			    </Button>
			    <Button variant="contained" onClick={this.handleCreate} color="primary">
			      Create !
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

CreateAccountDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

const connectedCreateAccountDialog = connect(mapStateToProps)(withMobileDialog()(CreateAccountDialog));
export { connectedCreateAccountDialog as CreateAccountDialog }; 