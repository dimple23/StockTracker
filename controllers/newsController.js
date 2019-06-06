const { Book } = require('../models');

// this runs when GET /api/books is hit
const getSavedBooks = (req, res) => {
  Book.find({})
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// this runs when POST /api/books is hit
// req.body => {bookId: "", title: "", authors: [], description: "", image: "", link: ""}
const saveBook = (req, res) => {
  Book.create(req.body)
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// this will run when DELETE /api/books/:id is hit
const removeBook = (req, res) => {
  Book.remove({
    _id: req.params.id
  })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

module.exports = {
  getSavedBooks,
  saveBook,
  removeBook
}