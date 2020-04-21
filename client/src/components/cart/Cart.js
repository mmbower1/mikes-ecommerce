import React from 'react';
import { connect } from 'react-redux';
import './Cart.styles.scss';
// components
import CartItem from '../cart-item/CartItem';
// semantic
import { Button } from 'semantic-ui-react'

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => 
          <CartItem key={cartItem.id} item={cartItem} />
        )}
        {/* {console.log(cartItems)} */}
        {/* {'hello'} */}
      </div>
      <br />
      <Button inverted color='green' className="checkout-button">
        Checkout
      </Button>
    </div>
  )
};

// cart is destructured from state so: state.cart.cartItems
const mapStateToProps = ({ cart: { cartItems }}) => ({
  cartItems,
});

export default connect(mapStateToProps, null)(Cart);
