// HINT: You may need more than one model for this data set!
import mongoose from "../../connection.js";

const superheroSchema = new mongoose.Schema({
  universe: String,
  movies: [
    {
      title: String,
      year: Date,
      characters: [
        {
          name: String,
          alias: Boolean,
          actor: String,
        },
        {
          name: String,
          alias: Boolean,
          actor: String,
        },
      ],
    },
    {
      title: String,
      year: Date,
      characters: [
        {
          name: String,
          alias: Boolean,
          actor: String,
        },
        {
          name: String,
          alias: Boolean,
          actor: String,
        },
      ],
    },
  ],
});

const Superhero = mongoose.model("Superhero", superheroSchema);

export default Superhero;
