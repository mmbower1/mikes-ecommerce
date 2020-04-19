import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../img/shopping-bag.svg';
// actions
import { toggleCart } from '../../actions/cart';
import './CartIcon.styles.scss';

const CartIcon = ({ toggleCart }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(null, mapDispatchToProps)(CartIcon);
