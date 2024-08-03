const mongoose= require("mongoose");
const Trains= require("../models/trains-model");
const { ObjectId } = require('mongodb'); 

const getAllTrains= async(req,res)=>{
    try {
        console.log(req.body)
        const allTrains= await Trains.find();
        if(!allTrains){
            res.status(404).json({msg:"No Trains found"});
        }
        res.status(200).json({allTrains});
        console.log("AllTrains",allTrains);
    } catch (error) {
        console.log("error while fetching trains",error);
    }
}
const insertATrain= async(req,res)=>{
    try {
        const { TrainNo,TrainName,Source, Destination, Arrival, Departure, TrainType, TicketFee, TrainAvailableFor, ChooseFareClass, TrainPostedBy } = req.body;
        
        // Validate request body
        if (!TrainNo || !TrainName||!Source || !Destination || !Arrival || !Departure || !TrainType || !TicketFee || !TrainAvailableFor || !ChooseFareClass || !TrainPostedBy) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        // Create a new train instance
        const newTrain = new Trains({
            TrainNo,
            TrainName,
            Source,
            Destination,
            Arrival,
            Departure,
            TrainType,
            TicketFee,
            TrainAvailableFor,
            ChooseFareClass,
            TrainPostedBy
        });

        // Save the new train to the database
        await newTrain.save();
        res.status(201).json({ msg: "Train added successfully", newTrain });
        console.log("New Train", newTrain);
    } catch (error) {
        console.log("error from insertATrain", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

};
const getTrainById= async(req,res)=>{
    const id=req.params.id;
    const train = await Trains.findById(new mongoose.Types.ObjectId(id));

    res.send(train);
}
module.exports={getAllTrains,insertATrain,getTrainById};