//import express roter and controllers

const router = require('express').Router();
const {
  getAllStocks,
  getStockById,
  createNewStock,
  updateStock,
  removeStock
} = require('../../controllers/stockController');

//define routes
//GET & POST routes 

router
.route('/')
.get(getAllStocks)
.post(createNewStock);

//GET,PUT,DELETE routes by :id
router
.route('/:id')
.get(getStockById)
.put(updateStock)
.delete(removeStock);

module.exports = router;