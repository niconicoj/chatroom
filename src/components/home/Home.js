import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBarSpacer: {
    height: 1,
    display: 'block',
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
  messageGrid :{
    marginBottom: 84,
    width:'100%'
  },
  text: {
    padding: 20,
  }
});

class Home extends React.Component {
  
  render () {
    const { classes, user } = this.props;

    if (user.currentChatroom) {
      return <Redirect to={{ pathname: "/chatroom", search: `?id=${user.currentChatroom}` }}/>;
    }

    return (
      <main className={classes.content}>
          <div className={classes.appBarSpacer}/>
          <Typography className={classes.text} variant="h2">
            Welcome !
          </Typography>
          <Typography className={classes.text} variant="subtitle1">
            This is a personal project of mine where I set for myself the goal of building a completely usable (and somewhat pleasant to use) chatroom web application.
          </Typography>
          <Typography className={classes.text}>
            (17/12/2018) Embeding youtube videos in message is available, register/login/logout available. 
          </Typography>
          <Typography className={classes.text}>
            If you happen to know some thing about React Redux and Material UI feel free to look at the actual source code at <a href="https://github.com/niconicoj/chatroom">https://github.com/niconicoj/chatroom</a>. I would be interested in any kind of feedback. 
          </Typography>
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

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

const connectedHome = connect(mapStateToProps)( withStyles(styles)(Home));
export { connectedHome as Home };

