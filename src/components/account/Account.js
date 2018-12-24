import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { TextField, Button, Grid, Card } from '@material-ui/core';

import { usersActions } from '../../actions';

const styles = theme => ({
  appBarSpacer: {
    height: 1,
    display: 'block',
  },
  saveButton: {
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
    },
  },
  avatar: {
    marginTop: 20
  },
  content: {
    position: 'absolute',
    height: '100vh',
    [theme.breakpoints.down('xs')]: {
      left: 0,
    },
    left: 320,
    right: 0,
    top: 0,
    bottom: 0,
    padding: 0,
    paddingTop: 64,
    paddingBottom: 92,
  },
  text: {
    padding: 20,
  },
  textField: {
    marginLeft: 10
  },
  list: {
    marginLeft: 20,
    marginRight: 20
  }
});

class Account extends React.Component {

  state = {
    name: this.props.user.name,
    avatar: this.props.user.avatar ? this.props.user.avatar : `https://www.gravatar.com/avatar/${this.props.user._id}?d=retro`
  }

  handleKeyPress = (e) => {
    if ( ( e.key === 'Enter' ) && ( this.verifyInput() ) ) {
      this.handleLogin();
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ 
      [name]: value,
      error: {
	    	checkPassed: true
	    }
    });
  }

  handleSaveAvatar = () => {
    this.props.dispatch(usersActions.changeAvatar(this.props.user._id, this.state.avatar, this.props.user.api_token));
  }
  
  render () {
    const { classes, user } = this.props;

    if (user.currentChatroom) {
      return <Redirect to={{ pathname: "/chatroom", search: `?id=${user.currentChatroom}` }}/>;
    }

    const avatar = user.avatar ? user.avatar : `https://www.gravatar.com/avatar/${user._id}?d=retro`;

    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <Typography className={classes.text} variant="h4">
          Your account
        </Typography>
        <Card className={classes.list}>
          <List component="nav">
            <ListItem>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={10}>
                <Typography>
                  Username :
                </Typography>
                <TextField
                  value={user.name}
                  fullWidth
                  className={classes.textField}
                >
                </TextField>
                </Grid>
                <Grid item>
                  <Button variant="contained" className={classes.saveButton}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item  xs={10}>
                <Typography>
                  Password :
                </Typography>
                <TextField
                  type="password"
                  fullWidth
                  className={classes.textField}
                >
                </TextField>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={10}>
                <Typography>
                  Confirm :
                </Typography>
                <TextField
                  type="password"
                  fullWidth
                  className={classes.textField}
                >
                </TextField>
                </Grid>
                <Grid item>
                  <Button variant="contained" className={classes.saveButton}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider/>
          <List component="nav">
            <ListItem>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={10}>
                <Typography>
                  Avatar :
                </Typography>
                <TextField
                  value={this.state.avatar}
                  fullWidth
                  className={classes.textField}
                  onChange={this.handleChange}
			            onKeyPress={this.handleKeyPress}
                  name="avatar"
                >
                </TextField>
                <img src={avatar} alt={'avatar'} className={classes.avatar} />
                </Grid>
                <Grid item>
                  <Button variant="contained" className={classes.saveButton} onClick={this.handleSaveAvatar}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Card>
      </main>
    )
  }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    };
}

Account.propTypes = {
  classes: PropTypes.object.isRequired,
};

const connectedAccount = connect(mapStateToProps)( withStyles(styles)(Account));
export { connectedAccount as Account };

