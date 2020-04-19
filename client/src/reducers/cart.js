import {
  TOGGLE_CART,
  TOGGLE_ERROR
  // UPDATE_ACCOUNT
} from '../actions/types';

const initialState = {
  // token: localStorage.getItem('token'),
  // isAuthenticated: null,
  // loading: true,
  // user: null,
  hidden: true
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
      case TOGGLE_CART:
        return {
          // ...state,
          hidden: !state.hidden
        }
      case TOGGLE_ERROR:
        return {
          ...state
        }
      default:
        return state
  }
}