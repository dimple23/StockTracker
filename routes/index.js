const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');

router.use('/api', apiRoutes);

// set up wildcard route to serve up react frontend
// THIS IS ONLY USED IN PRODUCTION
if (process.env.NODE_ENV === "production") {
  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

module.exports = router;