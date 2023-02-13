import mongoose from "../../connection.js";

const beverageSchema = new mongoose.Schema({
  "beverage-name": String,
  brand: String,
  "beverage-type": String,
  "contains-sugar": Boolean,
  carbonated: Boolean,
  container: String,
});

const Beverage = mongoose.model("Beverage", beverageSchema);

export default Beverage;
