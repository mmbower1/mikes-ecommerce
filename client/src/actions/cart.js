import axios from 'axios';
// import { setAlert } from './alert';
import { TOGGLE_CART, TOGGLE_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';

// load user
export const toggleCart = () => async dispatch => {
  // if (localStorage.token) {
  //   setAuthToken(localStorage.token);
  // }
  try {
    dispatch({
      type: TOGGLE_CART,
    });
  } catch (err) {
    console.log("loadUser action ERROR: " + err);
    dispatch({
      type: TOGGLE_ERROR
    })
  }
}