
const router = require('express').Router();
const {
  getAllNews,
  getSavednews,
  removenews,
  pushToSavednewsArray
} = require('../../controllers/newsController');
const withAuth = require('../../middleware/authentication');

//define routes
//GET & POST routes 

// router
// .route('/')
// .get(getAllNews)

router
  .route("/")
  .post(withAuth, pushToSavednewsArray)
  .get(withAuth, getSavednews)


  
  // DELETE at /api/books/:id
// router
// .route('/:id')
// .delete(removenews);

// router
// .route('/news')
// .post(getSavednews)

// router
// .route(`/api/news/${newsId}`)
// .delete(removenews)

// router
//   .route('/')
//   .get(getAllNews)
//   .post(getSavednews);

// // GET/PUT/DELETE routes for /api/notes/:id
// router
//   .route('/:id')
//   .get(getnewsById)
//   .delete(removenews);




module.exports=router
