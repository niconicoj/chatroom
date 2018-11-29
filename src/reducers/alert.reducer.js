import { alertConstants } from '../constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'success',
        message: action.message,
        show: action.show
      };
    case alertConstants.ERROR:
      return {
        type: 'error',
        message: action.message,
        show: action.show
      };
    case alertConstants.CLEAR:
      return {};
    case alertConstants.HIDE:
      return {
        ...state,
        show: false
      };
    default:
      return state
  }
}