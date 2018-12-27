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

import { dialogActions, usersActions } from '../../actions';
import { Grid } from '@material-ui/core';

const styles = theme => ({
  input: {
		display: 'none',
	},
	image: {
		marginTop: 20,
		maxHeight: 240,
		maxWidth: 240
	},
	button: {
		marginTop: 20
	}
});

class UploadPictureDialog extends React.Component {

	state = {
		error: false,
		image: false,
		fileURL: null,
		file: null
  }

	handleClose = () => {
		this.props.dispatch(dialogActions.closeDialog());
	}

	readFile = (event) => {
			this.setState({
				fileURL: URL.createObjectURL(event.target.files[0]),
				file: event.target.files[0],
			});
			console.log(event.target.files);
	}

	handleUpload = () => {
		this.props.dispatch(usersActions.uploadAvatar(this.props.user._id, this.state.file, this.props.user.api_token));
		this.handleClose();
	}

  render () {

  	const { classes, fullScreen, dialog } = this.props;
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
							You can browse your folders for a picture to use as an avatar and then upload it here !
						</DialogContentText>
						<input
							accept="image/*"
							className={classes.input}
							id="contained-button-file"
							multiple
							type="file"
							onChange={(event)=> { 
								this.readFile(event) 
							}}
						/>
						<label htmlFor="contained-button-file">
							<Button variant="contained" component="span" className={classes.button}>
								Browse
							</Button>
						</label>
						<img src={this.state.fileURL ? this.state.fileURL : "https://dummyimage.com/240x240/c2c2c2/dedede&text=your+image+here"} className={classes.image}/>
					</Grid>
			  </DialogContent>
			  <DialogActions>
			    <Button onClick={this.handleClose}>
			      Cancel
			    </Button>
					<Button onClick={this.handleUpload} color="primary">
			      upload
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