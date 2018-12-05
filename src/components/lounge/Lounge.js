import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import MessageField from '../messagefield/MessageField';
import { MessageFeed } from '../messagefeed/MessageFeed';
import Message from '../message/Message';

const styles = theme => ({
  content: {
    position: 'absolute',
    height: '100vh',
    left: 340,
    right: 0,
    top: 0,
    bottom: 0,
    padding: 0,
    paddingTop: 64,
    paddingBottom: 92,
  },
});

class Lounge extends React.Component {
  
  render () {
    const { classes, user } = this.props;

    return (
      <main className={classes.content}>
        <MessageFeed chatroomId={user.currentChatroom}/>
        <MessageField />
      </main>
    )
  }
}

function mapStateToProps(state) {
  const { alert, user } = state;
  return {
    alert,
    user
  };
}

Lounge.propTypes = {
  classes: PropTypes.object.isRequired,
};

const connectedLounge = connect(mapStateToProps)(withStyles(styles)(Lounge));
export { connectedLounge as Lounge };

