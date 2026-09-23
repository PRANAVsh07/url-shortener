import url from"../models/url.model.js"
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
     
  

     

       const result = await counter.findOneAndUpdate(
    { _id: "url" },
    { $inc: { seq: 1 } },
    { new: true , upsert: true  }
);
  
const id = result.seq;
const shortcode = tobase62(id)


data.shortCode = shortcode;


    const oldurl = await url.create(data)
   
return oldurl;
     




}

const urlservice = async(data)=>{
  
  const result =await  url.findOne({ shortCode: data })
 
  return result;
  }
 



export {urlservice  ,urlgenration};