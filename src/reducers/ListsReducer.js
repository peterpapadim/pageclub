import { ADD_LIST } from '../actions/index';

export default (state = [], action) => {
  switch(action.type){
    case ADD_LIST:
      return [action.payload, ...state]
    default:
      return state
  }
}
