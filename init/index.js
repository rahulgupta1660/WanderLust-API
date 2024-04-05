import mongoose from "mongoose";

import { sampleListings } from "./data.js";

import { Listing } from "../models/Listing.js";

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

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(sampleListings);
};

initDB();
