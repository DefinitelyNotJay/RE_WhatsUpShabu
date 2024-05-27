import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoute from "./routes/authRoute.js"

const app = express();
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

app.use("/auth", authRoute);



app.listen(3000, () => {
  console.log("connected");
  try {
    mongoose.connect("mongodb://localhost/WhatsUpShabu");
  } catch {
    console.log("something in mongo went wrong!");
  }
});
