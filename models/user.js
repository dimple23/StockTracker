// Import dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const { Schema } = mongoose;


const UserSchema = new Schema({

  Name: {
    type: String,
    trim: true,
  },

 
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\../, "A valid email address must be used!"]
  },

  password: {
    type: String,
  }

  
});




// set up ability to create password (FOR CREATING A USER PASSWORD)
UserSchema.pre('save', function createPassword(next) {

  console.log("Inside UserSchema.pre() -> save -> createPassword()");

  // if (this.isNew || this.isModified('password')) {

    // save reference to what "this" means
    const document = this;

    // run bcrypt's hash method the create password
    bcrypt.hash(this.password, saltRounds, (err, hashedPassword) => {
      
      if (err) {
        next(err);
      }
      else {
        // save new password
        document.password = hashedPassword;
        next();
      }
    });
  // }
});



// for logging in, we need to compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = function isCorrectPassword(password) {

  console.log("Inside UserSchema.methods.isCorrectPassword()");
  
  // save reference to "this"
  const document = this;
  return new Promise((resolve, reject) => {

    // run bcrypt.compare method to compare incoming password (i.e. 12345) with user's hashed password (i.e. 3rueoiehw4hgoig43)
    bcrypt.compare(password, document.password, function compareCallback(err, same) {

      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        resolve(same);
      }
    });
  });
}




// Export "user" table
const Users = mongoose.model("users", UserSchema);

module.exports = Users;
