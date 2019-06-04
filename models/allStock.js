// import mongoose
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema
const StockSchema = new Schema({
  open: {
    type: String,
    required: true
  },
  high: {
    type: String,
    required: true
  },
  low: {
    type: String,
    required: true
  },

  close: {
    type: String,
    required: true
  },
  "adjusted close": {
    type: String,
    required: true
  },
  volume: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});
// create module
const AllStock = mongoose.model('stockdb', StockSchema);
//export module
module.exports = AllStock;
