import { combineReducers } from 'redux';
// import alert from './alert';
import auth from './auth';
import cart from './cart';
import directory from './directory';
import shop from './shop';
// import profile from './profile';

export default combineReducers({
  // alert,
  auth,
  cart,
  directory,
  shop
  // profile
});