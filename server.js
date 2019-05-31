const express = require('express');
const mongoose = require('mongoose');
//const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//app.use(routes);

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/stocktracker';
mongoose.Promise = Promise;
mongoose.connect(mongoUri, {
  useNewUrlParser: true
});


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));