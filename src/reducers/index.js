import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sessionReducer from './sessionReducer';
import UserReducer from './UserReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  form: formReducer,
  session: sessionReducer,
  user: UserReducer,
  searchResults: searchReducer
});

export default rootReducer;
