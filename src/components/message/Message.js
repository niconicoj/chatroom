import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';
import 'moment/locale/fr';
import 'moment-timezone';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  messageReceived: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 20,
    [theme.breakpoints.down('sm')]: {
      marginRight: 100,
    },
    marginRight: 220,
    marginBottom: 0,
    backgroundColor: theme.palette.primary.main,
    display: 'inline-block',
    right: 0
  },
  messageSent: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 20,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 100,
    },
    marginLeft: 220,
    marginBottom: 0,
    backgroundColor:theme.palette.primary.light,
    display: 'inline-block',
    right: 0
  },
  info: {
    marginTop: 0,
    marginBottom: 0,
    margin: 20,
    color: '#747474'
  },
  badgeReceived: {
    top: -22,
    left: -32,
    [theme.breakpoints.down('xs')]: {
      left: -24,
    },
  },
  badgeSent: {
    top: -22,
    right: -32,
    [theme.breakpoints.down('xs')]: {
      right: -24,
    },
  },
  textReceived: {
    color: 'white'
  },
  textSent: {
    color: 'black'
  },
  avatar: {
    width: 22,
    height: 22
  },
});

class Message extends React.Component {
  
  render () {
    const { classes, text, sent, time, sender, id } = this.props;

    const align = ( ( sent && "flex-end" ) || "flex-start" );

    const styleClass = ( ( sent && classes.messageSent ) || classes.messageReceived );

    const textColor = ( ( sent && classes.textSent ) || classes.textReceived );

    const badgeClass = ( ( sent && classes.badgeSent ) || classes.badgeReceived );

    var localRelativeTime = moment.utc(time).toDate();

    return (
      <Grid container
        direction="column"
        justify="flex-start"
        alignItems={align}
      >
        
          <Paper className={styleClass} elevation={0}>
            <Badge badgeContent={<Avatar src={`https://www.gravatar.com/avatar/${id}?d=retro`} className={classes.avatar}/>} color="secondary" classes={{ badge: badgeClass }}>
              <Typography className={textColor} component="p">
                {text}
              </Typography>
            </Badge>
          </Paper>
          <Typography variant="caption" className={classes.info}>
            {sender}, <Moment tz="Europe/Paris" locale="fr" interval={5} fromNow ago date={localRelativeTime} />
          </Typography>
      </Grid>
    )
  }
}

Message.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Message);

