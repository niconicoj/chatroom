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
    right: 0,
    wordBreak: 'break-word'
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
    right: 0,
    wordBreak: 'break-word'
  },
  test: {
    display: 'inline-block',
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
    }
  },
  badgeSent: {
    top: -22,
    right: -32,
    [theme.breakpoints.down('xs')]: {
      right: -24,
    }
  },
  textReceived: {
    color: 'white'
  },
  textSent: {
    color: 'black',
  },
  avatar: {
    width: 22,
    height: 22
  },
  embed: {
    textAlign: 'center'
  },
  embedIframe: {
    width: 480,
    height: 360,
    [theme.breakpoints.down('xs')]: {
      width: 256,
      height: 144
    }
  },
  sending: {
    opacity: 0.7
  }
});

class Message extends React.Component {
  
  render () {
    const { classes, sent, time, message } = this.props;

    const align = sent ? "flex-end" : "flex-start";

    const styleClass = sent ? classes.messageSent : classes.messageReceived;

    const textColor = sent ? classes.textSent : classes.textReceived;

    const badgeClass = sent ? classes.badgeSent : classes.badgeReceived;

    var localRelativeTime = moment.utc(time).toDate();

    var embededContent = "";

    const messageAvatar = message.user.avatar ? message.user.avatar : `https://www.gravatar.com/avatar/${message.userId}?d=retro`;

    var regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]{11})/;

    if (message.message.match(regExp)){
      var match = message.message.match(regExp);
      var embedId = match&&match[1].length===11 ? match[1] : false;
      embededContent = <iframe className={classes.embedIframe} src={`https://www.youtube.com/embed/${embedId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    }

    var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (
      <Grid container
        direction="column"
        justify="flex-start"
        alignItems={align}
        className={Boolean(message.sending) ? classes.sending : ""}
      >  
        <Paper className={styleClass} elevation={0}>
          <Badge badgeContent={<Avatar src={messageAvatar} className={classes.avatar}/>} color="secondary" classes={{ badge: badgeClass }}>
            <Grid container className={classes.test}>
              <Grid item xs={12}>
              <Typography className={textColor} component="p">
                {message.message}
              </Typography>
              </Grid>
              <Grid item xs={12} className={classes.embed}>
                {embededContent}
              </Grid>
            </Grid>
          </Badge>
        </Paper>
        <Typography variant="caption" className={classes.info}>
          {message.user.name}, 
        { Boolean(message.sending) ? "sending...":
          <Moment tz={timezone} locale="en" interval={5} fromNow date={localRelativeTime} />}
        </Typography>
      </Grid>
    )
  }
}

Message.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Message);

