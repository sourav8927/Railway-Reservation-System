// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { FaLongArrowAltRight } from "react-icons/fa";

// const FinalBill = () => {
//   const { bookingId } = useParams();

//   // Mock data for demonstration
//   const bookingDetails = {
//     pnr: '6636611744',
//     trainNo: '12821',
//     trainName: 'DHAULI EXP',
//     from: 'SHALIMAR - SHM (Howrah / Kolkata)',
//     to: 'BHUBANESWAR - BBS (BHUBANESWAR)',
//     departure: '09:15 02-Jun-2024',
//     arrival: '16:00 02-Jun-2024',
//     class: 'CHAIR CAR (CC)',
//     bookingDate: '30-May-2024',
//     quota: 'GENERAL (GN)',
//     passenger: {
//       name: 'DILIP KUMAR DING',
//       age: 63,
//       gender: 'M',
//       bookingStatus: 'WL/48',
//       currentStatus: 'WL/26'
//     },
//     transactionId: '100005016149589',
//     ticketFare: 625.00,
//     convenienceFee: 35.40,
//     totalFare: 660.40,
//     gstDetails: {
//       invoiceNumber: 'PS24663661174411',
//       address: 'Delhi',
//       supplierCode: '996421',
//       gstin: '07AAAGM0289C1ZL',
//       totalTax: 29.75
//     },
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   return (
//     <div className="container mx-auto p-4 text-center">
//       <div className="border border-gray-300 p-4">
//         <div className="text-center mb-4">
//           <h2 className="text-2xl font-bold">Electronic Reservation Slip (ERS) - Normal User</h2>
//           <p className="text-red-500">WL</p>
//         </div>
//         <div className='flex justify-between px-[300px] text-center items-center'>

//         <div className="mb-4">
//           <h3 className="text-lg font-bold mb-2">Booked From</h3>
//           <p>{bookingDetails.from}</p>
//         </div>
//         <div><FaLongArrowAltRight className='size-32 p-0  text-blue-400'/></div>
//         <div className="mb-4">
//           <h3 className="text-lg font-bold mb-2">To</h3>
//           <p>{bookingDetails.to}</p>
//         </div>
//         </div>
//         <div className="mb-4">
//           <h3 className="text-lg font-bold mb-2">Journey Details</h3>
//           <p>PNR: {bookingDetails.pnr}</p>
//           <p>Train No./Name: {bookingDetails.trainNo} / {bookingDetails.trainName}</p>
//           <p>Departure: {bookingDetails.departure}</p>
//           <p>Arrival: {bookingDetails.arrival}</p>
//           <p>Class: {bookingDetails.class}</p>
//           <p>Booking Date: {bookingDetails.bookingDate}</p>
//           <p>Quota: {bookingDetails.quota}</p>
//         </div>
//         <div className="mb-4">
//           <h3 className="text-lg font-bold mb-2">Passenger Details</h3>
//           <p>Name: {bookingDetails.passenger.name}</p>
//           <p>Age: {bookingDetails.passenger.age}</p>
//           <p>Gender: {bookingDetails.passenger.gender}</p>
//           <p>Booking Status: {bookingDetails.passenger.bookingStatus}</p>
//           <p>Current Status: {bookingDetails.passenger.currentStatus}</p>
//         </div>
//         <div className="mb-4">
//           <h3 className="text-lg font-bold mb-2">Payment Details</h3>
//           <p>Transaction ID: {bookingDetails.transactionId}</p>
//           <p>Ticket Fare: ₹{bookingDetails.ticketFare.toFixed(2)}</p>
//           <p>IRCTC Convenience Fee (Incl. of GST): ₹{bookingDetails.convenienceFee.toFixed(2)}</p>
//           <p>Total Fare (all inclusive): ₹{bookingDetails.totalFare.toFixed(2)}</p>
//         </div>
//         <div className="mb-4">
//           <h3 className="text-lg font-bold mb-2">Indian Railways GST Details</h3>
//           <p>Invoice Number: {bookingDetails.gstDetails.invoiceNumber}</p>
//           <p>Address: {bookingDetails.gstDetails.address}</p>
//           <p>Supplier Code: {bookingDetails.gstDetails.supplierCode}</p>
//           <p>GSTIN: {bookingDetails.gstDetails.gstin}</p>
//           <p>Total Tax: ₹{bookingDetails.gstDetails.totalTax.toFixed(2)}</p>
//         </div>
//         <div className="flex  mt-4 text-center justify-center">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handlePrint}>Print</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinalBill;
