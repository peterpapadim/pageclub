import * as types from './actionTypes';
import GoogleBooksAdapter from '../adapters/GoogleBooksAdapter';

function setSearchResults(results){
  return {type: types.FETCH_SEARCH_RESULTS, payload: results}
}

function emptyResults(){
  return {type: types.EMPTY_SEARCH_RESULTS }
}

export function fetchSearchResults(searchTerm){
  return function(dispatch) {
    dispatch(emptyResults())
    return GoogleBooksAdapter.searchResults(searchTerm)
    .then(resp => dispatch(setSearchResults(resp)))
  }
}
