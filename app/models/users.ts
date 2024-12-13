import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: String,
    userPassword: String,
  },
  {
    collection: "users",
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
