import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import { MessageField } from '../messagefield/MessageField';
import { MessageFeed } from '../messagefeed/MessageFeed';

import { usersActions, chatroomsActions } from '../../actions';

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

  componentDidMount() {
    this.props.dispatch(usersActions.enterChatroom(this.props.id));
    this.props.dispatch(chatroomsActions.getChatroomMessages(this.props.id));
  }

  componentDidUpdate() {
    this.props.dispatch(usersActions.enterChatroom(this.props.id));
    this.props.dispatch(chatroomsActions.getChatroomMessages(this.props.id));
  }
  
  render () {
    const { classes } = this.props;

    return (
      <main className={classes.content}>
        <MessageFeed chatroomId={this.props.id}/>
        <MessageField />
      </main>
    )
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

Lounge.propTypes = {
  classes: PropTypes.object.isRequired,
};

const connectedLounge = connect(mapStateToProps)(withStyles(styles)(Lounge));
export { connectedLounge as Lounge };

