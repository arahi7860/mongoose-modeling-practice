import BestEverything from "./data-sets/prompt3/bestEverything.js";
import mongoose from "./connection.js";
import bestEverythingData from "./data-sets/prompt3/best-everything.json" assert { type: "json" };

await BestEverything.deleteMany({});
await BestEverything.insertMany(bestEverythingData);

const bestAtEverything = await BestEverything.find({});

console.log(bestAtEverything);
