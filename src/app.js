import express from  "express"
import router from "./routes/url.routers.js";
const app =express();

app.use(express.json());
app.use("/api/urls" , router);

export default app;