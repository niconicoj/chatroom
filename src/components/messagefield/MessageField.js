import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Send from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  input: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    left:340,
    paddingBottom: 12,
    backgroundColor: theme.palette.background.paper,
  },
  inputField: {
    paddingLeft: '32px !important',
  },
  inputButton: {
    paddingLeft: 0,
  }
});

class MessageField extends React.Component {
  
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
          <Grid item xs={11} className={classes.inputField}>
            <TextField
              id="outlined-full-width"
              multiline
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={1} className={classes.inputButton}>
            <Fab color="primary" aria-label="Add">
              <Send />
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

MessageField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageField);
