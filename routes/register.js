// express
const express = require('express');
const router = express.Router();
// mongo
const User = require('../models/User');
// npm's
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

// @route    GET /register
// @desc     Get registered user
// @access   Public
router.get('/', (req, res) => {
  res.send('Register route')
});

// @route    POST /register
// @desc     Register new user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('phoneNumber', 'Phone number needs 10 digits').isLength({ min: 10 }),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    check('password2', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, phoneNumber, password, password2 } = req.body;
    try {
      // see if email already exists
      let user = await User.findOne({ email }, { unqiue: true });
      if (user) {
        return res.status(400).json({ errors: [{ msg: 'Email already taken!' }] });
      }

      user = new User({
        name,
        email,
        phoneNumber,
        password,
        password2
      });

      // // bcrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // save to mongo
      await user.save();

      // return json webtoken
      const payload = {
        user: {
          id: user.id
        }
      }
      // set to 3600 (1 hr) in production
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        });
        console.log('REGISTER: ', req.body); // object of data sent to the route

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error register')
    }
});

module.exports = router;