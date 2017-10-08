import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function searchReducer(state = initialState.searchResults, action) {
  switch(action.type) {
    case types.FETCH_SEARCH_RESULTS:
      return action.payload
    case types.EMPTY_SEARCH_RESULTS:
      return []
    default:
      return state;
  }
}
