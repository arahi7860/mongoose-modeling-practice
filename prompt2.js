import Penpal from "./data-sets/prompt2/penpals.js";
import mongoose from "./connection.js";
import penpalData from "./data-sets/prompt2/penpals.json" assert { type: "json" };

await Penpal.deleteMany({});
await Penpal.insertMany(penpalData);

const penpals = await Penpal.find({});

console.log(penpals);
