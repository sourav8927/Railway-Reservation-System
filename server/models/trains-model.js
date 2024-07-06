const {Schema,model}= require("mongoose");
const { required } = require("../validators/auth-validator");


const trainSchema= new Schema({
  TrainNo:{
    type:Number,
    required: true
  },
  TrainName:{
    type:String,
    required: true
  },
  Source:{
    type:String,
    required: true
  },
  Destination:{
    type:String,
    required: true
  },
  Arrival:{
    type: String,
    required:true
  },
  Departure:{
    type:String,
    required:true
  },
  TrainType:{
    type: String,
    required: true
  },
  TicketFee:{
    type: Number,
    required: true
  },
  TrainAvailableFor:{
    type: String,
    required: true
  },
  ChooseFareClass:{
    type: String,
    required: true
  },
  TrainPostedBy:{
    type: String,
    required: true
  }
});

const Trains=new model("Trains",trainSchema);

module.exports=Trains;