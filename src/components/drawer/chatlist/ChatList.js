import React from 'react';
import { connect } from 'react-redux';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ChatListItem from './ChatListItem';

import { chatroomsActions } from '../../../actions';


class ChatList extends React.Component {

  componentDidMount() {
    this.props.dispatch(chatroomsActions.getAll());
  }

  render () {

  	const { chatrooms } = this.props;

    return (
	      <div>
	        	{chatrooms && this.props.chatrooms.map((chatroom) =>
								<ChatListItem key={chatroom._id} name={chatroom.name} isFavorite={false} />
		  				)}
	      </div>
    )

  }
}

function mapStateToProps(state) {
    const { chatrooms } = state.chatrooms;

    return {
      chatrooms
    };
}



const connectedChatList = connect(mapStateToProps)(ChatList);
export { connectedChatList as ChatList };