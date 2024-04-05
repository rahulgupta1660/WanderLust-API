import express from "express";

import cors from "cors";

import mongoose from "mongoose";

import { Listing } from "./models/Listing.js";

const app = express();

//middleware
app.use(cors());

app.use(express.urlencoded({ extended: true }));

//database connection
async function main() {
  await mongoose.connect(
    "mongodb+srv://WanderLust:aVaV1XV5a3xFlhJA@cluster0.tggy7km.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}
main()
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => console.log(err));

//routes

//show all
app.get("/api/listings", async (req, res) => {
  const listings = await Listing.find({});
  res.json(listings);
});

//show
app.get("/api/listings/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.json(listing);
});

//port
const port = 9000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
