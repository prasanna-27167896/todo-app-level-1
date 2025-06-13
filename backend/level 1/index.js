import express, { urlencoded } from "express";
import cors from "cors";
import "dotenv/config";
import db from "./utils/db.js";
import router from "./routes/taskRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true })); //Parse the post request coming from req
app.use(express.json()); //Accept the json data from server/frontend

//Connect Database
db();

//Routes
app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}...💻`);
});
