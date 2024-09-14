const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  // When using templating engines, you can pass an object with data to the view
  res.render('shop');
});

module.exports = router;
