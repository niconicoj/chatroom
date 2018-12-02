import { combineReducers } from 'redux';

import { chatrooms } from './chatrooms.reducer';
import { alert } from './alert.reducer';
import { user } from './user.reducer';

const rootReducer = combineReducers({
  chatrooms,
  user,
  alert
});

export default rootReducer;