import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
  },
  phoneno: { type: String },
  address: { type: String },
  createAt: { type: Date, default: Date.now },
  gender: { type: String },
  coins: { type: Number, default: 0 },
  isAdmin: { type: Boolean, default: false },
});



// Method to hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


// "User"  this is what is created as what we want to receive from our data base, which will change to lowercase in our mongodb as user to see the entered details filled
const User = mongoose.model("User", userSchema);
export default User;
