import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import withMobileDialog from '@material-ui/core/withMobileDialog';

import { dialogActions } from '../../actions';

class UploadPictureDialog extends React.Component {

	state = {
		error: false,
    username: "",
    password: "",
    passwordCheck: "",
  }

	handleClose = () => {
		this.props.dispatch(dialogActions.closeDialog());
	}

  render () {

  	const { fullScreen, dialog } = this.props;
  	const open = dialog.uploadPicture;

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
			      You will be able to upload a picture to use as an avatar here !
			    </DialogContentText>
			  </DialogContent>
			  <DialogActions>
			    <Button onClick={this.handleClose} color="primary">
			      Cancel
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

UploadPictureDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

const connectedUploadPictureDialog = connect(mapStateToProps)(withMobileDialog()(UploadPictureDialog));
export { connectedUploadPictureDialog as UploadPictureDialog }; 