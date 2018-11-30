import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  messagePanel: {
    height: '100%'
  },
  message: {
    color: 'white'
  }
});

class MessagePanel extends React.Component {
  
  render () {
    const { classes } = this.props;

    return (
      <CardMedia className={classes.messagePanel} component="iframe">
        <Typography className={classes.message} component="p">
          Lorem ipsum dolor sit a
        </Typography>
      </CardMedia>
    )
  }
}

MessagePanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessagePanel);

