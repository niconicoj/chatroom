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

const styles = theme => ({
  createButton: {
    color: '#747474'
  }
});

class LoginDialog extends React.Component {

  render () {

  	const { open, onClose, onChange, onKeyPress, onCancel, onLogin, fullScreen, error } = this.props;

    return (
	    <Dialog
	    	fullScreen={fullScreen}
			  open={open}
			  onClose={onClose}
			  aria-labelledby="form-dialog-title"
			>
			  <DialogTitle id="form-dialog-title">Sign up !</DialogTitle>
			  <DialogContent>
			    <DialogContentText>
			      If you already have an account you can log in here !
			    </DialogContentText>
			    <TextField
			    	error={error === 'no-username'}
			      margin="dense"
			      id="username"
			      label="username"
			      type="text"
			      fullWidth
			      name="username"
			      onChange={onChange}
			      onKeyPress={onKeyPress}
			      helperText={error === 'no-username' ? "Please enter a username.":""}
			    />
			    <TextField
			    	error={error === 'no-password'}
			      margin="dense"
			      id="password"
			      label="password"
			      type="password"
			      fullWidth
			      name="password"
			      onChange={onChange}
			      onKeyPress={onKeyPress}
			      helperText={error === 'no-password' ? "Please enter a password.":""}
			    />
			  </DialogContent>
			  <DialogActions>
			    <Button onClick={onCancel} color="primary">
			      Cancel
			    </Button>
			    <Button variant="contained" onClick={onLogin} color="primary">
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