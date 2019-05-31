
const router = require('express').Router();
const {
  getAllStocks,
  
} = require('../../controllers/stockApiController');

//define routes
//GET & POST routes 

router
.route('/')
.get(getAllStocks)

module.exports=router
