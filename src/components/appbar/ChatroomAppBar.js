import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';

import { AccountButton } from './AccountButton';
import { CreateChatroomButton } from '../drawer/CreateChatroomButton';
import { ChatList } from '../drawer/chatlist/ChatList';

import { usersActions } from '../../actions';

const drawerWidth = 320;

const styles = theme => ({
  toolbar: {
    height: 64,
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    height: 64,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    flexGrow: 1,
    color: 'white'
  },
    menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
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

class ChatroomAppBar extends React.Component {

  state = {
    mobileOpen: false,
  };

  leaveChatroom = () => {
    this.props.dispatch(usersActions.leaveChatroom());
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render () {

    const { classes } = this.props;

    return (
      <div>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar)}
        >
          <Toolbar disableGutters={false} className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
            <Button onClick={this.leaveChatroom}>
              <Link to="/" style={{textDecoration: 'none'}}>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.title}
                >
                Chatroom
                </Typography>
              </Link>
            </Button>
            </div>
            <AccountButton />
          </Toolbar>
        </AppBar>
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
              <ChatList onClickItem={ () => {} } />
            </List>
          </Drawer>
        </Hidden>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            classes={{
              paper: classNames(classes.drawerPaper),
            }}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <List className={classes.drawerList}>
              <CreateChatroomButton />
              <ChatList onClickItem={this.handleDrawerToggle} />
            </List>
          </Drawer>
        </Hidden>
      </div>

    )
  }
}

ChatroomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedChatroomAppBar = connect(mapStateToProps)(withStyles(styles)(ChatroomAppBar));
export { connectedChatroomAppBar as ChatroomAppBar };