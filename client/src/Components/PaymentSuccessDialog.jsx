// src/PaymentSuccessDialog.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import './PaymentSuccessDialog.css'
import { Link } from 'react-router-dom';

const PaymentSuccessDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="payment-success-dialog-title"
      aria-describedby="payment-success-dialog-description"
    >
      <DialogContent>
      <img
          src="../../public/images/check.png" // Replace with your image URL
          alt="Payment Successful"
          className="payment-image"
        />
      <DialogTitle id="payment-success-dialog-title" className='text-center'>Payment Successful</DialogTitle>
        <DialogContentText id="payment-success-dialog-description">
          Your payment was successful! Thank you for booking the Ticket.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Link to="/myticket">
        <Button onClick={onClose} color="primary" >
          Close
        </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
};

export default PaymentSuccessDialog;
