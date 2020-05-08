import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, History, Switch, Route } from 'react-router-dom';
// import PrivateRoute from './components/routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
// actions
import { loadUser } from './actions/auth';
// containers
import Checkout from './containers/checkout/Checkout';
import Edit from './containers/edit/Edit';
import Homepage from './containers/homepage/Homepage';
import ShopPage from './containers/shop/Shop';
import Auth from './containers/auth/Auth';
import './App.css';
// components
// import Header from './components/header/Header';
// redux
import store from './store';
import { Provider } from 'react-redux';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  // used in functional components, not class based components where componentDidMount() is used instead
  // userSet data keeps reverting back to inital state, check if session token is in localstorage and exists, if not - send back to login. If yes - loadUser(), wait for it to finish to show UI.
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
        {/* <Header /> */}
          <Switch>
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/edit' component={Edit} />
            <Route path='/shop'component={ShopPage} />
            <Route path='/auth'component={Auth} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
