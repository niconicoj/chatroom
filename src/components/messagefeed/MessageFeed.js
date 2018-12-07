import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';

import Message from '../message/Message';

const styles = theme => ({
  appBarSpacer: {
    height: 1,
    display: 'block',
  },
  chat: {
    marginBottom: 132,
    boxShadow: 'none'
  }
});

class MessageFeed extends React.Component {

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
  
  render () {

    const { classes, messages, user } = this.props;

    const messageList = messages && messages.map((message) => {
    						return <Message key={message._id} text={message.message} sent={message.user === user.name} time={message.created_at} sender={message.user}/>
							});

    return (
    	<Paper className={classes.chat}>
			  <div className={classes.appBarSpacer}/>
			  {messageList}
         <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
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