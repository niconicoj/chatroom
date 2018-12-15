import { dialogConstants } from '../constants';

export function dialog(state = {}, action) {
  switch (action.type) {
    case dialogConstants.OPEN_CREATE_ACCOUNT:
      return {
        ...state,
        createAccount: true
      };
    case dialogConstants.CLOSE:
      return {};
    default:
      return state
  }
}