import url from"../models/user.model.js"
import counter from"../models/counter.model.js"

const tobase62 = (number) => {
    const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    while (number > 0) {

      const reminder = number % 62;
        result += characters[reminder];
      number = Math.floor(number / 62);
    }
          
    return result.split("").reverse().join("");
    
};
const urlgenration= async(data)=>{
     try{
  

     

       const result = await counter.findOneAndUpdate(
    { _id: "url" },
    { $inc: { seq: 1 } },
    { new: true , upsert: true  }
);
  
const id = result.seq;
const shortcode = tobase64(id)


data.shortCode = shortcode;


    const oldurl = await url.create(data)

     }

catch(err){
throw(err);
}
}

export default urlgenration