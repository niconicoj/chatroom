import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import CreateChatroomButton from './CreateChatroomButton';
import ChatList from './chatlist/ChatList';


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
        <Divider />
        <CreateChatroomButton />
        <Divider />
        <ChatList />
      </Drawer>
    );
  }
}

ChatroomDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatroomDrawer);