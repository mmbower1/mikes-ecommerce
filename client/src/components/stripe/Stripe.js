import React from 'react';
import { connect } from 'react-redux'
// actions
import { pay } from '../../actions/stripe';
// npm
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const Stripe = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = 'pk_test_MYtc1Y9o2kastiaotdprXIpM00kcIqDurv';
  // const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;

  // const onToken = token => {
  //   console.log(token);
  //   axios({
  //     data: {
  //       amount: stripePrice,
  //       token
  //     },
  //     url: 'stripe',
  //     method: 'post'
  //   }).then(res => {
  //     pay();
  //     alert('Payment successful');
  //   }).catch(err => {
  //     console.log(err);
  //     alert('Payment error')
  //   })
  // }

  return (
    <StripeCheckout
      label='Pay with Stripe'
      name="Mike's CBD"
      billingAddress
      shippingAddress
      image=''
      description={`Your total is ${price}`}
      amount={stripePrice}
      panelLabel='Pay with Stripe'
      token={pay}
      stripeKey={publishableKey}
    />
  )
}

const mapStateToProps = state => ({
  stripe: state.stripe
})

export default connect(mapStateToProps, { pay })(Stripe);