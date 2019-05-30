const mongoose = require('mongoose');

const { Schema } = mongoose;

//create Schema
const stockSchema = new Schema({
  code: {
    type: String,
    required: true
},
date: {
    type: Date,
    default: Date.now
}
});


const stock = mongoose.model('stock', stockSchema);

module.exports = stock;
