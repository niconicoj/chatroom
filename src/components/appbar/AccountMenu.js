import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';

import { dialogActions, usersActions } from '../../actions';

const styles = theme => ({
  stickyButton: {
    padding: 0,
    backgroundColor: 'inherit'
  },
  stickyHeader: {
    color: '#747474'
  }
});

class AccountMenu extends React.Component {

	handleOpenCreateAccount = (event) => {
		this.props.dispatch(dialogActions.openCreateAccount());
		this.props.handleClose(event);
	}

	handleOpenLogin = (event) => {
		this.props.dispatch(dialogActions.openLogin());
		this.props.handleClose(event);
	}

	handleLogout = (event) => {
		this.props.dispatch(usersActions.logout());
		this.props.handleClose(event);
	}

  render () {

  	const { user, open, anchorEl, handleClose } = this.props;

    return (
			<Popper open={open} anchorEl={anchorEl} transition disablePortal>
			  {({ TransitionProps, placement }) => (
			    <Grow
			      {...TransitionProps}
			      id="menu-list-grow"
			      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'bottom end' }}
			    >
			      <Paper>
			        <ClickAwayListener onClickAway={handleClose}>
			          <MenuList>
			            {user.guest ?
			              <div>
			              <MenuItem onClick={this.handleOpenCreateAccount}>sign up</MenuItem>
			              <MenuItem onClick={this.handleOpenLogin}>Log in</MenuItem>
			              </div>
			              :
			              <div>
			              <Link to={`/myAccount`} style={{textDecoration: 'none', color: 'black'}}>
			                <MenuItem onClick={handleClose}>My account</MenuItem>
			              </Link>
			              <MenuItem onClick={this.handleLogout}>Log out</MenuItem>
			              </div>
			             }
			          </MenuList>
			        </ClickAwayListener>
			      </Paper>
			    </Grow>
			  )}
			</Popper>	
		)
  }
}

function mapStateToProps(state) {
  const { dialog } = state;
    return {
      dialog
    };
}

AccountMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

const connectedAccountMenu = connect(mapStateToProps)(withStyles(styles)(AccountMenu));
export { connectedAccountMenu as AccountMenu }; 
