import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginRight: 100,
    marginBottom: 20,
    backgroundColor: theme.palette.primary.main,
  },
  message: {
    color: 'white'
  }
});

class Message extends React.Component {
  
  render () {
    const { classes } = this.props;

    return (
      <Paper className={classes.paper} elevation={1}>
        <Typography className={classes.message} component="p">
          Lorem ipsum dolor sit a
        </Typography>
      </Paper>
    )
  }
}

Message.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Message);

