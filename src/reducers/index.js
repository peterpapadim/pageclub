import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sessionReducer from './sessionReducer';
import UserReducer from './UserReducer';
import searchReducer from './searchReducer';
import selectedBookReducer from './selectedBookReducer';

const rootReducer = combineReducers({
  form: formReducer,
  session: sessionReducer,
  user: UserReducer,
  searchResults: searchReducer,
  selectedBook: selectedBookReducer
});

export default rootReducer;
