const jwt = require('jsonwebtoken');
require('dotenv').config();


const { User } = require('../models/user');
const handle = require('../utils/promise-handler');


// set up secret for JWT (json web token)...typically you'd hide this in a .env
const secret = process.env.SECRET;
console.log("secret: " + secret);

const register = (req, res) => {

  console.log("Inside user-controller -> POST '/api/user/register' -> register");
  console.log(req.body);

  // User.save(req.body)
  User.create(req.body)
    .then(dbUserData => res.status(200).json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

const login = async (req, res) => {

  console.log("Inside POST '/api/user/login' -> login");

  // get email and password out of req.body
  const { email, password } = req.body;

  // find user based on email
  const [findUserErr, userInfo] = await handle(User.findOne({ email }));

  if (findUserErr) {
    console.log(findUserErr);
    res.status(500).json({
      error: "Internal error, try again"
    });
  }
  else if (userInfo === null) {
    res.status(401).json({
      error: "Incorrect email!"
    })
  }
  else {
    // check to see if password matches user's password
    const [pwErr, same] = await handle(userInfo.isCorrectPassword(password));


    if (pwErr) {
      res.status(500).json({
        error: "Internal error please try again!"
      });
    } else if (same === false) {
      res.status(401).json({
        error: "Incorrect password!"
      });
    } else {
      // issue our JWT
      const payload = {
        _id: userInfo._id,
        email: userInfo.email
      }
      // sign jwt
      const token = jwt.sign(payload, secret, {
        expiresIn: '1h'
      });

      // respond with web token to the front end
      res.cookie('token', token, { httpOnly: true }).status(200).json(token);
    }
    // END LOGIN

    // START GET USER PROFILE
    const getUserProfile = async (req, res) => {

      console.log("Inside GET '/api/user' -> getUserProfile");

      const [userErr, userProfile] = await handle(User.findById(req._id));

      if (userErr) {
        res.status(500).json(userErr);
      } else {
        res.status(200).json(userProfile);
      }

    }
    // End of getUserProfile()
    const updateUserProfile = async (req, res) => {

      console.log("Inside PUT '/api/user/update' -> updateUserProfile");

      console.log("-----req.body------");
      console.log(req.body);

      const [userErr, userProfile] = await handle(User.findById(req._id));

      if (userErr) {
        res.status(500).json(userErr);
      } else {


        const oldPassword = userProfile.password;
        // console.log("oldPassword: " + oldPassword + " :: " + req.body.password);

        if (oldPassword === req.body.password) {

          console.log("password NOT changed --------------------------");

          User.findByIdAndUpdate(req._id, req.body, (error, userData) => {

            if (error) {
              return res.status(500).json({
                success: false,
                message: "Error updating new data."
              });
            }
            console.log(userData);
            console.log("successfully updated data");
            res.status(200).json(userData);
          });


        } else {

          console.log("password to be changed --------------------------");

          // Update 'userProfile' object with new data from req.body
          for (const key in req.body) {
            userProfile[key] = req.body[key];
          }

          userProfile.save(err => {
            if (err) {
              console.log(err);
              res.status(500).json({
                success: false,
                message: "Error updating new data."
              });
            } else {
              console.log("User profile data successfully saved!");
              console.log(userProfile);

              res.status(200).json(userProfile);
            }
          });

        }
      }

    } // End of updateUserProfile()




    // export our methods
    module.exports = {
      getUserProfile,
      login,
      register,
      updateUserProfile
    }
  }
}
