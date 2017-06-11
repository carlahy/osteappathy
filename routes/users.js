const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success:false, msg:'Failed to register user'});
    } else {
      res.json({success:true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if(!user) {
      return res.json({success:false,msg:'User not found'});
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 86400 //1 day
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg:'wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

// Get patient list for user
router.get('/patients', (req, res, next) => {
  User.getUserById(req.query.user_id, (err, user) => {
    if (err) throw err;
    if (!user.patients) {
      return res.json({success:false,msg:'Patient list not found'});
    }
    return res.json({success:true,patient_list: user.patients});
  })
});

// Push new patient to list
router.post('/newpatient', (req, res, next) => {
  User.pushNewPatient(req.body.user_id,req.body.patient_id, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({success:false,msg:'User not found, could not add new patient'});
    }
    return res.json({success:true});
  });
});

module.exports = router;
