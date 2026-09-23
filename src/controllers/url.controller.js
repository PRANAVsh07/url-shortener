
import {urlgenration ,urlservice}  from "../services/url.service.js"
import urlSchema from "../validators/url.validation.js"
import AppError from "../errors/app.error.js"
const urlshortner = async(req ,res)=>{
const url = req.body
const validate=urlSchema.safeParse(url)
 if(!validate.success){
 throw new AppError("url not found",400)
  
 }

    const newurl =await urlgenration(validate.data)

    res.json({
        newurl
    })
    
}

const url = async(req, res)=>{
     const shortcode = req.params.shortcode
     const result = await  urlservice(shortcode)
if (!result) {
    throw new AppError("Shortcode not found", 404);
}
   res.redirect(result.originalUrl);
}
export { urlshortner, url };