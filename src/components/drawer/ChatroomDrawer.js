import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { CreateChatroomButton } from './CreateChatroomButton';
import { ChatList } from './chatlist/ChatList';


const drawerWidth = 340;

const styles = theme => ({
  drawerPaper: {
    position: 'fixed',
    whiteSpace: 'nowrap',
    height: 'calc(100% - 64px)',
    top: 64,
    width: drawerWidth,
  },
  drawerList: {
    padding: 0,
    backgroundColor: theme.palette.background.paper
  }
});

class ChatroomDrawer extends React.Component {

  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render () {

    const { classes } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaper),
        }}
        open={true}
      >
        <List className={classes.drawerList}>
          <CreateChatroomButton />
          <ChatList />
        </List>
      </Drawer>
    );
  }
}

ChatroomDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatroomDrawer);