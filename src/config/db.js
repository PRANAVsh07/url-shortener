import mongoose from"mongoose"
import dotenv from "dotenv"


dotenv.config();

const DBconnect=  async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB connected");
    }
    catch(err){
        throw err
    }

 
}

export default DBconnect
