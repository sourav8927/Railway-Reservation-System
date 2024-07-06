const express= require("express");
const router=express.Router();
const bookTrain=require("../controllers/bookTrain-controller");

router.route("/BookTrain").post(bookTrain.bookTrainTicket);
router.route("/getBookingTrain").get(bookTrain.getTrainBookings);
router.route("/getBookingTrainById/:id").get(bookTrain.getTrainBookingById);

module.exports=router;