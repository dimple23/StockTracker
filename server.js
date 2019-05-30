const express = require('express');
const mongoose = require('mongoose');
//const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This is for production use only
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/stocktracker';
mongoose.Promise = Promise;
mongoose.connect(mongoUri, {
  useNewUrlParser: true
});


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));