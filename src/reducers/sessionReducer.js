import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sessionReducer(state = initialState.session, action) {
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      return !!sessionStorage.jwt
    case types.LOG_IN_FAIL:
      return "ERROR"
    case types.LOG_OUT_SUCCESS:
      return !!sessionStorage.jwt
    case types.CREATE_USER_FAIL:
      return "ERROR"
    case types.RESET_SESSION:
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
