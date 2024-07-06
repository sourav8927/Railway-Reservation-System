const express= require("express");
const trainRouter= express.Router();
const trainController= require("../controllers/train-controller");

trainRouter.route("/trains").get(trainController.getAllTrains);
trainRouter.route("/insertTrain").post(trainController.insertATrain);
trainRouter.route("/booktrain/:id").get(trainController.getTrainById);
module.exports=trainRouter;