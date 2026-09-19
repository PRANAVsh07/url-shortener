
import urlgenration  from "../services/url.service.js"

const urlshortner = async(req ,res)=>{
const url = req.body
    const newurl =await urlgenration(url)

    res.json({
        newurl
    })
    
}

export default urlshortner