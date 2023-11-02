import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/api";

const app = express()



configViewEngine(app)

initWebRoutes(app)

const PORT = process.env.PORT || 8888
app.listen(PORT, () => {
    console.log(">>> Running :" + PORT)
})