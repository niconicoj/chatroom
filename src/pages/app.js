import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import { Main } from './mainpage/Main'

const styles = theme => ({
  root: {
      position: 'absolute',
      top: 0, 
      bottom: 0, 
      left: 0, 
      right: 0 
  },
});

class App extends React.Component {
  
  render() {

    return (
      <Main />
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
