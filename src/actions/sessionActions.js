import * as types from './actionTypes';
import { fetchUserInfo } from './userActions'
import SessionAdapter from '../adapters/SessionAdapter';


export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export function loginFail() {
  return {type: types.LOG_IN_FAIL}
}

export function createUserFail() {
  return {type: types.CREATE_USER_FAIL}
}

export function logInUser(credentials, history) {
  return function(dispatch) {
    return SessionAdapter.login(credentials)
    .then(response => {
      if(response.jwt !== undefined){
        sessionStorage.setItem('jwt', response.jwt);
        dispatch(loginSuccess());
        dispatch(fetchUserInfo());
        history.push("/")
      }
      else if(response.error){
        dispatch(loginFail())
      }
    })
  };
}

export function createAndLogInUser(credentials, history) {
  return function(dispatch) {
    return SessionAdapter.create(credentials)
    .then(response => {
      if(response.jwt !== undefined){
        sessionStorage.setItem('jwt', response.jwt);
        dispatch(loginSuccess());
        dispatch(fetchUserInfo());
        history.push("/")
      }
      else if(response.error){
        dispatch(createUserFail())
      }
    })
  }
}

export function logOutUser(history) {
  sessionStorage.removeItem('jwt')
  sessionStorage.removeItem('user')
  history.push("/")
  return {type: types.LOG_OUT_SUCCESS}
}


export function resetSession() {
  return {type: types.RESET_SESSION}
}
