const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
// Shared accross all requests to this file
// If you open diff browser, it will show the same products
const products = [];
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
