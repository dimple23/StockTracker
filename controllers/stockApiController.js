const axios = require ('axios');
//GET all stocks
require('dotenv').config()

function getAllStocks(req, res) {
  console.log ('getAllStocks')
  axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?api_key=${process.env.API-quandl}`)
  .then(function(data){
    console.log(data)
    res.json(data.data)
  })
  .catch(function(err){
    console.log(err)
    res.json(err)
  })

}



// export all functions as methods
module.exports = {
  getAllStocks
  
}