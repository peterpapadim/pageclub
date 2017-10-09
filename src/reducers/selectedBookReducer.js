import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function selectedBookReducer(state = initialState.selectedBook, action) {
  switch(action.type) {
    case types.SET_SELECTED_BOOK:
      return action.payload
    case types.CLEAR_SELECTED_BOOK:
      return null
    default:
      return state;
  }
}
