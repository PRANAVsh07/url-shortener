import url from"../models/user.model.js"
import counter from"../models/counter.model.js"


const urlgenration= async(data)=>{
     try{
  
    

       const result = await counter.findOneAndUpdate(
    { _id: "url" },
    { $inc: { seq: 1 } },
    { new: true }
);
      const oldurl = await url.create(data)
     }

catch(err){
throw(err);
}
}

export default urlgenration