import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function libraryReducer(state = initialState.library, action) {
  switch(action.type) {
    case types.FETCH_LIBRARY:
      return action.payload
    case types.CLEAR_LIBRARY:
      return null
    default:
      return state;
  }
}
