import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CommentIcon from '@material-ui/icons/Comment';
import { withStyles } from '@material-ui/core/styles';
import StarBorderRounded from '@material-ui/icons/StarBorderRounded';
import StarRounded from '@material-ui/icons/StarRounded';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    height: 'calc(100% - 64px)',
    top: 64,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});

class ChatListItem extends React.Component {

  render () {

    const { name, isFavorite } = this.props;

    const favorite = ( ( isFavorite && <StarRounded color="secondary" /> ) || <StarBorderRounded /> );

    return (
      <Link to={`/chatroom/${this.props.id}`} style={{textDecoration: 'none', color: 'black'}}>
        <ListItem 
          button
        >
          <ListItemIcon>
            <CommentIcon />
          </ListItemIcon>
            <ListItemText>
              {name} 
            </ListItemText>
          
          <ListItemSecondaryAction>
            <IconButton aria-label="favorite">
              {favorite}
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Link>
    )
  }
}

function mapStateToProps(state) {
  const { chatrooms } = state;
    return {
      chatrooms
    };
}
const connectedChatListItem = connect(mapStateToProps)(withStyles(styles)(ChatListItem));
export { connectedChatListItem as ChatListItem }; 