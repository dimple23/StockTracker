
const { Stock } = require('../models');
//export

//GET all stocks

function getAllStocks(req, res) {
  Stock
    .find({})
    .then(dbStockData => res.status(200).json(dbStockData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

// GET by id

function getStockById(req, res) {
  Stock
    .findById(req.params.id)
    .then(dbStockData => res.status(200).json(dbStockData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

// Create a Stock - POST
function createNewStock(req, res) {
  Stock
    .create(req.body)
    .then(dbStockData => res.status(200).json(dbStockData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

// PUT - update by _id

function updateStock(req, res) {
  Stock
    .findByIdAndUpdate(req.params.id,
      {
        $set: {
          code: req.body.code,
          date: req.body.date,
        }
      },
      {
        new: true
      }
    )
    .then(dbStockData => res.status(200).json(dbStockData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}
 // DELETE by _id
function removeStock (req, res) {
  Stock
    .remove({
      _id: req.params.id
    })
    .then(dbStockData => res.status(200).json(dbStockData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}


// export all functions as methods
module.exports = {
  getAllStocks,
  getStockById,
  createNewStock,
  updateStock,
  removeStock
}