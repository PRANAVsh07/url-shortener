import app from "./src/app.js"
import dotenv from "dotenv";
import DBconnect from "./src/config/db.js";
dotenv.config();

const start = async () => {
    await DBconnect();

    app.listen(process.env.PORT, () => {
        console.log("server is listening");
    });
};

start();