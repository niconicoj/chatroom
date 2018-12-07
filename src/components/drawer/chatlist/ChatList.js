import React from 'react';
import { connect } from 'react-redux';
import { ChatListItem } from './ChatListItem';

import { chatroomsActions } from '../../../actions';

class ChatList extends React.Component {

  componentDidMount() {
    this.props.dispatch(chatroomsActions.getAll());
  }

  render () {

  	const { chatrooms, chatroomFilter } = this.props;

    const filteredChatroom = chatrooms && this.props.chatrooms.filter((chatroom) => {
                if ((typeof chatroomFilter) === 'undefined') return true;
                return chatroom.name.includes(chatroomFilter);
              });

    console.log(filteredChatroom);

    return (
      <div>
        {chatrooms && filteredChatroom.map((chatroom) =>
          <ChatListItem id={chatroom._id} key={chatroom._id} name={chatroom.name} isFavorite={false} />
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { chatrooms, chatroomFilter } = state.chatrooms;
  return {
    chatrooms,
    chatroomFilter
  };
}

const connectedChatList = connect(mapStateToProps)(ChatList);
export { connectedChatList as ChatList };