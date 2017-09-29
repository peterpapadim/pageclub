import * as types from './actionTypes';
import UserAdapter from '../adapters/UserAdapter';

function setUser(user){
  sessionStorage.setItem('user', JSON.stringify(user))
  return {type: types.FETCH_USER_INFO, payload: JSON.parse(sessionStorage.user)}
}

export function fetchUserInfo(){
  return function(dispatch) {
    return UserAdapter.show()
    .then(resp => dispatch(setUser(resp)))
  }
}
