import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// style
import { Button, Menu } from 'semantic-ui-react';
import './Checkout.styles.scss'
// components
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

const Checkout = ({ cartItems, total }) => {
  console.log('checkout: ', total);
  return (
    <div>
      <div className="header">
        <Menu size='massive'>
          <Menu.Item>
            <Link to="/">Back</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(cartItem => 
          <CheckoutItem cartItem={cartItem} key={cartItem.id} />
        )}
        {/* {itemCount} */}
        <div className="total">
          <span>TOTAL: ${total}</span>
        </div>
      </div>
    </div>
  )
};

// cart is destructured from state so: state.cart.cartItems
const mapStateToProps = ({ cart: { cartItems }}) => ({
  // same thing as a selector
  // itemCount: cartItems.reduce(
  //   (accumulatedQuantity, cartItem) => 
  //     accumulatedQuantity + (cartItem.quantity * cartItem.price), 0
  //   )
    cartItems
  })

export default connect(mapStateToProps, null)(Checkout);
