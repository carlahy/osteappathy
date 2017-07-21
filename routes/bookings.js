const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Booking = require('../models/booking');

// Create booking

router.post('/', (req,res,next) => {
  let newBooking = new Booking({
    title: req.body.title,
    start: req.body.start
  });
  Booking.createBooking(newBooking, (err,booking) => {
    if(err) {
      res.json({success:false, msg:'Something went wrong, booking could not be created', err:err});
    } else {
      res.json({success:true, msg:'New booking was created'});
    }
  });
});

// Read all bookings

router.get('/', (req,res,next) => {
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
