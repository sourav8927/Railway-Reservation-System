const TrainBooking = require('../models/trainBooking-model');

const getTrainBookings = async (req, res) => {
  try {
    const bookings = await TrainBooking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const bookTrainTicket = async (req, res) => {
  const { trainNo, trainName, source, destination, journeyDate, class: travelClass, quota, passengers } = req.body;

  const newBooking = new TrainBooking({
    trainNo,
    trainName,
    source,
    destination,
    journeyDate,
    class: travelClass,
    quota,
    passengers,
  });

  try {
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getTrainBookingById = async (req, res) => {
    try {
      const booking = await TrainBooking.findById(req.params.id);
      if (!booking) {
          return res.status(404).json({ message: 'Booking not found' });
        }
      res.json(booking);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports={getTrainBookings,bookTrainTicket,getTrainBookingById}