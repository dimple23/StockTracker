const router = require('express').Router();

// Import methods we exported from user-controller
const {register, login, getUserProfile, updateUserProfile } = require('../../controllers/user-controller');

// Import authentication method 
const withAuth = require('../../middleware/authentication');


// GET user profile '/api/users'
router
  .route('/')
  .get(withAuth, getUserProfile);


// POST register user '/api/users/register'
router
  .route('/register')
  .post(register);


// POST login user '/api/users/login'
router
  .route('/login')
  .post(login);

  
// PUT update user '/api/users/update'
router
  .route('/update')
  .put(withAuth,updateUserProfile);


module.exports = router;