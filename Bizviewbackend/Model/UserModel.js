

import mongoose from "mongoose";
// ❌ Remove bcrypt import since we're not using it
// import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String, // Store plain text temporarily for debugging
    required: true,
  },
  pic: { type: String },
  phoneno: { type: String },
  address: { type: String },
  createAt: { type: Date, default: Date.now },
  gender: { type: String },
  coins: { type: Number, default: 0 },
  isAdmin: { type: Boolean, default: false },
});

/* ❌ Commented out password hashing for debugging
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
*/

// ❌ Remove matchPassword method since we are not using bcrypt anymore
// userSchema.methods.matchPassword = async function(enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

const User = mongoose.model("User", userSchema);
export default User;
