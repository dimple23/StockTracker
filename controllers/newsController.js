const { News, Users } = require('../models');

// this runs when GET /api/books is hit
//const news = require('../models').news;
const handle = require('../utils/promise-handler');


// This function handles the foreach async await problem
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}



// GET savednews Ids '/api/news' for a user
const getSavednews = async (req, res) => {

  console.log("Inside GET '/api/news' -> getSavednews");

  

  const [userErr, userData] = await handle(Users.findById(req._id));

  if (userErr) {
    return res.json(500).json(userErr);
  }

  // Get all the news Ids from 'savednewsArray[]' that are related to the particular user
  const newsIds = userData.savednewsArray;
  // console.log("newsIds: " + newsIds);

  const arrayOfnewsData = [];

  const start = async () => {

    await asyncForEach(newsIds, async (newsId) => {

      const [newsErr, newsData] = await handle(News.findById(newsId));

      if (newsErr) {
        return res.json(500).json(newsErr);
      }

      return arrayOfnewsData.push(newsData);

    })

    // console.log(arrayOfnewsData);
    return res.status(200).json(arrayOfnewsData);
  }

  start();

  return true;
};


async function pushToSavednewsArray(req, res) {

  console.log("Inside pushToSavednewsArray()");

  // Update User table with news id of the current saved news
  const [newsErr, newsData] = await handle(News.create(req.body));

  // console.log("------------------------------");
  // console.log(userData);
  // console.log("------------------------------");

  if (newsErr) {
    return res.json(newsErr);
  }

  return Users.findOneAndUpdate({
      _id: req._id
    }, {
      $push: {
        savednewsArray: newsData._id
      }
    }, {
      new: true
    }).then(userInfo => {
      if (userInfo !== null) {
        return userInfo;
      }

      return res.json(userInfo);
    })
    .catch(err => {
      console.log(err);
      return res.json(err);
    });

}


// // this will run when DELETE /api/books/:id is hit
// const removenews = (req, res) => {
//   News.remove({
//     _id: req.params.id
//   })
//     .then(dbnewsData => res.json(dbnewsData))
//     .catch(err => {
//       console.log(err);
//       res.json(err);
//     });
// };


// DELETE news for a user '/api/news'
const removenews = async (req, res) => {

  console.log("Inside DELETE '/api/api-news' -> deleteSavednews");

  const newsId = req._id;
  const newsIdToBeDeleted = req.body.newsId;
  console.log("req.id: " + newsId);
  console.log("req.body.newsId: " + newsIdToBeDeleted);

// Delete the newsId from 'savednewsArray' in User collection
const [newsErr, newsData] = await handle(News.findById(newsId));

if (newsErr) {
  return res.json(500).json(newsErr);
}

const newSavednewsArray = newsData.newsId;
newSavednewsArray.splice(newSavednewsArray.indexOf(newsIdToBeDeleted), 1);



News.findByIdAndUpdate(newsId, {
  savednewsArray: newSavednewsArray
}, (error, news) => {

  if (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating new data."
    });
  }


  // Delete document from news collection -------------------
  News.findByIdAndRemove(newsIdToBeDeleted, (err, newsData) => {

    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error deleting news."
      });
    }

    console.log("newsData after deletion: ");
    console.log(newsData);

    return res.status(200).json({
      success: true,
      message: "news successfully deleted!"
    });

  });

  return true;
});


}




module.exports = {
  // createNewnews,
  getSavednews,
  removenews,
  pushToSavednewsArray
};
