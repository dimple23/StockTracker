const express =require('express');
const router =express.Router();

const Stock =require('../../models/stock');

//routes
//to get all data
router.get('/',(req,res)=>{
  Stock.find()
    .sort({date: -1})
    .then(stocks => res.json(stocks));
});


// create a new stock
router.post('/',(req,res)=>{
  const newStock = new Stock({
    code:req.body.code
  });
  newStock.save().then((stock)=> res.json(stock));
});

//delete stock by id
router.delete('/:id',(req,res)=>{
  Stock.findById(req.params.id)
        .then(stock => stock.remove().then(() => res.json({
            deletedStock: req.params.id,
            success: true })))
         .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;