// import mongoose
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema
const JoinSchema = new Schema({
  name: {
      type: String,
      required: 'Please enter your name',
      trim: true
  },
  email: {
      type: String,
      unique:true,
      required: 'Please enter your email',
      trim: true,
      lowercase:true,
      validate: [{ validator: value => isEmail(value), msg: 'Invalid email.' }]
  },
  password: {
      type: String,
      required: true
  },
  
//   resetPasswordToken:String,
//   resetPasswordExpires:Date,
});

// create module
const Join = mongoose.model('join', JoinSchema);
// export module

module.exports = Join;

