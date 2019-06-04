var userSchema = new Schema({
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
  // gender: {
  //     type: String
  // },
  resetPasswordToken:String,
  resetPasswordExpires:Date,
});