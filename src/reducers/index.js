import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sessionReducer from './sessionReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  form: formReducer,
  session: sessionReducer,
  user: UserReducer
});

export default rootReducer;
