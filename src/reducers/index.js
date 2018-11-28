import { combineReducers } from 'redux';

import { chatrooms } from './chatrooms.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  chatrooms,
  alert
});

export default rootReducer;