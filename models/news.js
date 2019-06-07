const mongoose = require('mongoose');

const { Schema } = mongoose;

const newsSchema = new Schema({
  source: {
    type: String
  },
  author: {
    type: String
  },
  title: {
    type: Array
  },
  description: {
    type: String
  },
  url: {
    type: String
  }
  
});

const news = mongoose.model('news', newsSchema);

module.exports =news;