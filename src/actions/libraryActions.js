import BookAdapter from '../adapters/BookAdapter';
import * as types from './actionTypes';

function setLibrary(books){
  return {type: types.FETCH_LIBRARY, payload: books}
}

export function fetchLibrary(){
  return function(dispatch) {
    return BookAdapter.fetchLibrary()
    .then(resp => dispatch(setLibrary(resp))
  )}
}
