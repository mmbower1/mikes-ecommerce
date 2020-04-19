import React from 'react';
import './Cart.styles.scss';
// semantic
import { Button, Segment } from 'semantic-ui-react'

const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <Segment inverted>
          <Button inverted color='green'>
            Checkout
          </Button>
        </Segment>
      </div>
    </div>
  )
};

export default Cart;
