import React from 'react';
import PropTypes from 'prop-types';
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

class CreateAccountDialog extends React.Component {

  render () {

  	const { open, onClose, onChange, onKeyPress, onCancel, onCreate, fullScreen, error } = this.props;

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
			      Bored of not having a cool username and avatar ? sign up and you can chose a pseudo and an avatar for yourself !
			    </DialogContentText>
			    <TextField
			    	error={error === 'no-username'}
			      autoFocus
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
			      autoFocus
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
			    <TextField
			    	error={( error === "no-password-check" ) || ( error === "check-failed" )}
			      autoFocus
			      margin="dense"
			      id="passwordCheck"
			      label="confirm your password"
			      type="password"
			      fullWidth
			      name="passwordCheck"
			      onChange={onChange}
			      onKeyPress={onKeyPress}
			      helperText={error === 'no-password-check' ? "Please verify your password.":
			      	error === 'check-failed' ? "Enter the same password as above here.":""
			  }
			    />
			  </DialogContent>
			  <DialogActions>
			    <Button onClick={onCancel} color="primary">
			      Cancel
			    </Button>
			    <Button variant="contained" onClick={onCreate} color="primary">
			      Create !
			    </Button>
			  </DialogActions>
			</Dialog>
    )
  }
}

CreateAccountDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(CreateAccountDialog);