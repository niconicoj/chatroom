import { combineReducers } from 'redux';

import { chatroom } from './chatroom.reducer';

const rootReducer = combineReducers({
  chatroom
});

export default rootReducer;