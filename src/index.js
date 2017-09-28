import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import thunk from 'redux-thunk'
import reducers from './reducers';

// Containers
import Home from './containers/Home';
import Login from './containers/Login';
import CreateAccount from './containers/CreateAccount';
import Library from './containers/Library';
import CheckedOut from './containers/CheckedOut';
import Friends from './containers/Friends';
import Account from './containers/Account';
import Search from './containers/Search';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={(history) => (
            sessionStorage.jwt ? <Redirect to="/" /> : <Login history={history} />
          )}  />
        <Route path='/create-account' component={(history) => (
            sessionStorage.jwt ? <Redirect to="/" /> : <CreateAccount history={history} />
          )}  />
        <Route path='/library' component={(history) => (
            sessionStorage.jwt ? <Library history={history} /> : <Redirect to="/" />
          )}  />
        <Route path='/checked-out' component={(history) => (
            sessionStorage.jwt ? <CheckedOut history={history} /> : <Redirect to="/" />
          )}  />
        <Route path='/friends' component={(history) => (
            sessionStorage.jwt ? <Friends history={history} /> : <Redirect to="/" />
          )}  />
        <Route path='/account' component={(history) => (
            sessionStorage.jwt ? <Account history={history} /> : <Redirect to="/" />
          )}  />
        <Route path='/search-results/:term' component={(history) => (
            sessionStorage.jwt ? <Search history={history} /> : <Redirect to="/" />
          )}  />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
