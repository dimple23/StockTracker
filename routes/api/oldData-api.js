const router = require('express').Router();
const {
  quandlStock,
  
} = require('../../controllers/oldDataController');

//define routes
//GET & POST routes 

router
.route('/')
.get(quandlStock)

module.exports=router