import { modelNames } from "mongoose";
import mongoose from "../../connection.js";

// From penpals.json file these comments down below
// HINT: The dates here are not strings! Add the Mongoose data type to
// the Schema that automatically populates a date at the time the data is created.
const penpalSchema = new mongoose.Schema({
  to: String,
  from: String,
  message: String,
  sentOn: Date,
});

const Penpal = mongoose.model("Penpal", penpalSchema);

export default Penpal;
