import "dotenv/config";
import express from "express";
import router from "./router/index.routes.js"
import cors from "cors"

const app = express();

app.use(cors({origin: "http://localhost:5173"}))

app.use("/api/v1", router)

app.listen(process.env.LOCAL_PORT, () => {
  console.log(
    `Server is running at http://localhost:${process.env.LOCAL_PORT}`
  );
});
