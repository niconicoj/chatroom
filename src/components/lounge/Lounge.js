import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import MessageField from '../messagefield/MessageField';
import Message from '../message/Message';

const styles = theme => ({
  appBarSpacer: {
    height: 1,
    display: 'block',
  },
  content: {
    position: 'absolute',
    height: '100vh',
    left: 340,
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
  chat: {
    marginBottom: 92,
    boxShadow: 'none'
  }
});

class Lounge extends React.Component {
  
  render () {
    const { classes } = this.props;

    return (
      <main className={classes.content}>
        <Paper className={classes.chat}>
          <div className={classes.appBarSpacer}/>
            <Message text="Lorem ipsum dolor sit amet."/>
            <Message text="Lorem ipsum vitae convallis augue sed sollicitudin rhoncus.

Dictumst."/>
            <Message text="Etiam fringilla ante vitae enim lobortis consequat." sent />
            <Message text="Lorem ipsum lacinia rhoncus auctor pellentesque nulla nec venenatis tempus lectus ante habitant nostra, libero tempor congue aliquam lacus sodales convallis semper conubia elementum ligula.

Vitae etiam odio consectetur urna aliquam posuere turpis, mollis vehicula gravida sociosqu imperdiet semper nisi bibendum, mauris tempor nisl justo ullamcorper iaculis."/>
            <Message text="Lorem ipsum.

Ligula tempus sit ut suspendisse pellentesque elementum laoreet nulla aliquet tempus integer, tortor lectus sagittis cursus aenean mattis senectus nulla donec ornare taciti orci curabitur molestie sagittis quis." sent />
            <Message text="Lorem ipsum augue vel aenean convallis eleifend vulputate blandit fusce dapibus.

Suscipit nisl malesuada ornare enim suscipit praesent interdum phasellus condimentum sem sit netus ut.

Mi commodo lectus lacus ligula dictumst aliquam pulvinar ullamcorper posuere taciti lorem nam, aenean nostra venenatis faucibus quisque lectus est fusce lectus velit."sent />
            <Message text="Lorem ipsum faucibus sed lobortis eget habitant erat lectus himenaeos potenti habitasse.

Donec curabitur ultricies interdum iaculis donec metus.

Venenatis semper hac consequat iaculis nisi tempor donec feugiat pretium ac tempus quam."/>
            <Message text="Lorem ipsum diam at faucibus praesent pulvinar duis, sem sapien faucibus consequat inceptos dictum quis morbi, id euismod auctor donec suscipit elementum."sent />
            <Message text="Lorem ipsum adipiscing tellus posuere nibh nisi habitasse mollis, in luctus ut neque blandit fusce eros."/>
        </Paper>

        <MessageField />
      </main>
    )
  }
}

Lounge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Lounge);

