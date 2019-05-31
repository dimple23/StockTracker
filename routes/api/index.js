const router = require('express').Router();
const stockRoutes = require('./stock_routes');
const stockApi = require('./stock-api');

router.use('/stocks', stockRoutes);
router.use('/api-stocks', stockApi);

module.exports = router;