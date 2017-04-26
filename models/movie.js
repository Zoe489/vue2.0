const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  poster: String,
  rating: String,
  introduction: String,
});

module.exports = mongoose.model('Movie', movieSchema);
