const jwt = require('jsonwebtoken');

require('dotenv').config();
// set up secret for JWT (json web token)...typically you'd hide this in a .env
// const secret = 'mysecretsshhhhh';
const secret = process.env.SECRET;


const withAuth = (req, res, next) => {

  // In our code we'll be using 'req.headers.authorization'
  let token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.headers.authorization || 
    req.cookies.token;


  // ["Bearer", "<tokenvalue>"]
  // Trip "Bearer " keyword from the response
  if (req.headers.authorization) {
    token = token
      .split(' ')
      .pop()
      .trim();
  }

  if (!token) {

    res.status(401).send('Unauthorized: No token provided');

  } 
  else {

    jwt.verify(token, secret, (err, decoded) => {

      if (err) {
        res.status(401).json({
          success: false,
          message: 'Unauthorized: Invalid token'
        });
      } 
      else {
        // Save email Id and user id
        req.email = decoded.email;
        req._id = decoded._id;
        next();
      }
    });
  }
};

module.exports = withAuth;
