import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Send from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';

import { chatroomsActions } from '../../actions';

const styles = theme => ({
  input: {
    zIndex: 2,
    position: 'fixed',
    bottom: 0,
    right: 0,
    [theme.breakpoints.down('xs')]: {
      left: 0,
    },
    left:320,
    paddingBottom: 12,
    backgroundColor: theme.palette.background.paper,
  },
  inputGrid: {
    paddingLeft: '32px !important',
    paddingRight: '32px !important',
    [theme.breakpoints.down('xs')]: {
      height: 94
    }
  },
  inputButton: {
    paddingLeft: 0,
  },
  inputField: {
    paddingTop: 28.5,
    paddingBottom: 28.5,
    [theme.breakpoints.down('xs')]: {
      height: 60,
      marginTop: -5
    }
  },
  sendIcon: {
    [theme.breakpoints.down('xs')]: {
      width: 48,
      height: 48
    }
  }
});

class MessageField extends React.Component {

  state = {
    open: false,
    message: ""
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSend();
    }
  }

  handleSend = () => {
    this.props.dispatch(chatroomsActions.sendMessages(this.state.message, this.props.user, this.props.user.inChatroom));
    this.setState({ 'message': "" });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  render () {

    const { classes } = this.props;

    return (
      <Paper className={classes.input} square elevation={12}>
        <Divider />
        <Grid
          container
          spacing={24}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} className={classes.inputGrid}>
            <TextField
              id="outlined-full-width"
              multiline
              fullWidth
              value={this.state.message}
              margin="normal"
              name="message"
              variant="outlined"
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Fab color="primary" aria-label="Add" onClick={this.handleSend} className={classes.sendIcon}>
                      <Send/>
                    </Fab>
                  </InputAdornment>
                ),
                className: (classes.inputField)
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
    return {
      user
    };
}

MessageField.propTypes = {
  classes: PropTypes.object.isRequired,
};

const connectedMessageField = connect(mapStateToProps)(withStyles(styles)(MessageField));
export { connectedMessageField as MessageField }; 
