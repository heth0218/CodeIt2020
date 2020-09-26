const mongoose = require('mongoose');

const quiz = new mongoose.Schema({
  Title: {
    type: String,
    required: [true, 'Please Add a Quiz Title'],
  },
  Description: {
    type: String,
    required: [true, 'Please Add a Description'],
  },
  Link: {
    type: String,
    required: true,
  },
  Course: {
    type: mongoose.Schema.ObjectId,
    ref: 'Course',
  },
  Publisher: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
  },
});

module.exports = mongoose.model('quiz', quiz);
