import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  messageReceived: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 20,
    marginRight: 220,
    backgroundColor: theme.palette.primary.main,
    display: 'inline-block',
    right: 0
  },
  messageSent: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 20,
    marginLeft: 220,
    backgroundColor: '#daf5ff',
    display: 'inline-block',
    right: 0
  },
  textReceived: {
    color: 'white'
  },
  textSent: {
    color: 'black'
  }
});

class Message extends React.Component {
  
  render () {
    const { classes, sent } = this.props;

    const align = ( ( sent && "flex-end" ) || "flex-start" );

    const styleClass = ( ( sent && classes.messageSent ) || classes.messageReceived );

    const textColor = ( ( sent && classes.textSent ) || classes.textReceived );

    return (
      <Grid container
        direction="column"
        justify="flex-start"
        alignItems={align}
      >
        <Paper className={styleClass} elevation={0}>
          <Typography className={textColor} component="p">
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.

body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Paper>
      </Grid>
    )
  }
}

Message.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Message);

