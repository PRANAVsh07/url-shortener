import express from  "express"
import router from "./routes/url.routers.js";
import errormiddleware from "./middleware/err.js";
const app =express();

app.use(express.json());
app.use("/api/urls" , router);

app.use(errormiddleware);

export default app;