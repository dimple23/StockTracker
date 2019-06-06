const router = require('express').Router();
const stockRoutes = require('./stock_routes');
const stockApi = require('./stock-api');
const newsapi= require('./news-api');
const quandlapi= require('./oldData-api');
//const register = require('./api-rigistration');
//const login = require('./api-login')
const userApi = require("./user-api");

router.use('/stocks', stockRoutes);
router.use('/api-stocks', stockApi);
router.use('/api-news', newsapi);
router.use('/api-quandl', quandlapi);
//router.use('/api-rigistration', register);
//router.use('/api-login', login)
router.use("/user", userApi)

module.exports = router;