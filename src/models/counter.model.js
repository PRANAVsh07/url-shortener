import mongoose from "mongoose";

const COUNTER = new mongoose.Schema({
  
    _id:{
        type:String
    },
    seq:{
type:Number

    }
});

const counter = mongoose.model("counter",COUNTER);

export default counter