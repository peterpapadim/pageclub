import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  // lists: ListsReducer,
  form: formReducer,
  session: sessionReducer
});

export default rootReducer;
