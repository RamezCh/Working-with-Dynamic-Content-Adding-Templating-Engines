const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// Global configuration for the view engine
app.set('view engine', 'pug');
// If your views are in a folder called views, you don't need to set the path
// app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
