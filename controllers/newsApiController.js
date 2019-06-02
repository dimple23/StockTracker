const axios = require ('axios');
//GET all stocks
require('dotenv').config()

function getAllNews(req, res) {
  console.log ('get all stock news')
  axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-30&sortBy=publishedAt&apiKey=${process.env.newsapi}`)
  .then(function(data){
    console.log(data.data);
    res.json(data.data)
  })
  .catch(function(err){
    console.log(err)
    res.json(err)
  })

}



// export all functions as methods
module.exports = {
  getAllNews
  
}
