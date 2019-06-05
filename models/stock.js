// import mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

// Create Schema
const StockSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
// create module
const Stock = mongoose.model('stock', StockSchema);
//export module
module.exports = Stock;
