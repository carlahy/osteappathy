const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Booking = require('../models/booking');

// Create booking

router.post('/create', (req,res,next) => {
  Booking.getAllBookings((err, bookings) => {
    if (err) throw err;
    if (!bookings) {
      return res.json({success:false,msg:'Bookings not found'});
    }
    return res.json({success:true,events:bookings});
  });
});

// Read all bookings

router.get('/all', (req,res,next) => {
  Booking.getAllBookings((err, bookings) => {
    if (err) throw err;
    if (!bookings) {
      return res.json({success:false,msg:'Bookings not found'});
    }
    return res.json({success:true,events:bookings});
  });
});

router.get('/month', (req,res,next) => {
  Booking.getBookingsForMonth(req.query.month, (err, bookings) => {
    if (err) throw err;
    if (!bookings) {
      return res.json({success:false,msg:'Bookings not found'});
    }
    return res.json({success:true,events:bookings});
  });
});

// Update booking


// Delete booking


module.exports = router;
