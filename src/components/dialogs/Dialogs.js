import React from 'react';

import { CreateAccountDialog } from "./CreateAccountDialog";
import { LoginDialog } from "./LoginDialog";

class Dialogs extends React.Component {


  render () {

    return (
    	<div>
    		<CreateAccountDialog />
    		<LoginDialog />
    	</div>
    )
  }
}

export default Dialogs; 