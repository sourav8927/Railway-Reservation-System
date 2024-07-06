const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  berthPreference: String,
  meal: String,
  senior: Boolean,
});

const trainBookingSchema = new mongoose.Schema({
  trainNo: String,
  trainName: String,
  source: String,
  destination: String,
  journeyDate: Date,
  class: String,
  quota: String,
  passengers: [passengerSchema],
});

module.exports = mongoose.model('TrainBooking', trainBookingSchema);
