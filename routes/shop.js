const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  // When using templating engines, you can pass an object with data to the view
  res.render('shop', { products, pageTitle: 'Shop' });
});

module.exports = router;
