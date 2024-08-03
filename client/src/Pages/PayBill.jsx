// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import PaymentSuccessDialog from '../Components/PaymentSuccessDialog';


// const PayBill = () => {
//     const [bookingDetails, setbookingDetails] = useState([])
//     const [totalAmount, setTotalAmount] = useState(0);
//   const [paymentDetails, setPaymentDetails] = useState({
//     cardNumber: '',
//     cardHolderName: '',
//     expiryDate: '',
//     cvv: '',
//   });

//   const [dialogOpen, setDialogOpen] = useState(false);

//   const handlePaymentSuccess = () => {
//     // Simulate a payment success action
//     setDialogOpen(true);
//   };

//   const handleClose = () => {
//     setDialogOpen(false);
//   };


//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentDetails({
//       ...paymentDetails,
//       [name]: value,
//     });
//   };

//   const {id,total}=useParams();
//   const fetchTrainBookingData = async () => {
//     const URL = `http://127.0.0.2:3000/api/trainBooking/getBookingTrainById/${id}`;
//     const response = await fetch(URL, {
//       method: "GET",
//     });

//     const trainData = await response.json();
//     console.log("booked train data",trainData);
//     setbookingDetails(trainData);
//     setTotalAmount(total);
//     console.log(total)
//     // if(response.ok){
//     //   alert("trains fetched")
//     // }
//   };
//   useEffect(() => {
//     fetchTrainBookingData();
//   }, []);


//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="container mx-auto p-4 ">
//       <div className='text-center'>

//       <h2 className="text-2xl font-bold mb-4">Bill Payment</h2>
//       </div>
//       <div className="border p-4 mb-4">
//         <h3 className="font-bold">Booking Summary</h3>
//         <div>
//           <p>Train No./Name: {bookingDetails.trainNo} / {bookingDetails.trainName}</p>
//           <p>From: {bookingDetails.source}</p>
//           <p>To: {bookingDetails.destination}</p>
//           <p>Journey Date: {bookingDetails.journeyDate}</p>
//           <p>Class: {bookingDetails.class}</p>
//           <p>Total Amount: ₹{totalAmount}</p>
//         </div>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="border p-4 mb-4">
//           <h3 className="font-bold">Payment Details</h3>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label>Card Number:</label>
//               <input
//                 type="text"
//                 name="cardNumber"
//                 className="border w-full p-2"
//                 value={paymentDetails.cardNumber}
//                 required
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div>
//               <label>Card Holder Name:</label>
//               <input
//                 type="text"
//                 name="cardHolderName"
//                 className="border w-full p-2"
//                 value={paymentDetails.cardHolderName}
//                 required
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div>
//               <label>Expiry Date:</label>
//               <input
//                 type="text"
//                 name="expiryDate"
//                 className="border w-full p-2"
//                 value={paymentDetails.expiryDate}
//                 required
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div>
//               <label>CVV:</label>
//               <input
//                 type="text"
//                 name="cvv"
//                 className="border w-full p-2"
//                 value={paymentDetails.cvv}
//                 required
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>
//         </div>
//         <div className='flex text-center items-center justify-center '>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handlePaymentSuccess}>
//           Pay Now
//         </button>
//         <PaymentSuccessDialog open={dialogOpen} onClose={handleClose}/>
//         <h1 className='font-bold text-2xl ml-5 bg-orange-600 text-white px-2 py-1 rounded-sm'>
//         {totalAmount}!!

//         </h1>
//         </div>
         
//       </form>
//     </div>
//   );
// };

// export default PayBill;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import PaymentSuccessDialog from '../Components/PaymentSuccessDialog';

const PayBill = () => {
    const [bookingDetails, setBookingDetails] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        cardHolderName: '',
        expiryDate: '',
        cvv: '',
    });

    const [dialogOpen, setDialogOpen] = useState(false);

    const handlePaymentSuccess = () => {
        // Store booking details in local storage
        const finalBillDetails = {
            ...bookingDetails,
            totalAmount,
            paymentDetails,
            transactionId: `TXN${Date.now()}`, // Mock transaction ID
        };
        localStorage.setItem('bookingDetails', JSON.stringify(finalBillDetails));

        setDialogOpen(true);
    };

    const handleClose = () => {
        setDialogOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({
            ...paymentDetails,
            [name]: value,
        });
    };

    const { id, total } = useParams();
    const fetchTrainBookingData = async () => {
        const URL = `http://127.0.0.2:3000/api/trainBooking/getBookingTrainById/${id}`;
        const response = await fetch(URL, {
            method: "GET",
        });

        const trainData = await response.json();
        console.log("booked train data", trainData);
        setBookingDetails(trainData);
        setTotalAmount(total);
        console.log(total)
    };

    useEffect(() => {
        fetchTrainBookingData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container mx-auto p-4 ">
            <div className='text-center'>
                <h2 className="text-2xl font-bold mb-4">Bill Payment</h2>
            </div>
            <div className="border p-4 mb-4">
                <h3 className="font-bold">Booking Summary</h3>
                <div>
                    <p>Train No./Name: {bookingDetails.trainNo} / {bookingDetails.trainName}</p>
                    <p>From: {bookingDetails.source}</p>
                    <p>To: {bookingDetails.destination}</p>
                    <p>Journey Date: {bookingDetails.journeyDate}</p>
                    <p>Class: {bookingDetails.class}</p>
                    <p>Total Amount: ₹{totalAmount}</p>
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
                                required
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
                                required
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
                                required
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
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex text-center items-center justify-center '>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handlePaymentSuccess}>
                        Pay Now
                    </button>
                    <PaymentSuccessDialog open={dialogOpen} onClose={handleClose} />
                    <h1 className='font-bold text-2xl ml-5 bg-orange-600 text-white px-2 py-1 rounded-sm'>
                        {totalAmount}!!
                    </h1>
                </div>
            </form>
        </div>
    );
};

export default PayBill;
