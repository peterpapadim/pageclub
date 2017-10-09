import * as types from './actionTypes';

export function setSelectedBook(book){
  return {type: types.SET_SELECTED_BOOK, payload: book}
}

export function clearSelectedBook(){
  return {type: types.CLEAR_SELECTED_BOOK }
}
