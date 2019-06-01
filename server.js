const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config()

// set up middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(logger('dev'));

// turn on routes
const routes = require('./routes');
app.use(routes);

// set up mongoose connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/stocktracker', {
  useNewUrlParser: true
});


// tell mongoose to use the build in JavaScript Promise object to handle their promises
mongoose.Promise = Promise;

// turn on our server
app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
