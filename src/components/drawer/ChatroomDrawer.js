import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import { CreateChatroomButton } from './CreateChatroomButton';
import { ChatList } from './chatlist/ChatList';


const drawerWidth = 320;

const styles = theme => ({
  drawerPaper: {
    position: 'fixed',
    whiteSpace: 'nowrap',
    height: 'calc(100% - 64px)',
    [theme.breakpoints.down('xs')]: {
      top: 0,
      height: '100%',
      width:280,
    },
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
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render () {

    const { classes, open } = this.props;

    return (
      <div>
        <Hidden xsDown implementation="css">
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
        </Hidden>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            classes={{
              paper: classNames(classes.drawerPaper),
            }}
            open={open}
            onClose={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <List className={classes.drawerList}>
              <CreateChatroomButton />
              <ChatList />
            </List>
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

ChatroomDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatroomDrawer);