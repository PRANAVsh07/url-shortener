import mongoose from "mongoose";

const urlsstore = new mongoose.Schema({
  
    originalUrl:{
        type:String
    },
    shortCode:{
type:String,
unique:true
    }
});

const url = mongoose.model("url",urlsstore);

export default url;