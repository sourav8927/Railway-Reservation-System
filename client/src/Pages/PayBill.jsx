import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PayBill = () => {
    const [bookingDetails, setbookingDetails] = useState([])
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const {id}=useParams();
  const fetchTrainBookingData = async () => {
    const URL = `http://127.0.0.2:3000/api/trainBooking/getBookingTrainById/${id}`;
    const response = await fetch(URL, {
      method: "GET",
    });

    const trainData = await response.json();
    console.log("booked train data",trainData);
    setbookingDetails(trainData);

    // if(response.ok){
    //   alert("trains fetched")
    // }
  };
  useEffect(() => {
    fetchTrainBookingData();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    alert('Payment submitted successfully!');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Bill Payment</h2>
      <div className="border p-4 mb-4">
        <h3 className="font-bold">Booking Summary</h3>
        <div>
          <p>Train No./Name: {bookingDetails.trainNo} / {bookingDetails.trainName}</p>
          <p>From: {bookingDetails.source}</p>
          <p>To: {bookingDetails.destination}</p>
          <p>Journey Date: {bookingDetails.journeyDate}</p>
          <p>Class: {bookingDetails.class}</p>
          <p>Total Amount: ₹{bookingDetails.totalAmount}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="border p-4 mb-4">
          <h3 className="font-bold">Payment Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                className="border w-full p-2"
                value={paymentDetails.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Card Holder Name:</label>
              <input
                type="text"
                name="cardHolderName"
                className="border w-full p-2"
                value={paymentDetails.cardHolderName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Expiry Date:</label>
              <input
                type="text"
                name="expiryDate"
                className="border w-full p-2"
                value={paymentDetails.expiryDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>CVV:</label>
              <input
                type="text"
                name="cvv"
                className="border w-full p-2"
                value={paymentDetails.cvv}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PayBill;
