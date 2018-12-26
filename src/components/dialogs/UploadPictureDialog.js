import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import withMobileDialog from '@material-ui/core/withMobileDialog';

import { dialogActions } from '../../actions';
import { Grid } from '@material-ui/core';

const styles = theme => ({
  input: {
    display: 'none',
  }
});

class UploadPictureDialog extends React.Component {

	state = {
		error: false,
    image: false
  }

	handleClose = () => {
		this.props.dispatch(dialogActions.closeDialog());
	}

  render () {

  	const { classes, fullScreen, dialog, image } = this.props;
  	const open = dialog.uploadPicture;

    return (
	    <Dialog
	    	fullScreen={fullScreen}
			  open={Boolean(open)}
			  onClose={this.handleClose}
			  aria-labelledby="form-dialog-title"
			>
			  <DialogTitle id="form-dialog-title">Upload a picture !</DialogTitle>
			  <DialogContent>
					<Grid
						container
						direction="column"
						justify="center"
						alignItems="center"
					>
						<DialogContentText>
							You will be able to upload a picture to use as an avatar here !
						</DialogContentText>
						<input
							accept="image/*"
							className={classes.input}
							id="contained-button-file"
							multiple
							type="file"
						/>
						<label htmlFor="contained-button-file">
							<Button variant="contained" component="span">
								Upload
							</Button>
						</label>
					</Grid>
			  </DialogContent>
			  <DialogActions>
			    <Button onClick={this.handleClose}>
			      Cancel
			    </Button>
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
	classes: PropTypes.object.isRequired,
};

const connectedUploadPictureDialog = connect(mapStateToProps)(withStyles(styles)(withMobileDialog()(UploadPictureDialog)));
export { connectedUploadPictureDialog as UploadPictureDialog }; 