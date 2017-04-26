const express = require('express');
const mongoose = require('mongoose');
const index = require('./src/router/index.js');

mongoose.connect('mongodb://localhost:27017/movie');
const app = express();
app.use('/', index);
app.listen(3000, () => {
  console.log('app listen on port 3000.');
});
