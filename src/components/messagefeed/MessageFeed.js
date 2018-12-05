import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';

import Message from '../message/Message';

import { chatroomsActions } from '../../actions';

const styles = theme => ({
  appBarSpacer: {
    height: 1,
    display: 'block',
  },
  chat: {
    marginBottom: 92,
    boxShadow: 'none'
  }
});

class MessageFeed extends React.Component {

  componentDidMount() {
  	console.log(this.props.chatroomId);
    this.props.dispatch(chatroomsActions.getChatroomMessages(this.props.chatroomId));
  }
  
  render () {
    const { classes, messages, user } = this.props;

    const messageList = messages && messages.map((message) => {
    						return <Message key={message._id} text={message.message} sent={message.user == user.name}/>
							});

    return (
    	<Paper className={classes.chat}>
			  <div className={classes.appBarSpacer}/>
			  {messageList}
			</Paper>
    )
  }
}

function mapStateToProps(state) {
  const { alert, user } = state;
  const { messages } = state.chatrooms;
  return {
    alert,
    user,
    messages
  };
}

MessageFeed.propTypes = {
  classes: PropTypes.object.isRequired,
};

const connectedMessageFeed = connect(mapStateToProps)(withStyles(styles)(MessageFeed));
export { connectedMessageFeed as MessageFeed };