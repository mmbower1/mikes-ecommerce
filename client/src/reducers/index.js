import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import cart from './cart';
import directory from './directory';
import shop from './shop';
import stripe from './stripe';
// import profile from './profile';

export default combineReducers({
  alert,
  auth,
  cart,
  directory,
  shop,
  stripe
  // profile
});