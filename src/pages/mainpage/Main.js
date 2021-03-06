import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ChatroomAppBar } from '../../components/appbar/ChatroomAppBar';
import { Lounge } from '../../components/lounge/Lounge';
import { Home } from '../../components/home/Home';
import { Account } from '../../components/account/Account';
import { FeedbackSnackbar } from '../../components/feedbacksnackbar/FeedbackSnackbar';
import Dialogs from '../../components/dialogs/Dialogs';

import { usersActions } from '../../actions';

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
        loading: true,
    };
  }

  componentDidMount() {
    if(!this.props.user.hasOwnProperty('_id')) {
      this.props.dispatch(usersActions.registerAsGuest());
    } else {
      this.props.dispatch(usersActions.verifyUser(this.props.user._id));
    }
    this.setState({loading: false});
  }

  render() {

    const { classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <ChatroomAppBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/myAccount" component={Account} />
          <Route path="/chatroom/:id" render={
            ({match}) => (
              <Lounge id={match.params.id} /> 
            )
          } />
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.loading}
          >
            <CircularProgress className={classes.progress} disableShrink size={200} color="secondary"/>
          </Modal>
          <FeedbackSnackbar />
          <Dialogs />
        </div>
      </Router>
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