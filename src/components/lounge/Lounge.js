import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import MessageField from '../messagefield/MessageField';
import Message from '../message/Message';

const styles = theme => ({
  appBarSpacer: {
    height: 1,
    display: 'block',
  },
  content: {
    position: 'absolute',
    padding: theme.spacing.unit * 3,
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
  chat: {
    marginBottom: 92,
    boxShadow: 'none'
  }
});

class Lounge extends React.Component {
  
  render () {
    const { classes } = this.props;

    return (
      <main className={classes.content}>
        <Paper className={classes.chat}>
          <div className={classes.appBarSpacer}/>
            <Message />
            <Message />
            <Message sent />
            <Message />
            <Message sent />
            <Message sent />
            <Message />
            <Message sent />
            <Message />
        </Paper>

        <MessageField />
      </main>
    )
  }
}

Lounge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Lounge);

