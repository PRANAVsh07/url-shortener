import express  from"express"
import urlshortner  from "../controllers/url.controller.js";

const router= express.Router()

 router.post("/",urlshortner);

 export default router