import React from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';

import { FeedbackSnackbarWrapper } from './FeedbackSnackbarWrapper';

import { alertActions } from '../../actions';

class FeedbackSnackbar extends React.Component {

  state = {
    open: false
  };

  handleClearAlert = () => {
    this.props.dispatch(alertActions.hide());
  };

  render () {

    const { alert } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={ alert.show && true }
        autoHideDuration={6000}
        onClose={this.handleClearAlert}
      >
        {alert.type &&
          <FeedbackSnackbarWrapper
            onClose={this.handleClearAlert}
            variant={alert.type}
            message={alert.message}
          />
        }
      </Snackbar>
    )
  }
}

function mapStateToProps(state) {
    const { alert } = state;

    return {
      alert
    };
}



const connectedFeedbackSnackbar = connect(mapStateToProps)(FeedbackSnackbar);
export { connectedFeedbackSnackbar as FeedbackSnackbar };