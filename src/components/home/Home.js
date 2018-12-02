import React from 'react';
import PropTypes from 'prop-types';
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
    left: 340,
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
    const { classes } = this.props;

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
            As of now (02/12/2018) the application only gives you the possibility to create a chatroom and see it appear in the left drawer. I'm currently working on the actual look of chat page and hopefully I won't give and we should have a basic chat fonctioning.<br/><br/>
            If you stumbled upon this first I need to ask you "how ?" and second if you happen to know some thing about React Redux and Material UI feel free to look at the actual source code at <a href="https://github.com/niconicoj/chatroom">https://github.com/niconicoj/chatroom</a>. I would be interested in any kind of feedback. 
          </Typography>
      </main>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

