const router = require('express').Router();
const {
  getAlphaStocks,
  
} = require('../../controllers/stockApiController');

//define routes
//GET & POST routes 

router
.route('/')
.get(getAlphaStocks)

module.exports=router