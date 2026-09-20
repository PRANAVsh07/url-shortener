import mongoose from "mongoose";

const COUNTER = new mongoose.Schema({
  
    id:{
        type:String
    },
    seq:{
type:Number

    }
});

const counter = mongoose.model("counter",COUNTER);

export default counter