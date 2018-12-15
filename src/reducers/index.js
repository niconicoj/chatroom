import { combineReducers } from 'redux';

import { chatrooms } from './chatrooms.reducer';
import { alert } from './alert.reducer';
import { user } from './user.reducer';
import { dialog } from './dialogs.reducer';


const rootReducer = combineReducers({
  chatrooms,
  user,
  alert,
  dialog
});

export default rootReducer;