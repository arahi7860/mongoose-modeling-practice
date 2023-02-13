import { Schema } from "mongoose";
import mongoose from "../../connection.js";

const bestEverythingSchema = new mongoose.Schema({
  year: Date,
  sports: {
    superBowl: String,
    worldSeries: String,
    stanleyCup: String,
    NBAchampionship: String,
  },
  music: {
    bestSong: {
      title: String,
      artist: String,
    },
  },
  movies: {
    bestMovie: String,
    bestActress: String,
    bestActor: String,
  },
});

const BestEverything = mongoose.model("BestEverything", bestEverythingSchema);

export default BestEverything;
