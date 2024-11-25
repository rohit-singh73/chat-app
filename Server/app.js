import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";


dotenv.config({
  path: "./.env",
});

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

connectDB(mongoURI);
// connectDB("mongodb://localhost:27017");

const app = express();

//Using Middlewares Here
app.use(express.json());
// app.use(express.urlencoded());


app.use('/user', userRoute);

app.get("/", (req, res) => {
  res.send(" Hello World ");
});

app.listen(port, () => {
  console.log(` Server is running on port ${port}`);
});