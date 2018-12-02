import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';

import ChatroomDrawer from '../../components/drawer/ChatroomDrawer';
import ChatroomAppBar from '../../components/appbar/ChatroomAppBar';
import Lounge from '../../components/lounge/Lounge';
import Home from '../../components/home/Home';
import { FeedbackSnackbar } from '../../components/feedbacksnackbar/FeedbackSnackbar';

const styles = theme => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  progress: {
    position: 'absolute',
    margin: 'auto',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
});

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        loading: false,
    };
  }

  render() {

    const { classes, user } = this.props;

    const page = ( ( user.currentChatroom && <Lounge id={user.currentChatroom} /> ) || ( <Home /> ) )

    return (
      <div className={classes.root}>
        <CssBaseline />
        <ChatroomAppBar />
        <ChatroomDrawer />
        {page}
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.loading}
          onClose={this.handleClose}
        >
          <CircularProgress className={classes.progress} size={200} color="secondary"/>
        </Modal>
        <FeedbackSnackbar />
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const { alert, user } = state;
    return {
        alert,
        user
    };
}

const connectedMain = connect(mapStateToProps)(withStyles(styles)(Main));
export { connectedMain as Main };