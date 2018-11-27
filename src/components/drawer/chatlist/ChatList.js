import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ChatListItem from './ChatListItem';


class ChatList extends React.Component {

  render () {
    return (
	    <List>
	      <div>
	        <ListSubheader inset>Chatrooms</ListSubheader>
	        <ChatListItem name="chat 1" isFavorite={false} />
	        <ChatListItem name="chat 2" isFavorite={true} />
	      </div>
	    </List>
    )
  }
}

export default ChatList;