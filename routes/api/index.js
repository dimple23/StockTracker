const router = require('express').Router();
const stockRoutes = require('./stock_routes');
const stockApi = require('./stock-api');
const newsapi= require('./news-api');
const quandlapi= require('./oldData-api')

router.use('/stocks', stockRoutes);
router.use('/api-stocks', stockApi);
router.use('/api-news', newsapi);
router.use('/api-quandl', quandlapi);

module.exports = router;