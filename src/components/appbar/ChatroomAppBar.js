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
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { usersActions } from '../../actions';

const styles = theme => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
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
});

class ChatroomAppBar extends React.Component {

  leaveChatroom = () => {
    this.props.dispatch(usersActions.leaveChatroom());
  }

  render () {

    const { classes } = this.props;

    return (
      <AppBar
        position="fixed"
        className={classNames(classes.appBar)}
      >
        <Toolbar disableGutters={false} className={classes.toolbar}>
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
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
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