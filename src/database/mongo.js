import mongoose from "mongoose";

const connect = () => {
  const url =
    "mongodb+srv://mamukashviliachi706:liverpool12@achiewe.6hbzolj.mongodb.net/?retryWrites=true&w=majority";
  try {
    mongoose.connect(url);
  } catch (error) {
    console.log(error);
  }
};

export default connect;
