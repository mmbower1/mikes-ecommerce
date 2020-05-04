import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Stripe = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = 'pk_test_MYtc1Y9o2kastiaotdprXIpM00kcIqDurv';
  // const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;


  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

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
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default Stripe;