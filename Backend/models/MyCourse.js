const mongoose = require('mongoose');

const MyCourse = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true,
  },
  Course: {
    type: mongoose.Schema.ObjectId,
    ref: 'Course',
    required: true,
  },
  quiz_attempted: [
    {
      quiz: {
        type: mongoose.Schema.ObjectId,
        ref: 'quiz',
      },
      marks: {
        type: Number,
        default: null,
      },
      outOf: {
        type: Number,
        default: null,
      },
    },
  ],
});

module.exports = mongoose.model('MyCourse', MyCourse);
