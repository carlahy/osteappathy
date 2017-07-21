const mongoose = require('mongoose');
const config = require('../config/database');

// Patient Schema
const BookingSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  start: {
    type: String,
    required: true
  }

  // TODO:
  // osteopath: {
  //   type: String, //String name, or user (db) id?
  //   required: true
  // },
  // color: {
  //   type: String,
  //   required: true
  // }
});

const Booking = module.exports = mongoose.model('Booking', BookingSchema);

// Create booking

module.exports.createBooking = function(newBooking, callback) {
  newBooking.save(callback);
};

// Read booking

module.exports.getAllBookings = function(callback){
  Booking.find(callback);
};

module.exports.getBookingsForMonth = function(month, callback){
  const query = {month:month};
  Booking.find(query, callback);
};
