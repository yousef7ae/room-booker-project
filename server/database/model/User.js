import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: Number
})

const User = mongoose.model('users', userSchema);
export default User;
