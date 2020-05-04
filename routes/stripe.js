// express
const express = require('express');
const router = express.Router();
// middleware
// const auth = require('../middleware/auth');
// mongo
// const User = require('../models/User');
// npm's
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// @route    POST /stripe
// @desc     Charge user
// @access   Public
router.post('/stripe', (req, res) => {
  try {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: 'usd'
    }
    stripe.charges.create(body, (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).send({ error: stripeErr });
      } else {
        res.status(200).send({ success: stripeRes });
      }
    });

  } catch(err) {
    console.log(err);
  }

});

module.exports = router;