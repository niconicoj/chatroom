import React from 'react';

import { CreateAccountDialog } from "./CreateAccountDialog";
import { LoginDialog } from "./LoginDialog";
import { UploadPictureDialog } from "./UploadPictureDialog";

class Dialogs extends React.Component {


  render () {

    return (
    	<div>
    		<CreateAccountDialog />
    		<LoginDialog />
        <UploadPictureDialog />
    	</div>
    )
  }
}

export default Dialogs; 