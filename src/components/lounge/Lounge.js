import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import MessageField from '../messagefield/MessageField';
import Message from '../message/Message';

const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    padding: theme.spacing.unit * 3,
    height: '100vh',
  },
});

class Lounge extends React.Component {
  
  render () {
    const { classes } = this.props;

    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="baseline"
          className={{bottom:0}}
        >
          <Message />
        </Grid>

        <MessageField />
      </main>
    )
  }
}

Lounge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Lounge);

