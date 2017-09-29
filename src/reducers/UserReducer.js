import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch(action.type) {
    case types.FETCH_USER_INFO:
      return action.payload
    default:
      return state;
  }
}
