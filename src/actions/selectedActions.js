import GoogleBooksAdapter from '../adapters/GoogleBooksAdapter';
import * as types from './actionTypes';

export function setSelectedBook(book){
  return {type: types.SET_SELECTED_BOOK, payload: book}
}

export function clearSelectedBook(){
  return {type: types.CLEAR_SELECTED_BOOK }
}

export function fetchById(id){
  return function(dispatch) {
    dispatch(clearSelectedBook())
    return GoogleBooksAdapter.searchById(id)
    .then(resp => dispatch(setSelectedBook(resp.items[0])))
  }
}
