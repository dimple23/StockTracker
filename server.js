const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cookieParser = require('cookie-parser');


const app = express();
const PORT = process.env.PORT || 3001;

// Setup middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger('dev'));
app.use(cookieParser());

// This is for production use only
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Turn on routes
const routes = require('./routes');
app.use(routes);


// Tell mongoose to use the built in JavaScript Promise object to handle their Promises
mongoose.Promise = Promise;
// Setup mongoose connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/stock-tracker', {
    useNewUrlParser: true 
});


// Turn on our Server
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
