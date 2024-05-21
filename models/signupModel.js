const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const signupSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

signupSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    const hashedPassword = await bcrypt.hash(this.password, 12);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error); 
  }
});

const Signup = mongoose.model("Signup", signupSchema);

module.exports = Signup;