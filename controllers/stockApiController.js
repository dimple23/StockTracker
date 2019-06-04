const axios = require ('axios');
//GET all stocks
require('dotenv').config()

function getAlphaStocks(req, res) {
  console.log ('getAllStocks') 
  //
  axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=${process.env.alphaapi}`)
  .then(function(data){
    res.json(data.data)
  })
  .catch(function(err){
    console.log(err)
    res.json(err)
  })

}



// export all functions as methods
module.exports = {
  getAlphaStocks
  
}