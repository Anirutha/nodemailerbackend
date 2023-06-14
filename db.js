import mongoose from "mongoose";
//database connection
export function MongoConnect() {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/password-reset", connectionParams);
    console.log("Connected to Mongoose");
  } catch (error) {
    console.log(error);
  }
}