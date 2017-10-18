import BookAdapter from '../adapters/BookAdapter';
import * as types from './actionTypes';

function setLibrary(books){
  return {type: types.FETCH_LIBRARY, payload: books}
}

export function fetchLibrary(userId){
  return function(dispatch) {
    return BookAdapter.fetchLibrary(userId)
    .then(resp => dispatch(setLibrary(resp))
  )}
}

export function clearLibrary(){
  return {type: types.CLEAR_LIBRARY}
}
