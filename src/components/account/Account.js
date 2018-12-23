import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
  appBarSpacer: {
    height: 1,
    display: 'block',
  },
  card: {
    maxWidth: 140,
    marginLeft: 20
  },
  media: {
    height: 140,
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
  },
  cardContent: {
    padding: '0 !important',
  },
  fab: {
    top: '30%',
    left: '30%',
  }
});

class Account extends React.Component {
  
  render () {
    const { classes, user } = this.props;

    if (user.currentChatroom) {
      return <Redirect to={{ pathname: "/chatroom", search: `?id=${user.currentChatroom}` }}/>;
    }

    return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <Typography className={classes.text} variant="h4">
          Your account
        </Typography>
        <Divider/>
        <Typography className={classes.text} variant="h6">
          Profile picture
        </Typography>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <CardMedia
              className={classes.media}
              image="https://www.gravatar.com/avatar/5c1f8f6eb8f967292f511a23?d=retro"
              title="Contemplative Reptile"
            >
            <Fab color="primary" aria-label="Edit" className={classes.fab}>
              <EditIcon />
            </Fab>
            </CardMedia>
          </CardContent>
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

