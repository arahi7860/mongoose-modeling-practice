import mongoose from "mongoose";

const CONNESTING_STRING = "mongodb://127.0.0.1:27017/";

mongoose.set("strictQuery", false);
mongoose.connect(CONNESTING_STRING, {});

export default mongoose;
