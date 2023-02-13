import Beverage from "./data-sets/prompt1/beverage.js";
import mongoose from "./connection.js";
import beverageData from "./data-sets/prompt1/beverage-data.json" assert { type: "json" };

await Beverage.deleteMany({});
await Beverage.insertMany(beverageData);

const beverages = await Beverage.find({});

console.log(beverages);
