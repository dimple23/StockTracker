const axios = require ('axios');
//GET all stocks
require('dotenv').config()

function quandlStock(req, res) {
  console.log ('get all stock in reall')
  axios.get(`https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?api_key=${process.env.quandlapi}`)
  .then(function(data){
    // console.log(data.data);
    res.json(data.data)
  })
  .catch(function(err){
    console.log(err)
    res.json(err)
  })

}



// export all functions as methods
module.exports = {
  quandlStock
  
}
