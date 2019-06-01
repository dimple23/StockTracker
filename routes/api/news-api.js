
const router = require('express').Router();
const {
  getAllNews,
  
} = require('../../controllers/newsApiController');

//define routes
//GET & POST routes 

router
.route('/')
.get(getAllNews)

module.exports=router
