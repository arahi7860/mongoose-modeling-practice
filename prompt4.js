import Superhero from "./data-sets/prompt4/superheroes.js";
import mongoose from "./connection.js";
import supeheroData from "./data-sets/prompt4/superheroes.json" assert { type: "json" };

await Superhero.deleteMany({});
await Superhero.insertMany(supeheroData);

const superhero = await Superhero.find({});

console.log(superhero);
