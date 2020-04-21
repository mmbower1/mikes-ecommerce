import axios from 'axios';
// import { setAlert } from './alert';
import { ADD_ITEM, TOGGLE_CART, TOGGLE_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';

// add item
export const addItem = item => async dispatch => {
  try {
    dispatch({
      type: ADD_ITEM,
      payload: item
    });
    
  } catch (err) {
  }
}

// toggle cart
export const toggleCart = () => async dispatch => {
  // if (localStorage.token) {
  //   setAuthToken(localStorage.token);
  // }
  try {
    dispatch({
      type: TOGGLE_CART,
    });
  } catch (err) {
    console.log("toggle cart action ERROR: " + err);
    dispatch({
      type: TOGGLE_ERROR
    })
  }
}