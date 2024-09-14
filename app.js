const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

// We used engine method because handlebars isn't built-in express
app.engine('hbs', expressHbs()); // extension depends on what we call it here
// Global configuration for the view engine
app.set('view engine', 'hbs'); // was pug instead of handlebars
// If your views are in a folder called views, you don't need to set the path
// app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // passing data doesn't change with engine, just way of usage in template differs
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
