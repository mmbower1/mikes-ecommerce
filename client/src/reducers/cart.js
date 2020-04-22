import {
  ADD_ITEM,
  TOGGLE_CART,
  TOGGLE_ERROR
  // UPDATE_ACCOUNT
} from '../actions/types';

import { addItemToCart } from '../utils/addItemToCart';

const initialState = {
  // token: localStorage.getItem('token'),
  // isAuthenticated: null,
  // loading: true,
  // user: null,
  cartItems: [],
  hidden: true
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
      case ADD_ITEM:
        return {
          ...state,
          // cartItems: [...state.cartItems, payload],
          cartItems: addItemToCart(state.cartItems, payload), //updated way from line above
        }
      case TOGGLE_CART:
        return {
          ...state,
          hidden: !state.hidden
        }
      default:
        return state
  }
}