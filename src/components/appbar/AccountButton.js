import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';

import { AccountMenu } from './AccountMenu';

const styles = theme => ({
  stickyButton: {
    padding: 0,
    backgroundColor: 'inherit'
  },
  stickyHeader: {
    color: '#747474'
  }
});

class AccountButton extends React.Component {

  state = {
    open: false,
    createOpen: false,
    loginOpen: false,
    anchorEl: null,
    error: false,
    username: "",
    password: "",
    passwordCheck: "",
  }

  handleClickOpen = (event) => {
    this.setState(state => ({ open: !state.open }));
  }

  handleClose = (event) => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  }

  render () {

    const { user } = this.props;
    const { open } = this.state;

    const avatar = user.avatar ? user.avatar : `https://www.gravatar.com/avatar/${user._id}?d=retro`;

    return (
      <div>
        <IconButton 
          color="inherit"
          buttonRef={node => {
              this.anchorEl = node;
            }}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={this.handleClickOpen}
        >
          {user.guest ? <AccountCircle style={{ fontSize: 30 }} />:<Avatar alt="Natacha" src={avatar} />}
        </IconButton>
        <AccountMenu
          user={user}
          open={open} 
          anchorEl={this.anchorEl}
          handleClose={this.handleClose}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
    return {
      user
    };
}

AccountButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const connectedAccountButton = connect(mapStateToProps)(withStyles(styles)(AccountButton));
export { connectedAccountButton as AccountButton }; 