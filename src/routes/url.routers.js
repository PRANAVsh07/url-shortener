import express  from"express"
import { urlshortner, url } from "../controllers/url.controller.js";

const router= express.Router()

 router.post("/",urlshortner);
 router.get("/:shortcode",url);
 export default router