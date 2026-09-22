
import {urlgenration ,urlservice}  from "../services/url.service.js"

const urlshortner = async(req ,res)=>{
const url = req.body
    const newurl =await urlgenration(url)

    res.json({
        newurl
    })
    
}

const url = async(req, res)=>{
     const shortcode = req.params.shortcode
     const result = await  urlservice(shortcode)
if (!result) {
    return res.status(404).json({
        message: "Shortcode not found"
    });
}
   res.redirect(result.originalUrl);
}
export { urlshortner, url };