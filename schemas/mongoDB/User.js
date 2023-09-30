import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    lastDonated: {
      type: Date,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    bloodGroup: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

let User;

if (mongoose.models?.User) User = mongoose.model("User");
else User = mongoose.model("User", UserSchema);

export default User;
