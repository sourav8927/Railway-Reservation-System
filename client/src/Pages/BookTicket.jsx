import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { LuRefreshCw } from "react-icons/lu";

const BookTicket = () => {
  const [passengerDetails, setPassengerDetails] = useState([
    { name: '', age: '', gender: '', berthPreference: '', meal: '', senior: false },
  ]);

  const [bookingDetails, setbookingDetails] = useState([]);
  const [trainBooking, setTrainBooking] = useState([]);
  const [bookedTrain, setbookedTrain] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [captcha, setCaptcha] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate(); 
  const { id } = useParams();

  const fetchTrainData = async () => {
    const URL = `http://127.0.0.2:3000/api/trainsRoutes/booktrain/${id}`;
    const response = await fetch(URL, {
      method: "GET",
    });
    const trainData = await response.json();
    console.log(trainData);
    setTrainBooking(trainData);
    calculateTotalAmount(trainData, passengerDetails.length);
    console.log(trainData.TicketFee);
  };

  useEffect(() => {
    fetchTrainData();
  }, []);

  const calculateTotalAmount = (trainData, numPassengers) => {
    const { TicketFee } = trainData;
    const total = TicketFee * numPassengers;
    setTotalAmount(total);
  };

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...passengerDetails];
    updatedPassengers[index][field] = value;
    setPassengerDetails(updatedPassengers);
    calculateTotalAmount(trainBooking, updatedPassengers.length);
  };

  const addPassenger = () => {
    setPassengerDetails([
      ...passengerDetails,
      { name: '', age: '', gender: '', berthPreference: '', meal: '', senior: false },
    ]);
    calculateTotalAmount(trainBooking, passengerDetails.length + 1);
  };

  const validateForm = () => {
    for (let i = 0; i < passengerDetails.length; i++) {
      const passenger = passengerDetails[i];
      if (!passenger.name || !passenger.age || !passenger.gender || !passenger.berthPreference || !passenger.meal) {
        alert(`Please fill all details for passenger ${i + 1}`);
        return false;
      }
    }
    if (!captcha) {
      alert('Please enter the captcha');
      return false;
    }
    if (!mobileNumber) {
      alert('Please enter your mobile number');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    const bookingData = {
      trainNo: trainBooking.TrainNo,
      trainName: trainBooking.TrainName,
      source: trainBooking.Source,
      destination: trainBooking.Destination,
      journeyDate: new Date(),
      class: trainBooking.ChooseFareClass,
      quota: 'GENERAL',
      passengers: passengerDetails,
    };

    const response = await fetch('http://127.0.0.2:3000/api/trainBooking/BookTrain', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    const result = await response.json();
    setbookingDetails(result);
    if (response.ok) {
      alert('Go to the next page');
      navigate(`/payBill/${result._id}/${totalAmount}`); // Navigate to the new page with booking ID
    } else {
      alert('Booking failed: ' + result.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className='text-center'>
        <h2 className="text-2xl font-bold mb-4 text-orange-500">BOOK TICKET</h2>
      </div>
      {/* Journey Details */}
      <div className="border mb-4">
        <div className='bg-blue-500 p-2'>
          <h3 className="font-bold text-white">Journey Details</h3>
        </div>
        <div className='p-6'>
          <div className="grid grid-cols-2 gap-4">
            <div className='flex'>
              <label className='font-semibold'>Train No./Name:</label>
              <h2 className='text-gray-500'>{trainBooking.TrainNo}/{trainBooking.TrainName}</h2>
            </div>
            <div className="flex">
              <label className='font-semibold'>Journey Date:</label>
              <h2 className='text-gray-500'>10/07/24</h2>
            </div>
            <div className="flex">
              <label className='font-semibold'>From Station:</label>
              <h2 className='text-gray-500'>{trainBooking.Source}</h2>
            </div>
            <div className="flex">
              <label className='font-semibold'>To Station:</label>
              <h2 className='text-gray-500'>{trainBooking.Destination}</h2>
            </div>
            <div className="flex">
              <label className='font-semibold'>Boarding Station:</label>
              <h2 className='text-gray-500'>None</h2>
            </div>
            <div className="flex">
              <label className='font-semibold'>Reserve Upto Station:</label>
              <h2 className='text-gray-500'>{trainBooking.Destination}</h2>
            </div>
            <div className="flex">
              <label className='font-semibold'>Class:</label>
              <h2 className='text-gray-500'>{trainBooking.ChooseFareClass}</h2>
            </div>
            <div className="flex">
              <label className='font-semibold'>Quota:</label>
              <h2 className='text-gray-500'>GENERAL</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Passenger Details */}
      <div className="border p-4 mb-4">
        <h3 className="font-bold">Passenger Details</h3>
        {passengerDetails.map((passenger, index) => (
          <div key={index} className="grid grid-cols-6 gap-4 mb-2">
            <div>
              <label>Name:</label>
              <input
                type="text"
                className="border w-full p-2"
                value={passenger.name}
                onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
              />
            </div>
            <div>
              <label>Age:</label>
              <input
                type="number"
                className="border w-full p-2"
                value={passenger.age}
                onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
              />
            </div>
            <div>
              <label>Gender:</label>
              <select
                className="border w-full p-2"
                value={passenger.gender}
                onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label>Berth Preference:</label>
              <select
                className="border w-full p-2"
                value={passenger.berthPreference}
                onChange={(e) => handlePassengerChange(index, 'berthPreference', e.target.value)}
              >
                <option value="">Select</option>
                <option value="Lower">Lower</option>
                <option value="Middle">Middle</option>
                <option value="Upper">Upper</option>
              </select>
            </div>
            <div>
              <label>Meal:</label>
              <select
                className="border w-full p-2"
                value={passenger.meal}
                onChange={(e) => handlePassengerChange(index, 'meal', e.target.value)}
              >
                <option value="">Select</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </select>
            </div>
            <div className="flex items-center">
              <label>
                <input
                  type="checkbox"
                  checked={passenger.senior}
                  onChange={(e) => handlePassengerChange(index, 'senior', e.target.checked)}
                />
                Senior
              </label>
            </div>
          </div>
        ))}
        <div className='justify-between flex text-center items-center'>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addPassenger}>
              Add Passenger
            </button>
          </div>
          <div className="text-center pt-2">
            <h3 className="font-semibold text-2xl">Total Amount: ₹{totalAmount}</h3>
          </div>
        </div>
      </div>

      {/* Booking Options */}
      <div className="border p-4 mb-4">
        <h3 className="font-bold">Booking Options</h3>
        <div>
          <label>
            <input type="checkbox" />
            Consider for Auto UpGradation
          </label>
        </div>
        <div>
          <label>Book only if confirm berths are allotted</label>
          <div className='space-x-4'>
            <label>
              <input type="radio" name="confirmBerths" />
              None
            </label>
            <label>
              <input type="radio" name="confirmBerths" />
              Book, only if all berths are allotted in same coach
            </label>
            <label>
              <input type="radio" name="confirmBerths" />
              Book, only if at least 1 lower berth is allotted
            </label>
            <label>
              <input type="radio" name="confirmBerths" />
              Book, only if 2 lower berths are allotted
            </label>
          </div>
        </div>
      </div>
     
      {/* Captcha and Submit */}
      <div className="border p-4 mb-4">
        <div className="flex items-center">
          <label>Captcha:</label>
          <input 
            type="text" 
            className="border w-full p-2" 
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
          />
          <LuRefreshCw className='m-2 size-8 text-orange-500' />
          <img src="../../public/images/226md.png" alt="Captcha" />
        </div>
        <div className="flex items-center mt-4">
          <label>Mobile Number:</label>
          <input 
            type="text" 
            className="border w-full p-2" 
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Next</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Replan</button>
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
